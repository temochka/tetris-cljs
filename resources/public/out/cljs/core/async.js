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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10036 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10036 = (function (f,fn_handler,meta10037){
this.f = f;
this.fn_handler = fn_handler;
this.meta10037 = meta10037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10036.cljs$lang$type = true;
cljs.core.async.t10036.cljs$lang$ctorStr = "cljs.core.async/t10036";
cljs.core.async.t10036.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10036");
});
cljs.core.async.t10036.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10038){var self__ = this;
var _10038__$1 = this;return self__.meta10037;
});
cljs.core.async.t10036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10038,meta10037__$1){var self__ = this;
var _10038__$1 = this;return (new cljs.core.async.t10036(self__.f,self__.fn_handler,meta10037__$1));
});
cljs.core.async.__GT_t10036 = (function __GT_t10036(f__$1,fn_handler__$1,meta10037){return (new cljs.core.async.t10036(f__$1,fn_handler__$1,meta10037));
});
}
return (new cljs.core.async.t10036(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10040 = buff;if(G__10040)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__10040.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10040.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10040);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10040);
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
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",1080054743,null)))].join('')));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10041 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10041);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10041,ret){
return (function (){return fn1.call(null,val_10041);
});})(val_10041,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4329__auto___10042 = n;var x_10043 = 0;while(true){
if((x_10043 < n__4329__auto___10042))
{(a[x_10043] = 0);
{
var G__10044 = (x_10043 + 1);
x_10043 = G__10044;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10045 = (i + 1);
i = G__10045;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10049 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10049 = (function (flag,alt_flag,meta10050){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10050 = meta10050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10049.cljs$lang$type = true;
cljs.core.async.t10049.cljs$lang$ctorStr = "cljs.core.async/t10049";
cljs.core.async.t10049.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10049");
});})(flag))
;
cljs.core.async.t10049.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10051){var self__ = this;
var _10051__$1 = this;return self__.meta10050;
});})(flag))
;
cljs.core.async.t10049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10051,meta10050__$1){var self__ = this;
var _10051__$1 = this;return (new cljs.core.async.t10049(self__.flag,self__.alt_flag,meta10050__$1));
});})(flag))
;
cljs.core.async.__GT_t10049 = ((function (flag){
return (function __GT_t10049(flag__$1,alt_flag__$1,meta10050){return (new cljs.core.async.t10049(flag__$1,alt_flag__$1,meta10050));
});})(flag))
;
}
return (new cljs.core.async.t10049(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10055 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10055 = (function (cb,flag,alt_handler,meta10056){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10056 = meta10056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10055.cljs$lang$type = true;
cljs.core.async.t10055.cljs$lang$ctorStr = "cljs.core.async/t10055";
cljs.core.async.t10055.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10055");
});
cljs.core.async.t10055.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10055.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10055.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10057){var self__ = this;
var _10057__$1 = this;return self__.meta10056;
});
cljs.core.async.t10055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10057,meta10056__$1){var self__ = this;
var _10057__$1 = this;return (new cljs.core.async.t10055(self__.cb,self__.flag,self__.alt_handler,meta10056__$1));
});
cljs.core.async.__GT_t10055 = (function __GT_t10055(cb__$1,flag__$1,alt_handler__$1,meta10056){return (new cljs.core.async.t10055(cb__$1,flag__$1,alt_handler__$1,meta10056));
});
}
return (new cljs.core.async.t10055(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10058_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10058_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10059_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10059_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3481__auto__ = wport;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10060 = (i + 1);
i = G__10060;
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
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3469__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3469__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__10061){var map__10063 = p__10061;var map__10063__$1 = ((cljs.core.seq_QMARK_.call(null,map__10063))?cljs.core.apply.call(null,cljs.core.hash_map,map__10063):map__10063);var opts = map__10063__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__10061 = null;if (arguments.length > 1) {
  p__10061 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10061);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10064){
var ports = cljs.core.first(arglist__10064);
var p__10061 = cljs.core.rest(arglist__10064);
return alts_BANG___delegate(ports,p__10061);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6102__auto___10159 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___10159){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___10159){
return (function (state_10135){var state_val_10136 = (state_10135[1]);if((state_val_10136 === 7))
{var inst_10131 = (state_10135[2]);var state_10135__$1 = state_10135;var statearr_10137_10160 = state_10135__$1;(statearr_10137_10160[2] = inst_10131);
(statearr_10137_10160[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10136 === 1))
{var state_10135__$1 = state_10135;var statearr_10138_10161 = state_10135__$1;(statearr_10138_10161[2] = null);
(statearr_10138_10161[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10136 === 4))
{var inst_10114 = (state_10135[7]);var inst_10114__$1 = (state_10135[2]);var inst_10115 = (inst_10114__$1 == null);var state_10135__$1 = (function (){var statearr_10139 = state_10135;(statearr_10139[7] = inst_10114__$1);
return statearr_10139;
})();if(cljs.core.truth_(inst_10115))
{var statearr_10140_10162 = state_10135__$1;(statearr_10140_10162[1] = 5);
} else
{var statearr_10141_10163 = state_10135__$1;(statearr_10141_10163[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10136 === 13))
{var state_10135__$1 = state_10135;var statearr_10142_10164 = state_10135__$1;(statearr_10142_10164[2] = null);
(statearr_10142_10164[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10136 === 6))
{var inst_10114 = (state_10135[7]);var state_10135__$1 = state_10135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10135__$1,11,to,inst_10114);
} else
{if((state_val_10136 === 3))
{var inst_10133 = (state_10135[2]);var state_10135__$1 = state_10135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10135__$1,inst_10133);
} else
{if((state_val_10136 === 12))
{var state_10135__$1 = state_10135;var statearr_10143_10165 = state_10135__$1;(statearr_10143_10165[2] = null);
(statearr_10143_10165[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10136 === 2))
{var state_10135__$1 = state_10135;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10135__$1,4,from);
} else
{if((state_val_10136 === 11))
{var inst_10124 = (state_10135[2]);var state_10135__$1 = state_10135;if(cljs.core.truth_(inst_10124))
{var statearr_10144_10166 = state_10135__$1;(statearr_10144_10166[1] = 12);
} else
{var statearr_10145_10167 = state_10135__$1;(statearr_10145_10167[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10136 === 9))
{var state_10135__$1 = state_10135;var statearr_10146_10168 = state_10135__$1;(statearr_10146_10168[2] = null);
(statearr_10146_10168[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10136 === 5))
{var state_10135__$1 = state_10135;if(cljs.core.truth_(close_QMARK_))
{var statearr_10147_10169 = state_10135__$1;(statearr_10147_10169[1] = 8);
} else
{var statearr_10148_10170 = state_10135__$1;(statearr_10148_10170[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10136 === 14))
{var inst_10129 = (state_10135[2]);var state_10135__$1 = state_10135;var statearr_10149_10171 = state_10135__$1;(statearr_10149_10171[2] = inst_10129);
(statearr_10149_10171[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10136 === 10))
{var inst_10121 = (state_10135[2]);var state_10135__$1 = state_10135;var statearr_10150_10172 = state_10135__$1;(statearr_10150_10172[2] = inst_10121);
(statearr_10150_10172[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10136 === 8))
{var inst_10118 = cljs.core.async.close_BANG_.call(null,to);var state_10135__$1 = state_10135;var statearr_10151_10173 = state_10135__$1;(statearr_10151_10173[2] = inst_10118);
(statearr_10151_10173[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__6102__auto___10159))
;return ((function (switch__6087__auto__,c__6102__auto___10159){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10155 = [null,null,null,null,null,null,null,null];(statearr_10155[0] = state_machine__6088__auto__);
(statearr_10155[1] = 1);
return statearr_10155;
});
var state_machine__6088__auto____1 = (function (state_10135){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_10135);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10156){if((e10156 instanceof Object))
{var ex__6091__auto__ = e10156;var statearr_10157_10174 = state_10135;(statearr_10157_10174[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10135);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10175 = state_10135;
state_10135 = G__10175;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10135){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___10159))
})();var state__6104__auto__ = (function (){var statearr_10158 = f__6103__auto__.call(null);(statearr_10158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___10159);
return statearr_10158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___10159))
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"n","n",-1640531417,null))))].join('')));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__10358){var vec__10359 = p__10358;var v = cljs.core.nth.call(null,vec__10359,0,null);var p = cljs.core.nth.call(null,vec__10359,1,null);var job = vec__10359;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1,xf,ex_handler);var c__6102__auto___10540 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___10540,res,vec__10359,v,p,job,jobs,results){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___10540,res,vec__10359,v,p,job,jobs,results){
return (function (state_10364){var state_val_10365 = (state_10364[1]);if((state_val_10365 === 2))
{var inst_10361 = (state_10364[2]);var inst_10362 = cljs.core.async.close_BANG_.call(null,res);var state_10364__$1 = (function (){var statearr_10366 = state_10364;(statearr_10366[7] = inst_10361);
return statearr_10366;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10364__$1,inst_10362);
} else
{if((state_val_10365 === 1))
{var state_10364__$1 = state_10364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10364__$1,2,res,v);
} else
{return null;
}
}
});})(c__6102__auto___10540,res,vec__10359,v,p,job,jobs,results))
;return ((function (switch__6087__auto__,c__6102__auto___10540,res,vec__10359,v,p,job,jobs,results){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10370 = [null,null,null,null,null,null,null,null];(statearr_10370[0] = state_machine__6088__auto__);
(statearr_10370[1] = 1);
return statearr_10370;
});
var state_machine__6088__auto____1 = (function (state_10364){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_10364);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10371){if((e10371 instanceof Object))
{var ex__6091__auto__ = e10371;var statearr_10372_10541 = state_10364;(statearr_10372_10541[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10364);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10542 = state_10364;
state_10364 = G__10542;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10364){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___10540,res,vec__10359,v,p,job,jobs,results))
})();var state__6104__auto__ = (function (){var statearr_10373 = f__6103__auto__.call(null);(statearr_10373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___10540);
return statearr_10373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___10540,res,vec__10359,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__10374){var vec__10375 = p__10374;var v = cljs.core.nth.call(null,vec__10375,0,null);var p = cljs.core.nth.call(null,vec__10375,1,null);var job = vec__10375;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1);xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4329__auto___10543 = n;var __10544 = 0;while(true){
if((__10544 < n__4329__auto___10543))
{var G__10376_10545 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"async","async",1107031534),G__10376_10545))
{var c__6102__auto___10546 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__10544,c__6102__auto___10546,G__10376_10545,n__4329__auto___10543,jobs,results,process,async){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (__10544,c__6102__auto___10546,G__10376_10545,n__4329__auto___10543,jobs,results,process,async){
return (function (state_10389){var state_val_10390 = (state_10389[1]);if((state_val_10390 === 7))
{var inst_10385 = (state_10389[2]);var state_10389__$1 = state_10389;var statearr_10391_10547 = state_10389__$1;(statearr_10391_10547[2] = inst_10385);
(statearr_10391_10547[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10390 === 6))
{var state_10389__$1 = state_10389;var statearr_10392_10548 = state_10389__$1;(statearr_10392_10548[2] = null);
(statearr_10392_10548[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10390 === 5))
{var state_10389__$1 = state_10389;var statearr_10393_10549 = state_10389__$1;(statearr_10393_10549[2] = null);
(statearr_10393_10549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10390 === 4))
{var inst_10379 = (state_10389[2]);var inst_10380 = async.call(null,inst_10379);var state_10389__$1 = state_10389;if(cljs.core.truth_(inst_10380))
{var statearr_10394_10550 = state_10389__$1;(statearr_10394_10550[1] = 5);
} else
{var statearr_10395_10551 = state_10389__$1;(statearr_10395_10551[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10390 === 3))
{var inst_10387 = (state_10389[2]);var state_10389__$1 = state_10389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10389__$1,inst_10387);
} else
{if((state_val_10390 === 2))
{var state_10389__$1 = state_10389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10389__$1,4,jobs);
} else
{if((state_val_10390 === 1))
{var state_10389__$1 = state_10389;var statearr_10396_10552 = state_10389__$1;(statearr_10396_10552[2] = null);
(statearr_10396_10552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(__10544,c__6102__auto___10546,G__10376_10545,n__4329__auto___10543,jobs,results,process,async))
;return ((function (__10544,switch__6087__auto__,c__6102__auto___10546,G__10376_10545,n__4329__auto___10543,jobs,results,process,async){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10400 = [null,null,null,null,null,null,null];(statearr_10400[0] = state_machine__6088__auto__);
(statearr_10400[1] = 1);
return statearr_10400;
});
var state_machine__6088__auto____1 = (function (state_10389){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_10389);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10401){if((e10401 instanceof Object))
{var ex__6091__auto__ = e10401;var statearr_10402_10553 = state_10389;(statearr_10402_10553[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10389);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10401;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10554 = state_10389;
state_10389 = G__10554;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10389){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(__10544,switch__6087__auto__,c__6102__auto___10546,G__10376_10545,n__4329__auto___10543,jobs,results,process,async))
})();var state__6104__auto__ = (function (){var statearr_10403 = f__6103__auto__.call(null);(statearr_10403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___10546);
return statearr_10403;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(__10544,c__6102__auto___10546,G__10376_10545,n__4329__auto___10543,jobs,results,process,async))
);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compute","compute",1964407721),G__10376_10545))
{var c__6102__auto___10555 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__10544,c__6102__auto___10555,G__10376_10545,n__4329__auto___10543,jobs,results,process,async){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (__10544,c__6102__auto___10555,G__10376_10545,n__4329__auto___10543,jobs,results,process,async){
return (function (state_10416){var state_val_10417 = (state_10416[1]);if((state_val_10417 === 7))
{var inst_10412 = (state_10416[2]);var state_10416__$1 = state_10416;var statearr_10418_10556 = state_10416__$1;(statearr_10418_10556[2] = inst_10412);
(statearr_10418_10556[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10417 === 6))
{var state_10416__$1 = state_10416;var statearr_10419_10557 = state_10416__$1;(statearr_10419_10557[2] = null);
(statearr_10419_10557[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10417 === 5))
{var state_10416__$1 = state_10416;var statearr_10420_10558 = state_10416__$1;(statearr_10420_10558[2] = null);
(statearr_10420_10558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10417 === 4))
{var inst_10406 = (state_10416[2]);var inst_10407 = process.call(null,inst_10406);var state_10416__$1 = state_10416;if(cljs.core.truth_(inst_10407))
{var statearr_10421_10559 = state_10416__$1;(statearr_10421_10559[1] = 5);
} else
{var statearr_10422_10560 = state_10416__$1;(statearr_10422_10560[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10417 === 3))
{var inst_10414 = (state_10416[2]);var state_10416__$1 = state_10416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10416__$1,inst_10414);
} else
{if((state_val_10417 === 2))
{var state_10416__$1 = state_10416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10416__$1,4,jobs);
} else
{if((state_val_10417 === 1))
{var state_10416__$1 = state_10416;var statearr_10423_10561 = state_10416__$1;(statearr_10423_10561[2] = null);
(statearr_10423_10561[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(__10544,c__6102__auto___10555,G__10376_10545,n__4329__auto___10543,jobs,results,process,async))
;return ((function (__10544,switch__6087__auto__,c__6102__auto___10555,G__10376_10545,n__4329__auto___10543,jobs,results,process,async){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10427 = [null,null,null,null,null,null,null];(statearr_10427[0] = state_machine__6088__auto__);
(statearr_10427[1] = 1);
return statearr_10427;
});
var state_machine__6088__auto____1 = (function (state_10416){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_10416);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10428){if((e10428 instanceof Object))
{var ex__6091__auto__ = e10428;var statearr_10429_10562 = state_10416;(statearr_10429_10562[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10416);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10563 = state_10416;
state_10416 = G__10563;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10416){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(__10544,switch__6087__auto__,c__6102__auto___10555,G__10376_10545,n__4329__auto___10543,jobs,results,process,async))
})();var state__6104__auto__ = (function (){var statearr_10430 = f__6103__auto__.call(null);(statearr_10430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___10555);
return statearr_10430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(__10544,c__6102__auto___10555,G__10376_10545,n__4329__auto___10543,jobs,results,process,async))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{}
}
}
{
var G__10564 = (__10544 + 1);
__10544 = G__10564;
continue;
}
} else
{}
break;
}
var c__6102__auto___10565 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___10565,jobs,results,process,async){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___10565,jobs,results,process,async){
return (function (state_10451){var state_val_10452 = (state_10451[1]);if((state_val_10452 === 9))
{var inst_10444 = (state_10451[2]);var state_10451__$1 = (function (){var statearr_10453 = state_10451;(statearr_10453[7] = inst_10444);
return statearr_10453;
})();var statearr_10454_10566 = state_10451__$1;(statearr_10454_10566[2] = null);
(statearr_10454_10566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10452 === 8))
{var inst_10438 = (state_10451[8]);var inst_10442 = (state_10451[2]);var state_10451__$1 = (function (){var statearr_10455 = state_10451;(statearr_10455[9] = inst_10442);
return statearr_10455;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10451__$1,9,results,inst_10438);
} else
{if((state_val_10452 === 7))
{var inst_10447 = (state_10451[2]);var state_10451__$1 = state_10451;var statearr_10456_10567 = state_10451__$1;(statearr_10456_10567[2] = inst_10447);
(statearr_10456_10567[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10452 === 6))
{var inst_10433 = (state_10451[10]);var inst_10438 = (state_10451[8]);var inst_10438__$1 = cljs.core.async.chan.call(null,1);var inst_10439 = [inst_10433,inst_10438__$1];var inst_10440 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10439,null));var state_10451__$1 = (function (){var statearr_10457 = state_10451;(statearr_10457[8] = inst_10438__$1);
return statearr_10457;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10451__$1,8,jobs,inst_10440);
} else
{if((state_val_10452 === 5))
{var inst_10436 = cljs.core.async.close_BANG_.call(null,jobs);var state_10451__$1 = state_10451;var statearr_10458_10568 = state_10451__$1;(statearr_10458_10568[2] = inst_10436);
(statearr_10458_10568[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10452 === 4))
{var inst_10433 = (state_10451[10]);var inst_10433__$1 = (state_10451[2]);var inst_10434 = (inst_10433__$1 == null);var state_10451__$1 = (function (){var statearr_10459 = state_10451;(statearr_10459[10] = inst_10433__$1);
return statearr_10459;
})();if(cljs.core.truth_(inst_10434))
{var statearr_10460_10569 = state_10451__$1;(statearr_10460_10569[1] = 5);
} else
{var statearr_10461_10570 = state_10451__$1;(statearr_10461_10570[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10452 === 3))
{var inst_10449 = (state_10451[2]);var state_10451__$1 = state_10451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10451__$1,inst_10449);
} else
{if((state_val_10452 === 2))
{var state_10451__$1 = state_10451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10451__$1,4,from);
} else
{if((state_val_10452 === 1))
{var state_10451__$1 = state_10451;var statearr_10462_10571 = state_10451__$1;(statearr_10462_10571[2] = null);
(statearr_10462_10571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__6102__auto___10565,jobs,results,process,async))
;return ((function (switch__6087__auto__,c__6102__auto___10565,jobs,results,process,async){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10466 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10466[0] = state_machine__6088__auto__);
(statearr_10466[1] = 1);
return statearr_10466;
});
var state_machine__6088__auto____1 = (function (state_10451){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_10451);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10467){if((e10467 instanceof Object))
{var ex__6091__auto__ = e10467;var statearr_10468_10572 = state_10451;(statearr_10468_10572[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10451);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10467;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10573 = state_10451;
state_10451 = G__10573;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10451){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___10565,jobs,results,process,async))
})();var state__6104__auto__ = (function (){var statearr_10469 = f__6103__auto__.call(null);(statearr_10469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___10565);
return statearr_10469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___10565,jobs,results,process,async))
);
var c__6102__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto__,jobs,results,process,async){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto__,jobs,results,process,async){
return (function (state_10507){var state_val_10508 = (state_10507[1]);if((state_val_10508 === 7))
{var inst_10503 = (state_10507[2]);var state_10507__$1 = state_10507;var statearr_10509_10574 = state_10507__$1;(statearr_10509_10574[2] = inst_10503);
(statearr_10509_10574[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 20))
{var state_10507__$1 = state_10507;var statearr_10510_10575 = state_10507__$1;(statearr_10510_10575[2] = null);
(statearr_10510_10575[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 1))
{var state_10507__$1 = state_10507;var statearr_10511_10576 = state_10507__$1;(statearr_10511_10576[2] = null);
(statearr_10511_10576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 4))
{var inst_10472 = (state_10507[7]);var inst_10472__$1 = (state_10507[2]);var inst_10473 = (inst_10472__$1 == null);var state_10507__$1 = (function (){var statearr_10512 = state_10507;(statearr_10512[7] = inst_10472__$1);
return statearr_10512;
})();if(cljs.core.truth_(inst_10473))
{var statearr_10513_10577 = state_10507__$1;(statearr_10513_10577[1] = 5);
} else
{var statearr_10514_10578 = state_10507__$1;(statearr_10514_10578[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 15))
{var inst_10485 = (state_10507[8]);var state_10507__$1 = state_10507;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10507__$1,18,to,inst_10485);
} else
{if((state_val_10508 === 21))
{var inst_10498 = (state_10507[2]);var state_10507__$1 = state_10507;var statearr_10515_10579 = state_10507__$1;(statearr_10515_10579[2] = inst_10498);
(statearr_10515_10579[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 13))
{var inst_10500 = (state_10507[2]);var state_10507__$1 = (function (){var statearr_10516 = state_10507;(statearr_10516[9] = inst_10500);
return statearr_10516;
})();var statearr_10517_10580 = state_10507__$1;(statearr_10517_10580[2] = null);
(statearr_10517_10580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 6))
{var inst_10472 = (state_10507[7]);var state_10507__$1 = state_10507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10507__$1,11,inst_10472);
} else
{if((state_val_10508 === 17))
{var inst_10493 = (state_10507[2]);var state_10507__$1 = state_10507;if(cljs.core.truth_(inst_10493))
{var statearr_10518_10581 = state_10507__$1;(statearr_10518_10581[1] = 19);
} else
{var statearr_10519_10582 = state_10507__$1;(statearr_10519_10582[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 3))
{var inst_10505 = (state_10507[2]);var state_10507__$1 = state_10507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10507__$1,inst_10505);
} else
{if((state_val_10508 === 12))
{var inst_10482 = (state_10507[10]);var state_10507__$1 = state_10507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10507__$1,14,inst_10482);
} else
{if((state_val_10508 === 2))
{var state_10507__$1 = state_10507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10507__$1,4,results);
} else
{if((state_val_10508 === 19))
{var state_10507__$1 = state_10507;var statearr_10520_10583 = state_10507__$1;(statearr_10520_10583[2] = null);
(statearr_10520_10583[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 11))
{var inst_10482 = (state_10507[2]);var state_10507__$1 = (function (){var statearr_10521 = state_10507;(statearr_10521[10] = inst_10482);
return statearr_10521;
})();var statearr_10522_10584 = state_10507__$1;(statearr_10522_10584[2] = null);
(statearr_10522_10584[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 9))
{var state_10507__$1 = state_10507;var statearr_10523_10585 = state_10507__$1;(statearr_10523_10585[2] = null);
(statearr_10523_10585[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 5))
{var state_10507__$1 = state_10507;if(cljs.core.truth_(close_QMARK_))
{var statearr_10524_10586 = state_10507__$1;(statearr_10524_10586[1] = 8);
} else
{var statearr_10525_10587 = state_10507__$1;(statearr_10525_10587[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 14))
{var inst_10487 = (state_10507[11]);var inst_10485 = (state_10507[8]);var inst_10485__$1 = (state_10507[2]);var inst_10486 = (inst_10485__$1 == null);var inst_10487__$1 = cljs.core.not.call(null,inst_10486);var state_10507__$1 = (function (){var statearr_10526 = state_10507;(statearr_10526[11] = inst_10487__$1);
(statearr_10526[8] = inst_10485__$1);
return statearr_10526;
})();if(inst_10487__$1)
{var statearr_10527_10588 = state_10507__$1;(statearr_10527_10588[1] = 15);
} else
{var statearr_10528_10589 = state_10507__$1;(statearr_10528_10589[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 16))
{var inst_10487 = (state_10507[11]);var state_10507__$1 = state_10507;var statearr_10529_10590 = state_10507__$1;(statearr_10529_10590[2] = inst_10487);
(statearr_10529_10590[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 10))
{var inst_10479 = (state_10507[2]);var state_10507__$1 = state_10507;var statearr_10530_10591 = state_10507__$1;(statearr_10530_10591[2] = inst_10479);
(statearr_10530_10591[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 18))
{var inst_10490 = (state_10507[2]);var state_10507__$1 = state_10507;var statearr_10531_10592 = state_10507__$1;(statearr_10531_10592[2] = inst_10490);
(statearr_10531_10592[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 8))
{var inst_10476 = cljs.core.async.close_BANG_.call(null,to);var state_10507__$1 = state_10507;var statearr_10532_10593 = state_10507__$1;(statearr_10532_10593[2] = inst_10476);
(statearr_10532_10593[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__6088__auto____0 = (function (){var statearr_10536 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10536[0] = state_machine__6088__auto__);
(statearr_10536[1] = 1);
return statearr_10536;
});
var state_machine__6088__auto____1 = (function (state_10507){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_10507);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10537){if((e10537 instanceof Object))
{var ex__6091__auto__ = e10537;var statearr_10538_10594 = state_10507;(statearr_10538_10594[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10507);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10537;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10595 = state_10507;
state_10507 = G__10595;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10507){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto__,jobs,results,process,async))
})();var state__6104__auto__ = (function (){var statearr_10539 = f__6103__auto__.call(null);(statearr_10539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto__);
return statearr_10539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
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
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1107031534));
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
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1964407721));
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6102__auto___10696 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___10696,tc,fc){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___10696,tc,fc){
return (function (state_10671){var state_val_10672 = (state_10671[1]);if((state_val_10672 === 7))
{var inst_10667 = (state_10671[2]);var state_10671__$1 = state_10671;var statearr_10673_10697 = state_10671__$1;(statearr_10673_10697[2] = inst_10667);
(statearr_10673_10697[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10672 === 1))
{var state_10671__$1 = state_10671;var statearr_10674_10698 = state_10671__$1;(statearr_10674_10698[2] = null);
(statearr_10674_10698[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10672 === 4))
{var inst_10648 = (state_10671[7]);var inst_10648__$1 = (state_10671[2]);var inst_10649 = (inst_10648__$1 == null);var state_10671__$1 = (function (){var statearr_10675 = state_10671;(statearr_10675[7] = inst_10648__$1);
return statearr_10675;
})();if(cljs.core.truth_(inst_10649))
{var statearr_10676_10699 = state_10671__$1;(statearr_10676_10699[1] = 5);
} else
{var statearr_10677_10700 = state_10671__$1;(statearr_10677_10700[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10672 === 13))
{var state_10671__$1 = state_10671;var statearr_10678_10701 = state_10671__$1;(statearr_10678_10701[2] = null);
(statearr_10678_10701[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10672 === 6))
{var inst_10648 = (state_10671[7]);var inst_10654 = p.call(null,inst_10648);var state_10671__$1 = state_10671;if(cljs.core.truth_(inst_10654))
{var statearr_10679_10702 = state_10671__$1;(statearr_10679_10702[1] = 9);
} else
{var statearr_10680_10703 = state_10671__$1;(statearr_10680_10703[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10672 === 3))
{var inst_10669 = (state_10671[2]);var state_10671__$1 = state_10671;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10671__$1,inst_10669);
} else
{if((state_val_10672 === 12))
{var state_10671__$1 = state_10671;var statearr_10681_10704 = state_10671__$1;(statearr_10681_10704[2] = null);
(statearr_10681_10704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10672 === 2))
{var state_10671__$1 = state_10671;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10671__$1,4,ch);
} else
{if((state_val_10672 === 11))
{var inst_10648 = (state_10671[7]);var inst_10658 = (state_10671[2]);var state_10671__$1 = state_10671;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10671__$1,8,inst_10658,inst_10648);
} else
{if((state_val_10672 === 9))
{var state_10671__$1 = state_10671;var statearr_10682_10705 = state_10671__$1;(statearr_10682_10705[2] = tc);
(statearr_10682_10705[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10672 === 5))
{var inst_10651 = cljs.core.async.close_BANG_.call(null,tc);var inst_10652 = cljs.core.async.close_BANG_.call(null,fc);var state_10671__$1 = (function (){var statearr_10683 = state_10671;(statearr_10683[8] = inst_10651);
return statearr_10683;
})();var statearr_10684_10706 = state_10671__$1;(statearr_10684_10706[2] = inst_10652);
(statearr_10684_10706[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10672 === 14))
{var inst_10665 = (state_10671[2]);var state_10671__$1 = state_10671;var statearr_10685_10707 = state_10671__$1;(statearr_10685_10707[2] = inst_10665);
(statearr_10685_10707[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10672 === 10))
{var state_10671__$1 = state_10671;var statearr_10686_10708 = state_10671__$1;(statearr_10686_10708[2] = fc);
(statearr_10686_10708[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10672 === 8))
{var inst_10660 = (state_10671[2]);var state_10671__$1 = state_10671;if(cljs.core.truth_(inst_10660))
{var statearr_10687_10709 = state_10671__$1;(statearr_10687_10709[1] = 12);
} else
{var statearr_10688_10710 = state_10671__$1;(statearr_10688_10710[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__6102__auto___10696,tc,fc))
;return ((function (switch__6087__auto__,c__6102__auto___10696,tc,fc){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10692 = [null,null,null,null,null,null,null,null,null];(statearr_10692[0] = state_machine__6088__auto__);
(statearr_10692[1] = 1);
return statearr_10692;
});
var state_machine__6088__auto____1 = (function (state_10671){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_10671);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10693){if((e10693 instanceof Object))
{var ex__6091__auto__ = e10693;var statearr_10694_10711 = state_10671;(statearr_10694_10711[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10671);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10712 = state_10671;
state_10671 = G__10712;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10671){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___10696,tc,fc))
})();var state__6104__auto__ = (function (){var statearr_10695 = f__6103__auto__.call(null);(statearr_10695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___10696);
return statearr_10695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___10696,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6102__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto__){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto__){
return (function (state_10759){var state_val_10760 = (state_10759[1]);if((state_val_10760 === 7))
{var inst_10755 = (state_10759[2]);var state_10759__$1 = state_10759;var statearr_10761_10777 = state_10759__$1;(statearr_10761_10777[2] = inst_10755);
(statearr_10761_10777[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 6))
{var inst_10748 = (state_10759[7]);var inst_10745 = (state_10759[8]);var inst_10752 = f.call(null,inst_10745,inst_10748);var inst_10745__$1 = inst_10752;var state_10759__$1 = (function (){var statearr_10762 = state_10759;(statearr_10762[8] = inst_10745__$1);
return statearr_10762;
})();var statearr_10763_10778 = state_10759__$1;(statearr_10763_10778[2] = null);
(statearr_10763_10778[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 5))
{var inst_10745 = (state_10759[8]);var state_10759__$1 = state_10759;var statearr_10764_10779 = state_10759__$1;(statearr_10764_10779[2] = inst_10745);
(statearr_10764_10779[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 4))
{var inst_10748 = (state_10759[7]);var inst_10748__$1 = (state_10759[2]);var inst_10749 = (inst_10748__$1 == null);var state_10759__$1 = (function (){var statearr_10765 = state_10759;(statearr_10765[7] = inst_10748__$1);
return statearr_10765;
})();if(cljs.core.truth_(inst_10749))
{var statearr_10766_10780 = state_10759__$1;(statearr_10766_10780[1] = 5);
} else
{var statearr_10767_10781 = state_10759__$1;(statearr_10767_10781[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 3))
{var inst_10757 = (state_10759[2]);var state_10759__$1 = state_10759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10759__$1,inst_10757);
} else
{if((state_val_10760 === 2))
{var state_10759__$1 = state_10759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10759__$1,4,ch);
} else
{if((state_val_10760 === 1))
{var inst_10745 = init;var state_10759__$1 = (function (){var statearr_10768 = state_10759;(statearr_10768[8] = inst_10745);
return statearr_10768;
})();var statearr_10769_10782 = state_10759__$1;(statearr_10769_10782[2] = null);
(statearr_10769_10782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__6088__auto____0 = (function (){var statearr_10773 = [null,null,null,null,null,null,null,null,null];(statearr_10773[0] = state_machine__6088__auto__);
(statearr_10773[1] = 1);
return statearr_10773;
});
var state_machine__6088__auto____1 = (function (state_10759){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_10759);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10774){if((e10774 instanceof Object))
{var ex__6091__auto__ = e10774;var statearr_10775_10783 = state_10759;(statearr_10775_10783[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10759);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10774;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10784 = state_10759;
state_10759 = G__10784;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10759){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto__))
})();var state__6104__auto__ = (function (){var statearr_10776 = f__6103__auto__.call(null);(statearr_10776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto__);
return statearr_10776;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6102__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto__){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto__){
return (function (state_10858){var state_val_10859 = (state_10858[1]);if((state_val_10859 === 7))
{var inst_10840 = (state_10858[2]);var state_10858__$1 = state_10858;var statearr_10860_10883 = state_10858__$1;(statearr_10860_10883[2] = inst_10840);
(statearr_10860_10883[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10859 === 1))
{var inst_10834 = cljs.core.seq.call(null,coll);var inst_10835 = inst_10834;var state_10858__$1 = (function (){var statearr_10861 = state_10858;(statearr_10861[7] = inst_10835);
return statearr_10861;
})();var statearr_10862_10884 = state_10858__$1;(statearr_10862_10884[2] = null);
(statearr_10862_10884[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10859 === 4))
{var inst_10835 = (state_10858[7]);var inst_10838 = cljs.core.first.call(null,inst_10835);var state_10858__$1 = state_10858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10858__$1,7,ch,inst_10838);
} else
{if((state_val_10859 === 13))
{var inst_10852 = (state_10858[2]);var state_10858__$1 = state_10858;var statearr_10863_10885 = state_10858__$1;(statearr_10863_10885[2] = inst_10852);
(statearr_10863_10885[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10859 === 6))
{var inst_10843 = (state_10858[2]);var state_10858__$1 = state_10858;if(cljs.core.truth_(inst_10843))
{var statearr_10864_10886 = state_10858__$1;(statearr_10864_10886[1] = 8);
} else
{var statearr_10865_10887 = state_10858__$1;(statearr_10865_10887[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10859 === 3))
{var inst_10856 = (state_10858[2]);var state_10858__$1 = state_10858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10858__$1,inst_10856);
} else
{if((state_val_10859 === 12))
{var state_10858__$1 = state_10858;var statearr_10866_10888 = state_10858__$1;(statearr_10866_10888[2] = null);
(statearr_10866_10888[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10859 === 2))
{var inst_10835 = (state_10858[7]);var state_10858__$1 = state_10858;if(cljs.core.truth_(inst_10835))
{var statearr_10867_10889 = state_10858__$1;(statearr_10867_10889[1] = 4);
} else
{var statearr_10868_10890 = state_10858__$1;(statearr_10868_10890[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10859 === 11))
{var inst_10849 = cljs.core.async.close_BANG_.call(null,ch);var state_10858__$1 = state_10858;var statearr_10869_10891 = state_10858__$1;(statearr_10869_10891[2] = inst_10849);
(statearr_10869_10891[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10859 === 9))
{var state_10858__$1 = state_10858;if(cljs.core.truth_(close_QMARK_))
{var statearr_10870_10892 = state_10858__$1;(statearr_10870_10892[1] = 11);
} else
{var statearr_10871_10893 = state_10858__$1;(statearr_10871_10893[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10859 === 5))
{var inst_10835 = (state_10858[7]);var state_10858__$1 = state_10858;var statearr_10872_10894 = state_10858__$1;(statearr_10872_10894[2] = inst_10835);
(statearr_10872_10894[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10859 === 10))
{var inst_10854 = (state_10858[2]);var state_10858__$1 = state_10858;var statearr_10873_10895 = state_10858__$1;(statearr_10873_10895[2] = inst_10854);
(statearr_10873_10895[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10859 === 8))
{var inst_10835 = (state_10858[7]);var inst_10845 = cljs.core.next.call(null,inst_10835);var inst_10835__$1 = inst_10845;var state_10858__$1 = (function (){var statearr_10874 = state_10858;(statearr_10874[7] = inst_10835__$1);
return statearr_10874;
})();var statearr_10875_10896 = state_10858__$1;(statearr_10875_10896[2] = null);
(statearr_10875_10896[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__6088__auto____0 = (function (){var statearr_10879 = [null,null,null,null,null,null,null,null];(statearr_10879[0] = state_machine__6088__auto__);
(statearr_10879[1] = 1);
return statearr_10879;
});
var state_machine__6088__auto____1 = (function (state_10858){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_10858);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10880){if((e10880 instanceof Object))
{var ex__6091__auto__ = e10880;var statearr_10881_10897 = state_10858;(statearr_10881_10897[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10858);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10880;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10898 = state_10858;
state_10858 = G__10898;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10858){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto__))
})();var state__6104__auto__ = (function (){var statearr_10882 = f__6103__auto__.call(null);(statearr_10882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto__);
return statearr_10882;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10900 = {};return obj10900;
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
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10902 = {};return obj10902;
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
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11124 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11124 = (function (cs,ch,mult,meta11125){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11125 = meta11125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11124.cljs$lang$type = true;
cljs.core.async.t11124.cljs$lang$ctorStr = "cljs.core.async/t11124";
cljs.core.async.t11124.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11124");
});})(cs))
;
cljs.core.async.t11124.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11124.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11124.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11124.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11124.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11126){var self__ = this;
var _11126__$1 = this;return self__.meta11125;
});})(cs))
;
cljs.core.async.t11124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11126,meta11125__$1){var self__ = this;
var _11126__$1 = this;return (new cljs.core.async.t11124(self__.cs,self__.ch,self__.mult,meta11125__$1));
});})(cs))
;
cljs.core.async.__GT_t11124 = ((function (cs){
return (function __GT_t11124(cs__$1,ch__$1,mult__$1,meta11125){return (new cljs.core.async.t11124(cs__$1,ch__$1,mult__$1,meta11125));
});})(cs))
;
}
return (new cljs.core.async.t11124(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6102__auto___11345 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___11345,cs,m,dchan,dctr,done){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___11345,cs,m,dchan,dctr,done){
return (function (state_11257){var state_val_11258 = (state_11257[1]);if((state_val_11258 === 7))
{var inst_11253 = (state_11257[2]);var state_11257__$1 = state_11257;var statearr_11259_11346 = state_11257__$1;(statearr_11259_11346[2] = inst_11253);
(statearr_11259_11346[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 20))
{var inst_11158 = (state_11257[7]);var inst_11168 = cljs.core.first.call(null,inst_11158);var inst_11169 = cljs.core.nth.call(null,inst_11168,0,null);var inst_11170 = cljs.core.nth.call(null,inst_11168,1,null);var state_11257__$1 = (function (){var statearr_11260 = state_11257;(statearr_11260[8] = inst_11169);
return statearr_11260;
})();if(cljs.core.truth_(inst_11170))
{var statearr_11261_11347 = state_11257__$1;(statearr_11261_11347[1] = 22);
} else
{var statearr_11262_11348 = state_11257__$1;(statearr_11262_11348[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 27))
{var inst_11198 = (state_11257[9]);var inst_11129 = (state_11257[10]);var inst_11205 = (state_11257[11]);var inst_11200 = (state_11257[12]);var inst_11205__$1 = cljs.core._nth.call(null,inst_11198,inst_11200);var inst_11206 = cljs.core.async.put_BANG_.call(null,inst_11205__$1,inst_11129,done);var state_11257__$1 = (function (){var statearr_11263 = state_11257;(statearr_11263[11] = inst_11205__$1);
return statearr_11263;
})();if(cljs.core.truth_(inst_11206))
{var statearr_11264_11349 = state_11257__$1;(statearr_11264_11349[1] = 30);
} else
{var statearr_11265_11350 = state_11257__$1;(statearr_11265_11350[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 1))
{var state_11257__$1 = state_11257;var statearr_11266_11351 = state_11257__$1;(statearr_11266_11351[2] = null);
(statearr_11266_11351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 24))
{var inst_11158 = (state_11257[7]);var inst_11175 = (state_11257[2]);var inst_11176 = cljs.core.next.call(null,inst_11158);var inst_11138 = inst_11176;var inst_11139 = null;var inst_11140 = 0;var inst_11141 = 0;var state_11257__$1 = (function (){var statearr_11267 = state_11257;(statearr_11267[13] = inst_11139);
(statearr_11267[14] = inst_11138);
(statearr_11267[15] = inst_11175);
(statearr_11267[16] = inst_11140);
(statearr_11267[17] = inst_11141);
return statearr_11267;
})();var statearr_11268_11352 = state_11257__$1;(statearr_11268_11352[2] = null);
(statearr_11268_11352[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 39))
{var state_11257__$1 = state_11257;var statearr_11272_11353 = state_11257__$1;(statearr_11272_11353[2] = null);
(statearr_11272_11353[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 4))
{var inst_11129 = (state_11257[10]);var inst_11129__$1 = (state_11257[2]);var inst_11130 = (inst_11129__$1 == null);var state_11257__$1 = (function (){var statearr_11273 = state_11257;(statearr_11273[10] = inst_11129__$1);
return statearr_11273;
})();if(cljs.core.truth_(inst_11130))
{var statearr_11274_11354 = state_11257__$1;(statearr_11274_11354[1] = 5);
} else
{var statearr_11275_11355 = state_11257__$1;(statearr_11275_11355[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 15))
{var inst_11139 = (state_11257[13]);var inst_11138 = (state_11257[14]);var inst_11140 = (state_11257[16]);var inst_11141 = (state_11257[17]);var inst_11154 = (state_11257[2]);var inst_11155 = (inst_11141 + 1);var tmp11269 = inst_11139;var tmp11270 = inst_11138;var tmp11271 = inst_11140;var inst_11138__$1 = tmp11270;var inst_11139__$1 = tmp11269;var inst_11140__$1 = tmp11271;var inst_11141__$1 = inst_11155;var state_11257__$1 = (function (){var statearr_11276 = state_11257;(statearr_11276[13] = inst_11139__$1);
(statearr_11276[14] = inst_11138__$1);
(statearr_11276[18] = inst_11154);
(statearr_11276[16] = inst_11140__$1);
(statearr_11276[17] = inst_11141__$1);
return statearr_11276;
})();var statearr_11277_11356 = state_11257__$1;(statearr_11277_11356[2] = null);
(statearr_11277_11356[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 21))
{var inst_11179 = (state_11257[2]);var state_11257__$1 = state_11257;var statearr_11281_11357 = state_11257__$1;(statearr_11281_11357[2] = inst_11179);
(statearr_11281_11357[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 31))
{var inst_11205 = (state_11257[11]);var inst_11209 = done.call(null,null);var inst_11210 = cljs.core.async.untap_STAR_.call(null,m,inst_11205);var state_11257__$1 = (function (){var statearr_11282 = state_11257;(statearr_11282[19] = inst_11209);
return statearr_11282;
})();var statearr_11283_11358 = state_11257__$1;(statearr_11283_11358[2] = inst_11210);
(statearr_11283_11358[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 32))
{var inst_11198 = (state_11257[9]);var inst_11200 = (state_11257[12]);var inst_11199 = (state_11257[20]);var inst_11197 = (state_11257[21]);var inst_11212 = (state_11257[2]);var inst_11213 = (inst_11200 + 1);var tmp11278 = inst_11198;var tmp11279 = inst_11199;var tmp11280 = inst_11197;var inst_11197__$1 = tmp11280;var inst_11198__$1 = tmp11278;var inst_11199__$1 = tmp11279;var inst_11200__$1 = inst_11213;var state_11257__$1 = (function (){var statearr_11284 = state_11257;(statearr_11284[9] = inst_11198__$1);
(statearr_11284[22] = inst_11212);
(statearr_11284[12] = inst_11200__$1);
(statearr_11284[20] = inst_11199__$1);
(statearr_11284[21] = inst_11197__$1);
return statearr_11284;
})();var statearr_11285_11359 = state_11257__$1;(statearr_11285_11359[2] = null);
(statearr_11285_11359[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 40))
{var inst_11225 = (state_11257[23]);var inst_11229 = done.call(null,null);var inst_11230 = cljs.core.async.untap_STAR_.call(null,m,inst_11225);var state_11257__$1 = (function (){var statearr_11286 = state_11257;(statearr_11286[24] = inst_11229);
return statearr_11286;
})();var statearr_11287_11360 = state_11257__$1;(statearr_11287_11360[2] = inst_11230);
(statearr_11287_11360[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 33))
{var inst_11216 = (state_11257[25]);var inst_11218 = cljs.core.chunked_seq_QMARK_.call(null,inst_11216);var state_11257__$1 = state_11257;if(inst_11218)
{var statearr_11288_11361 = state_11257__$1;(statearr_11288_11361[1] = 36);
} else
{var statearr_11289_11362 = state_11257__$1;(statearr_11289_11362[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 13))
{var inst_11148 = (state_11257[26]);var inst_11151 = cljs.core.async.close_BANG_.call(null,inst_11148);var state_11257__$1 = state_11257;var statearr_11290_11363 = state_11257__$1;(statearr_11290_11363[2] = inst_11151);
(statearr_11290_11363[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 22))
{var inst_11169 = (state_11257[8]);var inst_11172 = cljs.core.async.close_BANG_.call(null,inst_11169);var state_11257__$1 = state_11257;var statearr_11291_11364 = state_11257__$1;(statearr_11291_11364[2] = inst_11172);
(statearr_11291_11364[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 36))
{var inst_11216 = (state_11257[25]);var inst_11220 = cljs.core.chunk_first.call(null,inst_11216);var inst_11221 = cljs.core.chunk_rest.call(null,inst_11216);var inst_11222 = cljs.core.count.call(null,inst_11220);var inst_11197 = inst_11221;var inst_11198 = inst_11220;var inst_11199 = inst_11222;var inst_11200 = 0;var state_11257__$1 = (function (){var statearr_11292 = state_11257;(statearr_11292[9] = inst_11198);
(statearr_11292[12] = inst_11200);
(statearr_11292[20] = inst_11199);
(statearr_11292[21] = inst_11197);
return statearr_11292;
})();var statearr_11293_11365 = state_11257__$1;(statearr_11293_11365[2] = null);
(statearr_11293_11365[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 41))
{var inst_11216 = (state_11257[25]);var inst_11232 = (state_11257[2]);var inst_11233 = cljs.core.next.call(null,inst_11216);var inst_11197 = inst_11233;var inst_11198 = null;var inst_11199 = 0;var inst_11200 = 0;var state_11257__$1 = (function (){var statearr_11294 = state_11257;(statearr_11294[9] = inst_11198);
(statearr_11294[12] = inst_11200);
(statearr_11294[20] = inst_11199);
(statearr_11294[21] = inst_11197);
(statearr_11294[27] = inst_11232);
return statearr_11294;
})();var statearr_11295_11366 = state_11257__$1;(statearr_11295_11366[2] = null);
(statearr_11295_11366[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 43))
{var state_11257__$1 = state_11257;var statearr_11296_11367 = state_11257__$1;(statearr_11296_11367[2] = null);
(statearr_11296_11367[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 29))
{var inst_11241 = (state_11257[2]);var state_11257__$1 = state_11257;var statearr_11297_11368 = state_11257__$1;(statearr_11297_11368[2] = inst_11241);
(statearr_11297_11368[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 44))
{var inst_11250 = (state_11257[2]);var state_11257__$1 = (function (){var statearr_11298 = state_11257;(statearr_11298[28] = inst_11250);
return statearr_11298;
})();var statearr_11299_11369 = state_11257__$1;(statearr_11299_11369[2] = null);
(statearr_11299_11369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 6))
{var inst_11189 = (state_11257[29]);var inst_11188 = cljs.core.deref.call(null,cs);var inst_11189__$1 = cljs.core.keys.call(null,inst_11188);var inst_11190 = cljs.core.count.call(null,inst_11189__$1);var inst_11191 = cljs.core.reset_BANG_.call(null,dctr,inst_11190);var inst_11196 = cljs.core.seq.call(null,inst_11189__$1);var inst_11197 = inst_11196;var inst_11198 = null;var inst_11199 = 0;var inst_11200 = 0;var state_11257__$1 = (function (){var statearr_11300 = state_11257;(statearr_11300[9] = inst_11198);
(statearr_11300[12] = inst_11200);
(statearr_11300[20] = inst_11199);
(statearr_11300[21] = inst_11197);
(statearr_11300[29] = inst_11189__$1);
(statearr_11300[30] = inst_11191);
return statearr_11300;
})();var statearr_11301_11370 = state_11257__$1;(statearr_11301_11370[2] = null);
(statearr_11301_11370[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 28))
{var inst_11197 = (state_11257[21]);var inst_11216 = (state_11257[25]);var inst_11216__$1 = cljs.core.seq.call(null,inst_11197);var state_11257__$1 = (function (){var statearr_11302 = state_11257;(statearr_11302[25] = inst_11216__$1);
return statearr_11302;
})();if(inst_11216__$1)
{var statearr_11303_11371 = state_11257__$1;(statearr_11303_11371[1] = 33);
} else
{var statearr_11304_11372 = state_11257__$1;(statearr_11304_11372[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 25))
{var inst_11200 = (state_11257[12]);var inst_11199 = (state_11257[20]);var inst_11202 = (inst_11200 < inst_11199);var inst_11203 = inst_11202;var state_11257__$1 = state_11257;if(cljs.core.truth_(inst_11203))
{var statearr_11305_11373 = state_11257__$1;(statearr_11305_11373[1] = 27);
} else
{var statearr_11306_11374 = state_11257__$1;(statearr_11306_11374[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 34))
{var state_11257__$1 = state_11257;var statearr_11307_11375 = state_11257__$1;(statearr_11307_11375[2] = null);
(statearr_11307_11375[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 17))
{var state_11257__$1 = state_11257;var statearr_11308_11376 = state_11257__$1;(statearr_11308_11376[2] = null);
(statearr_11308_11376[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 3))
{var inst_11255 = (state_11257[2]);var state_11257__$1 = state_11257;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11257__$1,inst_11255);
} else
{if((state_val_11258 === 12))
{var inst_11184 = (state_11257[2]);var state_11257__$1 = state_11257;var statearr_11309_11377 = state_11257__$1;(statearr_11309_11377[2] = inst_11184);
(statearr_11309_11377[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 2))
{var state_11257__$1 = state_11257;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11257__$1,4,ch);
} else
{if((state_val_11258 === 23))
{var state_11257__$1 = state_11257;var statearr_11310_11378 = state_11257__$1;(statearr_11310_11378[2] = null);
(statearr_11310_11378[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 35))
{var inst_11239 = (state_11257[2]);var state_11257__$1 = state_11257;var statearr_11311_11379 = state_11257__$1;(statearr_11311_11379[2] = inst_11239);
(statearr_11311_11379[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 19))
{var inst_11158 = (state_11257[7]);var inst_11162 = cljs.core.chunk_first.call(null,inst_11158);var inst_11163 = cljs.core.chunk_rest.call(null,inst_11158);var inst_11164 = cljs.core.count.call(null,inst_11162);var inst_11138 = inst_11163;var inst_11139 = inst_11162;var inst_11140 = inst_11164;var inst_11141 = 0;var state_11257__$1 = (function (){var statearr_11312 = state_11257;(statearr_11312[13] = inst_11139);
(statearr_11312[14] = inst_11138);
(statearr_11312[16] = inst_11140);
(statearr_11312[17] = inst_11141);
return statearr_11312;
})();var statearr_11313_11380 = state_11257__$1;(statearr_11313_11380[2] = null);
(statearr_11313_11380[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 11))
{var inst_11138 = (state_11257[14]);var inst_11158 = (state_11257[7]);var inst_11158__$1 = cljs.core.seq.call(null,inst_11138);var state_11257__$1 = (function (){var statearr_11314 = state_11257;(statearr_11314[7] = inst_11158__$1);
return statearr_11314;
})();if(inst_11158__$1)
{var statearr_11315_11381 = state_11257__$1;(statearr_11315_11381[1] = 16);
} else
{var statearr_11316_11382 = state_11257__$1;(statearr_11316_11382[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 9))
{var inst_11186 = (state_11257[2]);var state_11257__$1 = state_11257;var statearr_11317_11383 = state_11257__$1;(statearr_11317_11383[2] = inst_11186);
(statearr_11317_11383[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 5))
{var inst_11136 = cljs.core.deref.call(null,cs);var inst_11137 = cljs.core.seq.call(null,inst_11136);var inst_11138 = inst_11137;var inst_11139 = null;var inst_11140 = 0;var inst_11141 = 0;var state_11257__$1 = (function (){var statearr_11318 = state_11257;(statearr_11318[13] = inst_11139);
(statearr_11318[14] = inst_11138);
(statearr_11318[16] = inst_11140);
(statearr_11318[17] = inst_11141);
return statearr_11318;
})();var statearr_11319_11384 = state_11257__$1;(statearr_11319_11384[2] = null);
(statearr_11319_11384[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 14))
{var state_11257__$1 = state_11257;var statearr_11320_11385 = state_11257__$1;(statearr_11320_11385[2] = null);
(statearr_11320_11385[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 45))
{var inst_11247 = (state_11257[2]);var state_11257__$1 = state_11257;var statearr_11321_11386 = state_11257__$1;(statearr_11321_11386[2] = inst_11247);
(statearr_11321_11386[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 26))
{var inst_11189 = (state_11257[29]);var inst_11243 = (state_11257[2]);var inst_11244 = cljs.core.seq.call(null,inst_11189);var state_11257__$1 = (function (){var statearr_11322 = state_11257;(statearr_11322[31] = inst_11243);
return statearr_11322;
})();if(inst_11244)
{var statearr_11323_11387 = state_11257__$1;(statearr_11323_11387[1] = 42);
} else
{var statearr_11324_11388 = state_11257__$1;(statearr_11324_11388[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 16))
{var inst_11158 = (state_11257[7]);var inst_11160 = cljs.core.chunked_seq_QMARK_.call(null,inst_11158);var state_11257__$1 = state_11257;if(inst_11160)
{var statearr_11325_11389 = state_11257__$1;(statearr_11325_11389[1] = 19);
} else
{var statearr_11326_11390 = state_11257__$1;(statearr_11326_11390[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 38))
{var inst_11236 = (state_11257[2]);var state_11257__$1 = state_11257;var statearr_11327_11391 = state_11257__$1;(statearr_11327_11391[2] = inst_11236);
(statearr_11327_11391[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 30))
{var state_11257__$1 = state_11257;var statearr_11328_11392 = state_11257__$1;(statearr_11328_11392[2] = null);
(statearr_11328_11392[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 10))
{var inst_11139 = (state_11257[13]);var inst_11141 = (state_11257[17]);var inst_11147 = cljs.core._nth.call(null,inst_11139,inst_11141);var inst_11148 = cljs.core.nth.call(null,inst_11147,0,null);var inst_11149 = cljs.core.nth.call(null,inst_11147,1,null);var state_11257__$1 = (function (){var statearr_11329 = state_11257;(statearr_11329[26] = inst_11148);
return statearr_11329;
})();if(cljs.core.truth_(inst_11149))
{var statearr_11330_11393 = state_11257__$1;(statearr_11330_11393[1] = 13);
} else
{var statearr_11331_11394 = state_11257__$1;(statearr_11331_11394[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 18))
{var inst_11182 = (state_11257[2]);var state_11257__$1 = state_11257;var statearr_11332_11395 = state_11257__$1;(statearr_11332_11395[2] = inst_11182);
(statearr_11332_11395[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 42))
{var state_11257__$1 = state_11257;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11257__$1,45,dchan);
} else
{if((state_val_11258 === 37))
{var inst_11129 = (state_11257[10]);var inst_11225 = (state_11257[23]);var inst_11216 = (state_11257[25]);var inst_11225__$1 = cljs.core.first.call(null,inst_11216);var inst_11226 = cljs.core.async.put_BANG_.call(null,inst_11225__$1,inst_11129,done);var state_11257__$1 = (function (){var statearr_11333 = state_11257;(statearr_11333[23] = inst_11225__$1);
return statearr_11333;
})();if(cljs.core.truth_(inst_11226))
{var statearr_11334_11396 = state_11257__$1;(statearr_11334_11396[1] = 39);
} else
{var statearr_11335_11397 = state_11257__$1;(statearr_11335_11397[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11258 === 8))
{var inst_11140 = (state_11257[16]);var inst_11141 = (state_11257[17]);var inst_11143 = (inst_11141 < inst_11140);var inst_11144 = inst_11143;var state_11257__$1 = state_11257;if(cljs.core.truth_(inst_11144))
{var statearr_11336_11398 = state_11257__$1;(statearr_11336_11398[1] = 10);
} else
{var statearr_11337_11399 = state_11257__$1;(statearr_11337_11399[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__6102__auto___11345,cs,m,dchan,dctr,done))
;return ((function (switch__6087__auto__,c__6102__auto___11345,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_11341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11341[0] = state_machine__6088__auto__);
(statearr_11341[1] = 1);
return statearr_11341;
});
var state_machine__6088__auto____1 = (function (state_11257){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_11257);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e11342){if((e11342 instanceof Object))
{var ex__6091__auto__ = e11342;var statearr_11343_11400 = state_11257;(statearr_11343_11400[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11257);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11401 = state_11257;
state_11257 = G__11401;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_11257){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_11257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___11345,cs,m,dchan,dctr,done))
})();var state__6104__auto__ = (function (){var statearr_11344 = f__6103__auto__.call(null);(statearr_11344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___11345);
return statearr_11344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___11345,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11403 = {};return obj11403;
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
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11523 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11523 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11524){
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
this.meta11524 = meta11524;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11523.cljs$lang$type = true;
cljs.core.async.t11523.cljs$lang$ctorStr = "cljs.core.async/t11523";
cljs.core.async.t11523.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11523");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11523.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11523.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11523.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11523.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11523.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11523.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11523.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11523.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11525){var self__ = this;
var _11525__$1 = this;return self__.meta11524;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11525,meta11524__$1){var self__ = this;
var _11525__$1 = this;return (new cljs.core.async.t11523(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11524__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11523 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11523(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11524){return (new cljs.core.async.t11523(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11524));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11523(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6102__auto___11642 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___11642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___11642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11595){var state_val_11596 = (state_11595[1]);if((state_val_11596 === 7))
{var inst_11539 = (state_11595[7]);var inst_11544 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11539);var state_11595__$1 = state_11595;var statearr_11597_11643 = state_11595__$1;(statearr_11597_11643[2] = inst_11544);
(statearr_11597_11643[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 20))
{var inst_11554 = (state_11595[8]);var state_11595__$1 = state_11595;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11595__$1,23,out,inst_11554);
} else
{if((state_val_11596 === 1))
{var inst_11529 = (state_11595[9]);var inst_11529__$1 = calc_state.call(null);var inst_11530 = cljs.core.seq_QMARK_.call(null,inst_11529__$1);var state_11595__$1 = (function (){var statearr_11598 = state_11595;(statearr_11598[9] = inst_11529__$1);
return statearr_11598;
})();if(inst_11530)
{var statearr_11599_11644 = state_11595__$1;(statearr_11599_11644[1] = 2);
} else
{var statearr_11600_11645 = state_11595__$1;(statearr_11600_11645[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 24))
{var inst_11547 = (state_11595[10]);var inst_11539 = inst_11547;var state_11595__$1 = (function (){var statearr_11601 = state_11595;(statearr_11601[7] = inst_11539);
return statearr_11601;
})();var statearr_11602_11646 = state_11595__$1;(statearr_11602_11646[2] = null);
(statearr_11602_11646[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 4))
{var inst_11529 = (state_11595[9]);var inst_11535 = (state_11595[2]);var inst_11536 = cljs.core.get.call(null,inst_11535,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11537 = cljs.core.get.call(null,inst_11535,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11538 = cljs.core.get.call(null,inst_11535,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11539 = inst_11529;var state_11595__$1 = (function (){var statearr_11603 = state_11595;(statearr_11603[11] = inst_11538);
(statearr_11603[7] = inst_11539);
(statearr_11603[12] = inst_11537);
(statearr_11603[13] = inst_11536);
return statearr_11603;
})();var statearr_11604_11647 = state_11595__$1;(statearr_11604_11647[2] = null);
(statearr_11604_11647[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 15))
{var state_11595__$1 = state_11595;var statearr_11605_11648 = state_11595__$1;(statearr_11605_11648[2] = null);
(statearr_11605_11648[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 21))
{var inst_11547 = (state_11595[10]);var inst_11539 = inst_11547;var state_11595__$1 = (function (){var statearr_11606 = state_11595;(statearr_11606[7] = inst_11539);
return statearr_11606;
})();var statearr_11607_11649 = state_11595__$1;(statearr_11607_11649[2] = null);
(statearr_11607_11649[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 13))
{var inst_11591 = (state_11595[2]);var state_11595__$1 = state_11595;var statearr_11608_11650 = state_11595__$1;(statearr_11608_11650[2] = inst_11591);
(statearr_11608_11650[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 22))
{var inst_11589 = (state_11595[2]);var state_11595__$1 = state_11595;var statearr_11609_11651 = state_11595__$1;(statearr_11609_11651[2] = inst_11589);
(statearr_11609_11651[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 6))
{var inst_11593 = (state_11595[2]);var state_11595__$1 = state_11595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11595__$1,inst_11593);
} else
{if((state_val_11596 === 25))
{var state_11595__$1 = state_11595;var statearr_11610_11652 = state_11595__$1;(statearr_11610_11652[2] = null);
(statearr_11610_11652[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 17))
{var inst_11569 = (state_11595[14]);var state_11595__$1 = state_11595;var statearr_11611_11653 = state_11595__$1;(statearr_11611_11653[2] = inst_11569);
(statearr_11611_11653[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 3))
{var inst_11529 = (state_11595[9]);var state_11595__$1 = state_11595;var statearr_11612_11654 = state_11595__$1;(statearr_11612_11654[2] = inst_11529);
(statearr_11612_11654[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 12))
{var inst_11550 = (state_11595[15]);var inst_11555 = (state_11595[16]);var inst_11569 = (state_11595[14]);var inst_11569__$1 = inst_11550.call(null,inst_11555);var state_11595__$1 = (function (){var statearr_11613 = state_11595;(statearr_11613[14] = inst_11569__$1);
return statearr_11613;
})();if(cljs.core.truth_(inst_11569__$1))
{var statearr_11614_11655 = state_11595__$1;(statearr_11614_11655[1] = 17);
} else
{var statearr_11615_11656 = state_11595__$1;(statearr_11615_11656[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 2))
{var inst_11529 = (state_11595[9]);var inst_11532 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11529);var state_11595__$1 = state_11595;var statearr_11616_11657 = state_11595__$1;(statearr_11616_11657[2] = inst_11532);
(statearr_11616_11657[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 23))
{var inst_11580 = (state_11595[2]);var state_11595__$1 = state_11595;if(cljs.core.truth_(inst_11580))
{var statearr_11617_11658 = state_11595__$1;(statearr_11617_11658[1] = 24);
} else
{var statearr_11618_11659 = state_11595__$1;(statearr_11618_11659[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 19))
{var inst_11577 = (state_11595[2]);var state_11595__$1 = state_11595;if(cljs.core.truth_(inst_11577))
{var statearr_11619_11660 = state_11595__$1;(statearr_11619_11660[1] = 20);
} else
{var statearr_11620_11661 = state_11595__$1;(statearr_11620_11661[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 11))
{var inst_11554 = (state_11595[8]);var inst_11560 = (inst_11554 == null);var state_11595__$1 = state_11595;if(cljs.core.truth_(inst_11560))
{var statearr_11621_11662 = state_11595__$1;(statearr_11621_11662[1] = 14);
} else
{var statearr_11622_11663 = state_11595__$1;(statearr_11622_11663[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 9))
{var inst_11547 = (state_11595[10]);var inst_11547__$1 = (state_11595[2]);var inst_11548 = cljs.core.get.call(null,inst_11547__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11549 = cljs.core.get.call(null,inst_11547__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11550 = cljs.core.get.call(null,inst_11547__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11595__$1 = (function (){var statearr_11623 = state_11595;(statearr_11623[17] = inst_11549);
(statearr_11623[10] = inst_11547__$1);
(statearr_11623[15] = inst_11550);
return statearr_11623;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11595__$1,10,inst_11548);
} else
{if((state_val_11596 === 5))
{var inst_11539 = (state_11595[7]);var inst_11542 = cljs.core.seq_QMARK_.call(null,inst_11539);var state_11595__$1 = state_11595;if(inst_11542)
{var statearr_11624_11664 = state_11595__$1;(statearr_11624_11664[1] = 7);
} else
{var statearr_11625_11665 = state_11595__$1;(statearr_11625_11665[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 14))
{var inst_11555 = (state_11595[16]);var inst_11562 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11555);var state_11595__$1 = state_11595;var statearr_11626_11666 = state_11595__$1;(statearr_11626_11666[2] = inst_11562);
(statearr_11626_11666[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 26))
{var inst_11585 = (state_11595[2]);var state_11595__$1 = state_11595;var statearr_11627_11667 = state_11595__$1;(statearr_11627_11667[2] = inst_11585);
(statearr_11627_11667[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 16))
{var inst_11565 = (state_11595[2]);var inst_11566 = calc_state.call(null);var inst_11539 = inst_11566;var state_11595__$1 = (function (){var statearr_11628 = state_11595;(statearr_11628[7] = inst_11539);
(statearr_11628[18] = inst_11565);
return statearr_11628;
})();var statearr_11629_11668 = state_11595__$1;(statearr_11629_11668[2] = null);
(statearr_11629_11668[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 10))
{var inst_11554 = (state_11595[8]);var inst_11555 = (state_11595[16]);var inst_11553 = (state_11595[2]);var inst_11554__$1 = cljs.core.nth.call(null,inst_11553,0,null);var inst_11555__$1 = cljs.core.nth.call(null,inst_11553,1,null);var inst_11556 = (inst_11554__$1 == null);var inst_11557 = cljs.core._EQ_.call(null,inst_11555__$1,change);var inst_11558 = (inst_11556) || (inst_11557);var state_11595__$1 = (function (){var statearr_11630 = state_11595;(statearr_11630[8] = inst_11554__$1);
(statearr_11630[16] = inst_11555__$1);
return statearr_11630;
})();if(cljs.core.truth_(inst_11558))
{var statearr_11631_11669 = state_11595__$1;(statearr_11631_11669[1] = 11);
} else
{var statearr_11632_11670 = state_11595__$1;(statearr_11632_11670[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 18))
{var inst_11549 = (state_11595[17]);var inst_11550 = (state_11595[15]);var inst_11555 = (state_11595[16]);var inst_11572 = cljs.core.empty_QMARK_.call(null,inst_11550);var inst_11573 = inst_11549.call(null,inst_11555);var inst_11574 = cljs.core.not.call(null,inst_11573);var inst_11575 = (inst_11572) && (inst_11574);var state_11595__$1 = state_11595;var statearr_11633_11671 = state_11595__$1;(statearr_11633_11671[2] = inst_11575);
(statearr_11633_11671[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 8))
{var inst_11539 = (state_11595[7]);var state_11595__$1 = state_11595;var statearr_11634_11672 = state_11595__$1;(statearr_11634_11672[2] = inst_11539);
(statearr_11634_11672[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__6102__auto___11642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6087__auto__,c__6102__auto___11642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_11638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11638[0] = state_machine__6088__auto__);
(statearr_11638[1] = 1);
return statearr_11638;
});
var state_machine__6088__auto____1 = (function (state_11595){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_11595);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e11639){if((e11639 instanceof Object))
{var ex__6091__auto__ = e11639;var statearr_11640_11673 = state_11595;(statearr_11640_11673[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11595);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11639;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11674 = state_11595;
state_11595 = G__11674;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_11595){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_11595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___11642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6104__auto__ = (function (){var statearr_11641 = f__6103__auto__.call(null);(statearr_11641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___11642);
return statearr_11641;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___11642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11676 = {};return obj11676;
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
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3481__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3481__auto__,mults){
return (function (p1__11677_SHARP_){if(cljs.core.truth_(p1__11677_SHARP_.call(null,topic)))
{return p1__11677_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11677_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3481__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11800 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11800 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11801){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11801 = meta11801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11800.cljs$lang$type = true;
cljs.core.async.t11800.cljs$lang$ctorStr = "cljs.core.async/t11800";
cljs.core.async.t11800.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11800");
});})(mults,ensure_mult))
;
cljs.core.async.t11800.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11800.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11800.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11800.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11800.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11800.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11800.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11802){var self__ = this;
var _11802__$1 = this;return self__.meta11801;
});})(mults,ensure_mult))
;
cljs.core.async.t11800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11802,meta11801__$1){var self__ = this;
var _11802__$1 = this;return (new cljs.core.async.t11800(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11801__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11800 = ((function (mults,ensure_mult){
return (function __GT_t11800(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11801){return (new cljs.core.async.t11800(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11801));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11800(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6102__auto___11922 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___11922,mults,ensure_mult,p){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___11922,mults,ensure_mult,p){
return (function (state_11874){var state_val_11875 = (state_11874[1]);if((state_val_11875 === 7))
{var inst_11870 = (state_11874[2]);var state_11874__$1 = state_11874;var statearr_11876_11923 = state_11874__$1;(statearr_11876_11923[2] = inst_11870);
(statearr_11876_11923[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 20))
{var state_11874__$1 = state_11874;var statearr_11877_11924 = state_11874__$1;(statearr_11877_11924[2] = null);
(statearr_11877_11924[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 1))
{var state_11874__$1 = state_11874;var statearr_11878_11925 = state_11874__$1;(statearr_11878_11925[2] = null);
(statearr_11878_11925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 24))
{var inst_11853 = (state_11874[7]);var inst_11862 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11853);var state_11874__$1 = state_11874;var statearr_11879_11926 = state_11874__$1;(statearr_11879_11926[2] = inst_11862);
(statearr_11879_11926[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 4))
{var inst_11805 = (state_11874[8]);var inst_11805__$1 = (state_11874[2]);var inst_11806 = (inst_11805__$1 == null);var state_11874__$1 = (function (){var statearr_11880 = state_11874;(statearr_11880[8] = inst_11805__$1);
return statearr_11880;
})();if(cljs.core.truth_(inst_11806))
{var statearr_11881_11927 = state_11874__$1;(statearr_11881_11927[1] = 5);
} else
{var statearr_11882_11928 = state_11874__$1;(statearr_11882_11928[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 15))
{var inst_11847 = (state_11874[2]);var state_11874__$1 = state_11874;var statearr_11883_11929 = state_11874__$1;(statearr_11883_11929[2] = inst_11847);
(statearr_11883_11929[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 21))
{var inst_11867 = (state_11874[2]);var state_11874__$1 = (function (){var statearr_11884 = state_11874;(statearr_11884[9] = inst_11867);
return statearr_11884;
})();var statearr_11885_11930 = state_11874__$1;(statearr_11885_11930[2] = null);
(statearr_11885_11930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 13))
{var inst_11829 = (state_11874[10]);var inst_11831 = cljs.core.chunked_seq_QMARK_.call(null,inst_11829);var state_11874__$1 = state_11874;if(inst_11831)
{var statearr_11886_11931 = state_11874__$1;(statearr_11886_11931[1] = 16);
} else
{var statearr_11887_11932 = state_11874__$1;(statearr_11887_11932[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 22))
{var inst_11859 = (state_11874[2]);var state_11874__$1 = state_11874;if(cljs.core.truth_(inst_11859))
{var statearr_11888_11933 = state_11874__$1;(statearr_11888_11933[1] = 23);
} else
{var statearr_11889_11934 = state_11874__$1;(statearr_11889_11934[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 6))
{var inst_11855 = (state_11874[11]);var inst_11853 = (state_11874[7]);var inst_11805 = (state_11874[8]);var inst_11853__$1 = topic_fn.call(null,inst_11805);var inst_11854 = cljs.core.deref.call(null,mults);var inst_11855__$1 = cljs.core.get.call(null,inst_11854,inst_11853__$1);var state_11874__$1 = (function (){var statearr_11890 = state_11874;(statearr_11890[11] = inst_11855__$1);
(statearr_11890[7] = inst_11853__$1);
return statearr_11890;
})();if(cljs.core.truth_(inst_11855__$1))
{var statearr_11891_11935 = state_11874__$1;(statearr_11891_11935[1] = 19);
} else
{var statearr_11892_11936 = state_11874__$1;(statearr_11892_11936[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 25))
{var inst_11864 = (state_11874[2]);var state_11874__$1 = state_11874;var statearr_11893_11937 = state_11874__$1;(statearr_11893_11937[2] = inst_11864);
(statearr_11893_11937[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 17))
{var inst_11829 = (state_11874[10]);var inst_11838 = cljs.core.first.call(null,inst_11829);var inst_11839 = cljs.core.async.muxch_STAR_.call(null,inst_11838);var inst_11840 = cljs.core.async.close_BANG_.call(null,inst_11839);var inst_11841 = cljs.core.next.call(null,inst_11829);var inst_11815 = inst_11841;var inst_11816 = null;var inst_11817 = 0;var inst_11818 = 0;var state_11874__$1 = (function (){var statearr_11894 = state_11874;(statearr_11894[12] = inst_11818);
(statearr_11894[13] = inst_11816);
(statearr_11894[14] = inst_11815);
(statearr_11894[15] = inst_11840);
(statearr_11894[16] = inst_11817);
return statearr_11894;
})();var statearr_11895_11938 = state_11874__$1;(statearr_11895_11938[2] = null);
(statearr_11895_11938[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 3))
{var inst_11872 = (state_11874[2]);var state_11874__$1 = state_11874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11874__$1,inst_11872);
} else
{if((state_val_11875 === 12))
{var inst_11849 = (state_11874[2]);var state_11874__$1 = state_11874;var statearr_11896_11939 = state_11874__$1;(statearr_11896_11939[2] = inst_11849);
(statearr_11896_11939[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 2))
{var state_11874__$1 = state_11874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11874__$1,4,ch);
} else
{if((state_val_11875 === 23))
{var state_11874__$1 = state_11874;var statearr_11897_11940 = state_11874__$1;(statearr_11897_11940[2] = null);
(statearr_11897_11940[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 19))
{var inst_11855 = (state_11874[11]);var inst_11805 = (state_11874[8]);var inst_11857 = cljs.core.async.muxch_STAR_.call(null,inst_11855);var state_11874__$1 = state_11874;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11874__$1,22,inst_11857,inst_11805);
} else
{if((state_val_11875 === 11))
{var inst_11829 = (state_11874[10]);var inst_11815 = (state_11874[14]);var inst_11829__$1 = cljs.core.seq.call(null,inst_11815);var state_11874__$1 = (function (){var statearr_11898 = state_11874;(statearr_11898[10] = inst_11829__$1);
return statearr_11898;
})();if(inst_11829__$1)
{var statearr_11899_11941 = state_11874__$1;(statearr_11899_11941[1] = 13);
} else
{var statearr_11900_11942 = state_11874__$1;(statearr_11900_11942[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 9))
{var inst_11851 = (state_11874[2]);var state_11874__$1 = state_11874;var statearr_11901_11943 = state_11874__$1;(statearr_11901_11943[2] = inst_11851);
(statearr_11901_11943[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 5))
{var inst_11812 = cljs.core.deref.call(null,mults);var inst_11813 = cljs.core.vals.call(null,inst_11812);var inst_11814 = cljs.core.seq.call(null,inst_11813);var inst_11815 = inst_11814;var inst_11816 = null;var inst_11817 = 0;var inst_11818 = 0;var state_11874__$1 = (function (){var statearr_11902 = state_11874;(statearr_11902[12] = inst_11818);
(statearr_11902[13] = inst_11816);
(statearr_11902[14] = inst_11815);
(statearr_11902[16] = inst_11817);
return statearr_11902;
})();var statearr_11903_11944 = state_11874__$1;(statearr_11903_11944[2] = null);
(statearr_11903_11944[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 14))
{var state_11874__$1 = state_11874;var statearr_11907_11945 = state_11874__$1;(statearr_11907_11945[2] = null);
(statearr_11907_11945[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 16))
{var inst_11829 = (state_11874[10]);var inst_11833 = cljs.core.chunk_first.call(null,inst_11829);var inst_11834 = cljs.core.chunk_rest.call(null,inst_11829);var inst_11835 = cljs.core.count.call(null,inst_11833);var inst_11815 = inst_11834;var inst_11816 = inst_11833;var inst_11817 = inst_11835;var inst_11818 = 0;var state_11874__$1 = (function (){var statearr_11908 = state_11874;(statearr_11908[12] = inst_11818);
(statearr_11908[13] = inst_11816);
(statearr_11908[14] = inst_11815);
(statearr_11908[16] = inst_11817);
return statearr_11908;
})();var statearr_11909_11946 = state_11874__$1;(statearr_11909_11946[2] = null);
(statearr_11909_11946[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 10))
{var inst_11818 = (state_11874[12]);var inst_11816 = (state_11874[13]);var inst_11815 = (state_11874[14]);var inst_11817 = (state_11874[16]);var inst_11823 = cljs.core._nth.call(null,inst_11816,inst_11818);var inst_11824 = cljs.core.async.muxch_STAR_.call(null,inst_11823);var inst_11825 = cljs.core.async.close_BANG_.call(null,inst_11824);var inst_11826 = (inst_11818 + 1);var tmp11904 = inst_11816;var tmp11905 = inst_11815;var tmp11906 = inst_11817;var inst_11815__$1 = tmp11905;var inst_11816__$1 = tmp11904;var inst_11817__$1 = tmp11906;var inst_11818__$1 = inst_11826;var state_11874__$1 = (function (){var statearr_11910 = state_11874;(statearr_11910[12] = inst_11818__$1);
(statearr_11910[17] = inst_11825);
(statearr_11910[13] = inst_11816__$1);
(statearr_11910[14] = inst_11815__$1);
(statearr_11910[16] = inst_11817__$1);
return statearr_11910;
})();var statearr_11911_11947 = state_11874__$1;(statearr_11911_11947[2] = null);
(statearr_11911_11947[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 18))
{var inst_11844 = (state_11874[2]);var state_11874__$1 = state_11874;var statearr_11912_11948 = state_11874__$1;(statearr_11912_11948[2] = inst_11844);
(statearr_11912_11948[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11875 === 8))
{var inst_11818 = (state_11874[12]);var inst_11817 = (state_11874[16]);var inst_11820 = (inst_11818 < inst_11817);var inst_11821 = inst_11820;var state_11874__$1 = state_11874;if(cljs.core.truth_(inst_11821))
{var statearr_11913_11949 = state_11874__$1;(statearr_11913_11949[1] = 10);
} else
{var statearr_11914_11950 = state_11874__$1;(statearr_11914_11950[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__6102__auto___11922,mults,ensure_mult,p))
;return ((function (switch__6087__auto__,c__6102__auto___11922,mults,ensure_mult,p){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_11918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11918[0] = state_machine__6088__auto__);
(statearr_11918[1] = 1);
return statearr_11918;
});
var state_machine__6088__auto____1 = (function (state_11874){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_11874);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e11919){if((e11919 instanceof Object))
{var ex__6091__auto__ = e11919;var statearr_11920_11951 = state_11874;(statearr_11920_11951[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11874);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11919;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11952 = state_11874;
state_11874 = G__11952;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_11874){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_11874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___11922,mults,ensure_mult,p))
})();var state__6104__auto__ = (function (){var statearr_11921 = f__6103__auto__.call(null);(statearr_11921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___11922);
return statearr_11921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___11922,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6102__auto___12089 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___12089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___12089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12059){var state_val_12060 = (state_12059[1]);if((state_val_12060 === 7))
{var state_12059__$1 = state_12059;var statearr_12061_12090 = state_12059__$1;(statearr_12061_12090[2] = null);
(statearr_12061_12090[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12060 === 1))
{var state_12059__$1 = state_12059;var statearr_12062_12091 = state_12059__$1;(statearr_12062_12091[2] = null);
(statearr_12062_12091[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12060 === 4))
{var inst_12023 = (state_12059[7]);var inst_12025 = (inst_12023 < cnt);var state_12059__$1 = state_12059;if(cljs.core.truth_(inst_12025))
{var statearr_12063_12092 = state_12059__$1;(statearr_12063_12092[1] = 6);
} else
{var statearr_12064_12093 = state_12059__$1;(statearr_12064_12093[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12060 === 15))
{var inst_12055 = (state_12059[2]);var state_12059__$1 = state_12059;var statearr_12065_12094 = state_12059__$1;(statearr_12065_12094[2] = inst_12055);
(statearr_12065_12094[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12060 === 13))
{var inst_12048 = cljs.core.async.close_BANG_.call(null,out);var state_12059__$1 = state_12059;var statearr_12066_12095 = state_12059__$1;(statearr_12066_12095[2] = inst_12048);
(statearr_12066_12095[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12060 === 6))
{var state_12059__$1 = state_12059;var statearr_12067_12096 = state_12059__$1;(statearr_12067_12096[2] = null);
(statearr_12067_12096[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12060 === 3))
{var inst_12057 = (state_12059[2]);var state_12059__$1 = state_12059;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12059__$1,inst_12057);
} else
{if((state_val_12060 === 12))
{var inst_12045 = (state_12059[8]);var inst_12045__$1 = (state_12059[2]);var inst_12046 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12045__$1);var state_12059__$1 = (function (){var statearr_12068 = state_12059;(statearr_12068[8] = inst_12045__$1);
return statearr_12068;
})();if(cljs.core.truth_(inst_12046))
{var statearr_12069_12097 = state_12059__$1;(statearr_12069_12097[1] = 13);
} else
{var statearr_12070_12098 = state_12059__$1;(statearr_12070_12098[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12060 === 2))
{var inst_12022 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12023 = 0;var state_12059__$1 = (function (){var statearr_12071 = state_12059;(statearr_12071[7] = inst_12023);
(statearr_12071[9] = inst_12022);
return statearr_12071;
})();var statearr_12072_12099 = state_12059__$1;(statearr_12072_12099[2] = null);
(statearr_12072_12099[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12060 === 11))
{var inst_12023 = (state_12059[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12059,10,Object,null,9);var inst_12032 = chs__$1.call(null,inst_12023);var inst_12033 = done.call(null,inst_12023);var inst_12034 = cljs.core.async.take_BANG_.call(null,inst_12032,inst_12033);var state_12059__$1 = state_12059;var statearr_12073_12100 = state_12059__$1;(statearr_12073_12100[2] = inst_12034);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12059__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12060 === 9))
{var inst_12023 = (state_12059[7]);var inst_12036 = (state_12059[2]);var inst_12037 = (inst_12023 + 1);var inst_12023__$1 = inst_12037;var state_12059__$1 = (function (){var statearr_12074 = state_12059;(statearr_12074[7] = inst_12023__$1);
(statearr_12074[10] = inst_12036);
return statearr_12074;
})();var statearr_12075_12101 = state_12059__$1;(statearr_12075_12101[2] = null);
(statearr_12075_12101[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12060 === 5))
{var inst_12043 = (state_12059[2]);var state_12059__$1 = (function (){var statearr_12076 = state_12059;(statearr_12076[11] = inst_12043);
return statearr_12076;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12059__$1,12,dchan);
} else
{if((state_val_12060 === 14))
{var inst_12045 = (state_12059[8]);var inst_12050 = cljs.core.apply.call(null,f,inst_12045);var state_12059__$1 = state_12059;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12059__$1,16,out,inst_12050);
} else
{if((state_val_12060 === 16))
{var inst_12052 = (state_12059[2]);var state_12059__$1 = (function (){var statearr_12077 = state_12059;(statearr_12077[12] = inst_12052);
return statearr_12077;
})();var statearr_12078_12102 = state_12059__$1;(statearr_12078_12102[2] = null);
(statearr_12078_12102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12060 === 10))
{var inst_12027 = (state_12059[2]);var inst_12028 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12059__$1 = (function (){var statearr_12079 = state_12059;(statearr_12079[13] = inst_12027);
return statearr_12079;
})();var statearr_12080_12103 = state_12059__$1;(statearr_12080_12103[2] = inst_12028);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12059__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12060 === 8))
{var inst_12041 = (state_12059[2]);var state_12059__$1 = state_12059;var statearr_12081_12104 = state_12059__$1;(statearr_12081_12104[2] = inst_12041);
(statearr_12081_12104[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__6102__auto___12089,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6087__auto__,c__6102__auto___12089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_12085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12085[0] = state_machine__6088__auto__);
(statearr_12085[1] = 1);
return statearr_12085;
});
var state_machine__6088__auto____1 = (function (state_12059){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_12059);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e12086){if((e12086 instanceof Object))
{var ex__6091__auto__ = e12086;var statearr_12087_12105 = state_12059;(statearr_12087_12105[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12059);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12086;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12106 = state_12059;
state_12059 = G__12106;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_12059){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_12059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___12089,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6104__auto__ = (function (){var statearr_12088 = f__6103__auto__.call(null);(statearr_12088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___12089);
return statearr_12088;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___12089,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6102__auto___12214 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___12214,out){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___12214,out){
return (function (state_12190){var state_val_12191 = (state_12190[1]);if((state_val_12191 === 7))
{var inst_12170 = (state_12190[7]);var inst_12169 = (state_12190[8]);var inst_12169__$1 = (state_12190[2]);var inst_12170__$1 = cljs.core.nth.call(null,inst_12169__$1,0,null);var inst_12171 = cljs.core.nth.call(null,inst_12169__$1,1,null);var inst_12172 = (inst_12170__$1 == null);var state_12190__$1 = (function (){var statearr_12192 = state_12190;(statearr_12192[9] = inst_12171);
(statearr_12192[7] = inst_12170__$1);
(statearr_12192[8] = inst_12169__$1);
return statearr_12192;
})();if(cljs.core.truth_(inst_12172))
{var statearr_12193_12215 = state_12190__$1;(statearr_12193_12215[1] = 8);
} else
{var statearr_12194_12216 = state_12190__$1;(statearr_12194_12216[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 1))
{var inst_12161 = cljs.core.vec.call(null,chs);var inst_12162 = inst_12161;var state_12190__$1 = (function (){var statearr_12195 = state_12190;(statearr_12195[10] = inst_12162);
return statearr_12195;
})();var statearr_12196_12217 = state_12190__$1;(statearr_12196_12217[2] = null);
(statearr_12196_12217[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 4))
{var inst_12162 = (state_12190[10]);var state_12190__$1 = state_12190;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12190__$1,7,inst_12162);
} else
{if((state_val_12191 === 6))
{var inst_12186 = (state_12190[2]);var state_12190__$1 = state_12190;var statearr_12197_12218 = state_12190__$1;(statearr_12197_12218[2] = inst_12186);
(statearr_12197_12218[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 3))
{var inst_12188 = (state_12190[2]);var state_12190__$1 = state_12190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12190__$1,inst_12188);
} else
{if((state_val_12191 === 2))
{var inst_12162 = (state_12190[10]);var inst_12164 = cljs.core.count.call(null,inst_12162);var inst_12165 = (inst_12164 > 0);var state_12190__$1 = state_12190;if(cljs.core.truth_(inst_12165))
{var statearr_12199_12219 = state_12190__$1;(statearr_12199_12219[1] = 4);
} else
{var statearr_12200_12220 = state_12190__$1;(statearr_12200_12220[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 11))
{var inst_12162 = (state_12190[10]);var inst_12179 = (state_12190[2]);var tmp12198 = inst_12162;var inst_12162__$1 = tmp12198;var state_12190__$1 = (function (){var statearr_12201 = state_12190;(statearr_12201[11] = inst_12179);
(statearr_12201[10] = inst_12162__$1);
return statearr_12201;
})();var statearr_12202_12221 = state_12190__$1;(statearr_12202_12221[2] = null);
(statearr_12202_12221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 9))
{var inst_12170 = (state_12190[7]);var state_12190__$1 = state_12190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12190__$1,11,out,inst_12170);
} else
{if((state_val_12191 === 5))
{var inst_12184 = cljs.core.async.close_BANG_.call(null,out);var state_12190__$1 = state_12190;var statearr_12203_12222 = state_12190__$1;(statearr_12203_12222[2] = inst_12184);
(statearr_12203_12222[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 10))
{var inst_12182 = (state_12190[2]);var state_12190__$1 = state_12190;var statearr_12204_12223 = state_12190__$1;(statearr_12204_12223[2] = inst_12182);
(statearr_12204_12223[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 8))
{var inst_12171 = (state_12190[9]);var inst_12170 = (state_12190[7]);var inst_12169 = (state_12190[8]);var inst_12162 = (state_12190[10]);var inst_12174 = (function (){var c = inst_12171;var v = inst_12170;var vec__12167 = inst_12169;var cs = inst_12162;return ((function (c,v,vec__12167,cs,inst_12171,inst_12170,inst_12169,inst_12162,state_val_12191,c__6102__auto___12214,out){
return (function (p1__12107_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12107_SHARP_);
});
;})(c,v,vec__12167,cs,inst_12171,inst_12170,inst_12169,inst_12162,state_val_12191,c__6102__auto___12214,out))
})();var inst_12175 = cljs.core.filterv.call(null,inst_12174,inst_12162);var inst_12162__$1 = inst_12175;var state_12190__$1 = (function (){var statearr_12205 = state_12190;(statearr_12205[10] = inst_12162__$1);
return statearr_12205;
})();var statearr_12206_12224 = state_12190__$1;(statearr_12206_12224[2] = null);
(statearr_12206_12224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__6102__auto___12214,out))
;return ((function (switch__6087__auto__,c__6102__auto___12214,out){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_12210 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12210[0] = state_machine__6088__auto__);
(statearr_12210[1] = 1);
return statearr_12210;
});
var state_machine__6088__auto____1 = (function (state_12190){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_12190);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e12211){if((e12211 instanceof Object))
{var ex__6091__auto__ = e12211;var statearr_12212_12225 = state_12190;(statearr_12212_12225[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12190);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12211;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12226 = state_12190;
state_12190 = G__12226;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_12190){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_12190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___12214,out))
})();var state__6104__auto__ = (function (){var statearr_12213 = f__6103__auto__.call(null);(statearr_12213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___12214);
return statearr_12213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___12214,out))
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6102__auto___12319 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___12319,out){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___12319,out){
return (function (state_12296){var state_val_12297 = (state_12296[1]);if((state_val_12297 === 7))
{var inst_12278 = (state_12296[7]);var inst_12278__$1 = (state_12296[2]);var inst_12279 = (inst_12278__$1 == null);var inst_12280 = cljs.core.not.call(null,inst_12279);var state_12296__$1 = (function (){var statearr_12298 = state_12296;(statearr_12298[7] = inst_12278__$1);
return statearr_12298;
})();if(inst_12280)
{var statearr_12299_12320 = state_12296__$1;(statearr_12299_12320[1] = 8);
} else
{var statearr_12300_12321 = state_12296__$1;(statearr_12300_12321[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12297 === 1))
{var inst_12273 = 0;var state_12296__$1 = (function (){var statearr_12301 = state_12296;(statearr_12301[8] = inst_12273);
return statearr_12301;
})();var statearr_12302_12322 = state_12296__$1;(statearr_12302_12322[2] = null);
(statearr_12302_12322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12297 === 4))
{var state_12296__$1 = state_12296;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12296__$1,7,ch);
} else
{if((state_val_12297 === 6))
{var inst_12291 = (state_12296[2]);var state_12296__$1 = state_12296;var statearr_12303_12323 = state_12296__$1;(statearr_12303_12323[2] = inst_12291);
(statearr_12303_12323[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12297 === 3))
{var inst_12293 = (state_12296[2]);var inst_12294 = cljs.core.async.close_BANG_.call(null,out);var state_12296__$1 = (function (){var statearr_12304 = state_12296;(statearr_12304[9] = inst_12293);
return statearr_12304;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12296__$1,inst_12294);
} else
{if((state_val_12297 === 2))
{var inst_12273 = (state_12296[8]);var inst_12275 = (inst_12273 < n);var state_12296__$1 = state_12296;if(cljs.core.truth_(inst_12275))
{var statearr_12305_12324 = state_12296__$1;(statearr_12305_12324[1] = 4);
} else
{var statearr_12306_12325 = state_12296__$1;(statearr_12306_12325[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12297 === 11))
{var inst_12273 = (state_12296[8]);var inst_12283 = (state_12296[2]);var inst_12284 = (inst_12273 + 1);var inst_12273__$1 = inst_12284;var state_12296__$1 = (function (){var statearr_12307 = state_12296;(statearr_12307[8] = inst_12273__$1);
(statearr_12307[10] = inst_12283);
return statearr_12307;
})();var statearr_12308_12326 = state_12296__$1;(statearr_12308_12326[2] = null);
(statearr_12308_12326[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12297 === 9))
{var state_12296__$1 = state_12296;var statearr_12309_12327 = state_12296__$1;(statearr_12309_12327[2] = null);
(statearr_12309_12327[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12297 === 5))
{var state_12296__$1 = state_12296;var statearr_12310_12328 = state_12296__$1;(statearr_12310_12328[2] = null);
(statearr_12310_12328[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12297 === 10))
{var inst_12288 = (state_12296[2]);var state_12296__$1 = state_12296;var statearr_12311_12329 = state_12296__$1;(statearr_12311_12329[2] = inst_12288);
(statearr_12311_12329[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12297 === 8))
{var inst_12278 = (state_12296[7]);var state_12296__$1 = state_12296;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12296__$1,11,out,inst_12278);
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
});})(c__6102__auto___12319,out))
;return ((function (switch__6087__auto__,c__6102__auto___12319,out){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_12315 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12315[0] = state_machine__6088__auto__);
(statearr_12315[1] = 1);
return statearr_12315;
});
var state_machine__6088__auto____1 = (function (state_12296){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_12296);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e12316){if((e12316 instanceof Object))
{var ex__6091__auto__ = e12316;var statearr_12317_12330 = state_12296;(statearr_12317_12330[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12296);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12316;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12331 = state_12296;
state_12296 = G__12331;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_12296){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_12296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___12319,out))
})();var state__6104__auto__ = (function (){var statearr_12318 = f__6103__auto__.call(null);(statearr_12318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___12319);
return statearr_12318;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___12319,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12339 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12339 = (function (ch,f,map_LT_,meta12340){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12340 = meta12340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12339.cljs$lang$type = true;
cljs.core.async.t12339.cljs$lang$ctorStr = "cljs.core.async/t12339";
cljs.core.async.t12339.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12339");
});
cljs.core.async.t12339.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t12339.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12342 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12342 = (function (fn1,_,meta12340,ch,f,map_LT_,meta12343){
this.fn1 = fn1;
this._ = _;
this.meta12340 = meta12340;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12343 = meta12343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12342.cljs$lang$type = true;
cljs.core.async.t12342.cljs$lang$ctorStr = "cljs.core.async/t12342";
cljs.core.async.t12342.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12342");
});})(___$1))
;
cljs.core.async.t12342.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12342.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__12332_SHARP_){return f1.call(null,(((p1__12332_SHARP_ == null))?null:self__.f.call(null,p1__12332_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t12342.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12344){var self__ = this;
var _12344__$1 = this;return self__.meta12343;
});})(___$1))
;
cljs.core.async.t12342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12344,meta12343__$1){var self__ = this;
var _12344__$1 = this;return (new cljs.core.async.t12342(self__.fn1,self__._,self__.meta12340,self__.ch,self__.f,self__.map_LT_,meta12343__$1));
});})(___$1))
;
cljs.core.async.__GT_t12342 = ((function (___$1){
return (function __GT_t12342(fn1__$1,___$2,meta12340__$1,ch__$2,f__$2,map_LT___$2,meta12343){return (new cljs.core.async.t12342(fn1__$1,___$2,meta12340__$1,ch__$2,f__$2,map_LT___$2,meta12343));
});})(___$1))
;
}
return (new cljs.core.async.t12342(fn1,___$1,self__.meta12340,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3469__auto__ = ret;if(cljs.core.truth_(and__3469__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3469__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12339.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12339.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12341){var self__ = this;
var _12341__$1 = this;return self__.meta12340;
});
cljs.core.async.t12339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12341,meta12340__$1){var self__ = this;
var _12341__$1 = this;return (new cljs.core.async.t12339(self__.ch,self__.f,self__.map_LT_,meta12340__$1));
});
cljs.core.async.__GT_t12339 = (function __GT_t12339(ch__$1,f__$1,map_LT___$1,meta12340){return (new cljs.core.async.t12339(ch__$1,f__$1,map_LT___$1,meta12340));
});
}
return (new cljs.core.async.t12339(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12348 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12348 = (function (ch,f,map_GT_,meta12349){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12349 = meta12349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12348.cljs$lang$type = true;
cljs.core.async.t12348.cljs$lang$ctorStr = "cljs.core.async/t12348";
cljs.core.async.t12348.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12348");
});
cljs.core.async.t12348.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12348.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t12348.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12348.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12348.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12348.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12350){var self__ = this;
var _12350__$1 = this;return self__.meta12349;
});
cljs.core.async.t12348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12350,meta12349__$1){var self__ = this;
var _12350__$1 = this;return (new cljs.core.async.t12348(self__.ch,self__.f,self__.map_GT_,meta12349__$1));
});
cljs.core.async.__GT_t12348 = (function __GT_t12348(ch__$1,f__$1,map_GT___$1,meta12349){return (new cljs.core.async.t12348(ch__$1,f__$1,map_GT___$1,meta12349));
});
}
return (new cljs.core.async.t12348(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12354 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12354 = (function (ch,p,filter_GT_,meta12355){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12355 = meta12355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12354.cljs$lang$type = true;
cljs.core.async.t12354.cljs$lang$ctorStr = "cljs.core.async/t12354";
cljs.core.async.t12354.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12354");
});
cljs.core.async.t12354.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12354.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t12354.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12354.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12354.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12354.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12354.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12356){var self__ = this;
var _12356__$1 = this;return self__.meta12355;
});
cljs.core.async.t12354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12356,meta12355__$1){var self__ = this;
var _12356__$1 = this;return (new cljs.core.async.t12354(self__.ch,self__.p,self__.filter_GT_,meta12355__$1));
});
cljs.core.async.__GT_t12354 = (function __GT_t12354(ch__$1,p__$1,filter_GT___$1,meta12355){return (new cljs.core.async.t12354(ch__$1,p__$1,filter_GT___$1,meta12355));
});
}
return (new cljs.core.async.t12354(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6102__auto___12439 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___12439,out){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___12439,out){
return (function (state_12418){var state_val_12419 = (state_12418[1]);if((state_val_12419 === 7))
{var inst_12414 = (state_12418[2]);var state_12418__$1 = state_12418;var statearr_12420_12440 = state_12418__$1;(statearr_12420_12440[2] = inst_12414);
(statearr_12420_12440[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 1))
{var state_12418__$1 = state_12418;var statearr_12421_12441 = state_12418__$1;(statearr_12421_12441[2] = null);
(statearr_12421_12441[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 4))
{var inst_12400 = (state_12418[7]);var inst_12400__$1 = (state_12418[2]);var inst_12401 = (inst_12400__$1 == null);var state_12418__$1 = (function (){var statearr_12422 = state_12418;(statearr_12422[7] = inst_12400__$1);
return statearr_12422;
})();if(cljs.core.truth_(inst_12401))
{var statearr_12423_12442 = state_12418__$1;(statearr_12423_12442[1] = 5);
} else
{var statearr_12424_12443 = state_12418__$1;(statearr_12424_12443[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 6))
{var inst_12400 = (state_12418[7]);var inst_12405 = p.call(null,inst_12400);var state_12418__$1 = state_12418;if(cljs.core.truth_(inst_12405))
{var statearr_12425_12444 = state_12418__$1;(statearr_12425_12444[1] = 8);
} else
{var statearr_12426_12445 = state_12418__$1;(statearr_12426_12445[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 3))
{var inst_12416 = (state_12418[2]);var state_12418__$1 = state_12418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12418__$1,inst_12416);
} else
{if((state_val_12419 === 2))
{var state_12418__$1 = state_12418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12418__$1,4,ch);
} else
{if((state_val_12419 === 11))
{var inst_12408 = (state_12418[2]);var state_12418__$1 = state_12418;var statearr_12427_12446 = state_12418__$1;(statearr_12427_12446[2] = inst_12408);
(statearr_12427_12446[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 9))
{var state_12418__$1 = state_12418;var statearr_12428_12447 = state_12418__$1;(statearr_12428_12447[2] = null);
(statearr_12428_12447[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 5))
{var inst_12403 = cljs.core.async.close_BANG_.call(null,out);var state_12418__$1 = state_12418;var statearr_12429_12448 = state_12418__$1;(statearr_12429_12448[2] = inst_12403);
(statearr_12429_12448[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 10))
{var inst_12411 = (state_12418[2]);var state_12418__$1 = (function (){var statearr_12430 = state_12418;(statearr_12430[8] = inst_12411);
return statearr_12430;
})();var statearr_12431_12449 = state_12418__$1;(statearr_12431_12449[2] = null);
(statearr_12431_12449[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 8))
{var inst_12400 = (state_12418[7]);var state_12418__$1 = state_12418;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12418__$1,11,out,inst_12400);
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
});})(c__6102__auto___12439,out))
;return ((function (switch__6087__auto__,c__6102__auto___12439,out){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_12435 = [null,null,null,null,null,null,null,null,null];(statearr_12435[0] = state_machine__6088__auto__);
(statearr_12435[1] = 1);
return statearr_12435;
});
var state_machine__6088__auto____1 = (function (state_12418){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_12418);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e12436){if((e12436 instanceof Object))
{var ex__6091__auto__ = e12436;var statearr_12437_12450 = state_12418;(statearr_12437_12450[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12418);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12451 = state_12418;
state_12418 = G__12451;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_12418){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_12418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___12439,out))
})();var state__6104__auto__ = (function (){var statearr_12438 = f__6103__auto__.call(null);(statearr_12438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___12439);
return statearr_12438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___12439,out))
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6102__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto__){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto__){
return (function (state_12617){var state_val_12618 = (state_12617[1]);if((state_val_12618 === 7))
{var inst_12613 = (state_12617[2]);var state_12617__$1 = state_12617;var statearr_12619_12660 = state_12617__$1;(statearr_12619_12660[2] = inst_12613);
(statearr_12619_12660[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 20))
{var inst_12583 = (state_12617[7]);var inst_12594 = (state_12617[2]);var inst_12595 = cljs.core.next.call(null,inst_12583);var inst_12569 = inst_12595;var inst_12570 = null;var inst_12571 = 0;var inst_12572 = 0;var state_12617__$1 = (function (){var statearr_12620 = state_12617;(statearr_12620[8] = inst_12594);
(statearr_12620[9] = inst_12569);
(statearr_12620[10] = inst_12572);
(statearr_12620[11] = inst_12571);
(statearr_12620[12] = inst_12570);
return statearr_12620;
})();var statearr_12621_12661 = state_12617__$1;(statearr_12621_12661[2] = null);
(statearr_12621_12661[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 1))
{var state_12617__$1 = state_12617;var statearr_12622_12662 = state_12617__$1;(statearr_12622_12662[2] = null);
(statearr_12622_12662[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 4))
{var inst_12558 = (state_12617[13]);var inst_12558__$1 = (state_12617[2]);var inst_12559 = (inst_12558__$1 == null);var state_12617__$1 = (function (){var statearr_12623 = state_12617;(statearr_12623[13] = inst_12558__$1);
return statearr_12623;
})();if(cljs.core.truth_(inst_12559))
{var statearr_12624_12663 = state_12617__$1;(statearr_12624_12663[1] = 5);
} else
{var statearr_12625_12664 = state_12617__$1;(statearr_12625_12664[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 15))
{var state_12617__$1 = state_12617;var statearr_12629_12665 = state_12617__$1;(statearr_12629_12665[2] = null);
(statearr_12629_12665[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 21))
{var state_12617__$1 = state_12617;var statearr_12630_12666 = state_12617__$1;(statearr_12630_12666[2] = null);
(statearr_12630_12666[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 13))
{var inst_12569 = (state_12617[9]);var inst_12572 = (state_12617[10]);var inst_12571 = (state_12617[11]);var inst_12570 = (state_12617[12]);var inst_12579 = (state_12617[2]);var inst_12580 = (inst_12572 + 1);var tmp12626 = inst_12569;var tmp12627 = inst_12571;var tmp12628 = inst_12570;var inst_12569__$1 = tmp12626;var inst_12570__$1 = tmp12628;var inst_12571__$1 = tmp12627;var inst_12572__$1 = inst_12580;var state_12617__$1 = (function (){var statearr_12631 = state_12617;(statearr_12631[9] = inst_12569__$1);
(statearr_12631[10] = inst_12572__$1);
(statearr_12631[14] = inst_12579);
(statearr_12631[11] = inst_12571__$1);
(statearr_12631[12] = inst_12570__$1);
return statearr_12631;
})();var statearr_12632_12667 = state_12617__$1;(statearr_12632_12667[2] = null);
(statearr_12632_12667[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 22))
{var state_12617__$1 = state_12617;var statearr_12633_12668 = state_12617__$1;(statearr_12633_12668[2] = null);
(statearr_12633_12668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 6))
{var inst_12558 = (state_12617[13]);var inst_12567 = f.call(null,inst_12558);var inst_12568 = cljs.core.seq.call(null,inst_12567);var inst_12569 = inst_12568;var inst_12570 = null;var inst_12571 = 0;var inst_12572 = 0;var state_12617__$1 = (function (){var statearr_12634 = state_12617;(statearr_12634[9] = inst_12569);
(statearr_12634[10] = inst_12572);
(statearr_12634[11] = inst_12571);
(statearr_12634[12] = inst_12570);
return statearr_12634;
})();var statearr_12635_12669 = state_12617__$1;(statearr_12635_12669[2] = null);
(statearr_12635_12669[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 17))
{var inst_12583 = (state_12617[7]);var inst_12587 = cljs.core.chunk_first.call(null,inst_12583);var inst_12588 = cljs.core.chunk_rest.call(null,inst_12583);var inst_12589 = cljs.core.count.call(null,inst_12587);var inst_12569 = inst_12588;var inst_12570 = inst_12587;var inst_12571 = inst_12589;var inst_12572 = 0;var state_12617__$1 = (function (){var statearr_12636 = state_12617;(statearr_12636[9] = inst_12569);
(statearr_12636[10] = inst_12572);
(statearr_12636[11] = inst_12571);
(statearr_12636[12] = inst_12570);
return statearr_12636;
})();var statearr_12637_12670 = state_12617__$1;(statearr_12637_12670[2] = null);
(statearr_12637_12670[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 3))
{var inst_12615 = (state_12617[2]);var state_12617__$1 = state_12617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12617__$1,inst_12615);
} else
{if((state_val_12618 === 12))
{var inst_12603 = (state_12617[2]);var state_12617__$1 = state_12617;var statearr_12638_12671 = state_12617__$1;(statearr_12638_12671[2] = inst_12603);
(statearr_12638_12671[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 2))
{var state_12617__$1 = state_12617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12617__$1,4,in$);
} else
{if((state_val_12618 === 23))
{var inst_12611 = (state_12617[2]);var state_12617__$1 = state_12617;var statearr_12639_12672 = state_12617__$1;(statearr_12639_12672[2] = inst_12611);
(statearr_12639_12672[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 19))
{var inst_12598 = (state_12617[2]);var state_12617__$1 = state_12617;var statearr_12640_12673 = state_12617__$1;(statearr_12640_12673[2] = inst_12598);
(statearr_12640_12673[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 11))
{var inst_12569 = (state_12617[9]);var inst_12583 = (state_12617[7]);var inst_12583__$1 = cljs.core.seq.call(null,inst_12569);var state_12617__$1 = (function (){var statearr_12641 = state_12617;(statearr_12641[7] = inst_12583__$1);
return statearr_12641;
})();if(inst_12583__$1)
{var statearr_12642_12674 = state_12617__$1;(statearr_12642_12674[1] = 14);
} else
{var statearr_12643_12675 = state_12617__$1;(statearr_12643_12675[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 9))
{var inst_12605 = (state_12617[2]);var inst_12606 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_12617__$1 = (function (){var statearr_12644 = state_12617;(statearr_12644[15] = inst_12605);
return statearr_12644;
})();if(cljs.core.truth_(inst_12606))
{var statearr_12645_12676 = state_12617__$1;(statearr_12645_12676[1] = 21);
} else
{var statearr_12646_12677 = state_12617__$1;(statearr_12646_12677[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 5))
{var inst_12561 = cljs.core.async.close_BANG_.call(null,out);var state_12617__$1 = state_12617;var statearr_12647_12678 = state_12617__$1;(statearr_12647_12678[2] = inst_12561);
(statearr_12647_12678[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 14))
{var inst_12583 = (state_12617[7]);var inst_12585 = cljs.core.chunked_seq_QMARK_.call(null,inst_12583);var state_12617__$1 = state_12617;if(inst_12585)
{var statearr_12648_12679 = state_12617__$1;(statearr_12648_12679[1] = 17);
} else
{var statearr_12649_12680 = state_12617__$1;(statearr_12649_12680[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 16))
{var inst_12601 = (state_12617[2]);var state_12617__$1 = state_12617;var statearr_12650_12681 = state_12617__$1;(statearr_12650_12681[2] = inst_12601);
(statearr_12650_12681[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12618 === 10))
{var inst_12572 = (state_12617[10]);var inst_12570 = (state_12617[12]);var inst_12577 = cljs.core._nth.call(null,inst_12570,inst_12572);var state_12617__$1 = state_12617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12617__$1,13,out,inst_12577);
} else
{if((state_val_12618 === 18))
{var inst_12583 = (state_12617[7]);var inst_12592 = cljs.core.first.call(null,inst_12583);var state_12617__$1 = state_12617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12617__$1,20,out,inst_12592);
} else
{if((state_val_12618 === 8))
{var inst_12572 = (state_12617[10]);var inst_12571 = (state_12617[11]);var inst_12574 = (inst_12572 < inst_12571);var inst_12575 = inst_12574;var state_12617__$1 = state_12617;if(cljs.core.truth_(inst_12575))
{var statearr_12651_12682 = state_12617__$1;(statearr_12651_12682[1] = 10);
} else
{var statearr_12652_12683 = state_12617__$1;(statearr_12652_12683[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__6088__auto____0 = (function (){var statearr_12656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12656[0] = state_machine__6088__auto__);
(statearr_12656[1] = 1);
return statearr_12656;
});
var state_machine__6088__auto____1 = (function (state_12617){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_12617);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e12657){if((e12657 instanceof Object))
{var ex__6091__auto__ = e12657;var statearr_12658_12684 = state_12617;(statearr_12658_12684[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12617);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12657;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12685 = state_12617;
state_12617 = G__12685;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_12617){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_12617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto__))
})();var state__6104__auto__ = (function (){var statearr_12659 = f__6103__auto__.call(null);(statearr_12659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto__);
return statearr_12659;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto__))
);
return c__6102__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6102__auto___12782 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___12782,out){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___12782,out){
return (function (state_12757){var state_val_12758 = (state_12757[1]);if((state_val_12758 === 7))
{var inst_12752 = (state_12757[2]);var state_12757__$1 = state_12757;var statearr_12759_12783 = state_12757__$1;(statearr_12759_12783[2] = inst_12752);
(statearr_12759_12783[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 1))
{var inst_12734 = null;var state_12757__$1 = (function (){var statearr_12760 = state_12757;(statearr_12760[7] = inst_12734);
return statearr_12760;
})();var statearr_12761_12784 = state_12757__$1;(statearr_12761_12784[2] = null);
(statearr_12761_12784[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 4))
{var inst_12737 = (state_12757[8]);var inst_12737__$1 = (state_12757[2]);var inst_12738 = (inst_12737__$1 == null);var inst_12739 = cljs.core.not.call(null,inst_12738);var state_12757__$1 = (function (){var statearr_12762 = state_12757;(statearr_12762[8] = inst_12737__$1);
return statearr_12762;
})();if(inst_12739)
{var statearr_12763_12785 = state_12757__$1;(statearr_12763_12785[1] = 5);
} else
{var statearr_12764_12786 = state_12757__$1;(statearr_12764_12786[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 6))
{var state_12757__$1 = state_12757;var statearr_12765_12787 = state_12757__$1;(statearr_12765_12787[2] = null);
(statearr_12765_12787[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 3))
{var inst_12754 = (state_12757[2]);var inst_12755 = cljs.core.async.close_BANG_.call(null,out);var state_12757__$1 = (function (){var statearr_12766 = state_12757;(statearr_12766[9] = inst_12754);
return statearr_12766;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12757__$1,inst_12755);
} else
{if((state_val_12758 === 2))
{var state_12757__$1 = state_12757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12757__$1,4,ch);
} else
{if((state_val_12758 === 11))
{var inst_12737 = (state_12757[8]);var inst_12746 = (state_12757[2]);var inst_12734 = inst_12737;var state_12757__$1 = (function (){var statearr_12767 = state_12757;(statearr_12767[10] = inst_12746);
(statearr_12767[7] = inst_12734);
return statearr_12767;
})();var statearr_12768_12788 = state_12757__$1;(statearr_12768_12788[2] = null);
(statearr_12768_12788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 9))
{var inst_12737 = (state_12757[8]);var state_12757__$1 = state_12757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12757__$1,11,out,inst_12737);
} else
{if((state_val_12758 === 5))
{var inst_12737 = (state_12757[8]);var inst_12734 = (state_12757[7]);var inst_12741 = cljs.core._EQ_.call(null,inst_12737,inst_12734);var state_12757__$1 = state_12757;if(inst_12741)
{var statearr_12770_12789 = state_12757__$1;(statearr_12770_12789[1] = 8);
} else
{var statearr_12771_12790 = state_12757__$1;(statearr_12771_12790[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 10))
{var inst_12749 = (state_12757[2]);var state_12757__$1 = state_12757;var statearr_12772_12791 = state_12757__$1;(statearr_12772_12791[2] = inst_12749);
(statearr_12772_12791[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 8))
{var inst_12734 = (state_12757[7]);var tmp12769 = inst_12734;var inst_12734__$1 = tmp12769;var state_12757__$1 = (function (){var statearr_12773 = state_12757;(statearr_12773[7] = inst_12734__$1);
return statearr_12773;
})();var statearr_12774_12792 = state_12757__$1;(statearr_12774_12792[2] = null);
(statearr_12774_12792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__6102__auto___12782,out))
;return ((function (switch__6087__auto__,c__6102__auto___12782,out){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_12778 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12778[0] = state_machine__6088__auto__);
(statearr_12778[1] = 1);
return statearr_12778;
});
var state_machine__6088__auto____1 = (function (state_12757){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_12757);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e12779){if((e12779 instanceof Object))
{var ex__6091__auto__ = e12779;var statearr_12780_12793 = state_12757;(statearr_12780_12793[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12779;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12794 = state_12757;
state_12757 = G__12794;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_12757){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_12757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___12782,out))
})();var state__6104__auto__ = (function (){var statearr_12781 = f__6103__auto__.call(null);(statearr_12781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___12782);
return statearr_12781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___12782,out))
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6102__auto___12929 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___12929,out){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___12929,out){
return (function (state_12899){var state_val_12900 = (state_12899[1]);if((state_val_12900 === 7))
{var inst_12895 = (state_12899[2]);var state_12899__$1 = state_12899;var statearr_12901_12930 = state_12899__$1;(statearr_12901_12930[2] = inst_12895);
(statearr_12901_12930[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12900 === 1))
{var inst_12862 = (new Array(n));var inst_12863 = inst_12862;var inst_12864 = 0;var state_12899__$1 = (function (){var statearr_12902 = state_12899;(statearr_12902[7] = inst_12864);
(statearr_12902[8] = inst_12863);
return statearr_12902;
})();var statearr_12903_12931 = state_12899__$1;(statearr_12903_12931[2] = null);
(statearr_12903_12931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12900 === 4))
{var inst_12867 = (state_12899[9]);var inst_12867__$1 = (state_12899[2]);var inst_12868 = (inst_12867__$1 == null);var inst_12869 = cljs.core.not.call(null,inst_12868);var state_12899__$1 = (function (){var statearr_12904 = state_12899;(statearr_12904[9] = inst_12867__$1);
return statearr_12904;
})();if(inst_12869)
{var statearr_12905_12932 = state_12899__$1;(statearr_12905_12932[1] = 5);
} else
{var statearr_12906_12933 = state_12899__$1;(statearr_12906_12933[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12900 === 15))
{var inst_12889 = (state_12899[2]);var state_12899__$1 = state_12899;var statearr_12907_12934 = state_12899__$1;(statearr_12907_12934[2] = inst_12889);
(statearr_12907_12934[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12900 === 13))
{var state_12899__$1 = state_12899;var statearr_12908_12935 = state_12899__$1;(statearr_12908_12935[2] = null);
(statearr_12908_12935[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12900 === 6))
{var inst_12864 = (state_12899[7]);var inst_12885 = (inst_12864 > 0);var state_12899__$1 = state_12899;if(cljs.core.truth_(inst_12885))
{var statearr_12909_12936 = state_12899__$1;(statearr_12909_12936[1] = 12);
} else
{var statearr_12910_12937 = state_12899__$1;(statearr_12910_12937[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12900 === 3))
{var inst_12897 = (state_12899[2]);var state_12899__$1 = state_12899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12899__$1,inst_12897);
} else
{if((state_val_12900 === 12))
{var inst_12863 = (state_12899[8]);var inst_12887 = cljs.core.vec.call(null,inst_12863);var state_12899__$1 = state_12899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12899__$1,15,out,inst_12887);
} else
{if((state_val_12900 === 2))
{var state_12899__$1 = state_12899;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12899__$1,4,ch);
} else
{if((state_val_12900 === 11))
{var inst_12879 = (state_12899[2]);var inst_12880 = (new Array(n));var inst_12863 = inst_12880;var inst_12864 = 0;var state_12899__$1 = (function (){var statearr_12911 = state_12899;(statearr_12911[10] = inst_12879);
(statearr_12911[7] = inst_12864);
(statearr_12911[8] = inst_12863);
return statearr_12911;
})();var statearr_12912_12938 = state_12899__$1;(statearr_12912_12938[2] = null);
(statearr_12912_12938[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12900 === 9))
{var inst_12863 = (state_12899[8]);var inst_12877 = cljs.core.vec.call(null,inst_12863);var state_12899__$1 = state_12899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12899__$1,11,out,inst_12877);
} else
{if((state_val_12900 === 5))
{var inst_12864 = (state_12899[7]);var inst_12867 = (state_12899[9]);var inst_12863 = (state_12899[8]);var inst_12872 = (state_12899[11]);var inst_12871 = (inst_12863[inst_12864] = inst_12867);var inst_12872__$1 = (inst_12864 + 1);var inst_12873 = (inst_12872__$1 < n);var state_12899__$1 = (function (){var statearr_12913 = state_12899;(statearr_12913[12] = inst_12871);
(statearr_12913[11] = inst_12872__$1);
return statearr_12913;
})();if(cljs.core.truth_(inst_12873))
{var statearr_12914_12939 = state_12899__$1;(statearr_12914_12939[1] = 8);
} else
{var statearr_12915_12940 = state_12899__$1;(statearr_12915_12940[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12900 === 14))
{var inst_12892 = (state_12899[2]);var inst_12893 = cljs.core.async.close_BANG_.call(null,out);var state_12899__$1 = (function (){var statearr_12917 = state_12899;(statearr_12917[13] = inst_12892);
return statearr_12917;
})();var statearr_12918_12941 = state_12899__$1;(statearr_12918_12941[2] = inst_12893);
(statearr_12918_12941[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12900 === 10))
{var inst_12883 = (state_12899[2]);var state_12899__$1 = state_12899;var statearr_12919_12942 = state_12899__$1;(statearr_12919_12942[2] = inst_12883);
(statearr_12919_12942[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12900 === 8))
{var inst_12863 = (state_12899[8]);var inst_12872 = (state_12899[11]);var tmp12916 = inst_12863;var inst_12863__$1 = tmp12916;var inst_12864 = inst_12872;var state_12899__$1 = (function (){var statearr_12920 = state_12899;(statearr_12920[7] = inst_12864);
(statearr_12920[8] = inst_12863__$1);
return statearr_12920;
})();var statearr_12921_12943 = state_12899__$1;(statearr_12921_12943[2] = null);
(statearr_12921_12943[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__6102__auto___12929,out))
;return ((function (switch__6087__auto__,c__6102__auto___12929,out){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_12925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12925[0] = state_machine__6088__auto__);
(statearr_12925[1] = 1);
return statearr_12925;
});
var state_machine__6088__auto____1 = (function (state_12899){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_12899);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e12926){if((e12926 instanceof Object))
{var ex__6091__auto__ = e12926;var statearr_12927_12944 = state_12899;(statearr_12927_12944[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12899);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12945 = state_12899;
state_12899 = G__12945;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_12899){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_12899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___12929,out))
})();var state__6104__auto__ = (function (){var statearr_12928 = f__6103__auto__.call(null);(statearr_12928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___12929);
return statearr_12928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___12929,out))
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6102__auto___13088 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___13088,out){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___13088,out){
return (function (state_13058){var state_val_13059 = (state_13058[1]);if((state_val_13059 === 7))
{var inst_13054 = (state_13058[2]);var state_13058__$1 = state_13058;var statearr_13060_13089 = state_13058__$1;(statearr_13060_13089[2] = inst_13054);
(statearr_13060_13089[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13059 === 1))
{var inst_13017 = [];var inst_13018 = inst_13017;var inst_13019 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13058__$1 = (function (){var statearr_13061 = state_13058;(statearr_13061[7] = inst_13019);
(statearr_13061[8] = inst_13018);
return statearr_13061;
})();var statearr_13062_13090 = state_13058__$1;(statearr_13062_13090[2] = null);
(statearr_13062_13090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13059 === 4))
{var inst_13022 = (state_13058[9]);var inst_13022__$1 = (state_13058[2]);var inst_13023 = (inst_13022__$1 == null);var inst_13024 = cljs.core.not.call(null,inst_13023);var state_13058__$1 = (function (){var statearr_13063 = state_13058;(statearr_13063[9] = inst_13022__$1);
return statearr_13063;
})();if(inst_13024)
{var statearr_13064_13091 = state_13058__$1;(statearr_13064_13091[1] = 5);
} else
{var statearr_13065_13092 = state_13058__$1;(statearr_13065_13092[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13059 === 15))
{var inst_13048 = (state_13058[2]);var state_13058__$1 = state_13058;var statearr_13066_13093 = state_13058__$1;(statearr_13066_13093[2] = inst_13048);
(statearr_13066_13093[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13059 === 13))
{var state_13058__$1 = state_13058;var statearr_13067_13094 = state_13058__$1;(statearr_13067_13094[2] = null);
(statearr_13067_13094[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13059 === 6))
{var inst_13018 = (state_13058[8]);var inst_13043 = inst_13018.length;var inst_13044 = (inst_13043 > 0);var state_13058__$1 = state_13058;if(cljs.core.truth_(inst_13044))
{var statearr_13068_13095 = state_13058__$1;(statearr_13068_13095[1] = 12);
} else
{var statearr_13069_13096 = state_13058__$1;(statearr_13069_13096[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13059 === 3))
{var inst_13056 = (state_13058[2]);var state_13058__$1 = state_13058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13058__$1,inst_13056);
} else
{if((state_val_13059 === 12))
{var inst_13018 = (state_13058[8]);var inst_13046 = cljs.core.vec.call(null,inst_13018);var state_13058__$1 = state_13058;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13058__$1,15,out,inst_13046);
} else
{if((state_val_13059 === 2))
{var state_13058__$1 = state_13058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13058__$1,4,ch);
} else
{if((state_val_13059 === 11))
{var inst_13026 = (state_13058[10]);var inst_13022 = (state_13058[9]);var inst_13036 = (state_13058[2]);var inst_13037 = [];var inst_13038 = inst_13037.push(inst_13022);var inst_13018 = inst_13037;var inst_13019 = inst_13026;var state_13058__$1 = (function (){var statearr_13070 = state_13058;(statearr_13070[7] = inst_13019);
(statearr_13070[11] = inst_13038);
(statearr_13070[12] = inst_13036);
(statearr_13070[8] = inst_13018);
return statearr_13070;
})();var statearr_13071_13097 = state_13058__$1;(statearr_13071_13097[2] = null);
(statearr_13071_13097[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13059 === 9))
{var inst_13018 = (state_13058[8]);var inst_13034 = cljs.core.vec.call(null,inst_13018);var state_13058__$1 = state_13058;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13058__$1,11,out,inst_13034);
} else
{if((state_val_13059 === 5))
{var inst_13019 = (state_13058[7]);var inst_13026 = (state_13058[10]);var inst_13022 = (state_13058[9]);var inst_13026__$1 = f.call(null,inst_13022);var inst_13027 = cljs.core._EQ_.call(null,inst_13026__$1,inst_13019);var inst_13028 = cljs.core.keyword_identical_QMARK_.call(null,inst_13019,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13029 = (inst_13027) || (inst_13028);var state_13058__$1 = (function (){var statearr_13072 = state_13058;(statearr_13072[10] = inst_13026__$1);
return statearr_13072;
})();if(cljs.core.truth_(inst_13029))
{var statearr_13073_13098 = state_13058__$1;(statearr_13073_13098[1] = 8);
} else
{var statearr_13074_13099 = state_13058__$1;(statearr_13074_13099[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13059 === 14))
{var inst_13051 = (state_13058[2]);var inst_13052 = cljs.core.async.close_BANG_.call(null,out);var state_13058__$1 = (function (){var statearr_13076 = state_13058;(statearr_13076[13] = inst_13051);
return statearr_13076;
})();var statearr_13077_13100 = state_13058__$1;(statearr_13077_13100[2] = inst_13052);
(statearr_13077_13100[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13059 === 10))
{var inst_13041 = (state_13058[2]);var state_13058__$1 = state_13058;var statearr_13078_13101 = state_13058__$1;(statearr_13078_13101[2] = inst_13041);
(statearr_13078_13101[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13059 === 8))
{var inst_13026 = (state_13058[10]);var inst_13022 = (state_13058[9]);var inst_13018 = (state_13058[8]);var inst_13031 = inst_13018.push(inst_13022);var tmp13075 = inst_13018;var inst_13018__$1 = tmp13075;var inst_13019 = inst_13026;var state_13058__$1 = (function (){var statearr_13079 = state_13058;(statearr_13079[7] = inst_13019);
(statearr_13079[14] = inst_13031);
(statearr_13079[8] = inst_13018__$1);
return statearr_13079;
})();var statearr_13080_13102 = state_13058__$1;(statearr_13080_13102[2] = null);
(statearr_13080_13102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__6102__auto___13088,out))
;return ((function (switch__6087__auto__,c__6102__auto___13088,out){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_13084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13084[0] = state_machine__6088__auto__);
(statearr_13084[1] = 1);
return statearr_13084;
});
var state_machine__6088__auto____1 = (function (state_13058){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_13058);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e13085){if((e13085 instanceof Object))
{var ex__6091__auto__ = e13085;var statearr_13086_13103 = state_13058;(statearr_13086_13103[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13058);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13104 = state_13058;
state_13058 = G__13104;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_13058){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_13058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___13088,out))
})();var state__6104__auto__ = (function (){var statearr_13087 = f__6103__auto__.call(null);(statearr_13087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___13088);
return statearr_13087;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___13088,out))
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

//# sourceMappingURL=async.js.map