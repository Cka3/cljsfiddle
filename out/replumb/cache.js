// Compiled by ClojureScript 1.7.122 {}
goog.provide('replumb.cache');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('clojure.string');
replumb.cache.transit_json__GT_cljs = (function replumb$cache$transit_json__GT_cljs(json){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),json);
});
replumb.cache.cljs__GT_transit_json = (function replumb$cache$cljs__GT_transit_json(source){
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),source);
});
replumb.cache.compiled_by_string = (function replumb$cache$compiled_by_string(var_args){
var args33819 = [];
var len__24553__auto___33822 = arguments.length;
var i__24554__auto___33823 = (0);
while(true){
if((i__24554__auto___33823 < len__24553__auto___33822)){
args33819.push((arguments[i__24554__auto___33823]));

var G__33824 = (i__24554__auto___33823 + (1));
i__24554__auto___33823 = G__33824;
continue;
} else {
}
break;
}

var G__33821 = args33819.length;
switch (G__33821) {
case 0:
return replumb.cache.compiled_by_string.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replumb.cache.compiled_by_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33819.length)].join('')));

}
});

replumb.cache.compiled_by_string.cljs$core$IFn$_invoke$arity$0 = (function (){
return replumb.cache.compiled_by_string.call(null,null);
});

replumb.cache.compiled_by_string.cljs$core$IFn$_invoke$arity$1 = (function (eval_opts){
return [cljs.core.str("// Compiled by ClojureScript "),cljs.core.str(cljs.core._STAR_clojurescript_version_STAR_),cljs.core.str((cljs.core.truth_(eval_opts)?[cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,eval_opts))].join(''):null))].join('');
});

replumb.cache.compiled_by_string.cljs$lang$maxFixedArity = 1;
replumb.cache.cache_prefix_for_path = (function replumb$cache$cache_prefix_for_path(var_args){
var args33826 = [];
var len__24553__auto___33829 = arguments.length;
var i__24554__auto___33830 = (0);
while(true){
if((i__24554__auto___33830 < len__24553__auto___33829)){
args33826.push((arguments[i__24554__auto___33830]));

var G__33831 = (i__24554__auto___33830 + (1));
i__24554__auto___33830 = G__33831;
continue;
} else {
}
break;
}

var G__33828 = args33826.length;
switch (G__33828) {
case 2:
return replumb.cache.cache_prefix_for_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.cache.cache_prefix_for_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33826.length)].join('')));

}
});

replumb.cache.cache_prefix_for_path.cljs$core$IFn$_invoke$arity$2 = (function (path,macros){
return [cljs.core.str(cljs.core.munge.call(null,path)),cljs.core.str((cljs.core.truth_(macros)?"$macros":null))].join('');
});

replumb.cache.cache_prefix_for_path.cljs$core$IFn$_invoke$arity$3 = (function (cache_path,path,macros){
return [cljs.core.str(cache_path),cljs.core.str("/"),cljs.core.str(cljs.core.munge.call(null,path)),cljs.core.str((cljs.core.truth_(macros)?"$macros":null))].join('');
});

replumb.cache.cache_prefix_for_path.cljs$lang$maxFixedArity = 3;
replumb.cache.is_macros_QMARK_ = (function replumb$cache$is_macros_QMARK_(cache){
return clojure.string.ends_with_QMARK_.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cache))].join(''),"$macros");
});
replumb.cache.clojurescript_compiler_version = (function replumb$cache$clojurescript_compiler_version(js_source){
return cljs.core.second.call(null,cljs.core.re_find.call(null,/\/\/ Compiled by ClojureScript (\S*)/,js_source));
});
replumb.cache.cached_js_valid_QMARK_ = (function replumb$cache$cached_js_valid_QMARK_(js_source){
return cljs.core._EQ_.call(null,cljs.core._STAR_clojurescript_version_STAR_,replumb.cache.clojurescript_compiler_version.call(null,js_source));
});

//# sourceMappingURL=cache.js.map