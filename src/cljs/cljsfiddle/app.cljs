(ns cljsfiddle.app
  (:require [reagent.core :as r]
            [cljsfiddle.samples-pane :refer [samples-pane]]
            [cljs.js :refer [eval-str empty-state js-eval]]
            [cljsfiddle.gist :as gist]
            [cemerick.url :as url]
            [cljsfiddle.parinfer-codemirror.editor :refer [start-editor-sync!]]
            [cljsfiddle.state :refer [update-text read-state]]
            [cljsfiddle.parinfer-codemirror.example :as pex]))

(enable-console-print!)
(set! js/COMPILED true)

(defn my-eval [cljs-string]
  (js/console.log "EVAL RECIEVED: " cljs-string)
  (eval-str (empty-state)
            (str "(ns cljs.user)
                  (def atom reagent.core/atom)"
                 cljs-string)
            'dummy-symbol
            {:ns 'cljs.user
             :eval js-eval
             :static-fns true
             :def-emits-var false
             :load (fn [& _] {:lang :clj :source "."})
             :context :statement}
            (fn [{:keys [error value] :as x}]
              (if error
                (do
                  (def *er x)
                  (js/console.log (str error)))
                value))))

(defn run []
  (r/render-component
   (my-eval (read-state))
   (.getElementById js/document "baby-dom-target")))

(defn clear []
  (r/render-component
   (fn [] [:div.ui.item
           [:p "Enter code that returns some hiccup like "
            [:code "[:h1 \"Lemons\"]"]]
           [:h4 "Waiting..."]])
   (.getElementById js/document "baby-dom-target")))

(defn nav-bar []
  [:div.ui.menu
   [:div.item [:img {:src "img/cljs.png"
                     :style {:margin-right "5px"}}] "Fiddle"]
   [:div.item
    [:div.ui.right.labeled.icon.primary.button
     {:on-click run} "Run" [:i.play.icon]]]
   [:div.item
    [:div.ui.right.labeled.icon.primary.button
     {:on-click clear} "Clear" [:i.pause.icon]]]
   [:div.item
    [:div.ui.right.labeled.icon.primary.button
     {:on-click #(gist/save (read-state))}
     "Save"
     [:i.save.icon]]]
   [:div.item.right
    [:span "Love it? Hate it? Let me know: "
     [:a {:href "http://twitter.com/escherize"} "@escherize"]]]
   [:div.item.right
    [:a {:href "https://gitlab.com/escherize/cljsfiddle"} "git"]]])

(def initial-code "The text that starts out in codemirror"
  "[:h2 \"Welcome to CLJS Fiddle.\"]")

(defn code-mirror []
  (r/create-class
   {:reagent-render (fn [] [:div {:style {:border "1px black solid"}}
                            [:textarea#codezone {:default-value (read-state)}]])
    :component-did-mount (fn [_]
                           (pex/create-regular-editor! "codezone" :codemirror-box)
                           (start-editor-sync!)
                           (update-text initial-code))}))
(defn cljs-pane []
  [:div.seven.wide.column
   [:p.ui.dividing.header
    [:span {:style {:font-size "24px"}} "ClojureScript"]
    " "
    [:span {:style {:font-size "12px"
                    :text-align "right"}}
     " (or " [:a {:href "https://reagent-project.github.io/"} "Reagent"] " more accurately!)"]]
   [:div.ui.form
    [:div.field
     [:div {:style {:font-family "monospace"
                    :margin-top "10px"}} "(ns cljsfiddle.app"]
     [:div {:style {:font-family "monospace"
                    :margin-left "10px"
                    :margin-bottom "5px"}}
      "(:require [reagent.core :refer [atom]]))"]
     [code-mirror]]]])


(defn dom-pane []
  [:div.seven.wide.column
   [:h2.ui.dividing.header "Output"]
   [:div#baby-dom-target {:style {:font-size "18px"}}]])

(defn home []
  [:div {:style {:width "100%" :height "100%"}}
   [nav-bar]
   [:div.ui.internally.divided.grid
    [:div.row [samples-pane] [cljs-pane] [dom-pane]]]])

(defn check-load-gist []
  (when-let [gist-id (gist/get-anchor "gist")]
    (gist/load gist-id
               (fn [new-text]
                 (update-text new-text)
                 (run)))))

(defn init []
  (check-load-gist)
  (r/render-component
   [home]
   (.getElementById js/document "container")))
