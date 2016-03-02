// Compiled by ClojureScript 1.7.122 {}
goog.provide('replumb.load');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('replumb.cache');
goog.require('clojure.string');
goog.require('replumb.common');
goog.require('cljs.reader');
/**
 * This load function just calls:
 *   (cb {:lang   :js
 *     :source ""})
 */
replumb.load.fake_load_fn_BANG_ = (function replumb$load$fake_load_fn_BANG_(_,cb){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
});
/**
 * Mimics "Resource not found" as it just calls: (cb nil)
 */
replumb.load.no_resource_load_fn_BANG_ = (function replumb$load$no_resource_load_fn_BANG_(_,cb){
return cb.call(null,null);
});
/**
 * Converts a filename to a lang keyword by inspecting the file
 *   extension.
 */
replumb.load.filename__GT_lang = (function replumb$load$filename__GT_lang(file_name){
if(cljs.core.truth_(clojure.string.ends_with_QMARK_.call(null,file_name,".js"))){
return new cljs.core.Keyword(null,"js","js",1768080579);
} else {
return new cljs.core.Keyword(null,"clj","clj",-660495428);
}
});
/**
 * Read the cache source depending on whether is a edn or json file
 */
replumb.load.read_cache_source = (function replumb$load$read_cache_source(cache_path,cache_source){
if(cljs.core.truth_(clojure.string.ends_with_QMARK_.call(null,cache_path,".edn"))){
return cljs.reader.read_string.call(null,cache_source);
} else {
return replumb.cache.transit_json__GT_cljs.call(null,cache_source);
}
});
/**
 * Returns the correct file extensions to try (no dot prefix), following
 *   the cljs.js/*load-fn* docstring.
 */
replumb.load.extensions = (function replumb$load$extensions(var_args){
var args33989 = [];
var len__24553__auto___33992 = arguments.length;
var i__24554__auto___33993 = (0);
while(true){
if((i__24554__auto___33993 < len__24553__auto___33992)){
args33989.push((arguments[i__24554__auto___33993]));

var G__33994 = (i__24554__auto___33993 + (1));
i__24554__auto___33993 = G__33994;
continue;
} else {
}
break;
}

var G__33991 = args33989.length;
switch (G__33991) {
case 0:
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33989.length)].join('')));

}
});

replumb.load.extensions.cljs$core$IFn$_invoke$arity$0 = (function (){
return replumb.load.extensions.call(null,false);
});

replumb.load.extensions.cljs$core$IFn$_invoke$arity$1 = (function (macros){
if(cljs.core.truth_(macros)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clj","cljc"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs","cljc","js"], null);
}
});

replumb.load.extensions.cljs$lang$maxFixedArity = 1;
/**
 * Loop on the file-names using a supplied read-file-fn (fn [file-name
 *   src-cb] ...), calling back cb upon first successful read, otherwise
 *   calling back with nil.
 *   This function does not check whether parameters are nil, please do it
 *   in the caller.
 */
replumb.load.read_files_and_callback_BANG_ = (function replumb$load$read_files_and_callback_BANG_(verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb){
var temp__4423__auto__ = cljs.core.first.call(null,file_names);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Reading",name,"...");
} else {
}

return read_file_fn_BANG_.call(null,name,((function (name,temp__4423__auto__){
return (function (source){
if(cljs.core.truth_(source)){
return load_fn_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),replumb.load.filename__GT_lang.call(null,name),new cljs.core.Keyword(null,"source","source",-433931539),source], null));
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"No source found...");
} else {
}

return replumb$load$read_files_and_callback_BANG_.call(null,verbose_QMARK_,cljs.core.rest.call(null,file_names),read_file_fn_BANG_,load_fn_cb);
}
});})(name,temp__4423__auto__))
);
} else {
return load_fn_cb.call(null,null);
}
});
/**
 * Loops over cached-file-names in order to retrieve them. It needs to find
 *   both the related .js file and .cache.json file, otherwise keeps looping.
 *   If it does not find the cached files calls read-files-and-callback! and
 *   tries to load the unevaluated ones.
 *   This function does not check whether parameters are nil, please do it in
 *   the caller.
 */
replumb.load.read_files_from_cache_and_callback_BANG_ = (function replumb$load$read_files_from_cache_and_callback_BANG_(verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb,cached_file_names){
var temp__4423__auto__ = cljs.core.first.call(null,cached_file_names);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__33997 = temp__4423__auto__;
var js_path = cljs.core.nth.call(null,vec__33997,(0),null);
var cache_path = cljs.core.nth.call(null,vec__33997,(1),null);
var try_next_files_pair = ((function (vec__33997,js_path,cache_path,temp__4423__auto__){
return (function (){
return replumb$load$read_files_from_cache_and_callback_BANG_.call(null,verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb,cljs.core.rest.call(null,cached_file_names));
});})(vec__33997,js_path,cache_path,temp__4423__auto__))
;
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Reading",js_path,"...");
} else {
}

return read_file_fn_BANG_.call(null,js_path,((function (try_next_files_pair,vec__33997,js_path,cache_path,temp__4423__auto__){
return (function (js_source){
if(cljs.core.truth_((function (){var and__23483__auto__ = js_source;
if(cljs.core.truth_(and__23483__auto__)){
return replumb.cache.cached_js_valid_QMARK_.call(null,js_source);
} else {
return and__23483__auto__;
}
})())){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Reading",cache_path,"...");
} else {
}

return read_file_fn_BANG_.call(null,cache_path,((function (try_next_files_pair,vec__33997,js_path,cache_path,temp__4423__auto__){
return (function (cache_source){
if(cljs.core.truth_(cache_source)){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,[cljs.core.str("Retrieved from cache "),cljs.core.str(js_path),cljs.core.str(" and "),cljs.core.str(cache_path)].join(''));
} else {
}

return load_fn_cb.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lang","lang",-1819677104),replumb.load.filename__GT_lang.call(null,js_path),new cljs.core.Keyword(null,"source","source",-433931539),js_source,new cljs.core.Keyword(null,"cache","cache",-1237023054),replumb.load.read_cache_source.call(null,cache_path,cache_source)], null));
} else {
return try_next_files_pair.call(null);
}
});})(try_next_files_pair,vec__33997,js_path,cache_path,temp__4423__auto__))
);
} else {
return try_next_files_pair.call(null);
}
});})(try_next_files_pair,vec__33997,js_path,cache_path,temp__4423__auto__))
);
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Cannot load cache files...");
} else {
}

return replumb.load.read_files_and_callback_BANG_.call(null,verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb);
}
});
/**
 * Produces a sequence of file paths based on src-paths and file-path (a
 *   path already including one or more "/" and an extension).
 */
replumb.load.file_paths = (function replumb$load$file_paths(src_paths,file_path){
var iter__24267__auto__ = (function replumb$load$file_paths_$_iter__34002(s__34003){
return (new cljs.core.LazySeq(null,(function (){
var s__34003__$1 = s__34003;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34003__$1);
if(temp__4425__auto__){
var s__34003__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34003__$2)){
var c__24265__auto__ = cljs.core.chunk_first.call(null,s__34003__$2);
var size__24266__auto__ = cljs.core.count.call(null,c__24265__auto__);
var b__34005 = cljs.core.chunk_buffer.call(null,size__24266__auto__);
if((function (){var i__34004 = (0);
while(true){
if((i__34004 < size__24266__auto__)){
var src_path = cljs.core._nth.call(null,c__24265__auto__,i__34004);
cljs.core.chunk_append.call(null,b__34005,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(file_path)].join(''));

var G__34006 = (i__34004 + (1));
i__34004 = G__34006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34005),replumb$load$file_paths_$_iter__34002.call(null,cljs.core.chunk_rest.call(null,s__34003__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34005),null);
}
} else {
var src_path = cljs.core.first.call(null,s__34003__$2);
return cljs.core.cons.call(null,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(file_path)].join(''),replumb$load$file_paths_$_iter__34002.call(null,cljs.core.rest.call(null,s__34003__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24267__auto__.call(null,src_paths);
});
/**
 * Produces a sequence of file names to try reading from src-paths and
 *   file-path-without-ext (it should already include one or more
 *   "/"). The right order and extension is taken from cljs.js/*load-fn*
 *   docstring and takes into consideration the macros parameter.
 */
replumb.load.file_paths_for_load_fn = (function replumb$load$file_paths_for_load_fn(src_paths,macros,file_path_without_ext){
var iter__24267__auto__ = (function replumb$load$file_paths_for_load_fn_$_iter__34013(s__34014){
return (new cljs.core.LazySeq(null,(function (){
var s__34014__$1 = s__34014;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34014__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var extension = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24263__auto__ = ((function (s__34014__$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function replumb$load$file_paths_for_load_fn_$_iter__34013_$_iter__34015(s__34016){
return (new cljs.core.LazySeq(null,((function (s__34014__$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__34016__$1 = s__34016;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__34016__$1);
if(temp__4425__auto____$1){
var s__34016__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34016__$2)){
var c__24265__auto__ = cljs.core.chunk_first.call(null,s__34016__$2);
var size__24266__auto__ = cljs.core.count.call(null,c__24265__auto__);
var b__34018 = cljs.core.chunk_buffer.call(null,size__24266__auto__);
if((function (){var i__34017 = (0);
while(true){
if((i__34017 < size__24266__auto__)){
var src_path = cljs.core._nth.call(null,c__24265__auto__,i__34017);
cljs.core.chunk_append.call(null,b__34018,[cljs.core.str(src_path),cljs.core.str("."),cljs.core.str(extension)].join(''));

var G__34019 = (i__34017 + (1));
i__34017 = G__34019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34018),replumb$load$file_paths_for_load_fn_$_iter__34013_$_iter__34015.call(null,cljs.core.chunk_rest.call(null,s__34016__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34018),null);
}
} else {
var src_path = cljs.core.first.call(null,s__34016__$2);
return cljs.core.cons.call(null,[cljs.core.str(src_path),cljs.core.str("."),cljs.core.str(extension)].join(''),replumb$load$file_paths_for_load_fn_$_iter__34013_$_iter__34015.call(null,cljs.core.rest.call(null,s__34016__$2)));
}
} else {
return null;
}
break;
}
});})(s__34014__$1,extension,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__34014__$1,extension,xs__4977__auto__,temp__4425__auto__))
;
var fs__24264__auto__ = cljs.core.seq.call(null,iterys__24263__auto__.call(null,replumb.load.file_paths.call(null,src_paths,file_path_without_ext)));
if(fs__24264__auto__){
return cljs.core.concat.call(null,fs__24264__auto__,replumb$load$file_paths_for_load_fn_$_iter__34013.call(null,cljs.core.rest.call(null,s__34014__$1)));
} else {
var G__34020 = cljs.core.rest.call(null,s__34014__$1);
s__34014__$1 = G__34020;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24267__auto__.call(null,replumb.load.extensions.call(null,macros));
});
/**
 * Produces a sequence of pairs containing the file paths to try reading for
 *   evaluation caching.
 *   The first file is always a ".js" file while the second is the cache file
 *   and can be a ".json" or ".edn" file.
 */
replumb.load.cache_file_paths_for_load_fn = (function replumb$load$cache_file_paths_for_load_fn(cache_paths,macros,file_path_without_ext){
var iter__24267__auto__ = (function replumb$load$cache_file_paths_for_load_fn_$_iter__34030(s__34031){
return (new cljs.core.LazySeq(null,(function (){
var s__34031__$1 = s__34031;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34031__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var extension = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24263__auto__ = ((function (s__34031__$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function replumb$load$cache_file_paths_for_load_fn_$_iter__34030_$_iter__34032(s__34033){
return (new cljs.core.LazySeq(null,((function (s__34031__$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__34033__$1 = s__34033;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__34033__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var cache_extension = cljs.core.first.call(null,xs__4977__auto____$1);
var iterys__24263__auto__ = ((function (s__34033__$1,s__34031__$1,cache_extension,xs__4977__auto____$1,temp__4425__auto____$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function replumb$load$cache_file_paths_for_load_fn_$_iter__34030_$_iter__34032_$_iter__34034(s__34035){
return (new cljs.core.LazySeq(null,((function (s__34033__$1,s__34031__$1,cache_extension,xs__4977__auto____$1,temp__4425__auto____$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__34035__$1 = s__34035;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__34035__$1);
if(temp__4425__auto____$2){
var s__34035__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34035__$2)){
var c__24265__auto__ = cljs.core.chunk_first.call(null,s__34035__$2);
var size__24266__auto__ = cljs.core.count.call(null,c__24265__auto__);
var b__34037 = cljs.core.chunk_buffer.call(null,size__24266__auto__);
if((function (){var i__34036 = (0);
while(true){
if((i__34036 < size__24266__auto__)){
var src_path = cljs.core._nth.call(null,c__24265__auto__,i__34036);
cljs.core.chunk_append.call(null,b__34037,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(src_path),cljs.core.str(".js")].join(''),[cljs.core.str(src_path),cljs.core.str(extension),cljs.core.str(cache_extension)].join('')], null));

var G__34038 = (i__34036 + (1));
i__34036 = G__34038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34037),replumb$load$cache_file_paths_for_load_fn_$_iter__34030_$_iter__34032_$_iter__34034.call(null,cljs.core.chunk_rest.call(null,s__34035__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34037),null);
}
} else {
var src_path = cljs.core.first.call(null,s__34035__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(src_path),cljs.core.str(".js")].join(''),[cljs.core.str(src_path),cljs.core.str(extension),cljs.core.str(cache_extension)].join('')], null),replumb$load$cache_file_paths_for_load_fn_$_iter__34030_$_iter__34032_$_iter__34034.call(null,cljs.core.rest.call(null,s__34035__$2)));
}
} else {
return null;
}
break;
}
});})(s__34033__$1,s__34031__$1,cache_extension,xs__4977__auto____$1,temp__4425__auto____$1,extension,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__34033__$1,s__34031__$1,cache_extension,xs__4977__auto____$1,temp__4425__auto____$1,extension,xs__4977__auto__,temp__4425__auto__))
;
var fs__24264__auto__ = cljs.core.seq.call(null,iterys__24263__auto__.call(null,cljs.core.into.call(null,replumb.load.file_paths.call(null,cache_paths,file_path_without_ext),replumb.load.file_paths.call(null,cache_paths,replumb.cache.cache_prefix_for_path.call(null,file_path_without_ext,macros)))));
if(fs__24264__auto__){
return cljs.core.concat.call(null,fs__24264__auto__,replumb$load$cache_file_paths_for_load_fn_$_iter__34030_$_iter__34032.call(null,cljs.core.rest.call(null,s__34033__$1)));
} else {
var G__34039 = cljs.core.rest.call(null,s__34033__$1);
s__34033__$1 = G__34039;
continue;
}
} else {
return null;
}
break;
}
});})(s__34031__$1,extension,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__34031__$1,extension,xs__4977__auto__,temp__4425__auto__))
;
var fs__24264__auto__ = cljs.core.seq.call(null,iterys__24263__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cache.json",".cache.edn"], null)));
if(fs__24264__auto__){
return cljs.core.concat.call(null,fs__24264__auto__,replumb$load$cache_file_paths_for_load_fn_$_iter__34030.call(null,cljs.core.rest.call(null,s__34031__$1)));
} else {
var G__34040 = cljs.core.rest.call(null,s__34031__$1);
s__34031__$1 = G__34040;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24267__auto__.call(null,cljs.core.cons.call(null,"",cljs.core.map.call(null,((function (iter__24267__auto__){
return (function (p1__34021_SHARP_){
return [cljs.core.str("."),cljs.core.str(p1__34021_SHARP_)].join('');
});})(iter__24267__auto__))
,replumb.load.extensions.call(null,macros))));
});
/**
 * Produces a sequence of filenames to try reading crafted for goog
 *   libraries, in the order they should be tried.
 */
replumb.load.file_paths_for_closure = (function replumb$load$file_paths_for_closure(src_paths,goog_path){
var iter__24267__auto__ = (function replumb$load$file_paths_for_closure_$_iter__34045(s__34046){
return (new cljs.core.LazySeq(null,(function (){
var s__34046__$1 = s__34046;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34046__$1);
if(temp__4425__auto__){
var s__34046__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34046__$2)){
var c__24265__auto__ = cljs.core.chunk_first.call(null,s__34046__$2);
var size__24266__auto__ = cljs.core.count.call(null,c__24265__auto__);
var b__34048 = cljs.core.chunk_buffer.call(null,size__24266__auto__);
if((function (){var i__34047 = (0);
while(true){
if((i__34047 < size__24266__auto__)){
var src_path = cljs.core._nth.call(null,c__24265__auto__,i__34047);
cljs.core.chunk_append.call(null,b__34048,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(goog_path),cljs.core.str(".js")].join(''));

var G__34049 = (i__34047 + (1));
i__34047 = G__34049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34048),replumb$load$file_paths_for_closure_$_iter__34045.call(null,cljs.core.chunk_rest.call(null,s__34046__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34048),null);
}
} else {
var src_path = cljs.core.first.call(null,s__34046__$2);
return cljs.core.cons.call(null,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(goog_path),cljs.core.str(".js")].join(''),replumb$load$file_paths_for_closure_$_iter__34045.call(null,cljs.core.rest.call(null,s__34046__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24267__auto__.call(null,src_paths);
});
replumb.load.skip_load_QMARK_ = (function replumb$load$skip_load_QMARK_(p__34050){
var map__34053 = p__34050;
var map__34053__$1 = ((((!((map__34053 == null)))?((((map__34053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34053):map__34053);
var name = cljs.core.get.call(null,map__34053__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__34053__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var or__23495__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null));
if(or__23495__auto__){
return or__23495__auto__;
} else {
var or__23495__auto____$1 = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.analyzer","cljs.analyzer",1897881911,null));
if(or__23495__auto____$1){
return or__23495__auto____$1;
} else {
var or__23495__auto____$2 = (function (){var and__23483__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null));
if(and__23483__auto__){
return macros;
} else {
return and__23483__auto__;
}
})();
if(cljs.core.truth_(or__23495__auto____$2)){
return or__23495__auto____$2;
} else {
var or__23495__auto____$3 = (function (){var and__23483__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null));
if(and__23483__auto__){
return macros;
} else {
return and__23483__auto__;
}
})();
if(cljs.core.truth_(or__23495__auto____$3)){
return or__23495__auto____$3;
} else {
var and__23483__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null));
if(and__23483__auto__){
return macros;
} else {
return and__23483__auto__;
}
}
}
}
}
});

//# sourceMappingURL=load.js.map