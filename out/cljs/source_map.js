// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__29233){
var vec__29234 = p__29233;
var i = cljs.core.nth.call(null,vec__29234,(0),null);
var v = cljs.core.nth.call(null,vec__29234,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__29236 = seg;
var gcol = cljs.core.nth.call(null,vec__29236,(0),null);
var source = cljs.core.nth.call(null,vec__29236,(1),null);
var line = cljs.core.nth.call(null,vec__29236,(2),null);
var col = cljs.core.nth.call(null,vec__29236,(3),null);
var name = cljs.core.nth.call(null,vec__29236,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__29239 = seg;
var gcol = cljs.core.nth.call(null,vec__29239,(0),null);
var source = cljs.core.nth.call(null,vec__29239,(1),null);
var line = cljs.core.nth.call(null,vec__29239,(2),null);
var col = cljs.core.nth.call(null,vec__29239,(3),null);
var name = cljs.core.nth.call(null,vec__29239,(4),null);
var vec__29240 = relseg;
var rgcol = cljs.core.nth.call(null,vec__29240,(0),null);
var rsource = cljs.core.nth.call(null,vec__29240,(1),null);
var rline = cljs.core.nth.call(null,vec__29240,(2),null);
var rcol = cljs.core.nth.call(null,vec__29240,(3),null);
var rname = cljs.core.nth.call(null,vec__29240,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__23495__auto__ = source;
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__23495__auto__ = line;
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__23495__auto__ = col;
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__23495__auto__ = name;
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__29243 = segmap;
var map__29243__$1 = ((((!((map__29243 == null)))?((((map__29243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29243):map__29243);
var gcol = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__29243,map__29243__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__29243,map__29243__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__29243,map__29243__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__29243,map__29243__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__29243,map__29243__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__29243,map__29243__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args29245 = [];
var len__24553__auto___29249 = arguments.length;
var i__24554__auto___29250 = (0);
while(true){
if((i__24554__auto___29250 < len__24553__auto___29249)){
args29245.push((arguments[i__24554__auto___29250]));

var G__29251 = (i__24554__auto___29250 + (1));
i__24554__auto___29250 = G__29251;
continue;
} else {
}
break;
}

var G__29247 = args29245.length;
switch (G__29247) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29245.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__29248 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__29253 = cljs.core.next.call(null,segs__$1);
var G__29254 = nrelseg;
var G__29255 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__29253;
relseg__$1 = G__29254;
result__$1 = G__29255;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__29248,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__29248,(1),null);
var G__29256 = (gline + (1));
var G__29257 = cljs.core.next.call(null,lines__$1);
var G__29258 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__29259 = result__$1;
gline = G__29256;
lines__$1 = G__29257;
relseg = G__29258;
result = G__29259;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__29263 = segmap;
var map__29263__$1 = ((((!((map__29263 == null)))?((((map__29263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29263):map__29263);
var gcol = cljs.core.get.call(null,map__29263__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__29263__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__29263__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__29263__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__29263__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__29263,map__29263__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__29263,map__29263__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__29260_SHARP_){
return cljs.core.conj.call(null,p1__29260_SHARP_,d__$1);
});})(map__29263,map__29263__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__29263,map__29263__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args29265 = [];
var len__24553__auto___29269 = arguments.length;
var i__24554__auto___29270 = (0);
while(true){
if((i__24554__auto___29270 < len__24553__auto___29269)){
args29265.push((arguments[i__24554__auto___29270]));

var G__29271 = (i__24554__auto___29270 + (1));
i__24554__auto___29270 = G__29271;
continue;
} else {
}
break;
}

var G__29267 = args29265.length;
switch (G__29267) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29265.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__29268 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__29273 = cljs.core.next.call(null,segs__$1);
var G__29274 = nrelseg;
var G__29275 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__29273;
relseg__$1 = G__29274;
result__$1 = G__29275;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__29268,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__29268,(1),null);
var G__29276 = (gline + (1));
var G__29277 = cljs.core.next.call(null,lines__$1);
var G__29278 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__29279 = result__$1;
gline = G__29276;
lines__$1 = G__29277;
relseg = G__29278;
result = G__29279;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__29286){
var vec__29287 = p__29286;
var _ = cljs.core.nth.call(null,vec__29287,(0),null);
var source = cljs.core.nth.call(null,vec__29287,(1),null);
var line = cljs.core.nth.call(null,vec__29287,(2),null);
var col = cljs.core.nth.call(null,vec__29287,(3),null);
var name = cljs.core.nth.call(null,vec__29287,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__29288){
var vec__29289 = p__29288;
var gcol = cljs.core.nth.call(null,vec__29289,(0),null);
var sidx = cljs.core.nth.call(null,vec__29289,(1),null);
var line = cljs.core.nth.call(null,vec__29289,(2),null);
var col = cljs.core.nth.call(null,vec__29289,(3),null);
var name = cljs.core.nth.call(null,vec__29289,(4),null);
var seg = vec__29289;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__29289,gcol,sidx,line,col,name,seg,relseg){
return (function (p__29290){
var vec__29291 = p__29290;
var _ = cljs.core.nth.call(null,vec__29291,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29291,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__29291,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__29291,(3),null);
var lname = cljs.core.nth.call(null,vec__29291,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__23495__auto__ = name;
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__29289,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__23495__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__29345 = cljs.core.seq.call(null,infos);
var chunk__29346 = null;
var count__29347 = (0);
var i__29348 = (0);
while(true){
if((i__29348 < count__29347)){
var info = cljs.core._nth.call(null,chunk__29346,i__29348);
var segv_29395 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_29396 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_29397 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_29396 > (lc_29397 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__29345,chunk__29346,count__29347,i__29348,segv_29395,gline_29396,lc_29397,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_29396 - (lc_29397 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_29395], null));
});})(seq__29345,chunk__29346,count__29347,i__29348,segv_29395,gline_29396,lc_29397,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__29345,chunk__29346,count__29347,i__29348,segv_29395,gline_29396,lc_29397,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29396], null),cljs.core.conj,segv_29395);
});})(seq__29345,chunk__29346,count__29347,i__29348,segv_29395,gline_29396,lc_29397,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__29398 = seq__29345;
var G__29399 = chunk__29346;
var G__29400 = count__29347;
var G__29401 = (i__29348 + (1));
seq__29345 = G__29398;
chunk__29346 = G__29399;
count__29347 = G__29400;
i__29348 = G__29401;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29345);
if(temp__4425__auto__){
var seq__29345__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29345__$1)){
var c__24298__auto__ = cljs.core.chunk_first.call(null,seq__29345__$1);
var G__29402 = cljs.core.chunk_rest.call(null,seq__29345__$1);
var G__29403 = c__24298__auto__;
var G__29404 = cljs.core.count.call(null,c__24298__auto__);
var G__29405 = (0);
seq__29345 = G__29402;
chunk__29346 = G__29403;
count__29347 = G__29404;
i__29348 = G__29405;
continue;
} else {
var info = cljs.core.first.call(null,seq__29345__$1);
var segv_29406 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_29407 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_29408 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_29407 > (lc_29408 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__29345,chunk__29346,count__29347,i__29348,segv_29406,gline_29407,lc_29408,info,seq__29345__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_29407 - (lc_29408 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_29406], null));
});})(seq__29345,chunk__29346,count__29347,i__29348,segv_29406,gline_29407,lc_29408,info,seq__29345__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__29345,chunk__29346,count__29347,i__29348,segv_29406,gline_29407,lc_29408,info,seq__29345__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29407], null),cljs.core.conj,segv_29406);
});})(seq__29345,chunk__29346,count__29347,i__29348,segv_29406,gline_29407,lc_29408,info,seq__29345__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__29409 = cljs.core.next.call(null,seq__29345__$1);
var G__29410 = null;
var G__29411 = (0);
var G__29412 = (0);
seq__29345 = G__29409;
chunk__29346 = G__29410;
count__29347 = G__29411;
i__29348 = G__29412;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__29349_29413 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__29350_29414 = null;
var count__29351_29415 = (0);
var i__29352_29416 = (0);
while(true){
if((i__29352_29416 < count__29351_29415)){
var vec__29353_29417 = cljs.core._nth.call(null,chunk__29350_29414,i__29352_29416);
var source_idx_29418 = cljs.core.nth.call(null,vec__29353_29417,(0),null);
var vec__29354_29419 = cljs.core.nth.call(null,vec__29353_29417,(1),null);
var __29420 = cljs.core.nth.call(null,vec__29354_29419,(0),null);
var lines_29421__$1 = cljs.core.nth.call(null,vec__29354_29419,(1),null);
var seq__29355_29422 = cljs.core.seq.call(null,lines_29421__$1);
var chunk__29356_29423 = null;
var count__29357_29424 = (0);
var i__29358_29425 = (0);
while(true){
if((i__29358_29425 < count__29357_29424)){
var vec__29359_29426 = cljs.core._nth.call(null,chunk__29356_29423,i__29358_29425);
var line_29427 = cljs.core.nth.call(null,vec__29359_29426,(0),null);
var cols_29428 = cljs.core.nth.call(null,vec__29359_29426,(1),null);
var seq__29360_29429 = cljs.core.seq.call(null,cols_29428);
var chunk__29361_29430 = null;
var count__29362_29431 = (0);
var i__29363_29432 = (0);
while(true){
if((i__29363_29432 < count__29362_29431)){
var vec__29364_29433 = cljs.core._nth.call(null,chunk__29361_29430,i__29363_29432);
var col_29434 = cljs.core.nth.call(null,vec__29364_29433,(0),null);
var infos_29435 = cljs.core.nth.call(null,vec__29364_29433,(1),null);
encode_cols.call(null,infos_29435,source_idx_29418,line_29427,col_29434);

var G__29436 = seq__29360_29429;
var G__29437 = chunk__29361_29430;
var G__29438 = count__29362_29431;
var G__29439 = (i__29363_29432 + (1));
seq__29360_29429 = G__29436;
chunk__29361_29430 = G__29437;
count__29362_29431 = G__29438;
i__29363_29432 = G__29439;
continue;
} else {
var temp__4425__auto___29440 = cljs.core.seq.call(null,seq__29360_29429);
if(temp__4425__auto___29440){
var seq__29360_29441__$1 = temp__4425__auto___29440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29360_29441__$1)){
var c__24298__auto___29442 = cljs.core.chunk_first.call(null,seq__29360_29441__$1);
var G__29443 = cljs.core.chunk_rest.call(null,seq__29360_29441__$1);
var G__29444 = c__24298__auto___29442;
var G__29445 = cljs.core.count.call(null,c__24298__auto___29442);
var G__29446 = (0);
seq__29360_29429 = G__29443;
chunk__29361_29430 = G__29444;
count__29362_29431 = G__29445;
i__29363_29432 = G__29446;
continue;
} else {
var vec__29365_29447 = cljs.core.first.call(null,seq__29360_29441__$1);
var col_29448 = cljs.core.nth.call(null,vec__29365_29447,(0),null);
var infos_29449 = cljs.core.nth.call(null,vec__29365_29447,(1),null);
encode_cols.call(null,infos_29449,source_idx_29418,line_29427,col_29448);

var G__29450 = cljs.core.next.call(null,seq__29360_29441__$1);
var G__29451 = null;
var G__29452 = (0);
var G__29453 = (0);
seq__29360_29429 = G__29450;
chunk__29361_29430 = G__29451;
count__29362_29431 = G__29452;
i__29363_29432 = G__29453;
continue;
}
} else {
}
}
break;
}

var G__29454 = seq__29355_29422;
var G__29455 = chunk__29356_29423;
var G__29456 = count__29357_29424;
var G__29457 = (i__29358_29425 + (1));
seq__29355_29422 = G__29454;
chunk__29356_29423 = G__29455;
count__29357_29424 = G__29456;
i__29358_29425 = G__29457;
continue;
} else {
var temp__4425__auto___29458 = cljs.core.seq.call(null,seq__29355_29422);
if(temp__4425__auto___29458){
var seq__29355_29459__$1 = temp__4425__auto___29458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29355_29459__$1)){
var c__24298__auto___29460 = cljs.core.chunk_first.call(null,seq__29355_29459__$1);
var G__29461 = cljs.core.chunk_rest.call(null,seq__29355_29459__$1);
var G__29462 = c__24298__auto___29460;
var G__29463 = cljs.core.count.call(null,c__24298__auto___29460);
var G__29464 = (0);
seq__29355_29422 = G__29461;
chunk__29356_29423 = G__29462;
count__29357_29424 = G__29463;
i__29358_29425 = G__29464;
continue;
} else {
var vec__29366_29465 = cljs.core.first.call(null,seq__29355_29459__$1);
var line_29466 = cljs.core.nth.call(null,vec__29366_29465,(0),null);
var cols_29467 = cljs.core.nth.call(null,vec__29366_29465,(1),null);
var seq__29367_29468 = cljs.core.seq.call(null,cols_29467);
var chunk__29368_29469 = null;
var count__29369_29470 = (0);
var i__29370_29471 = (0);
while(true){
if((i__29370_29471 < count__29369_29470)){
var vec__29371_29472 = cljs.core._nth.call(null,chunk__29368_29469,i__29370_29471);
var col_29473 = cljs.core.nth.call(null,vec__29371_29472,(0),null);
var infos_29474 = cljs.core.nth.call(null,vec__29371_29472,(1),null);
encode_cols.call(null,infos_29474,source_idx_29418,line_29466,col_29473);

var G__29475 = seq__29367_29468;
var G__29476 = chunk__29368_29469;
var G__29477 = count__29369_29470;
var G__29478 = (i__29370_29471 + (1));
seq__29367_29468 = G__29475;
chunk__29368_29469 = G__29476;
count__29369_29470 = G__29477;
i__29370_29471 = G__29478;
continue;
} else {
var temp__4425__auto___29479__$1 = cljs.core.seq.call(null,seq__29367_29468);
if(temp__4425__auto___29479__$1){
var seq__29367_29480__$1 = temp__4425__auto___29479__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29367_29480__$1)){
var c__24298__auto___29481 = cljs.core.chunk_first.call(null,seq__29367_29480__$1);
var G__29482 = cljs.core.chunk_rest.call(null,seq__29367_29480__$1);
var G__29483 = c__24298__auto___29481;
var G__29484 = cljs.core.count.call(null,c__24298__auto___29481);
var G__29485 = (0);
seq__29367_29468 = G__29482;
chunk__29368_29469 = G__29483;
count__29369_29470 = G__29484;
i__29370_29471 = G__29485;
continue;
} else {
var vec__29372_29486 = cljs.core.first.call(null,seq__29367_29480__$1);
var col_29487 = cljs.core.nth.call(null,vec__29372_29486,(0),null);
var infos_29488 = cljs.core.nth.call(null,vec__29372_29486,(1),null);
encode_cols.call(null,infos_29488,source_idx_29418,line_29466,col_29487);

var G__29489 = cljs.core.next.call(null,seq__29367_29480__$1);
var G__29490 = null;
var G__29491 = (0);
var G__29492 = (0);
seq__29367_29468 = G__29489;
chunk__29368_29469 = G__29490;
count__29369_29470 = G__29491;
i__29370_29471 = G__29492;
continue;
}
} else {
}
}
break;
}

var G__29493 = cljs.core.next.call(null,seq__29355_29459__$1);
var G__29494 = null;
var G__29495 = (0);
var G__29496 = (0);
seq__29355_29422 = G__29493;
chunk__29356_29423 = G__29494;
count__29357_29424 = G__29495;
i__29358_29425 = G__29496;
continue;
}
} else {
}
}
break;
}

var G__29497 = seq__29349_29413;
var G__29498 = chunk__29350_29414;
var G__29499 = count__29351_29415;
var G__29500 = (i__29352_29416 + (1));
seq__29349_29413 = G__29497;
chunk__29350_29414 = G__29498;
count__29351_29415 = G__29499;
i__29352_29416 = G__29500;
continue;
} else {
var temp__4425__auto___29501 = cljs.core.seq.call(null,seq__29349_29413);
if(temp__4425__auto___29501){
var seq__29349_29502__$1 = temp__4425__auto___29501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29349_29502__$1)){
var c__24298__auto___29503 = cljs.core.chunk_first.call(null,seq__29349_29502__$1);
var G__29504 = cljs.core.chunk_rest.call(null,seq__29349_29502__$1);
var G__29505 = c__24298__auto___29503;
var G__29506 = cljs.core.count.call(null,c__24298__auto___29503);
var G__29507 = (0);
seq__29349_29413 = G__29504;
chunk__29350_29414 = G__29505;
count__29351_29415 = G__29506;
i__29352_29416 = G__29507;
continue;
} else {
var vec__29373_29508 = cljs.core.first.call(null,seq__29349_29502__$1);
var source_idx_29509 = cljs.core.nth.call(null,vec__29373_29508,(0),null);
var vec__29374_29510 = cljs.core.nth.call(null,vec__29373_29508,(1),null);
var __29511 = cljs.core.nth.call(null,vec__29374_29510,(0),null);
var lines_29512__$1 = cljs.core.nth.call(null,vec__29374_29510,(1),null);
var seq__29375_29513 = cljs.core.seq.call(null,lines_29512__$1);
var chunk__29376_29514 = null;
var count__29377_29515 = (0);
var i__29378_29516 = (0);
while(true){
if((i__29378_29516 < count__29377_29515)){
var vec__29379_29517 = cljs.core._nth.call(null,chunk__29376_29514,i__29378_29516);
var line_29518 = cljs.core.nth.call(null,vec__29379_29517,(0),null);
var cols_29519 = cljs.core.nth.call(null,vec__29379_29517,(1),null);
var seq__29380_29520 = cljs.core.seq.call(null,cols_29519);
var chunk__29381_29521 = null;
var count__29382_29522 = (0);
var i__29383_29523 = (0);
while(true){
if((i__29383_29523 < count__29382_29522)){
var vec__29384_29524 = cljs.core._nth.call(null,chunk__29381_29521,i__29383_29523);
var col_29525 = cljs.core.nth.call(null,vec__29384_29524,(0),null);
var infos_29526 = cljs.core.nth.call(null,vec__29384_29524,(1),null);
encode_cols.call(null,infos_29526,source_idx_29509,line_29518,col_29525);

var G__29527 = seq__29380_29520;
var G__29528 = chunk__29381_29521;
var G__29529 = count__29382_29522;
var G__29530 = (i__29383_29523 + (1));
seq__29380_29520 = G__29527;
chunk__29381_29521 = G__29528;
count__29382_29522 = G__29529;
i__29383_29523 = G__29530;
continue;
} else {
var temp__4425__auto___29531__$1 = cljs.core.seq.call(null,seq__29380_29520);
if(temp__4425__auto___29531__$1){
var seq__29380_29532__$1 = temp__4425__auto___29531__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29380_29532__$1)){
var c__24298__auto___29533 = cljs.core.chunk_first.call(null,seq__29380_29532__$1);
var G__29534 = cljs.core.chunk_rest.call(null,seq__29380_29532__$1);
var G__29535 = c__24298__auto___29533;
var G__29536 = cljs.core.count.call(null,c__24298__auto___29533);
var G__29537 = (0);
seq__29380_29520 = G__29534;
chunk__29381_29521 = G__29535;
count__29382_29522 = G__29536;
i__29383_29523 = G__29537;
continue;
} else {
var vec__29385_29538 = cljs.core.first.call(null,seq__29380_29532__$1);
var col_29539 = cljs.core.nth.call(null,vec__29385_29538,(0),null);
var infos_29540 = cljs.core.nth.call(null,vec__29385_29538,(1),null);
encode_cols.call(null,infos_29540,source_idx_29509,line_29518,col_29539);

var G__29541 = cljs.core.next.call(null,seq__29380_29532__$1);
var G__29542 = null;
var G__29543 = (0);
var G__29544 = (0);
seq__29380_29520 = G__29541;
chunk__29381_29521 = G__29542;
count__29382_29522 = G__29543;
i__29383_29523 = G__29544;
continue;
}
} else {
}
}
break;
}

var G__29545 = seq__29375_29513;
var G__29546 = chunk__29376_29514;
var G__29547 = count__29377_29515;
var G__29548 = (i__29378_29516 + (1));
seq__29375_29513 = G__29545;
chunk__29376_29514 = G__29546;
count__29377_29515 = G__29547;
i__29378_29516 = G__29548;
continue;
} else {
var temp__4425__auto___29549__$1 = cljs.core.seq.call(null,seq__29375_29513);
if(temp__4425__auto___29549__$1){
var seq__29375_29550__$1 = temp__4425__auto___29549__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29375_29550__$1)){
var c__24298__auto___29551 = cljs.core.chunk_first.call(null,seq__29375_29550__$1);
var G__29552 = cljs.core.chunk_rest.call(null,seq__29375_29550__$1);
var G__29553 = c__24298__auto___29551;
var G__29554 = cljs.core.count.call(null,c__24298__auto___29551);
var G__29555 = (0);
seq__29375_29513 = G__29552;
chunk__29376_29514 = G__29553;
count__29377_29515 = G__29554;
i__29378_29516 = G__29555;
continue;
} else {
var vec__29386_29556 = cljs.core.first.call(null,seq__29375_29550__$1);
var line_29557 = cljs.core.nth.call(null,vec__29386_29556,(0),null);
var cols_29558 = cljs.core.nth.call(null,vec__29386_29556,(1),null);
var seq__29387_29559 = cljs.core.seq.call(null,cols_29558);
var chunk__29388_29560 = null;
var count__29389_29561 = (0);
var i__29390_29562 = (0);
while(true){
if((i__29390_29562 < count__29389_29561)){
var vec__29391_29563 = cljs.core._nth.call(null,chunk__29388_29560,i__29390_29562);
var col_29564 = cljs.core.nth.call(null,vec__29391_29563,(0),null);
var infos_29565 = cljs.core.nth.call(null,vec__29391_29563,(1),null);
encode_cols.call(null,infos_29565,source_idx_29509,line_29557,col_29564);

var G__29566 = seq__29387_29559;
var G__29567 = chunk__29388_29560;
var G__29568 = count__29389_29561;
var G__29569 = (i__29390_29562 + (1));
seq__29387_29559 = G__29566;
chunk__29388_29560 = G__29567;
count__29389_29561 = G__29568;
i__29390_29562 = G__29569;
continue;
} else {
var temp__4425__auto___29570__$2 = cljs.core.seq.call(null,seq__29387_29559);
if(temp__4425__auto___29570__$2){
var seq__29387_29571__$1 = temp__4425__auto___29570__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29387_29571__$1)){
var c__24298__auto___29572 = cljs.core.chunk_first.call(null,seq__29387_29571__$1);
var G__29573 = cljs.core.chunk_rest.call(null,seq__29387_29571__$1);
var G__29574 = c__24298__auto___29572;
var G__29575 = cljs.core.count.call(null,c__24298__auto___29572);
var G__29576 = (0);
seq__29387_29559 = G__29573;
chunk__29388_29560 = G__29574;
count__29389_29561 = G__29575;
i__29390_29562 = G__29576;
continue;
} else {
var vec__29392_29577 = cljs.core.first.call(null,seq__29387_29571__$1);
var col_29578 = cljs.core.nth.call(null,vec__29392_29577,(0),null);
var infos_29579 = cljs.core.nth.call(null,vec__29392_29577,(1),null);
encode_cols.call(null,infos_29579,source_idx_29509,line_29557,col_29578);

var G__29580 = cljs.core.next.call(null,seq__29387_29571__$1);
var G__29581 = null;
var G__29582 = (0);
var G__29583 = (0);
seq__29387_29559 = G__29580;
chunk__29388_29560 = G__29581;
count__29389_29561 = G__29582;
i__29390_29562 = G__29583;
continue;
}
} else {
}
}
break;
}

var G__29584 = cljs.core.next.call(null,seq__29375_29550__$1);
var G__29585 = null;
var G__29586 = (0);
var G__29587 = (0);
seq__29375_29513 = G__29584;
chunk__29376_29514 = G__29585;
count__29377_29515 = G__29586;
i__29378_29516 = G__29587;
continue;
}
} else {
}
}
break;
}

var G__29588 = cljs.core.next.call(null,seq__29349_29502__$1);
var G__29589 = null;
var G__29590 = (0);
var G__29591 = (0);
seq__29349_29413 = G__29588;
chunk__29350_29414 = G__29589;
count__29351_29415 = G__29590;
i__29352_29416 = G__29591;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__29393 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__29292_SHARP_){
return [cljs.core.str(p1__29292_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__29293_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__29293_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__29294_SHARP_){
return clojure.string.join.call(null,",",p1__29294_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__29393__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__29394 = G__29393;
goog.object.set(G__29394,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__29394;
})():G__29393);
return G__29393__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__29597 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__29597,(0),null);
var col_map = cljs.core.nth.call(null,vec__29597,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__29598 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__29598,(0),null);
var infos = cljs.core.nth.call(null,vec__29598,(1),null);
var G__29602 = cljs.core.next.call(null,col_map_seq);
var G__29603 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__29598,col,infos,vec__29597,line,col_map){
return (function (v,p__29599){
var map__29600 = p__29599;
var map__29600__$1 = ((((!((map__29600 == null)))?((((map__29600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29600):map__29600);
var gline = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__29598,col,infos,vec__29597,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__29602;
new_cols = G__29603;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__29604 = cljs.core.next.call(null,line_map_seq);
var G__29605 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__29604;
new_lines = G__29605;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__29656_29706 = cljs.core.seq.call(null,reverse_map);
var chunk__29657_29707 = null;
var count__29658_29708 = (0);
var i__29659_29709 = (0);
while(true){
if((i__29659_29709 < count__29658_29708)){
var vec__29660_29710 = cljs.core._nth.call(null,chunk__29657_29707,i__29659_29709);
var line_29711 = cljs.core.nth.call(null,vec__29660_29710,(0),null);
var columns_29712 = cljs.core.nth.call(null,vec__29660_29710,(1),null);
var seq__29661_29713 = cljs.core.seq.call(null,columns_29712);
var chunk__29662_29714 = null;
var count__29663_29715 = (0);
var i__29664_29716 = (0);
while(true){
if((i__29664_29716 < count__29663_29715)){
var vec__29665_29717 = cljs.core._nth.call(null,chunk__29662_29714,i__29664_29716);
var column_29718 = cljs.core.nth.call(null,vec__29665_29717,(0),null);
var column_info_29719 = cljs.core.nth.call(null,vec__29665_29717,(1),null);
var seq__29666_29720 = cljs.core.seq.call(null,column_info_29719);
var chunk__29667_29721 = null;
var count__29668_29722 = (0);
var i__29669_29723 = (0);
while(true){
if((i__29669_29723 < count__29668_29722)){
var map__29670_29724 = cljs.core._nth.call(null,chunk__29667_29721,i__29669_29723);
var map__29670_29725__$1 = ((((!((map__29670_29724 == null)))?((((map__29670_29724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29670_29724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29670_29724):map__29670_29724);
var gline_29726 = cljs.core.get.call(null,map__29670_29725__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29727 = cljs.core.get.call(null,map__29670_29725__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29728 = cljs.core.get.call(null,map__29670_29725__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29726], null),cljs.core.fnil.call(null,((function (seq__29666_29720,chunk__29667_29721,count__29668_29722,i__29669_29723,seq__29661_29713,chunk__29662_29714,count__29663_29715,i__29664_29716,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29670_29724,map__29670_29725__$1,gline_29726,gcol_29727,name_29728,vec__29665_29717,column_29718,column_info_29719,vec__29660_29710,line_29711,columns_29712,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_29718], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29711,new cljs.core.Keyword(null,"col","col",-1959363084),column_29718,new cljs.core.Keyword(null,"name","name",1843675177),name_29728], null));
});})(seq__29666_29720,chunk__29667_29721,count__29668_29722,i__29669_29723,seq__29661_29713,chunk__29662_29714,count__29663_29715,i__29664_29716,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29670_29724,map__29670_29725__$1,gline_29726,gcol_29727,name_29728,vec__29665_29717,column_29718,column_info_29719,vec__29660_29710,line_29711,columns_29712,inverted))
,cljs.core.sorted_map.call(null)));

var G__29729 = seq__29666_29720;
var G__29730 = chunk__29667_29721;
var G__29731 = count__29668_29722;
var G__29732 = (i__29669_29723 + (1));
seq__29666_29720 = G__29729;
chunk__29667_29721 = G__29730;
count__29668_29722 = G__29731;
i__29669_29723 = G__29732;
continue;
} else {
var temp__4425__auto___29733 = cljs.core.seq.call(null,seq__29666_29720);
if(temp__4425__auto___29733){
var seq__29666_29734__$1 = temp__4425__auto___29733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29666_29734__$1)){
var c__24298__auto___29735 = cljs.core.chunk_first.call(null,seq__29666_29734__$1);
var G__29736 = cljs.core.chunk_rest.call(null,seq__29666_29734__$1);
var G__29737 = c__24298__auto___29735;
var G__29738 = cljs.core.count.call(null,c__24298__auto___29735);
var G__29739 = (0);
seq__29666_29720 = G__29736;
chunk__29667_29721 = G__29737;
count__29668_29722 = G__29738;
i__29669_29723 = G__29739;
continue;
} else {
var map__29672_29740 = cljs.core.first.call(null,seq__29666_29734__$1);
var map__29672_29741__$1 = ((((!((map__29672_29740 == null)))?((((map__29672_29740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29672_29740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29672_29740):map__29672_29740);
var gline_29742 = cljs.core.get.call(null,map__29672_29741__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29743 = cljs.core.get.call(null,map__29672_29741__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29744 = cljs.core.get.call(null,map__29672_29741__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29742], null),cljs.core.fnil.call(null,((function (seq__29666_29720,chunk__29667_29721,count__29668_29722,i__29669_29723,seq__29661_29713,chunk__29662_29714,count__29663_29715,i__29664_29716,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29672_29740,map__29672_29741__$1,gline_29742,gcol_29743,name_29744,seq__29666_29734__$1,temp__4425__auto___29733,vec__29665_29717,column_29718,column_info_29719,vec__29660_29710,line_29711,columns_29712,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_29718], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29711,new cljs.core.Keyword(null,"col","col",-1959363084),column_29718,new cljs.core.Keyword(null,"name","name",1843675177),name_29744], null));
});})(seq__29666_29720,chunk__29667_29721,count__29668_29722,i__29669_29723,seq__29661_29713,chunk__29662_29714,count__29663_29715,i__29664_29716,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29672_29740,map__29672_29741__$1,gline_29742,gcol_29743,name_29744,seq__29666_29734__$1,temp__4425__auto___29733,vec__29665_29717,column_29718,column_info_29719,vec__29660_29710,line_29711,columns_29712,inverted))
,cljs.core.sorted_map.call(null)));

var G__29745 = cljs.core.next.call(null,seq__29666_29734__$1);
var G__29746 = null;
var G__29747 = (0);
var G__29748 = (0);
seq__29666_29720 = G__29745;
chunk__29667_29721 = G__29746;
count__29668_29722 = G__29747;
i__29669_29723 = G__29748;
continue;
}
} else {
}
}
break;
}

var G__29749 = seq__29661_29713;
var G__29750 = chunk__29662_29714;
var G__29751 = count__29663_29715;
var G__29752 = (i__29664_29716 + (1));
seq__29661_29713 = G__29749;
chunk__29662_29714 = G__29750;
count__29663_29715 = G__29751;
i__29664_29716 = G__29752;
continue;
} else {
var temp__4425__auto___29753 = cljs.core.seq.call(null,seq__29661_29713);
if(temp__4425__auto___29753){
var seq__29661_29754__$1 = temp__4425__auto___29753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29661_29754__$1)){
var c__24298__auto___29755 = cljs.core.chunk_first.call(null,seq__29661_29754__$1);
var G__29756 = cljs.core.chunk_rest.call(null,seq__29661_29754__$1);
var G__29757 = c__24298__auto___29755;
var G__29758 = cljs.core.count.call(null,c__24298__auto___29755);
var G__29759 = (0);
seq__29661_29713 = G__29756;
chunk__29662_29714 = G__29757;
count__29663_29715 = G__29758;
i__29664_29716 = G__29759;
continue;
} else {
var vec__29674_29760 = cljs.core.first.call(null,seq__29661_29754__$1);
var column_29761 = cljs.core.nth.call(null,vec__29674_29760,(0),null);
var column_info_29762 = cljs.core.nth.call(null,vec__29674_29760,(1),null);
var seq__29675_29763 = cljs.core.seq.call(null,column_info_29762);
var chunk__29676_29764 = null;
var count__29677_29765 = (0);
var i__29678_29766 = (0);
while(true){
if((i__29678_29766 < count__29677_29765)){
var map__29679_29767 = cljs.core._nth.call(null,chunk__29676_29764,i__29678_29766);
var map__29679_29768__$1 = ((((!((map__29679_29767 == null)))?((((map__29679_29767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29679_29767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29679_29767):map__29679_29767);
var gline_29769 = cljs.core.get.call(null,map__29679_29768__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29770 = cljs.core.get.call(null,map__29679_29768__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29771 = cljs.core.get.call(null,map__29679_29768__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29769], null),cljs.core.fnil.call(null,((function (seq__29675_29763,chunk__29676_29764,count__29677_29765,i__29678_29766,seq__29661_29713,chunk__29662_29714,count__29663_29715,i__29664_29716,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29679_29767,map__29679_29768__$1,gline_29769,gcol_29770,name_29771,vec__29674_29760,column_29761,column_info_29762,seq__29661_29754__$1,temp__4425__auto___29753,vec__29660_29710,line_29711,columns_29712,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_29761], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29711,new cljs.core.Keyword(null,"col","col",-1959363084),column_29761,new cljs.core.Keyword(null,"name","name",1843675177),name_29771], null));
});})(seq__29675_29763,chunk__29676_29764,count__29677_29765,i__29678_29766,seq__29661_29713,chunk__29662_29714,count__29663_29715,i__29664_29716,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29679_29767,map__29679_29768__$1,gline_29769,gcol_29770,name_29771,vec__29674_29760,column_29761,column_info_29762,seq__29661_29754__$1,temp__4425__auto___29753,vec__29660_29710,line_29711,columns_29712,inverted))
,cljs.core.sorted_map.call(null)));

var G__29772 = seq__29675_29763;
var G__29773 = chunk__29676_29764;
var G__29774 = count__29677_29765;
var G__29775 = (i__29678_29766 + (1));
seq__29675_29763 = G__29772;
chunk__29676_29764 = G__29773;
count__29677_29765 = G__29774;
i__29678_29766 = G__29775;
continue;
} else {
var temp__4425__auto___29776__$1 = cljs.core.seq.call(null,seq__29675_29763);
if(temp__4425__auto___29776__$1){
var seq__29675_29777__$1 = temp__4425__auto___29776__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29675_29777__$1)){
var c__24298__auto___29778 = cljs.core.chunk_first.call(null,seq__29675_29777__$1);
var G__29779 = cljs.core.chunk_rest.call(null,seq__29675_29777__$1);
var G__29780 = c__24298__auto___29778;
var G__29781 = cljs.core.count.call(null,c__24298__auto___29778);
var G__29782 = (0);
seq__29675_29763 = G__29779;
chunk__29676_29764 = G__29780;
count__29677_29765 = G__29781;
i__29678_29766 = G__29782;
continue;
} else {
var map__29681_29783 = cljs.core.first.call(null,seq__29675_29777__$1);
var map__29681_29784__$1 = ((((!((map__29681_29783 == null)))?((((map__29681_29783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29681_29783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29681_29783):map__29681_29783);
var gline_29785 = cljs.core.get.call(null,map__29681_29784__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29786 = cljs.core.get.call(null,map__29681_29784__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29787 = cljs.core.get.call(null,map__29681_29784__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29785], null),cljs.core.fnil.call(null,((function (seq__29675_29763,chunk__29676_29764,count__29677_29765,i__29678_29766,seq__29661_29713,chunk__29662_29714,count__29663_29715,i__29664_29716,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29681_29783,map__29681_29784__$1,gline_29785,gcol_29786,name_29787,seq__29675_29777__$1,temp__4425__auto___29776__$1,vec__29674_29760,column_29761,column_info_29762,seq__29661_29754__$1,temp__4425__auto___29753,vec__29660_29710,line_29711,columns_29712,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_29761], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29711,new cljs.core.Keyword(null,"col","col",-1959363084),column_29761,new cljs.core.Keyword(null,"name","name",1843675177),name_29787], null));
});})(seq__29675_29763,chunk__29676_29764,count__29677_29765,i__29678_29766,seq__29661_29713,chunk__29662_29714,count__29663_29715,i__29664_29716,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29681_29783,map__29681_29784__$1,gline_29785,gcol_29786,name_29787,seq__29675_29777__$1,temp__4425__auto___29776__$1,vec__29674_29760,column_29761,column_info_29762,seq__29661_29754__$1,temp__4425__auto___29753,vec__29660_29710,line_29711,columns_29712,inverted))
,cljs.core.sorted_map.call(null)));

var G__29788 = cljs.core.next.call(null,seq__29675_29777__$1);
var G__29789 = null;
var G__29790 = (0);
var G__29791 = (0);
seq__29675_29763 = G__29788;
chunk__29676_29764 = G__29789;
count__29677_29765 = G__29790;
i__29678_29766 = G__29791;
continue;
}
} else {
}
}
break;
}

var G__29792 = cljs.core.next.call(null,seq__29661_29754__$1);
var G__29793 = null;
var G__29794 = (0);
var G__29795 = (0);
seq__29661_29713 = G__29792;
chunk__29662_29714 = G__29793;
count__29663_29715 = G__29794;
i__29664_29716 = G__29795;
continue;
}
} else {
}
}
break;
}

var G__29796 = seq__29656_29706;
var G__29797 = chunk__29657_29707;
var G__29798 = count__29658_29708;
var G__29799 = (i__29659_29709 + (1));
seq__29656_29706 = G__29796;
chunk__29657_29707 = G__29797;
count__29658_29708 = G__29798;
i__29659_29709 = G__29799;
continue;
} else {
var temp__4425__auto___29800 = cljs.core.seq.call(null,seq__29656_29706);
if(temp__4425__auto___29800){
var seq__29656_29801__$1 = temp__4425__auto___29800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29656_29801__$1)){
var c__24298__auto___29802 = cljs.core.chunk_first.call(null,seq__29656_29801__$1);
var G__29803 = cljs.core.chunk_rest.call(null,seq__29656_29801__$1);
var G__29804 = c__24298__auto___29802;
var G__29805 = cljs.core.count.call(null,c__24298__auto___29802);
var G__29806 = (0);
seq__29656_29706 = G__29803;
chunk__29657_29707 = G__29804;
count__29658_29708 = G__29805;
i__29659_29709 = G__29806;
continue;
} else {
var vec__29683_29807 = cljs.core.first.call(null,seq__29656_29801__$1);
var line_29808 = cljs.core.nth.call(null,vec__29683_29807,(0),null);
var columns_29809 = cljs.core.nth.call(null,vec__29683_29807,(1),null);
var seq__29684_29810 = cljs.core.seq.call(null,columns_29809);
var chunk__29685_29811 = null;
var count__29686_29812 = (0);
var i__29687_29813 = (0);
while(true){
if((i__29687_29813 < count__29686_29812)){
var vec__29688_29814 = cljs.core._nth.call(null,chunk__29685_29811,i__29687_29813);
var column_29815 = cljs.core.nth.call(null,vec__29688_29814,(0),null);
var column_info_29816 = cljs.core.nth.call(null,vec__29688_29814,(1),null);
var seq__29689_29817 = cljs.core.seq.call(null,column_info_29816);
var chunk__29690_29818 = null;
var count__29691_29819 = (0);
var i__29692_29820 = (0);
while(true){
if((i__29692_29820 < count__29691_29819)){
var map__29693_29821 = cljs.core._nth.call(null,chunk__29690_29818,i__29692_29820);
var map__29693_29822__$1 = ((((!((map__29693_29821 == null)))?((((map__29693_29821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29693_29821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29693_29821):map__29693_29821);
var gline_29823 = cljs.core.get.call(null,map__29693_29822__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29824 = cljs.core.get.call(null,map__29693_29822__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29825 = cljs.core.get.call(null,map__29693_29822__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29823], null),cljs.core.fnil.call(null,((function (seq__29689_29817,chunk__29690_29818,count__29691_29819,i__29692_29820,seq__29684_29810,chunk__29685_29811,count__29686_29812,i__29687_29813,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29693_29821,map__29693_29822__$1,gline_29823,gcol_29824,name_29825,vec__29688_29814,column_29815,column_info_29816,vec__29683_29807,line_29808,columns_29809,seq__29656_29801__$1,temp__4425__auto___29800,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_29815], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29808,new cljs.core.Keyword(null,"col","col",-1959363084),column_29815,new cljs.core.Keyword(null,"name","name",1843675177),name_29825], null));
});})(seq__29689_29817,chunk__29690_29818,count__29691_29819,i__29692_29820,seq__29684_29810,chunk__29685_29811,count__29686_29812,i__29687_29813,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29693_29821,map__29693_29822__$1,gline_29823,gcol_29824,name_29825,vec__29688_29814,column_29815,column_info_29816,vec__29683_29807,line_29808,columns_29809,seq__29656_29801__$1,temp__4425__auto___29800,inverted))
,cljs.core.sorted_map.call(null)));

var G__29826 = seq__29689_29817;
var G__29827 = chunk__29690_29818;
var G__29828 = count__29691_29819;
var G__29829 = (i__29692_29820 + (1));
seq__29689_29817 = G__29826;
chunk__29690_29818 = G__29827;
count__29691_29819 = G__29828;
i__29692_29820 = G__29829;
continue;
} else {
var temp__4425__auto___29830__$1 = cljs.core.seq.call(null,seq__29689_29817);
if(temp__4425__auto___29830__$1){
var seq__29689_29831__$1 = temp__4425__auto___29830__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29689_29831__$1)){
var c__24298__auto___29832 = cljs.core.chunk_first.call(null,seq__29689_29831__$1);
var G__29833 = cljs.core.chunk_rest.call(null,seq__29689_29831__$1);
var G__29834 = c__24298__auto___29832;
var G__29835 = cljs.core.count.call(null,c__24298__auto___29832);
var G__29836 = (0);
seq__29689_29817 = G__29833;
chunk__29690_29818 = G__29834;
count__29691_29819 = G__29835;
i__29692_29820 = G__29836;
continue;
} else {
var map__29695_29837 = cljs.core.first.call(null,seq__29689_29831__$1);
var map__29695_29838__$1 = ((((!((map__29695_29837 == null)))?((((map__29695_29837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29695_29837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29695_29837):map__29695_29837);
var gline_29839 = cljs.core.get.call(null,map__29695_29838__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29840 = cljs.core.get.call(null,map__29695_29838__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29841 = cljs.core.get.call(null,map__29695_29838__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29839], null),cljs.core.fnil.call(null,((function (seq__29689_29817,chunk__29690_29818,count__29691_29819,i__29692_29820,seq__29684_29810,chunk__29685_29811,count__29686_29812,i__29687_29813,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29695_29837,map__29695_29838__$1,gline_29839,gcol_29840,name_29841,seq__29689_29831__$1,temp__4425__auto___29830__$1,vec__29688_29814,column_29815,column_info_29816,vec__29683_29807,line_29808,columns_29809,seq__29656_29801__$1,temp__4425__auto___29800,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_29815], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29808,new cljs.core.Keyword(null,"col","col",-1959363084),column_29815,new cljs.core.Keyword(null,"name","name",1843675177),name_29841], null));
});})(seq__29689_29817,chunk__29690_29818,count__29691_29819,i__29692_29820,seq__29684_29810,chunk__29685_29811,count__29686_29812,i__29687_29813,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29695_29837,map__29695_29838__$1,gline_29839,gcol_29840,name_29841,seq__29689_29831__$1,temp__4425__auto___29830__$1,vec__29688_29814,column_29815,column_info_29816,vec__29683_29807,line_29808,columns_29809,seq__29656_29801__$1,temp__4425__auto___29800,inverted))
,cljs.core.sorted_map.call(null)));

var G__29842 = cljs.core.next.call(null,seq__29689_29831__$1);
var G__29843 = null;
var G__29844 = (0);
var G__29845 = (0);
seq__29689_29817 = G__29842;
chunk__29690_29818 = G__29843;
count__29691_29819 = G__29844;
i__29692_29820 = G__29845;
continue;
}
} else {
}
}
break;
}

var G__29846 = seq__29684_29810;
var G__29847 = chunk__29685_29811;
var G__29848 = count__29686_29812;
var G__29849 = (i__29687_29813 + (1));
seq__29684_29810 = G__29846;
chunk__29685_29811 = G__29847;
count__29686_29812 = G__29848;
i__29687_29813 = G__29849;
continue;
} else {
var temp__4425__auto___29850__$1 = cljs.core.seq.call(null,seq__29684_29810);
if(temp__4425__auto___29850__$1){
var seq__29684_29851__$1 = temp__4425__auto___29850__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29684_29851__$1)){
var c__24298__auto___29852 = cljs.core.chunk_first.call(null,seq__29684_29851__$1);
var G__29853 = cljs.core.chunk_rest.call(null,seq__29684_29851__$1);
var G__29854 = c__24298__auto___29852;
var G__29855 = cljs.core.count.call(null,c__24298__auto___29852);
var G__29856 = (0);
seq__29684_29810 = G__29853;
chunk__29685_29811 = G__29854;
count__29686_29812 = G__29855;
i__29687_29813 = G__29856;
continue;
} else {
var vec__29697_29857 = cljs.core.first.call(null,seq__29684_29851__$1);
var column_29858 = cljs.core.nth.call(null,vec__29697_29857,(0),null);
var column_info_29859 = cljs.core.nth.call(null,vec__29697_29857,(1),null);
var seq__29698_29860 = cljs.core.seq.call(null,column_info_29859);
var chunk__29699_29861 = null;
var count__29700_29862 = (0);
var i__29701_29863 = (0);
while(true){
if((i__29701_29863 < count__29700_29862)){
var map__29702_29864 = cljs.core._nth.call(null,chunk__29699_29861,i__29701_29863);
var map__29702_29865__$1 = ((((!((map__29702_29864 == null)))?((((map__29702_29864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29702_29864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29702_29864):map__29702_29864);
var gline_29866 = cljs.core.get.call(null,map__29702_29865__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29867 = cljs.core.get.call(null,map__29702_29865__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29868 = cljs.core.get.call(null,map__29702_29865__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29866], null),cljs.core.fnil.call(null,((function (seq__29698_29860,chunk__29699_29861,count__29700_29862,i__29701_29863,seq__29684_29810,chunk__29685_29811,count__29686_29812,i__29687_29813,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29702_29864,map__29702_29865__$1,gline_29866,gcol_29867,name_29868,vec__29697_29857,column_29858,column_info_29859,seq__29684_29851__$1,temp__4425__auto___29850__$1,vec__29683_29807,line_29808,columns_29809,seq__29656_29801__$1,temp__4425__auto___29800,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_29858], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29808,new cljs.core.Keyword(null,"col","col",-1959363084),column_29858,new cljs.core.Keyword(null,"name","name",1843675177),name_29868], null));
});})(seq__29698_29860,chunk__29699_29861,count__29700_29862,i__29701_29863,seq__29684_29810,chunk__29685_29811,count__29686_29812,i__29687_29813,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29702_29864,map__29702_29865__$1,gline_29866,gcol_29867,name_29868,vec__29697_29857,column_29858,column_info_29859,seq__29684_29851__$1,temp__4425__auto___29850__$1,vec__29683_29807,line_29808,columns_29809,seq__29656_29801__$1,temp__4425__auto___29800,inverted))
,cljs.core.sorted_map.call(null)));

var G__29869 = seq__29698_29860;
var G__29870 = chunk__29699_29861;
var G__29871 = count__29700_29862;
var G__29872 = (i__29701_29863 + (1));
seq__29698_29860 = G__29869;
chunk__29699_29861 = G__29870;
count__29700_29862 = G__29871;
i__29701_29863 = G__29872;
continue;
} else {
var temp__4425__auto___29873__$2 = cljs.core.seq.call(null,seq__29698_29860);
if(temp__4425__auto___29873__$2){
var seq__29698_29874__$1 = temp__4425__auto___29873__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29698_29874__$1)){
var c__24298__auto___29875 = cljs.core.chunk_first.call(null,seq__29698_29874__$1);
var G__29876 = cljs.core.chunk_rest.call(null,seq__29698_29874__$1);
var G__29877 = c__24298__auto___29875;
var G__29878 = cljs.core.count.call(null,c__24298__auto___29875);
var G__29879 = (0);
seq__29698_29860 = G__29876;
chunk__29699_29861 = G__29877;
count__29700_29862 = G__29878;
i__29701_29863 = G__29879;
continue;
} else {
var map__29704_29880 = cljs.core.first.call(null,seq__29698_29874__$1);
var map__29704_29881__$1 = ((((!((map__29704_29880 == null)))?((((map__29704_29880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29704_29880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29704_29880):map__29704_29880);
var gline_29882 = cljs.core.get.call(null,map__29704_29881__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29883 = cljs.core.get.call(null,map__29704_29881__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29884 = cljs.core.get.call(null,map__29704_29881__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29882], null),cljs.core.fnil.call(null,((function (seq__29698_29860,chunk__29699_29861,count__29700_29862,i__29701_29863,seq__29684_29810,chunk__29685_29811,count__29686_29812,i__29687_29813,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29704_29880,map__29704_29881__$1,gline_29882,gcol_29883,name_29884,seq__29698_29874__$1,temp__4425__auto___29873__$2,vec__29697_29857,column_29858,column_info_29859,seq__29684_29851__$1,temp__4425__auto___29850__$1,vec__29683_29807,line_29808,columns_29809,seq__29656_29801__$1,temp__4425__auto___29800,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_29858], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29808,new cljs.core.Keyword(null,"col","col",-1959363084),column_29858,new cljs.core.Keyword(null,"name","name",1843675177),name_29884], null));
});})(seq__29698_29860,chunk__29699_29861,count__29700_29862,i__29701_29863,seq__29684_29810,chunk__29685_29811,count__29686_29812,i__29687_29813,seq__29656_29706,chunk__29657_29707,count__29658_29708,i__29659_29709,map__29704_29880,map__29704_29881__$1,gline_29882,gcol_29883,name_29884,seq__29698_29874__$1,temp__4425__auto___29873__$2,vec__29697_29857,column_29858,column_info_29859,seq__29684_29851__$1,temp__4425__auto___29850__$1,vec__29683_29807,line_29808,columns_29809,seq__29656_29801__$1,temp__4425__auto___29800,inverted))
,cljs.core.sorted_map.call(null)));

var G__29885 = cljs.core.next.call(null,seq__29698_29874__$1);
var G__29886 = null;
var G__29887 = (0);
var G__29888 = (0);
seq__29698_29860 = G__29885;
chunk__29699_29861 = G__29886;
count__29700_29862 = G__29887;
i__29701_29863 = G__29888;
continue;
}
} else {
}
}
break;
}

var G__29889 = cljs.core.next.call(null,seq__29684_29851__$1);
var G__29890 = null;
var G__29891 = (0);
var G__29892 = (0);
seq__29684_29810 = G__29889;
chunk__29685_29811 = G__29890;
count__29686_29812 = G__29891;
i__29687_29813 = G__29892;
continue;
}
} else {
}
}
break;
}

var G__29893 = cljs.core.next.call(null,seq__29656_29801__$1);
var G__29894 = null;
var G__29895 = (0);
var G__29896 = (0);
seq__29656_29706 = G__29893;
chunk__29657_29707 = G__29894;
count__29658_29708 = G__29895;
i__29659_29709 = G__29896;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map