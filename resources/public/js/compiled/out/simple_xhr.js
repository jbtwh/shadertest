// Compiled by ClojureScript 1.8.51 {}
goog.provide('simple_xhr');
goog.require('cljs.core');
goog.require('goog.structs.Map');
goog.require('goog.json');
goog.require('goog.net.XhrManager');
simple_xhr.xhr_manager = cljs.core.atom.call(null,(new goog.net.XhrManager(undefined,undefined,undefined,undefined,undefined)));
/**
 * Asynchronously make a network request for the resource at url. If
 *   provided via the `:on-success` and `:on-error` keyword arguments, the
 *   appropriate one of `on-success` or `on-error` will be called on
 *   completion. They will be passed a map containing the keys `:id`,
 *   `:body`, `:status`, and `:event`. The entry for `:event` contains an
 *   instance of the `goog.net.XhrManager.Event`.
 * 
 *   Other allowable keyword arguments are `:method`, `:content`, `:headers`,
 *   `:priority`, and `:retries`. `:method` defaults to "GET" and `:retries`
 *   defaults to `0`.
 */
simple_xhr.request = (function simple_xhr$request(var_args){
var args__7671__auto__ = [];
var len__7664__auto___7722 = arguments.length;
var i__7665__auto___7723 = (0);
while(true){
if((i__7665__auto___7723 < len__7664__auto___7722)){
args__7671__auto__.push((arguments[i__7665__auto___7723]));

var G__7724 = (i__7665__auto___7723 + (1));
i__7665__auto___7723 = G__7724;
continue;
} else {
}
break;
}

var argseq__7672__auto__ = ((((0) < args__7671__auto__.length))?(new cljs.core.IndexedSeq(args__7671__auto__.slice((0)),(0),null)):null);
return simple_xhr.request.cljs$core$IFn$_invoke$arity$variadic(argseq__7672__auto__);
});

simple_xhr.request.cljs$core$IFn$_invoke$arity$variadic = (function (p__7719){
var map__7720 = p__7719;
var map__7720__$1 = ((((!((map__7720 == null)))?((((map__7720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7720):map__7720);
var complete = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"complete","complete",-500388775));
var json = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"json","json",1279968570));
var retries = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"retries","retries",1888092808),(0));
var method = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"method","method",55703592),"GET");
var content = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"content","content",15833224));
var complete_after = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"complete-after","complete-after",-1302314327));
var headers = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var success = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var priority = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var id = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var url = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"url","url",276297046));
var error = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var headers__$1 = (cljs.core.truth_(json)?cljs.core.assoc.call(null,headers,"Content-Type","application/json"):headers);
var content__$1 = (cljs.core.truth_(json)?goog.json.serialize(cljs.core.clj__GT_js.call(null,json)):content);
return cljs.core.deref.call(null,simple_xhr.xhr_manager).send((function (){var or__6594__auto__ = id;
if(cljs.core.truth_(or__6594__auto__)){
return or__6594__auto__;
} else {
return url;
}
})(),url,method,content__$1,(function (){var and__6582__auto__ = headers__$1;
if(cljs.core.truth_(and__6582__auto__)){
return (new goog.structs.Map(cljs.core.clj__GT_js.call(null,headers__$1)));
} else {
return and__6582__auto__;
}
})(),priority,((function (headers__$1,content__$1,map__7720,map__7720__$1,complete,json,retries,method,content,complete_after,headers,success,priority,id,url,error){
return (function (e){
var xhrio = e.target;
if(cljs.core.truth_(complete)){
complete.call(null,xhrio);
} else {
}

if(cljs.core.truth_(xhrio.isSuccess())){
if(cljs.core.truth_(success)){
success.call(null,xhrio);
} else {
}
} else {
if(cljs.core.truth_(error)){
error.call(null,xhrio);
} else {
}
}

if(cljs.core.truth_(complete_after)){
return complete_after.call(null,xhrio);
} else {
return null;
}
});})(headers__$1,content__$1,map__7720,map__7720__$1,complete,json,retries,method,content,complete_after,headers,success,priority,id,url,error))
,retries);
});

simple_xhr.request.cljs$lang$maxFixedArity = (0);

simple_xhr.request.cljs$lang$applyTo = (function (seq7718){
return simple_xhr.request.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7718));
});

//# sourceMappingURL=simple_xhr.js.map