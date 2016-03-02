(ns cljsfiddle.app
  (:require [reagent.core :as r]
            [cljs.js :refer [eval-str empty-state js-eval]]))
(enable-console-print!)

(defonce cljs-string (r/atom "[:h1 \"Hello World!\"]"))

(declare run clear)

(defn nav-bar []
  [:div.ui.menu
   [:div.item "CLJS Fiddle"]
   [:div.item
    [:div.ui.right.labeled.icon.primary.button
     {:on-click run}
     "Run" [:i.play.icon]]]
   [:div.item
    [:div.ui.right.labeled.icon.primary.button
     {:on-click clear}
     "Clear" [:i.pause.icon]]]])

(defn options-pane []
  [:div.two.wide.column
   [:h2.ui.dividing.header "Options"]
   [:div "options"]
   [:div "will"]
   [:div "go"]
   [:div "here"]])

(defn cljs-pane []
  [:div.seven.wide.column
   [:h2.ui.dividing.header "ClojureScript"]
   [:div.ui.form
    [:div.field
     [:textarea {:value @cljs-string
                 :on-change #(reset! cljs-string (-> % .-target .-value))}]]]])

(defn dom-pane []
  [:div.seven.wide.column
   [:h2.ui.dividing.header "Output"]
   [:div#baby-dom-target]])

(defn home []
  [:div {:style {:width "100%"
                 :min-width "850px"
                 :height "100%"}}
   [nav-bar]
   [:div.ui.internally.celled.grid
    [:div.row {:style {:height "100%"}}
     [options-pane]
     [cljs-pane]
     [dom-pane]]]])

(defn my-eval [cljs-string]
  (eval-str (empty-state)
            (str "(ns cljs.user) " cljs-string)
            'dummy-symbol
            {:ns 'cljs.user
             :eval js-eval
             :dev-emits-var true
             :load (fn [& _] {:lang :clj :source ""})
             :context :statement}
            (fn [{:keys [error value] :as x}]
              (if error
                (js/console.log error)
                value))))

(defn run []
  (r/render-component
   (my-eval @cljs-string)
   (.getElementById js/document "baby-dom-target")))

(defn clear []
  (r/render-component
   (fn [] [:div.ui.item
           [:p "Enter code that returns some hiccup like [:h1 \"Lemons\"]"]
           [:h4 "Waiting..."]])
   (.getElementById js/document "baby-dom-target")))


(defn init []
  (r/render-component
   [home]
   (.getElementById js/document "container")))
