(ns ^:figwheel-hooks tetris.core)

(def screen-ctx (-> js/document (.getElementById "screen") (.getContext "2d")))
(def preview-ctx (-> js/document (.getElementById "preview-screen") (.getContext "2d")))
(def level-text (.getElementById js/document "level"))
(def score-text (.getElementById js/document "score"))
(def fps-text (.getElementById js/document "fps"))
(def screen-width 200)
(def screen-height 440)
(def blocks-h 10)
(def blocks-v 24)
(def max-fps 30)
(def block-size (/ screen-width blocks-h))
(def block-border-size 1)
(def rendering-offset [0 -2])
(def score-multiplier 100)
(def level-up-score 400)
(def level-gravity-penalty 30)
(def colors {\c "#34aadc" ;cyan
             \b "#087eff" ;blue
             \o "#ffa01b" ;orange
             \y "#ffd015" ;yellow
             \l "#54da6b" ;lime
             \m "#a081ee" ;magenta
             \r "#ff5349" ;red
             " " nil})
(def controls {37 :left ; ←
               39 :right ; →
               40 :down ; ↓
               38 :rotate ; ↑
               80 :pause ; p
               13 :newgame ; ⏎
               187 :cheat ; = (+)
               })
(def directions {:down [0 1]
                 :right [1 0]
                 :left [-1 0]})
(def initial-state
  {:last-update 0
   :rows (sorted-map)
   :tetrimino nil
   :next-tetrimino nil
   :gravity-interval 500
   :last-gravity 0
   :score 0
   :level 1
   :mode :game
   :debug {:fps 0
           :frames-counter 0
           :last-fps-update 0}})

(defn point
  "A coordinate on a screen or a vector."
  [x y] [x y])

(defn block
  "A colored tetris block."
  [point color] [point color])

(defn rotate-matrix
  "Treats a given sequence m as a matrix. Rotates the matrix
   clockwise."
  [m]
  (->> m reverse (apply map vector) vec))

(defn ascii->vector
  "Given a sequence of characters, returns a vector of corresponding
   color keywords."
  [ascii]
  (->> ascii (replace colors) vec))

(defn ascii-schema->matrix
  "Transforms a given ascii color schema into a color matrix." 
  [schema]
  (->> schema (map ascii->vector) vec))

(defn matrix->blocks
  "Transforms a given color matrix into a vector of tetris blocks."
  [m]
  (->> m
       (map-indexed (fn [y xs] (map-indexed (fn [x color] (block (point x y) color)) xs)))
       (apply concat)
       (remove #(nil? (last %)))
       vec))

(defn tetrimino-type
  "Defines a tetrimino type using a given ascii color schema.
   Precalculates all 4 possible rotations."
  [ascii-schema]
  (let [m (ascii-schema->matrix ascii-schema)
        ms (take 4 (iterate rotate-matrix m))] 
    (->> ms (map matrix->blocks) vec)))

(def tetrimino-types
  (->> [["    "
         "cccc"
         "    "
         "    "]
        ["b  "
         "bbb"
         "   "]
        ["  o"
         "ooo"
         "   "]
        ["yy"
         "yy"]
        [" ll"
         "ll "
         "   "]
        [" m "
         "mmm"
         "   "]
        ["rr "
         " rr"
         "   "]]
       (map tetrimino-type)
       vec))

(defn translate-point
  "Sums a point and a vector."
  [point dv]
  (vec (map + point dv)))

(defn translate-block
  "Translates block’s point by vector dv preserving color."
  [[point color] dv]
  (block (translate-point point dv) color))

(defn translate-blocks
  "Translates all given blocks by vector dv."
  [blocks dv]
  (doall (map #(translate-block % dv) blocks)))

(defn tetrimino->blocks
  "Transforms a given tetrimino into a sequence of blocks at current position."
  [{:keys [spin type pos]}]
  (translate-blocks (nth type spin) pos))

(defn rows->blocks
  "Transforms current rows map into blocks sequence."
  [rows]
  (doall
    (mapcat (fn [[y xs]]
              (map (fn [[x color]]
                     (block (point x y) color)) xs))
            rows)))

(defn tetrimino
  "Defines a tetrimino with given pos, spin and type."
  [pos spin type]
  {:pos pos :spin spin :type type})

(defn rotate-tetrimino
  "Given a tetrimino, returns a tetrimino, rotated clockwise once."
  [{spin :spin :as t}]
  (assoc t :spin (rem (inc spin) 4)))

(defn random-tetrimino
  "Returns a tetrimino of a random type and spin."
  []
  (tetrimino (point 0 0)
             (rand-nth (range 0 4))
             (rand-nth tetrimino-types)))

(defn move-tetrimino
  "Given tetrimino returns a tetrimino moved by one block in given direction."
  [t d]
  (update-in t [:pos] translate-point (get directions d)))

(defn collisions?
  "Checks the current tetrimino for collisions with walls and existing walls."
  [{t :tetrimino rows :rows}]
  (let [blocks (tetrimino->blocks t)]
    (some (fn [[[x y] _]]
            (or (< x 0)
                (>= x blocks-h)
                (< y 0)
                (>= y blocks-v)
                (get-in rows [y x])))
          blocks)))

(defn freeze-block
  "Given the rows map and a block, adds the block to the rows."
  [rows [[x y] color]]
  (assoc-in rows [y x] color))

(defn freeze
  "Makes the current tetrimino a part of the rows."
  [{rows :rows t :tetrimino :as state}]
  (-> state
      (update-in [:rows] (partial reduce freeze-block) (tetrimino->blocks t))
      (assoc :tetrimino nil)))

(defn maybe-rollback
  "In case of collisions, rolls back the current state to a provided
   'safe' state applying a function to it if one is given."
  ([new-state old-state]
   (maybe-rollback new-state old-state identity))
  ([new-state old-state f]
   (if (collisions? new-state)
     (f old-state)
     new-state)))

(defn process-gravity
  "If the gravity interval is due, moves a tetrimino down by one block or freezes it
   in case any collisions are detected."
  [{tetr :tetrimino t :now level :level i :gravity-interval t0 :last-gravity :as state}]
  (if (and tetr (> (- t t0) (- i (* level level-gravity-penalty))))
    (-> state
        (assoc :tetrimino (and tetr (move-tetrimino tetr :down))
               :last-gravity t)
        (maybe-rollback state freeze))
    state))

(defn current-timestamp
  "Returns a current timestamp in milliseconds."
  []
  (.getTime (js/Date.)))

(defn time-left
  "Given a timestamp and a time interval, returns a remaining interval
   since then."
  [ts interval]
  (max 0 (- interval (- (current-timestamp) ts))))

(defn process-time
  "Adds current :now timestamp in milliseconds to a given state map."
  [state]
  (assoc state :now (current-timestamp)))

(defn update-fps
  [{{:keys [last-fps-update fps frames-counter]} :debug :as state}]
  (if (zero? (time-left last-fps-update 1000))
    (update-in state [:debug] assoc :fps frames-counter :frames-counter 0 :last-fps-update (current-timestamp))
    (update-in state [:debug :frames-counter] inc)))

(defn next-tetrimino
  "First swaps :tetrimino and :next-tetrimino map keys, then assigns a random
   tetrimino to the :next-tetrimino key."
  [{t :next-tetrimino :as state}]
  (assoc state
         :tetrimino (assoc (or t (random-tetrimino)) :pos (point 4 0))
         :next-tetrimino (random-tetrimino)))

(defn maybe-next-tetrimino
  "Requests the next tetrimino if the current one is missing."
  [{tetr :tetrimino :as state}]
  (if-not tetr
    (-> state next-tetrimino (maybe-rollback state))
    state))

(defn collapse-rows
  "Collapses completed rows of Tetris blocks."
  [{rows :rows :as state}]
  (->> rows
       (remove (fn [[_ v]] (= blocks-h (count v))))
       reverse
       (map-indexed (fn [i [_ v]] [(- blocks-v i 1) v]))
       (into (empty rows))
       (assoc state :rows)))

(defn score
  "Triggers rows collapse and scores points if there were any completed ones."
  [{old-rows :rows :as state}]
  (let [{new-rows :rows :as new-state} (collapse-rows state)]
    (update-in new-state
               [:score]
               #(+ % (* score-multiplier
                        (- (count old-rows) (count new-rows)))))))

(defn maybe-score
  "Check for completed rows if there is no active tetrimino."
  [{t :tetrimino :as state}]
  (if-not t
    (score state)
    state))

(defn maybe-game-over
  "Stop the game if there is no active tetrimino."
  [{t :tetrimino :as state}]
  (if-not t
    (assoc state :mode :game-over)
    state))

(defn maybe-level-up
  "Sets the current level number according to the current score."
  [{score :score :as state}]
  (assoc state :level (-> (/ score level-up-score) int inc)))

(defn poll-keyboard [queue-atom]
  (let [dequeued (atom (list))]
    (swap!
      queue-atom
      (fn [queue]
        (reset! dequeued queue)
        (empty queue)))
    @dequeued))

(defmulti process-keyboard
  (fn [{mode :mode} key]
    [mode (if (contains? directions key) :move key)]))

(defmethod process-keyboard [:game :move] [state key]
  (-> state
      (update-in [:tetrimino] move-tetrimino key)
      (maybe-rollback state)))

(defmethod process-keyboard [:game :rotate] [state key]
  (-> state
      (update-in [:tetrimino] rotate-tetrimino)
      (maybe-rollback state)))

(defmethod process-keyboard [:game :newgame] [state key]
  initial-state)

(defmethod process-keyboard [:pause :newgame] [state key]
  initial-state)

(defmethod process-keyboard [:game-over :newgame] [state key]
  initial-state)

(defmethod process-keyboard [:pause :cheat] [state key]
  (update state :score + 100))

(defmethod process-keyboard [:game :pause] [state key]
  (assoc state :mode :pause))

(defmethod process-keyboard [:pause :pause] [state key]
  (assoc state :mode :game))

(defmethod process-keyboard :default [state key] state)

(defn handle-key-press
  "Transforms a given key code to a controls keyword and 
   pushes it onto the keyboard queue."
  [queue key-code]
  (if-let [key (get controls key-code)]
    (conj queue (get controls key-code))
    queue))

(defonce keyboard-queue
  (atom (list)))

(defonce game-state
  (atom initial-state))

(defn draw-background
  "Given an HTML Canvas, draws a background of given width and height."
  [ctx color]
  (doto ctx
    (aset "fillStyle" color)
    (.fillRect 0 0 screen-width screen-height)))

(defn draw-block
  "Draws a colored Tetris block using a given HTML Canvas context."
  [ctx offset [point color]]
  (let [[x y] (translate-point point offset)]
    (doto ctx
      (aset "fillStyle" color)
      (.fillRect (+ (* block-size x) block-border-size)
                 (+ (* block-size y) block-border-size)
                 (- block-size (* 2 block-border-size))
                 (- block-size (* 2 block-border-size))))))

(defn draw-blocks
  "Draws a sequence of blocks on HTML canvas."
  ([ctx blocks] (draw-blocks ctx (point 0 0) blocks))
  ([ctx offset blocks]
   (doseq [block blocks]
     (draw-block ctx offset block))))

(defn render-game?
  [old-state new-state]
  (let [f (juxt :tetrimino :rows)]
    (not= (f old-state) (f new-state))))

(defn render-game
  "Draws on the screen."
  [{t :tetrimino
    rows :rows}]
  (draw-background screen-ctx "#2a2f34")
  (when t (draw-blocks screen-ctx rendering-offset (tetrimino->blocks t)))
  (draw-blocks screen-ctx rendering-offset (rows->blocks rows)))

(defn render-bar?
  [old-state {:keys [next-tetrimino] :as new-state}]
  (let [f (juxt :next-tetrimino :score :level)]
    (and next-tetrimino (not= (f old-state) (f new-state)))))

(defn render-bar
  "Renders elements on the right bar."
  [{tn :next-tetrimino score :score level :level {fps :fps} :debug}]
  (draw-background preview-ctx "#3b4045")
  (aset score-text "innerText" score)
  (aset level-text "innerText" level)
  (when fps-text (aset fps-text "innerText" fps))
  (draw-blocks preview-ctx (tetrimino->blocks tn)))

(defn run-game-cycle
  "Puts everything together."
  [{:keys [mode tetrimino] :as state} key-presses]
  (cond-> state
          true (#(reduce process-keyboard % key-presses))
          true process-time
          fps-text update-fps
          (= mode :game) process-gravity
          (= mode :game) maybe-score
          (= mode :game) maybe-level-up
          (= mode :game) maybe-next-tetrimino
          (= mode :game) maybe-game-over))

(defn game-loop
  "Starts the rendering loop using requestAnimationFrame callback."
  [{:keys [last-update] :as old-state}]
  (swap! game-state run-game-cycle (poll-keyboard keyboard-queue))
  (let [new-state @game-state]
    (when (render-game? old-state new-state) (render-game new-state))
    (when (render-bar? old-state new-state) (render-bar new-state))
    (.requestAnimationFrame js/window (partial game-loop (assoc new-state :last-update (current-timestamp))))))

(defn setup []
  (enable-console-print!)

  (.addEventListener js/document "keydown" #(swap! keyboard-queue handle-key-press (.-keyCode %)) false)

  (game-loop @game-state))

(defonce init-block (setup))

