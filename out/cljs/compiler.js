// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_dependents_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__30948 = s;
var map__30948__$1 = ((((!((map__30948 == null)))?((((map__30948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30948):map__30948);
var name = cljs.core.get.call(null,map__30948__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__30948__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__30951 = info;
var map__30952 = G__30951;
var map__30952__$1 = ((((!((map__30952 == null)))?((((map__30952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30952):map__30952);
var shadow = cljs.core.get.call(null,map__30952__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__30951__$1 = G__30951;
while(true){
var d__$2 = d__$1;
var map__30954 = G__30951__$1;
var map__30954__$1 = ((((!((map__30954 == null)))?((((map__30954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30954):map__30954);
var shadow__$1 = cljs.core.get.call(null,map__30954__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__30956 = (d__$2 + (1));
var G__30957 = shadow__$1;
d__$1 = G__30956;
G__30951__$1 = G__30957;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.munge;
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__30958){
var map__30963 = p__30958;
var map__30963__$1 = ((((!((map__30963 == null)))?((((map__30963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30963):map__30963);
var name_var = map__30963__$1;
var name = cljs.core.get.call(null,map__30963__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__30963__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__30965 = info;
var map__30965__$1 = ((((!((map__30965 == null)))?((((map__30965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30965):map__30965);
var ns = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args30967 = [];
var len__24553__auto___30970 = arguments.length;
var i__24554__auto___30971 = (0);
while(true){
if((i__24554__auto___30971 < len__24553__auto___30970)){
args30967.push((arguments[i__24554__auto___30971]));

var G__30972 = (i__24554__auto___30971 + (1));
i__24554__auto___30971 = G__30972;
continue;
} else {
}
break;
}

var G__30969 = args30967.length;
switch (G__30969) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30967.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.core._hash.call(null,name);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__30975 = cp;
switch (G__30975) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__30981_30985 = cljs.core.seq.call(null,s);
var chunk__30982_30986 = null;
var count__30983_30987 = (0);
var i__30984_30988 = (0);
while(true){
if((i__30984_30988 < count__30983_30987)){
var c_30989 = cljs.core._nth.call(null,chunk__30982_30986,i__30984_30988);
sb.append(cljs.compiler.escape_char.call(null,c_30989));

var G__30990 = seq__30981_30985;
var G__30991 = chunk__30982_30986;
var G__30992 = count__30983_30987;
var G__30993 = (i__30984_30988 + (1));
seq__30981_30985 = G__30990;
chunk__30982_30986 = G__30991;
count__30983_30987 = G__30992;
i__30984_30988 = G__30993;
continue;
} else {
var temp__4425__auto___30994 = cljs.core.seq.call(null,seq__30981_30985);
if(temp__4425__auto___30994){
var seq__30981_30995__$1 = temp__4425__auto___30994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30981_30995__$1)){
var c__24298__auto___30996 = cljs.core.chunk_first.call(null,seq__30981_30995__$1);
var G__30997 = cljs.core.chunk_rest.call(null,seq__30981_30995__$1);
var G__30998 = c__24298__auto___30996;
var G__30999 = cljs.core.count.call(null,c__24298__auto___30996);
var G__31000 = (0);
seq__30981_30985 = G__30997;
chunk__30982_30986 = G__30998;
count__30983_30987 = G__30999;
i__30984_30988 = G__31000;
continue;
} else {
var c_31001 = cljs.core.first.call(null,seq__30981_30995__$1);
sb.append(cljs.compiler.escape_char.call(null,c_31001));

var G__31002 = cljs.core.next.call(null,seq__30981_30995__$1);
var G__31003 = null;
var G__31004 = (0);
var G__31005 = (0);
seq__30981_30985 = G__31002;
chunk__30982_30986 = G__31003;
count__30983_30987 = G__31004;
i__30984_30988 = G__31005;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__24408__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24412__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24412__auto__,method_table__24408__auto__,prefer_table__24409__auto__,method_cache__24410__auto__,cached_hierarchy__24411__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__25093__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__25093__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__31011_31016 = ast;
var map__31011_31017__$1 = ((((!((map__31011_31016 == null)))?((((map__31011_31016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31011_31016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31011_31016):map__31011_31016);
var env_31018 = cljs.core.get.call(null,map__31011_31017__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_31018))){
var map__31013_31019 = env_31018;
var map__31013_31020__$1 = ((((!((map__31013_31019 == null)))?((((map__31013_31019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31013_31019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31013_31019):map__31013_31019);
var line_31021 = cljs.core.get.call(null,map__31013_31020__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_31022 = cljs.core.get.call(null,map__31013_31020__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__31013_31019,map__31013_31020__$1,line_31021,column_31022,map__31011_31016,map__31011_31017__$1,env_31018,val__25093__auto__){
return (function (m){
var minfo = (function (){var G__31015 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__31015__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__31015,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__31015);
return G__31015__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_31021 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__31013_31019,map__31013_31020__$1,line_31021,column_31022,map__31011_31016,map__31011_31017__$1,env_31018,val__25093__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_31022)?(column_31022 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__31013_31019,map__31013_31020__$1,line_31021,column_31022,map__31011_31016,map__31011_31017__$1,env_31018,val__25093__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__31013_31019,map__31013_31020__$1,line_31021,column_31022,map__31011_31016,map__31011_31017__$1,env_31018,val__25093__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__31013_31019,map__31013_31020__$1,line_31021,column_31022,map__31011_31016,map__31011_31017__$1,env_31018,val__25093__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__31013_31019,map__31013_31020__$1,line_31021,column_31022,map__31011_31016,map__31011_31017__$1,env_31018,val__25093__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__25093__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__24560__auto__ = [];
var len__24553__auto___31029 = arguments.length;
var i__24554__auto___31030 = (0);
while(true){
if((i__24554__auto___31030 < len__24553__auto___31029)){
args__24560__auto__.push((arguments[i__24554__auto___31030]));

var G__31031 = (i__24554__auto___31030 + (1));
i__24554__auto___31030 = G__31031;
continue;
} else {
}
break;
}

var argseq__24561__auto__ = ((((0) < args__24560__auto__.length))?(new cljs.core.IndexedSeq(args__24560__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__24561__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__31025_31032 = cljs.core.seq.call(null,xs);
var chunk__31026_31033 = null;
var count__31027_31034 = (0);
var i__31028_31035 = (0);
while(true){
if((i__31028_31035 < count__31027_31034)){
var x_31036 = cljs.core._nth.call(null,chunk__31026_31033,i__31028_31035);
if((x_31036 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_31036)){
cljs.compiler.emit.call(null,x_31036);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_31036)){
cljs.core.apply.call(null,cljs.compiler.emits,x_31036);
} else {
if(goog.isFunction(x_31036)){
x_31036.call(null);
} else {
var s_31037 = cljs.core.print_str.call(null,x_31036);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__31025_31032,chunk__31026_31033,count__31027_31034,i__31028_31035,s_31037,x_31036){
return (function (p1__31023_SHARP_){
return (p1__31023_SHARP_ + cljs.core.count.call(null,s_31037));
});})(seq__31025_31032,chunk__31026_31033,count__31027_31034,i__31028_31035,s_31037,x_31036))
);
}

cljs.core.print.call(null,s_31037);

}
}
}
}

var G__31038 = seq__31025_31032;
var G__31039 = chunk__31026_31033;
var G__31040 = count__31027_31034;
var G__31041 = (i__31028_31035 + (1));
seq__31025_31032 = G__31038;
chunk__31026_31033 = G__31039;
count__31027_31034 = G__31040;
i__31028_31035 = G__31041;
continue;
} else {
var temp__4425__auto___31042 = cljs.core.seq.call(null,seq__31025_31032);
if(temp__4425__auto___31042){
var seq__31025_31043__$1 = temp__4425__auto___31042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31025_31043__$1)){
var c__24298__auto___31044 = cljs.core.chunk_first.call(null,seq__31025_31043__$1);
var G__31045 = cljs.core.chunk_rest.call(null,seq__31025_31043__$1);
var G__31046 = c__24298__auto___31044;
var G__31047 = cljs.core.count.call(null,c__24298__auto___31044);
var G__31048 = (0);
seq__31025_31032 = G__31045;
chunk__31026_31033 = G__31046;
count__31027_31034 = G__31047;
i__31028_31035 = G__31048;
continue;
} else {
var x_31049 = cljs.core.first.call(null,seq__31025_31043__$1);
if((x_31049 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_31049)){
cljs.compiler.emit.call(null,x_31049);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_31049)){
cljs.core.apply.call(null,cljs.compiler.emits,x_31049);
} else {
if(goog.isFunction(x_31049)){
x_31049.call(null);
} else {
var s_31050 = cljs.core.print_str.call(null,x_31049);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__31025_31032,chunk__31026_31033,count__31027_31034,i__31028_31035,s_31050,x_31049,seq__31025_31043__$1,temp__4425__auto___31042){
return (function (p1__31023_SHARP_){
return (p1__31023_SHARP_ + cljs.core.count.call(null,s_31050));
});})(seq__31025_31032,chunk__31026_31033,count__31027_31034,i__31028_31035,s_31050,x_31049,seq__31025_31043__$1,temp__4425__auto___31042))
);
}

cljs.core.print.call(null,s_31050);

}
}
}
}

var G__31051 = cljs.core.next.call(null,seq__31025_31043__$1);
var G__31052 = null;
var G__31053 = (0);
var G__31054 = (0);
seq__31025_31032 = G__31051;
chunk__31026_31033 = G__31052;
count__31027_31034 = G__31053;
i__31028_31035 = G__31054;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq31024){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31024));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__24560__auto__ = [];
var len__24553__auto___31059 = arguments.length;
var i__24554__auto___31060 = (0);
while(true){
if((i__24554__auto___31060 < len__24553__auto___31059)){
args__24560__auto__.push((arguments[i__24554__auto___31060]));

var G__31061 = (i__24554__auto___31060 + (1));
i__24554__auto___31060 = G__31061;
continue;
} else {
}
break;
}

var argseq__24561__auto__ = ((((0) < args__24560__auto__.length))?(new cljs.core.IndexedSeq(args__24560__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__24561__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__31056){
var map__31057 = p__31056;
var map__31057__$1 = ((((!((map__31057 == null)))?((((map__31057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31057):map__31057);
var m = map__31057__$1;
var gen_line = cljs.core.get.call(null,map__31057__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq31055){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31055));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__24469__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31064_31066 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31065_31067 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31064_31066,_STAR_print_fn_STAR_31065_31067,sb__24469__auto__){
return (function (x__24470__auto__){
return sb__24469__auto__.append(x__24470__auto__);
});})(_STAR_print_newline_STAR_31064_31066,_STAR_print_fn_STAR_31065_31067,sb__24469__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31065_31067;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31064_31066;
}
return [cljs.core.str(sb__24469__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__24408__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24412__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24412__auto__,method_table__24408__auto__,prefer_table__24409__auto__,method_cache__24410__auto__,cached_hierarchy__24411__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,x);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__31068 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__31068,(0),null);
var flags = cljs.core.nth.call(null,vec__31068,(1),null);
var pattern = cljs.core.nth.call(null,vec__31068,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__31070){
var map__31071 = p__31070;
var map__31071__$1 = ((((!((map__31071 == null)))?((((map__31071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31071):map__31071);
var arg = map__31071__$1;
var info = cljs.core.get.call(null,map__31071__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__31071__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__31071__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__23495__auto__ = js_module_name;
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__31073 = info__$1;
var G__31073__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__31073):G__31073);
return G__31073__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__31074){
var map__31075 = p__31074;
var map__31075__$1 = ((((!((map__31075 == null)))?((((map__31075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31075):map__31075);
var arg = map__31075__$1;
var env = cljs.core.get.call(null,map__31075__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__31075__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__31075__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__31075__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__31077 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__31077__$1 = ((((!((map__31077 == null)))?((((map__31077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31077):map__31077);
var name = cljs.core.get.call(null,map__31077__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__31079){
var map__31080 = p__31079;
var map__31080__$1 = ((((!((map__31080 == null)))?((((map__31080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31080):map__31080);
var expr = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__31082_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__31082_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__31083){
var map__31084 = p__31083;
var map__31084__$1 = ((((!((map__31084 == null)))?((((map__31084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31084):map__31084);
var env = cljs.core.get.call(null,map__31084__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__31084__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__31084__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__31086){
var map__31087 = p__31086;
var map__31087__$1 = ((((!((map__31087 == null)))?((((map__31087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31087):map__31087);
var items = cljs.core.get.call(null,map__31087__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__31087__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__31089){
var map__31090 = p__31089;
var map__31090__$1 = ((((!((map__31090 == null)))?((((map__31090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31090):map__31090);
var items = cljs.core.get.call(null,map__31090__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__31090__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_31092 = cljs.core.count.call(null,items);
if((cnt_31092 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_31092,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__31093_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__31093_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__31094){
var map__31095 = p__31094;
var map__31095__$1 = ((((!((map__31095 == null)))?((((map__31095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31095):map__31095);
var items = cljs.core.get.call(null,map__31095__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__31095__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__31097){
var map__31098 = p__31097;
var map__31098__$1 = ((((!((map__31098 == null)))?((((map__31098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31098):map__31098);
var items = cljs.core.get.call(null,map__31098__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__31098__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__31098__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___31108 = cljs.core.seq.call(null,items);
if(temp__4425__auto___31108){
var items_31109__$1 = temp__4425__auto___31108;
var vec__31100_31110 = items_31109__$1;
var vec__31101_31111 = cljs.core.nth.call(null,vec__31100_31110,(0),null);
var k_31112 = cljs.core.nth.call(null,vec__31101_31111,(0),null);
var v_31113 = cljs.core.nth.call(null,vec__31101_31111,(1),null);
var r_31114 = cljs.core.nthnext.call(null,vec__31100_31110,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_31112),"\": ",v_31113);

var seq__31102_31115 = cljs.core.seq.call(null,r_31114);
var chunk__31103_31116 = null;
var count__31104_31117 = (0);
var i__31105_31118 = (0);
while(true){
if((i__31105_31118 < count__31104_31117)){
var vec__31106_31119 = cljs.core._nth.call(null,chunk__31103_31116,i__31105_31118);
var k_31120__$1 = cljs.core.nth.call(null,vec__31106_31119,(0),null);
var v_31121__$1 = cljs.core.nth.call(null,vec__31106_31119,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_31120__$1),"\": ",v_31121__$1);

var G__31122 = seq__31102_31115;
var G__31123 = chunk__31103_31116;
var G__31124 = count__31104_31117;
var G__31125 = (i__31105_31118 + (1));
seq__31102_31115 = G__31122;
chunk__31103_31116 = G__31123;
count__31104_31117 = G__31124;
i__31105_31118 = G__31125;
continue;
} else {
var temp__4425__auto___31126__$1 = cljs.core.seq.call(null,seq__31102_31115);
if(temp__4425__auto___31126__$1){
var seq__31102_31127__$1 = temp__4425__auto___31126__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31102_31127__$1)){
var c__24298__auto___31128 = cljs.core.chunk_first.call(null,seq__31102_31127__$1);
var G__31129 = cljs.core.chunk_rest.call(null,seq__31102_31127__$1);
var G__31130 = c__24298__auto___31128;
var G__31131 = cljs.core.count.call(null,c__24298__auto___31128);
var G__31132 = (0);
seq__31102_31115 = G__31129;
chunk__31103_31116 = G__31130;
count__31104_31117 = G__31131;
i__31105_31118 = G__31132;
continue;
} else {
var vec__31107_31133 = cljs.core.first.call(null,seq__31102_31127__$1);
var k_31134__$1 = cljs.core.nth.call(null,vec__31107_31133,(0),null);
var v_31135__$1 = cljs.core.nth.call(null,vec__31107_31133,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_31134__$1),"\": ",v_31135__$1);

var G__31136 = cljs.core.next.call(null,seq__31102_31127__$1);
var G__31137 = null;
var G__31138 = (0);
var G__31139 = (0);
seq__31102_31115 = G__31136;
chunk__31103_31116 = G__31137;
count__31104_31117 = G__31138;
i__31105_31118 = G__31139;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__31140){
var map__31141 = p__31140;
var map__31141__$1 = ((((!((map__31141 == null)))?((((map__31141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31141):map__31141);
var form = cljs.core.get.call(null,map__31141__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__31141__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__31143){
var map__31146 = p__31143;
var map__31146__$1 = ((((!((map__31146 == null)))?((((map__31146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31146):map__31146);
var op = cljs.core.get.call(null,map__31146__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__31146__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__23483__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__23483__auto__){
var and__23483__auto____$1 = form;
if(cljs.core.truth_(and__23483__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__23483__auto____$1;
}
} else {
return and__23483__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__31148){
var map__31151 = p__31148;
var map__31151__$1 = ((((!((map__31151 == null)))?((((map__31151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31151):map__31151);
var op = cljs.core.get.call(null,map__31151__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__31151__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__23495__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__31153){
var map__31154 = p__31153;
var map__31154__$1 = ((((!((map__31154 == null)))?((((map__31154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31154):map__31154);
var test = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__23495__auto__ = unchecked;
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__31156){
var map__31157 = p__31156;
var map__31157__$1 = ((((!((map__31157 == null)))?((((map__31157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31157):map__31157);
var v = cljs.core.get.call(null,map__31157__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__31157__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__31157__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__31157__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__31157__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__31159_31173 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__31160_31174 = null;
var count__31161_31175 = (0);
var i__31162_31176 = (0);
while(true){
if((i__31162_31176 < count__31161_31175)){
var vec__31163_31177 = cljs.core._nth.call(null,chunk__31160_31174,i__31162_31176);
var ts_31178 = cljs.core.nth.call(null,vec__31163_31177,(0),null);
var then_31179 = cljs.core.nth.call(null,vec__31163_31177,(1),null);
var seq__31164_31180 = cljs.core.seq.call(null,ts_31178);
var chunk__31165_31181 = null;
var count__31166_31182 = (0);
var i__31167_31183 = (0);
while(true){
if((i__31167_31183 < count__31166_31182)){
var test_31184 = cljs.core._nth.call(null,chunk__31165_31181,i__31167_31183);
cljs.compiler.emitln.call(null,"case ",test_31184,":");

var G__31185 = seq__31164_31180;
var G__31186 = chunk__31165_31181;
var G__31187 = count__31166_31182;
var G__31188 = (i__31167_31183 + (1));
seq__31164_31180 = G__31185;
chunk__31165_31181 = G__31186;
count__31166_31182 = G__31187;
i__31167_31183 = G__31188;
continue;
} else {
var temp__4425__auto___31189 = cljs.core.seq.call(null,seq__31164_31180);
if(temp__4425__auto___31189){
var seq__31164_31190__$1 = temp__4425__auto___31189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31164_31190__$1)){
var c__24298__auto___31191 = cljs.core.chunk_first.call(null,seq__31164_31190__$1);
var G__31192 = cljs.core.chunk_rest.call(null,seq__31164_31190__$1);
var G__31193 = c__24298__auto___31191;
var G__31194 = cljs.core.count.call(null,c__24298__auto___31191);
var G__31195 = (0);
seq__31164_31180 = G__31192;
chunk__31165_31181 = G__31193;
count__31166_31182 = G__31194;
i__31167_31183 = G__31195;
continue;
} else {
var test_31196 = cljs.core.first.call(null,seq__31164_31190__$1);
cljs.compiler.emitln.call(null,"case ",test_31196,":");

var G__31197 = cljs.core.next.call(null,seq__31164_31190__$1);
var G__31198 = null;
var G__31199 = (0);
var G__31200 = (0);
seq__31164_31180 = G__31197;
chunk__31165_31181 = G__31198;
count__31166_31182 = G__31199;
i__31167_31183 = G__31200;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_31179);
} else {
cljs.compiler.emitln.call(null,then_31179);
}

cljs.compiler.emitln.call(null,"break;");

var G__31201 = seq__31159_31173;
var G__31202 = chunk__31160_31174;
var G__31203 = count__31161_31175;
var G__31204 = (i__31162_31176 + (1));
seq__31159_31173 = G__31201;
chunk__31160_31174 = G__31202;
count__31161_31175 = G__31203;
i__31162_31176 = G__31204;
continue;
} else {
var temp__4425__auto___31205 = cljs.core.seq.call(null,seq__31159_31173);
if(temp__4425__auto___31205){
var seq__31159_31206__$1 = temp__4425__auto___31205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31159_31206__$1)){
var c__24298__auto___31207 = cljs.core.chunk_first.call(null,seq__31159_31206__$1);
var G__31208 = cljs.core.chunk_rest.call(null,seq__31159_31206__$1);
var G__31209 = c__24298__auto___31207;
var G__31210 = cljs.core.count.call(null,c__24298__auto___31207);
var G__31211 = (0);
seq__31159_31173 = G__31208;
chunk__31160_31174 = G__31209;
count__31161_31175 = G__31210;
i__31162_31176 = G__31211;
continue;
} else {
var vec__31168_31212 = cljs.core.first.call(null,seq__31159_31206__$1);
var ts_31213 = cljs.core.nth.call(null,vec__31168_31212,(0),null);
var then_31214 = cljs.core.nth.call(null,vec__31168_31212,(1),null);
var seq__31169_31215 = cljs.core.seq.call(null,ts_31213);
var chunk__31170_31216 = null;
var count__31171_31217 = (0);
var i__31172_31218 = (0);
while(true){
if((i__31172_31218 < count__31171_31217)){
var test_31219 = cljs.core._nth.call(null,chunk__31170_31216,i__31172_31218);
cljs.compiler.emitln.call(null,"case ",test_31219,":");

var G__31220 = seq__31169_31215;
var G__31221 = chunk__31170_31216;
var G__31222 = count__31171_31217;
var G__31223 = (i__31172_31218 + (1));
seq__31169_31215 = G__31220;
chunk__31170_31216 = G__31221;
count__31171_31217 = G__31222;
i__31172_31218 = G__31223;
continue;
} else {
var temp__4425__auto___31224__$1 = cljs.core.seq.call(null,seq__31169_31215);
if(temp__4425__auto___31224__$1){
var seq__31169_31225__$1 = temp__4425__auto___31224__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31169_31225__$1)){
var c__24298__auto___31226 = cljs.core.chunk_first.call(null,seq__31169_31225__$1);
var G__31227 = cljs.core.chunk_rest.call(null,seq__31169_31225__$1);
var G__31228 = c__24298__auto___31226;
var G__31229 = cljs.core.count.call(null,c__24298__auto___31226);
var G__31230 = (0);
seq__31169_31215 = G__31227;
chunk__31170_31216 = G__31228;
count__31171_31217 = G__31229;
i__31172_31218 = G__31230;
continue;
} else {
var test_31231 = cljs.core.first.call(null,seq__31169_31225__$1);
cljs.compiler.emitln.call(null,"case ",test_31231,":");

var G__31232 = cljs.core.next.call(null,seq__31169_31225__$1);
var G__31233 = null;
var G__31234 = (0);
var G__31235 = (0);
seq__31169_31215 = G__31232;
chunk__31170_31216 = G__31233;
count__31171_31217 = G__31234;
i__31172_31218 = G__31235;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_31214);
} else {
cljs.compiler.emitln.call(null,then_31214);
}

cljs.compiler.emitln.call(null,"break;");

var G__31236 = cljs.core.next.call(null,seq__31159_31206__$1);
var G__31237 = null;
var G__31238 = (0);
var G__31239 = (0);
seq__31159_31173 = G__31236;
chunk__31160_31174 = G__31237;
count__31161_31175 = G__31238;
i__31162_31176 = G__31239;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__31240){
var map__31241 = p__31240;
var map__31241__$1 = ((((!((map__31241 == null)))?((((map__31241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31241):map__31241);
var throw$ = cljs.core.get.call(null,map__31241__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__31241__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__31246 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__31246,(0),null);
var rstr = cljs.core.nth.call(null,vec__31246,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__31246,fstr,rstr,ret_t,axstr){
return (function (p1__31243_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__31243_SHARP_);
});})(idx,vec__31246,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__31247 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__31247__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__31247),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__31247);
return G__31247__$1;
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__31248_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__31248_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__31251 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__31251,(0),null);
var ts = cljs.core.nth.call(null,vec__31251,(1),null);
var n = cljs.core.nth.call(null,vec__31251,(2),null);
var xs = cljs.core.nthnext.call(null,vec__31251,(3));
if(cljs.core.truth_((function (){var and__23483__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__23483__auto__){
var and__23483__auto____$1 = ts;
if(cljs.core.truth_(and__23483__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__23483__auto____$1;
}
} else {
return and__23483__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__31252 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__31252,(0),null);
var ts = cljs.core.nth.call(null,vec__31252,(1),null);
var xs = cljs.core.nthnext.call(null,vec__31252,(2));
if(cljs.core.truth_((function (){var and__23483__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__23483__auto__){
var and__23483__auto____$1 = ts;
if(cljs.core.truth_(and__23483__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__23483__auto____$1;
}
} else {
return and__23483__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args31254 = [];
var len__24553__auto___31281 = arguments.length;
var i__24554__auto___31282 = (0);
while(true){
if((i__24554__auto___31282 < len__24553__auto___31281)){
args31254.push((arguments[i__24554__auto___31282]));

var G__31283 = (i__24554__auto___31282 + (1));
i__24554__auto___31282 = G__31283;
continue;
} else {
}
break;
}

var G__31256 = args31254.length;
switch (G__31256) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31254.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__31272 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__31253_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__31253_SHARP_);
} else {
return p1__31253_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__31272,(0),null);
var ys = cljs.core.nthnext.call(null,vec__31272,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__31273 = cljs.core.seq.call(null,ys);
var chunk__31274 = null;
var count__31275 = (0);
var i__31276 = (0);
while(true){
if((i__31276 < count__31275)){
var next_line = cljs.core._nth.call(null,chunk__31274,i__31276);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__31285 = seq__31273;
var G__31286 = chunk__31274;
var G__31287 = count__31275;
var G__31288 = (i__31276 + (1));
seq__31273 = G__31285;
chunk__31274 = G__31286;
count__31275 = G__31287;
i__31276 = G__31288;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31273);
if(temp__4425__auto__){
var seq__31273__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31273__$1)){
var c__24298__auto__ = cljs.core.chunk_first.call(null,seq__31273__$1);
var G__31289 = cljs.core.chunk_rest.call(null,seq__31273__$1);
var G__31290 = c__24298__auto__;
var G__31291 = cljs.core.count.call(null,c__24298__auto__);
var G__31292 = (0);
seq__31273 = G__31289;
chunk__31274 = G__31290;
count__31275 = G__31291;
i__31276 = G__31292;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__31273__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__31293 = cljs.core.next.call(null,seq__31273__$1);
var G__31294 = null;
var G__31295 = (0);
var G__31296 = (0);
seq__31273 = G__31293;
chunk__31274 = G__31294;
count__31275 = G__31295;
i__31276 = G__31296;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__31277_31297 = cljs.core.seq.call(null,docs__$2);
var chunk__31278_31298 = null;
var count__31279_31299 = (0);
var i__31280_31300 = (0);
while(true){
if((i__31280_31300 < count__31279_31299)){
var e_31301 = cljs.core._nth.call(null,chunk__31278_31298,i__31280_31300);
if(cljs.core.truth_(e_31301)){
print_comment_lines.call(null,e_31301);
} else {
}

var G__31302 = seq__31277_31297;
var G__31303 = chunk__31278_31298;
var G__31304 = count__31279_31299;
var G__31305 = (i__31280_31300 + (1));
seq__31277_31297 = G__31302;
chunk__31278_31298 = G__31303;
count__31279_31299 = G__31304;
i__31280_31300 = G__31305;
continue;
} else {
var temp__4425__auto___31306 = cljs.core.seq.call(null,seq__31277_31297);
if(temp__4425__auto___31306){
var seq__31277_31307__$1 = temp__4425__auto___31306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31277_31307__$1)){
var c__24298__auto___31308 = cljs.core.chunk_first.call(null,seq__31277_31307__$1);
var G__31309 = cljs.core.chunk_rest.call(null,seq__31277_31307__$1);
var G__31310 = c__24298__auto___31308;
var G__31311 = cljs.core.count.call(null,c__24298__auto___31308);
var G__31312 = (0);
seq__31277_31297 = G__31309;
chunk__31278_31298 = G__31310;
count__31279_31299 = G__31311;
i__31280_31300 = G__31312;
continue;
} else {
var e_31313 = cljs.core.first.call(null,seq__31277_31307__$1);
if(cljs.core.truth_(e_31313)){
print_comment_lines.call(null,e_31313);
} else {
}

var G__31314 = cljs.core.next.call(null,seq__31277_31307__$1);
var G__31315 = null;
var G__31316 = (0);
var G__31317 = (0);
seq__31277_31297 = G__31314;
chunk__31278_31298 = G__31315;
count__31279_31299 = G__31316;
i__31280_31300 = G__31317;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__23483__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__31319_SHARP_){
return goog.string.startsWith(p1__31319_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__23483__auto__)){
var and__23483__auto____$1 = opts;
if(cljs.core.truth_(and__23483__auto____$1)){
var and__23483__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__23483__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__23483__auto____$2;
}
} else {
return and__23483__auto____$1;
}
} else {
return and__23483__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__31320){
var map__31321 = p__31320;
var map__31321__$1 = ((((!((map__31321 == null)))?((((map__31321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31321):map__31321);
var name = cljs.core.get.call(null,map__31321__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__31321__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__31321__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__31321__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__31321__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__31321__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__31321__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__31321__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__31321__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__23483__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__23483__auto__)){
return test;
} else {
return and__23483__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__31323){
var map__31340 = p__31323;
var map__31340__$1 = ((((!((map__31340 == null)))?((((map__31340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31340):map__31340);
var name = cljs.core.get.call(null,map__31340__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__31340__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__31340__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__31342_31356 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__31343_31357 = null;
var count__31344_31358 = (0);
var i__31345_31359 = (0);
while(true){
if((i__31345_31359 < count__31344_31358)){
var vec__31346_31360 = cljs.core._nth.call(null,chunk__31343_31357,i__31345_31359);
var i_31361 = cljs.core.nth.call(null,vec__31346_31360,(0),null);
var param_31362 = cljs.core.nth.call(null,vec__31346_31360,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_31362);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__31363 = seq__31342_31356;
var G__31364 = chunk__31343_31357;
var G__31365 = count__31344_31358;
var G__31366 = (i__31345_31359 + (1));
seq__31342_31356 = G__31363;
chunk__31343_31357 = G__31364;
count__31344_31358 = G__31365;
i__31345_31359 = G__31366;
continue;
} else {
var temp__4425__auto___31367 = cljs.core.seq.call(null,seq__31342_31356);
if(temp__4425__auto___31367){
var seq__31342_31368__$1 = temp__4425__auto___31367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31342_31368__$1)){
var c__24298__auto___31369 = cljs.core.chunk_first.call(null,seq__31342_31368__$1);
var G__31370 = cljs.core.chunk_rest.call(null,seq__31342_31368__$1);
var G__31371 = c__24298__auto___31369;
var G__31372 = cljs.core.count.call(null,c__24298__auto___31369);
var G__31373 = (0);
seq__31342_31356 = G__31370;
chunk__31343_31357 = G__31371;
count__31344_31358 = G__31372;
i__31345_31359 = G__31373;
continue;
} else {
var vec__31347_31374 = cljs.core.first.call(null,seq__31342_31368__$1);
var i_31375 = cljs.core.nth.call(null,vec__31347_31374,(0),null);
var param_31376 = cljs.core.nth.call(null,vec__31347_31374,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_31376);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__31377 = cljs.core.next.call(null,seq__31342_31368__$1);
var G__31378 = null;
var G__31379 = (0);
var G__31380 = (0);
seq__31342_31356 = G__31377;
chunk__31343_31357 = G__31378;
count__31344_31358 = G__31379;
i__31345_31359 = G__31380;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__31348_31381 = cljs.core.seq.call(null,params);
var chunk__31349_31382 = null;
var count__31350_31383 = (0);
var i__31351_31384 = (0);
while(true){
if((i__31351_31384 < count__31350_31383)){
var param_31385 = cljs.core._nth.call(null,chunk__31349_31382,i__31351_31384);
cljs.compiler.emit.call(null,param_31385);

if(cljs.core._EQ_.call(null,param_31385,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__31386 = seq__31348_31381;
var G__31387 = chunk__31349_31382;
var G__31388 = count__31350_31383;
var G__31389 = (i__31351_31384 + (1));
seq__31348_31381 = G__31386;
chunk__31349_31382 = G__31387;
count__31350_31383 = G__31388;
i__31351_31384 = G__31389;
continue;
} else {
var temp__4425__auto___31390 = cljs.core.seq.call(null,seq__31348_31381);
if(temp__4425__auto___31390){
var seq__31348_31391__$1 = temp__4425__auto___31390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31348_31391__$1)){
var c__24298__auto___31392 = cljs.core.chunk_first.call(null,seq__31348_31391__$1);
var G__31393 = cljs.core.chunk_rest.call(null,seq__31348_31391__$1);
var G__31394 = c__24298__auto___31392;
var G__31395 = cljs.core.count.call(null,c__24298__auto___31392);
var G__31396 = (0);
seq__31348_31381 = G__31393;
chunk__31349_31382 = G__31394;
count__31350_31383 = G__31395;
i__31351_31384 = G__31396;
continue;
} else {
var param_31397 = cljs.core.first.call(null,seq__31348_31391__$1);
cljs.compiler.emit.call(null,param_31397);

if(cljs.core._EQ_.call(null,param_31397,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__31398 = cljs.core.next.call(null,seq__31348_31391__$1);
var G__31399 = null;
var G__31400 = (0);
var G__31401 = (0);
seq__31348_31381 = G__31398;
chunk__31349_31382 = G__31399;
count__31350_31383 = G__31400;
i__31351_31384 = G__31401;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__31352_31402 = cljs.core.seq.call(null,params);
var chunk__31353_31403 = null;
var count__31354_31404 = (0);
var i__31355_31405 = (0);
while(true){
if((i__31355_31405 < count__31354_31404)){
var param_31406 = cljs.core._nth.call(null,chunk__31353_31403,i__31355_31405);
cljs.compiler.emit.call(null,param_31406);

if(cljs.core._EQ_.call(null,param_31406,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__31407 = seq__31352_31402;
var G__31408 = chunk__31353_31403;
var G__31409 = count__31354_31404;
var G__31410 = (i__31355_31405 + (1));
seq__31352_31402 = G__31407;
chunk__31353_31403 = G__31408;
count__31354_31404 = G__31409;
i__31355_31405 = G__31410;
continue;
} else {
var temp__4425__auto___31411 = cljs.core.seq.call(null,seq__31352_31402);
if(temp__4425__auto___31411){
var seq__31352_31412__$1 = temp__4425__auto___31411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31352_31412__$1)){
var c__24298__auto___31413 = cljs.core.chunk_first.call(null,seq__31352_31412__$1);
var G__31414 = cljs.core.chunk_rest.call(null,seq__31352_31412__$1);
var G__31415 = c__24298__auto___31413;
var G__31416 = cljs.core.count.call(null,c__24298__auto___31413);
var G__31417 = (0);
seq__31352_31402 = G__31414;
chunk__31353_31403 = G__31415;
count__31354_31404 = G__31416;
i__31355_31405 = G__31417;
continue;
} else {
var param_31418 = cljs.core.first.call(null,seq__31352_31412__$1);
cljs.compiler.emit.call(null,param_31418);

if(cljs.core._EQ_.call(null,param_31418,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__31419 = cljs.core.next.call(null,seq__31352_31412__$1);
var G__31420 = null;
var G__31421 = (0);
var G__31422 = (0);
seq__31352_31402 = G__31419;
chunk__31353_31403 = G__31420;
count__31354_31404 = G__31421;
i__31355_31405 = G__31422;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__31427 = cljs.core.seq.call(null,params);
var chunk__31428 = null;
var count__31429 = (0);
var i__31430 = (0);
while(true){
if((i__31430 < count__31429)){
var param = cljs.core._nth.call(null,chunk__31428,i__31430);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__31431 = seq__31427;
var G__31432 = chunk__31428;
var G__31433 = count__31429;
var G__31434 = (i__31430 + (1));
seq__31427 = G__31431;
chunk__31428 = G__31432;
count__31429 = G__31433;
i__31430 = G__31434;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31427);
if(temp__4425__auto__){
var seq__31427__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31427__$1)){
var c__24298__auto__ = cljs.core.chunk_first.call(null,seq__31427__$1);
var G__31435 = cljs.core.chunk_rest.call(null,seq__31427__$1);
var G__31436 = c__24298__auto__;
var G__31437 = cljs.core.count.call(null,c__24298__auto__);
var G__31438 = (0);
seq__31427 = G__31435;
chunk__31428 = G__31436;
count__31429 = G__31437;
i__31430 = G__31438;
continue;
} else {
var param = cljs.core.first.call(null,seq__31427__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__31439 = cljs.core.next.call(null,seq__31427__$1);
var G__31440 = null;
var G__31441 = (0);
var G__31442 = (0);
seq__31427 = G__31439;
chunk__31428 = G__31440;
count__31429 = G__31441;
i__31430 = G__31442;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__31443){
var map__31446 = p__31443;
var map__31446__$1 = ((((!((map__31446 == null)))?((((map__31446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31446):map__31446);
var type = cljs.core.get.call(null,map__31446__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__31446__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__31446__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__31446__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__31446__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__31446__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__31446__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__31446__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))))].join('')));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__31448){
var map__31459 = p__31448;
var map__31459__$1 = ((((!((map__31459 == null)))?((((map__31459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31459):map__31459);
var f = map__31459__$1;
var type = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_31469__$1 = (function (){var or__23495__auto__ = name;
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_31470 = cljs.compiler.munge.call(null,name_31469__$1);
var delegate_name_31471 = [cljs.core.str(mname_31470),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_31471," = function (");

var seq__31461_31472 = cljs.core.seq.call(null,params);
var chunk__31462_31473 = null;
var count__31463_31474 = (0);
var i__31464_31475 = (0);
while(true){
if((i__31464_31475 < count__31463_31474)){
var param_31476 = cljs.core._nth.call(null,chunk__31462_31473,i__31464_31475);
cljs.compiler.emit.call(null,param_31476);

if(cljs.core._EQ_.call(null,param_31476,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__31477 = seq__31461_31472;
var G__31478 = chunk__31462_31473;
var G__31479 = count__31463_31474;
var G__31480 = (i__31464_31475 + (1));
seq__31461_31472 = G__31477;
chunk__31462_31473 = G__31478;
count__31463_31474 = G__31479;
i__31464_31475 = G__31480;
continue;
} else {
var temp__4425__auto___31481 = cljs.core.seq.call(null,seq__31461_31472);
if(temp__4425__auto___31481){
var seq__31461_31482__$1 = temp__4425__auto___31481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31461_31482__$1)){
var c__24298__auto___31483 = cljs.core.chunk_first.call(null,seq__31461_31482__$1);
var G__31484 = cljs.core.chunk_rest.call(null,seq__31461_31482__$1);
var G__31485 = c__24298__auto___31483;
var G__31486 = cljs.core.count.call(null,c__24298__auto___31483);
var G__31487 = (0);
seq__31461_31472 = G__31484;
chunk__31462_31473 = G__31485;
count__31463_31474 = G__31486;
i__31464_31475 = G__31487;
continue;
} else {
var param_31488 = cljs.core.first.call(null,seq__31461_31482__$1);
cljs.compiler.emit.call(null,param_31488);

if(cljs.core._EQ_.call(null,param_31488,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__31489 = cljs.core.next.call(null,seq__31461_31482__$1);
var G__31490 = null;
var G__31491 = (0);
var G__31492 = (0);
seq__31461_31472 = G__31489;
chunk__31462_31473 = G__31490;
count__31463_31474 = G__31491;
i__31464_31475 = G__31492;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_31470," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_31493 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_31493,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_31471,".call(this,");

var seq__31465_31494 = cljs.core.seq.call(null,params);
var chunk__31466_31495 = null;
var count__31467_31496 = (0);
var i__31468_31497 = (0);
while(true){
if((i__31468_31497 < count__31467_31496)){
var param_31498 = cljs.core._nth.call(null,chunk__31466_31495,i__31468_31497);
cljs.compiler.emit.call(null,param_31498);

if(cljs.core._EQ_.call(null,param_31498,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__31499 = seq__31465_31494;
var G__31500 = chunk__31466_31495;
var G__31501 = count__31467_31496;
var G__31502 = (i__31468_31497 + (1));
seq__31465_31494 = G__31499;
chunk__31466_31495 = G__31500;
count__31467_31496 = G__31501;
i__31468_31497 = G__31502;
continue;
} else {
var temp__4425__auto___31503 = cljs.core.seq.call(null,seq__31465_31494);
if(temp__4425__auto___31503){
var seq__31465_31504__$1 = temp__4425__auto___31503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31465_31504__$1)){
var c__24298__auto___31505 = cljs.core.chunk_first.call(null,seq__31465_31504__$1);
var G__31506 = cljs.core.chunk_rest.call(null,seq__31465_31504__$1);
var G__31507 = c__24298__auto___31505;
var G__31508 = cljs.core.count.call(null,c__24298__auto___31505);
var G__31509 = (0);
seq__31465_31494 = G__31506;
chunk__31466_31495 = G__31507;
count__31467_31496 = G__31508;
i__31468_31497 = G__31509;
continue;
} else {
var param_31510 = cljs.core.first.call(null,seq__31465_31504__$1);
cljs.compiler.emit.call(null,param_31510);

if(cljs.core._EQ_.call(null,param_31510,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__31511 = cljs.core.next.call(null,seq__31465_31504__$1);
var G__31512 = null;
var G__31513 = (0);
var G__31514 = (0);
seq__31465_31494 = G__31511;
chunk__31466_31495 = G__31512;
count__31467_31496 = G__31513;
i__31468_31497 = G__31514;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_31470,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_31470,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_31469__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_31470,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_31471,";");

cljs.compiler.emitln.call(null,"return ",mname_31470,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__31518){
var map__31519 = p__31518;
var map__31519__$1 = ((((!((map__31519 == null)))?((((map__31519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31519):map__31519);
var name = cljs.core.get.call(null,map__31519__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__31519__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__31519__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__31519__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__31519__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__31519__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__31519__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__31519,map__31519__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__31515_SHARP_){
var and__23483__auto__ = p1__31515_SHARP_;
if(cljs.core.truth_(and__23483__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__31515_SHARP_));
} else {
return and__23483__auto__;
}
});})(map__31519,map__31519__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_31540__$1 = (function (){var or__23495__auto__ = name;
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_31541 = cljs.compiler.munge.call(null,name_31540__$1);
var maxparams_31542 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_31543 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_31540__$1,mname_31541,maxparams_31542,loop_locals,map__31519,map__31519__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_31541),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_31540__$1,mname_31541,maxparams_31542,loop_locals,map__31519,map__31519__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_31544 = cljs.core.sort_by.call(null,((function (name_31540__$1,mname_31541,maxparams_31542,mmap_31543,loop_locals,map__31519,map__31519__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__31516_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__31516_SHARP_)));
});})(name_31540__$1,mname_31541,maxparams_31542,mmap_31543,loop_locals,map__31519,map__31519__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_31543));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_31541," = null;");

var seq__31521_31545 = cljs.core.seq.call(null,ms_31544);
var chunk__31522_31546 = null;
var count__31523_31547 = (0);
var i__31524_31548 = (0);
while(true){
if((i__31524_31548 < count__31523_31547)){
var vec__31525_31549 = cljs.core._nth.call(null,chunk__31522_31546,i__31524_31548);
var n_31550 = cljs.core.nth.call(null,vec__31525_31549,(0),null);
var meth_31551 = cljs.core.nth.call(null,vec__31525_31549,(1),null);
cljs.compiler.emits.call(null,"var ",n_31550," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_31551))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_31551);
} else {
cljs.compiler.emit_fn_method.call(null,meth_31551);
}

cljs.compiler.emitln.call(null,";");

var G__31552 = seq__31521_31545;
var G__31553 = chunk__31522_31546;
var G__31554 = count__31523_31547;
var G__31555 = (i__31524_31548 + (1));
seq__31521_31545 = G__31552;
chunk__31522_31546 = G__31553;
count__31523_31547 = G__31554;
i__31524_31548 = G__31555;
continue;
} else {
var temp__4425__auto___31556 = cljs.core.seq.call(null,seq__31521_31545);
if(temp__4425__auto___31556){
var seq__31521_31557__$1 = temp__4425__auto___31556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31521_31557__$1)){
var c__24298__auto___31558 = cljs.core.chunk_first.call(null,seq__31521_31557__$1);
var G__31559 = cljs.core.chunk_rest.call(null,seq__31521_31557__$1);
var G__31560 = c__24298__auto___31558;
var G__31561 = cljs.core.count.call(null,c__24298__auto___31558);
var G__31562 = (0);
seq__31521_31545 = G__31559;
chunk__31522_31546 = G__31560;
count__31523_31547 = G__31561;
i__31524_31548 = G__31562;
continue;
} else {
var vec__31526_31563 = cljs.core.first.call(null,seq__31521_31557__$1);
var n_31564 = cljs.core.nth.call(null,vec__31526_31563,(0),null);
var meth_31565 = cljs.core.nth.call(null,vec__31526_31563,(1),null);
cljs.compiler.emits.call(null,"var ",n_31564," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_31565))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_31565);
} else {
cljs.compiler.emit_fn_method.call(null,meth_31565);
}

cljs.compiler.emitln.call(null,";");

var G__31566 = cljs.core.next.call(null,seq__31521_31557__$1);
var G__31567 = null;
var G__31568 = (0);
var G__31569 = (0);
seq__31521_31545 = G__31566;
chunk__31522_31546 = G__31567;
count__31523_31547 = G__31568;
i__31524_31548 = G__31569;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_31541," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_31542),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_31542)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_31542));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__31527_31570 = cljs.core.seq.call(null,ms_31544);
var chunk__31528_31571 = null;
var count__31529_31572 = (0);
var i__31530_31573 = (0);
while(true){
if((i__31530_31573 < count__31529_31572)){
var vec__31531_31574 = cljs.core._nth.call(null,chunk__31528_31571,i__31530_31573);
var n_31575 = cljs.core.nth.call(null,vec__31531_31574,(0),null);
var meth_31576 = cljs.core.nth.call(null,vec__31531_31574,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_31576))){
cljs.compiler.emitln.call(null,"default:");

var restarg_31577 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_31577," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_31578 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_31577," = new cljs.core.IndexedSeq(",a_31578,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_31575,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_31542)),(((cljs.core.count.call(null,maxparams_31542) > (1)))?", ":null),restarg_31577,");");
} else {
var pcnt_31579 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_31576));
cljs.compiler.emitln.call(null,"case ",pcnt_31579,":");

cljs.compiler.emitln.call(null,"return ",n_31575,".call(this",(((pcnt_31579 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_31579,maxparams_31542))),",")),");");
}

var G__31580 = seq__31527_31570;
var G__31581 = chunk__31528_31571;
var G__31582 = count__31529_31572;
var G__31583 = (i__31530_31573 + (1));
seq__31527_31570 = G__31580;
chunk__31528_31571 = G__31581;
count__31529_31572 = G__31582;
i__31530_31573 = G__31583;
continue;
} else {
var temp__4425__auto___31584 = cljs.core.seq.call(null,seq__31527_31570);
if(temp__4425__auto___31584){
var seq__31527_31585__$1 = temp__4425__auto___31584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31527_31585__$1)){
var c__24298__auto___31586 = cljs.core.chunk_first.call(null,seq__31527_31585__$1);
var G__31587 = cljs.core.chunk_rest.call(null,seq__31527_31585__$1);
var G__31588 = c__24298__auto___31586;
var G__31589 = cljs.core.count.call(null,c__24298__auto___31586);
var G__31590 = (0);
seq__31527_31570 = G__31587;
chunk__31528_31571 = G__31588;
count__31529_31572 = G__31589;
i__31530_31573 = G__31590;
continue;
} else {
var vec__31532_31591 = cljs.core.first.call(null,seq__31527_31585__$1);
var n_31592 = cljs.core.nth.call(null,vec__31532_31591,(0),null);
var meth_31593 = cljs.core.nth.call(null,vec__31532_31591,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_31593))){
cljs.compiler.emitln.call(null,"default:");

var restarg_31594 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_31594," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_31595 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_31594," = new cljs.core.IndexedSeq(",a_31595,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_31592,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_31542)),(((cljs.core.count.call(null,maxparams_31542) > (1)))?", ":null),restarg_31594,");");
} else {
var pcnt_31596 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_31593));
cljs.compiler.emitln.call(null,"case ",pcnt_31596,":");

cljs.compiler.emitln.call(null,"return ",n_31592,".call(this",(((pcnt_31596 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_31596,maxparams_31542))),",")),");");
}

var G__31597 = cljs.core.next.call(null,seq__31527_31585__$1);
var G__31598 = null;
var G__31599 = (0);
var G__31600 = (0);
seq__31527_31570 = G__31597;
chunk__31528_31571 = G__31598;
count__31529_31572 = G__31599;
i__31530_31573 = G__31600;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_31541,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_31541,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_31540__$1,mname_31541,maxparams_31542,mmap_31543,ms_31544,loop_locals,map__31519,map__31519__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__31517_SHARP_){
var vec__31533 = p1__31517_SHARP_;
var n = cljs.core.nth.call(null,vec__31533,(0),null);
var m = cljs.core.nth.call(null,vec__31533,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_31540__$1,mname_31541,maxparams_31542,mmap_31543,ms_31544,loop_locals,map__31519,map__31519__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_31544),".cljs$lang$applyTo;");
} else {
}

var seq__31534_31601 = cljs.core.seq.call(null,ms_31544);
var chunk__31535_31602 = null;
var count__31536_31603 = (0);
var i__31537_31604 = (0);
while(true){
if((i__31537_31604 < count__31536_31603)){
var vec__31538_31605 = cljs.core._nth.call(null,chunk__31535_31602,i__31537_31604);
var n_31606 = cljs.core.nth.call(null,vec__31538_31605,(0),null);
var meth_31607 = cljs.core.nth.call(null,vec__31538_31605,(1),null);
var c_31608 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_31607));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_31607))){
cljs.compiler.emitln.call(null,mname_31541,".cljs$core$IFn$_invoke$arity$variadic = ",n_31606,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_31541,".cljs$core$IFn$_invoke$arity$",c_31608," = ",n_31606,";");
}

var G__31609 = seq__31534_31601;
var G__31610 = chunk__31535_31602;
var G__31611 = count__31536_31603;
var G__31612 = (i__31537_31604 + (1));
seq__31534_31601 = G__31609;
chunk__31535_31602 = G__31610;
count__31536_31603 = G__31611;
i__31537_31604 = G__31612;
continue;
} else {
var temp__4425__auto___31613 = cljs.core.seq.call(null,seq__31534_31601);
if(temp__4425__auto___31613){
var seq__31534_31614__$1 = temp__4425__auto___31613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31534_31614__$1)){
var c__24298__auto___31615 = cljs.core.chunk_first.call(null,seq__31534_31614__$1);
var G__31616 = cljs.core.chunk_rest.call(null,seq__31534_31614__$1);
var G__31617 = c__24298__auto___31615;
var G__31618 = cljs.core.count.call(null,c__24298__auto___31615);
var G__31619 = (0);
seq__31534_31601 = G__31616;
chunk__31535_31602 = G__31617;
count__31536_31603 = G__31618;
i__31537_31604 = G__31619;
continue;
} else {
var vec__31539_31620 = cljs.core.first.call(null,seq__31534_31614__$1);
var n_31621 = cljs.core.nth.call(null,vec__31539_31620,(0),null);
var meth_31622 = cljs.core.nth.call(null,vec__31539_31620,(1),null);
var c_31623 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_31622));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_31622))){
cljs.compiler.emitln.call(null,mname_31541,".cljs$core$IFn$_invoke$arity$variadic = ",n_31621,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_31541,".cljs$core$IFn$_invoke$arity$",c_31623," = ",n_31621,";");
}

var G__31624 = cljs.core.next.call(null,seq__31534_31614__$1);
var G__31625 = null;
var G__31626 = (0);
var G__31627 = (0);
seq__31534_31601 = G__31624;
chunk__31535_31602 = G__31625;
count__31536_31603 = G__31626;
i__31537_31604 = G__31627;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_31541,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__31628){
var map__31629 = p__31628;
var map__31629__$1 = ((((!((map__31629 == null)))?((((map__31629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31629):map__31629);
var statements = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__23483__auto__ = statements;
if(cljs.core.truth_(and__23483__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__23483__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__31631_31635 = cljs.core.seq.call(null,statements);
var chunk__31632_31636 = null;
var count__31633_31637 = (0);
var i__31634_31638 = (0);
while(true){
if((i__31634_31638 < count__31633_31637)){
var s_31639 = cljs.core._nth.call(null,chunk__31632_31636,i__31634_31638);
cljs.compiler.emitln.call(null,s_31639);

var G__31640 = seq__31631_31635;
var G__31641 = chunk__31632_31636;
var G__31642 = count__31633_31637;
var G__31643 = (i__31634_31638 + (1));
seq__31631_31635 = G__31640;
chunk__31632_31636 = G__31641;
count__31633_31637 = G__31642;
i__31634_31638 = G__31643;
continue;
} else {
var temp__4425__auto___31644 = cljs.core.seq.call(null,seq__31631_31635);
if(temp__4425__auto___31644){
var seq__31631_31645__$1 = temp__4425__auto___31644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31631_31645__$1)){
var c__24298__auto___31646 = cljs.core.chunk_first.call(null,seq__31631_31645__$1);
var G__31647 = cljs.core.chunk_rest.call(null,seq__31631_31645__$1);
var G__31648 = c__24298__auto___31646;
var G__31649 = cljs.core.count.call(null,c__24298__auto___31646);
var G__31650 = (0);
seq__31631_31635 = G__31647;
chunk__31632_31636 = G__31648;
count__31633_31637 = G__31649;
i__31634_31638 = G__31650;
continue;
} else {
var s_31651 = cljs.core.first.call(null,seq__31631_31645__$1);
cljs.compiler.emitln.call(null,s_31651);

var G__31652 = cljs.core.next.call(null,seq__31631_31645__$1);
var G__31653 = null;
var G__31654 = (0);
var G__31655 = (0);
seq__31631_31635 = G__31652;
chunk__31632_31636 = G__31653;
count__31633_31637 = G__31654;
i__31634_31638 = G__31655;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__23483__auto__ = statements;
if(cljs.core.truth_(and__23483__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__23483__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__31656){
var map__31657 = p__31656;
var map__31657__$1 = ((((!((map__31657 == null)))?((((map__31657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31657):map__31657);
var env = cljs.core.get.call(null,map__31657__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__31657__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__31657__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__31657__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__31657__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__23495__auto__ = name;
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))))].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__31659,is_loop){
var map__31671 = p__31659;
var map__31671__$1 = ((((!((map__31671 == null)))?((((map__31671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31671):map__31671);
var bindings = cljs.core.get.call(null,map__31671__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__31671__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__31671__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_31673_31682 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_31673_31682,context,map__31671,map__31671__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core._hash.call(null,name),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_31673_31682,context,map__31671,map__31671__$1,bindings,expr,env))
,bindings):null));

try{var seq__31674_31683 = cljs.core.seq.call(null,bindings);
var chunk__31675_31684 = null;
var count__31676_31685 = (0);
var i__31677_31686 = (0);
while(true){
if((i__31677_31686 < count__31676_31685)){
var map__31678_31687 = cljs.core._nth.call(null,chunk__31675_31684,i__31677_31686);
var map__31678_31688__$1 = ((((!((map__31678_31687 == null)))?((((map__31678_31687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31678_31687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31678_31687):map__31678_31687);
var binding_31689 = map__31678_31688__$1;
var init_31690 = cljs.core.get.call(null,map__31678_31688__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_31689);

cljs.compiler.emitln.call(null," = ",init_31690,";");

var G__31691 = seq__31674_31683;
var G__31692 = chunk__31675_31684;
var G__31693 = count__31676_31685;
var G__31694 = (i__31677_31686 + (1));
seq__31674_31683 = G__31691;
chunk__31675_31684 = G__31692;
count__31676_31685 = G__31693;
i__31677_31686 = G__31694;
continue;
} else {
var temp__4425__auto___31695 = cljs.core.seq.call(null,seq__31674_31683);
if(temp__4425__auto___31695){
var seq__31674_31696__$1 = temp__4425__auto___31695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31674_31696__$1)){
var c__24298__auto___31697 = cljs.core.chunk_first.call(null,seq__31674_31696__$1);
var G__31698 = cljs.core.chunk_rest.call(null,seq__31674_31696__$1);
var G__31699 = c__24298__auto___31697;
var G__31700 = cljs.core.count.call(null,c__24298__auto___31697);
var G__31701 = (0);
seq__31674_31683 = G__31698;
chunk__31675_31684 = G__31699;
count__31676_31685 = G__31700;
i__31677_31686 = G__31701;
continue;
} else {
var map__31680_31702 = cljs.core.first.call(null,seq__31674_31696__$1);
var map__31680_31703__$1 = ((((!((map__31680_31702 == null)))?((((map__31680_31702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31680_31702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31680_31702):map__31680_31702);
var binding_31704 = map__31680_31703__$1;
var init_31705 = cljs.core.get.call(null,map__31680_31703__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_31704);

cljs.compiler.emitln.call(null," = ",init_31705,";");

var G__31706 = cljs.core.next.call(null,seq__31674_31696__$1);
var G__31707 = null;
var G__31708 = (0);
var G__31709 = (0);
seq__31674_31683 = G__31706;
chunk__31675_31684 = G__31707;
count__31676_31685 = G__31708;
i__31677_31686 = G__31709;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_31673_31682;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__31710){
var map__31711 = p__31710;
var map__31711__$1 = ((((!((map__31711 == null)))?((((map__31711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31711):map__31711);
var frame = cljs.core.get.call(null,map__31711__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__31711__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__31711__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__24398__auto___31713 = cljs.core.count.call(null,exprs);
var i_31714 = (0);
while(true){
if((i_31714 < n__24398__auto___31713)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_31714)," = ",exprs.call(null,i_31714),";");

var G__31715 = (i_31714 + (1));
i_31714 = G__31715;
continue;
} else {
}
break;
}

var n__24398__auto___31716 = cljs.core.count.call(null,exprs);
var i_31717 = (0);
while(true){
if((i_31717 < n__24398__auto___31716)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_31717))," = ",temps.call(null,i_31717),";");

var G__31718 = (i_31717 + (1));
i_31717 = G__31718;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__31719){
var map__31720 = p__31719;
var map__31720__$1 = ((((!((map__31720 == null)))?((((map__31720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31720):map__31720);
var bindings = cljs.core.get.call(null,map__31720__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__31720__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__31720__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__31722_31730 = cljs.core.seq.call(null,bindings);
var chunk__31723_31731 = null;
var count__31724_31732 = (0);
var i__31725_31733 = (0);
while(true){
if((i__31725_31733 < count__31724_31732)){
var map__31726_31734 = cljs.core._nth.call(null,chunk__31723_31731,i__31725_31733);
var map__31726_31735__$1 = ((((!((map__31726_31734 == null)))?((((map__31726_31734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31726_31734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31726_31734):map__31726_31734);
var binding_31736 = map__31726_31735__$1;
var init_31737 = cljs.core.get.call(null,map__31726_31735__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_31736)," = ",init_31737,";");

var G__31738 = seq__31722_31730;
var G__31739 = chunk__31723_31731;
var G__31740 = count__31724_31732;
var G__31741 = (i__31725_31733 + (1));
seq__31722_31730 = G__31738;
chunk__31723_31731 = G__31739;
count__31724_31732 = G__31740;
i__31725_31733 = G__31741;
continue;
} else {
var temp__4425__auto___31742 = cljs.core.seq.call(null,seq__31722_31730);
if(temp__4425__auto___31742){
var seq__31722_31743__$1 = temp__4425__auto___31742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31722_31743__$1)){
var c__24298__auto___31744 = cljs.core.chunk_first.call(null,seq__31722_31743__$1);
var G__31745 = cljs.core.chunk_rest.call(null,seq__31722_31743__$1);
var G__31746 = c__24298__auto___31744;
var G__31747 = cljs.core.count.call(null,c__24298__auto___31744);
var G__31748 = (0);
seq__31722_31730 = G__31745;
chunk__31723_31731 = G__31746;
count__31724_31732 = G__31747;
i__31725_31733 = G__31748;
continue;
} else {
var map__31728_31749 = cljs.core.first.call(null,seq__31722_31743__$1);
var map__31728_31750__$1 = ((((!((map__31728_31749 == null)))?((((map__31728_31749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31728_31749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31728_31749):map__31728_31749);
var binding_31751 = map__31728_31750__$1;
var init_31752 = cljs.core.get.call(null,map__31728_31750__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_31751)," = ",init_31752,";");

var G__31753 = cljs.core.next.call(null,seq__31722_31743__$1);
var G__31754 = null;
var G__31755 = (0);
var G__31756 = (0);
seq__31722_31730 = G__31753;
chunk__31723_31731 = G__31754;
count__31724_31732 = G__31755;
i__31725_31733 = G__31756;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace(".","$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__31759){
var map__31760 = p__31759;
var map__31760__$1 = ((((!((map__31760 == null)))?((((map__31760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31760):map__31760);
var expr = map__31760__$1;
var f = cljs.core.get.call(null,map__31760__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__31760__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__31760__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__23483__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__23483__auto__)){
var and__23483__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__23483__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__23483__auto____$1;
}
} else {
return and__23483__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__23483__auto__ = protocol;
if(cljs.core.truth_(and__23483__auto__)){
var and__23483__auto____$1 = tag;
if(cljs.core.truth_(and__23483__auto____$1)){
var or__23495__auto__ = (function (){var and__23483__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__23483__auto____$2)){
var and__23483__auto____$3 = protocol;
if(cljs.core.truth_(and__23483__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__23483__auto____$3;
}
} else {
return and__23483__auto____$2;
}
})();
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
var and__23483__auto____$2 = (function (){var or__23495__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__23495__auto____$1)){
return or__23495__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__23483__auto____$2)){
var or__23495__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__23495__auto____$1){
return or__23495__auto____$1;
} else {
var and__23483__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__23483__auto____$3){
var and__23483__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__23483__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__23483__auto____$4;
}
} else {
return and__23483__auto____$3;
}
}
} else {
return and__23483__auto____$2;
}
}
} else {
return and__23483__auto____$1;
}
} else {
return and__23483__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__23495__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__23495__auto__){
return or__23495__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__31762 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__23483__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__23483__auto__)){
return (arity > mfa);
} else {
return and__23483__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31760,map__31760__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31760,map__31760__$1,expr,f,args,env){
return (function (p1__31757_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__31757_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31760,map__31760__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31760,map__31760__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31760,map__31760__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31760,map__31760__$1,expr,f,args,env){
return (function (p1__31758_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__31758_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31760,map__31760__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31760,map__31760__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__31762,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__31762,(1),null);
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_31763 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_31763,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_31764 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_31764,args)),(((mfa_31764 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_31764,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__23495__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
var or__23495__auto____$1 = js_QMARK_;
if(or__23495__auto____$1){
return or__23495__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__23483__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__23483__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__23483__auto__;
}
})())){
var fprop_31765 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_31765," ? ",f__$1,fprop_31765,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__31766){
var map__31767 = p__31766;
var map__31767__$1 = ((((!((map__31767 == null)))?((((map__31767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31767):map__31767);
var ctor = cljs.core.get.call(null,map__31767__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__31767__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__31767__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__31769){
var map__31770 = p__31769;
var map__31770__$1 = ((((!((map__31770 == null)))?((((map__31770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31770):map__31770);
var target = cljs.core.get.call(null,map__31770__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__31770__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__31770__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__31776_31780 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__31777_31781 = null;
var count__31778_31782 = (0);
var i__31779_31783 = (0);
while(true){
if((i__31779_31783 < count__31778_31782)){
var lib_31784 = cljs.core._nth.call(null,chunk__31777_31781,i__31779_31783);
if(cljs.core.truth_((function (){var or__23495__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_31784),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31784),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__23495__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_31784),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31784),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31784),"');");

}
}

var G__31785 = seq__31776_31780;
var G__31786 = chunk__31777_31781;
var G__31787 = count__31778_31782;
var G__31788 = (i__31779_31783 + (1));
seq__31776_31780 = G__31785;
chunk__31777_31781 = G__31786;
count__31778_31782 = G__31787;
i__31779_31783 = G__31788;
continue;
} else {
var temp__4425__auto___31789 = cljs.core.seq.call(null,seq__31776_31780);
if(temp__4425__auto___31789){
var seq__31776_31790__$1 = temp__4425__auto___31789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31776_31790__$1)){
var c__24298__auto___31791 = cljs.core.chunk_first.call(null,seq__31776_31790__$1);
var G__31792 = cljs.core.chunk_rest.call(null,seq__31776_31790__$1);
var G__31793 = c__24298__auto___31791;
var G__31794 = cljs.core.count.call(null,c__24298__auto___31791);
var G__31795 = (0);
seq__31776_31780 = G__31792;
chunk__31777_31781 = G__31793;
count__31778_31782 = G__31794;
i__31779_31783 = G__31795;
continue;
} else {
var lib_31796 = cljs.core.first.call(null,seq__31776_31790__$1);
if(cljs.core.truth_((function (){var or__23495__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_31796),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31796),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__23495__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__23495__auto__)){
return or__23495__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_31796),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31796),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31796),"');");

}
}

var G__31797 = cljs.core.next.call(null,seq__31776_31790__$1);
var G__31798 = null;
var G__31799 = (0);
var G__31800 = (0);
seq__31776_31780 = G__31797;
chunk__31777_31781 = G__31798;
count__31778_31782 = G__31799;
i__31779_31783 = G__31800;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__31801){
var map__31802 = p__31801;
var map__31802__$1 = ((((!((map__31802 == null)))?((((map__31802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31802):map__31802);
var name = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__31804){
var map__31805 = p__31804;
var map__31805__$1 = ((((!((map__31805 == null)))?((((map__31805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31805):map__31805);
var t = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__31807_31821 = cljs.core.seq.call(null,protocols);
var chunk__31808_31822 = null;
var count__31809_31823 = (0);
var i__31810_31824 = (0);
while(true){
if((i__31810_31824 < count__31809_31823)){
var protocol_31825 = cljs.core._nth.call(null,chunk__31808_31822,i__31810_31824);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_31825)].join('')),"}");

var G__31826 = seq__31807_31821;
var G__31827 = chunk__31808_31822;
var G__31828 = count__31809_31823;
var G__31829 = (i__31810_31824 + (1));
seq__31807_31821 = G__31826;
chunk__31808_31822 = G__31827;
count__31809_31823 = G__31828;
i__31810_31824 = G__31829;
continue;
} else {
var temp__4425__auto___31830 = cljs.core.seq.call(null,seq__31807_31821);
if(temp__4425__auto___31830){
var seq__31807_31831__$1 = temp__4425__auto___31830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31807_31831__$1)){
var c__24298__auto___31832 = cljs.core.chunk_first.call(null,seq__31807_31831__$1);
var G__31833 = cljs.core.chunk_rest.call(null,seq__31807_31831__$1);
var G__31834 = c__24298__auto___31832;
var G__31835 = cljs.core.count.call(null,c__24298__auto___31832);
var G__31836 = (0);
seq__31807_31821 = G__31833;
chunk__31808_31822 = G__31834;
count__31809_31823 = G__31835;
i__31810_31824 = G__31836;
continue;
} else {
var protocol_31837 = cljs.core.first.call(null,seq__31807_31831__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_31837)].join('')),"}");

var G__31838 = cljs.core.next.call(null,seq__31807_31831__$1);
var G__31839 = null;
var G__31840 = (0);
var G__31841 = (0);
seq__31807_31821 = G__31838;
chunk__31808_31822 = G__31839;
count__31809_31823 = G__31840;
i__31810_31824 = G__31841;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__31811_31842 = cljs.core.seq.call(null,fields__$1);
var chunk__31812_31843 = null;
var count__31813_31844 = (0);
var i__31814_31845 = (0);
while(true){
if((i__31814_31845 < count__31813_31844)){
var fld_31846 = cljs.core._nth.call(null,chunk__31812_31843,i__31814_31845);
cljs.compiler.emitln.call(null,"this.",fld_31846," = ",fld_31846,";");

var G__31847 = seq__31811_31842;
var G__31848 = chunk__31812_31843;
var G__31849 = count__31813_31844;
var G__31850 = (i__31814_31845 + (1));
seq__31811_31842 = G__31847;
chunk__31812_31843 = G__31848;
count__31813_31844 = G__31849;
i__31814_31845 = G__31850;
continue;
} else {
var temp__4425__auto___31851 = cljs.core.seq.call(null,seq__31811_31842);
if(temp__4425__auto___31851){
var seq__31811_31852__$1 = temp__4425__auto___31851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31811_31852__$1)){
var c__24298__auto___31853 = cljs.core.chunk_first.call(null,seq__31811_31852__$1);
var G__31854 = cljs.core.chunk_rest.call(null,seq__31811_31852__$1);
var G__31855 = c__24298__auto___31853;
var G__31856 = cljs.core.count.call(null,c__24298__auto___31853);
var G__31857 = (0);
seq__31811_31842 = G__31854;
chunk__31812_31843 = G__31855;
count__31813_31844 = G__31856;
i__31814_31845 = G__31857;
continue;
} else {
var fld_31858 = cljs.core.first.call(null,seq__31811_31852__$1);
cljs.compiler.emitln.call(null,"this.",fld_31858," = ",fld_31858,";");

var G__31859 = cljs.core.next.call(null,seq__31811_31852__$1);
var G__31860 = null;
var G__31861 = (0);
var G__31862 = (0);
seq__31811_31842 = G__31859;
chunk__31812_31843 = G__31860;
count__31813_31844 = G__31861;
i__31814_31845 = G__31862;
continue;
}
} else {
}
}
break;
}

var seq__31815_31863 = cljs.core.seq.call(null,pmasks);
var chunk__31816_31864 = null;
var count__31817_31865 = (0);
var i__31818_31866 = (0);
while(true){
if((i__31818_31866 < count__31817_31865)){
var vec__31819_31867 = cljs.core._nth.call(null,chunk__31816_31864,i__31818_31866);
var pno_31868 = cljs.core.nth.call(null,vec__31819_31867,(0),null);
var pmask_31869 = cljs.core.nth.call(null,vec__31819_31867,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31868,"$ = ",pmask_31869,";");

var G__31870 = seq__31815_31863;
var G__31871 = chunk__31816_31864;
var G__31872 = count__31817_31865;
var G__31873 = (i__31818_31866 + (1));
seq__31815_31863 = G__31870;
chunk__31816_31864 = G__31871;
count__31817_31865 = G__31872;
i__31818_31866 = G__31873;
continue;
} else {
var temp__4425__auto___31874 = cljs.core.seq.call(null,seq__31815_31863);
if(temp__4425__auto___31874){
var seq__31815_31875__$1 = temp__4425__auto___31874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31815_31875__$1)){
var c__24298__auto___31876 = cljs.core.chunk_first.call(null,seq__31815_31875__$1);
var G__31877 = cljs.core.chunk_rest.call(null,seq__31815_31875__$1);
var G__31878 = c__24298__auto___31876;
var G__31879 = cljs.core.count.call(null,c__24298__auto___31876);
var G__31880 = (0);
seq__31815_31863 = G__31877;
chunk__31816_31864 = G__31878;
count__31817_31865 = G__31879;
i__31818_31866 = G__31880;
continue;
} else {
var vec__31820_31881 = cljs.core.first.call(null,seq__31815_31875__$1);
var pno_31882 = cljs.core.nth.call(null,vec__31820_31881,(0),null);
var pmask_31883 = cljs.core.nth.call(null,vec__31820_31881,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31882,"$ = ",pmask_31883,";");

var G__31884 = cljs.core.next.call(null,seq__31815_31875__$1);
var G__31885 = null;
var G__31886 = (0);
var G__31887 = (0);
seq__31815_31863 = G__31884;
chunk__31816_31864 = G__31885;
count__31817_31865 = G__31886;
i__31818_31866 = G__31887;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__31888){
var map__31889 = p__31888;
var map__31889__$1 = ((((!((map__31889 == null)))?((((map__31889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31889):map__31889);
var t = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__31891_31905 = cljs.core.seq.call(null,protocols);
var chunk__31892_31906 = null;
var count__31893_31907 = (0);
var i__31894_31908 = (0);
while(true){
if((i__31894_31908 < count__31893_31907)){
var protocol_31909 = cljs.core._nth.call(null,chunk__31892_31906,i__31894_31908);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_31909)].join('')),"}");

var G__31910 = seq__31891_31905;
var G__31911 = chunk__31892_31906;
var G__31912 = count__31893_31907;
var G__31913 = (i__31894_31908 + (1));
seq__31891_31905 = G__31910;
chunk__31892_31906 = G__31911;
count__31893_31907 = G__31912;
i__31894_31908 = G__31913;
continue;
} else {
var temp__4425__auto___31914 = cljs.core.seq.call(null,seq__31891_31905);
if(temp__4425__auto___31914){
var seq__31891_31915__$1 = temp__4425__auto___31914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31891_31915__$1)){
var c__24298__auto___31916 = cljs.core.chunk_first.call(null,seq__31891_31915__$1);
var G__31917 = cljs.core.chunk_rest.call(null,seq__31891_31915__$1);
var G__31918 = c__24298__auto___31916;
var G__31919 = cljs.core.count.call(null,c__24298__auto___31916);
var G__31920 = (0);
seq__31891_31905 = G__31917;
chunk__31892_31906 = G__31918;
count__31893_31907 = G__31919;
i__31894_31908 = G__31920;
continue;
} else {
var protocol_31921 = cljs.core.first.call(null,seq__31891_31915__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_31921)].join('')),"}");

var G__31922 = cljs.core.next.call(null,seq__31891_31915__$1);
var G__31923 = null;
var G__31924 = (0);
var G__31925 = (0);
seq__31891_31905 = G__31922;
chunk__31892_31906 = G__31923;
count__31893_31907 = G__31924;
i__31894_31908 = G__31925;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__31895_31926 = cljs.core.seq.call(null,fields__$1);
var chunk__31896_31927 = null;
var count__31897_31928 = (0);
var i__31898_31929 = (0);
while(true){
if((i__31898_31929 < count__31897_31928)){
var fld_31930 = cljs.core._nth.call(null,chunk__31896_31927,i__31898_31929);
cljs.compiler.emitln.call(null,"this.",fld_31930," = ",fld_31930,";");

var G__31931 = seq__31895_31926;
var G__31932 = chunk__31896_31927;
var G__31933 = count__31897_31928;
var G__31934 = (i__31898_31929 + (1));
seq__31895_31926 = G__31931;
chunk__31896_31927 = G__31932;
count__31897_31928 = G__31933;
i__31898_31929 = G__31934;
continue;
} else {
var temp__4425__auto___31935 = cljs.core.seq.call(null,seq__31895_31926);
if(temp__4425__auto___31935){
var seq__31895_31936__$1 = temp__4425__auto___31935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31895_31936__$1)){
var c__24298__auto___31937 = cljs.core.chunk_first.call(null,seq__31895_31936__$1);
var G__31938 = cljs.core.chunk_rest.call(null,seq__31895_31936__$1);
var G__31939 = c__24298__auto___31937;
var G__31940 = cljs.core.count.call(null,c__24298__auto___31937);
var G__31941 = (0);
seq__31895_31926 = G__31938;
chunk__31896_31927 = G__31939;
count__31897_31928 = G__31940;
i__31898_31929 = G__31941;
continue;
} else {
var fld_31942 = cljs.core.first.call(null,seq__31895_31936__$1);
cljs.compiler.emitln.call(null,"this.",fld_31942," = ",fld_31942,";");

var G__31943 = cljs.core.next.call(null,seq__31895_31936__$1);
var G__31944 = null;
var G__31945 = (0);
var G__31946 = (0);
seq__31895_31926 = G__31943;
chunk__31896_31927 = G__31944;
count__31897_31928 = G__31945;
i__31898_31929 = G__31946;
continue;
}
} else {
}
}
break;
}

var seq__31899_31947 = cljs.core.seq.call(null,pmasks);
var chunk__31900_31948 = null;
var count__31901_31949 = (0);
var i__31902_31950 = (0);
while(true){
if((i__31902_31950 < count__31901_31949)){
var vec__31903_31951 = cljs.core._nth.call(null,chunk__31900_31948,i__31902_31950);
var pno_31952 = cljs.core.nth.call(null,vec__31903_31951,(0),null);
var pmask_31953 = cljs.core.nth.call(null,vec__31903_31951,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31952,"$ = ",pmask_31953,";");

var G__31954 = seq__31899_31947;
var G__31955 = chunk__31900_31948;
var G__31956 = count__31901_31949;
var G__31957 = (i__31902_31950 + (1));
seq__31899_31947 = G__31954;
chunk__31900_31948 = G__31955;
count__31901_31949 = G__31956;
i__31902_31950 = G__31957;
continue;
} else {
var temp__4425__auto___31958 = cljs.core.seq.call(null,seq__31899_31947);
if(temp__4425__auto___31958){
var seq__31899_31959__$1 = temp__4425__auto___31958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31899_31959__$1)){
var c__24298__auto___31960 = cljs.core.chunk_first.call(null,seq__31899_31959__$1);
var G__31961 = cljs.core.chunk_rest.call(null,seq__31899_31959__$1);
var G__31962 = c__24298__auto___31960;
var G__31963 = cljs.core.count.call(null,c__24298__auto___31960);
var G__31964 = (0);
seq__31899_31947 = G__31961;
chunk__31900_31948 = G__31962;
count__31901_31949 = G__31963;
i__31902_31950 = G__31964;
continue;
} else {
var vec__31904_31965 = cljs.core.first.call(null,seq__31899_31959__$1);
var pno_31966 = cljs.core.nth.call(null,vec__31904_31965,(0),null);
var pmask_31967 = cljs.core.nth.call(null,vec__31904_31965,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31966,"$ = ",pmask_31967,";");

var G__31968 = cljs.core.next.call(null,seq__31899_31959__$1);
var G__31969 = null;
var G__31970 = (0);
var G__31971 = (0);
seq__31899_31947 = G__31968;
chunk__31900_31948 = G__31969;
count__31901_31949 = G__31970;
i__31902_31950 = G__31971;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__31972){
var map__31973 = p__31972;
var map__31973__$1 = ((((!((map__31973 == null)))?((((map__31973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31973):map__31973);
var target = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__31975){
var map__31976 = p__31975;
var map__31976__$1 = ((((!((map__31976 == null)))?((((map__31976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31976):map__31976);
var op = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__23483__auto__ = code;
if(cljs.core.truth_(and__23483__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__23483__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__25838__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25838__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__31986 = cljs.core.seq.call(null,table);
var chunk__31987 = null;
var count__31988 = (0);
var i__31989 = (0);
while(true){
if((i__31989 < count__31988)){
var vec__31990 = cljs.core._nth.call(null,chunk__31987,i__31989);
var sym = cljs.core.nth.call(null,vec__31990,(0),null);
var value = cljs.core.nth.call(null,vec__31990,(1),null);
var ns_31992 = cljs.core.namespace.call(null,sym);
var name_31993 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__31994 = seq__31986;
var G__31995 = chunk__31987;
var G__31996 = count__31988;
var G__31997 = (i__31989 + (1));
seq__31986 = G__31994;
chunk__31987 = G__31995;
count__31988 = G__31996;
i__31989 = G__31997;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31986);
if(temp__4425__auto__){
var seq__31986__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31986__$1)){
var c__24298__auto__ = cljs.core.chunk_first.call(null,seq__31986__$1);
var G__31998 = cljs.core.chunk_rest.call(null,seq__31986__$1);
var G__31999 = c__24298__auto__;
var G__32000 = cljs.core.count.call(null,c__24298__auto__);
var G__32001 = (0);
seq__31986 = G__31998;
chunk__31987 = G__31999;
count__31988 = G__32000;
i__31989 = G__32001;
continue;
} else {
var vec__31991 = cljs.core.first.call(null,seq__31986__$1);
var sym = cljs.core.nth.call(null,vec__31991,(0),null);
var value = cljs.core.nth.call(null,vec__31991,(1),null);
var ns_32002 = cljs.core.namespace.call(null,sym);
var name_32003 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__32004 = cljs.core.next.call(null,seq__31986__$1);
var G__32005 = null;
var G__32006 = (0);
var G__32007 = (0);
seq__31986 = G__32004;
chunk__31987 = G__32005;
count__31988 = G__32006;
i__31989 = G__32007;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map