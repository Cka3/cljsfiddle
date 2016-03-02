(ns cljsfiddle.db
  (:require [reagent.core :as r :refer [atom]]))

(defonce db
  (r/atom "[:div
 [:p \"Hit Run to get a random number:\"]
 [:h1 (rand)]]"))
