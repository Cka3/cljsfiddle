(set-env!
 :source-paths    #{"src/cljs"}
 :resource-paths  #{"resources"}
 :dependencies '[;; boot
                 [adzerk/boot-cljs          "1.7.228-1" :scope "test"]
                 [adzerk/boot-cljs-repl     "0.3.0"     :scope "test"]
                 [adzerk/boot-reload        "0.4.5"     :scope "test"]
                 [pandeiro/boot-http        "0.7.3"     :scope "test"]
                 [com.cemerick/piggieback   "0.2.1"     :scope "test"]
                 [weasel                    "0.7.0"     :scope "test"]
                 [org.clojure/tools.nrepl   "0.2.12"    :scope "test"]

                 ;; cljs
                 [org.clojure/clojurescript "1.7.228"]
                 [reagent                   "0.6.0-alpha"]


                 ;; cider
                 [cider/cider-nrepl         "0.10.2"]
                 [refactor-nrepl            "2.0.0"]])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]])

(deftask build []
  (comp (speak)
        (cljs)))

(deftask run []
  (comp (serve)
        (watch)
        (cljs-repl)
        (reload)
        (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :none :source-map true}
                 reload {:on-jsload 'cljsfiddle.app/init})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))

(deftask cider "CIDER profile"
  []
  (require 'boot.repl)
  (swap! @(resolve 'boot.repl/*default-dependencies*)
         concat '[[org.clojure/tools.nrepl "0.2.12"]
                  [cider/cider-nrepl "0.10.2"]
                  [refactor-nrepl "2.0.0"]])
  (swap! @(resolve 'boot.repl/*default-middleware*)
         concat '[cider.nrepl/cider-middleware
                  refactor-nrepl.middleware/wrap-refactor])
  identity)

(deftask cider-dev
  "Adds cider middleware to the cljs thing."
  []
  (comp (cider)
        (repl)
        (dev)))
