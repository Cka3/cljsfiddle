// Compiled by ClojureScript 1.7.122 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__33839_33843 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__33840_33844 = null;
var count__33841_33845 = (0);
var i__33842_33846 = (0);
while(true){
if((i__33842_33846 < count__33841_33845)){
var k_33847 = cljs.core._nth.call(null,chunk__33840_33844,i__33842_33846);
var v_33848 = (b[k_33847]);
(a[k_33847] = v_33848);

var G__33849 = seq__33839_33843;
var G__33850 = chunk__33840_33844;
var G__33851 = count__33841_33845;
var G__33852 = (i__33842_33846 + (1));
seq__33839_33843 = G__33849;
chunk__33840_33844 = G__33850;
count__33841_33845 = G__33851;
i__33842_33846 = G__33852;
continue;
} else {
var temp__4425__auto___33853 = cljs.core.seq.call(null,seq__33839_33843);
if(temp__4425__auto___33853){
var seq__33839_33854__$1 = temp__4425__auto___33853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33839_33854__$1)){
var c__24298__auto___33855 = cljs.core.chunk_first.call(null,seq__33839_33854__$1);
var G__33856 = cljs.core.chunk_rest.call(null,seq__33839_33854__$1);
var G__33857 = c__24298__auto___33855;
var G__33858 = cljs.core.count.call(null,c__24298__auto___33855);
var G__33859 = (0);
seq__33839_33843 = G__33856;
chunk__33840_33844 = G__33857;
count__33841_33845 = G__33858;
i__33842_33846 = G__33859;
continue;
} else {
var k_33860 = cljs.core.first.call(null,seq__33839_33854__$1);
var v_33861 = (b[k_33860]);
(a[k_33860] = v_33861);

var G__33862 = cljs.core.next.call(null,seq__33839_33854__$1);
var G__33863 = null;
var G__33864 = (0);
var G__33865 = (0);
seq__33839_33843 = G__33862;
chunk__33840_33844 = G__33863;
count__33841_33845 = G__33864;
i__33842_33846 = G__33865;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__24093__auto__,writer__24094__auto__,opt__24095__auto__){
return cljs.core._write.call(null,writer__24094__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__24093__auto__,writer__24094__auto__,opt__24095__auto__){
return cljs.core._write.call(null,writer__24094__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args33866 = [];
var len__24553__auto___33869 = arguments.length;
var i__24554__auto___33870 = (0);
while(true){
if((i__24554__auto___33870 < len__24553__auto___33869)){
args33866.push((arguments[i__24554__auto___33870]));

var G__33871 = (i__24554__auto___33870 + (1));
i__24554__auto___33870 = G__33871;
continue;
} else {
}
break;
}

var G__33868 = args33866.length;
switch (G__33868) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33866.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__33873 = (i + (2));
var G__33874 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__33873;
ret = G__33874;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__24093__auto__,writer__24094__auto__,opt__24095__auto__){
return cljs.core._write.call(null,writer__24094__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__24093__auto__,writer__24094__auto__,opt__24095__auto__){
return cljs.core._write.call(null,writer__24094__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__33875_33879 = cljs.core.seq.call(null,v);
var chunk__33876_33880 = null;
var count__33877_33881 = (0);
var i__33878_33882 = (0);
while(true){
if((i__33878_33882 < count__33877_33881)){
var x_33883 = cljs.core._nth.call(null,chunk__33876_33880,i__33878_33882);
ret.push(x_33883);

var G__33884 = seq__33875_33879;
var G__33885 = chunk__33876_33880;
var G__33886 = count__33877_33881;
var G__33887 = (i__33878_33882 + (1));
seq__33875_33879 = G__33884;
chunk__33876_33880 = G__33885;
count__33877_33881 = G__33886;
i__33878_33882 = G__33887;
continue;
} else {
var temp__4425__auto___33888 = cljs.core.seq.call(null,seq__33875_33879);
if(temp__4425__auto___33888){
var seq__33875_33889__$1 = temp__4425__auto___33888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33875_33889__$1)){
var c__24298__auto___33890 = cljs.core.chunk_first.call(null,seq__33875_33889__$1);
var G__33891 = cljs.core.chunk_rest.call(null,seq__33875_33889__$1);
var G__33892 = c__24298__auto___33890;
var G__33893 = cljs.core.count.call(null,c__24298__auto___33890);
var G__33894 = (0);
seq__33875_33879 = G__33891;
chunk__33876_33880 = G__33892;
count__33877_33881 = G__33893;
i__33878_33882 = G__33894;
continue;
} else {
var x_33895 = cljs.core.first.call(null,seq__33875_33889__$1);
ret.push(x_33895);

var G__33896 = cljs.core.next.call(null,seq__33875_33889__$1);
var G__33897 = null;
var G__33898 = (0);
var G__33899 = (0);
seq__33875_33879 = G__33896;
chunk__33876_33880 = G__33897;
count__33877_33881 = G__33898;
i__33878_33882 = G__33899;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__24093__auto__,writer__24094__auto__,opt__24095__auto__){
return cljs.core._write.call(null,writer__24094__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__24093__auto__,writer__24094__auto__,opt__24095__auto__){
return cljs.core._write.call(null,writer__24094__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__33900_33904 = cljs.core.seq.call(null,v);
var chunk__33901_33905 = null;
var count__33902_33906 = (0);
var i__33903_33907 = (0);
while(true){
if((i__33903_33907 < count__33902_33906)){
var x_33908 = cljs.core._nth.call(null,chunk__33901_33905,i__33903_33907);
ret.push(x_33908);

var G__33909 = seq__33900_33904;
var G__33910 = chunk__33901_33905;
var G__33911 = count__33902_33906;
var G__33912 = (i__33903_33907 + (1));
seq__33900_33904 = G__33909;
chunk__33901_33905 = G__33910;
count__33902_33906 = G__33911;
i__33903_33907 = G__33912;
continue;
} else {
var temp__4425__auto___33913 = cljs.core.seq.call(null,seq__33900_33904);
if(temp__4425__auto___33913){
var seq__33900_33914__$1 = temp__4425__auto___33913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33900_33914__$1)){
var c__24298__auto___33915 = cljs.core.chunk_first.call(null,seq__33900_33914__$1);
var G__33916 = cljs.core.chunk_rest.call(null,seq__33900_33914__$1);
var G__33917 = c__24298__auto___33915;
var G__33918 = cljs.core.count.call(null,c__24298__auto___33915);
var G__33919 = (0);
seq__33900_33904 = G__33916;
chunk__33901_33905 = G__33917;
count__33902_33906 = G__33918;
i__33903_33907 = G__33919;
continue;
} else {
var x_33920 = cljs.core.first.call(null,seq__33900_33914__$1);
ret.push(x_33920);

var G__33921 = cljs.core.next.call(null,seq__33900_33914__$1);
var G__33922 = null;
var G__33923 = (0);
var G__33924 = (0);
seq__33900_33904 = G__33921;
chunk__33901_33905 = G__33922;
count__33902_33906 = G__33923;
i__33903_33907 = G__33924;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__24093__auto__,writer__24094__auto__,opt__24095__auto__){
return cljs.core._write.call(null,writer__24094__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__33925_33929 = cljs.core.seq.call(null,v);
var chunk__33926_33930 = null;
var count__33927_33931 = (0);
var i__33928_33932 = (0);
while(true){
if((i__33928_33932 < count__33927_33931)){
var x_33933 = cljs.core._nth.call(null,chunk__33926_33930,i__33928_33932);
ret.push(x_33933);

var G__33934 = seq__33925_33929;
var G__33935 = chunk__33926_33930;
var G__33936 = count__33927_33931;
var G__33937 = (i__33928_33932 + (1));
seq__33925_33929 = G__33934;
chunk__33926_33930 = G__33935;
count__33927_33931 = G__33936;
i__33928_33932 = G__33937;
continue;
} else {
var temp__4425__auto___33938 = cljs.core.seq.call(null,seq__33925_33929);
if(temp__4425__auto___33938){
var seq__33925_33939__$1 = temp__4425__auto___33938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33925_33939__$1)){
var c__24298__auto___33940 = cljs.core.chunk_first.call(null,seq__33925_33939__$1);
var G__33941 = cljs.core.chunk_rest.call(null,seq__33925_33939__$1);
var G__33942 = c__24298__auto___33940;
var G__33943 = cljs.core.count.call(null,c__24298__auto___33940);
var G__33944 = (0);
seq__33925_33929 = G__33941;
chunk__33926_33930 = G__33942;
count__33927_33931 = G__33943;
i__33928_33932 = G__33944;
continue;
} else {
var x_33945 = cljs.core.first.call(null,seq__33925_33939__$1);
ret.push(x_33945);

var G__33946 = cljs.core.next.call(null,seq__33925_33939__$1);
var G__33947 = null;
var G__33948 = (0);
var G__33949 = (0);
seq__33925_33929 = G__33946;
chunk__33926_33930 = G__33947;
count__33927_33931 = G__33948;
i__33928_33932 = G__33949;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__24093__auto__,writer__24094__auto__,opt__24095__auto__){
return cljs.core._write.call(null,writer__24094__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__24093__auto__,writer__24094__auto__,opt__24095__auto__){
return cljs.core._write.call(null,writer__24094__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args33950 = [];
var len__24553__auto___33961 = arguments.length;
var i__24554__auto___33962 = (0);
while(true){
if((i__24554__auto___33962 < len__24553__auto___33961)){
args33950.push((arguments[i__24554__auto___33962]));

var G__33963 = (i__24554__auto___33962 + (1));
i__24554__auto___33962 = G__33963;
continue;
} else {
}
break;
}

var G__33952 = args33950.length;
switch (G__33952) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33950.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__33953 = obj;
G__33953.push(kfn.call(null,k),vfn.call(null,v));

return G__33953;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x33954 = cljs.core.clone.call(null,handlers);
x33954.forEach = ((function (x33954,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__33955 = cljs.core.seq.call(null,coll);
var chunk__33956 = null;
var count__33957 = (0);
var i__33958 = (0);
while(true){
if((i__33958 < count__33957)){
var vec__33959 = cljs.core._nth.call(null,chunk__33956,i__33958);
var k = cljs.core.nth.call(null,vec__33959,(0),null);
var v = cljs.core.nth.call(null,vec__33959,(1),null);
f.call(null,v,k);

var G__33965 = seq__33955;
var G__33966 = chunk__33956;
var G__33967 = count__33957;
var G__33968 = (i__33958 + (1));
seq__33955 = G__33965;
chunk__33956 = G__33966;
count__33957 = G__33967;
i__33958 = G__33968;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33955);
if(temp__4425__auto__){
var seq__33955__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33955__$1)){
var c__24298__auto__ = cljs.core.chunk_first.call(null,seq__33955__$1);
var G__33969 = cljs.core.chunk_rest.call(null,seq__33955__$1);
var G__33970 = c__24298__auto__;
var G__33971 = cljs.core.count.call(null,c__24298__auto__);
var G__33972 = (0);
seq__33955 = G__33969;
chunk__33956 = G__33970;
count__33957 = G__33971;
i__33958 = G__33972;
continue;
} else {
var vec__33960 = cljs.core.first.call(null,seq__33955__$1);
var k = cljs.core.nth.call(null,vec__33960,(0),null);
var v = cljs.core.nth.call(null,vec__33960,(1),null);
f.call(null,v,k);

var G__33973 = cljs.core.next.call(null,seq__33955__$1);
var G__33974 = null;
var G__33975 = (0);
var G__33976 = (0);
seq__33955 = G__33973;
chunk__33956 = G__33974;
count__33957 = G__33975;
i__33958 = G__33976;
continue;
}
} else {
return null;
}
}
break;
}
});})(x33954,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x33954;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args33977 = [];
var len__24553__auto___33983 = arguments.length;
var i__24554__auto___33984 = (0);
while(true){
if((i__24554__auto___33984 < len__24553__auto___33983)){
args33977.push((arguments[i__24554__auto___33984]));

var G__33985 = (i__24554__auto___33984 + (1));
i__24554__auto___33984 = G__33985;
continue;
} else {
}
break;
}

var G__33979 = args33977.length;
switch (G__33979) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33977.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit33980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit33980 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta33981){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta33981 = meta33981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit33980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33982,meta33981__$1){
var self__ = this;
var _33982__$1 = this;
return (new cognitect.transit.t_cognitect$transit33980(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta33981__$1));
});

cognitect.transit.t_cognitect$transit33980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33982){
var self__ = this;
var _33982__$1 = this;
return self__.meta33981;
});

cognitect.transit.t_cognitect$transit33980.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit33980.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit33980.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit33980.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit33980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta33981","meta33981",-1409699650,null)], null);
});

cognitect.transit.t_cognitect$transit33980.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit33980.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit33980";

cognitect.transit.t_cognitect$transit33980.cljs$lang$ctorPrWriter = (function (this__24093__auto__,writer__24094__auto__,opt__24095__auto__){
return cljs.core._write.call(null,writer__24094__auto__,"cognitect.transit/t_cognitect$transit33980");
});

cognitect.transit.__GT_t_cognitect$transit33980 = (function cognitect$transit$__GT_t_cognitect$transit33980(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta33981){
return (new cognitect.transit.t_cognitect$transit33980(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta33981));
});

}

return (new cognitect.transit.t_cognitect$transit33980(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map