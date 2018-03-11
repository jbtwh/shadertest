(defproject shadertest "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]

                 [environ "1.0.0"]
                 [simple-xhr "0.1.3"]
                 [compojure "1.4.0"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 ]

  :source-paths ["src/clj"]
  :uberjar-name "shadertest-standalone.jar"
  :hooks [environ.leiningen.hooks]
  :min-lein-version "2.7.1"
  :plugins [[lein-cljsbuild "1.1.7"]
            [environ/environ.lein "0.3.1"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "resources/public/js/out" "target" "test/js"]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/compiled/app.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :main "shadertest.core"
                                   :asset-path "/public/js/compiled/out"
                                   :optimizations :none
                                   :pretty-print true}}]}
  profiles {:production {:env {:production true}}})
