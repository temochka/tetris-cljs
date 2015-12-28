(defproject tetris "0.1.0-SNAPSHOT"
  :description "Tetris implementation in ClojureScript."
  :url "http://tetris.temochka.com/"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]]
  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.10"]
                                  [weasel "0.7.0" :exclusions [org.clojure/clojurescript]]]}}
  :plugins [[lein-cljsbuild "1.1.2"]]
  :clean-targets ^{:protect false} [:target-path
                                    [:cljsbuild :builds :dev :compiler :output-dir] [:cljsbuild :builds :dev :compiler :output-to] [:cljsbuild :builds :prod :compiler :output-to]]
  :cljsbuild {:builds {:dev {:source-paths ["src"]
                             :compiler {:output-to "resources/public/tetris.js"
                                        :main tetris.core
                                        :output-dir "resources/public/out"
                                        :asset-path "/out"
                                        :optimizations :none
                                        :source-map true
                                        :compiler-stats true}}
                       :prod {:source-paths ["src/tetris"]
                              :compiler {:output-to "resources/public/tetris.min.js"
                                         :main tetris.core
                                         :optimizations :advanced
                                         :compiler-stats true
                                         :pretty-print false}}}})
