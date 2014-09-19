// Compiled by ClojureScript 0.0-2202
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10109 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10109 = (function (f,fn_handler,meta10110){
this.f = f;
this.fn_handler = fn_handler;
this.meta10110 = meta10110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10109.cljs$lang$type = true;
cljs.core.async.t10109.cljs$lang$ctorStr = "cljs.core.async/t10109";
cljs.core.async.t10109.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t10109");
});
cljs.core.async.t10109.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10111){var self__ = this;
var _10111__$1 = this;return self__.meta10110;
});
cljs.core.async.t10109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10111,meta10110__$1){var self__ = this;
var _10111__$1 = this;return (new cljs.core.async.t10109(self__.f,self__.fn_handler,meta10110__$1));
});
cljs.core.async.__GT_t10109 = (function __GT_t10109(f__$1,fn_handler__$1,meta10110){return (new cljs.core.async.t10109(f__$1,fn_handler__$1,meta10110));
});
}
return (new cljs.core.async.t10109(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10113 = buff;if(G__10113)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__10113.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10113.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__10113);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__10113);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",1080054743,null)], 0)))].join('')));
}
} else
{}
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_10114 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10114) : fn1.call(null,val_10114));
} else
{cljs.core.async.impl.dispatch.run(((function (val_10114,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10114) : fn1.call(null,val_10114));
});})(val_10114,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref(ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref(retb);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4329__auto___10115 = n;var x_10116 = 0;while(true){
if((x_10116 < n__4329__auto___10115))
{(a[x_10116] = 0);
{
var G__10117 = (x_10116 + 1);
x_10116 = G__10117;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10118 = (i + 1);
i = G__10118;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t10122 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10122 = (function (flag,alt_flag,meta10123){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10123 = meta10123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10122.cljs$lang$type = true;
cljs.core.async.t10122.cljs$lang$ctorStr = "cljs.core.async/t10122";
cljs.core.async.t10122.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t10122");
});})(flag))
;
cljs.core.async.t10122.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t10122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10124){var self__ = this;
var _10124__$1 = this;return self__.meta10123;
});})(flag))
;
cljs.core.async.t10122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10124,meta10123__$1){var self__ = this;
var _10124__$1 = this;return (new cljs.core.async.t10122(self__.flag,self__.alt_flag,meta10123__$1));
});})(flag))
;
cljs.core.async.__GT_t10122 = ((function (flag){
return (function __GT_t10122(flag__$1,alt_flag__$1,meta10123){return (new cljs.core.async.t10122(flag__$1,alt_flag__$1,meta10123));
});})(flag))
;
}
return (new cljs.core.async.t10122(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10128 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10128 = (function (cb,flag,alt_handler,meta10129){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10129 = meta10129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10128.cljs$lang$type = true;
cljs.core.async.t10128.cljs$lang$ctorStr = "cljs.core.async/t10128";
cljs.core.async.t10128.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t10128");
});
cljs.core.async.t10128.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t10128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t10128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10130){var self__ = this;
var _10130__$1 = this;return self__.meta10129;
});
cljs.core.async.t10128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10130,meta10129__$1){var self__ = this;
var _10130__$1 = this;return (new cljs.core.async.t10128(self__.cb,self__.flag,self__.alt_handler,meta10129__$1));
});
cljs.core.async.__GT_t10128 = (function __GT_t10128(cb__$1,flag__$1,alt_handler__$1,meta10129){return (new cljs.core.async.t10128(cb__$1,flag__$1,alt_handler__$1,meta10129));
});
}
return (new cljs.core.async.t10128(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10131_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10131_SHARP_,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10131_SHARP_,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10132_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10132_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10132_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3481__auto__ = wport;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10133 = (i + 1);
i = G__10133;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3481__auto__ = ret;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4126__auto__ = (function (){var and__3469__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3469__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10134){var map__10136 = p__10134;var map__10136__$1 = ((cljs.core.seq_QMARK_(map__10136))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10136):map__10136);var opts = map__10136__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__10134 = null;if (arguments.length > 1) {
  p__10134 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10134);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10137){
var ports = cljs.core.first(arglist__10137);
var p__10134 = cljs.core.rest(arglist__10137);
return alts_BANG___delegate(ports,p__10134);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6102__auto___10232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___10232){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___10232){
return (function (state_10208){var state_val_10209 = (state_10208[1]);if((state_val_10209 === 7))
{var inst_10204 = (state_10208[2]);var state_10208__$1 = state_10208;var statearr_10210_10233 = state_10208__$1;(statearr_10210_10233[2] = inst_10204);
(statearr_10210_10233[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10209 === 1))
{var state_10208__$1 = state_10208;var statearr_10211_10234 = state_10208__$1;(statearr_10211_10234[2] = null);
(statearr_10211_10234[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10209 === 4))
{var inst_10187 = (state_10208[7]);var inst_10187__$1 = (state_10208[2]);var inst_10188 = (inst_10187__$1 == null);var state_10208__$1 = (function (){var statearr_10212 = state_10208;(statearr_10212[7] = inst_10187__$1);
return statearr_10212;
})();if(cljs.core.truth_(inst_10188))
{var statearr_10213_10235 = state_10208__$1;(statearr_10213_10235[1] = 5);
} else
{var statearr_10214_10236 = state_10208__$1;(statearr_10214_10236[1] = 6);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10209 === 13))
{var state_10208__$1 = state_10208;var statearr_10215_10237 = state_10208__$1;(statearr_10215_10237[2] = null);
(statearr_10215_10237[1] = 14);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10209 === 6))
{var inst_10187 = (state_10208[7]);var state_10208__$1 = state_10208;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10208__$1,11,to,inst_10187);
} else
{if((state_val_10209 === 3))
{var inst_10206 = (state_10208[2]);var state_10208__$1 = state_10208;return cljs.core.async.impl.ioc_helpers.return_chan(state_10208__$1,inst_10206);
} else
{if((state_val_10209 === 12))
{var state_10208__$1 = state_10208;var statearr_10216_10238 = state_10208__$1;(statearr_10216_10238[2] = null);
(statearr_10216_10238[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10209 === 2))
{var state_10208__$1 = state_10208;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10208__$1,4,from);
} else
{if((state_val_10209 === 11))
{var inst_10197 = (state_10208[2]);var state_10208__$1 = state_10208;if(cljs.core.truth_(inst_10197))
{var statearr_10217_10239 = state_10208__$1;(statearr_10217_10239[1] = 12);
} else
{var statearr_10218_10240 = state_10208__$1;(statearr_10218_10240[1] = 13);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10209 === 9))
{var state_10208__$1 = state_10208;var statearr_10219_10241 = state_10208__$1;(statearr_10219_10241[2] = null);
(statearr_10219_10241[1] = 10);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10209 === 5))
{var state_10208__$1 = state_10208;if(cljs.core.truth_(close_QMARK_))
{var statearr_10220_10242 = state_10208__$1;(statearr_10220_10242[1] = 8);
} else
{var statearr_10221_10243 = state_10208__$1;(statearr_10221_10243[1] = 9);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10209 === 14))
{var inst_10202 = (state_10208[2]);var state_10208__$1 = state_10208;var statearr_10222_10244 = state_10208__$1;(statearr_10222_10244[2] = inst_10202);
(statearr_10222_10244[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10209 === 10))
{var inst_10194 = (state_10208[2]);var state_10208__$1 = state_10208;var statearr_10223_10245 = state_10208__$1;(statearr_10223_10245[2] = inst_10194);
(statearr_10223_10245[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10209 === 8))
{var inst_10191 = cljs.core.async.close_BANG_(to);var state_10208__$1 = state_10208;var statearr_10224_10246 = state_10208__$1;(statearr_10224_10246[2] = inst_10191);
(statearr_10224_10246[1] = 10);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto___10232))
;return ((function (switch__6087__auto__,c__6102__auto___10232){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10228 = [null,null,null,null,null,null,null,null];(statearr_10228[0] = state_machine__6088__auto__);
(statearr_10228[1] = 1);
return statearr_10228;
});
var state_machine__6088__auto____1 = (function (state_10208){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_10208);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10229){if((e10229 instanceof Object))
{var ex__6091__auto__ = e10229;var statearr_10230_10247 = state_10208;(statearr_10230_10247[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10208);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e10229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__10248 = state_10208;
state_10208 = G__10248;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10208){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___10232))
})();var state__6104__auto__ = (function (){var statearr_10231 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_10231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___10232);
return statearr_10231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___10232))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"n","n",-1640531417,null))], 0)))].join('')));
}
var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);var process = ((function (jobs,results){
return (function (p__10431){var vec__10432 = p__10431;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10432,0,null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10432,1,null);var job = vec__10432;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(1,xf,ex_handler);var c__6102__auto___10613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___10613,res,vec__10432,v,p,job,jobs,results){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___10613,res,vec__10432,v,p,job,jobs,results){
return (function (state_10437){var state_val_10438 = (state_10437[1]);if((state_val_10438 === 2))
{var inst_10434 = (state_10437[2]);var inst_10435 = cljs.core.async.close_BANG_(res);var state_10437__$1 = (function (){var statearr_10439 = state_10437;(statearr_10439[7] = inst_10434);
return statearr_10439;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_10437__$1,inst_10435);
} else
{if((state_val_10438 === 1))
{var state_10437__$1 = state_10437;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10437__$1,2,res,v);
} else
{return null;
}
}
});})(c__6102__auto___10613,res,vec__10432,v,p,job,jobs,results))
;return ((function (switch__6087__auto__,c__6102__auto___10613,res,vec__10432,v,p,job,jobs,results){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10443 = [null,null,null,null,null,null,null,null];(statearr_10443[0] = state_machine__6088__auto__);
(statearr_10443[1] = 1);
return statearr_10443;
});
var state_machine__6088__auto____1 = (function (state_10437){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_10437);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10444){if((e10444 instanceof Object))
{var ex__6091__auto__ = e10444;var statearr_10445_10614 = state_10437;(statearr_10445_10614[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10437);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e10444;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__10615 = state_10437;
state_10437 = G__10615;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10437){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___10613,res,vec__10432,v,p,job,jobs,results))
})();var state__6104__auto__ = (function (){var statearr_10446 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_10446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___10613);
return statearr_10446;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___10613,res,vec__10432,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__10447){var vec__10448 = p__10447;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10448,0,null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10448,1,null);var job = vec__10448;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4329__auto___10616 = n;var __10617 = 0;while(true){
if((__10617 < n__4329__auto___10616))
{var G__10449_10618 = type;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$38,G__10449_10618))
{var c__6102__auto___10619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (__10617,c__6102__auto___10619,G__10449_10618,n__4329__auto___10616,jobs,results,process,async){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (__10617,c__6102__auto___10619,G__10449_10618,n__4329__auto___10616,jobs,results,process,async){
return (function (state_10462){var state_val_10463 = (state_10462[1]);if((state_val_10463 === 7))
{var inst_10458 = (state_10462[2]);var state_10462__$1 = state_10462;var statearr_10464_10620 = state_10462__$1;(statearr_10464_10620[2] = inst_10458);
(statearr_10464_10620[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10463 === 6))
{var state_10462__$1 = state_10462;var statearr_10465_10621 = state_10462__$1;(statearr_10465_10621[2] = null);
(statearr_10465_10621[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10463 === 5))
{var state_10462__$1 = state_10462;var statearr_10466_10622 = state_10462__$1;(statearr_10466_10622[2] = null);
(statearr_10466_10622[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10463 === 4))
{var inst_10452 = (state_10462[2]);var inst_10453 = async(inst_10452);var state_10462__$1 = state_10462;if(cljs.core.truth_(inst_10453))
{var statearr_10467_10623 = state_10462__$1;(statearr_10467_10623[1] = 5);
} else
{var statearr_10468_10624 = state_10462__$1;(statearr_10468_10624[1] = 6);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10463 === 3))
{var inst_10460 = (state_10462[2]);var state_10462__$1 = state_10462;return cljs.core.async.impl.ioc_helpers.return_chan(state_10462__$1,inst_10460);
} else
{if((state_val_10463 === 2))
{var state_10462__$1 = state_10462;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10462__$1,4,jobs);
} else
{if((state_val_10463 === 1))
{var state_10462__$1 = state_10462;var statearr_10469_10625 = state_10462__$1;(statearr_10469_10625[2] = null);
(statearr_10469_10625[1] = 2);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
});})(__10617,c__6102__auto___10619,G__10449_10618,n__4329__auto___10616,jobs,results,process,async))
;return ((function (__10617,switch__6087__auto__,c__6102__auto___10619,G__10449_10618,n__4329__auto___10616,jobs,results,process,async){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10473 = [null,null,null,null,null,null,null];(statearr_10473[0] = state_machine__6088__auto__);
(statearr_10473[1] = 1);
return statearr_10473;
});
var state_machine__6088__auto____1 = (function (state_10462){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_10462);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10474){if((e10474 instanceof Object))
{var ex__6091__auto__ = e10474;var statearr_10475_10626 = state_10462;(statearr_10475_10626[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10462);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e10474;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__10627 = state_10462;
state_10462 = G__10627;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10462){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(__10617,switch__6087__auto__,c__6102__auto___10619,G__10449_10618,n__4329__auto___10616,jobs,results,process,async))
})();var state__6104__auto__ = (function (){var statearr_10476 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_10476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___10619);
return statearr_10476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(__10617,c__6102__auto___10619,G__10449_10618,n__4329__auto___10616,jobs,results,process,async))
);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$39,G__10449_10618))
{var c__6102__auto___10628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (__10617,c__6102__auto___10628,G__10449_10618,n__4329__auto___10616,jobs,results,process,async){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (__10617,c__6102__auto___10628,G__10449_10618,n__4329__auto___10616,jobs,results,process,async){
return (function (state_10489){var state_val_10490 = (state_10489[1]);if((state_val_10490 === 7))
{var inst_10485 = (state_10489[2]);var state_10489__$1 = state_10489;var statearr_10491_10629 = state_10489__$1;(statearr_10491_10629[2] = inst_10485);
(statearr_10491_10629[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10490 === 6))
{var state_10489__$1 = state_10489;var statearr_10492_10630 = state_10489__$1;(statearr_10492_10630[2] = null);
(statearr_10492_10630[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10490 === 5))
{var state_10489__$1 = state_10489;var statearr_10493_10631 = state_10489__$1;(statearr_10493_10631[2] = null);
(statearr_10493_10631[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10490 === 4))
{var inst_10479 = (state_10489[2]);var inst_10480 = process(inst_10479);var state_10489__$1 = state_10489;if(cljs.core.truth_(inst_10480))
{var statearr_10494_10632 = state_10489__$1;(statearr_10494_10632[1] = 5);
} else
{var statearr_10495_10633 = state_10489__$1;(statearr_10495_10633[1] = 6);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10490 === 3))
{var inst_10487 = (state_10489[2]);var state_10489__$1 = state_10489;return cljs.core.async.impl.ioc_helpers.return_chan(state_10489__$1,inst_10487);
} else
{if((state_val_10490 === 2))
{var state_10489__$1 = state_10489;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10489__$1,4,jobs);
} else
{if((state_val_10490 === 1))
{var state_10489__$1 = state_10489;var statearr_10496_10634 = state_10489__$1;(statearr_10496_10634[2] = null);
(statearr_10496_10634[1] = 2);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
});})(__10617,c__6102__auto___10628,G__10449_10618,n__4329__auto___10616,jobs,results,process,async))
;return ((function (__10617,switch__6087__auto__,c__6102__auto___10628,G__10449_10618,n__4329__auto___10616,jobs,results,process,async){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10500 = [null,null,null,null,null,null,null];(statearr_10500[0] = state_machine__6088__auto__);
(statearr_10500[1] = 1);
return statearr_10500;
});
var state_machine__6088__auto____1 = (function (state_10489){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_10489);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10501){if((e10501 instanceof Object))
{var ex__6091__auto__ = e10501;var statearr_10502_10635 = state_10489;(statearr_10502_10635[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10489);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e10501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__10636 = state_10489;
state_10489 = G__10636;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10489){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(__10617,switch__6087__auto__,c__6102__auto___10628,G__10449_10618,n__4329__auto___10616,jobs,results,process,async))
})();var state__6104__auto__ = (function (){var statearr_10503 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_10503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___10628);
return statearr_10503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(__10617,c__6102__auto___10628,G__10449_10618,n__4329__auto___10616,jobs,results,process,async))
);
} else
{if(cljs.core.constant$keyword$6)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{}
}
}
{
var G__10637 = (__10617 + 1);
__10617 = G__10637;
continue;
}
} else
{}
break;
}
var c__6102__auto___10638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___10638,jobs,results,process,async){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___10638,jobs,results,process,async){
return (function (state_10524){var state_val_10525 = (state_10524[1]);if((state_val_10525 === 9))
{var inst_10517 = (state_10524[2]);var state_10524__$1 = (function (){var statearr_10526 = state_10524;(statearr_10526[7] = inst_10517);
return statearr_10526;
})();var statearr_10527_10639 = state_10524__$1;(statearr_10527_10639[2] = null);
(statearr_10527_10639[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10525 === 8))
{var inst_10511 = (state_10524[8]);var inst_10515 = (state_10524[2]);var state_10524__$1 = (function (){var statearr_10528 = state_10524;(statearr_10528[9] = inst_10515);
return statearr_10528;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10524__$1,9,results,inst_10511);
} else
{if((state_val_10525 === 7))
{var inst_10520 = (state_10524[2]);var state_10524__$1 = state_10524;var statearr_10529_10640 = state_10524__$1;(statearr_10529_10640[2] = inst_10520);
(statearr_10529_10640[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10525 === 6))
{var inst_10506 = (state_10524[10]);var inst_10511 = (state_10524[8]);var inst_10511__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var inst_10512 = [inst_10506,inst_10511__$1];var inst_10513 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10512,null));var state_10524__$1 = (function (){var statearr_10530 = state_10524;(statearr_10530[8] = inst_10511__$1);
return statearr_10530;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10524__$1,8,jobs,inst_10513);
} else
{if((state_val_10525 === 5))
{var inst_10509 = cljs.core.async.close_BANG_(jobs);var state_10524__$1 = state_10524;var statearr_10531_10641 = state_10524__$1;(statearr_10531_10641[2] = inst_10509);
(statearr_10531_10641[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10525 === 4))
{var inst_10506 = (state_10524[10]);var inst_10506__$1 = (state_10524[2]);var inst_10507 = (inst_10506__$1 == null);var state_10524__$1 = (function (){var statearr_10532 = state_10524;(statearr_10532[10] = inst_10506__$1);
return statearr_10532;
})();if(cljs.core.truth_(inst_10507))
{var statearr_10533_10642 = state_10524__$1;(statearr_10533_10642[1] = 5);
} else
{var statearr_10534_10643 = state_10524__$1;(statearr_10534_10643[1] = 6);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10525 === 3))
{var inst_10522 = (state_10524[2]);var state_10524__$1 = state_10524;return cljs.core.async.impl.ioc_helpers.return_chan(state_10524__$1,inst_10522);
} else
{if((state_val_10525 === 2))
{var state_10524__$1 = state_10524;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10524__$1,4,from);
} else
{if((state_val_10525 === 1))
{var state_10524__$1 = state_10524;var statearr_10535_10644 = state_10524__$1;(statearr_10535_10644[2] = null);
(statearr_10535_10644[1] = 2);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__6102__auto___10638,jobs,results,process,async))
;return ((function (switch__6087__auto__,c__6102__auto___10638,jobs,results,process,async){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10539 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10539[0] = state_machine__6088__auto__);
(statearr_10539[1] = 1);
return statearr_10539;
});
var state_machine__6088__auto____1 = (function (state_10524){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_10524);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10540){if((e10540 instanceof Object))
{var ex__6091__auto__ = e10540;var statearr_10541_10645 = state_10524;(statearr_10541_10645[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10524);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e10540;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__10646 = state_10524;
state_10524 = G__10646;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10524){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___10638,jobs,results,process,async))
})();var state__6104__auto__ = (function (){var statearr_10542 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_10542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___10638);
return statearr_10542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___10638,jobs,results,process,async))
);
var c__6102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto__,jobs,results,process,async){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto__,jobs,results,process,async){
return (function (state_10580){var state_val_10581 = (state_10580[1]);if((state_val_10581 === 7))
{var inst_10576 = (state_10580[2]);var state_10580__$1 = state_10580;var statearr_10582_10647 = state_10580__$1;(statearr_10582_10647[2] = inst_10576);
(statearr_10582_10647[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 20))
{var state_10580__$1 = state_10580;var statearr_10583_10648 = state_10580__$1;(statearr_10583_10648[2] = null);
(statearr_10583_10648[1] = 21);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 1))
{var state_10580__$1 = state_10580;var statearr_10584_10649 = state_10580__$1;(statearr_10584_10649[2] = null);
(statearr_10584_10649[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 4))
{var inst_10545 = (state_10580[7]);var inst_10545__$1 = (state_10580[2]);var inst_10546 = (inst_10545__$1 == null);var state_10580__$1 = (function (){var statearr_10585 = state_10580;(statearr_10585[7] = inst_10545__$1);
return statearr_10585;
})();if(cljs.core.truth_(inst_10546))
{var statearr_10586_10650 = state_10580__$1;(statearr_10586_10650[1] = 5);
} else
{var statearr_10587_10651 = state_10580__$1;(statearr_10587_10651[1] = 6);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 15))
{var inst_10558 = (state_10580[8]);var state_10580__$1 = state_10580;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10580__$1,18,to,inst_10558);
} else
{if((state_val_10581 === 21))
{var inst_10571 = (state_10580[2]);var state_10580__$1 = state_10580;var statearr_10588_10652 = state_10580__$1;(statearr_10588_10652[2] = inst_10571);
(statearr_10588_10652[1] = 13);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 13))
{var inst_10573 = (state_10580[2]);var state_10580__$1 = (function (){var statearr_10589 = state_10580;(statearr_10589[9] = inst_10573);
return statearr_10589;
})();var statearr_10590_10653 = state_10580__$1;(statearr_10590_10653[2] = null);
(statearr_10590_10653[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 6))
{var inst_10545 = (state_10580[7]);var state_10580__$1 = state_10580;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10580__$1,11,inst_10545);
} else
{if((state_val_10581 === 17))
{var inst_10566 = (state_10580[2]);var state_10580__$1 = state_10580;if(cljs.core.truth_(inst_10566))
{var statearr_10591_10654 = state_10580__$1;(statearr_10591_10654[1] = 19);
} else
{var statearr_10592_10655 = state_10580__$1;(statearr_10592_10655[1] = 20);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 3))
{var inst_10578 = (state_10580[2]);var state_10580__$1 = state_10580;return cljs.core.async.impl.ioc_helpers.return_chan(state_10580__$1,inst_10578);
} else
{if((state_val_10581 === 12))
{var inst_10555 = (state_10580[10]);var state_10580__$1 = state_10580;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10580__$1,14,inst_10555);
} else
{if((state_val_10581 === 2))
{var state_10580__$1 = state_10580;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10580__$1,4,results);
} else
{if((state_val_10581 === 19))
{var state_10580__$1 = state_10580;var statearr_10593_10656 = state_10580__$1;(statearr_10593_10656[2] = null);
(statearr_10593_10656[1] = 12);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 11))
{var inst_10555 = (state_10580[2]);var state_10580__$1 = (function (){var statearr_10594 = state_10580;(statearr_10594[10] = inst_10555);
return statearr_10594;
})();var statearr_10595_10657 = state_10580__$1;(statearr_10595_10657[2] = null);
(statearr_10595_10657[1] = 12);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 9))
{var state_10580__$1 = state_10580;var statearr_10596_10658 = state_10580__$1;(statearr_10596_10658[2] = null);
(statearr_10596_10658[1] = 10);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 5))
{var state_10580__$1 = state_10580;if(cljs.core.truth_(close_QMARK_))
{var statearr_10597_10659 = state_10580__$1;(statearr_10597_10659[1] = 8);
} else
{var statearr_10598_10660 = state_10580__$1;(statearr_10598_10660[1] = 9);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 14))
{var inst_10560 = (state_10580[11]);var inst_10558 = (state_10580[8]);var inst_10558__$1 = (state_10580[2]);var inst_10559 = (inst_10558__$1 == null);var inst_10560__$1 = cljs.core.not(inst_10559);var state_10580__$1 = (function (){var statearr_10599 = state_10580;(statearr_10599[11] = inst_10560__$1);
(statearr_10599[8] = inst_10558__$1);
return statearr_10599;
})();if(inst_10560__$1)
{var statearr_10600_10661 = state_10580__$1;(statearr_10600_10661[1] = 15);
} else
{var statearr_10601_10662 = state_10580__$1;(statearr_10601_10662[1] = 16);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 16))
{var inst_10560 = (state_10580[11]);var state_10580__$1 = state_10580;var statearr_10602_10663 = state_10580__$1;(statearr_10602_10663[2] = inst_10560);
(statearr_10602_10663[1] = 17);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 10))
{var inst_10552 = (state_10580[2]);var state_10580__$1 = state_10580;var statearr_10603_10664 = state_10580__$1;(statearr_10603_10664[2] = inst_10552);
(statearr_10603_10664[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 18))
{var inst_10563 = (state_10580[2]);var state_10580__$1 = state_10580;var statearr_10604_10665 = state_10580__$1;(statearr_10604_10665[2] = inst_10563);
(statearr_10604_10665[1] = 17);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10581 === 8))
{var inst_10549 = cljs.core.async.close_BANG_(to);var state_10580__$1 = state_10580;var statearr_10605_10666 = state_10580__$1;(statearr_10605_10666[2] = inst_10549);
(statearr_10605_10666[1] = 10);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto__,jobs,results,process,async))
;return ((function (switch__6087__auto__,c__6102__auto__,jobs,results,process,async){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10609 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10609[0] = state_machine__6088__auto__);
(statearr_10609[1] = 1);
return statearr_10609;
});
var state_machine__6088__auto____1 = (function (state_10580){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_10580);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10610){if((e10610 instanceof Object))
{var ex__6091__auto__ = e10610;var statearr_10611_10667 = state_10580;(statearr_10611_10667[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10580);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e10610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__10668 = state_10580;
state_10580 = G__10668;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10580){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto__,jobs,results,process,async))
})();var state__6104__auto__ = (function (){var statearr_10612 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_10612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto__);
return statearr_10612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto__,jobs,results,process,async))
);
return c__6102__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$38);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$39);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__6102__auto___10769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___10769,tc,fc){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___10769,tc,fc){
return (function (state_10744){var state_val_10745 = (state_10744[1]);if((state_val_10745 === 7))
{var inst_10740 = (state_10744[2]);var state_10744__$1 = state_10744;var statearr_10746_10770 = state_10744__$1;(statearr_10746_10770[2] = inst_10740);
(statearr_10746_10770[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10745 === 1))
{var state_10744__$1 = state_10744;var statearr_10747_10771 = state_10744__$1;(statearr_10747_10771[2] = null);
(statearr_10747_10771[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10745 === 4))
{var inst_10721 = (state_10744[7]);var inst_10721__$1 = (state_10744[2]);var inst_10722 = (inst_10721__$1 == null);var state_10744__$1 = (function (){var statearr_10748 = state_10744;(statearr_10748[7] = inst_10721__$1);
return statearr_10748;
})();if(cljs.core.truth_(inst_10722))
{var statearr_10749_10772 = state_10744__$1;(statearr_10749_10772[1] = 5);
} else
{var statearr_10750_10773 = state_10744__$1;(statearr_10750_10773[1] = 6);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10745 === 13))
{var state_10744__$1 = state_10744;var statearr_10751_10774 = state_10744__$1;(statearr_10751_10774[2] = null);
(statearr_10751_10774[1] = 14);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10745 === 6))
{var inst_10721 = (state_10744[7]);var inst_10727 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10721) : p.call(null,inst_10721));var state_10744__$1 = state_10744;if(cljs.core.truth_(inst_10727))
{var statearr_10752_10775 = state_10744__$1;(statearr_10752_10775[1] = 9);
} else
{var statearr_10753_10776 = state_10744__$1;(statearr_10753_10776[1] = 10);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10745 === 3))
{var inst_10742 = (state_10744[2]);var state_10744__$1 = state_10744;return cljs.core.async.impl.ioc_helpers.return_chan(state_10744__$1,inst_10742);
} else
{if((state_val_10745 === 12))
{var state_10744__$1 = state_10744;var statearr_10754_10777 = state_10744__$1;(statearr_10754_10777[2] = null);
(statearr_10754_10777[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10745 === 2))
{var state_10744__$1 = state_10744;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10744__$1,4,ch);
} else
{if((state_val_10745 === 11))
{var inst_10721 = (state_10744[7]);var inst_10731 = (state_10744[2]);var state_10744__$1 = state_10744;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10744__$1,8,inst_10731,inst_10721);
} else
{if((state_val_10745 === 9))
{var state_10744__$1 = state_10744;var statearr_10755_10778 = state_10744__$1;(statearr_10755_10778[2] = tc);
(statearr_10755_10778[1] = 11);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10745 === 5))
{var inst_10724 = cljs.core.async.close_BANG_(tc);var inst_10725 = cljs.core.async.close_BANG_(fc);var state_10744__$1 = (function (){var statearr_10756 = state_10744;(statearr_10756[8] = inst_10724);
return statearr_10756;
})();var statearr_10757_10779 = state_10744__$1;(statearr_10757_10779[2] = inst_10725);
(statearr_10757_10779[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10745 === 14))
{var inst_10738 = (state_10744[2]);var state_10744__$1 = state_10744;var statearr_10758_10780 = state_10744__$1;(statearr_10758_10780[2] = inst_10738);
(statearr_10758_10780[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10745 === 10))
{var state_10744__$1 = state_10744;var statearr_10759_10781 = state_10744__$1;(statearr_10759_10781[2] = fc);
(statearr_10759_10781[1] = 11);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10745 === 8))
{var inst_10733 = (state_10744[2]);var state_10744__$1 = state_10744;if(cljs.core.truth_(inst_10733))
{var statearr_10760_10782 = state_10744__$1;(statearr_10760_10782[1] = 12);
} else
{var statearr_10761_10783 = state_10744__$1;(statearr_10761_10783[1] = 13);
}
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto___10769,tc,fc))
;return ((function (switch__6087__auto__,c__6102__auto___10769,tc,fc){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10765 = [null,null,null,null,null,null,null,null,null];(statearr_10765[0] = state_machine__6088__auto__);
(statearr_10765[1] = 1);
return statearr_10765;
});
var state_machine__6088__auto____1 = (function (state_10744){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_10744);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10766){if((e10766 instanceof Object))
{var ex__6091__auto__ = e10766;var statearr_10767_10784 = state_10744;(statearr_10767_10784[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10744);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e10766;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__10785 = state_10744;
state_10744 = G__10785;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10744){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___10769,tc,fc))
})();var state__6104__auto__ = (function (){var statearr_10768 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_10768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___10769);
return statearr_10768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___10769,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto__){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto__){
return (function (state_10832){var state_val_10833 = (state_10832[1]);if((state_val_10833 === 7))
{var inst_10828 = (state_10832[2]);var state_10832__$1 = state_10832;var statearr_10834_10850 = state_10832__$1;(statearr_10834_10850[2] = inst_10828);
(statearr_10834_10850[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10833 === 6))
{var inst_10818 = (state_10832[7]);var inst_10821 = (state_10832[8]);var inst_10825 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_10818,inst_10821) : f.call(null,inst_10818,inst_10821));var inst_10818__$1 = inst_10825;var state_10832__$1 = (function (){var statearr_10835 = state_10832;(statearr_10835[7] = inst_10818__$1);
return statearr_10835;
})();var statearr_10836_10851 = state_10832__$1;(statearr_10836_10851[2] = null);
(statearr_10836_10851[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10833 === 5))
{var inst_10818 = (state_10832[7]);var state_10832__$1 = state_10832;var statearr_10837_10852 = state_10832__$1;(statearr_10837_10852[2] = inst_10818);
(statearr_10837_10852[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10833 === 4))
{var inst_10821 = (state_10832[8]);var inst_10821__$1 = (state_10832[2]);var inst_10822 = (inst_10821__$1 == null);var state_10832__$1 = (function (){var statearr_10838 = state_10832;(statearr_10838[8] = inst_10821__$1);
return statearr_10838;
})();if(cljs.core.truth_(inst_10822))
{var statearr_10839_10853 = state_10832__$1;(statearr_10839_10853[1] = 5);
} else
{var statearr_10840_10854 = state_10832__$1;(statearr_10840_10854[1] = 6);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10833 === 3))
{var inst_10830 = (state_10832[2]);var state_10832__$1 = state_10832;return cljs.core.async.impl.ioc_helpers.return_chan(state_10832__$1,inst_10830);
} else
{if((state_val_10833 === 2))
{var state_10832__$1 = state_10832;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10832__$1,4,ch);
} else
{if((state_val_10833 === 1))
{var inst_10818 = init;var state_10832__$1 = (function (){var statearr_10841 = state_10832;(statearr_10841[7] = inst_10818);
return statearr_10841;
})();var statearr_10842_10855 = state_10832__$1;(statearr_10842_10855[2] = null);
(statearr_10842_10855[1] = 2);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
});})(c__6102__auto__))
;return ((function (switch__6087__auto__,c__6102__auto__){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10846 = [null,null,null,null,null,null,null,null,null];(statearr_10846[0] = state_machine__6088__auto__);
(statearr_10846[1] = 1);
return statearr_10846;
});
var state_machine__6088__auto____1 = (function (state_10832){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_10832);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10847){if((e10847 instanceof Object))
{var ex__6091__auto__ = e10847;var statearr_10848_10856 = state_10832;(statearr_10848_10856[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10832);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e10847;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__10857 = state_10832;
state_10832 = G__10857;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10832){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto__))
})();var state__6104__auto__ = (function (){var statearr_10849 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_10849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto__);
return statearr_10849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto__))
);
return c__6102__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto__){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto__){
return (function (state_10931){var state_val_10932 = (state_10931[1]);if((state_val_10932 === 7))
{var inst_10913 = (state_10931[2]);var state_10931__$1 = state_10931;var statearr_10933_10956 = state_10931__$1;(statearr_10933_10956[2] = inst_10913);
(statearr_10933_10956[1] = 6);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10932 === 1))
{var inst_10907 = cljs.core.seq(coll);var inst_10908 = inst_10907;var state_10931__$1 = (function (){var statearr_10934 = state_10931;(statearr_10934[7] = inst_10908);
return statearr_10934;
})();var statearr_10935_10957 = state_10931__$1;(statearr_10935_10957[2] = null);
(statearr_10935_10957[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10932 === 4))
{var inst_10908 = (state_10931[7]);var inst_10911 = cljs.core.first(inst_10908);var state_10931__$1 = state_10931;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10931__$1,7,ch,inst_10911);
} else
{if((state_val_10932 === 13))
{var inst_10925 = (state_10931[2]);var state_10931__$1 = state_10931;var statearr_10936_10958 = state_10931__$1;(statearr_10936_10958[2] = inst_10925);
(statearr_10936_10958[1] = 10);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10932 === 6))
{var inst_10916 = (state_10931[2]);var state_10931__$1 = state_10931;if(cljs.core.truth_(inst_10916))
{var statearr_10937_10959 = state_10931__$1;(statearr_10937_10959[1] = 8);
} else
{var statearr_10938_10960 = state_10931__$1;(statearr_10938_10960[1] = 9);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10932 === 3))
{var inst_10929 = (state_10931[2]);var state_10931__$1 = state_10931;return cljs.core.async.impl.ioc_helpers.return_chan(state_10931__$1,inst_10929);
} else
{if((state_val_10932 === 12))
{var state_10931__$1 = state_10931;var statearr_10939_10961 = state_10931__$1;(statearr_10939_10961[2] = null);
(statearr_10939_10961[1] = 13);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10932 === 2))
{var inst_10908 = (state_10931[7]);var state_10931__$1 = state_10931;if(cljs.core.truth_(inst_10908))
{var statearr_10940_10962 = state_10931__$1;(statearr_10940_10962[1] = 4);
} else
{var statearr_10941_10963 = state_10931__$1;(statearr_10941_10963[1] = 5);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10932 === 11))
{var inst_10922 = cljs.core.async.close_BANG_(ch);var state_10931__$1 = state_10931;var statearr_10942_10964 = state_10931__$1;(statearr_10942_10964[2] = inst_10922);
(statearr_10942_10964[1] = 13);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10932 === 9))
{var state_10931__$1 = state_10931;if(cljs.core.truth_(close_QMARK_))
{var statearr_10943_10965 = state_10931__$1;(statearr_10943_10965[1] = 11);
} else
{var statearr_10944_10966 = state_10931__$1;(statearr_10944_10966[1] = 12);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10932 === 5))
{var inst_10908 = (state_10931[7]);var state_10931__$1 = state_10931;var statearr_10945_10967 = state_10931__$1;(statearr_10945_10967[2] = inst_10908);
(statearr_10945_10967[1] = 6);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10932 === 10))
{var inst_10927 = (state_10931[2]);var state_10931__$1 = state_10931;var statearr_10946_10968 = state_10931__$1;(statearr_10946_10968[2] = inst_10927);
(statearr_10946_10968[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_10932 === 8))
{var inst_10908 = (state_10931[7]);var inst_10918 = cljs.core.next(inst_10908);var inst_10908__$1 = inst_10918;var state_10931__$1 = (function (){var statearr_10947 = state_10931;(statearr_10947[7] = inst_10908__$1);
return statearr_10947;
})();var statearr_10948_10969 = state_10931__$1;(statearr_10948_10969[2] = null);
(statearr_10948_10969[1] = 2);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto__))
;return ((function (switch__6087__auto__,c__6102__auto__){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10952 = [null,null,null,null,null,null,null,null];(statearr_10952[0] = state_machine__6088__auto__);
(statearr_10952[1] = 1);
return statearr_10952;
});
var state_machine__6088__auto____1 = (function (state_10931){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_10931);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10953){if((e10953 instanceof Object))
{var ex__6091__auto__ = e10953;var statearr_10954_10970 = state_10931;(statearr_10954_10970[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10931);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e10953;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__10971 = state_10931;
state_10931 = G__10971;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10931){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto__))
})();var state__6104__auto__ = (function (){var statearr_10955 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_10955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto__);
return statearr_10955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto__))
);
return c__6102__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10973 = {};return obj10973;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3469__auto__ = _;if(and__3469__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4108__auto__ = (((_ == null))?null:_);return (function (){var or__3481__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10975 = {};return obj10975;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11197 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11197 = (function (cs,ch,mult,meta11198){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11198 = meta11198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11197.cljs$lang$type = true;
cljs.core.async.t11197.cljs$lang$ctorStr = "cljs.core.async/t11197";
cljs.core.async.t11197.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t11197");
});})(cs))
;
cljs.core.async.t11197.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11197.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11197.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11197.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11197.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11197.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11197.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11199){var self__ = this;
var _11199__$1 = this;return self__.meta11198;
});})(cs))
;
cljs.core.async.t11197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11199,meta11198__$1){var self__ = this;
var _11199__$1 = this;return (new cljs.core.async.t11197(self__.cs,self__.ch,self__.mult,meta11198__$1));
});})(cs))
;
cljs.core.async.__GT_t11197 = ((function (cs){
return (function __GT_t11197(cs__$1,ch__$1,mult__$1,meta11198){return (new cljs.core.async.t11197(cs__$1,ch__$1,mult__$1,meta11198));
});})(cs))
;
}
return (new cljs.core.async.t11197(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6102__auto___11418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___11418,cs,m,dchan,dctr,done){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___11418,cs,m,dchan,dctr,done){
return (function (state_11330){var state_val_11331 = (state_11330[1]);if((state_val_11331 === 7))
{var inst_11326 = (state_11330[2]);var state_11330__$1 = state_11330;var statearr_11332_11419 = state_11330__$1;(statearr_11332_11419[2] = inst_11326);
(statearr_11332_11419[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 20))
{var inst_11231 = (state_11330[7]);var inst_11241 = cljs.core.first(inst_11231);var inst_11242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11241,0,null);var inst_11243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11241,1,null);var state_11330__$1 = (function (){var statearr_11333 = state_11330;(statearr_11333[8] = inst_11242);
return statearr_11333;
})();if(cljs.core.truth_(inst_11243))
{var statearr_11334_11420 = state_11330__$1;(statearr_11334_11420[1] = 22);
} else
{var statearr_11335_11421 = state_11330__$1;(statearr_11335_11421[1] = 23);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 27))
{var inst_11271 = (state_11330[9]);var inst_11273 = (state_11330[10]);var inst_11278 = (state_11330[11]);var inst_11202 = (state_11330[12]);var inst_11278__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11271,inst_11273);var inst_11279 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11278__$1,inst_11202,done);var state_11330__$1 = (function (){var statearr_11336 = state_11330;(statearr_11336[11] = inst_11278__$1);
return statearr_11336;
})();if(cljs.core.truth_(inst_11279))
{var statearr_11337_11422 = state_11330__$1;(statearr_11337_11422[1] = 30);
} else
{var statearr_11338_11423 = state_11330__$1;(statearr_11338_11423[1] = 31);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 1))
{var state_11330__$1 = state_11330;var statearr_11339_11424 = state_11330__$1;(statearr_11339_11424[2] = null);
(statearr_11339_11424[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 24))
{var inst_11231 = (state_11330[7]);var inst_11248 = (state_11330[2]);var inst_11249 = cljs.core.next(inst_11231);var inst_11211 = inst_11249;var inst_11212 = null;var inst_11213 = 0;var inst_11214 = 0;var state_11330__$1 = (function (){var statearr_11340 = state_11330;(statearr_11340[13] = inst_11212);
(statearr_11340[14] = inst_11213);
(statearr_11340[15] = inst_11248);
(statearr_11340[16] = inst_11211);
(statearr_11340[17] = inst_11214);
return statearr_11340;
})();var statearr_11341_11425 = state_11330__$1;(statearr_11341_11425[2] = null);
(statearr_11341_11425[1] = 8);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 39))
{var state_11330__$1 = state_11330;var statearr_11345_11426 = state_11330__$1;(statearr_11345_11426[2] = null);
(statearr_11345_11426[1] = 41);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 4))
{var inst_11202 = (state_11330[12]);var inst_11202__$1 = (state_11330[2]);var inst_11203 = (inst_11202__$1 == null);var state_11330__$1 = (function (){var statearr_11346 = state_11330;(statearr_11346[12] = inst_11202__$1);
return statearr_11346;
})();if(cljs.core.truth_(inst_11203))
{var statearr_11347_11427 = state_11330__$1;(statearr_11347_11427[1] = 5);
} else
{var statearr_11348_11428 = state_11330__$1;(statearr_11348_11428[1] = 6);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 15))
{var inst_11212 = (state_11330[13]);var inst_11213 = (state_11330[14]);var inst_11211 = (state_11330[16]);var inst_11214 = (state_11330[17]);var inst_11227 = (state_11330[2]);var inst_11228 = (inst_11214 + 1);var tmp11342 = inst_11212;var tmp11343 = inst_11213;var tmp11344 = inst_11211;var inst_11211__$1 = tmp11344;var inst_11212__$1 = tmp11342;var inst_11213__$1 = tmp11343;var inst_11214__$1 = inst_11228;var state_11330__$1 = (function (){var statearr_11349 = state_11330;(statearr_11349[13] = inst_11212__$1);
(statearr_11349[14] = inst_11213__$1);
(statearr_11349[16] = inst_11211__$1);
(statearr_11349[17] = inst_11214__$1);
(statearr_11349[18] = inst_11227);
return statearr_11349;
})();var statearr_11350_11429 = state_11330__$1;(statearr_11350_11429[2] = null);
(statearr_11350_11429[1] = 8);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 21))
{var inst_11252 = (state_11330[2]);var state_11330__$1 = state_11330;var statearr_11354_11430 = state_11330__$1;(statearr_11354_11430[2] = inst_11252);
(statearr_11354_11430[1] = 18);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 31))
{var inst_11278 = (state_11330[11]);var inst_11282 = done(null);var inst_11283 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11278);var state_11330__$1 = (function (){var statearr_11355 = state_11330;(statearr_11355[19] = inst_11282);
return statearr_11355;
})();var statearr_11356_11431 = state_11330__$1;(statearr_11356_11431[2] = inst_11283);
(statearr_11356_11431[1] = 32);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 32))
{var inst_11270 = (state_11330[20]);var inst_11271 = (state_11330[9]);var inst_11273 = (state_11330[10]);var inst_11272 = (state_11330[21]);var inst_11285 = (state_11330[2]);var inst_11286 = (inst_11273 + 1);var tmp11351 = inst_11270;var tmp11352 = inst_11271;var tmp11353 = inst_11272;var inst_11270__$1 = tmp11351;var inst_11271__$1 = tmp11352;var inst_11272__$1 = tmp11353;var inst_11273__$1 = inst_11286;var state_11330__$1 = (function (){var statearr_11357 = state_11330;(statearr_11357[22] = inst_11285);
(statearr_11357[20] = inst_11270__$1);
(statearr_11357[9] = inst_11271__$1);
(statearr_11357[10] = inst_11273__$1);
(statearr_11357[21] = inst_11272__$1);
return statearr_11357;
})();var statearr_11358_11432 = state_11330__$1;(statearr_11358_11432[2] = null);
(statearr_11358_11432[1] = 25);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 40))
{var inst_11298 = (state_11330[23]);var inst_11302 = done(null);var inst_11303 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11298);var state_11330__$1 = (function (){var statearr_11359 = state_11330;(statearr_11359[24] = inst_11302);
return statearr_11359;
})();var statearr_11360_11433 = state_11330__$1;(statearr_11360_11433[2] = inst_11303);
(statearr_11360_11433[1] = 41);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 33))
{var inst_11289 = (state_11330[25]);var inst_11291 = cljs.core.chunked_seq_QMARK_(inst_11289);var state_11330__$1 = state_11330;if(inst_11291)
{var statearr_11361_11434 = state_11330__$1;(statearr_11361_11434[1] = 36);
} else
{var statearr_11362_11435 = state_11330__$1;(statearr_11362_11435[1] = 37);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 13))
{var inst_11221 = (state_11330[26]);var inst_11224 = cljs.core.async.close_BANG_(inst_11221);var state_11330__$1 = state_11330;var statearr_11363_11436 = state_11330__$1;(statearr_11363_11436[2] = inst_11224);
(statearr_11363_11436[1] = 15);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 22))
{var inst_11242 = (state_11330[8]);var inst_11245 = cljs.core.async.close_BANG_(inst_11242);var state_11330__$1 = state_11330;var statearr_11364_11437 = state_11330__$1;(statearr_11364_11437[2] = inst_11245);
(statearr_11364_11437[1] = 24);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 36))
{var inst_11289 = (state_11330[25]);var inst_11293 = cljs.core.chunk_first(inst_11289);var inst_11294 = cljs.core.chunk_rest(inst_11289);var inst_11295 = cljs.core.count(inst_11293);var inst_11270 = inst_11294;var inst_11271 = inst_11293;var inst_11272 = inst_11295;var inst_11273 = 0;var state_11330__$1 = (function (){var statearr_11365 = state_11330;(statearr_11365[20] = inst_11270);
(statearr_11365[9] = inst_11271);
(statearr_11365[10] = inst_11273);
(statearr_11365[21] = inst_11272);
return statearr_11365;
})();var statearr_11366_11438 = state_11330__$1;(statearr_11366_11438[2] = null);
(statearr_11366_11438[1] = 25);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 41))
{var inst_11289 = (state_11330[25]);var inst_11305 = (state_11330[2]);var inst_11306 = cljs.core.next(inst_11289);var inst_11270 = inst_11306;var inst_11271 = null;var inst_11272 = 0;var inst_11273 = 0;var state_11330__$1 = (function (){var statearr_11367 = state_11330;(statearr_11367[27] = inst_11305);
(statearr_11367[20] = inst_11270);
(statearr_11367[9] = inst_11271);
(statearr_11367[10] = inst_11273);
(statearr_11367[21] = inst_11272);
return statearr_11367;
})();var statearr_11368_11439 = state_11330__$1;(statearr_11368_11439[2] = null);
(statearr_11368_11439[1] = 25);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 43))
{var state_11330__$1 = state_11330;var statearr_11369_11440 = state_11330__$1;(statearr_11369_11440[2] = null);
(statearr_11369_11440[1] = 44);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 29))
{var inst_11314 = (state_11330[2]);var state_11330__$1 = state_11330;var statearr_11370_11441 = state_11330__$1;(statearr_11370_11441[2] = inst_11314);
(statearr_11370_11441[1] = 26);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 44))
{var inst_11323 = (state_11330[2]);var state_11330__$1 = (function (){var statearr_11371 = state_11330;(statearr_11371[28] = inst_11323);
return statearr_11371;
})();var statearr_11372_11442 = state_11330__$1;(statearr_11372_11442[2] = null);
(statearr_11372_11442[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 6))
{var inst_11262 = (state_11330[29]);var inst_11261 = cljs.core.deref(cs);var inst_11262__$1 = cljs.core.keys(inst_11261);var inst_11263 = cljs.core.count(inst_11262__$1);var inst_11264 = cljs.core.reset_BANG_(dctr,inst_11263);var inst_11269 = cljs.core.seq(inst_11262__$1);var inst_11270 = inst_11269;var inst_11271 = null;var inst_11272 = 0;var inst_11273 = 0;var state_11330__$1 = (function (){var statearr_11373 = state_11330;(statearr_11373[29] = inst_11262__$1);
(statearr_11373[20] = inst_11270);
(statearr_11373[9] = inst_11271);
(statearr_11373[10] = inst_11273);
(statearr_11373[30] = inst_11264);
(statearr_11373[21] = inst_11272);
return statearr_11373;
})();var statearr_11374_11443 = state_11330__$1;(statearr_11374_11443[2] = null);
(statearr_11374_11443[1] = 25);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 28))
{var inst_11270 = (state_11330[20]);var inst_11289 = (state_11330[25]);var inst_11289__$1 = cljs.core.seq(inst_11270);var state_11330__$1 = (function (){var statearr_11375 = state_11330;(statearr_11375[25] = inst_11289__$1);
return statearr_11375;
})();if(inst_11289__$1)
{var statearr_11376_11444 = state_11330__$1;(statearr_11376_11444[1] = 33);
} else
{var statearr_11377_11445 = state_11330__$1;(statearr_11377_11445[1] = 34);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 25))
{var inst_11273 = (state_11330[10]);var inst_11272 = (state_11330[21]);var inst_11275 = (inst_11273 < inst_11272);var inst_11276 = inst_11275;var state_11330__$1 = state_11330;if(cljs.core.truth_(inst_11276))
{var statearr_11378_11446 = state_11330__$1;(statearr_11378_11446[1] = 27);
} else
{var statearr_11379_11447 = state_11330__$1;(statearr_11379_11447[1] = 28);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 34))
{var state_11330__$1 = state_11330;var statearr_11380_11448 = state_11330__$1;(statearr_11380_11448[2] = null);
(statearr_11380_11448[1] = 35);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 17))
{var state_11330__$1 = state_11330;var statearr_11381_11449 = state_11330__$1;(statearr_11381_11449[2] = null);
(statearr_11381_11449[1] = 18);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 3))
{var inst_11328 = (state_11330[2]);var state_11330__$1 = state_11330;return cljs.core.async.impl.ioc_helpers.return_chan(state_11330__$1,inst_11328);
} else
{if((state_val_11331 === 12))
{var inst_11257 = (state_11330[2]);var state_11330__$1 = state_11330;var statearr_11382_11450 = state_11330__$1;(statearr_11382_11450[2] = inst_11257);
(statearr_11382_11450[1] = 9);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 2))
{var state_11330__$1 = state_11330;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11330__$1,4,ch);
} else
{if((state_val_11331 === 23))
{var state_11330__$1 = state_11330;var statearr_11383_11451 = state_11330__$1;(statearr_11383_11451[2] = null);
(statearr_11383_11451[1] = 24);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 35))
{var inst_11312 = (state_11330[2]);var state_11330__$1 = state_11330;var statearr_11384_11452 = state_11330__$1;(statearr_11384_11452[2] = inst_11312);
(statearr_11384_11452[1] = 29);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 19))
{var inst_11231 = (state_11330[7]);var inst_11235 = cljs.core.chunk_first(inst_11231);var inst_11236 = cljs.core.chunk_rest(inst_11231);var inst_11237 = cljs.core.count(inst_11235);var inst_11211 = inst_11236;var inst_11212 = inst_11235;var inst_11213 = inst_11237;var inst_11214 = 0;var state_11330__$1 = (function (){var statearr_11385 = state_11330;(statearr_11385[13] = inst_11212);
(statearr_11385[14] = inst_11213);
(statearr_11385[16] = inst_11211);
(statearr_11385[17] = inst_11214);
return statearr_11385;
})();var statearr_11386_11453 = state_11330__$1;(statearr_11386_11453[2] = null);
(statearr_11386_11453[1] = 8);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 11))
{var inst_11231 = (state_11330[7]);var inst_11211 = (state_11330[16]);var inst_11231__$1 = cljs.core.seq(inst_11211);var state_11330__$1 = (function (){var statearr_11387 = state_11330;(statearr_11387[7] = inst_11231__$1);
return statearr_11387;
})();if(inst_11231__$1)
{var statearr_11388_11454 = state_11330__$1;(statearr_11388_11454[1] = 16);
} else
{var statearr_11389_11455 = state_11330__$1;(statearr_11389_11455[1] = 17);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 9))
{var inst_11259 = (state_11330[2]);var state_11330__$1 = state_11330;var statearr_11390_11456 = state_11330__$1;(statearr_11390_11456[2] = inst_11259);
(statearr_11390_11456[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 5))
{var inst_11209 = cljs.core.deref(cs);var inst_11210 = cljs.core.seq(inst_11209);var inst_11211 = inst_11210;var inst_11212 = null;var inst_11213 = 0;var inst_11214 = 0;var state_11330__$1 = (function (){var statearr_11391 = state_11330;(statearr_11391[13] = inst_11212);
(statearr_11391[14] = inst_11213);
(statearr_11391[16] = inst_11211);
(statearr_11391[17] = inst_11214);
return statearr_11391;
})();var statearr_11392_11457 = state_11330__$1;(statearr_11392_11457[2] = null);
(statearr_11392_11457[1] = 8);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 14))
{var state_11330__$1 = state_11330;var statearr_11393_11458 = state_11330__$1;(statearr_11393_11458[2] = null);
(statearr_11393_11458[1] = 15);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 45))
{var inst_11320 = (state_11330[2]);var state_11330__$1 = state_11330;var statearr_11394_11459 = state_11330__$1;(statearr_11394_11459[2] = inst_11320);
(statearr_11394_11459[1] = 44);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 26))
{var inst_11262 = (state_11330[29]);var inst_11316 = (state_11330[2]);var inst_11317 = cljs.core.seq(inst_11262);var state_11330__$1 = (function (){var statearr_11395 = state_11330;(statearr_11395[31] = inst_11316);
return statearr_11395;
})();if(inst_11317)
{var statearr_11396_11460 = state_11330__$1;(statearr_11396_11460[1] = 42);
} else
{var statearr_11397_11461 = state_11330__$1;(statearr_11397_11461[1] = 43);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 16))
{var inst_11231 = (state_11330[7]);var inst_11233 = cljs.core.chunked_seq_QMARK_(inst_11231);var state_11330__$1 = state_11330;if(inst_11233)
{var statearr_11398_11462 = state_11330__$1;(statearr_11398_11462[1] = 19);
} else
{var statearr_11399_11463 = state_11330__$1;(statearr_11399_11463[1] = 20);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 38))
{var inst_11309 = (state_11330[2]);var state_11330__$1 = state_11330;var statearr_11400_11464 = state_11330__$1;(statearr_11400_11464[2] = inst_11309);
(statearr_11400_11464[1] = 35);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 30))
{var state_11330__$1 = state_11330;var statearr_11401_11465 = state_11330__$1;(statearr_11401_11465[2] = null);
(statearr_11401_11465[1] = 32);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 10))
{var inst_11212 = (state_11330[13]);var inst_11214 = (state_11330[17]);var inst_11220 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11212,inst_11214);var inst_11221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11220,0,null);var inst_11222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11220,1,null);var state_11330__$1 = (function (){var statearr_11402 = state_11330;(statearr_11402[26] = inst_11221);
return statearr_11402;
})();if(cljs.core.truth_(inst_11222))
{var statearr_11403_11466 = state_11330__$1;(statearr_11403_11466[1] = 13);
} else
{var statearr_11404_11467 = state_11330__$1;(statearr_11404_11467[1] = 14);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 18))
{var inst_11255 = (state_11330[2]);var state_11330__$1 = state_11330;var statearr_11405_11468 = state_11330__$1;(statearr_11405_11468[2] = inst_11255);
(statearr_11405_11468[1] = 12);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 42))
{var state_11330__$1 = state_11330;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11330__$1,45,dchan);
} else
{if((state_val_11331 === 37))
{var inst_11298 = (state_11330[23]);var inst_11289 = (state_11330[25]);var inst_11202 = (state_11330[12]);var inst_11298__$1 = cljs.core.first(inst_11289);var inst_11299 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11298__$1,inst_11202,done);var state_11330__$1 = (function (){var statearr_11406 = state_11330;(statearr_11406[23] = inst_11298__$1);
return statearr_11406;
})();if(cljs.core.truth_(inst_11299))
{var statearr_11407_11469 = state_11330__$1;(statearr_11407_11469[1] = 39);
} else
{var statearr_11408_11470 = state_11330__$1;(statearr_11408_11470[1] = 40);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11331 === 8))
{var inst_11213 = (state_11330[14]);var inst_11214 = (state_11330[17]);var inst_11216 = (inst_11214 < inst_11213);var inst_11217 = inst_11216;var state_11330__$1 = state_11330;if(cljs.core.truth_(inst_11217))
{var statearr_11409_11471 = state_11330__$1;(statearr_11409_11471[1] = 10);
} else
{var statearr_11410_11472 = state_11330__$1;(statearr_11410_11472[1] = 11);
}
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto___11418,cs,m,dchan,dctr,done))
;return ((function (switch__6087__auto__,c__6102__auto___11418,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_11414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11414[0] = state_machine__6088__auto__);
(statearr_11414[1] = 1);
return statearr_11414;
});
var state_machine__6088__auto____1 = (function (state_11330){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_11330);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e11415){if((e11415 instanceof Object))
{var ex__6091__auto__ = e11415;var statearr_11416_11473 = state_11330;(statearr_11416_11473[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11330);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e11415;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__11474 = state_11330;
state_11330 = G__11474;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_11330){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_11330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___11418,cs,m,dchan,dctr,done))
})();var state__6104__auto__ = (function (){var statearr_11417 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_11417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___11418);
return statearr_11417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___11418,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj11476 = {};return obj11476;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$40,null,cljs.core.constant$keyword$41,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$42);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$41);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$42,chs);var pauses = pick(cljs.core.constant$keyword$40,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$43,solos,cljs.core.constant$keyword$44,pick(cljs.core.constant$keyword$41,chs),cljs.core.constant$keyword$45,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$40)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11596 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11597){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11597 = meta11597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11596.cljs$lang$type = true;
cljs.core.async.t11596.cljs$lang$ctorStr = "cljs.core.async/t11596";
cljs.core.async.t11596.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t11596");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11596.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11596.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11596.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11596.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11596.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11596.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11596.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11598){var self__ = this;
var _11598__$1 = this;return self__.meta11597;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11598,meta11597__$1){var self__ = this;
var _11598__$1 = this;return (new cljs.core.async.t11596(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11597__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11596 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11596(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11597){return (new cljs.core.async.t11596(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11597));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11596(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6102__auto___11715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___11715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___11715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11668){var state_val_11669 = (state_11668[1]);if((state_val_11669 === 7))
{var inst_11612 = (state_11668[7]);var inst_11617 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11612);var state_11668__$1 = state_11668;var statearr_11670_11716 = state_11668__$1;(statearr_11670_11716[2] = inst_11617);
(statearr_11670_11716[1] = 9);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 20))
{var inst_11627 = (state_11668[8]);var state_11668__$1 = state_11668;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11668__$1,23,out,inst_11627);
} else
{if((state_val_11669 === 1))
{var inst_11602 = (state_11668[9]);var inst_11602__$1 = calc_state();var inst_11603 = cljs.core.seq_QMARK_(inst_11602__$1);var state_11668__$1 = (function (){var statearr_11671 = state_11668;(statearr_11671[9] = inst_11602__$1);
return statearr_11671;
})();if(inst_11603)
{var statearr_11672_11717 = state_11668__$1;(statearr_11672_11717[1] = 2);
} else
{var statearr_11673_11718 = state_11668__$1;(statearr_11673_11718[1] = 3);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 24))
{var inst_11620 = (state_11668[10]);var inst_11612 = inst_11620;var state_11668__$1 = (function (){var statearr_11674 = state_11668;(statearr_11674[7] = inst_11612);
return statearr_11674;
})();var statearr_11675_11719 = state_11668__$1;(statearr_11675_11719[2] = null);
(statearr_11675_11719[1] = 5);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 4))
{var inst_11602 = (state_11668[9]);var inst_11608 = (state_11668[2]);var inst_11609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11608,cljs.core.constant$keyword$45);var inst_11610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11608,cljs.core.constant$keyword$44);var inst_11611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11608,cljs.core.constant$keyword$43);var inst_11612 = inst_11602;var state_11668__$1 = (function (){var statearr_11676 = state_11668;(statearr_11676[11] = inst_11611);
(statearr_11676[12] = inst_11609);
(statearr_11676[13] = inst_11610);
(statearr_11676[7] = inst_11612);
return statearr_11676;
})();var statearr_11677_11720 = state_11668__$1;(statearr_11677_11720[2] = null);
(statearr_11677_11720[1] = 5);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 15))
{var state_11668__$1 = state_11668;var statearr_11678_11721 = state_11668__$1;(statearr_11678_11721[2] = null);
(statearr_11678_11721[1] = 16);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 21))
{var inst_11620 = (state_11668[10]);var inst_11612 = inst_11620;var state_11668__$1 = (function (){var statearr_11679 = state_11668;(statearr_11679[7] = inst_11612);
return statearr_11679;
})();var statearr_11680_11722 = state_11668__$1;(statearr_11680_11722[2] = null);
(statearr_11680_11722[1] = 5);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 13))
{var inst_11664 = (state_11668[2]);var state_11668__$1 = state_11668;var statearr_11681_11723 = state_11668__$1;(statearr_11681_11723[2] = inst_11664);
(statearr_11681_11723[1] = 6);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 22))
{var inst_11662 = (state_11668[2]);var state_11668__$1 = state_11668;var statearr_11682_11724 = state_11668__$1;(statearr_11682_11724[2] = inst_11662);
(statearr_11682_11724[1] = 13);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 6))
{var inst_11666 = (state_11668[2]);var state_11668__$1 = state_11668;return cljs.core.async.impl.ioc_helpers.return_chan(state_11668__$1,inst_11666);
} else
{if((state_val_11669 === 25))
{var state_11668__$1 = state_11668;var statearr_11683_11725 = state_11668__$1;(statearr_11683_11725[2] = null);
(statearr_11683_11725[1] = 26);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 17))
{var inst_11642 = (state_11668[14]);var state_11668__$1 = state_11668;var statearr_11684_11726 = state_11668__$1;(statearr_11684_11726[2] = inst_11642);
(statearr_11684_11726[1] = 19);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 3))
{var inst_11602 = (state_11668[9]);var state_11668__$1 = state_11668;var statearr_11685_11727 = state_11668__$1;(statearr_11685_11727[2] = inst_11602);
(statearr_11685_11727[1] = 4);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 12))
{var inst_11628 = (state_11668[15]);var inst_11623 = (state_11668[16]);var inst_11642 = (state_11668[14]);var inst_11642__$1 = (inst_11623.cljs$core$IFn$_invoke$arity$1 ? inst_11623.cljs$core$IFn$_invoke$arity$1(inst_11628) : inst_11623.call(null,inst_11628));var state_11668__$1 = (function (){var statearr_11686 = state_11668;(statearr_11686[14] = inst_11642__$1);
return statearr_11686;
})();if(cljs.core.truth_(inst_11642__$1))
{var statearr_11687_11728 = state_11668__$1;(statearr_11687_11728[1] = 17);
} else
{var statearr_11688_11729 = state_11668__$1;(statearr_11688_11729[1] = 18);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 2))
{var inst_11602 = (state_11668[9]);var inst_11605 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11602);var state_11668__$1 = state_11668;var statearr_11689_11730 = state_11668__$1;(statearr_11689_11730[2] = inst_11605);
(statearr_11689_11730[1] = 4);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 23))
{var inst_11653 = (state_11668[2]);var state_11668__$1 = state_11668;if(cljs.core.truth_(inst_11653))
{var statearr_11690_11731 = state_11668__$1;(statearr_11690_11731[1] = 24);
} else
{var statearr_11691_11732 = state_11668__$1;(statearr_11691_11732[1] = 25);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 19))
{var inst_11650 = (state_11668[2]);var state_11668__$1 = state_11668;if(cljs.core.truth_(inst_11650))
{var statearr_11692_11733 = state_11668__$1;(statearr_11692_11733[1] = 20);
} else
{var statearr_11693_11734 = state_11668__$1;(statearr_11693_11734[1] = 21);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 11))
{var inst_11627 = (state_11668[8]);var inst_11633 = (inst_11627 == null);var state_11668__$1 = state_11668;if(cljs.core.truth_(inst_11633))
{var statearr_11694_11735 = state_11668__$1;(statearr_11694_11735[1] = 14);
} else
{var statearr_11695_11736 = state_11668__$1;(statearr_11695_11736[1] = 15);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 9))
{var inst_11620 = (state_11668[10]);var inst_11620__$1 = (state_11668[2]);var inst_11621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11620__$1,cljs.core.constant$keyword$45);var inst_11622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11620__$1,cljs.core.constant$keyword$44);var inst_11623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11620__$1,cljs.core.constant$keyword$43);var state_11668__$1 = (function (){var statearr_11696 = state_11668;(statearr_11696[10] = inst_11620__$1);
(statearr_11696[16] = inst_11623);
(statearr_11696[17] = inst_11622);
return statearr_11696;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_11668__$1,10,inst_11621);
} else
{if((state_val_11669 === 5))
{var inst_11612 = (state_11668[7]);var inst_11615 = cljs.core.seq_QMARK_(inst_11612);var state_11668__$1 = state_11668;if(inst_11615)
{var statearr_11697_11737 = state_11668__$1;(statearr_11697_11737[1] = 7);
} else
{var statearr_11698_11738 = state_11668__$1;(statearr_11698_11738[1] = 8);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 14))
{var inst_11628 = (state_11668[15]);var inst_11635 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11628);var state_11668__$1 = state_11668;var statearr_11699_11739 = state_11668__$1;(statearr_11699_11739[2] = inst_11635);
(statearr_11699_11739[1] = 16);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 26))
{var inst_11658 = (state_11668[2]);var state_11668__$1 = state_11668;var statearr_11700_11740 = state_11668__$1;(statearr_11700_11740[2] = inst_11658);
(statearr_11700_11740[1] = 22);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 16))
{var inst_11638 = (state_11668[2]);var inst_11639 = calc_state();var inst_11612 = inst_11639;var state_11668__$1 = (function (){var statearr_11701 = state_11668;(statearr_11701[18] = inst_11638);
(statearr_11701[7] = inst_11612);
return statearr_11701;
})();var statearr_11702_11741 = state_11668__$1;(statearr_11702_11741[2] = null);
(statearr_11702_11741[1] = 5);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 10))
{var inst_11628 = (state_11668[15]);var inst_11627 = (state_11668[8]);var inst_11626 = (state_11668[2]);var inst_11627__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11626,0,null);var inst_11628__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11626,1,null);var inst_11629 = (inst_11627__$1 == null);var inst_11630 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11628__$1,change);var inst_11631 = (inst_11629) || (inst_11630);var state_11668__$1 = (function (){var statearr_11703 = state_11668;(statearr_11703[15] = inst_11628__$1);
(statearr_11703[8] = inst_11627__$1);
return statearr_11703;
})();if(cljs.core.truth_(inst_11631))
{var statearr_11704_11742 = state_11668__$1;(statearr_11704_11742[1] = 11);
} else
{var statearr_11705_11743 = state_11668__$1;(statearr_11705_11743[1] = 12);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 18))
{var inst_11628 = (state_11668[15]);var inst_11623 = (state_11668[16]);var inst_11622 = (state_11668[17]);var inst_11645 = cljs.core.empty_QMARK_(inst_11623);var inst_11646 = (inst_11622.cljs$core$IFn$_invoke$arity$1 ? inst_11622.cljs$core$IFn$_invoke$arity$1(inst_11628) : inst_11622.call(null,inst_11628));var inst_11647 = cljs.core.not(inst_11646);var inst_11648 = (inst_11645) && (inst_11647);var state_11668__$1 = state_11668;var statearr_11706_11744 = state_11668__$1;(statearr_11706_11744[2] = inst_11648);
(statearr_11706_11744[1] = 19);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11669 === 8))
{var inst_11612 = (state_11668[7]);var state_11668__$1 = state_11668;var statearr_11707_11745 = state_11668__$1;(statearr_11707_11745[2] = inst_11612);
(statearr_11707_11745[1] = 9);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto___11715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6087__auto__,c__6102__auto___11715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_11711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11711[0] = state_machine__6088__auto__);
(statearr_11711[1] = 1);
return statearr_11711;
});
var state_machine__6088__auto____1 = (function (state_11668){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_11668);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e11712){if((e11712 instanceof Object))
{var ex__6091__auto__ = e11712;var statearr_11713_11746 = state_11668;(statearr_11713_11746[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11668);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e11712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__11747 = state_11668;
state_11668 = G__11747;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_11668){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_11668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___11715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6104__auto__ = (function (){var statearr_11714 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_11714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___11715);
return statearr_11714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___11715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj11749 = {};return obj11749;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3481__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3481__auto__,mults){
return (function (p1__11750_SHARP_){if(cljs.core.truth_((p1__11750_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11750_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11750_SHARP_.call(null,topic))))
{return p1__11750_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11750_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3481__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11873 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11873 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11874){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11874 = meta11874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11873.cljs$lang$type = true;
cljs.core.async.t11873.cljs$lang$ctorStr = "cljs.core.async/t11873";
cljs.core.async.t11873.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t11873");
});})(mults,ensure_mult))
;
cljs.core.async.t11873.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11873.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11873.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11873.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11873.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11873.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11875){var self__ = this;
var _11875__$1 = this;return self__.meta11874;
});})(mults,ensure_mult))
;
cljs.core.async.t11873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11875,meta11874__$1){var self__ = this;
var _11875__$1 = this;return (new cljs.core.async.t11873(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11874__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11873 = ((function (mults,ensure_mult){
return (function __GT_t11873(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11874){return (new cljs.core.async.t11873(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11874));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11873(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6102__auto___11995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___11995,mults,ensure_mult,p){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___11995,mults,ensure_mult,p){
return (function (state_11947){var state_val_11948 = (state_11947[1]);if((state_val_11948 === 7))
{var inst_11943 = (state_11947[2]);var state_11947__$1 = state_11947;var statearr_11949_11996 = state_11947__$1;(statearr_11949_11996[2] = inst_11943);
(statearr_11949_11996[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 20))
{var state_11947__$1 = state_11947;var statearr_11950_11997 = state_11947__$1;(statearr_11950_11997[2] = null);
(statearr_11950_11997[1] = 21);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 1))
{var state_11947__$1 = state_11947;var statearr_11951_11998 = state_11947__$1;(statearr_11951_11998[2] = null);
(statearr_11951_11998[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 24))
{var inst_11926 = (state_11947[7]);var inst_11935 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11926);var state_11947__$1 = state_11947;var statearr_11952_11999 = state_11947__$1;(statearr_11952_11999[2] = inst_11935);
(statearr_11952_11999[1] = 25);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 4))
{var inst_11878 = (state_11947[8]);var inst_11878__$1 = (state_11947[2]);var inst_11879 = (inst_11878__$1 == null);var state_11947__$1 = (function (){var statearr_11953 = state_11947;(statearr_11953[8] = inst_11878__$1);
return statearr_11953;
})();if(cljs.core.truth_(inst_11879))
{var statearr_11954_12000 = state_11947__$1;(statearr_11954_12000[1] = 5);
} else
{var statearr_11955_12001 = state_11947__$1;(statearr_11955_12001[1] = 6);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 15))
{var inst_11920 = (state_11947[2]);var state_11947__$1 = state_11947;var statearr_11956_12002 = state_11947__$1;(statearr_11956_12002[2] = inst_11920);
(statearr_11956_12002[1] = 12);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 21))
{var inst_11940 = (state_11947[2]);var state_11947__$1 = (function (){var statearr_11957 = state_11947;(statearr_11957[9] = inst_11940);
return statearr_11957;
})();var statearr_11958_12003 = state_11947__$1;(statearr_11958_12003[2] = null);
(statearr_11958_12003[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 13))
{var inst_11902 = (state_11947[10]);var inst_11904 = cljs.core.chunked_seq_QMARK_(inst_11902);var state_11947__$1 = state_11947;if(inst_11904)
{var statearr_11959_12004 = state_11947__$1;(statearr_11959_12004[1] = 16);
} else
{var statearr_11960_12005 = state_11947__$1;(statearr_11960_12005[1] = 17);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 22))
{var inst_11932 = (state_11947[2]);var state_11947__$1 = state_11947;if(cljs.core.truth_(inst_11932))
{var statearr_11961_12006 = state_11947__$1;(statearr_11961_12006[1] = 23);
} else
{var statearr_11962_12007 = state_11947__$1;(statearr_11962_12007[1] = 24);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 6))
{var inst_11928 = (state_11947[11]);var inst_11926 = (state_11947[7]);var inst_11878 = (state_11947[8]);var inst_11926__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11878) : topic_fn.call(null,inst_11878));var inst_11927 = cljs.core.deref(mults);var inst_11928__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11927,inst_11926__$1);var state_11947__$1 = (function (){var statearr_11963 = state_11947;(statearr_11963[11] = inst_11928__$1);
(statearr_11963[7] = inst_11926__$1);
return statearr_11963;
})();if(cljs.core.truth_(inst_11928__$1))
{var statearr_11964_12008 = state_11947__$1;(statearr_11964_12008[1] = 19);
} else
{var statearr_11965_12009 = state_11947__$1;(statearr_11965_12009[1] = 20);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 25))
{var inst_11937 = (state_11947[2]);var state_11947__$1 = state_11947;var statearr_11966_12010 = state_11947__$1;(statearr_11966_12010[2] = inst_11937);
(statearr_11966_12010[1] = 21);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 17))
{var inst_11902 = (state_11947[10]);var inst_11911 = cljs.core.first(inst_11902);var inst_11912 = cljs.core.async.muxch_STAR_(inst_11911);var inst_11913 = cljs.core.async.close_BANG_(inst_11912);var inst_11914 = cljs.core.next(inst_11902);var inst_11888 = inst_11914;var inst_11889 = null;var inst_11890 = 0;var inst_11891 = 0;var state_11947__$1 = (function (){var statearr_11967 = state_11947;(statearr_11967[12] = inst_11888);
(statearr_11967[13] = inst_11890);
(statearr_11967[14] = inst_11889);
(statearr_11967[15] = inst_11891);
(statearr_11967[16] = inst_11913);
return statearr_11967;
})();var statearr_11968_12011 = state_11947__$1;(statearr_11968_12011[2] = null);
(statearr_11968_12011[1] = 8);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 3))
{var inst_11945 = (state_11947[2]);var state_11947__$1 = state_11947;return cljs.core.async.impl.ioc_helpers.return_chan(state_11947__$1,inst_11945);
} else
{if((state_val_11948 === 12))
{var inst_11922 = (state_11947[2]);var state_11947__$1 = state_11947;var statearr_11969_12012 = state_11947__$1;(statearr_11969_12012[2] = inst_11922);
(statearr_11969_12012[1] = 9);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 2))
{var state_11947__$1 = state_11947;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11947__$1,4,ch);
} else
{if((state_val_11948 === 23))
{var state_11947__$1 = state_11947;var statearr_11970_12013 = state_11947__$1;(statearr_11970_12013[2] = null);
(statearr_11970_12013[1] = 25);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 19))
{var inst_11928 = (state_11947[11]);var inst_11878 = (state_11947[8]);var inst_11930 = cljs.core.async.muxch_STAR_(inst_11928);var state_11947__$1 = state_11947;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11947__$1,22,inst_11930,inst_11878);
} else
{if((state_val_11948 === 11))
{var inst_11888 = (state_11947[12]);var inst_11902 = (state_11947[10]);var inst_11902__$1 = cljs.core.seq(inst_11888);var state_11947__$1 = (function (){var statearr_11971 = state_11947;(statearr_11971[10] = inst_11902__$1);
return statearr_11971;
})();if(inst_11902__$1)
{var statearr_11972_12014 = state_11947__$1;(statearr_11972_12014[1] = 13);
} else
{var statearr_11973_12015 = state_11947__$1;(statearr_11973_12015[1] = 14);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 9))
{var inst_11924 = (state_11947[2]);var state_11947__$1 = state_11947;var statearr_11974_12016 = state_11947__$1;(statearr_11974_12016[2] = inst_11924);
(statearr_11974_12016[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 5))
{var inst_11885 = cljs.core.deref(mults);var inst_11886 = cljs.core.vals(inst_11885);var inst_11887 = cljs.core.seq(inst_11886);var inst_11888 = inst_11887;var inst_11889 = null;var inst_11890 = 0;var inst_11891 = 0;var state_11947__$1 = (function (){var statearr_11975 = state_11947;(statearr_11975[12] = inst_11888);
(statearr_11975[13] = inst_11890);
(statearr_11975[14] = inst_11889);
(statearr_11975[15] = inst_11891);
return statearr_11975;
})();var statearr_11976_12017 = state_11947__$1;(statearr_11976_12017[2] = null);
(statearr_11976_12017[1] = 8);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 14))
{var state_11947__$1 = state_11947;var statearr_11980_12018 = state_11947__$1;(statearr_11980_12018[2] = null);
(statearr_11980_12018[1] = 15);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 16))
{var inst_11902 = (state_11947[10]);var inst_11906 = cljs.core.chunk_first(inst_11902);var inst_11907 = cljs.core.chunk_rest(inst_11902);var inst_11908 = cljs.core.count(inst_11906);var inst_11888 = inst_11907;var inst_11889 = inst_11906;var inst_11890 = inst_11908;var inst_11891 = 0;var state_11947__$1 = (function (){var statearr_11981 = state_11947;(statearr_11981[12] = inst_11888);
(statearr_11981[13] = inst_11890);
(statearr_11981[14] = inst_11889);
(statearr_11981[15] = inst_11891);
return statearr_11981;
})();var statearr_11982_12019 = state_11947__$1;(statearr_11982_12019[2] = null);
(statearr_11982_12019[1] = 8);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 10))
{var inst_11888 = (state_11947[12]);var inst_11890 = (state_11947[13]);var inst_11889 = (state_11947[14]);var inst_11891 = (state_11947[15]);var inst_11896 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11889,inst_11891);var inst_11897 = cljs.core.async.muxch_STAR_(inst_11896);var inst_11898 = cljs.core.async.close_BANG_(inst_11897);var inst_11899 = (inst_11891 + 1);var tmp11977 = inst_11888;var tmp11978 = inst_11890;var tmp11979 = inst_11889;var inst_11888__$1 = tmp11977;var inst_11889__$1 = tmp11979;var inst_11890__$1 = tmp11978;var inst_11891__$1 = inst_11899;var state_11947__$1 = (function (){var statearr_11983 = state_11947;(statearr_11983[12] = inst_11888__$1);
(statearr_11983[17] = inst_11898);
(statearr_11983[13] = inst_11890__$1);
(statearr_11983[14] = inst_11889__$1);
(statearr_11983[15] = inst_11891__$1);
return statearr_11983;
})();var statearr_11984_12020 = state_11947__$1;(statearr_11984_12020[2] = null);
(statearr_11984_12020[1] = 8);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 18))
{var inst_11917 = (state_11947[2]);var state_11947__$1 = state_11947;var statearr_11985_12021 = state_11947__$1;(statearr_11985_12021[2] = inst_11917);
(statearr_11985_12021[1] = 15);
return cljs.core.constant$keyword$31;
} else
{if((state_val_11948 === 8))
{var inst_11890 = (state_11947[13]);var inst_11891 = (state_11947[15]);var inst_11893 = (inst_11891 < inst_11890);var inst_11894 = inst_11893;var state_11947__$1 = state_11947;if(cljs.core.truth_(inst_11894))
{var statearr_11986_12022 = state_11947__$1;(statearr_11986_12022[1] = 10);
} else
{var statearr_11987_12023 = state_11947__$1;(statearr_11987_12023[1] = 11);
}
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto___11995,mults,ensure_mult,p))
;return ((function (switch__6087__auto__,c__6102__auto___11995,mults,ensure_mult,p){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_11991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11991[0] = state_machine__6088__auto__);
(statearr_11991[1] = 1);
return statearr_11991;
});
var state_machine__6088__auto____1 = (function (state_11947){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_11947);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e11992){if((e11992 instanceof Object))
{var ex__6091__auto__ = e11992;var statearr_11993_12024 = state_11947;(statearr_11993_12024[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11947);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e11992;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__12025 = state_11947;
state_11947 = G__12025;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_11947){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_11947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___11995,mults,ensure_mult,p))
})();var state__6104__auto__ = (function (){var statearr_11994 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_11994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___11995);
return statearr_11994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___11995,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__6102__auto___12162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___12162,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___12162,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12132){var state_val_12133 = (state_12132[1]);if((state_val_12133 === 7))
{var state_12132__$1 = state_12132;var statearr_12134_12163 = state_12132__$1;(statearr_12134_12163[2] = null);
(statearr_12134_12163[1] = 8);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12133 === 1))
{var state_12132__$1 = state_12132;var statearr_12135_12164 = state_12132__$1;(statearr_12135_12164[2] = null);
(statearr_12135_12164[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12133 === 4))
{var inst_12096 = (state_12132[7]);var inst_12098 = (inst_12096 < cnt);var state_12132__$1 = state_12132;if(cljs.core.truth_(inst_12098))
{var statearr_12136_12165 = state_12132__$1;(statearr_12136_12165[1] = 6);
} else
{var statearr_12137_12166 = state_12132__$1;(statearr_12137_12166[1] = 7);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12133 === 15))
{var inst_12128 = (state_12132[2]);var state_12132__$1 = state_12132;var statearr_12138_12167 = state_12132__$1;(statearr_12138_12167[2] = inst_12128);
(statearr_12138_12167[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12133 === 13))
{var inst_12121 = cljs.core.async.close_BANG_(out);var state_12132__$1 = state_12132;var statearr_12139_12168 = state_12132__$1;(statearr_12139_12168[2] = inst_12121);
(statearr_12139_12168[1] = 15);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12133 === 6))
{var state_12132__$1 = state_12132;var statearr_12140_12169 = state_12132__$1;(statearr_12140_12169[2] = null);
(statearr_12140_12169[1] = 11);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12133 === 3))
{var inst_12130 = (state_12132[2]);var state_12132__$1 = state_12132;return cljs.core.async.impl.ioc_helpers.return_chan(state_12132__$1,inst_12130);
} else
{if((state_val_12133 === 12))
{var inst_12118 = (state_12132[8]);var inst_12118__$1 = (state_12132[2]);var inst_12119 = cljs.core.some(cljs.core.nil_QMARK_,inst_12118__$1);var state_12132__$1 = (function (){var statearr_12141 = state_12132;(statearr_12141[8] = inst_12118__$1);
return statearr_12141;
})();if(cljs.core.truth_(inst_12119))
{var statearr_12142_12170 = state_12132__$1;(statearr_12142_12170[1] = 13);
} else
{var statearr_12143_12171 = state_12132__$1;(statearr_12143_12171[1] = 14);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12133 === 2))
{var inst_12095 = cljs.core.reset_BANG_(dctr,cnt);var inst_12096 = 0;var state_12132__$1 = (function (){var statearr_12144 = state_12132;(statearr_12144[9] = inst_12095);
(statearr_12144[7] = inst_12096);
return statearr_12144;
})();var statearr_12145_12172 = state_12132__$1;(statearr_12145_12172[2] = null);
(statearr_12145_12172[1] = 4);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12133 === 11))
{var inst_12096 = (state_12132[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_12132,10,Object,null,9);var inst_12105 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12096) : chs__$1.call(null,inst_12096));var inst_12106 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12096) : done.call(null,inst_12096));var inst_12107 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12105,inst_12106);var state_12132__$1 = state_12132;var statearr_12146_12173 = state_12132__$1;(statearr_12146_12173[2] = inst_12107);
cljs.core.async.impl.ioc_helpers.process_exception(state_12132__$1);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12133 === 9))
{var inst_12096 = (state_12132[7]);var inst_12109 = (state_12132[2]);var inst_12110 = (inst_12096 + 1);var inst_12096__$1 = inst_12110;var state_12132__$1 = (function (){var statearr_12147 = state_12132;(statearr_12147[10] = inst_12109);
(statearr_12147[7] = inst_12096__$1);
return statearr_12147;
})();var statearr_12148_12174 = state_12132__$1;(statearr_12148_12174[2] = null);
(statearr_12148_12174[1] = 4);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12133 === 5))
{var inst_12116 = (state_12132[2]);var state_12132__$1 = (function (){var statearr_12149 = state_12132;(statearr_12149[11] = inst_12116);
return statearr_12149;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12132__$1,12,dchan);
} else
{if((state_val_12133 === 14))
{var inst_12118 = (state_12132[8]);var inst_12123 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12118);var state_12132__$1 = state_12132;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12132__$1,16,out,inst_12123);
} else
{if((state_val_12133 === 16))
{var inst_12125 = (state_12132[2]);var state_12132__$1 = (function (){var statearr_12150 = state_12132;(statearr_12150[12] = inst_12125);
return statearr_12150;
})();var statearr_12151_12175 = state_12132__$1;(statearr_12151_12175[2] = null);
(statearr_12151_12175[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12133 === 10))
{var inst_12100 = (state_12132[2]);var inst_12101 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_12132__$1 = (function (){var statearr_12152 = state_12132;(statearr_12152[13] = inst_12100);
return statearr_12152;
})();var statearr_12153_12176 = state_12132__$1;(statearr_12153_12176[2] = inst_12101);
cljs.core.async.impl.ioc_helpers.process_exception(state_12132__$1);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12133 === 8))
{var inst_12114 = (state_12132[2]);var state_12132__$1 = state_12132;var statearr_12154_12177 = state_12132__$1;(statearr_12154_12177[2] = inst_12114);
(statearr_12154_12177[1] = 5);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto___12162,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6087__auto__,c__6102__auto___12162,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_12158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12158[0] = state_machine__6088__auto__);
(statearr_12158[1] = 1);
return statearr_12158;
});
var state_machine__6088__auto____1 = (function (state_12132){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_12132);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e12159){if((e12159 instanceof Object))
{var ex__6091__auto__ = e12159;var statearr_12160_12178 = state_12132;(statearr_12160_12178[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12132);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e12159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__12179 = state_12132;
state_12132 = G__12179;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_12132){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_12132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___12162,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6104__auto__ = (function (){var statearr_12161 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_12161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___12162);
return statearr_12161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___12162,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6102__auto___12287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___12287,out){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___12287,out){
return (function (state_12263){var state_val_12264 = (state_12263[1]);if((state_val_12264 === 7))
{var inst_12242 = (state_12263[7]);var inst_12243 = (state_12263[8]);var inst_12242__$1 = (state_12263[2]);var inst_12243__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12242__$1,0,null);var inst_12244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12242__$1,1,null);var inst_12245 = (inst_12243__$1 == null);var state_12263__$1 = (function (){var statearr_12265 = state_12263;(statearr_12265[7] = inst_12242__$1);
(statearr_12265[8] = inst_12243__$1);
(statearr_12265[9] = inst_12244);
return statearr_12265;
})();if(cljs.core.truth_(inst_12245))
{var statearr_12266_12288 = state_12263__$1;(statearr_12266_12288[1] = 8);
} else
{var statearr_12267_12289 = state_12263__$1;(statearr_12267_12289[1] = 9);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12264 === 1))
{var inst_12234 = cljs.core.vec(chs);var inst_12235 = inst_12234;var state_12263__$1 = (function (){var statearr_12268 = state_12263;(statearr_12268[10] = inst_12235);
return statearr_12268;
})();var statearr_12269_12290 = state_12263__$1;(statearr_12269_12290[2] = null);
(statearr_12269_12290[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12264 === 4))
{var inst_12235 = (state_12263[10]);var state_12263__$1 = state_12263;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_12263__$1,7,inst_12235);
} else
{if((state_val_12264 === 6))
{var inst_12259 = (state_12263[2]);var state_12263__$1 = state_12263;var statearr_12270_12291 = state_12263__$1;(statearr_12270_12291[2] = inst_12259);
(statearr_12270_12291[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12264 === 3))
{var inst_12261 = (state_12263[2]);var state_12263__$1 = state_12263;return cljs.core.async.impl.ioc_helpers.return_chan(state_12263__$1,inst_12261);
} else
{if((state_val_12264 === 2))
{var inst_12235 = (state_12263[10]);var inst_12237 = cljs.core.count(inst_12235);var inst_12238 = (inst_12237 > 0);var state_12263__$1 = state_12263;if(cljs.core.truth_(inst_12238))
{var statearr_12272_12292 = state_12263__$1;(statearr_12272_12292[1] = 4);
} else
{var statearr_12273_12293 = state_12263__$1;(statearr_12273_12293[1] = 5);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12264 === 11))
{var inst_12235 = (state_12263[10]);var inst_12252 = (state_12263[2]);var tmp12271 = inst_12235;var inst_12235__$1 = tmp12271;var state_12263__$1 = (function (){var statearr_12274 = state_12263;(statearr_12274[10] = inst_12235__$1);
(statearr_12274[11] = inst_12252);
return statearr_12274;
})();var statearr_12275_12294 = state_12263__$1;(statearr_12275_12294[2] = null);
(statearr_12275_12294[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12264 === 9))
{var inst_12243 = (state_12263[8]);var state_12263__$1 = state_12263;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12263__$1,11,out,inst_12243);
} else
{if((state_val_12264 === 5))
{var inst_12257 = cljs.core.async.close_BANG_(out);var state_12263__$1 = state_12263;var statearr_12276_12295 = state_12263__$1;(statearr_12276_12295[2] = inst_12257);
(statearr_12276_12295[1] = 6);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12264 === 10))
{var inst_12255 = (state_12263[2]);var state_12263__$1 = state_12263;var statearr_12277_12296 = state_12263__$1;(statearr_12277_12296[2] = inst_12255);
(statearr_12277_12296[1] = 6);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12264 === 8))
{var inst_12242 = (state_12263[7]);var inst_12243 = (state_12263[8]);var inst_12235 = (state_12263[10]);var inst_12244 = (state_12263[9]);var inst_12247 = (function (){var c = inst_12244;var v = inst_12243;var vec__12240 = inst_12242;var cs = inst_12235;return ((function (c,v,vec__12240,cs,inst_12242,inst_12243,inst_12235,inst_12244,state_val_12264,c__6102__auto___12287,out){
return (function (p1__12180_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12180_SHARP_);
});
;})(c,v,vec__12240,cs,inst_12242,inst_12243,inst_12235,inst_12244,state_val_12264,c__6102__auto___12287,out))
})();var inst_12248 = cljs.core.filterv(inst_12247,inst_12235);var inst_12235__$1 = inst_12248;var state_12263__$1 = (function (){var statearr_12278 = state_12263;(statearr_12278[10] = inst_12235__$1);
return statearr_12278;
})();var statearr_12279_12297 = state_12263__$1;(statearr_12279_12297[2] = null);
(statearr_12279_12297[1] = 2);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto___12287,out))
;return ((function (switch__6087__auto__,c__6102__auto___12287,out){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_12283 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12283[0] = state_machine__6088__auto__);
(statearr_12283[1] = 1);
return statearr_12283;
});
var state_machine__6088__auto____1 = (function (state_12263){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_12263);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e12284){if((e12284 instanceof Object))
{var ex__6091__auto__ = e12284;var statearr_12285_12298 = state_12263;(statearr_12285_12298[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12263);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e12284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__12299 = state_12263;
state_12263 = G__12299;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_12263){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_12263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___12287,out))
})();var state__6104__auto__ = (function (){var statearr_12286 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_12286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___12287);
return statearr_12286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___12287,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6102__auto___12392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___12392,out){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___12392,out){
return (function (state_12369){var state_val_12370 = (state_12369[1]);if((state_val_12370 === 7))
{var inst_12351 = (state_12369[7]);var inst_12351__$1 = (state_12369[2]);var inst_12352 = (inst_12351__$1 == null);var inst_12353 = cljs.core.not(inst_12352);var state_12369__$1 = (function (){var statearr_12371 = state_12369;(statearr_12371[7] = inst_12351__$1);
return statearr_12371;
})();if(inst_12353)
{var statearr_12372_12393 = state_12369__$1;(statearr_12372_12393[1] = 8);
} else
{var statearr_12373_12394 = state_12369__$1;(statearr_12373_12394[1] = 9);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12370 === 1))
{var inst_12346 = 0;var state_12369__$1 = (function (){var statearr_12374 = state_12369;(statearr_12374[8] = inst_12346);
return statearr_12374;
})();var statearr_12375_12395 = state_12369__$1;(statearr_12375_12395[2] = null);
(statearr_12375_12395[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12370 === 4))
{var state_12369__$1 = state_12369;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12369__$1,7,ch);
} else
{if((state_val_12370 === 6))
{var inst_12364 = (state_12369[2]);var state_12369__$1 = state_12369;var statearr_12376_12396 = state_12369__$1;(statearr_12376_12396[2] = inst_12364);
(statearr_12376_12396[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12370 === 3))
{var inst_12366 = (state_12369[2]);var inst_12367 = cljs.core.async.close_BANG_(out);var state_12369__$1 = (function (){var statearr_12377 = state_12369;(statearr_12377[9] = inst_12366);
return statearr_12377;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_12369__$1,inst_12367);
} else
{if((state_val_12370 === 2))
{var inst_12346 = (state_12369[8]);var inst_12348 = (inst_12346 < n);var state_12369__$1 = state_12369;if(cljs.core.truth_(inst_12348))
{var statearr_12378_12397 = state_12369__$1;(statearr_12378_12397[1] = 4);
} else
{var statearr_12379_12398 = state_12369__$1;(statearr_12379_12398[1] = 5);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12370 === 11))
{var inst_12346 = (state_12369[8]);var inst_12356 = (state_12369[2]);var inst_12357 = (inst_12346 + 1);var inst_12346__$1 = inst_12357;var state_12369__$1 = (function (){var statearr_12380 = state_12369;(statearr_12380[10] = inst_12356);
(statearr_12380[8] = inst_12346__$1);
return statearr_12380;
})();var statearr_12381_12399 = state_12369__$1;(statearr_12381_12399[2] = null);
(statearr_12381_12399[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12370 === 9))
{var state_12369__$1 = state_12369;var statearr_12382_12400 = state_12369__$1;(statearr_12382_12400[2] = null);
(statearr_12382_12400[1] = 10);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12370 === 5))
{var state_12369__$1 = state_12369;var statearr_12383_12401 = state_12369__$1;(statearr_12383_12401[2] = null);
(statearr_12383_12401[1] = 6);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12370 === 10))
{var inst_12361 = (state_12369[2]);var state_12369__$1 = state_12369;var statearr_12384_12402 = state_12369__$1;(statearr_12384_12402[2] = inst_12361);
(statearr_12384_12402[1] = 6);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12370 === 8))
{var inst_12351 = (state_12369[7]);var state_12369__$1 = state_12369;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12369__$1,11,out,inst_12351);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto___12392,out))
;return ((function (switch__6087__auto__,c__6102__auto___12392,out){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_12388 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12388[0] = state_machine__6088__auto__);
(statearr_12388[1] = 1);
return statearr_12388;
});
var state_machine__6088__auto____1 = (function (state_12369){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_12369);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e12389){if((e12389 instanceof Object))
{var ex__6091__auto__ = e12389;var statearr_12390_12403 = state_12369;(statearr_12390_12403[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12369);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e12389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__12404 = state_12369;
state_12369 = G__12404;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_12369){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_12369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___12392,out))
})();var state__6104__auto__ = (function (){var statearr_12391 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_12391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___12392);
return statearr_12391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___12392,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12412 = (function (ch,f,map_LT_,meta12413){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12413 = meta12413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12412.cljs$lang$type = true;
cljs.core.async.t12412.cljs$lang$ctorStr = "cljs.core.async/t12412";
cljs.core.async.t12412.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t12412");
});
cljs.core.async.t12412.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12412.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t12412.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12412.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t12415 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12415 = (function (fn1,_,meta12413,ch,f,map_LT_,meta12416){
this.fn1 = fn1;
this._ = _;
this.meta12413 = meta12413;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12416 = meta12416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12415.cljs$lang$type = true;
cljs.core.async.t12415.cljs$lang$ctorStr = "cljs.core.async/t12415";
cljs.core.async.t12415.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t12415");
});})(___$1))
;
cljs.core.async.t12415.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12415.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t12415.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t12415.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__12405_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__12405_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12405_SHARP_) : self__.f.call(null,p1__12405_SHARP_)))) : f1.call(null,(((p1__12405_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12405_SHARP_) : self__.f.call(null,p1__12405_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t12415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12417){var self__ = this;
var _12417__$1 = this;return self__.meta12416;
});})(___$1))
;
cljs.core.async.t12415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12417,meta12416__$1){var self__ = this;
var _12417__$1 = this;return (new cljs.core.async.t12415(self__.fn1,self__._,self__.meta12413,self__.ch,self__.f,self__.map_LT_,meta12416__$1));
});})(___$1))
;
cljs.core.async.__GT_t12415 = ((function (___$1){
return (function __GT_t12415(fn1__$1,___$2,meta12413__$1,ch__$2,f__$2,map_LT___$2,meta12416){return (new cljs.core.async.t12415(fn1__$1,___$2,meta12413__$1,ch__$2,f__$2,map_LT___$2,meta12416));
});})(___$1))
;
}
return (new cljs.core.async.t12415(fn1,___$1,self__.meta12413,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3469__auto__ = ret;if(cljs.core.truth_(and__3469__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3469__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t12412.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12412.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t12412.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t12412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12414){var self__ = this;
var _12414__$1 = this;return self__.meta12413;
});
cljs.core.async.t12412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12414,meta12413__$1){var self__ = this;
var _12414__$1 = this;return (new cljs.core.async.t12412(self__.ch,self__.f,self__.map_LT_,meta12413__$1));
});
cljs.core.async.__GT_t12412 = (function __GT_t12412(ch__$1,f__$1,map_LT___$1,meta12413){return (new cljs.core.async.t12412(ch__$1,f__$1,map_LT___$1,meta12413));
});
}
return (new cljs.core.async.t12412(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12421 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12421 = (function (ch,f,map_GT_,meta12422){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12422 = meta12422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12421.cljs$lang$type = true;
cljs.core.async.t12421.cljs$lang$ctorStr = "cljs.core.async/t12421";
cljs.core.async.t12421.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t12421");
});
cljs.core.async.t12421.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12421.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});
cljs.core.async.t12421.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12421.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t12421.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12421.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t12421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12423){var self__ = this;
var _12423__$1 = this;return self__.meta12422;
});
cljs.core.async.t12421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12423,meta12422__$1){var self__ = this;
var _12423__$1 = this;return (new cljs.core.async.t12421(self__.ch,self__.f,self__.map_GT_,meta12422__$1));
});
cljs.core.async.__GT_t12421 = (function __GT_t12421(ch__$1,f__$1,map_GT___$1,meta12422){return (new cljs.core.async.t12421(ch__$1,f__$1,map_GT___$1,meta12422));
});
}
return (new cljs.core.async.t12421(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12427 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12427 = (function (ch,p,filter_GT_,meta12428){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12428 = meta12428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12427.cljs$lang$type = true;
cljs.core.async.t12427.cljs$lang$ctorStr = "cljs.core.async/t12427";
cljs.core.async.t12427.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t12427");
});
cljs.core.async.t12427.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12427.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t12427.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12427.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t12427.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12427.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t12427.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t12427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12429){var self__ = this;
var _12429__$1 = this;return self__.meta12428;
});
cljs.core.async.t12427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12429,meta12428__$1){var self__ = this;
var _12429__$1 = this;return (new cljs.core.async.t12427(self__.ch,self__.p,self__.filter_GT_,meta12428__$1));
});
cljs.core.async.__GT_t12427 = (function __GT_t12427(ch__$1,p__$1,filter_GT___$1,meta12428){return (new cljs.core.async.t12427(ch__$1,p__$1,filter_GT___$1,meta12428));
});
}
return (new cljs.core.async.t12427(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6102__auto___12512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___12512,out){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___12512,out){
return (function (state_12491){var state_val_12492 = (state_12491[1]);if((state_val_12492 === 7))
{var inst_12487 = (state_12491[2]);var state_12491__$1 = state_12491;var statearr_12493_12513 = state_12491__$1;(statearr_12493_12513[2] = inst_12487);
(statearr_12493_12513[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12492 === 1))
{var state_12491__$1 = state_12491;var statearr_12494_12514 = state_12491__$1;(statearr_12494_12514[2] = null);
(statearr_12494_12514[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12492 === 4))
{var inst_12473 = (state_12491[7]);var inst_12473__$1 = (state_12491[2]);var inst_12474 = (inst_12473__$1 == null);var state_12491__$1 = (function (){var statearr_12495 = state_12491;(statearr_12495[7] = inst_12473__$1);
return statearr_12495;
})();if(cljs.core.truth_(inst_12474))
{var statearr_12496_12515 = state_12491__$1;(statearr_12496_12515[1] = 5);
} else
{var statearr_12497_12516 = state_12491__$1;(statearr_12497_12516[1] = 6);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12492 === 6))
{var inst_12473 = (state_12491[7]);var inst_12478 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12473) : p.call(null,inst_12473));var state_12491__$1 = state_12491;if(cljs.core.truth_(inst_12478))
{var statearr_12498_12517 = state_12491__$1;(statearr_12498_12517[1] = 8);
} else
{var statearr_12499_12518 = state_12491__$1;(statearr_12499_12518[1] = 9);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12492 === 3))
{var inst_12489 = (state_12491[2]);var state_12491__$1 = state_12491;return cljs.core.async.impl.ioc_helpers.return_chan(state_12491__$1,inst_12489);
} else
{if((state_val_12492 === 2))
{var state_12491__$1 = state_12491;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12491__$1,4,ch);
} else
{if((state_val_12492 === 11))
{var inst_12481 = (state_12491[2]);var state_12491__$1 = state_12491;var statearr_12500_12519 = state_12491__$1;(statearr_12500_12519[2] = inst_12481);
(statearr_12500_12519[1] = 10);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12492 === 9))
{var state_12491__$1 = state_12491;var statearr_12501_12520 = state_12491__$1;(statearr_12501_12520[2] = null);
(statearr_12501_12520[1] = 10);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12492 === 5))
{var inst_12476 = cljs.core.async.close_BANG_(out);var state_12491__$1 = state_12491;var statearr_12502_12521 = state_12491__$1;(statearr_12502_12521[2] = inst_12476);
(statearr_12502_12521[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12492 === 10))
{var inst_12484 = (state_12491[2]);var state_12491__$1 = (function (){var statearr_12503 = state_12491;(statearr_12503[8] = inst_12484);
return statearr_12503;
})();var statearr_12504_12522 = state_12491__$1;(statearr_12504_12522[2] = null);
(statearr_12504_12522[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12492 === 8))
{var inst_12473 = (state_12491[7]);var state_12491__$1 = state_12491;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12491__$1,11,out,inst_12473);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto___12512,out))
;return ((function (switch__6087__auto__,c__6102__auto___12512,out){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_12508 = [null,null,null,null,null,null,null,null,null];(statearr_12508[0] = state_machine__6088__auto__);
(statearr_12508[1] = 1);
return statearr_12508;
});
var state_machine__6088__auto____1 = (function (state_12491){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_12491);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e12509){if((e12509 instanceof Object))
{var ex__6091__auto__ = e12509;var statearr_12510_12523 = state_12491;(statearr_12510_12523[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12491);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e12509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__12524 = state_12491;
state_12491 = G__12524;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_12491){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_12491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___12512,out))
})();var state__6104__auto__ = (function (){var statearr_12511 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_12511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___12512);
return statearr_12511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___12512,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto__){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto__){
return (function (state_12690){var state_val_12691 = (state_12690[1]);if((state_val_12691 === 7))
{var inst_12686 = (state_12690[2]);var state_12690__$1 = state_12690;var statearr_12692_12733 = state_12690__$1;(statearr_12692_12733[2] = inst_12686);
(statearr_12692_12733[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 20))
{var inst_12656 = (state_12690[7]);var inst_12667 = (state_12690[2]);var inst_12668 = cljs.core.next(inst_12656);var inst_12642 = inst_12668;var inst_12643 = null;var inst_12644 = 0;var inst_12645 = 0;var state_12690__$1 = (function (){var statearr_12693 = state_12690;(statearr_12693[8] = inst_12642);
(statearr_12693[9] = inst_12643);
(statearr_12693[10] = inst_12644);
(statearr_12693[11] = inst_12645);
(statearr_12693[12] = inst_12667);
return statearr_12693;
})();var statearr_12694_12734 = state_12690__$1;(statearr_12694_12734[2] = null);
(statearr_12694_12734[1] = 8);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 1))
{var state_12690__$1 = state_12690;var statearr_12695_12735 = state_12690__$1;(statearr_12695_12735[2] = null);
(statearr_12695_12735[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 4))
{var inst_12631 = (state_12690[13]);var inst_12631__$1 = (state_12690[2]);var inst_12632 = (inst_12631__$1 == null);var state_12690__$1 = (function (){var statearr_12696 = state_12690;(statearr_12696[13] = inst_12631__$1);
return statearr_12696;
})();if(cljs.core.truth_(inst_12632))
{var statearr_12697_12736 = state_12690__$1;(statearr_12697_12736[1] = 5);
} else
{var statearr_12698_12737 = state_12690__$1;(statearr_12698_12737[1] = 6);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 15))
{var state_12690__$1 = state_12690;var statearr_12702_12738 = state_12690__$1;(statearr_12702_12738[2] = null);
(statearr_12702_12738[1] = 16);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 21))
{var state_12690__$1 = state_12690;var statearr_12703_12739 = state_12690__$1;(statearr_12703_12739[2] = null);
(statearr_12703_12739[1] = 23);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 13))
{var inst_12642 = (state_12690[8]);var inst_12643 = (state_12690[9]);var inst_12644 = (state_12690[10]);var inst_12645 = (state_12690[11]);var inst_12652 = (state_12690[2]);var inst_12653 = (inst_12645 + 1);var tmp12699 = inst_12642;var tmp12700 = inst_12643;var tmp12701 = inst_12644;var inst_12642__$1 = tmp12699;var inst_12643__$1 = tmp12700;var inst_12644__$1 = tmp12701;var inst_12645__$1 = inst_12653;var state_12690__$1 = (function (){var statearr_12704 = state_12690;(statearr_12704[8] = inst_12642__$1);
(statearr_12704[9] = inst_12643__$1);
(statearr_12704[10] = inst_12644__$1);
(statearr_12704[11] = inst_12645__$1);
(statearr_12704[14] = inst_12652);
return statearr_12704;
})();var statearr_12705_12740 = state_12690__$1;(statearr_12705_12740[2] = null);
(statearr_12705_12740[1] = 8);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 22))
{var state_12690__$1 = state_12690;var statearr_12706_12741 = state_12690__$1;(statearr_12706_12741[2] = null);
(statearr_12706_12741[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 6))
{var inst_12631 = (state_12690[13]);var inst_12640 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12631) : f.call(null,inst_12631));var inst_12641 = cljs.core.seq(inst_12640);var inst_12642 = inst_12641;var inst_12643 = null;var inst_12644 = 0;var inst_12645 = 0;var state_12690__$1 = (function (){var statearr_12707 = state_12690;(statearr_12707[8] = inst_12642);
(statearr_12707[9] = inst_12643);
(statearr_12707[10] = inst_12644);
(statearr_12707[11] = inst_12645);
return statearr_12707;
})();var statearr_12708_12742 = state_12690__$1;(statearr_12708_12742[2] = null);
(statearr_12708_12742[1] = 8);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 17))
{var inst_12656 = (state_12690[7]);var inst_12660 = cljs.core.chunk_first(inst_12656);var inst_12661 = cljs.core.chunk_rest(inst_12656);var inst_12662 = cljs.core.count(inst_12660);var inst_12642 = inst_12661;var inst_12643 = inst_12660;var inst_12644 = inst_12662;var inst_12645 = 0;var state_12690__$1 = (function (){var statearr_12709 = state_12690;(statearr_12709[8] = inst_12642);
(statearr_12709[9] = inst_12643);
(statearr_12709[10] = inst_12644);
(statearr_12709[11] = inst_12645);
return statearr_12709;
})();var statearr_12710_12743 = state_12690__$1;(statearr_12710_12743[2] = null);
(statearr_12710_12743[1] = 8);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 3))
{var inst_12688 = (state_12690[2]);var state_12690__$1 = state_12690;return cljs.core.async.impl.ioc_helpers.return_chan(state_12690__$1,inst_12688);
} else
{if((state_val_12691 === 12))
{var inst_12676 = (state_12690[2]);var state_12690__$1 = state_12690;var statearr_12711_12744 = state_12690__$1;(statearr_12711_12744[2] = inst_12676);
(statearr_12711_12744[1] = 9);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 2))
{var state_12690__$1 = state_12690;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12690__$1,4,in$);
} else
{if((state_val_12691 === 23))
{var inst_12684 = (state_12690[2]);var state_12690__$1 = state_12690;var statearr_12712_12745 = state_12690__$1;(statearr_12712_12745[2] = inst_12684);
(statearr_12712_12745[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 19))
{var inst_12671 = (state_12690[2]);var state_12690__$1 = state_12690;var statearr_12713_12746 = state_12690__$1;(statearr_12713_12746[2] = inst_12671);
(statearr_12713_12746[1] = 16);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 11))
{var inst_12642 = (state_12690[8]);var inst_12656 = (state_12690[7]);var inst_12656__$1 = cljs.core.seq(inst_12642);var state_12690__$1 = (function (){var statearr_12714 = state_12690;(statearr_12714[7] = inst_12656__$1);
return statearr_12714;
})();if(inst_12656__$1)
{var statearr_12715_12747 = state_12690__$1;(statearr_12715_12747[1] = 14);
} else
{var statearr_12716_12748 = state_12690__$1;(statearr_12716_12748[1] = 15);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 9))
{var inst_12678 = (state_12690[2]);var inst_12679 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_12690__$1 = (function (){var statearr_12717 = state_12690;(statearr_12717[15] = inst_12678);
return statearr_12717;
})();if(cljs.core.truth_(inst_12679))
{var statearr_12718_12749 = state_12690__$1;(statearr_12718_12749[1] = 21);
} else
{var statearr_12719_12750 = state_12690__$1;(statearr_12719_12750[1] = 22);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 5))
{var inst_12634 = cljs.core.async.close_BANG_(out);var state_12690__$1 = state_12690;var statearr_12720_12751 = state_12690__$1;(statearr_12720_12751[2] = inst_12634);
(statearr_12720_12751[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 14))
{var inst_12656 = (state_12690[7]);var inst_12658 = cljs.core.chunked_seq_QMARK_(inst_12656);var state_12690__$1 = state_12690;if(inst_12658)
{var statearr_12721_12752 = state_12690__$1;(statearr_12721_12752[1] = 17);
} else
{var statearr_12722_12753 = state_12690__$1;(statearr_12722_12753[1] = 18);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 16))
{var inst_12674 = (state_12690[2]);var state_12690__$1 = state_12690;var statearr_12723_12754 = state_12690__$1;(statearr_12723_12754[2] = inst_12674);
(statearr_12723_12754[1] = 12);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12691 === 10))
{var inst_12643 = (state_12690[9]);var inst_12645 = (state_12690[11]);var inst_12650 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12643,inst_12645);var state_12690__$1 = state_12690;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12690__$1,13,out,inst_12650);
} else
{if((state_val_12691 === 18))
{var inst_12656 = (state_12690[7]);var inst_12665 = cljs.core.first(inst_12656);var state_12690__$1 = state_12690;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12690__$1,20,out,inst_12665);
} else
{if((state_val_12691 === 8))
{var inst_12644 = (state_12690[10]);var inst_12645 = (state_12690[11]);var inst_12647 = (inst_12645 < inst_12644);var inst_12648 = inst_12647;var state_12690__$1 = state_12690;if(cljs.core.truth_(inst_12648))
{var statearr_12724_12755 = state_12690__$1;(statearr_12724_12755[1] = 10);
} else
{var statearr_12725_12756 = state_12690__$1;(statearr_12725_12756[1] = 11);
}
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto__))
;return ((function (switch__6087__auto__,c__6102__auto__){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_12729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12729[0] = state_machine__6088__auto__);
(statearr_12729[1] = 1);
return statearr_12729;
});
var state_machine__6088__auto____1 = (function (state_12690){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_12690);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e12730){if((e12730 instanceof Object))
{var ex__6091__auto__ = e12730;var statearr_12731_12757 = state_12690;(statearr_12731_12757[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12690);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e12730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__12758 = state_12690;
state_12690 = G__12758;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_12690){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_12690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto__))
})();var state__6104__auto__ = (function (){var statearr_12732 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_12732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto__);
return statearr_12732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto__))
);
return c__6102__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6102__auto___12855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___12855,out){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___12855,out){
return (function (state_12830){var state_val_12831 = (state_12830[1]);if((state_val_12831 === 7))
{var inst_12825 = (state_12830[2]);var state_12830__$1 = state_12830;var statearr_12832_12856 = state_12830__$1;(statearr_12832_12856[2] = inst_12825);
(statearr_12832_12856[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12831 === 1))
{var inst_12807 = null;var state_12830__$1 = (function (){var statearr_12833 = state_12830;(statearr_12833[7] = inst_12807);
return statearr_12833;
})();var statearr_12834_12857 = state_12830__$1;(statearr_12834_12857[2] = null);
(statearr_12834_12857[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12831 === 4))
{var inst_12810 = (state_12830[8]);var inst_12810__$1 = (state_12830[2]);var inst_12811 = (inst_12810__$1 == null);var inst_12812 = cljs.core.not(inst_12811);var state_12830__$1 = (function (){var statearr_12835 = state_12830;(statearr_12835[8] = inst_12810__$1);
return statearr_12835;
})();if(inst_12812)
{var statearr_12836_12858 = state_12830__$1;(statearr_12836_12858[1] = 5);
} else
{var statearr_12837_12859 = state_12830__$1;(statearr_12837_12859[1] = 6);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12831 === 6))
{var state_12830__$1 = state_12830;var statearr_12838_12860 = state_12830__$1;(statearr_12838_12860[2] = null);
(statearr_12838_12860[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12831 === 3))
{var inst_12827 = (state_12830[2]);var inst_12828 = cljs.core.async.close_BANG_(out);var state_12830__$1 = (function (){var statearr_12839 = state_12830;(statearr_12839[9] = inst_12827);
return statearr_12839;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_12830__$1,inst_12828);
} else
{if((state_val_12831 === 2))
{var state_12830__$1 = state_12830;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12830__$1,4,ch);
} else
{if((state_val_12831 === 11))
{var inst_12810 = (state_12830[8]);var inst_12819 = (state_12830[2]);var inst_12807 = inst_12810;var state_12830__$1 = (function (){var statearr_12840 = state_12830;(statearr_12840[10] = inst_12819);
(statearr_12840[7] = inst_12807);
return statearr_12840;
})();var statearr_12841_12861 = state_12830__$1;(statearr_12841_12861[2] = null);
(statearr_12841_12861[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12831 === 9))
{var inst_12810 = (state_12830[8]);var state_12830__$1 = state_12830;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12830__$1,11,out,inst_12810);
} else
{if((state_val_12831 === 5))
{var inst_12810 = (state_12830[8]);var inst_12807 = (state_12830[7]);var inst_12814 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12810,inst_12807);var state_12830__$1 = state_12830;if(inst_12814)
{var statearr_12843_12862 = state_12830__$1;(statearr_12843_12862[1] = 8);
} else
{var statearr_12844_12863 = state_12830__$1;(statearr_12844_12863[1] = 9);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12831 === 10))
{var inst_12822 = (state_12830[2]);var state_12830__$1 = state_12830;var statearr_12845_12864 = state_12830__$1;(statearr_12845_12864[2] = inst_12822);
(statearr_12845_12864[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12831 === 8))
{var inst_12807 = (state_12830[7]);var tmp12842 = inst_12807;var inst_12807__$1 = tmp12842;var state_12830__$1 = (function (){var statearr_12846 = state_12830;(statearr_12846[7] = inst_12807__$1);
return statearr_12846;
})();var statearr_12847_12865 = state_12830__$1;(statearr_12847_12865[2] = null);
(statearr_12847_12865[1] = 2);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto___12855,out))
;return ((function (switch__6087__auto__,c__6102__auto___12855,out){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_12851 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12851[0] = state_machine__6088__auto__);
(statearr_12851[1] = 1);
return statearr_12851;
});
var state_machine__6088__auto____1 = (function (state_12830){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_12830);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e12852){if((e12852 instanceof Object))
{var ex__6091__auto__ = e12852;var statearr_12853_12866 = state_12830;(statearr_12853_12866[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12830);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e12852;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__12867 = state_12830;
state_12830 = G__12867;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_12830){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_12830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___12855,out))
})();var state__6104__auto__ = (function (){var statearr_12854 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_12854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___12855);
return statearr_12854;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___12855,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6102__auto___13002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___13002,out){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___13002,out){
return (function (state_12972){var state_val_12973 = (state_12972[1]);if((state_val_12973 === 7))
{var inst_12968 = (state_12972[2]);var state_12972__$1 = state_12972;var statearr_12974_13003 = state_12972__$1;(statearr_12974_13003[2] = inst_12968);
(statearr_12974_13003[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12973 === 1))
{var inst_12935 = (new Array(n));var inst_12936 = inst_12935;var inst_12937 = 0;var state_12972__$1 = (function (){var statearr_12975 = state_12972;(statearr_12975[7] = inst_12937);
(statearr_12975[8] = inst_12936);
return statearr_12975;
})();var statearr_12976_13004 = state_12972__$1;(statearr_12976_13004[2] = null);
(statearr_12976_13004[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12973 === 4))
{var inst_12940 = (state_12972[9]);var inst_12940__$1 = (state_12972[2]);var inst_12941 = (inst_12940__$1 == null);var inst_12942 = cljs.core.not(inst_12941);var state_12972__$1 = (function (){var statearr_12977 = state_12972;(statearr_12977[9] = inst_12940__$1);
return statearr_12977;
})();if(inst_12942)
{var statearr_12978_13005 = state_12972__$1;(statearr_12978_13005[1] = 5);
} else
{var statearr_12979_13006 = state_12972__$1;(statearr_12979_13006[1] = 6);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12973 === 15))
{var inst_12962 = (state_12972[2]);var state_12972__$1 = state_12972;var statearr_12980_13007 = state_12972__$1;(statearr_12980_13007[2] = inst_12962);
(statearr_12980_13007[1] = 14);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12973 === 13))
{var state_12972__$1 = state_12972;var statearr_12981_13008 = state_12972__$1;(statearr_12981_13008[2] = null);
(statearr_12981_13008[1] = 14);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12973 === 6))
{var inst_12937 = (state_12972[7]);var inst_12958 = (inst_12937 > 0);var state_12972__$1 = state_12972;if(cljs.core.truth_(inst_12958))
{var statearr_12982_13009 = state_12972__$1;(statearr_12982_13009[1] = 12);
} else
{var statearr_12983_13010 = state_12972__$1;(statearr_12983_13010[1] = 13);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12973 === 3))
{var inst_12970 = (state_12972[2]);var state_12972__$1 = state_12972;return cljs.core.async.impl.ioc_helpers.return_chan(state_12972__$1,inst_12970);
} else
{if((state_val_12973 === 12))
{var inst_12936 = (state_12972[8]);var inst_12960 = cljs.core.vec(inst_12936);var state_12972__$1 = state_12972;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12972__$1,15,out,inst_12960);
} else
{if((state_val_12973 === 2))
{var state_12972__$1 = state_12972;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12972__$1,4,ch);
} else
{if((state_val_12973 === 11))
{var inst_12952 = (state_12972[2]);var inst_12953 = (new Array(n));var inst_12936 = inst_12953;var inst_12937 = 0;var state_12972__$1 = (function (){var statearr_12984 = state_12972;(statearr_12984[10] = inst_12952);
(statearr_12984[7] = inst_12937);
(statearr_12984[8] = inst_12936);
return statearr_12984;
})();var statearr_12985_13011 = state_12972__$1;(statearr_12985_13011[2] = null);
(statearr_12985_13011[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12973 === 9))
{var inst_12936 = (state_12972[8]);var inst_12950 = cljs.core.vec(inst_12936);var state_12972__$1 = state_12972;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12972__$1,11,out,inst_12950);
} else
{if((state_val_12973 === 5))
{var inst_12945 = (state_12972[11]);var inst_12937 = (state_12972[7]);var inst_12936 = (state_12972[8]);var inst_12940 = (state_12972[9]);var inst_12944 = (inst_12936[inst_12937] = inst_12940);var inst_12945__$1 = (inst_12937 + 1);var inst_12946 = (inst_12945__$1 < n);var state_12972__$1 = (function (){var statearr_12986 = state_12972;(statearr_12986[11] = inst_12945__$1);
(statearr_12986[12] = inst_12944);
return statearr_12986;
})();if(cljs.core.truth_(inst_12946))
{var statearr_12987_13012 = state_12972__$1;(statearr_12987_13012[1] = 8);
} else
{var statearr_12988_13013 = state_12972__$1;(statearr_12988_13013[1] = 9);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12973 === 14))
{var inst_12965 = (state_12972[2]);var inst_12966 = cljs.core.async.close_BANG_(out);var state_12972__$1 = (function (){var statearr_12990 = state_12972;(statearr_12990[13] = inst_12965);
return statearr_12990;
})();var statearr_12991_13014 = state_12972__$1;(statearr_12991_13014[2] = inst_12966);
(statearr_12991_13014[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12973 === 10))
{var inst_12956 = (state_12972[2]);var state_12972__$1 = state_12972;var statearr_12992_13015 = state_12972__$1;(statearr_12992_13015[2] = inst_12956);
(statearr_12992_13015[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12973 === 8))
{var inst_12945 = (state_12972[11]);var inst_12936 = (state_12972[8]);var tmp12989 = inst_12936;var inst_12936__$1 = tmp12989;var inst_12937 = inst_12945;var state_12972__$1 = (function (){var statearr_12993 = state_12972;(statearr_12993[7] = inst_12937);
(statearr_12993[8] = inst_12936__$1);
return statearr_12993;
})();var statearr_12994_13016 = state_12972__$1;(statearr_12994_13016[2] = null);
(statearr_12994_13016[1] = 2);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto___13002,out))
;return ((function (switch__6087__auto__,c__6102__auto___13002,out){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_12998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12998[0] = state_machine__6088__auto__);
(statearr_12998[1] = 1);
return statearr_12998;
});
var state_machine__6088__auto____1 = (function (state_12972){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_12972);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e12999){if((e12999 instanceof Object))
{var ex__6091__auto__ = e12999;var statearr_13000_13017 = state_12972;(statearr_13000_13017[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12972);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e12999;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__13018 = state_12972;
state_12972 = G__13018;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_12972){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_12972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___13002,out))
})();var state__6104__auto__ = (function (){var statearr_13001 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_13001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___13002);
return statearr_13001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___13002,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6102__auto___13161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___13161,out){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___13161,out){
return (function (state_13131){var state_val_13132 = (state_13131[1]);if((state_val_13132 === 7))
{var inst_13127 = (state_13131[2]);var state_13131__$1 = state_13131;var statearr_13133_13162 = state_13131__$1;(statearr_13133_13162[2] = inst_13127);
(statearr_13133_13162[1] = 3);
return cljs.core.constant$keyword$31;
} else
{if((state_val_13132 === 1))
{var inst_13090 = [];var inst_13091 = inst_13090;var inst_13092 = cljs.core.constant$keyword$46;var state_13131__$1 = (function (){var statearr_13134 = state_13131;(statearr_13134[7] = inst_13091);
(statearr_13134[8] = inst_13092);
return statearr_13134;
})();var statearr_13135_13163 = state_13131__$1;(statearr_13135_13163[2] = null);
(statearr_13135_13163[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_13132 === 4))
{var inst_13095 = (state_13131[9]);var inst_13095__$1 = (state_13131[2]);var inst_13096 = (inst_13095__$1 == null);var inst_13097 = cljs.core.not(inst_13096);var state_13131__$1 = (function (){var statearr_13136 = state_13131;(statearr_13136[9] = inst_13095__$1);
return statearr_13136;
})();if(inst_13097)
{var statearr_13137_13164 = state_13131__$1;(statearr_13137_13164[1] = 5);
} else
{var statearr_13138_13165 = state_13131__$1;(statearr_13138_13165[1] = 6);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_13132 === 15))
{var inst_13121 = (state_13131[2]);var state_13131__$1 = state_13131;var statearr_13139_13166 = state_13131__$1;(statearr_13139_13166[2] = inst_13121);
(statearr_13139_13166[1] = 14);
return cljs.core.constant$keyword$31;
} else
{if((state_val_13132 === 13))
{var state_13131__$1 = state_13131;var statearr_13140_13167 = state_13131__$1;(statearr_13140_13167[2] = null);
(statearr_13140_13167[1] = 14);
return cljs.core.constant$keyword$31;
} else
{if((state_val_13132 === 6))
{var inst_13091 = (state_13131[7]);var inst_13116 = inst_13091.length;var inst_13117 = (inst_13116 > 0);var state_13131__$1 = state_13131;if(cljs.core.truth_(inst_13117))
{var statearr_13141_13168 = state_13131__$1;(statearr_13141_13168[1] = 12);
} else
{var statearr_13142_13169 = state_13131__$1;(statearr_13142_13169[1] = 13);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_13132 === 3))
{var inst_13129 = (state_13131[2]);var state_13131__$1 = state_13131;return cljs.core.async.impl.ioc_helpers.return_chan(state_13131__$1,inst_13129);
} else
{if((state_val_13132 === 12))
{var inst_13091 = (state_13131[7]);var inst_13119 = cljs.core.vec(inst_13091);var state_13131__$1 = state_13131;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13131__$1,15,out,inst_13119);
} else
{if((state_val_13132 === 2))
{var state_13131__$1 = state_13131;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13131__$1,4,ch);
} else
{if((state_val_13132 === 11))
{var inst_13095 = (state_13131[9]);var inst_13099 = (state_13131[10]);var inst_13109 = (state_13131[2]);var inst_13110 = [];var inst_13111 = inst_13110.push(inst_13095);var inst_13091 = inst_13110;var inst_13092 = inst_13099;var state_13131__$1 = (function (){var statearr_13143 = state_13131;(statearr_13143[11] = inst_13109);
(statearr_13143[12] = inst_13111);
(statearr_13143[7] = inst_13091);
(statearr_13143[8] = inst_13092);
return statearr_13143;
})();var statearr_13144_13170 = state_13131__$1;(statearr_13144_13170[2] = null);
(statearr_13144_13170[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_13132 === 9))
{var inst_13091 = (state_13131[7]);var inst_13107 = cljs.core.vec(inst_13091);var state_13131__$1 = state_13131;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13131__$1,11,out,inst_13107);
} else
{if((state_val_13132 === 5))
{var inst_13095 = (state_13131[9]);var inst_13099 = (state_13131[10]);var inst_13092 = (state_13131[8]);var inst_13099__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13095) : f.call(null,inst_13095));var inst_13100 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13099__$1,inst_13092);var inst_13101 = cljs.core.keyword_identical_QMARK_(inst_13092,cljs.core.constant$keyword$46);var inst_13102 = (inst_13100) || (inst_13101);var state_13131__$1 = (function (){var statearr_13145 = state_13131;(statearr_13145[10] = inst_13099__$1);
return statearr_13145;
})();if(cljs.core.truth_(inst_13102))
{var statearr_13146_13171 = state_13131__$1;(statearr_13146_13171[1] = 8);
} else
{var statearr_13147_13172 = state_13131__$1;(statearr_13147_13172[1] = 9);
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_13132 === 14))
{var inst_13124 = (state_13131[2]);var inst_13125 = cljs.core.async.close_BANG_(out);var state_13131__$1 = (function (){var statearr_13149 = state_13131;(statearr_13149[13] = inst_13124);
return statearr_13149;
})();var statearr_13150_13173 = state_13131__$1;(statearr_13150_13173[2] = inst_13125);
(statearr_13150_13173[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_13132 === 10))
{var inst_13114 = (state_13131[2]);var state_13131__$1 = state_13131;var statearr_13151_13174 = state_13131__$1;(statearr_13151_13174[2] = inst_13114);
(statearr_13151_13174[1] = 7);
return cljs.core.constant$keyword$31;
} else
{if((state_val_13132 === 8))
{var inst_13095 = (state_13131[9]);var inst_13099 = (state_13131[10]);var inst_13091 = (state_13131[7]);var inst_13104 = inst_13091.push(inst_13095);var tmp13148 = inst_13091;var inst_13091__$1 = tmp13148;var inst_13092 = inst_13099;var state_13131__$1 = (function (){var statearr_13152 = state_13131;(statearr_13152[14] = inst_13104);
(statearr_13152[7] = inst_13091__$1);
(statearr_13152[8] = inst_13092);
return statearr_13152;
})();var statearr_13153_13175 = state_13131__$1;(statearr_13153_13175[2] = null);
(statearr_13153_13175[1] = 2);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6102__auto___13161,out))
;return ((function (switch__6087__auto__,c__6102__auto___13161,out){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_13157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13157[0] = state_machine__6088__auto__);
(statearr_13157[1] = 1);
return statearr_13157;
});
var state_machine__6088__auto____1 = (function (state_13131){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_13131);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e13158){if((e13158 instanceof Object))
{var ex__6091__auto__ = e13158;var statearr_13159_13176 = state_13131;(statearr_13159_13176[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13131);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e13158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__13177 = state_13131;
state_13131 = G__13177;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_13131){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_13131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___13161,out))
})();var state__6104__auto__ = (function (){var statearr_13160 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_13160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___13161);
return statearr_13160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___13161,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
