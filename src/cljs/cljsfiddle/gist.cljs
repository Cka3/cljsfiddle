(ns cljsfiddle.gist
  (:require [ajax.core :as ajax :refer [GET POST]]))


(defn get [id]
  (GET (str "https://api.github.com/gists/" id)
       {:with-credentials? false
        :handler (fn [x] (def r (->> (get x "files")
                                     vals
                                     (keep (fn [x] (get x "content")))
                                     first)))}))

(POST "https://api.github.com/gists"
      {:params (clj->js {:description "desc"
                         :public true
                         :files {"file1.txt" {"content" "String file contents"}}})
       :handler (fn [x] (def rs x))
       :error-handler (fn [x] (def rs x))})





(clj->js {:a 1})


(comment


  (get "a5ab5722b12408ec0d1b")
  r)
