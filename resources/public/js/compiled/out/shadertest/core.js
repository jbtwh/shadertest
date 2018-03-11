// Compiled by ClojureScript 1.8.51 {}
goog.provide('shadertest.core');
goog.require('cljs.core');
goog.require('simple_xhr');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
shadertest.core.unis = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["iTimeDelta","iFrame","iChannelTime","iChannelResolution","iChannel","iDate","iSampleRate"], null);
shadertest.core.uris = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4sd3Wj","4ttSDM","XsyGRW","4tX3R4","4dX3Rn","XtlGR2","ldf3DN","Mss3Wf","XdXBDM"], null);
shadertest.core.parse = (function shadertest$core$parse(shadertoy){
var error = new cljs.core.Keyword(null,"Error","Error",961773722).cljs$core$IFn$_invoke$arity$1(shadertoy);
var renderpass = new cljs.core.Keyword(null,"renderpass","renderpass",1468921350).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Shader","Shader",44842890).cljs$core$IFn$_invoke$arity$1(shadertoy));
var code = (new cljs.core.Delay(((function (error,renderpass){
return (function (){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,renderpass,(0)));
});})(error,renderpass))
,null));
if(cljs.core.truth_(cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,error))){
throw (new Error(error));
} else {
}

if((cljs.core.count.call(null,renderpass) > (1))){
throw (new Error("renderpass > 1"));
} else {
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,renderpass,(0)))) > (0))){
throw (new Error("inputs > 0"));
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,((function (error,renderpass,code){
return (function (p1__7776_SHARP_){
return cljs.core.not_EQ_.call(null,(-1),cljs.core.deref.call(null,code).indexOf(p1__7776_SHARP_));
});})(error,renderpass,code))
,shadertest.core.unis))){
throw (new Error("code has unsupported uniform"));
} else {
}

var fragColor = cljs.core.re_find.call(null,/void mainImage.*vec4 (.*?)[,\s\)]/,cljs.core.deref.call(null,code));
var fragCoord = cljs.core.re_find.call(null,/void mainImage.*vec2 (.*?)[,\s\)]/,cljs.core.deref.call(null,code));
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,((function (fragColor,fragCoord,error,renderpass,code){
return (function (p1__7777_SHARP_){
return [cljs.core.str(" uniform float iTime;\n uniform vec2 iResolution;\n uniform vec4 iMouse;\n varying vec2 fragCoord;\n varying vec2 vUv;\n\n"),cljs.core.str(p1__7777_SHARP_)].join('');
});})(fragColor,fragCoord,error,renderpass,code))
.call(null,cljs.core.deref.call(null,code)),/void mainImage.*[\r\n]*\{/,"void main() {\n vec2 newFragCoord = fragCoord;"),cljs.core.re_pattern.call(null,[cljs.core.str("=.*?"),cljs.core.str(cljs.core.nth.call(null,fragCoord,(1))),cljs.core.str(".*?iResolution.*?;|=.*?iResolution.*?"),cljs.core.str(cljs.core.nth.call(null,fragCoord,(1))),cljs.core.str(".*?;")].join('')),"= -1.0 + 2.0 *vUv;"),cljs.core.re_pattern.call(null,cljs.core.nth.call(null,fragColor,(1))),"gl_FragColor"),cljs.core.re_pattern.call(null,[cljs.core.str(cljs.core.nth.call(null,fragCoord,(1))),cljs.core.str("(-=|=)")].join('')),"newFragCoord$1");
});
shadertest.core.get_shadertoy = (function shadertest$core$get_shadertoy(cb){
return simple_xhr.request.call(null,new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("https://www.shadertoy.com/api/v1/shaders/"),cljs.core.str(cljs.core.rand_nth.call(null,shadertest.core.uris)),cljs.core.str("?key=Bdrtwz")].join(''),new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"complete","complete",-500388775),(function (xhrio){
var content = cljs.core.js__GT_clj.call(null,xhrio.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(xhrio.isSuccess())){
return cb.call(null,shadertest.core.parse.call(null,content));
} else {
return null;
}
}));
});
shadertest.core.initStats = (function shadertest$core$initStats(){
var stats = (new Stats());
stats.setMode((0));

stats.domElement.style.position = "absolute";

stats.domElement.style.left = "0px";

stats.domElement.style.top = "0px";

document.getElementById("Stats-output").appendChild(stats.domElement);

return stats;
});
shadertest.core.stats = shadertest.core.initStats.call(null);
shadertest.core.THREE = THREE;
shadertest.core.clock = (new shadertest.core.THREE.Clock());
shadertest.core.tuniform = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"iTime","iTime",-640623970),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"f",new cljs.core.Keyword(null,"value","value",305978217),0.1], null),new cljs.core.Keyword(null,"iResolution","iResolution",366005394),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"v2",new cljs.core.Keyword(null,"value","value",305978217),(new shadertest.core.THREE.Vector2())], null),new cljs.core.Keyword(null,"iMouse","iMouse",-1737008150),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"v4",new cljs.core.Keyword(null,"value","value",305978217),(new shadertest.core.THREE.Vector4())], null)], null));
shadertest.core.w = window.innerWidth;
shadertest.core.h = (window.innerHeight - (25));
shadertest.core.tuniform.iResolution.value.x = shadertest.core.w;
shadertest.core.tuniform.iResolution.value.y = shadertest.core.h;
shadertest.core.scene = (new shadertest.core.THREE.Scene());
shadertest.core.camera = (new shadertest.core.THREE.OrthographicCamera((shadertest.core.w / (-2)),(shadertest.core.w / (2)),(shadertest.core.h / (2)),(shadertest.core.h / (-2)),(1),(1000)));
shadertest.core.camera.position.z = (1000);
shadertest.core.renderer = (new shadertest.core.THREE.WebGLRenderer(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true], null)));
shadertest.core.renderer.setClearColor((new shadertest.core.THREE.Color((0),1.0)));
shadertest.core.renderer.setSize(shadertest.core.w,shadertest.core.h);
document.getElementById("WebGL-output").appendChild(shadertest.core.renderer.domElement);
shadertest.core.mat = (new shadertest.core.THREE.ShaderMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),shadertest.core.tuniform,new cljs.core.Keyword(null,"vertexShader","vertexShader",-668531773),document.getElementById("vertexshader").textContent,new cljs.core.Keyword(null,"fragmentShader","fragmentShader",1579642943),document.getElementById(cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fragmentshader","fragmentshader2"], null))).textContent], null))));
shadertest.core.tobject = (new shadertest.core.THREE.Mesh((new shadertest.core.THREE.PlaneGeometry(shadertest.core.w,shadertest.core.h,(1),(1))),shadertest.core.mat));
shadertest.core.scene.add(shadertest.core.tobject);
shadertest.core.mainloop = (function shadertest$core$mainloop(){
shadertest.core.stats.update();

window.requestAnimationFrame(shadertest$core$mainloop);

shadertest.core.tuniform.iTime.value = (shadertest.core.tuniform.iTime.value + shadertest.core.clock.getDelta());

return shadertest.core.renderer.render(shadertest.core.scene,shadertest.core.camera);
});
shadertest.core.clickc = (function shadertest$core$clickc(evt){
return shadertest.core.get_shadertoy.call(null,(function (fragshader){
console.log(fragshader);

shadertest.core.mat.fragmentShader = fragshader;

shadertest.core.tuniform.iTime.value = 0.1;

return shadertest.core.mat.needsUpdate = true;
}));
});
document.getElementById("change").onclick = shadertest.core.clickc;
shadertest.core.mousem = (function shadertest$core$mousem(evt){
shadertest.core.tuniform.iMouse.value.x = evt.pageX;

return shadertest.core.tuniform.iMouse.value.y = evt.pageY;
});
document.onmousemove = shadertest.core.mousem;
shadertest.core.moused = (function shadertest$core$moused(evt){
shadertest.core.tuniform.iMouse.value.z = evt.pageX;

return shadertest.core.tuniform.iMouse.value.w = evt.pageY;
});
document.onmousedown = shadertest.core.moused;
shadertest.core.mouseu = (function shadertest$core$mouseu(evt){
shadertest.core.tuniform.iMouse.value.z = (0);

return shadertest.core.tuniform.iMouse.value.w = (0);
});
document.onmouseup = shadertest.core.mouseu;
shadertest.core.mainloop.call(null);
shadertest.core.main = (function shadertest$core$main(){
return null;
});
goog.exportSymbol('shadertest.core.main', shadertest.core.main);

//# sourceMappingURL=core.js.map