(ns shadertest.web
  (:gen-class)
  (:require [compojure.handler :refer [site]]
            [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.util.response :as resp]
            [ring.adapter.jetty :as jetty]
            [ring.util.response :refer [redirect]]
            [environ.core :refer [env]]
            [clojure.java.io :refer [file output-stream input-stream resource]]

            ))


(defn notfound
      []
      {:status  404
       :headers {"Content-Type" "text/plain"}
       :body "404"})

(defroutes app-routes

           (route/resources "/public/")
           (route/not-found (notfound)))


;;(future (start-server :port 7888 :bind "0.0.0.0"))
;;(defonce server (start-server :port 7888 :bind "0.0.0.0"))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (handler/site #'app-routes) {:port port :join? false})))

;; For interactive development:
;; (.stop server)
;; (def server (-main))