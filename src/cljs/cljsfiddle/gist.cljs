(ns cljsfiddle.gist
  (:require [ajax.core :as ajax :refer [GET POST]]
            [cemerick.url :as url]
            [reagent.core :as r]))

(defn load [id atom & [callback]]
  (GET (str "https://api.github.com/gists/" id)
       {:with-credentials? false
        :handler (fn [x]
                   (let [r (->> (get x "files")
                                vals
                                (keep (fn [x] (get x "content")))
                                first)]
                     (reset! atom r)
                     (when callback (callback))))}))

(defn set-url [url]
  (set! (.-location js/window) url))

(defn current-url []
  (url/url (-> js/window .-location .-href)))

(defn current-query [current-url]
  (url/query->map (apply str (rest (:anchor current-url)))))

(defn assoc-anchor [{:keys [anchor] :as url} key value]
  (let [anchor-map (merge (url/query->map anchor)
                          {(name key) (str value)})
        anchor-str (url/map->query anchor-map)]
    (assoc url :anchor anchor-str)))

(defn save [string]
  "Saves a gist, and changes url to url#gist={id}
   where id is the gist id."
  (POST "https://api.github.com/gists"
        {:params {:description "???"
                  :public true
                  :files {"cljsfiddle_save.edn"
                          {"content" string}}}
         :format :json
         :keywords? true
         :handler (fn [resp]
                    (let [id (get resp "id")]
                      (-> (current-url)
                          (assoc-anchor "gist" id)
                          str
                          set-url)))
         :error-handler (fn [x] (js/console.log x))}))



(comment



  (clj->js {:a 1})

  (get "a5ab5722b12408ec0d1b")

  r

  )
