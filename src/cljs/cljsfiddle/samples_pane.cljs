(ns cljsfiddle.samples-pane
  (:require [cljsfiddle.db :refer [db]]))

(defn option-button [title fill]
  [:div.item
   [:div.ui.primary.button
    {:on-click (fn [] (reset! db fill)
                 #_(run))}
    title]])

(defn samples-pane []
  [:div.two.wide.column
   [:h2.ui.dividing.header "Samples"]
   [:div.ui.list
    [option-button "Simple h1 Example" "[:h1 \"Lemon\"]"]

    [option-button "Simple h1 Component"
"(defn h1-component [& items]
      [:h1 items])

[h1-component \"Green Eggs\" \" and \" \"ham -\" \"YUM!\"]"]

    [option-button "Single Component"
"(defn simple-component []
  [:div
   [:p \"I am a component!\"]
   [:p.someclass
    \"I have \" [:strong \"bold\"]
    [:span {:style {:color \"red\"}} \" and red \"] \"text.\"]])

[simple-component]"]

    [option-button "Parent Component"
"(defn simple-component []
  [:div
   [:p \"I am a component!\"]
   [:p.someclass
    \"I have \" [:strong \"bold\"]
    [:span {:style {:color \"red\"}} \" and red \"] \"text.\"]])

(defn simple-parent []
  [:div
   [:p \"I include a simple-component.\"]
   [simple-component]])

[simple-parent]"]

    [option-button "Hello Component"

"(defn hello-component [name]
  [:p \"Hello, \" name \"!\"])

(defn say-hello []
  [hello-component \"world\"])

[:div
 [say-hello]
 [hello-component \"Everyone!\"]
 ;; Notice it's perfectly composable:
 [hello-component
  [:span {:style {:color \"orange\"}}
   \"Lemon\"]]]"]

    [option-button "Lister Component"
"(defn lister [items]
  [:ul
   (for [item items]
     ^{:key item} [:li \"Item \" item])])

(defn lister-user []
  [:div
   \"I am the lister-user!\"
   [lister (range 3)]])

[:div
 [:h1 \"Lister:\"]
 [lister [\"Apple\" \"Orange\" \"Grapefruit\"]]
 [:h1 \"Lister User:\"]
 [lister-user]]"]

    [option-button "Counter Component"
"(def click-count (atom 0))

(defn counting-component []
  [:div
   \"The atom \" [:code \"click-count\"] \" has value: \"
   @click-count \". \"
   [:div
    [:input {:type \"button\"
             :value \"Click me!\"
             :on-click #(swap! click-count inc)}]]])

[counting-component]"]

    [option-button "Timer Component"
"(defn timer-component []
  (let [seconds-elapsed (atom 0)]
    (fn []
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div
       \"Seconds Elapsed: \" @seconds-elapsed])))

[timer-component]"]

    [option-button "Form Component"
"(defn atom-input [value]
  [:input {:type \"text\"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn shared-state []
  (let [val (atom \"foo\")]
    (fn []
      [:div
       [:p \"The value is now: \" @val]
       [:p \"Change it here: \" [atom-input val]]])))

[shared-state]"]

    [option-button "BMI Calculator Component"
"(def bmi-data (atom {:height 180 :weight 80}))

(defn calc-bmi []
  (let [{:keys [height weight bmi] :as data} @bmi-data
        h (/ height 100)]
    (if (nil? bmi)
      (assoc data :bmi (/ weight (* h h)))
      (assoc data :weight (* bmi h h)))))

(defn slider [param value min max]
  [:input {:type \"range\" :value value :min min :max max
           :style {:width \"100%\"}
           :on-change (fn [e]
                        (swap! bmi-data assoc param (.-target.value e))
                        (when (not= param :bmi)
                          (swap! bmi-data assoc :bmi nil)))}])

(defn bmi-component []
  (let [{:keys [weight height bmi]} (calc-bmi)
        [color diagnose] (cond
                          (< bmi 18.5) [\"orange\" \"underweight\"]
                          (< bmi 25) [\"inherit\" \"normal\"]
                          (< bmi 30) [\"orange\" \"overweight\"]
                          :else [\"red\" \"obese\"])]
    [:div
     [:h3 \"BMI calculator\"]
     [:div
      \"Height: \" (int height) \"cm\"
      [slider :height height 100 220]]
     [:div
      \"Weight: \" (int weight) \"kg\"
      [slider :weight weight 30 150]]
     [:div
      \"BMI: \" (int bmi) \" \"
      [:span {:style {:color color}} diagnose]
      [slider :bmi bmi 10 50]]]))

[bmi-component]"]

    [option-button "Simple Component"
"(defonce timer (atom (js/Date.)))

(defonce time-color (atom \"#f34\"))

(defonce time-updater
  (js/setInterval #(reset! timer (js/Date.)) 1000))

(defn greeting [message]
  [:h1 message])

(defn clock []
  (let [time-str (-> @timer
                     .toTimeString
                     (clojure.string/split \" \")
                      first)]
    [:span {:style {:color @time-color
                   :font-size \"30px\"}} time-str]))

(defn color-input []
  [:div {:style {:margin-top \"10px\"}}
   \"Time color: \"
   [:input {:type \"text\"
            :value @time-color
            :on-change #(reset! time-color (-> % .-target .-value))}]])

(defn simple-example []
  [:div
   [greeting \"Hello world, it is now:\"]
   [clock]
   [color-input]])

[simple-example]"]]])
