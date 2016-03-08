(ns cljsfiddle.state
  "State of the editors on our page.")

;; map of editor key -> editor state
(defonce state (atom {}))

(def empty-editor-state
  {:text ""             ;; text of the editor
   :mode :indent-mode   ;; editor mode (:indent-mode, :paren-mode)
   :cm nil              ;; the CodeMirror instance
   :watcher nil})       ;; the ScrollMonitor instance


(defn update-state-text [state new-text]
  (assoc-in state [:indent-mode :text] new-text))

(defn update-text [new-text]
  (swap! state #(update-state-text % new-text)))

(defn read-state []
  (-> @state :indent-mode :text))
