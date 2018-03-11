(ns shadertest.core
  (:require
    [simple-xhr :as sxhr]
    [clojure.string :as string]
    ))

(enable-console-print!)

(def unis ["iTimeDelta" "iFrame" "iChannelTime" "iChannelResolution" "iChannel" "iDate" "iSampleRate"])

(def uris ["4sd3Wj" "4ttSDM" "XsyGRW" "4tX3R4" "4dX3Rn" "XtlGR2" "ldf3DN" "Mss3Wf" "XdXBDM"])

(defn parse [shadertoy]

  (let [error (-> shadertoy :Error)
        renderpass (-> shadertoy :Shader :renderpass)
        code (delay (-> renderpass (nth 0) :code))]
    (if ((complement nil?) error) (throw (js/Error. error)))
    (if (> (count renderpass) 1) (throw (js/Error. "renderpass > 1")))
    (if (> (-> renderpass (nth 0) :inputs count) 0) (throw (js/Error. "inputs > 0")))
    (if (some #(not= -1 (.indexOf @code %)) unis) (throw (js/Error. "code has unsupported uniform")))
    (let [fragColor (re-find #"void mainImage.*vec4 (.*?)[,\s\)]" @code)
          fragCoord (re-find #"void mainImage.*vec2 (.*?)[,\s\)]" @code)]
      (-> @code
          (#(str " uniform float iTime;\n uniform vec2 iResolution;\n uniform vec4 iMouse;\n varying vec2 fragCoord;\n varying vec2 vUv;\n\n" % ))
          (string/replace-first #"void mainImage.*[\r\n]*\{" "void main() {\n vec2 newFragCoord = fragCoord;")
          (string/replace-first (re-pattern (str "=.*?" (nth fragCoord 1) ".*?iResolution.*?;|=.*?iResolution.*?" (nth fragCoord 1) ".*?;")) "= -1.0 + 2.0 *vUv;")
          (string/replace (re-pattern (nth fragColor 1)) "gl_FragColor")
          (string/replace (re-pattern (str (nth fragCoord 1) "(-=|=)")) "newFragCoord$1")
          ;;println
          ))
    ))

(defn get-shadertoy [cb]
  (sxhr/request
    :url (str "https://www.shadertoy.com/api/v1/shaders/" (rand-nth uris) "?key=Bdrtwz")
    :method "GET"
    :complete
    (fn [xhrio]
      (let [content (-> xhrio
                        .getResponseJson
                        (js->clj :keywordize-keys true))]
        (when (.isSuccess xhrio)
          (cb (parse content)))))))

(defn initStats []
  (let [stats (js/Stats.)]
    (.setMode stats 0)
    (set! (.-position (.-style (.-domElement stats))) "absolute")
    (set! (.-left (.-style (.-domElement stats))) "0px")
    (set! (.-top (.-style (.-domElement stats))) "0px")
    (.appendChild (.getElementById js/document "Stats-output") (.-domElement stats))
    stats))

(def stats (initStats))

(def THREE js/THREE)

(def clock (THREE.Clock.))

(def tuniform (clj->js {:iTime       {:type "f" :value 0.1}
                        :iResolution {:type "v2" :value (THREE.Vector2.)}
                        :iMouse      {:type "v4" :value (THREE.Vector4.)}
                        }))

(def w (.-innerWidth js/window))

(def h (- (.-innerHeight js/window) 25))

(set! (.-x (.-value (.-iResolution tuniform))) w)

(set! (.-y (.-value (.-iResolution tuniform))) h)

(def scene (THREE.Scene.))

(def camera (THREE.OrthographicCamera. (/ w -2) (/ w 2) (/ h 2) (/ h -2) 1 1000))

(set! (.-z (.-position camera)) 1000)

(def renderer (THREE.WebGLRenderer. {:antialias true}))

(.setClearColor renderer (THREE.Color. 0x000000 1.0))

(.setSize renderer w h)

(.appendChild (.getElementById js/document "WebGL-output") (.-domElement renderer))

(def mat (THREE.ShaderMaterial. (clj->js {
                                          :uniforms       tuniform
                                          :vertexShader   (.-textContent (.getElementById js/document "vertexshader"))
                                          :fragmentShader (.-textContent (.getElementById js/document (rand-nth ["fragmentshader" "fragmentshader2"])))
                                          })))

(def tobject (THREE.Mesh. (THREE.PlaneGeometry. w h 1 1) mat))

(.add scene tobject)

(defn mainloop []
  (.update stats)
  (.requestAnimationFrame js/window mainloop)
  (set! (.-value (.-iTime tuniform)) (+ (.-value (.-iTime tuniform)) (.getDelta clock)))
  (.render renderer scene camera))

(defn clickc [evt]
  (get-shadertoy (fn [fragshader]
                   (.log js/console fragshader)
                   (set! (.-fragmentShader mat) fragshader)
                   (set! (.-value (.-iTime tuniform)) 0.1)
                   (set! (.-needsUpdate mat) true))))

(set! (.-onclick (.getElementById js/document "change")) clickc)

(defn mousem [evt]
  (set! (.-x (.-value (.-iMouse tuniform))) (.-pageX evt))
  (set! (.-y (.-value (.-iMouse tuniform))) (.-pageY evt)))

(set! (.-onmousemove js/document) mousem)

(defn moused [evt]
  (set! (.-z (.-value (.-iMouse tuniform))) (.-pageX evt))
  (set! (.-w (.-value (.-iMouse tuniform))) (.-pageY evt)))

(set! (.-onmousedown js/document) moused)

(defn mouseu [evt]
  (set! (.-z (.-value (.-iMouse tuniform))) 0)
  (set! (.-w (.-value (.-iMouse tuniform))) 0))

(set! (.-onmouseup js/document) mouseu)

(mainloop)

(defn ^:export main
  []
  )


