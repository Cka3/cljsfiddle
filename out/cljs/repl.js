// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8387_8401 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8388_8402 = null;
var count__8389_8403 = (0);
var i__8390_8404 = (0);
while(true){
if((i__8390_8404 < count__8389_8403)){
var f_8405 = cljs.core._nth.call(null,chunk__8388_8402,i__8390_8404);
cljs.core.println.call(null,"  ",f_8405);

var G__8406 = seq__8387_8401;
var G__8407 = chunk__8388_8402;
var G__8408 = count__8389_8403;
var G__8409 = (i__8390_8404 + (1));
seq__8387_8401 = G__8406;
chunk__8388_8402 = G__8407;
count__8389_8403 = G__8408;
i__8390_8404 = G__8409;
continue;
} else {
var temp__4425__auto___8410 = cljs.core.seq.call(null,seq__8387_8401);
if(temp__4425__auto___8410){
var seq__8387_8411__$1 = temp__4425__auto___8410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8387_8411__$1)){
var c__8034__auto___8412 = cljs.core.chunk_first.call(null,seq__8387_8411__$1);
var G__8413 = cljs.core.chunk_rest.call(null,seq__8387_8411__$1);
var G__8414 = c__8034__auto___8412;
var G__8415 = cljs.core.count.call(null,c__8034__auto___8412);
var G__8416 = (0);
seq__8387_8401 = G__8413;
chunk__8388_8402 = G__8414;
count__8389_8403 = G__8415;
i__8390_8404 = G__8416;
continue;
} else {
var f_8417 = cljs.core.first.call(null,seq__8387_8411__$1);
cljs.core.println.call(null,"  ",f_8417);

var G__8418 = cljs.core.next.call(null,seq__8387_8411__$1);
var G__8419 = null;
var G__8420 = (0);
var G__8421 = (0);
seq__8387_8401 = G__8418;
chunk__8388_8402 = G__8419;
count__8389_8403 = G__8420;
i__8390_8404 = G__8421;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8422 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7231__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7231__auto__)){
return or__7231__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8422);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8422)))?cljs.core.second.call(null,arglists_8422):arglists_8422));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8391 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8392 = null;
var count__8393 = (0);
var i__8394 = (0);
while(true){
if((i__8394 < count__8393)){
var vec__8395 = cljs.core._nth.call(null,chunk__8392,i__8394);
var name = cljs.core.nth.call(null,vec__8395,(0),null);
var map__8396 = cljs.core.nth.call(null,vec__8395,(1),null);
var map__8396__$1 = ((((!((map__8396 == null)))?((((map__8396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8396):map__8396);
var doc = cljs.core.get.call(null,map__8396__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8396__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8423 = seq__8391;
var G__8424 = chunk__8392;
var G__8425 = count__8393;
var G__8426 = (i__8394 + (1));
seq__8391 = G__8423;
chunk__8392 = G__8424;
count__8393 = G__8425;
i__8394 = G__8426;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8391);
if(temp__4425__auto__){
var seq__8391__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8391__$1)){
var c__8034__auto__ = cljs.core.chunk_first.call(null,seq__8391__$1);
var G__8427 = cljs.core.chunk_rest.call(null,seq__8391__$1);
var G__8428 = c__8034__auto__;
var G__8429 = cljs.core.count.call(null,c__8034__auto__);
var G__8430 = (0);
seq__8391 = G__8427;
chunk__8392 = G__8428;
count__8393 = G__8429;
i__8394 = G__8430;
continue;
} else {
var vec__8398 = cljs.core.first.call(null,seq__8391__$1);
var name = cljs.core.nth.call(null,vec__8398,(0),null);
var map__8399 = cljs.core.nth.call(null,vec__8398,(1),null);
var map__8399__$1 = ((((!((map__8399 == null)))?((((map__8399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8399):map__8399);
var doc = cljs.core.get.call(null,map__8399__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8399__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8431 = cljs.core.next.call(null,seq__8391__$1);
var G__8432 = null;
var G__8433 = (0);
var G__8434 = (0);
seq__8391 = G__8431;
chunk__8392 = G__8432;
count__8393 = G__8433;
i__8394 = G__8434;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map