(ns tetris.core
  (:require [cljs.core.async :refer [chan >! <! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(def screen (.getElementById js/document "screen"))
(def screen-ctx (.getContext screen "2d"))
(def preview-screen (.getElementById js/document "preview-screen"))
(def preview-screen-ctx (.getContext preview-screen "2d"))
(def level-text (.getElementById js/document "level"))
(def score-text (.getElementById js/document "score"))
(def screen-width 200)
(def screen-height 440)
(def blocks-h 10)
(def blocks-v 24)
(def rendering-offset [0 -2])
(def spawn-point [4 0])
(def block-size (/ screen-width blocks-h))
(def block-border-size 1)
(def score-multiplier 100)
(def level-up-score 400)
(def level-gravity-penalty 30)
(def colors {\c "#34aadc"
             \b "#087eff"
             \o "#ffa01b"
             \y "#ffd015"
             \l "#54da6b"
             \m "#a081ee"
             \r "#ff5349"
             " " nil})
(def controls {37 :left
               39 :right
               40 :down
               38 :rotate})
(def directions {:down [0 1]
                 :right [1 0]
                 :left [-1 0]})

(defn point [x y]
  [x y])

(defn block [point color]
  [point color])

(defn rotate-matrix [m]
  (->> m reverse (apply map vector) vec))

(defn ascii->vector [ascii]
  (->> ascii (replace colors) vec))

(defn ascii-schema->matrix [schema]
  (->> schema (map ascii->vector) vec))

(defn matrix->blocks [m]
  (->> m
       (map-indexed (fn [y xs] (map-indexed (fn [x color] (block (point x y) color)) xs)))
       (apply concat)
       (remove #(nil? (last %)))
       vec))

(defn tetrimino-type [ascii-schema]
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
  [point dv]
  (vec (map + point dv)))

(defn translate-block
  [[point color] dv]
  (block (translate-point point dv) color))

(defn translate-blocks [blocks dv]
  (doall (map #(translate-block % dv) blocks)))

(defn tetrimino->blocks
  [{:keys [spin type pos]}]
  (translate-blocks (nth type spin) pos))

(defn rows->blocks [rows]
  (doall
    (mapcat (fn [[y xs]]
              (map (fn [[x color]]
                     (block (point x y) color)) xs))
            rows)))

(defn block->point [block] (first block))

(defn tetrimino->points
  [t]
  (-> t tetrimino->blocks (map block->point) doall))

(defn draw-block [ctx offset [point color]]
  (let [[x y] (translate-point point offset)]
    (doto ctx
      (aset "fillStyle" color)
      (.fillRect (+ (* block-size x) block-border-size)
                 (+ (* block-size y) block-border-size)
                 (- block-size (* 2 block-border-size))
                 (- block-size (* 2 block-border-size))))))

(defn tetrimino [pos spin type]
  {:pos pos :spin spin :type type})

(defn rotate-tetrimino [{spin :spin :as t}]
  (assoc t :spin (rem (inc spin) 4)))

(defn draw-blocks
  ([ctx blocks] (draw-blocks ctx (point 0 0) blocks))
  ([ctx offset blocks]
   (doseq [block blocks]
     (draw-block ctx offset block))))

(defn random-tetrimino []
  (tetrimino (point 0 0)
             (rand-nth (range 0 4))
             (rand-nth tetrimino-types)))

(defn move-tetrimino [t d]
  (update-in t [:pos] translate-point (get directions d)))

(defn collisions? [{t :tetrimino rows :rows}]
  (let [points (map block->point (tetrimino->blocks t))]
    (some (fn [[x y]]
            (or (< x 0)
                (>= x blocks-h)
                (< y 0)
                (>= y blocks-v)
                (get-in rows [y x])))
          points)))

(defn freeze-block [rows [[x y] color]]
  (assoc-in rows [y x] color))

(defn freeze [{rows :rows t :tetrimino :as state}]
  (-> state
      (update-in [:rows] (partial reduce freeze-block) (tetrimino->blocks t))
      (assoc :tetrimino nil)))

(defn maybe-rollback
  ([new-state old-state]
   (maybe-rollback new-state old-state identity))
  ([new-state old-state f]
   (if (collisions? new-state)
     (f old-state)
     new-state)))

(defn process-gravity [{tetr :tetrimino
                        t :now
                        level :level
                        i :gravity-interval
                        t0 :last-gravity
                        :as state}]
  (if (and tetr (> (- t t0) (- i (* level level-gravity-penalty))))
    (-> state
        (assoc :tetrimino (and tetr (move-tetrimino tetr :down))
               :last-gravity t)
        (maybe-rollback state freeze))
    state))

(defn process-time [state]
  (assoc state :now (.getTime (js/Date.))))

(defn draw-background [ctx color]
  (doto ctx
    (aset "fillStyle" color)
    (.fillRect 0 0 screen-width screen-height)))

(defn next-tetrimino [{t :next-tetrimino :as state}]
  (assoc state
         :tetrimino (assoc t :pos spawn-point)
         :next-tetrimino (random-tetrimino)))

(defn maybe-next-tetrimino [{tetr :tetrimino :as state}]
  (if-not tetr
    (-> state next-tetrimino (maybe-rollback state))
    state))

(defn release-keyboard [state]
  (assoc state :pressed-key nil))

(defn collapse-rows [{rows :rows :as state}]
  (->> rows
       (remove (fn [[_ v]] (= blocks-h (count v))))
       reverse
       (map-indexed (fn [i [_ v]] [(- blocks-v i 1) v]))
       (into (empty rows))
       (assoc state :rows)))

(defn score [{old-rows :rows :as state}]
  (let [{new-rows :rows :as new-state} (collapse-rows state)]
    (update-in new-state
               [:score]
               #(+ % (* score-multiplier
                        (- (count old-rows) (count new-rows)))))))

(defn maybe-score [{t :tetrimino :as state}]
  (if-not t
    (score state)
    state))

(defn maybe-game-over [{t :tetrimino :as state}]
  (if-not t
    (assoc state :running? false)
    state))

(defn maybe-level-up [{score :score :as state}]
  (assoc state :level (-> (/ score level-up-score) int inc)))

(defmulti process-keyboard :pressed-key)

(defmethod process-keyboard :left [state]
  (-> state
      (update-in [:tetrimino] move-tetrimino :left)
      (maybe-rollback state)))

(defmethod process-keyboard :right [state]
  (-> state
      (update-in [:tetrimino] move-tetrimino :right)
      (maybe-rollback state)))

(defmethod process-keyboard :rotate [state]
  (-> state
      (update-in [:tetrimino] rotate-tetrimino)
      (maybe-rollback state)))

(defmethod process-keyboard :down [state]
  (-> state
      (update-in [:tetrimino] move-tetrimino :down)
      (maybe-rollback state)))

(defmethod process-keyboard :default [state] state)

(def game-state (atom {:rows (sorted-map)
                       :tetrimino nil
                       :next-tetrimino (random-tetrimino)
                       :gravity-interval 500
                       :score 0
                       :level 1
                       :running? true}))

(defn render [{t :tetrimino
               tn :next-tetrimino
               rows :rows
               score :score
               level :level}]
  (aset score-text "innerText" score)
  (aset level-text "innerText" level)
  (draw-background screen-ctx "#2a2f34")
  (draw-background preview-screen-ctx "#3b4045")
  (when t (draw-blocks screen-ctx rendering-offset (tetrimino->blocks t)))
  (when tn (draw-blocks preview-screen-ctx (tetrimino->blocks tn)))
  (draw-blocks screen-ctx rendering-offset (rows->blocks rows)))

(defn render-loop []
  (render @game-state)
  (.requestAnimationFrame js/window render-loop))

(defn handle-key-press [state key-code]
  (assoc state :pressed-key (get controls key-code)))

(defn run-game-cycle [{:keys [running? tetrimino] :as state}]
  (if running?
    (-> state
        process-time
        process-keyboard
        release-keyboard
        process-gravity
        maybe-score
        maybe-level-up
        maybe-next-tetrimino
        maybe-game-over)
    state))

(.addEventListener js/document "keydown" #(swap! game-state handle-key-press (.-keyCode %)) false)
(render-loop)
(go-loop [_ nil]
  (swap! game-state run-game-cycle)
  (recur (<! (timeout 10))))

