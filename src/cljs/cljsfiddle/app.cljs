(ns cljsfiddle.app
  (:require [reagent.core :as reagent :refer [atom]]
            [replumb.core :as replumb]))

(defn some-component []
  [:div
   [:h3 "I am a component!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red"]
    " text."]])

(defn calling-component []
  [:div "Parent component"
   [some-component]])

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

(defonce cljs-string (atom "[:h1 \"Hello World!\"]"))

(defn cljs-pane []
  [:div.seven.wide.column
   [:h2.ui.dividing.header "ClojureScript"]
   [:div.ui.form
    [:div.field
     [:textarea {:value @cljs-string
                 :on-change #(reset! cljs-string (-> % .-target .-value))}]]]])

(defn dom-pane []
  [:div.seven.wide.column
   [:h2.ui.dividing.header "DOM"]
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

(defn run []
  (reagent/render-component
   (fn [] [:h2 "hi"])
   (.getElementById js/document "baby-dom-target")))

(defn clear []
  (reagent/render-component
   (fn [] [:div ""])
   (.getElementById js/document "baby-dom-target")))

(defn init []
  (reagent/render-component [home]
                            (.getElementById js/document "container")))
