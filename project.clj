(defproject tetris "0.1.0-SNAPSHOT"
  :description "Tetris implementation in ClojureScript."
  :url "http://tetris.temochka.com/"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2342"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]]
  :plugins [[lein-cljsbuild "1.0.3"]
            [com.cemerick/austin "0.1.5"]]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/tetris.js"
                                   :output-dir "resources/public/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "prod"
                        :source-paths ["src/tetris"]
                        :compiler {:output-to "resources/public/tetris.min.js"
                                   :optimizations :advanced
                                   :pretty-print false}}]})
