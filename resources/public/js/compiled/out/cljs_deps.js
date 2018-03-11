goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../simple_xhr.js", ['simple_xhr'], ['goog.net.XhrManager', 'goog.json', 'goog.structs.Map', 'cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../shadertest/core.js", ['shadertest.core'], ['cljs.core', 'simple_xhr', 'clojure.string']);
