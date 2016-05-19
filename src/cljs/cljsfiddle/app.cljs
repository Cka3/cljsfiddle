(ns cljsfiddle.app
  (:require [reagent.core :as r]
            [re-com.core :as re-com]
            [cljsfiddle.samples-pane :refer [samples-pane]]
            [cljs.js :refer [eval-str empty-state js-eval]]
            [cljsfiddle.gist :as gist]
            [cemerick.url :as url]
            [cljsfiddle.parinfer-codemirror.editor :refer [start-editor-sync!]]
            [cljsfiddle.state :refer [state update-text read-state]]
            [cljsfiddle.parinfer-codemirror.example :as pex]))

(enable-console-print!)
(set! js/COMPILED true)

(defn my-eval [cljs-string]
  (js/console.log "EVAL RECIEVED: " cljs-string)
  (eval-str (empty-state)
            (str "(ns cljs.user
                    (:refer-clojure :exclude [atom])
                    (:require [reagent.core]
                              [re-com.core :as re-com]))

                  (def atom reagent.core/atom)"
                 (or (not-empty cljs-string)
                     "[:div]"))
            'dummy-symbol
            {:ns 'cljs.user
             :eval js-eval
             :static-fns true
             :def-emits-var false
             :load (fn [name cb] (cb {:lang :clj :source ""}))
             :context :statement}
            (fn [{:keys [error value] :as x}]
              (if error
                (do
                  (def *er x)
                  (js/console.log (str error)))
                value))))

(defn clear []
  (r/render-component
   (fn [] [:div.ui.item
           [:p "Enter code that returns some hiccup like "
            [:code "[:h1 \"Lemons\"]"]]
           [:h4 "Waiting..."]])
   (.getElementById js/document "baby-dom-target")))

(defn run []
  (clear)
  (r/render-component
   (my-eval (read-state))
   (.getElementById js/document "baby-dom-target")))

(defn code-mirror []
  (r/create-class
   {:reagent-render (fn [] [:div
                            {:style {:border "1px solid #9A9A9A"}}
                            [:textarea#codezone {:default-value (read-state)}]])
    :component-did-mount (fn [_]
                           (pex/create-editor! "codezone" :codemirror-box)
                           (start-editor-sync!))}))


(defn fake-requires []
  [:div.cm-s-default.CodeMirror
   {:style {:height "auto"
            :border "none"
            :margin-bottom "10px"}}
   [:div.CodeMirror-code

   [:pre.CodeMirror-line
    [:span {:style {:padding-right "0.1px"}}
     [:span.cm-bracket "("]
     [:span.cm-keyword "ns"] " " [:span.cm-def "cljs.user"]]]


    [:pre.CodeMirror-line
     [:span {:style {:padding-right "0.1px"}}
      "  "
      [:span.cm-bracket "("]
      [:span.cm-atom ":refer-clojure"]
      " "
      [:span.cm-atom ":exclude"]
      " "
      [:span.cm-bracket "["]
      [:span.cm-variable "atom"]
      [:span.cm-bracket "]"]
      [:span.cm-bracket.cm-eol ")"]]]


      [:pre.CodeMirror-line
       [:span {:style {:padding-right "0.1px"}}
        "  "
        [:span.cm-bracket "("]
        [:span.cm-atom ":require"]
        " "
        [:span.cm-bracket "["]
        [:span.cm-variable "reagent.core"]
        [:span.cm-bracket "]"]
        [:span.cm-bracket.cm-eol ")"]]]

      [:pre.CodeMirror-line
         [:span {:style {:padding-right "0.1px"}}
          "  "
          [:span.cm-bracket ""]
          [:span.cm-atom "         "]
          " "
          [:span.cm-bracket "["]
          [:span.cm-variable "re-com.core"]
          " "
          [:span.cm-atom ":as"]
          " "
          [:span.cm-variable "re-com"]
          [:span.cm-bracket "]"]
          [:span.cm-bracket.cm-eol ")"]]]
        ]])

(defn cljs-pane []
  [:div.seven.wide.column
   [:h2 "ClojureScript"
    [:div.ui.right.labeled.icon.primary.button
     {:style {:margin-left "10px"} :on-click run}
     "Run" [:i.play.icon]]
    [:div#save-btn.ui.right.labeled.icon.button
     {:style {:margin-left "10px"} :on-click #(gist/save (read-state))}
     "Save" [:i.save.icon]]]
   [:hr.heading]
   ;; cljs 'require' stuff:
   [:div.ui.form
    [fake-requires]
    [code-mirror]]])

(defn dom-pane []
  [:div.seven.wide.column
   [:h2 "Output"
    [:div.ui.right.labeled.icon.button
     {:style {:margin-left "30px"} :on-click clear}
     "Clear" [:i.erase.icon]]]
   [:hr.heading]
   [:div#baby-dom-target {:style {:font-size "1.3em"}}]])

(defn header []
  [:header
   [:div.inner-wrapper
    [:h1
     [:img {:src "img/cljs-ring.svg" :alt "CLJS Ring"}]
     " cljsfiddle" [:span.tld ".com"]]
    #_[:div.right
       [:a {:href "#"}
        [:i.help.icon] "Help"]
       [:a {:href "#"}
        [:i.send.icon] "Share"]]]])

(defn footer []
  [:footer
   [:div.inner-wrapper
    [:p "cljsfiddle.com is an "
     [:a {:href "https://gitlab.com/escherize/cljsfiddle/"} "open source project"]
     " by "
     [:a {:href "https://twitter.com/escherize"} "@escherize"]]
    [:p "feedback welcome :)"]]])

(defn home []
  [:div {:style {:width "100%" :height "100%"}}
   [header]
   [:div.ui.fluid.container
    {:style {:padding "20px"
             :min-height "100%"
             :background-color "#fff"}}
    [:div.ui.grid
     [:div.row
      [samples-pane run]
      [cljs-pane]
      [dom-pane]]]]
   [footer]])

(defn check-load-gist []
  "Fuck why does this work?"
  (let [gist-id (or (gist/get-anchor "gist")
                    "7b1f4ec06e90cc683ebb")]
    (gist/load gist-id (fn [new-text]
                         (update-text new-text)
                         (run)))))

(defn toggle-loading []
  (.fadeOut (js/$ "#loadingContainer") "fast"
            (fn [] (.fadeIn (js/$ "#appContainer") "fast"))))

(defn init []
  (check-load-gist)
  (r/render-component
   [home]
   (.getElementById js/document "appContainer"))
  (toggle-loading)
  (run))
