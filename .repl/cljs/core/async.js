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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11923 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11923 = (function (f,fn_handler,meta11924){
this.f = f;
this.fn_handler = fn_handler;
this.meta11924 = meta11924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11923.cljs$lang$type = true;
cljs.core.async.t11923.cljs$lang$ctorStr = "cljs.core.async/t11923";
cljs.core.async.t11923.cljs$lang$ctorPrWriter = (function (this__6771__auto__,writer__6772__auto__,opt__6773__auto__){return cljs.core._write.call(null,writer__6772__auto__,"cljs.core.async/t11923");
});
cljs.core.async.t11923.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11925){var self__ = this;
var _11925__$1 = this;return self__.meta11924;
});
cljs.core.async.t11923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11925,meta11924__$1){var self__ = this;
var _11925__$1 = this;return (new cljs.core.async.t11923(self__.f,self__.fn_handler,meta11924__$1));
});
cljs.core.async.__GT_t11923 = (function __GT_t11923(f__$1,fn_handler__$1,meta11924){return (new cljs.core.async.t11923(f__$1,fn_handler__$1,meta11924));
});
}
return (new cljs.core.async.t11923(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11927 = buff;if(G__11927)
{var bit__6854__auto__ = null;if(cljs.core.truth_((function (){var or__6204__auto__ = bit__6854__auto__;if(cljs.core.truth_(or__6204__auto__))
{return or__6204__auto__;
} else
{return G__11927.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11927.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11927);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11927);
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
{var val_11928 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11928);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11928,ret){
return (function (){return fn1.call(null,val_11928);
});})(val_11928,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7052__auto___11929 = n;var x_11930 = 0;while(true){
if((x_11930 < n__7052__auto___11929))
{(a[x_11930] = 0);
{
var G__11931 = (x_11930 + 1);
x_11930 = G__11931;
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
var G__11932 = (i + 1);
i = G__11932;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11936 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11936 = (function (flag,alt_flag,meta11937){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11937 = meta11937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11936.cljs$lang$type = true;
cljs.core.async.t11936.cljs$lang$ctorStr = "cljs.core.async/t11936";
cljs.core.async.t11936.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6771__auto__,writer__6772__auto__,opt__6773__auto__){return cljs.core._write.call(null,writer__6772__auto__,"cljs.core.async/t11936");
});})(flag))
;
cljs.core.async.t11936.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11936.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11936.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11938){var self__ = this;
var _11938__$1 = this;return self__.meta11937;
});})(flag))
;
cljs.core.async.t11936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11938,meta11937__$1){var self__ = this;
var _11938__$1 = this;return (new cljs.core.async.t11936(self__.flag,self__.alt_flag,meta11937__$1));
});})(flag))
;
cljs.core.async.__GT_t11936 = ((function (flag){
return (function __GT_t11936(flag__$1,alt_flag__$1,meta11937){return (new cljs.core.async.t11936(flag__$1,alt_flag__$1,meta11937));
});})(flag))
;
}
return (new cljs.core.async.t11936(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11942 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11942 = (function (cb,flag,alt_handler,meta11943){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11943 = meta11943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11942.cljs$lang$type = true;
cljs.core.async.t11942.cljs$lang$ctorStr = "cljs.core.async/t11942";
cljs.core.async.t11942.cljs$lang$ctorPrWriter = (function (this__6771__auto__,writer__6772__auto__,opt__6773__auto__){return cljs.core._write.call(null,writer__6772__auto__,"cljs.core.async/t11942");
});
cljs.core.async.t11942.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11944){var self__ = this;
var _11944__$1 = this;return self__.meta11943;
});
cljs.core.async.t11942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11944,meta11943__$1){var self__ = this;
var _11944__$1 = this;return (new cljs.core.async.t11942(self__.cb,self__.flag,self__.alt_handler,meta11943__$1));
});
cljs.core.async.__GT_t11942 = (function __GT_t11942(cb__$1,flag__$1,alt_handler__$1,meta11943){return (new cljs.core.async.t11942(cb__$1,flag__$1,alt_handler__$1,meta11943));
});
}
return (new cljs.core.async.t11942(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11945_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11945_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11946_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11946_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6204__auto__ = wport;if(cljs.core.truth_(or__6204__auto__))
{return or__6204__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11947 = (i + 1);
i = G__11947;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__6204__auto__ = ret;if(cljs.core.truth_(or__6204__auto__))
{return or__6204__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__6192__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__6192__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__6192__auto__;
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
var alts_BANG___delegate = function (ports,p__11948){var map__11950 = p__11948;var map__11950__$1 = ((cljs.core.seq_QMARK_.call(null,map__11950))?cljs.core.apply.call(null,cljs.core.hash_map,map__11950):map__11950);var opts = map__11950__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11948 = null;if (arguments.length > 1) {
  p__11948 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11948);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11951){
var ports = cljs.core.first(arglist__11951);
var p__11948 = cljs.core.rest(arglist__11951);
return alts_BANG___delegate(ports,p__11948);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8952__auto___12046 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___12046){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___12046){
return (function (state_12022){var state_val_12023 = (state_12022[1]);if((state_val_12023 === 7))
{var inst_12018 = (state_12022[2]);var state_12022__$1 = state_12022;var statearr_12024_12047 = state_12022__$1;(statearr_12024_12047[2] = inst_12018);
(statearr_12024_12047[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12023 === 1))
{var state_12022__$1 = state_12022;var statearr_12025_12048 = state_12022__$1;(statearr_12025_12048[2] = null);
(statearr_12025_12048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12023 === 4))
{var inst_12001 = (state_12022[7]);var inst_12001__$1 = (state_12022[2]);var inst_12002 = (inst_12001__$1 == null);var state_12022__$1 = (function (){var statearr_12026 = state_12022;(statearr_12026[7] = inst_12001__$1);
return statearr_12026;
})();if(cljs.core.truth_(inst_12002))
{var statearr_12027_12049 = state_12022__$1;(statearr_12027_12049[1] = 5);
} else
{var statearr_12028_12050 = state_12022__$1;(statearr_12028_12050[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12023 === 13))
{var state_12022__$1 = state_12022;var statearr_12029_12051 = state_12022__$1;(statearr_12029_12051[2] = null);
(statearr_12029_12051[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12023 === 6))
{var inst_12001 = (state_12022[7]);var state_12022__$1 = state_12022;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12022__$1,11,to,inst_12001);
} else
{if((state_val_12023 === 3))
{var inst_12020 = (state_12022[2]);var state_12022__$1 = state_12022;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12022__$1,inst_12020);
} else
{if((state_val_12023 === 12))
{var state_12022__$1 = state_12022;var statearr_12030_12052 = state_12022__$1;(statearr_12030_12052[2] = null);
(statearr_12030_12052[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12023 === 2))
{var state_12022__$1 = state_12022;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12022__$1,4,from);
} else
{if((state_val_12023 === 11))
{var inst_12011 = (state_12022[2]);var state_12022__$1 = state_12022;if(cljs.core.truth_(inst_12011))
{var statearr_12031_12053 = state_12022__$1;(statearr_12031_12053[1] = 12);
} else
{var statearr_12032_12054 = state_12022__$1;(statearr_12032_12054[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12023 === 9))
{var state_12022__$1 = state_12022;var statearr_12033_12055 = state_12022__$1;(statearr_12033_12055[2] = null);
(statearr_12033_12055[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12023 === 5))
{var state_12022__$1 = state_12022;if(cljs.core.truth_(close_QMARK_))
{var statearr_12034_12056 = state_12022__$1;(statearr_12034_12056[1] = 8);
} else
{var statearr_12035_12057 = state_12022__$1;(statearr_12035_12057[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12023 === 14))
{var inst_12016 = (state_12022[2]);var state_12022__$1 = state_12022;var statearr_12036_12058 = state_12022__$1;(statearr_12036_12058[2] = inst_12016);
(statearr_12036_12058[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12023 === 10))
{var inst_12008 = (state_12022[2]);var state_12022__$1 = state_12022;var statearr_12037_12059 = state_12022__$1;(statearr_12037_12059[2] = inst_12008);
(statearr_12037_12059[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12023 === 8))
{var inst_12005 = cljs.core.async.close_BANG_.call(null,to);var state_12022__$1 = state_12022;var statearr_12038_12060 = state_12022__$1;(statearr_12038_12060[2] = inst_12005);
(statearr_12038_12060[1] = 10);
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
});})(c__8952__auto___12046))
;return ((function (switch__8888__auto__,c__8952__auto___12046){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_12042 = [null,null,null,null,null,null,null,null];(statearr_12042[0] = state_machine__8889__auto__);
(statearr_12042[1] = 1);
return statearr_12042;
});
var state_machine__8889__auto____1 = (function (state_12022){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_12022);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e12043){if((e12043 instanceof Object))
{var ex__8892__auto__ = e12043;var statearr_12044_12061 = state_12022;(statearr_12044_12061[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12022);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12043;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12062 = state_12022;
state_12022 = G__12062;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_12022){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_12022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___12046))
})();var state__8954__auto__ = (function (){var statearr_12045 = f__8953__auto__.call(null);(statearr_12045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___12046);
return statearr_12045;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___12046))
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
return (function (p__12245){var vec__12246 = p__12245;var v = cljs.core.nth.call(null,vec__12246,0,null);var p = cljs.core.nth.call(null,vec__12246,1,null);var job = vec__12246;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1,xf,ex_handler);var c__8952__auto___12427 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___12427,res,vec__12246,v,p,job,jobs,results){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___12427,res,vec__12246,v,p,job,jobs,results){
return (function (state_12251){var state_val_12252 = (state_12251[1]);if((state_val_12252 === 2))
{var inst_12248 = (state_12251[2]);var inst_12249 = cljs.core.async.close_BANG_.call(null,res);var state_12251__$1 = (function (){var statearr_12253 = state_12251;(statearr_12253[7] = inst_12248);
return statearr_12253;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12251__$1,inst_12249);
} else
{if((state_val_12252 === 1))
{var state_12251__$1 = state_12251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12251__$1,2,res,v);
} else
{return null;
}
}
});})(c__8952__auto___12427,res,vec__12246,v,p,job,jobs,results))
;return ((function (switch__8888__auto__,c__8952__auto___12427,res,vec__12246,v,p,job,jobs,results){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_12257 = [null,null,null,null,null,null,null,null];(statearr_12257[0] = state_machine__8889__auto__);
(statearr_12257[1] = 1);
return statearr_12257;
});
var state_machine__8889__auto____1 = (function (state_12251){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_12251);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e12258){if((e12258 instanceof Object))
{var ex__8892__auto__ = e12258;var statearr_12259_12428 = state_12251;(statearr_12259_12428[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12251);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12258;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12429 = state_12251;
state_12251 = G__12429;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_12251){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_12251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___12427,res,vec__12246,v,p,job,jobs,results))
})();var state__8954__auto__ = (function (){var statearr_12260 = f__8953__auto__.call(null);(statearr_12260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___12427);
return statearr_12260;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___12427,res,vec__12246,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12261){var vec__12262 = p__12261;var v = cljs.core.nth.call(null,vec__12262,0,null);var p = cljs.core.nth.call(null,vec__12262,1,null);var job = vec__12262;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1);xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__7052__auto___12430 = n;var __12431 = 0;while(true){
if((__12431 < n__7052__auto___12430))
{var G__12263_12432 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"async","async",1107031534),G__12263_12432))
{var c__8952__auto___12433 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__12431,c__8952__auto___12433,G__12263_12432,n__7052__auto___12430,jobs,results,process,async){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (__12431,c__8952__auto___12433,G__12263_12432,n__7052__auto___12430,jobs,results,process,async){
return (function (state_12276){var state_val_12277 = (state_12276[1]);if((state_val_12277 === 7))
{var inst_12272 = (state_12276[2]);var state_12276__$1 = state_12276;var statearr_12278_12434 = state_12276__$1;(statearr_12278_12434[2] = inst_12272);
(statearr_12278_12434[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12277 === 6))
{var state_12276__$1 = state_12276;var statearr_12279_12435 = state_12276__$1;(statearr_12279_12435[2] = null);
(statearr_12279_12435[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12277 === 5))
{var state_12276__$1 = state_12276;var statearr_12280_12436 = state_12276__$1;(statearr_12280_12436[2] = null);
(statearr_12280_12436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12277 === 4))
{var inst_12266 = (state_12276[2]);var inst_12267 = async.call(null,inst_12266);var state_12276__$1 = state_12276;if(cljs.core.truth_(inst_12267))
{var statearr_12281_12437 = state_12276__$1;(statearr_12281_12437[1] = 5);
} else
{var statearr_12282_12438 = state_12276__$1;(statearr_12282_12438[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12277 === 3))
{var inst_12274 = (state_12276[2]);var state_12276__$1 = state_12276;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12276__$1,inst_12274);
} else
{if((state_val_12277 === 2))
{var state_12276__$1 = state_12276;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12276__$1,4,jobs);
} else
{if((state_val_12277 === 1))
{var state_12276__$1 = state_12276;var statearr_12283_12439 = state_12276__$1;(statearr_12283_12439[2] = null);
(statearr_12283_12439[1] = 2);
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
});})(__12431,c__8952__auto___12433,G__12263_12432,n__7052__auto___12430,jobs,results,process,async))
;return ((function (__12431,switch__8888__auto__,c__8952__auto___12433,G__12263_12432,n__7052__auto___12430,jobs,results,process,async){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_12287 = [null,null,null,null,null,null,null];(statearr_12287[0] = state_machine__8889__auto__);
(statearr_12287[1] = 1);
return statearr_12287;
});
var state_machine__8889__auto____1 = (function (state_12276){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_12276);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e12288){if((e12288 instanceof Object))
{var ex__8892__auto__ = e12288;var statearr_12289_12440 = state_12276;(statearr_12289_12440[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12276);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12441 = state_12276;
state_12276 = G__12441;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_12276){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_12276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(__12431,switch__8888__auto__,c__8952__auto___12433,G__12263_12432,n__7052__auto___12430,jobs,results,process,async))
})();var state__8954__auto__ = (function (){var statearr_12290 = f__8953__auto__.call(null);(statearr_12290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___12433);
return statearr_12290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(__12431,c__8952__auto___12433,G__12263_12432,n__7052__auto___12430,jobs,results,process,async))
);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compute","compute",1964407721),G__12263_12432))
{var c__8952__auto___12442 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__12431,c__8952__auto___12442,G__12263_12432,n__7052__auto___12430,jobs,results,process,async){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (__12431,c__8952__auto___12442,G__12263_12432,n__7052__auto___12430,jobs,results,process,async){
return (function (state_12303){var state_val_12304 = (state_12303[1]);if((state_val_12304 === 7))
{var inst_12299 = (state_12303[2]);var state_12303__$1 = state_12303;var statearr_12305_12443 = state_12303__$1;(statearr_12305_12443[2] = inst_12299);
(statearr_12305_12443[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 6))
{var state_12303__$1 = state_12303;var statearr_12306_12444 = state_12303__$1;(statearr_12306_12444[2] = null);
(statearr_12306_12444[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 5))
{var state_12303__$1 = state_12303;var statearr_12307_12445 = state_12303__$1;(statearr_12307_12445[2] = null);
(statearr_12307_12445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 4))
{var inst_12293 = (state_12303[2]);var inst_12294 = process.call(null,inst_12293);var state_12303__$1 = state_12303;if(cljs.core.truth_(inst_12294))
{var statearr_12308_12446 = state_12303__$1;(statearr_12308_12446[1] = 5);
} else
{var statearr_12309_12447 = state_12303__$1;(statearr_12309_12447[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 3))
{var inst_12301 = (state_12303[2]);var state_12303__$1 = state_12303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12303__$1,inst_12301);
} else
{if((state_val_12304 === 2))
{var state_12303__$1 = state_12303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12303__$1,4,jobs);
} else
{if((state_val_12304 === 1))
{var state_12303__$1 = state_12303;var statearr_12310_12448 = state_12303__$1;(statearr_12310_12448[2] = null);
(statearr_12310_12448[1] = 2);
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
});})(__12431,c__8952__auto___12442,G__12263_12432,n__7052__auto___12430,jobs,results,process,async))
;return ((function (__12431,switch__8888__auto__,c__8952__auto___12442,G__12263_12432,n__7052__auto___12430,jobs,results,process,async){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_12314 = [null,null,null,null,null,null,null];(statearr_12314[0] = state_machine__8889__auto__);
(statearr_12314[1] = 1);
return statearr_12314;
});
var state_machine__8889__auto____1 = (function (state_12303){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_12303);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e12315){if((e12315 instanceof Object))
{var ex__8892__auto__ = e12315;var statearr_12316_12449 = state_12303;(statearr_12316_12449[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12303);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12315;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12450 = state_12303;
state_12303 = G__12450;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_12303){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_12303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(__12431,switch__8888__auto__,c__8952__auto___12442,G__12263_12432,n__7052__auto___12430,jobs,results,process,async))
})();var state__8954__auto__ = (function (){var statearr_12317 = f__8953__auto__.call(null);(statearr_12317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___12442);
return statearr_12317;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(__12431,c__8952__auto___12442,G__12263_12432,n__7052__auto___12430,jobs,results,process,async))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{}
}
}
{
var G__12451 = (__12431 + 1);
__12431 = G__12451;
continue;
}
} else
{}
break;
}
var c__8952__auto___12452 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___12452,jobs,results,process,async){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___12452,jobs,results,process,async){
return (function (state_12338){var state_val_12339 = (state_12338[1]);if((state_val_12339 === 9))
{var inst_12331 = (state_12338[2]);var state_12338__$1 = (function (){var statearr_12340 = state_12338;(statearr_12340[7] = inst_12331);
return statearr_12340;
})();var statearr_12341_12453 = state_12338__$1;(statearr_12341_12453[2] = null);
(statearr_12341_12453[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12339 === 8))
{var inst_12325 = (state_12338[8]);var inst_12329 = (state_12338[2]);var state_12338__$1 = (function (){var statearr_12342 = state_12338;(statearr_12342[9] = inst_12329);
return statearr_12342;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12338__$1,9,results,inst_12325);
} else
{if((state_val_12339 === 7))
{var inst_12334 = (state_12338[2]);var state_12338__$1 = state_12338;var statearr_12343_12454 = state_12338__$1;(statearr_12343_12454[2] = inst_12334);
(statearr_12343_12454[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12339 === 6))
{var inst_12320 = (state_12338[10]);var inst_12325 = (state_12338[8]);var inst_12325__$1 = cljs.core.async.chan.call(null,1);var inst_12326 = [inst_12320,inst_12325__$1];var inst_12327 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12326,null));var state_12338__$1 = (function (){var statearr_12344 = state_12338;(statearr_12344[8] = inst_12325__$1);
return statearr_12344;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12338__$1,8,jobs,inst_12327);
} else
{if((state_val_12339 === 5))
{var inst_12323 = cljs.core.async.close_BANG_.call(null,jobs);var state_12338__$1 = state_12338;var statearr_12345_12455 = state_12338__$1;(statearr_12345_12455[2] = inst_12323);
(statearr_12345_12455[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12339 === 4))
{var inst_12320 = (state_12338[10]);var inst_12320__$1 = (state_12338[2]);var inst_12321 = (inst_12320__$1 == null);var state_12338__$1 = (function (){var statearr_12346 = state_12338;(statearr_12346[10] = inst_12320__$1);
return statearr_12346;
})();if(cljs.core.truth_(inst_12321))
{var statearr_12347_12456 = state_12338__$1;(statearr_12347_12456[1] = 5);
} else
{var statearr_12348_12457 = state_12338__$1;(statearr_12348_12457[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12339 === 3))
{var inst_12336 = (state_12338[2]);var state_12338__$1 = state_12338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12338__$1,inst_12336);
} else
{if((state_val_12339 === 2))
{var state_12338__$1 = state_12338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12338__$1,4,from);
} else
{if((state_val_12339 === 1))
{var state_12338__$1 = state_12338;var statearr_12349_12458 = state_12338__$1;(statearr_12349_12458[2] = null);
(statearr_12349_12458[1] = 2);
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
});})(c__8952__auto___12452,jobs,results,process,async))
;return ((function (switch__8888__auto__,c__8952__auto___12452,jobs,results,process,async){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_12353 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12353[0] = state_machine__8889__auto__);
(statearr_12353[1] = 1);
return statearr_12353;
});
var state_machine__8889__auto____1 = (function (state_12338){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_12338);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e12354){if((e12354 instanceof Object))
{var ex__8892__auto__ = e12354;var statearr_12355_12459 = state_12338;(statearr_12355_12459[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12338);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12354;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12460 = state_12338;
state_12338 = G__12460;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_12338){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_12338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___12452,jobs,results,process,async))
})();var state__8954__auto__ = (function (){var statearr_12356 = f__8953__auto__.call(null);(statearr_12356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___12452);
return statearr_12356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___12452,jobs,results,process,async))
);
var c__8952__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto__,jobs,results,process,async){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto__,jobs,results,process,async){
return (function (state_12394){var state_val_12395 = (state_12394[1]);if((state_val_12395 === 7))
{var inst_12390 = (state_12394[2]);var state_12394__$1 = state_12394;var statearr_12396_12461 = state_12394__$1;(statearr_12396_12461[2] = inst_12390);
(statearr_12396_12461[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 20))
{var state_12394__$1 = state_12394;var statearr_12397_12462 = state_12394__$1;(statearr_12397_12462[2] = null);
(statearr_12397_12462[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 1))
{var state_12394__$1 = state_12394;var statearr_12398_12463 = state_12394__$1;(statearr_12398_12463[2] = null);
(statearr_12398_12463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 4))
{var inst_12359 = (state_12394[7]);var inst_12359__$1 = (state_12394[2]);var inst_12360 = (inst_12359__$1 == null);var state_12394__$1 = (function (){var statearr_12399 = state_12394;(statearr_12399[7] = inst_12359__$1);
return statearr_12399;
})();if(cljs.core.truth_(inst_12360))
{var statearr_12400_12464 = state_12394__$1;(statearr_12400_12464[1] = 5);
} else
{var statearr_12401_12465 = state_12394__$1;(statearr_12401_12465[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 15))
{var inst_12372 = (state_12394[8]);var state_12394__$1 = state_12394;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12394__$1,18,to,inst_12372);
} else
{if((state_val_12395 === 21))
{var inst_12385 = (state_12394[2]);var state_12394__$1 = state_12394;var statearr_12402_12466 = state_12394__$1;(statearr_12402_12466[2] = inst_12385);
(statearr_12402_12466[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 13))
{var inst_12387 = (state_12394[2]);var state_12394__$1 = (function (){var statearr_12403 = state_12394;(statearr_12403[9] = inst_12387);
return statearr_12403;
})();var statearr_12404_12467 = state_12394__$1;(statearr_12404_12467[2] = null);
(statearr_12404_12467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 6))
{var inst_12359 = (state_12394[7]);var state_12394__$1 = state_12394;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12394__$1,11,inst_12359);
} else
{if((state_val_12395 === 17))
{var inst_12380 = (state_12394[2]);var state_12394__$1 = state_12394;if(cljs.core.truth_(inst_12380))
{var statearr_12405_12468 = state_12394__$1;(statearr_12405_12468[1] = 19);
} else
{var statearr_12406_12469 = state_12394__$1;(statearr_12406_12469[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 3))
{var inst_12392 = (state_12394[2]);var state_12394__$1 = state_12394;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12394__$1,inst_12392);
} else
{if((state_val_12395 === 12))
{var inst_12369 = (state_12394[10]);var state_12394__$1 = state_12394;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12394__$1,14,inst_12369);
} else
{if((state_val_12395 === 2))
{var state_12394__$1 = state_12394;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12394__$1,4,results);
} else
{if((state_val_12395 === 19))
{var state_12394__$1 = state_12394;var statearr_12407_12470 = state_12394__$1;(statearr_12407_12470[2] = null);
(statearr_12407_12470[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 11))
{var inst_12369 = (state_12394[2]);var state_12394__$1 = (function (){var statearr_12408 = state_12394;(statearr_12408[10] = inst_12369);
return statearr_12408;
})();var statearr_12409_12471 = state_12394__$1;(statearr_12409_12471[2] = null);
(statearr_12409_12471[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 9))
{var state_12394__$1 = state_12394;var statearr_12410_12472 = state_12394__$1;(statearr_12410_12472[2] = null);
(statearr_12410_12472[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 5))
{var state_12394__$1 = state_12394;if(cljs.core.truth_(close_QMARK_))
{var statearr_12411_12473 = state_12394__$1;(statearr_12411_12473[1] = 8);
} else
{var statearr_12412_12474 = state_12394__$1;(statearr_12412_12474[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 14))
{var inst_12372 = (state_12394[8]);var inst_12374 = (state_12394[11]);var inst_12372__$1 = (state_12394[2]);var inst_12373 = (inst_12372__$1 == null);var inst_12374__$1 = cljs.core.not.call(null,inst_12373);var state_12394__$1 = (function (){var statearr_12413 = state_12394;(statearr_12413[8] = inst_12372__$1);
(statearr_12413[11] = inst_12374__$1);
return statearr_12413;
})();if(inst_12374__$1)
{var statearr_12414_12475 = state_12394__$1;(statearr_12414_12475[1] = 15);
} else
{var statearr_12415_12476 = state_12394__$1;(statearr_12415_12476[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 16))
{var inst_12374 = (state_12394[11]);var state_12394__$1 = state_12394;var statearr_12416_12477 = state_12394__$1;(statearr_12416_12477[2] = inst_12374);
(statearr_12416_12477[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 10))
{var inst_12366 = (state_12394[2]);var state_12394__$1 = state_12394;var statearr_12417_12478 = state_12394__$1;(statearr_12417_12478[2] = inst_12366);
(statearr_12417_12478[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 18))
{var inst_12377 = (state_12394[2]);var state_12394__$1 = state_12394;var statearr_12418_12479 = state_12394__$1;(statearr_12418_12479[2] = inst_12377);
(statearr_12418_12479[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12395 === 8))
{var inst_12363 = cljs.core.async.close_BANG_.call(null,to);var state_12394__$1 = state_12394;var statearr_12419_12480 = state_12394__$1;(statearr_12419_12480[2] = inst_12363);
(statearr_12419_12480[1] = 10);
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
});})(c__8952__auto__,jobs,results,process,async))
;return ((function (switch__8888__auto__,c__8952__auto__,jobs,results,process,async){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_12423 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12423[0] = state_machine__8889__auto__);
(statearr_12423[1] = 1);
return statearr_12423;
});
var state_machine__8889__auto____1 = (function (state_12394){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_12394);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e12424){if((e12424 instanceof Object))
{var ex__8892__auto__ = e12424;var statearr_12425_12481 = state_12394;(statearr_12425_12481[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12394);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12482 = state_12394;
state_12394 = G__12482;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_12394){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_12394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto__,jobs,results,process,async))
})();var state__8954__auto__ = (function (){var statearr_12426 = f__8953__auto__.call(null);(statearr_12426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto__);
return statearr_12426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto__,jobs,results,process,async))
);
return c__8952__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8952__auto___12583 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___12583,tc,fc){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___12583,tc,fc){
return (function (state_12558){var state_val_12559 = (state_12558[1]);if((state_val_12559 === 7))
{var inst_12554 = (state_12558[2]);var state_12558__$1 = state_12558;var statearr_12560_12584 = state_12558__$1;(statearr_12560_12584[2] = inst_12554);
(statearr_12560_12584[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 1))
{var state_12558__$1 = state_12558;var statearr_12561_12585 = state_12558__$1;(statearr_12561_12585[2] = null);
(statearr_12561_12585[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 4))
{var inst_12535 = (state_12558[7]);var inst_12535__$1 = (state_12558[2]);var inst_12536 = (inst_12535__$1 == null);var state_12558__$1 = (function (){var statearr_12562 = state_12558;(statearr_12562[7] = inst_12535__$1);
return statearr_12562;
})();if(cljs.core.truth_(inst_12536))
{var statearr_12563_12586 = state_12558__$1;(statearr_12563_12586[1] = 5);
} else
{var statearr_12564_12587 = state_12558__$1;(statearr_12564_12587[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 13))
{var state_12558__$1 = state_12558;var statearr_12565_12588 = state_12558__$1;(statearr_12565_12588[2] = null);
(statearr_12565_12588[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 6))
{var inst_12535 = (state_12558[7]);var inst_12541 = p.call(null,inst_12535);var state_12558__$1 = state_12558;if(cljs.core.truth_(inst_12541))
{var statearr_12566_12589 = state_12558__$1;(statearr_12566_12589[1] = 9);
} else
{var statearr_12567_12590 = state_12558__$1;(statearr_12567_12590[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 3))
{var inst_12556 = (state_12558[2]);var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12558__$1,inst_12556);
} else
{if((state_val_12559 === 12))
{var state_12558__$1 = state_12558;var statearr_12568_12591 = state_12558__$1;(statearr_12568_12591[2] = null);
(statearr_12568_12591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 2))
{var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12558__$1,4,ch);
} else
{if((state_val_12559 === 11))
{var inst_12535 = (state_12558[7]);var inst_12545 = (state_12558[2]);var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12558__$1,8,inst_12545,inst_12535);
} else
{if((state_val_12559 === 9))
{var state_12558__$1 = state_12558;var statearr_12569_12592 = state_12558__$1;(statearr_12569_12592[2] = tc);
(statearr_12569_12592[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 5))
{var inst_12538 = cljs.core.async.close_BANG_.call(null,tc);var inst_12539 = cljs.core.async.close_BANG_.call(null,fc);var state_12558__$1 = (function (){var statearr_12570 = state_12558;(statearr_12570[8] = inst_12538);
return statearr_12570;
})();var statearr_12571_12593 = state_12558__$1;(statearr_12571_12593[2] = inst_12539);
(statearr_12571_12593[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 14))
{var inst_12552 = (state_12558[2]);var state_12558__$1 = state_12558;var statearr_12572_12594 = state_12558__$1;(statearr_12572_12594[2] = inst_12552);
(statearr_12572_12594[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 10))
{var state_12558__$1 = state_12558;var statearr_12573_12595 = state_12558__$1;(statearr_12573_12595[2] = fc);
(statearr_12573_12595[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 8))
{var inst_12547 = (state_12558[2]);var state_12558__$1 = state_12558;if(cljs.core.truth_(inst_12547))
{var statearr_12574_12596 = state_12558__$1;(statearr_12574_12596[1] = 12);
} else
{var statearr_12575_12597 = state_12558__$1;(statearr_12575_12597[1] = 13);
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
});})(c__8952__auto___12583,tc,fc))
;return ((function (switch__8888__auto__,c__8952__auto___12583,tc,fc){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_12579 = [null,null,null,null,null,null,null,null,null];(statearr_12579[0] = state_machine__8889__auto__);
(statearr_12579[1] = 1);
return statearr_12579;
});
var state_machine__8889__auto____1 = (function (state_12558){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_12558);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e12580){if((e12580 instanceof Object))
{var ex__8892__auto__ = e12580;var statearr_12581_12598 = state_12558;(statearr_12581_12598[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12558);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12580;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12599 = state_12558;
state_12558 = G__12599;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_12558){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_12558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___12583,tc,fc))
})();var state__8954__auto__ = (function (){var statearr_12582 = f__8953__auto__.call(null);(statearr_12582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___12583);
return statearr_12582;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___12583,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8952__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto__){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto__){
return (function (state_12646){var state_val_12647 = (state_12646[1]);if((state_val_12647 === 7))
{var inst_12642 = (state_12646[2]);var state_12646__$1 = state_12646;var statearr_12648_12664 = state_12646__$1;(statearr_12648_12664[2] = inst_12642);
(statearr_12648_12664[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12647 === 6))
{var inst_12635 = (state_12646[7]);var inst_12632 = (state_12646[8]);var inst_12639 = f.call(null,inst_12632,inst_12635);var inst_12632__$1 = inst_12639;var state_12646__$1 = (function (){var statearr_12649 = state_12646;(statearr_12649[8] = inst_12632__$1);
return statearr_12649;
})();var statearr_12650_12665 = state_12646__$1;(statearr_12650_12665[2] = null);
(statearr_12650_12665[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12647 === 5))
{var inst_12632 = (state_12646[8]);var state_12646__$1 = state_12646;var statearr_12651_12666 = state_12646__$1;(statearr_12651_12666[2] = inst_12632);
(statearr_12651_12666[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12647 === 4))
{var inst_12635 = (state_12646[7]);var inst_12635__$1 = (state_12646[2]);var inst_12636 = (inst_12635__$1 == null);var state_12646__$1 = (function (){var statearr_12652 = state_12646;(statearr_12652[7] = inst_12635__$1);
return statearr_12652;
})();if(cljs.core.truth_(inst_12636))
{var statearr_12653_12667 = state_12646__$1;(statearr_12653_12667[1] = 5);
} else
{var statearr_12654_12668 = state_12646__$1;(statearr_12654_12668[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12647 === 3))
{var inst_12644 = (state_12646[2]);var state_12646__$1 = state_12646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12646__$1,inst_12644);
} else
{if((state_val_12647 === 2))
{var state_12646__$1 = state_12646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12646__$1,4,ch);
} else
{if((state_val_12647 === 1))
{var inst_12632 = init;var state_12646__$1 = (function (){var statearr_12655 = state_12646;(statearr_12655[8] = inst_12632);
return statearr_12655;
})();var statearr_12656_12669 = state_12646__$1;(statearr_12656_12669[2] = null);
(statearr_12656_12669[1] = 2);
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
});})(c__8952__auto__))
;return ((function (switch__8888__auto__,c__8952__auto__){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_12660 = [null,null,null,null,null,null,null,null,null];(statearr_12660[0] = state_machine__8889__auto__);
(statearr_12660[1] = 1);
return statearr_12660;
});
var state_machine__8889__auto____1 = (function (state_12646){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_12646);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e12661){if((e12661 instanceof Object))
{var ex__8892__auto__ = e12661;var statearr_12662_12670 = state_12646;(statearr_12662_12670[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12646);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12661;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12671 = state_12646;
state_12646 = G__12671;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_12646){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_12646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto__))
})();var state__8954__auto__ = (function (){var statearr_12663 = f__8953__auto__.call(null);(statearr_12663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto__);
return statearr_12663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto__))
);
return c__8952__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8952__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto__){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto__){
return (function (state_12745){var state_val_12746 = (state_12745[1]);if((state_val_12746 === 7))
{var inst_12727 = (state_12745[2]);var state_12745__$1 = state_12745;var statearr_12747_12770 = state_12745__$1;(statearr_12747_12770[2] = inst_12727);
(statearr_12747_12770[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12746 === 1))
{var inst_12721 = cljs.core.seq.call(null,coll);var inst_12722 = inst_12721;var state_12745__$1 = (function (){var statearr_12748 = state_12745;(statearr_12748[7] = inst_12722);
return statearr_12748;
})();var statearr_12749_12771 = state_12745__$1;(statearr_12749_12771[2] = null);
(statearr_12749_12771[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12746 === 4))
{var inst_12722 = (state_12745[7]);var inst_12725 = cljs.core.first.call(null,inst_12722);var state_12745__$1 = state_12745;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12745__$1,7,ch,inst_12725);
} else
{if((state_val_12746 === 13))
{var inst_12739 = (state_12745[2]);var state_12745__$1 = state_12745;var statearr_12750_12772 = state_12745__$1;(statearr_12750_12772[2] = inst_12739);
(statearr_12750_12772[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12746 === 6))
{var inst_12730 = (state_12745[2]);var state_12745__$1 = state_12745;if(cljs.core.truth_(inst_12730))
{var statearr_12751_12773 = state_12745__$1;(statearr_12751_12773[1] = 8);
} else
{var statearr_12752_12774 = state_12745__$1;(statearr_12752_12774[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12746 === 3))
{var inst_12743 = (state_12745[2]);var state_12745__$1 = state_12745;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12745__$1,inst_12743);
} else
{if((state_val_12746 === 12))
{var state_12745__$1 = state_12745;var statearr_12753_12775 = state_12745__$1;(statearr_12753_12775[2] = null);
(statearr_12753_12775[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12746 === 2))
{var inst_12722 = (state_12745[7]);var state_12745__$1 = state_12745;if(cljs.core.truth_(inst_12722))
{var statearr_12754_12776 = state_12745__$1;(statearr_12754_12776[1] = 4);
} else
{var statearr_12755_12777 = state_12745__$1;(statearr_12755_12777[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12746 === 11))
{var inst_12736 = cljs.core.async.close_BANG_.call(null,ch);var state_12745__$1 = state_12745;var statearr_12756_12778 = state_12745__$1;(statearr_12756_12778[2] = inst_12736);
(statearr_12756_12778[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12746 === 9))
{var state_12745__$1 = state_12745;if(cljs.core.truth_(close_QMARK_))
{var statearr_12757_12779 = state_12745__$1;(statearr_12757_12779[1] = 11);
} else
{var statearr_12758_12780 = state_12745__$1;(statearr_12758_12780[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12746 === 5))
{var inst_12722 = (state_12745[7]);var state_12745__$1 = state_12745;var statearr_12759_12781 = state_12745__$1;(statearr_12759_12781[2] = inst_12722);
(statearr_12759_12781[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12746 === 10))
{var inst_12741 = (state_12745[2]);var state_12745__$1 = state_12745;var statearr_12760_12782 = state_12745__$1;(statearr_12760_12782[2] = inst_12741);
(statearr_12760_12782[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12746 === 8))
{var inst_12722 = (state_12745[7]);var inst_12732 = cljs.core.next.call(null,inst_12722);var inst_12722__$1 = inst_12732;var state_12745__$1 = (function (){var statearr_12761 = state_12745;(statearr_12761[7] = inst_12722__$1);
return statearr_12761;
})();var statearr_12762_12783 = state_12745__$1;(statearr_12762_12783[2] = null);
(statearr_12762_12783[1] = 2);
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
});})(c__8952__auto__))
;return ((function (switch__8888__auto__,c__8952__auto__){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_12766 = [null,null,null,null,null,null,null,null];(statearr_12766[0] = state_machine__8889__auto__);
(statearr_12766[1] = 1);
return statearr_12766;
});
var state_machine__8889__auto____1 = (function (state_12745){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_12745);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e12767){if((e12767 instanceof Object))
{var ex__8892__auto__ = e12767;var statearr_12768_12784 = state_12745;(statearr_12768_12784[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12745);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12767;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12785 = state_12745;
state_12745 = G__12785;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_12745){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_12745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto__))
})();var state__8954__auto__ = (function (){var statearr_12769 = f__8953__auto__.call(null);(statearr_12769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto__);
return statearr_12769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto__))
);
return c__8952__auto__;
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
cljs.core.async.Mux = (function (){var obj12787 = {};return obj12787;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__6192__auto__ = _;if(and__6192__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__6192__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__6831__auto__ = (((_ == null))?null:_);return (function (){var or__6204__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6831__auto__)]);if(or__6204__auto__)
{return or__6204__auto__;
} else
{var or__6204__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__6204__auto____$1)
{return or__6204__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12789 = {};return obj12789;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__6192__auto__ = m;if(and__6192__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__6192__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__6831__auto__ = (((m == null))?null:m);return (function (){var or__6204__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6831__auto__)]);if(or__6204__auto__)
{return or__6204__auto__;
} else
{var or__6204__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__6204__auto____$1)
{return or__6204__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__6192__auto__ = m;if(and__6192__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__6192__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__6831__auto__ = (((m == null))?null:m);return (function (){var or__6204__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6831__auto__)]);if(or__6204__auto__)
{return or__6204__auto__;
} else
{var or__6204__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__6204__auto____$1)
{return or__6204__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__6192__auto__ = m;if(and__6192__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__6192__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__6831__auto__ = (((m == null))?null:m);return (function (){var or__6204__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6831__auto__)]);if(or__6204__auto__)
{return or__6204__auto__;
} else
{var or__6204__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__6204__auto____$1)
{return or__6204__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13011 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13011 = (function (cs,ch,mult,meta13012){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13012 = meta13012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13011.cljs$lang$type = true;
cljs.core.async.t13011.cljs$lang$ctorStr = "cljs.core.async/t13011";
cljs.core.async.t13011.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6771__auto__,writer__6772__auto__,opt__6773__auto__){return cljs.core._write.call(null,writer__6772__auto__,"cljs.core.async/t13011");
});})(cs))
;
cljs.core.async.t13011.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13011.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13011.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13011.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13011.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13011.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13013){var self__ = this;
var _13013__$1 = this;return self__.meta13012;
});})(cs))
;
cljs.core.async.t13011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13013,meta13012__$1){var self__ = this;
var _13013__$1 = this;return (new cljs.core.async.t13011(self__.cs,self__.ch,self__.mult,meta13012__$1));
});})(cs))
;
cljs.core.async.__GT_t13011 = ((function (cs){
return (function __GT_t13011(cs__$1,ch__$1,mult__$1,meta13012){return (new cljs.core.async.t13011(cs__$1,ch__$1,mult__$1,meta13012));
});})(cs))
;
}
return (new cljs.core.async.t13011(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8952__auto___13232 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___13232,cs,m,dchan,dctr,done){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___13232,cs,m,dchan,dctr,done){
return (function (state_13144){var state_val_13145 = (state_13144[1]);if((state_val_13145 === 7))
{var inst_13140 = (state_13144[2]);var state_13144__$1 = state_13144;var statearr_13146_13233 = state_13144__$1;(statearr_13146_13233[2] = inst_13140);
(statearr_13146_13233[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 20))
{var inst_13045 = (state_13144[7]);var inst_13055 = cljs.core.first.call(null,inst_13045);var inst_13056 = cljs.core.nth.call(null,inst_13055,0,null);var inst_13057 = cljs.core.nth.call(null,inst_13055,1,null);var state_13144__$1 = (function (){var statearr_13147 = state_13144;(statearr_13147[8] = inst_13056);
return statearr_13147;
})();if(cljs.core.truth_(inst_13057))
{var statearr_13148_13234 = state_13144__$1;(statearr_13148_13234[1] = 22);
} else
{var statearr_13149_13235 = state_13144__$1;(statearr_13149_13235[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 27))
{var inst_13016 = (state_13144[9]);var inst_13092 = (state_13144[10]);var inst_13087 = (state_13144[11]);var inst_13085 = (state_13144[12]);var inst_13092__$1 = cljs.core._nth.call(null,inst_13085,inst_13087);var inst_13093 = cljs.core.async.put_BANG_.call(null,inst_13092__$1,inst_13016,done);var state_13144__$1 = (function (){var statearr_13150 = state_13144;(statearr_13150[10] = inst_13092__$1);
return statearr_13150;
})();if(cljs.core.truth_(inst_13093))
{var statearr_13151_13236 = state_13144__$1;(statearr_13151_13236[1] = 30);
} else
{var statearr_13152_13237 = state_13144__$1;(statearr_13152_13237[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 1))
{var state_13144__$1 = state_13144;var statearr_13153_13238 = state_13144__$1;(statearr_13153_13238[2] = null);
(statearr_13153_13238[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 24))
{var inst_13045 = (state_13144[7]);var inst_13062 = (state_13144[2]);var inst_13063 = cljs.core.next.call(null,inst_13045);var inst_13025 = inst_13063;var inst_13026 = null;var inst_13027 = 0;var inst_13028 = 0;var state_13144__$1 = (function (){var statearr_13154 = state_13144;(statearr_13154[13] = inst_13025);
(statearr_13154[14] = inst_13026);
(statearr_13154[15] = inst_13028);
(statearr_13154[16] = inst_13027);
(statearr_13154[17] = inst_13062);
return statearr_13154;
})();var statearr_13155_13239 = state_13144__$1;(statearr_13155_13239[2] = null);
(statearr_13155_13239[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 39))
{var state_13144__$1 = state_13144;var statearr_13159_13240 = state_13144__$1;(statearr_13159_13240[2] = null);
(statearr_13159_13240[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 4))
{var inst_13016 = (state_13144[9]);var inst_13016__$1 = (state_13144[2]);var inst_13017 = (inst_13016__$1 == null);var state_13144__$1 = (function (){var statearr_13160 = state_13144;(statearr_13160[9] = inst_13016__$1);
return statearr_13160;
})();if(cljs.core.truth_(inst_13017))
{var statearr_13161_13241 = state_13144__$1;(statearr_13161_13241[1] = 5);
} else
{var statearr_13162_13242 = state_13144__$1;(statearr_13162_13242[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 15))
{var inst_13025 = (state_13144[13]);var inst_13026 = (state_13144[14]);var inst_13028 = (state_13144[15]);var inst_13027 = (state_13144[16]);var inst_13041 = (state_13144[2]);var inst_13042 = (inst_13028 + 1);var tmp13156 = inst_13025;var tmp13157 = inst_13026;var tmp13158 = inst_13027;var inst_13025__$1 = tmp13156;var inst_13026__$1 = tmp13157;var inst_13027__$1 = tmp13158;var inst_13028__$1 = inst_13042;var state_13144__$1 = (function (){var statearr_13163 = state_13144;(statearr_13163[13] = inst_13025__$1);
(statearr_13163[18] = inst_13041);
(statearr_13163[14] = inst_13026__$1);
(statearr_13163[15] = inst_13028__$1);
(statearr_13163[16] = inst_13027__$1);
return statearr_13163;
})();var statearr_13164_13243 = state_13144__$1;(statearr_13164_13243[2] = null);
(statearr_13164_13243[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 21))
{var inst_13066 = (state_13144[2]);var state_13144__$1 = state_13144;var statearr_13168_13244 = state_13144__$1;(statearr_13168_13244[2] = inst_13066);
(statearr_13168_13244[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 31))
{var inst_13092 = (state_13144[10]);var inst_13096 = done.call(null,null);var inst_13097 = cljs.core.async.untap_STAR_.call(null,m,inst_13092);var state_13144__$1 = (function (){var statearr_13169 = state_13144;(statearr_13169[19] = inst_13096);
return statearr_13169;
})();var statearr_13170_13245 = state_13144__$1;(statearr_13170_13245[2] = inst_13097);
(statearr_13170_13245[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 32))
{var inst_13086 = (state_13144[20]);var inst_13084 = (state_13144[21]);var inst_13087 = (state_13144[11]);var inst_13085 = (state_13144[12]);var inst_13099 = (state_13144[2]);var inst_13100 = (inst_13087 + 1);var tmp13165 = inst_13086;var tmp13166 = inst_13084;var tmp13167 = inst_13085;var inst_13084__$1 = tmp13166;var inst_13085__$1 = tmp13167;var inst_13086__$1 = tmp13165;var inst_13087__$1 = inst_13100;var state_13144__$1 = (function (){var statearr_13171 = state_13144;(statearr_13171[20] = inst_13086__$1);
(statearr_13171[22] = inst_13099);
(statearr_13171[21] = inst_13084__$1);
(statearr_13171[11] = inst_13087__$1);
(statearr_13171[12] = inst_13085__$1);
return statearr_13171;
})();var statearr_13172_13246 = state_13144__$1;(statearr_13172_13246[2] = null);
(statearr_13172_13246[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 40))
{var inst_13112 = (state_13144[23]);var inst_13116 = done.call(null,null);var inst_13117 = cljs.core.async.untap_STAR_.call(null,m,inst_13112);var state_13144__$1 = (function (){var statearr_13173 = state_13144;(statearr_13173[24] = inst_13116);
return statearr_13173;
})();var statearr_13174_13247 = state_13144__$1;(statearr_13174_13247[2] = inst_13117);
(statearr_13174_13247[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 33))
{var inst_13103 = (state_13144[25]);var inst_13105 = cljs.core.chunked_seq_QMARK_.call(null,inst_13103);var state_13144__$1 = state_13144;if(inst_13105)
{var statearr_13175_13248 = state_13144__$1;(statearr_13175_13248[1] = 36);
} else
{var statearr_13176_13249 = state_13144__$1;(statearr_13176_13249[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 13))
{var inst_13035 = (state_13144[26]);var inst_13038 = cljs.core.async.close_BANG_.call(null,inst_13035);var state_13144__$1 = state_13144;var statearr_13177_13250 = state_13144__$1;(statearr_13177_13250[2] = inst_13038);
(statearr_13177_13250[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 22))
{var inst_13056 = (state_13144[8]);var inst_13059 = cljs.core.async.close_BANG_.call(null,inst_13056);var state_13144__$1 = state_13144;var statearr_13178_13251 = state_13144__$1;(statearr_13178_13251[2] = inst_13059);
(statearr_13178_13251[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 36))
{var inst_13103 = (state_13144[25]);var inst_13107 = cljs.core.chunk_first.call(null,inst_13103);var inst_13108 = cljs.core.chunk_rest.call(null,inst_13103);var inst_13109 = cljs.core.count.call(null,inst_13107);var inst_13084 = inst_13108;var inst_13085 = inst_13107;var inst_13086 = inst_13109;var inst_13087 = 0;var state_13144__$1 = (function (){var statearr_13179 = state_13144;(statearr_13179[20] = inst_13086);
(statearr_13179[21] = inst_13084);
(statearr_13179[11] = inst_13087);
(statearr_13179[12] = inst_13085);
return statearr_13179;
})();var statearr_13180_13252 = state_13144__$1;(statearr_13180_13252[2] = null);
(statearr_13180_13252[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 41))
{var inst_13103 = (state_13144[25]);var inst_13119 = (state_13144[2]);var inst_13120 = cljs.core.next.call(null,inst_13103);var inst_13084 = inst_13120;var inst_13085 = null;var inst_13086 = 0;var inst_13087 = 0;var state_13144__$1 = (function (){var statearr_13181 = state_13144;(statearr_13181[20] = inst_13086);
(statearr_13181[27] = inst_13119);
(statearr_13181[21] = inst_13084);
(statearr_13181[11] = inst_13087);
(statearr_13181[12] = inst_13085);
return statearr_13181;
})();var statearr_13182_13253 = state_13144__$1;(statearr_13182_13253[2] = null);
(statearr_13182_13253[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 43))
{var state_13144__$1 = state_13144;var statearr_13183_13254 = state_13144__$1;(statearr_13183_13254[2] = null);
(statearr_13183_13254[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 29))
{var inst_13128 = (state_13144[2]);var state_13144__$1 = state_13144;var statearr_13184_13255 = state_13144__$1;(statearr_13184_13255[2] = inst_13128);
(statearr_13184_13255[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 44))
{var inst_13137 = (state_13144[2]);var state_13144__$1 = (function (){var statearr_13185 = state_13144;(statearr_13185[28] = inst_13137);
return statearr_13185;
})();var statearr_13186_13256 = state_13144__$1;(statearr_13186_13256[2] = null);
(statearr_13186_13256[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 6))
{var inst_13076 = (state_13144[29]);var inst_13075 = cljs.core.deref.call(null,cs);var inst_13076__$1 = cljs.core.keys.call(null,inst_13075);var inst_13077 = cljs.core.count.call(null,inst_13076__$1);var inst_13078 = cljs.core.reset_BANG_.call(null,dctr,inst_13077);var inst_13083 = cljs.core.seq.call(null,inst_13076__$1);var inst_13084 = inst_13083;var inst_13085 = null;var inst_13086 = 0;var inst_13087 = 0;var state_13144__$1 = (function (){var statearr_13187 = state_13144;(statearr_13187[20] = inst_13086);
(statearr_13187[30] = inst_13078);
(statearr_13187[21] = inst_13084);
(statearr_13187[29] = inst_13076__$1);
(statearr_13187[11] = inst_13087);
(statearr_13187[12] = inst_13085);
return statearr_13187;
})();var statearr_13188_13257 = state_13144__$1;(statearr_13188_13257[2] = null);
(statearr_13188_13257[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 28))
{var inst_13103 = (state_13144[25]);var inst_13084 = (state_13144[21]);var inst_13103__$1 = cljs.core.seq.call(null,inst_13084);var state_13144__$1 = (function (){var statearr_13189 = state_13144;(statearr_13189[25] = inst_13103__$1);
return statearr_13189;
})();if(inst_13103__$1)
{var statearr_13190_13258 = state_13144__$1;(statearr_13190_13258[1] = 33);
} else
{var statearr_13191_13259 = state_13144__$1;(statearr_13191_13259[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 25))
{var inst_13086 = (state_13144[20]);var inst_13087 = (state_13144[11]);var inst_13089 = (inst_13087 < inst_13086);var inst_13090 = inst_13089;var state_13144__$1 = state_13144;if(cljs.core.truth_(inst_13090))
{var statearr_13192_13260 = state_13144__$1;(statearr_13192_13260[1] = 27);
} else
{var statearr_13193_13261 = state_13144__$1;(statearr_13193_13261[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 34))
{var state_13144__$1 = state_13144;var statearr_13194_13262 = state_13144__$1;(statearr_13194_13262[2] = null);
(statearr_13194_13262[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 17))
{var state_13144__$1 = state_13144;var statearr_13195_13263 = state_13144__$1;(statearr_13195_13263[2] = null);
(statearr_13195_13263[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 3))
{var inst_13142 = (state_13144[2]);var state_13144__$1 = state_13144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13144__$1,inst_13142);
} else
{if((state_val_13145 === 12))
{var inst_13071 = (state_13144[2]);var state_13144__$1 = state_13144;var statearr_13196_13264 = state_13144__$1;(statearr_13196_13264[2] = inst_13071);
(statearr_13196_13264[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 2))
{var state_13144__$1 = state_13144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13144__$1,4,ch);
} else
{if((state_val_13145 === 23))
{var state_13144__$1 = state_13144;var statearr_13197_13265 = state_13144__$1;(statearr_13197_13265[2] = null);
(statearr_13197_13265[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 35))
{var inst_13126 = (state_13144[2]);var state_13144__$1 = state_13144;var statearr_13198_13266 = state_13144__$1;(statearr_13198_13266[2] = inst_13126);
(statearr_13198_13266[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 19))
{var inst_13045 = (state_13144[7]);var inst_13049 = cljs.core.chunk_first.call(null,inst_13045);var inst_13050 = cljs.core.chunk_rest.call(null,inst_13045);var inst_13051 = cljs.core.count.call(null,inst_13049);var inst_13025 = inst_13050;var inst_13026 = inst_13049;var inst_13027 = inst_13051;var inst_13028 = 0;var state_13144__$1 = (function (){var statearr_13199 = state_13144;(statearr_13199[13] = inst_13025);
(statearr_13199[14] = inst_13026);
(statearr_13199[15] = inst_13028);
(statearr_13199[16] = inst_13027);
return statearr_13199;
})();var statearr_13200_13267 = state_13144__$1;(statearr_13200_13267[2] = null);
(statearr_13200_13267[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 11))
{var inst_13025 = (state_13144[13]);var inst_13045 = (state_13144[7]);var inst_13045__$1 = cljs.core.seq.call(null,inst_13025);var state_13144__$1 = (function (){var statearr_13201 = state_13144;(statearr_13201[7] = inst_13045__$1);
return statearr_13201;
})();if(inst_13045__$1)
{var statearr_13202_13268 = state_13144__$1;(statearr_13202_13268[1] = 16);
} else
{var statearr_13203_13269 = state_13144__$1;(statearr_13203_13269[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 9))
{var inst_13073 = (state_13144[2]);var state_13144__$1 = state_13144;var statearr_13204_13270 = state_13144__$1;(statearr_13204_13270[2] = inst_13073);
(statearr_13204_13270[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 5))
{var inst_13023 = cljs.core.deref.call(null,cs);var inst_13024 = cljs.core.seq.call(null,inst_13023);var inst_13025 = inst_13024;var inst_13026 = null;var inst_13027 = 0;var inst_13028 = 0;var state_13144__$1 = (function (){var statearr_13205 = state_13144;(statearr_13205[13] = inst_13025);
(statearr_13205[14] = inst_13026);
(statearr_13205[15] = inst_13028);
(statearr_13205[16] = inst_13027);
return statearr_13205;
})();var statearr_13206_13271 = state_13144__$1;(statearr_13206_13271[2] = null);
(statearr_13206_13271[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 14))
{var state_13144__$1 = state_13144;var statearr_13207_13272 = state_13144__$1;(statearr_13207_13272[2] = null);
(statearr_13207_13272[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 45))
{var inst_13134 = (state_13144[2]);var state_13144__$1 = state_13144;var statearr_13208_13273 = state_13144__$1;(statearr_13208_13273[2] = inst_13134);
(statearr_13208_13273[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 26))
{var inst_13076 = (state_13144[29]);var inst_13130 = (state_13144[2]);var inst_13131 = cljs.core.seq.call(null,inst_13076);var state_13144__$1 = (function (){var statearr_13209 = state_13144;(statearr_13209[31] = inst_13130);
return statearr_13209;
})();if(inst_13131)
{var statearr_13210_13274 = state_13144__$1;(statearr_13210_13274[1] = 42);
} else
{var statearr_13211_13275 = state_13144__$1;(statearr_13211_13275[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 16))
{var inst_13045 = (state_13144[7]);var inst_13047 = cljs.core.chunked_seq_QMARK_.call(null,inst_13045);var state_13144__$1 = state_13144;if(inst_13047)
{var statearr_13212_13276 = state_13144__$1;(statearr_13212_13276[1] = 19);
} else
{var statearr_13213_13277 = state_13144__$1;(statearr_13213_13277[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 38))
{var inst_13123 = (state_13144[2]);var state_13144__$1 = state_13144;var statearr_13214_13278 = state_13144__$1;(statearr_13214_13278[2] = inst_13123);
(statearr_13214_13278[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 30))
{var state_13144__$1 = state_13144;var statearr_13215_13279 = state_13144__$1;(statearr_13215_13279[2] = null);
(statearr_13215_13279[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 10))
{var inst_13026 = (state_13144[14]);var inst_13028 = (state_13144[15]);var inst_13034 = cljs.core._nth.call(null,inst_13026,inst_13028);var inst_13035 = cljs.core.nth.call(null,inst_13034,0,null);var inst_13036 = cljs.core.nth.call(null,inst_13034,1,null);var state_13144__$1 = (function (){var statearr_13216 = state_13144;(statearr_13216[26] = inst_13035);
return statearr_13216;
})();if(cljs.core.truth_(inst_13036))
{var statearr_13217_13280 = state_13144__$1;(statearr_13217_13280[1] = 13);
} else
{var statearr_13218_13281 = state_13144__$1;(statearr_13218_13281[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 18))
{var inst_13069 = (state_13144[2]);var state_13144__$1 = state_13144;var statearr_13219_13282 = state_13144__$1;(statearr_13219_13282[2] = inst_13069);
(statearr_13219_13282[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 42))
{var state_13144__$1 = state_13144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13144__$1,45,dchan);
} else
{if((state_val_13145 === 37))
{var inst_13016 = (state_13144[9]);var inst_13103 = (state_13144[25]);var inst_13112 = (state_13144[23]);var inst_13112__$1 = cljs.core.first.call(null,inst_13103);var inst_13113 = cljs.core.async.put_BANG_.call(null,inst_13112__$1,inst_13016,done);var state_13144__$1 = (function (){var statearr_13220 = state_13144;(statearr_13220[23] = inst_13112__$1);
return statearr_13220;
})();if(cljs.core.truth_(inst_13113))
{var statearr_13221_13283 = state_13144__$1;(statearr_13221_13283[1] = 39);
} else
{var statearr_13222_13284 = state_13144__$1;(statearr_13222_13284[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 8))
{var inst_13028 = (state_13144[15]);var inst_13027 = (state_13144[16]);var inst_13030 = (inst_13028 < inst_13027);var inst_13031 = inst_13030;var state_13144__$1 = state_13144;if(cljs.core.truth_(inst_13031))
{var statearr_13223_13285 = state_13144__$1;(statearr_13223_13285[1] = 10);
} else
{var statearr_13224_13286 = state_13144__$1;(statearr_13224_13286[1] = 11);
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
});})(c__8952__auto___13232,cs,m,dchan,dctr,done))
;return ((function (switch__8888__auto__,c__8952__auto___13232,cs,m,dchan,dctr,done){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_13228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13228[0] = state_machine__8889__auto__);
(statearr_13228[1] = 1);
return statearr_13228;
});
var state_machine__8889__auto____1 = (function (state_13144){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_13144);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e13229){if((e13229 instanceof Object))
{var ex__8892__auto__ = e13229;var statearr_13230_13287 = state_13144;(statearr_13230_13287[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13144);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13288 = state_13144;
state_13144 = G__13288;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_13144){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_13144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___13232,cs,m,dchan,dctr,done))
})();var state__8954__auto__ = (function (){var statearr_13231 = f__8953__auto__.call(null);(statearr_13231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___13232);
return statearr_13231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___13232,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13290 = {};return obj13290;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__6192__auto__ = m;if(and__6192__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__6192__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__6831__auto__ = (((m == null))?null:m);return (function (){var or__6204__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6831__auto__)]);if(or__6204__auto__)
{return or__6204__auto__;
} else
{var or__6204__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__6204__auto____$1)
{return or__6204__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__6192__auto__ = m;if(and__6192__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__6192__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__6831__auto__ = (((m == null))?null:m);return (function (){var or__6204__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6831__auto__)]);if(or__6204__auto__)
{return or__6204__auto__;
} else
{var or__6204__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__6204__auto____$1)
{return or__6204__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__6192__auto__ = m;if(and__6192__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__6192__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__6831__auto__ = (((m == null))?null:m);return (function (){var or__6204__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6831__auto__)]);if(or__6204__auto__)
{return or__6204__auto__;
} else
{var or__6204__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__6204__auto____$1)
{return or__6204__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__6192__auto__ = m;if(and__6192__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__6192__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__6831__auto__ = (((m == null))?null:m);return (function (){var or__6204__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6831__auto__)]);if(or__6204__auto__)
{return or__6204__auto__;
} else
{var or__6204__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__6204__auto____$1)
{return or__6204__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__6192__auto__ = m;if(and__6192__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__6192__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__6831__auto__ = (((m == null))?null:m);return (function (){var or__6204__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6831__auto__)]);if(or__6204__auto__)
{return or__6204__auto__;
} else
{var or__6204__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__6204__auto____$1)
{return or__6204__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t13410 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13410 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13411){
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
this.meta13411 = meta13411;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13410.cljs$lang$type = true;
cljs.core.async.t13410.cljs$lang$ctorStr = "cljs.core.async/t13410";
cljs.core.async.t13410.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6771__auto__,writer__6772__auto__,opt__6773__auto__){return cljs.core._write.call(null,writer__6772__auto__,"cljs.core.async/t13410");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13410.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13410.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13410.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13410.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13410.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13410.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13410.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13410.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13412){var self__ = this;
var _13412__$1 = this;return self__.meta13411;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13412,meta13411__$1){var self__ = this;
var _13412__$1 = this;return (new cljs.core.async.t13410(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13411__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13410 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13410(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13411){return (new cljs.core.async.t13410(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13411));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13410(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__8952__auto___13529 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___13529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___13529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13482){var state_val_13483 = (state_13482[1]);if((state_val_13483 === 7))
{var inst_13426 = (state_13482[7]);var inst_13431 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13426);var state_13482__$1 = state_13482;var statearr_13484_13530 = state_13482__$1;(statearr_13484_13530[2] = inst_13431);
(statearr_13484_13530[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 20))
{var inst_13441 = (state_13482[8]);var state_13482__$1 = state_13482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13482__$1,23,out,inst_13441);
} else
{if((state_val_13483 === 1))
{var inst_13416 = (state_13482[9]);var inst_13416__$1 = calc_state.call(null);var inst_13417 = cljs.core.seq_QMARK_.call(null,inst_13416__$1);var state_13482__$1 = (function (){var statearr_13485 = state_13482;(statearr_13485[9] = inst_13416__$1);
return statearr_13485;
})();if(inst_13417)
{var statearr_13486_13531 = state_13482__$1;(statearr_13486_13531[1] = 2);
} else
{var statearr_13487_13532 = state_13482__$1;(statearr_13487_13532[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 24))
{var inst_13434 = (state_13482[10]);var inst_13426 = inst_13434;var state_13482__$1 = (function (){var statearr_13488 = state_13482;(statearr_13488[7] = inst_13426);
return statearr_13488;
})();var statearr_13489_13533 = state_13482__$1;(statearr_13489_13533[2] = null);
(statearr_13489_13533[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 4))
{var inst_13416 = (state_13482[9]);var inst_13422 = (state_13482[2]);var inst_13423 = cljs.core.get.call(null,inst_13422,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13424 = cljs.core.get.call(null,inst_13422,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13425 = cljs.core.get.call(null,inst_13422,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13426 = inst_13416;var state_13482__$1 = (function (){var statearr_13490 = state_13482;(statearr_13490[11] = inst_13423);
(statearr_13490[12] = inst_13424);
(statearr_13490[7] = inst_13426);
(statearr_13490[13] = inst_13425);
return statearr_13490;
})();var statearr_13491_13534 = state_13482__$1;(statearr_13491_13534[2] = null);
(statearr_13491_13534[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 15))
{var state_13482__$1 = state_13482;var statearr_13492_13535 = state_13482__$1;(statearr_13492_13535[2] = null);
(statearr_13492_13535[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 21))
{var inst_13434 = (state_13482[10]);var inst_13426 = inst_13434;var state_13482__$1 = (function (){var statearr_13493 = state_13482;(statearr_13493[7] = inst_13426);
return statearr_13493;
})();var statearr_13494_13536 = state_13482__$1;(statearr_13494_13536[2] = null);
(statearr_13494_13536[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 13))
{var inst_13478 = (state_13482[2]);var state_13482__$1 = state_13482;var statearr_13495_13537 = state_13482__$1;(statearr_13495_13537[2] = inst_13478);
(statearr_13495_13537[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 22))
{var inst_13476 = (state_13482[2]);var state_13482__$1 = state_13482;var statearr_13496_13538 = state_13482__$1;(statearr_13496_13538[2] = inst_13476);
(statearr_13496_13538[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 6))
{var inst_13480 = (state_13482[2]);var state_13482__$1 = state_13482;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13482__$1,inst_13480);
} else
{if((state_val_13483 === 25))
{var state_13482__$1 = state_13482;var statearr_13497_13539 = state_13482__$1;(statearr_13497_13539[2] = null);
(statearr_13497_13539[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 17))
{var inst_13456 = (state_13482[14]);var state_13482__$1 = state_13482;var statearr_13498_13540 = state_13482__$1;(statearr_13498_13540[2] = inst_13456);
(statearr_13498_13540[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 3))
{var inst_13416 = (state_13482[9]);var state_13482__$1 = state_13482;var statearr_13499_13541 = state_13482__$1;(statearr_13499_13541[2] = inst_13416);
(statearr_13499_13541[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 12))
{var inst_13456 = (state_13482[14]);var inst_13437 = (state_13482[15]);var inst_13442 = (state_13482[16]);var inst_13456__$1 = inst_13437.call(null,inst_13442);var state_13482__$1 = (function (){var statearr_13500 = state_13482;(statearr_13500[14] = inst_13456__$1);
return statearr_13500;
})();if(cljs.core.truth_(inst_13456__$1))
{var statearr_13501_13542 = state_13482__$1;(statearr_13501_13542[1] = 17);
} else
{var statearr_13502_13543 = state_13482__$1;(statearr_13502_13543[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 2))
{var inst_13416 = (state_13482[9]);var inst_13419 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13416);var state_13482__$1 = state_13482;var statearr_13503_13544 = state_13482__$1;(statearr_13503_13544[2] = inst_13419);
(statearr_13503_13544[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 23))
{var inst_13467 = (state_13482[2]);var state_13482__$1 = state_13482;if(cljs.core.truth_(inst_13467))
{var statearr_13504_13545 = state_13482__$1;(statearr_13504_13545[1] = 24);
} else
{var statearr_13505_13546 = state_13482__$1;(statearr_13505_13546[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 19))
{var inst_13464 = (state_13482[2]);var state_13482__$1 = state_13482;if(cljs.core.truth_(inst_13464))
{var statearr_13506_13547 = state_13482__$1;(statearr_13506_13547[1] = 20);
} else
{var statearr_13507_13548 = state_13482__$1;(statearr_13507_13548[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 11))
{var inst_13441 = (state_13482[8]);var inst_13447 = (inst_13441 == null);var state_13482__$1 = state_13482;if(cljs.core.truth_(inst_13447))
{var statearr_13508_13549 = state_13482__$1;(statearr_13508_13549[1] = 14);
} else
{var statearr_13509_13550 = state_13482__$1;(statearr_13509_13550[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 9))
{var inst_13434 = (state_13482[10]);var inst_13434__$1 = (state_13482[2]);var inst_13435 = cljs.core.get.call(null,inst_13434__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13436 = cljs.core.get.call(null,inst_13434__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13437 = cljs.core.get.call(null,inst_13434__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13482__$1 = (function (){var statearr_13510 = state_13482;(statearr_13510[17] = inst_13436);
(statearr_13510[10] = inst_13434__$1);
(statearr_13510[15] = inst_13437);
return statearr_13510;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13482__$1,10,inst_13435);
} else
{if((state_val_13483 === 5))
{var inst_13426 = (state_13482[7]);var inst_13429 = cljs.core.seq_QMARK_.call(null,inst_13426);var state_13482__$1 = state_13482;if(inst_13429)
{var statearr_13511_13551 = state_13482__$1;(statearr_13511_13551[1] = 7);
} else
{var statearr_13512_13552 = state_13482__$1;(statearr_13512_13552[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 14))
{var inst_13442 = (state_13482[16]);var inst_13449 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13442);var state_13482__$1 = state_13482;var statearr_13513_13553 = state_13482__$1;(statearr_13513_13553[2] = inst_13449);
(statearr_13513_13553[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 26))
{var inst_13472 = (state_13482[2]);var state_13482__$1 = state_13482;var statearr_13514_13554 = state_13482__$1;(statearr_13514_13554[2] = inst_13472);
(statearr_13514_13554[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 16))
{var inst_13452 = (state_13482[2]);var inst_13453 = calc_state.call(null);var inst_13426 = inst_13453;var state_13482__$1 = (function (){var statearr_13515 = state_13482;(statearr_13515[18] = inst_13452);
(statearr_13515[7] = inst_13426);
return statearr_13515;
})();var statearr_13516_13555 = state_13482__$1;(statearr_13516_13555[2] = null);
(statearr_13516_13555[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 10))
{var inst_13441 = (state_13482[8]);var inst_13442 = (state_13482[16]);var inst_13440 = (state_13482[2]);var inst_13441__$1 = cljs.core.nth.call(null,inst_13440,0,null);var inst_13442__$1 = cljs.core.nth.call(null,inst_13440,1,null);var inst_13443 = (inst_13441__$1 == null);var inst_13444 = cljs.core._EQ_.call(null,inst_13442__$1,change);var inst_13445 = (inst_13443) || (inst_13444);var state_13482__$1 = (function (){var statearr_13517 = state_13482;(statearr_13517[8] = inst_13441__$1);
(statearr_13517[16] = inst_13442__$1);
return statearr_13517;
})();if(cljs.core.truth_(inst_13445))
{var statearr_13518_13556 = state_13482__$1;(statearr_13518_13556[1] = 11);
} else
{var statearr_13519_13557 = state_13482__$1;(statearr_13519_13557[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 18))
{var inst_13436 = (state_13482[17]);var inst_13437 = (state_13482[15]);var inst_13442 = (state_13482[16]);var inst_13459 = cljs.core.empty_QMARK_.call(null,inst_13437);var inst_13460 = inst_13436.call(null,inst_13442);var inst_13461 = cljs.core.not.call(null,inst_13460);var inst_13462 = (inst_13459) && (inst_13461);var state_13482__$1 = state_13482;var statearr_13520_13558 = state_13482__$1;(statearr_13520_13558[2] = inst_13462);
(statearr_13520_13558[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 8))
{var inst_13426 = (state_13482[7]);var state_13482__$1 = state_13482;var statearr_13521_13559 = state_13482__$1;(statearr_13521_13559[2] = inst_13426);
(statearr_13521_13559[1] = 9);
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
});})(c__8952__auto___13529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__8888__auto__,c__8952__auto___13529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_13525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13525[0] = state_machine__8889__auto__);
(statearr_13525[1] = 1);
return statearr_13525;
});
var state_machine__8889__auto____1 = (function (state_13482){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_13482);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e13526){if((e13526 instanceof Object))
{var ex__8892__auto__ = e13526;var statearr_13527_13560 = state_13482;(statearr_13527_13560[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13482);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13561 = state_13482;
state_13482 = G__13561;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_13482){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_13482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___13529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__8954__auto__ = (function (){var statearr_13528 = f__8953__auto__.call(null);(statearr_13528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___13529);
return statearr_13528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___13529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj13563 = {};return obj13563;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__6192__auto__ = p;if(and__6192__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__6192__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__6831__auto__ = (((p == null))?null:p);return (function (){var or__6204__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6831__auto__)]);if(or__6204__auto__)
{return or__6204__auto__;
} else
{var or__6204__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__6204__auto____$1)
{return or__6204__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__6192__auto__ = p;if(and__6192__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__6192__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__6831__auto__ = (((p == null))?null:p);return (function (){var or__6204__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6831__auto__)]);if(or__6204__auto__)
{return or__6204__auto__;
} else
{var or__6204__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__6204__auto____$1)
{return or__6204__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__6192__auto__ = p;if(and__6192__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__6192__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__6831__auto__ = (((p == null))?null:p);return (function (){var or__6204__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6831__auto__)]);if(or__6204__auto__)
{return or__6204__auto__;
} else
{var or__6204__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__6204__auto____$1)
{return or__6204__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__6192__auto__ = p;if(and__6192__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__6192__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__6831__auto__ = (((p == null))?null:p);return (function (){var or__6204__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6831__auto__)]);if(or__6204__auto__)
{return or__6204__auto__;
} else
{var or__6204__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__6204__auto____$1)
{return or__6204__auto____$1;
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
return (function (topic){var or__6204__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__6204__auto__))
{return or__6204__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6204__auto__,mults){
return (function (p1__13564_SHARP_){if(cljs.core.truth_(p1__13564_SHARP_.call(null,topic)))
{return p1__13564_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13564_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6204__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13687 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13687 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13688){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13688 = meta13688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13687.cljs$lang$type = true;
cljs.core.async.t13687.cljs$lang$ctorStr = "cljs.core.async/t13687";
cljs.core.async.t13687.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6771__auto__,writer__6772__auto__,opt__6773__auto__){return cljs.core._write.call(null,writer__6772__auto__,"cljs.core.async/t13687");
});})(mults,ensure_mult))
;
cljs.core.async.t13687.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13687.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13687.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13687.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13687.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13687.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13687.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13689){var self__ = this;
var _13689__$1 = this;return self__.meta13688;
});})(mults,ensure_mult))
;
cljs.core.async.t13687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13689,meta13688__$1){var self__ = this;
var _13689__$1 = this;return (new cljs.core.async.t13687(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13688__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13687 = ((function (mults,ensure_mult){
return (function __GT_t13687(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13688){return (new cljs.core.async.t13687(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13688));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13687(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8952__auto___13809 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___13809,mults,ensure_mult,p){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___13809,mults,ensure_mult,p){
return (function (state_13761){var state_val_13762 = (state_13761[1]);if((state_val_13762 === 7))
{var inst_13757 = (state_13761[2]);var state_13761__$1 = state_13761;var statearr_13763_13810 = state_13761__$1;(statearr_13763_13810[2] = inst_13757);
(statearr_13763_13810[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 20))
{var state_13761__$1 = state_13761;var statearr_13764_13811 = state_13761__$1;(statearr_13764_13811[2] = null);
(statearr_13764_13811[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 1))
{var state_13761__$1 = state_13761;var statearr_13765_13812 = state_13761__$1;(statearr_13765_13812[2] = null);
(statearr_13765_13812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 24))
{var inst_13740 = (state_13761[7]);var inst_13749 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13740);var state_13761__$1 = state_13761;var statearr_13766_13813 = state_13761__$1;(statearr_13766_13813[2] = inst_13749);
(statearr_13766_13813[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 4))
{var inst_13692 = (state_13761[8]);var inst_13692__$1 = (state_13761[2]);var inst_13693 = (inst_13692__$1 == null);var state_13761__$1 = (function (){var statearr_13767 = state_13761;(statearr_13767[8] = inst_13692__$1);
return statearr_13767;
})();if(cljs.core.truth_(inst_13693))
{var statearr_13768_13814 = state_13761__$1;(statearr_13768_13814[1] = 5);
} else
{var statearr_13769_13815 = state_13761__$1;(statearr_13769_13815[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 15))
{var inst_13734 = (state_13761[2]);var state_13761__$1 = state_13761;var statearr_13770_13816 = state_13761__$1;(statearr_13770_13816[2] = inst_13734);
(statearr_13770_13816[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 21))
{var inst_13754 = (state_13761[2]);var state_13761__$1 = (function (){var statearr_13771 = state_13761;(statearr_13771[9] = inst_13754);
return statearr_13771;
})();var statearr_13772_13817 = state_13761__$1;(statearr_13772_13817[2] = null);
(statearr_13772_13817[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 13))
{var inst_13716 = (state_13761[10]);var inst_13718 = cljs.core.chunked_seq_QMARK_.call(null,inst_13716);var state_13761__$1 = state_13761;if(inst_13718)
{var statearr_13773_13818 = state_13761__$1;(statearr_13773_13818[1] = 16);
} else
{var statearr_13774_13819 = state_13761__$1;(statearr_13774_13819[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 22))
{var inst_13746 = (state_13761[2]);var state_13761__$1 = state_13761;if(cljs.core.truth_(inst_13746))
{var statearr_13775_13820 = state_13761__$1;(statearr_13775_13820[1] = 23);
} else
{var statearr_13776_13821 = state_13761__$1;(statearr_13776_13821[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 6))
{var inst_13742 = (state_13761[11]);var inst_13740 = (state_13761[7]);var inst_13692 = (state_13761[8]);var inst_13740__$1 = topic_fn.call(null,inst_13692);var inst_13741 = cljs.core.deref.call(null,mults);var inst_13742__$1 = cljs.core.get.call(null,inst_13741,inst_13740__$1);var state_13761__$1 = (function (){var statearr_13777 = state_13761;(statearr_13777[11] = inst_13742__$1);
(statearr_13777[7] = inst_13740__$1);
return statearr_13777;
})();if(cljs.core.truth_(inst_13742__$1))
{var statearr_13778_13822 = state_13761__$1;(statearr_13778_13822[1] = 19);
} else
{var statearr_13779_13823 = state_13761__$1;(statearr_13779_13823[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 25))
{var inst_13751 = (state_13761[2]);var state_13761__$1 = state_13761;var statearr_13780_13824 = state_13761__$1;(statearr_13780_13824[2] = inst_13751);
(statearr_13780_13824[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 17))
{var inst_13716 = (state_13761[10]);var inst_13725 = cljs.core.first.call(null,inst_13716);var inst_13726 = cljs.core.async.muxch_STAR_.call(null,inst_13725);var inst_13727 = cljs.core.async.close_BANG_.call(null,inst_13726);var inst_13728 = cljs.core.next.call(null,inst_13716);var inst_13702 = inst_13728;var inst_13703 = null;var inst_13704 = 0;var inst_13705 = 0;var state_13761__$1 = (function (){var statearr_13781 = state_13761;(statearr_13781[12] = inst_13702);
(statearr_13781[13] = inst_13705);
(statearr_13781[14] = inst_13727);
(statearr_13781[15] = inst_13703);
(statearr_13781[16] = inst_13704);
return statearr_13781;
})();var statearr_13782_13825 = state_13761__$1;(statearr_13782_13825[2] = null);
(statearr_13782_13825[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 3))
{var inst_13759 = (state_13761[2]);var state_13761__$1 = state_13761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13761__$1,inst_13759);
} else
{if((state_val_13762 === 12))
{var inst_13736 = (state_13761[2]);var state_13761__$1 = state_13761;var statearr_13783_13826 = state_13761__$1;(statearr_13783_13826[2] = inst_13736);
(statearr_13783_13826[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 2))
{var state_13761__$1 = state_13761;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13761__$1,4,ch);
} else
{if((state_val_13762 === 23))
{var state_13761__$1 = state_13761;var statearr_13784_13827 = state_13761__$1;(statearr_13784_13827[2] = null);
(statearr_13784_13827[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 19))
{var inst_13742 = (state_13761[11]);var inst_13692 = (state_13761[8]);var inst_13744 = cljs.core.async.muxch_STAR_.call(null,inst_13742);var state_13761__$1 = state_13761;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13761__$1,22,inst_13744,inst_13692);
} else
{if((state_val_13762 === 11))
{var inst_13702 = (state_13761[12]);var inst_13716 = (state_13761[10]);var inst_13716__$1 = cljs.core.seq.call(null,inst_13702);var state_13761__$1 = (function (){var statearr_13785 = state_13761;(statearr_13785[10] = inst_13716__$1);
return statearr_13785;
})();if(inst_13716__$1)
{var statearr_13786_13828 = state_13761__$1;(statearr_13786_13828[1] = 13);
} else
{var statearr_13787_13829 = state_13761__$1;(statearr_13787_13829[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 9))
{var inst_13738 = (state_13761[2]);var state_13761__$1 = state_13761;var statearr_13788_13830 = state_13761__$1;(statearr_13788_13830[2] = inst_13738);
(statearr_13788_13830[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 5))
{var inst_13699 = cljs.core.deref.call(null,mults);var inst_13700 = cljs.core.vals.call(null,inst_13699);var inst_13701 = cljs.core.seq.call(null,inst_13700);var inst_13702 = inst_13701;var inst_13703 = null;var inst_13704 = 0;var inst_13705 = 0;var state_13761__$1 = (function (){var statearr_13789 = state_13761;(statearr_13789[12] = inst_13702);
(statearr_13789[13] = inst_13705);
(statearr_13789[15] = inst_13703);
(statearr_13789[16] = inst_13704);
return statearr_13789;
})();var statearr_13790_13831 = state_13761__$1;(statearr_13790_13831[2] = null);
(statearr_13790_13831[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 14))
{var state_13761__$1 = state_13761;var statearr_13794_13832 = state_13761__$1;(statearr_13794_13832[2] = null);
(statearr_13794_13832[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 16))
{var inst_13716 = (state_13761[10]);var inst_13720 = cljs.core.chunk_first.call(null,inst_13716);var inst_13721 = cljs.core.chunk_rest.call(null,inst_13716);var inst_13722 = cljs.core.count.call(null,inst_13720);var inst_13702 = inst_13721;var inst_13703 = inst_13720;var inst_13704 = inst_13722;var inst_13705 = 0;var state_13761__$1 = (function (){var statearr_13795 = state_13761;(statearr_13795[12] = inst_13702);
(statearr_13795[13] = inst_13705);
(statearr_13795[15] = inst_13703);
(statearr_13795[16] = inst_13704);
return statearr_13795;
})();var statearr_13796_13833 = state_13761__$1;(statearr_13796_13833[2] = null);
(statearr_13796_13833[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 10))
{var inst_13702 = (state_13761[12]);var inst_13705 = (state_13761[13]);var inst_13703 = (state_13761[15]);var inst_13704 = (state_13761[16]);var inst_13710 = cljs.core._nth.call(null,inst_13703,inst_13705);var inst_13711 = cljs.core.async.muxch_STAR_.call(null,inst_13710);var inst_13712 = cljs.core.async.close_BANG_.call(null,inst_13711);var inst_13713 = (inst_13705 + 1);var tmp13791 = inst_13702;var tmp13792 = inst_13703;var tmp13793 = inst_13704;var inst_13702__$1 = tmp13791;var inst_13703__$1 = tmp13792;var inst_13704__$1 = tmp13793;var inst_13705__$1 = inst_13713;var state_13761__$1 = (function (){var statearr_13797 = state_13761;(statearr_13797[12] = inst_13702__$1);
(statearr_13797[13] = inst_13705__$1);
(statearr_13797[15] = inst_13703__$1);
(statearr_13797[17] = inst_13712);
(statearr_13797[16] = inst_13704__$1);
return statearr_13797;
})();var statearr_13798_13834 = state_13761__$1;(statearr_13798_13834[2] = null);
(statearr_13798_13834[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 18))
{var inst_13731 = (state_13761[2]);var state_13761__$1 = state_13761;var statearr_13799_13835 = state_13761__$1;(statearr_13799_13835[2] = inst_13731);
(statearr_13799_13835[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 8))
{var inst_13705 = (state_13761[13]);var inst_13704 = (state_13761[16]);var inst_13707 = (inst_13705 < inst_13704);var inst_13708 = inst_13707;var state_13761__$1 = state_13761;if(cljs.core.truth_(inst_13708))
{var statearr_13800_13836 = state_13761__$1;(statearr_13800_13836[1] = 10);
} else
{var statearr_13801_13837 = state_13761__$1;(statearr_13801_13837[1] = 11);
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
});})(c__8952__auto___13809,mults,ensure_mult,p))
;return ((function (switch__8888__auto__,c__8952__auto___13809,mults,ensure_mult,p){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_13805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13805[0] = state_machine__8889__auto__);
(statearr_13805[1] = 1);
return statearr_13805;
});
var state_machine__8889__auto____1 = (function (state_13761){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_13761);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e13806){if((e13806 instanceof Object))
{var ex__8892__auto__ = e13806;var statearr_13807_13838 = state_13761;(statearr_13807_13838[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13761);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13806;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13839 = state_13761;
state_13761 = G__13839;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_13761){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_13761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___13809,mults,ensure_mult,p))
})();var state__8954__auto__ = (function (){var statearr_13808 = f__8953__auto__.call(null);(statearr_13808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___13809);
return statearr_13808;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___13809,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__8952__auto___13976 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___13976,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___13976,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13946){var state_val_13947 = (state_13946[1]);if((state_val_13947 === 7))
{var state_13946__$1 = state_13946;var statearr_13948_13977 = state_13946__$1;(statearr_13948_13977[2] = null);
(statearr_13948_13977[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13947 === 1))
{var state_13946__$1 = state_13946;var statearr_13949_13978 = state_13946__$1;(statearr_13949_13978[2] = null);
(statearr_13949_13978[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13947 === 4))
{var inst_13910 = (state_13946[7]);var inst_13912 = (inst_13910 < cnt);var state_13946__$1 = state_13946;if(cljs.core.truth_(inst_13912))
{var statearr_13950_13979 = state_13946__$1;(statearr_13950_13979[1] = 6);
} else
{var statearr_13951_13980 = state_13946__$1;(statearr_13951_13980[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13947 === 15))
{var inst_13942 = (state_13946[2]);var state_13946__$1 = state_13946;var statearr_13952_13981 = state_13946__$1;(statearr_13952_13981[2] = inst_13942);
(statearr_13952_13981[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13947 === 13))
{var inst_13935 = cljs.core.async.close_BANG_.call(null,out);var state_13946__$1 = state_13946;var statearr_13953_13982 = state_13946__$1;(statearr_13953_13982[2] = inst_13935);
(statearr_13953_13982[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13947 === 6))
{var state_13946__$1 = state_13946;var statearr_13954_13983 = state_13946__$1;(statearr_13954_13983[2] = null);
(statearr_13954_13983[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13947 === 3))
{var inst_13944 = (state_13946[2]);var state_13946__$1 = state_13946;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13946__$1,inst_13944);
} else
{if((state_val_13947 === 12))
{var inst_13932 = (state_13946[8]);var inst_13932__$1 = (state_13946[2]);var inst_13933 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13932__$1);var state_13946__$1 = (function (){var statearr_13955 = state_13946;(statearr_13955[8] = inst_13932__$1);
return statearr_13955;
})();if(cljs.core.truth_(inst_13933))
{var statearr_13956_13984 = state_13946__$1;(statearr_13956_13984[1] = 13);
} else
{var statearr_13957_13985 = state_13946__$1;(statearr_13957_13985[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13947 === 2))
{var inst_13909 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13910 = 0;var state_13946__$1 = (function (){var statearr_13958 = state_13946;(statearr_13958[7] = inst_13910);
(statearr_13958[9] = inst_13909);
return statearr_13958;
})();var statearr_13959_13986 = state_13946__$1;(statearr_13959_13986[2] = null);
(statearr_13959_13986[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13947 === 11))
{var inst_13910 = (state_13946[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13946,10,Object,null,9);var inst_13919 = chs__$1.call(null,inst_13910);var inst_13920 = done.call(null,inst_13910);var inst_13921 = cljs.core.async.take_BANG_.call(null,inst_13919,inst_13920);var state_13946__$1 = state_13946;var statearr_13960_13987 = state_13946__$1;(statearr_13960_13987[2] = inst_13921);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13946__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13947 === 9))
{var inst_13910 = (state_13946[7]);var inst_13923 = (state_13946[2]);var inst_13924 = (inst_13910 + 1);var inst_13910__$1 = inst_13924;var state_13946__$1 = (function (){var statearr_13961 = state_13946;(statearr_13961[10] = inst_13923);
(statearr_13961[7] = inst_13910__$1);
return statearr_13961;
})();var statearr_13962_13988 = state_13946__$1;(statearr_13962_13988[2] = null);
(statearr_13962_13988[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13947 === 5))
{var inst_13930 = (state_13946[2]);var state_13946__$1 = (function (){var statearr_13963 = state_13946;(statearr_13963[11] = inst_13930);
return statearr_13963;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13946__$1,12,dchan);
} else
{if((state_val_13947 === 14))
{var inst_13932 = (state_13946[8]);var inst_13937 = cljs.core.apply.call(null,f,inst_13932);var state_13946__$1 = state_13946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13946__$1,16,out,inst_13937);
} else
{if((state_val_13947 === 16))
{var inst_13939 = (state_13946[2]);var state_13946__$1 = (function (){var statearr_13964 = state_13946;(statearr_13964[12] = inst_13939);
return statearr_13964;
})();var statearr_13965_13989 = state_13946__$1;(statearr_13965_13989[2] = null);
(statearr_13965_13989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13947 === 10))
{var inst_13914 = (state_13946[2]);var inst_13915 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13946__$1 = (function (){var statearr_13966 = state_13946;(statearr_13966[13] = inst_13914);
return statearr_13966;
})();var statearr_13967_13990 = state_13946__$1;(statearr_13967_13990[2] = inst_13915);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13946__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13947 === 8))
{var inst_13928 = (state_13946[2]);var state_13946__$1 = state_13946;var statearr_13968_13991 = state_13946__$1;(statearr_13968_13991[2] = inst_13928);
(statearr_13968_13991[1] = 5);
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
});})(c__8952__auto___13976,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__8888__auto__,c__8952__auto___13976,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_13972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13972[0] = state_machine__8889__auto__);
(statearr_13972[1] = 1);
return statearr_13972;
});
var state_machine__8889__auto____1 = (function (state_13946){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_13946);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e13973){if((e13973 instanceof Object))
{var ex__8892__auto__ = e13973;var statearr_13974_13992 = state_13946;(statearr_13974_13992[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13946);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13973;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13993 = state_13946;
state_13946 = G__13993;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_13946){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_13946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___13976,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__8954__auto__ = (function (){var statearr_13975 = f__8953__auto__.call(null);(statearr_13975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___13976);
return statearr_13975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___13976,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8952__auto___14101 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___14101,out){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___14101,out){
return (function (state_14077){var state_val_14078 = (state_14077[1]);if((state_val_14078 === 7))
{var inst_14056 = (state_14077[7]);var inst_14057 = (state_14077[8]);var inst_14056__$1 = (state_14077[2]);var inst_14057__$1 = cljs.core.nth.call(null,inst_14056__$1,0,null);var inst_14058 = cljs.core.nth.call(null,inst_14056__$1,1,null);var inst_14059 = (inst_14057__$1 == null);var state_14077__$1 = (function (){var statearr_14079 = state_14077;(statearr_14079[7] = inst_14056__$1);
(statearr_14079[9] = inst_14058);
(statearr_14079[8] = inst_14057__$1);
return statearr_14079;
})();if(cljs.core.truth_(inst_14059))
{var statearr_14080_14102 = state_14077__$1;(statearr_14080_14102[1] = 8);
} else
{var statearr_14081_14103 = state_14077__$1;(statearr_14081_14103[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14078 === 1))
{var inst_14048 = cljs.core.vec.call(null,chs);var inst_14049 = inst_14048;var state_14077__$1 = (function (){var statearr_14082 = state_14077;(statearr_14082[10] = inst_14049);
return statearr_14082;
})();var statearr_14083_14104 = state_14077__$1;(statearr_14083_14104[2] = null);
(statearr_14083_14104[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14078 === 4))
{var inst_14049 = (state_14077[10]);var state_14077__$1 = state_14077;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14077__$1,7,inst_14049);
} else
{if((state_val_14078 === 6))
{var inst_14073 = (state_14077[2]);var state_14077__$1 = state_14077;var statearr_14084_14105 = state_14077__$1;(statearr_14084_14105[2] = inst_14073);
(statearr_14084_14105[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14078 === 3))
{var inst_14075 = (state_14077[2]);var state_14077__$1 = state_14077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14077__$1,inst_14075);
} else
{if((state_val_14078 === 2))
{var inst_14049 = (state_14077[10]);var inst_14051 = cljs.core.count.call(null,inst_14049);var inst_14052 = (inst_14051 > 0);var state_14077__$1 = state_14077;if(cljs.core.truth_(inst_14052))
{var statearr_14086_14106 = state_14077__$1;(statearr_14086_14106[1] = 4);
} else
{var statearr_14087_14107 = state_14077__$1;(statearr_14087_14107[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14078 === 11))
{var inst_14049 = (state_14077[10]);var inst_14066 = (state_14077[2]);var tmp14085 = inst_14049;var inst_14049__$1 = tmp14085;var state_14077__$1 = (function (){var statearr_14088 = state_14077;(statearr_14088[11] = inst_14066);
(statearr_14088[10] = inst_14049__$1);
return statearr_14088;
})();var statearr_14089_14108 = state_14077__$1;(statearr_14089_14108[2] = null);
(statearr_14089_14108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14078 === 9))
{var inst_14057 = (state_14077[8]);var state_14077__$1 = state_14077;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14077__$1,11,out,inst_14057);
} else
{if((state_val_14078 === 5))
{var inst_14071 = cljs.core.async.close_BANG_.call(null,out);var state_14077__$1 = state_14077;var statearr_14090_14109 = state_14077__$1;(statearr_14090_14109[2] = inst_14071);
(statearr_14090_14109[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14078 === 10))
{var inst_14069 = (state_14077[2]);var state_14077__$1 = state_14077;var statearr_14091_14110 = state_14077__$1;(statearr_14091_14110[2] = inst_14069);
(statearr_14091_14110[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14078 === 8))
{var inst_14056 = (state_14077[7]);var inst_14058 = (state_14077[9]);var inst_14049 = (state_14077[10]);var inst_14057 = (state_14077[8]);var inst_14061 = (function (){var c = inst_14058;var v = inst_14057;var vec__14054 = inst_14056;var cs = inst_14049;return ((function (c,v,vec__14054,cs,inst_14056,inst_14058,inst_14049,inst_14057,state_val_14078,c__8952__auto___14101,out){
return (function (p1__13994_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13994_SHARP_);
});
;})(c,v,vec__14054,cs,inst_14056,inst_14058,inst_14049,inst_14057,state_val_14078,c__8952__auto___14101,out))
})();var inst_14062 = cljs.core.filterv.call(null,inst_14061,inst_14049);var inst_14049__$1 = inst_14062;var state_14077__$1 = (function (){var statearr_14092 = state_14077;(statearr_14092[10] = inst_14049__$1);
return statearr_14092;
})();var statearr_14093_14111 = state_14077__$1;(statearr_14093_14111[2] = null);
(statearr_14093_14111[1] = 2);
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
});})(c__8952__auto___14101,out))
;return ((function (switch__8888__auto__,c__8952__auto___14101,out){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_14097 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14097[0] = state_machine__8889__auto__);
(statearr_14097[1] = 1);
return statearr_14097;
});
var state_machine__8889__auto____1 = (function (state_14077){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_14077);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e14098){if((e14098 instanceof Object))
{var ex__8892__auto__ = e14098;var statearr_14099_14112 = state_14077;(statearr_14099_14112[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14077);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14098;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14113 = state_14077;
state_14077 = G__14113;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_14077){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_14077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___14101,out))
})();var state__8954__auto__ = (function (){var statearr_14100 = f__8953__auto__.call(null);(statearr_14100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___14101);
return statearr_14100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___14101,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8952__auto___14206 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___14206,out){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___14206,out){
return (function (state_14183){var state_val_14184 = (state_14183[1]);if((state_val_14184 === 7))
{var inst_14165 = (state_14183[7]);var inst_14165__$1 = (state_14183[2]);var inst_14166 = (inst_14165__$1 == null);var inst_14167 = cljs.core.not.call(null,inst_14166);var state_14183__$1 = (function (){var statearr_14185 = state_14183;(statearr_14185[7] = inst_14165__$1);
return statearr_14185;
})();if(inst_14167)
{var statearr_14186_14207 = state_14183__$1;(statearr_14186_14207[1] = 8);
} else
{var statearr_14187_14208 = state_14183__$1;(statearr_14187_14208[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14184 === 1))
{var inst_14160 = 0;var state_14183__$1 = (function (){var statearr_14188 = state_14183;(statearr_14188[8] = inst_14160);
return statearr_14188;
})();var statearr_14189_14209 = state_14183__$1;(statearr_14189_14209[2] = null);
(statearr_14189_14209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14184 === 4))
{var state_14183__$1 = state_14183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14183__$1,7,ch);
} else
{if((state_val_14184 === 6))
{var inst_14178 = (state_14183[2]);var state_14183__$1 = state_14183;var statearr_14190_14210 = state_14183__$1;(statearr_14190_14210[2] = inst_14178);
(statearr_14190_14210[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14184 === 3))
{var inst_14180 = (state_14183[2]);var inst_14181 = cljs.core.async.close_BANG_.call(null,out);var state_14183__$1 = (function (){var statearr_14191 = state_14183;(statearr_14191[9] = inst_14180);
return statearr_14191;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14183__$1,inst_14181);
} else
{if((state_val_14184 === 2))
{var inst_14160 = (state_14183[8]);var inst_14162 = (inst_14160 < n);var state_14183__$1 = state_14183;if(cljs.core.truth_(inst_14162))
{var statearr_14192_14211 = state_14183__$1;(statearr_14192_14211[1] = 4);
} else
{var statearr_14193_14212 = state_14183__$1;(statearr_14193_14212[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14184 === 11))
{var inst_14160 = (state_14183[8]);var inst_14170 = (state_14183[2]);var inst_14171 = (inst_14160 + 1);var inst_14160__$1 = inst_14171;var state_14183__$1 = (function (){var statearr_14194 = state_14183;(statearr_14194[10] = inst_14170);
(statearr_14194[8] = inst_14160__$1);
return statearr_14194;
})();var statearr_14195_14213 = state_14183__$1;(statearr_14195_14213[2] = null);
(statearr_14195_14213[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14184 === 9))
{var state_14183__$1 = state_14183;var statearr_14196_14214 = state_14183__$1;(statearr_14196_14214[2] = null);
(statearr_14196_14214[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14184 === 5))
{var state_14183__$1 = state_14183;var statearr_14197_14215 = state_14183__$1;(statearr_14197_14215[2] = null);
(statearr_14197_14215[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14184 === 10))
{var inst_14175 = (state_14183[2]);var state_14183__$1 = state_14183;var statearr_14198_14216 = state_14183__$1;(statearr_14198_14216[2] = inst_14175);
(statearr_14198_14216[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14184 === 8))
{var inst_14165 = (state_14183[7]);var state_14183__$1 = state_14183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14183__$1,11,out,inst_14165);
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
});})(c__8952__auto___14206,out))
;return ((function (switch__8888__auto__,c__8952__auto___14206,out){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_14202 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14202[0] = state_machine__8889__auto__);
(statearr_14202[1] = 1);
return statearr_14202;
});
var state_machine__8889__auto____1 = (function (state_14183){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_14183);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e14203){if((e14203 instanceof Object))
{var ex__8892__auto__ = e14203;var statearr_14204_14217 = state_14183;(statearr_14204_14217[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14183);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14218 = state_14183;
state_14183 = G__14218;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_14183){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_14183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___14206,out))
})();var state__8954__auto__ = (function (){var statearr_14205 = f__8953__auto__.call(null);(statearr_14205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___14206);
return statearr_14205;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___14206,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14226 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14226 = (function (ch,f,map_LT_,meta14227){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14227 = meta14227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14226.cljs$lang$type = true;
cljs.core.async.t14226.cljs$lang$ctorStr = "cljs.core.async/t14226";
cljs.core.async.t14226.cljs$lang$ctorPrWriter = (function (this__6771__auto__,writer__6772__auto__,opt__6773__auto__){return cljs.core._write.call(null,writer__6772__auto__,"cljs.core.async/t14226");
});
cljs.core.async.t14226.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14226.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14226.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14226.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14229 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14229 = (function (fn1,_,meta14227,ch,f,map_LT_,meta14230){
this.fn1 = fn1;
this._ = _;
this.meta14227 = meta14227;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14230 = meta14230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14229.cljs$lang$type = true;
cljs.core.async.t14229.cljs$lang$ctorStr = "cljs.core.async/t14229";
cljs.core.async.t14229.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6771__auto__,writer__6772__auto__,opt__6773__auto__){return cljs.core._write.call(null,writer__6772__auto__,"cljs.core.async/t14229");
});})(___$1))
;
cljs.core.async.t14229.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14229.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14229.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14229.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14219_SHARP_){return f1.call(null,(((p1__14219_SHARP_ == null))?null:self__.f.call(null,p1__14219_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14231){var self__ = this;
var _14231__$1 = this;return self__.meta14230;
});})(___$1))
;
cljs.core.async.t14229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14231,meta14230__$1){var self__ = this;
var _14231__$1 = this;return (new cljs.core.async.t14229(self__.fn1,self__._,self__.meta14227,self__.ch,self__.f,self__.map_LT_,meta14230__$1));
});})(___$1))
;
cljs.core.async.__GT_t14229 = ((function (___$1){
return (function __GT_t14229(fn1__$1,___$2,meta14227__$1,ch__$2,f__$2,map_LT___$2,meta14230){return (new cljs.core.async.t14229(fn1__$1,___$2,meta14227__$1,ch__$2,f__$2,map_LT___$2,meta14230));
});})(___$1))
;
}
return (new cljs.core.async.t14229(fn1,___$1,self__.meta14227,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__6192__auto__ = ret;if(cljs.core.truth_(and__6192__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__6192__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14226.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14226.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14226.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14228){var self__ = this;
var _14228__$1 = this;return self__.meta14227;
});
cljs.core.async.t14226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14228,meta14227__$1){var self__ = this;
var _14228__$1 = this;return (new cljs.core.async.t14226(self__.ch,self__.f,self__.map_LT_,meta14227__$1));
});
cljs.core.async.__GT_t14226 = (function __GT_t14226(ch__$1,f__$1,map_LT___$1,meta14227){return (new cljs.core.async.t14226(ch__$1,f__$1,map_LT___$1,meta14227));
});
}
return (new cljs.core.async.t14226(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14235 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14235 = (function (ch,f,map_GT_,meta14236){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14236 = meta14236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14235.cljs$lang$type = true;
cljs.core.async.t14235.cljs$lang$ctorStr = "cljs.core.async/t14235";
cljs.core.async.t14235.cljs$lang$ctorPrWriter = (function (this__6771__auto__,writer__6772__auto__,opt__6773__auto__){return cljs.core._write.call(null,writer__6772__auto__,"cljs.core.async/t14235");
});
cljs.core.async.t14235.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14235.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14235.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14237){var self__ = this;
var _14237__$1 = this;return self__.meta14236;
});
cljs.core.async.t14235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14237,meta14236__$1){var self__ = this;
var _14237__$1 = this;return (new cljs.core.async.t14235(self__.ch,self__.f,self__.map_GT_,meta14236__$1));
});
cljs.core.async.__GT_t14235 = (function __GT_t14235(ch__$1,f__$1,map_GT___$1,meta14236){return (new cljs.core.async.t14235(ch__$1,f__$1,map_GT___$1,meta14236));
});
}
return (new cljs.core.async.t14235(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14241 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14241 = (function (ch,p,filter_GT_,meta14242){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14242 = meta14242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14241.cljs$lang$type = true;
cljs.core.async.t14241.cljs$lang$ctorStr = "cljs.core.async/t14241";
cljs.core.async.t14241.cljs$lang$ctorPrWriter = (function (this__6771__auto__,writer__6772__auto__,opt__6773__auto__){return cljs.core._write.call(null,writer__6772__auto__,"cljs.core.async/t14241");
});
cljs.core.async.t14241.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14241.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14241.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14241.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14243){var self__ = this;
var _14243__$1 = this;return self__.meta14242;
});
cljs.core.async.t14241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14243,meta14242__$1){var self__ = this;
var _14243__$1 = this;return (new cljs.core.async.t14241(self__.ch,self__.p,self__.filter_GT_,meta14242__$1));
});
cljs.core.async.__GT_t14241 = (function __GT_t14241(ch__$1,p__$1,filter_GT___$1,meta14242){return (new cljs.core.async.t14241(ch__$1,p__$1,filter_GT___$1,meta14242));
});
}
return (new cljs.core.async.t14241(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8952__auto___14326 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___14326,out){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___14326,out){
return (function (state_14305){var state_val_14306 = (state_14305[1]);if((state_val_14306 === 7))
{var inst_14301 = (state_14305[2]);var state_14305__$1 = state_14305;var statearr_14307_14327 = state_14305__$1;(statearr_14307_14327[2] = inst_14301);
(statearr_14307_14327[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14306 === 1))
{var state_14305__$1 = state_14305;var statearr_14308_14328 = state_14305__$1;(statearr_14308_14328[2] = null);
(statearr_14308_14328[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14306 === 4))
{var inst_14287 = (state_14305[7]);var inst_14287__$1 = (state_14305[2]);var inst_14288 = (inst_14287__$1 == null);var state_14305__$1 = (function (){var statearr_14309 = state_14305;(statearr_14309[7] = inst_14287__$1);
return statearr_14309;
})();if(cljs.core.truth_(inst_14288))
{var statearr_14310_14329 = state_14305__$1;(statearr_14310_14329[1] = 5);
} else
{var statearr_14311_14330 = state_14305__$1;(statearr_14311_14330[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14306 === 6))
{var inst_14287 = (state_14305[7]);var inst_14292 = p.call(null,inst_14287);var state_14305__$1 = state_14305;if(cljs.core.truth_(inst_14292))
{var statearr_14312_14331 = state_14305__$1;(statearr_14312_14331[1] = 8);
} else
{var statearr_14313_14332 = state_14305__$1;(statearr_14313_14332[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14306 === 3))
{var inst_14303 = (state_14305[2]);var state_14305__$1 = state_14305;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14305__$1,inst_14303);
} else
{if((state_val_14306 === 2))
{var state_14305__$1 = state_14305;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14305__$1,4,ch);
} else
{if((state_val_14306 === 11))
{var inst_14295 = (state_14305[2]);var state_14305__$1 = state_14305;var statearr_14314_14333 = state_14305__$1;(statearr_14314_14333[2] = inst_14295);
(statearr_14314_14333[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14306 === 9))
{var state_14305__$1 = state_14305;var statearr_14315_14334 = state_14305__$1;(statearr_14315_14334[2] = null);
(statearr_14315_14334[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14306 === 5))
{var inst_14290 = cljs.core.async.close_BANG_.call(null,out);var state_14305__$1 = state_14305;var statearr_14316_14335 = state_14305__$1;(statearr_14316_14335[2] = inst_14290);
(statearr_14316_14335[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14306 === 10))
{var inst_14298 = (state_14305[2]);var state_14305__$1 = (function (){var statearr_14317 = state_14305;(statearr_14317[8] = inst_14298);
return statearr_14317;
})();var statearr_14318_14336 = state_14305__$1;(statearr_14318_14336[2] = null);
(statearr_14318_14336[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14306 === 8))
{var inst_14287 = (state_14305[7]);var state_14305__$1 = state_14305;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14305__$1,11,out,inst_14287);
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
});})(c__8952__auto___14326,out))
;return ((function (switch__8888__auto__,c__8952__auto___14326,out){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_14322 = [null,null,null,null,null,null,null,null,null];(statearr_14322[0] = state_machine__8889__auto__);
(statearr_14322[1] = 1);
return statearr_14322;
});
var state_machine__8889__auto____1 = (function (state_14305){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_14305);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e14323){if((e14323 instanceof Object))
{var ex__8892__auto__ = e14323;var statearr_14324_14337 = state_14305;(statearr_14324_14337[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14305);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14323;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14338 = state_14305;
state_14305 = G__14338;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_14305){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_14305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___14326,out))
})();var state__8954__auto__ = (function (){var statearr_14325 = f__8953__auto__.call(null);(statearr_14325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___14326);
return statearr_14325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___14326,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8952__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto__){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto__){
return (function (state_14504){var state_val_14505 = (state_14504[1]);if((state_val_14505 === 7))
{var inst_14500 = (state_14504[2]);var state_14504__$1 = state_14504;var statearr_14506_14547 = state_14504__$1;(statearr_14506_14547[2] = inst_14500);
(statearr_14506_14547[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 20))
{var inst_14470 = (state_14504[7]);var inst_14481 = (state_14504[2]);var inst_14482 = cljs.core.next.call(null,inst_14470);var inst_14456 = inst_14482;var inst_14457 = null;var inst_14458 = 0;var inst_14459 = 0;var state_14504__$1 = (function (){var statearr_14507 = state_14504;(statearr_14507[8] = inst_14456);
(statearr_14507[9] = inst_14459);
(statearr_14507[10] = inst_14457);
(statearr_14507[11] = inst_14481);
(statearr_14507[12] = inst_14458);
return statearr_14507;
})();var statearr_14508_14548 = state_14504__$1;(statearr_14508_14548[2] = null);
(statearr_14508_14548[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 1))
{var state_14504__$1 = state_14504;var statearr_14509_14549 = state_14504__$1;(statearr_14509_14549[2] = null);
(statearr_14509_14549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 4))
{var inst_14445 = (state_14504[13]);var inst_14445__$1 = (state_14504[2]);var inst_14446 = (inst_14445__$1 == null);var state_14504__$1 = (function (){var statearr_14510 = state_14504;(statearr_14510[13] = inst_14445__$1);
return statearr_14510;
})();if(cljs.core.truth_(inst_14446))
{var statearr_14511_14550 = state_14504__$1;(statearr_14511_14550[1] = 5);
} else
{var statearr_14512_14551 = state_14504__$1;(statearr_14512_14551[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 15))
{var state_14504__$1 = state_14504;var statearr_14516_14552 = state_14504__$1;(statearr_14516_14552[2] = null);
(statearr_14516_14552[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 21))
{var state_14504__$1 = state_14504;var statearr_14517_14553 = state_14504__$1;(statearr_14517_14553[2] = null);
(statearr_14517_14553[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 13))
{var inst_14456 = (state_14504[8]);var inst_14459 = (state_14504[9]);var inst_14457 = (state_14504[10]);var inst_14458 = (state_14504[12]);var inst_14466 = (state_14504[2]);var inst_14467 = (inst_14459 + 1);var tmp14513 = inst_14456;var tmp14514 = inst_14457;var tmp14515 = inst_14458;var inst_14456__$1 = tmp14513;var inst_14457__$1 = tmp14514;var inst_14458__$1 = tmp14515;var inst_14459__$1 = inst_14467;var state_14504__$1 = (function (){var statearr_14518 = state_14504;(statearr_14518[14] = inst_14466);
(statearr_14518[8] = inst_14456__$1);
(statearr_14518[9] = inst_14459__$1);
(statearr_14518[10] = inst_14457__$1);
(statearr_14518[12] = inst_14458__$1);
return statearr_14518;
})();var statearr_14519_14554 = state_14504__$1;(statearr_14519_14554[2] = null);
(statearr_14519_14554[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 22))
{var state_14504__$1 = state_14504;var statearr_14520_14555 = state_14504__$1;(statearr_14520_14555[2] = null);
(statearr_14520_14555[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 6))
{var inst_14445 = (state_14504[13]);var inst_14454 = f.call(null,inst_14445);var inst_14455 = cljs.core.seq.call(null,inst_14454);var inst_14456 = inst_14455;var inst_14457 = null;var inst_14458 = 0;var inst_14459 = 0;var state_14504__$1 = (function (){var statearr_14521 = state_14504;(statearr_14521[8] = inst_14456);
(statearr_14521[9] = inst_14459);
(statearr_14521[10] = inst_14457);
(statearr_14521[12] = inst_14458);
return statearr_14521;
})();var statearr_14522_14556 = state_14504__$1;(statearr_14522_14556[2] = null);
(statearr_14522_14556[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 17))
{var inst_14470 = (state_14504[7]);var inst_14474 = cljs.core.chunk_first.call(null,inst_14470);var inst_14475 = cljs.core.chunk_rest.call(null,inst_14470);var inst_14476 = cljs.core.count.call(null,inst_14474);var inst_14456 = inst_14475;var inst_14457 = inst_14474;var inst_14458 = inst_14476;var inst_14459 = 0;var state_14504__$1 = (function (){var statearr_14523 = state_14504;(statearr_14523[8] = inst_14456);
(statearr_14523[9] = inst_14459);
(statearr_14523[10] = inst_14457);
(statearr_14523[12] = inst_14458);
return statearr_14523;
})();var statearr_14524_14557 = state_14504__$1;(statearr_14524_14557[2] = null);
(statearr_14524_14557[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 3))
{var inst_14502 = (state_14504[2]);var state_14504__$1 = state_14504;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14504__$1,inst_14502);
} else
{if((state_val_14505 === 12))
{var inst_14490 = (state_14504[2]);var state_14504__$1 = state_14504;var statearr_14525_14558 = state_14504__$1;(statearr_14525_14558[2] = inst_14490);
(statearr_14525_14558[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 2))
{var state_14504__$1 = state_14504;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14504__$1,4,in$);
} else
{if((state_val_14505 === 23))
{var inst_14498 = (state_14504[2]);var state_14504__$1 = state_14504;var statearr_14526_14559 = state_14504__$1;(statearr_14526_14559[2] = inst_14498);
(statearr_14526_14559[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 19))
{var inst_14485 = (state_14504[2]);var state_14504__$1 = state_14504;var statearr_14527_14560 = state_14504__$1;(statearr_14527_14560[2] = inst_14485);
(statearr_14527_14560[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 11))
{var inst_14470 = (state_14504[7]);var inst_14456 = (state_14504[8]);var inst_14470__$1 = cljs.core.seq.call(null,inst_14456);var state_14504__$1 = (function (){var statearr_14528 = state_14504;(statearr_14528[7] = inst_14470__$1);
return statearr_14528;
})();if(inst_14470__$1)
{var statearr_14529_14561 = state_14504__$1;(statearr_14529_14561[1] = 14);
} else
{var statearr_14530_14562 = state_14504__$1;(statearr_14530_14562[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 9))
{var inst_14492 = (state_14504[2]);var inst_14493 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14504__$1 = (function (){var statearr_14531 = state_14504;(statearr_14531[15] = inst_14492);
return statearr_14531;
})();if(cljs.core.truth_(inst_14493))
{var statearr_14532_14563 = state_14504__$1;(statearr_14532_14563[1] = 21);
} else
{var statearr_14533_14564 = state_14504__$1;(statearr_14533_14564[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 5))
{var inst_14448 = cljs.core.async.close_BANG_.call(null,out);var state_14504__$1 = state_14504;var statearr_14534_14565 = state_14504__$1;(statearr_14534_14565[2] = inst_14448);
(statearr_14534_14565[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 14))
{var inst_14470 = (state_14504[7]);var inst_14472 = cljs.core.chunked_seq_QMARK_.call(null,inst_14470);var state_14504__$1 = state_14504;if(inst_14472)
{var statearr_14535_14566 = state_14504__$1;(statearr_14535_14566[1] = 17);
} else
{var statearr_14536_14567 = state_14504__$1;(statearr_14536_14567[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 16))
{var inst_14488 = (state_14504[2]);var state_14504__$1 = state_14504;var statearr_14537_14568 = state_14504__$1;(statearr_14537_14568[2] = inst_14488);
(statearr_14537_14568[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 10))
{var inst_14459 = (state_14504[9]);var inst_14457 = (state_14504[10]);var inst_14464 = cljs.core._nth.call(null,inst_14457,inst_14459);var state_14504__$1 = state_14504;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14504__$1,13,out,inst_14464);
} else
{if((state_val_14505 === 18))
{var inst_14470 = (state_14504[7]);var inst_14479 = cljs.core.first.call(null,inst_14470);var state_14504__$1 = state_14504;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14504__$1,20,out,inst_14479);
} else
{if((state_val_14505 === 8))
{var inst_14459 = (state_14504[9]);var inst_14458 = (state_14504[12]);var inst_14461 = (inst_14459 < inst_14458);var inst_14462 = inst_14461;var state_14504__$1 = state_14504;if(cljs.core.truth_(inst_14462))
{var statearr_14538_14569 = state_14504__$1;(statearr_14538_14569[1] = 10);
} else
{var statearr_14539_14570 = state_14504__$1;(statearr_14539_14570[1] = 11);
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
});})(c__8952__auto__))
;return ((function (switch__8888__auto__,c__8952__auto__){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_14543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14543[0] = state_machine__8889__auto__);
(statearr_14543[1] = 1);
return statearr_14543;
});
var state_machine__8889__auto____1 = (function (state_14504){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_14504);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e14544){if((e14544 instanceof Object))
{var ex__8892__auto__ = e14544;var statearr_14545_14571 = state_14504;(statearr_14545_14571[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14504);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14544;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14572 = state_14504;
state_14504 = G__14572;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_14504){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_14504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto__))
})();var state__8954__auto__ = (function (){var statearr_14546 = f__8953__auto__.call(null);(statearr_14546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto__);
return statearr_14546;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto__))
);
return c__8952__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8952__auto___14669 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___14669,out){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___14669,out){
return (function (state_14644){var state_val_14645 = (state_14644[1]);if((state_val_14645 === 7))
{var inst_14639 = (state_14644[2]);var state_14644__$1 = state_14644;var statearr_14646_14670 = state_14644__$1;(statearr_14646_14670[2] = inst_14639);
(statearr_14646_14670[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14645 === 1))
{var inst_14621 = null;var state_14644__$1 = (function (){var statearr_14647 = state_14644;(statearr_14647[7] = inst_14621);
return statearr_14647;
})();var statearr_14648_14671 = state_14644__$1;(statearr_14648_14671[2] = null);
(statearr_14648_14671[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14645 === 4))
{var inst_14624 = (state_14644[8]);var inst_14624__$1 = (state_14644[2]);var inst_14625 = (inst_14624__$1 == null);var inst_14626 = cljs.core.not.call(null,inst_14625);var state_14644__$1 = (function (){var statearr_14649 = state_14644;(statearr_14649[8] = inst_14624__$1);
return statearr_14649;
})();if(inst_14626)
{var statearr_14650_14672 = state_14644__$1;(statearr_14650_14672[1] = 5);
} else
{var statearr_14651_14673 = state_14644__$1;(statearr_14651_14673[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14645 === 6))
{var state_14644__$1 = state_14644;var statearr_14652_14674 = state_14644__$1;(statearr_14652_14674[2] = null);
(statearr_14652_14674[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14645 === 3))
{var inst_14641 = (state_14644[2]);var inst_14642 = cljs.core.async.close_BANG_.call(null,out);var state_14644__$1 = (function (){var statearr_14653 = state_14644;(statearr_14653[9] = inst_14641);
return statearr_14653;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14644__$1,inst_14642);
} else
{if((state_val_14645 === 2))
{var state_14644__$1 = state_14644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14644__$1,4,ch);
} else
{if((state_val_14645 === 11))
{var inst_14624 = (state_14644[8]);var inst_14633 = (state_14644[2]);var inst_14621 = inst_14624;var state_14644__$1 = (function (){var statearr_14654 = state_14644;(statearr_14654[10] = inst_14633);
(statearr_14654[7] = inst_14621);
return statearr_14654;
})();var statearr_14655_14675 = state_14644__$1;(statearr_14655_14675[2] = null);
(statearr_14655_14675[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14645 === 9))
{var inst_14624 = (state_14644[8]);var state_14644__$1 = state_14644;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14644__$1,11,out,inst_14624);
} else
{if((state_val_14645 === 5))
{var inst_14624 = (state_14644[8]);var inst_14621 = (state_14644[7]);var inst_14628 = cljs.core._EQ_.call(null,inst_14624,inst_14621);var state_14644__$1 = state_14644;if(inst_14628)
{var statearr_14657_14676 = state_14644__$1;(statearr_14657_14676[1] = 8);
} else
{var statearr_14658_14677 = state_14644__$1;(statearr_14658_14677[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14645 === 10))
{var inst_14636 = (state_14644[2]);var state_14644__$1 = state_14644;var statearr_14659_14678 = state_14644__$1;(statearr_14659_14678[2] = inst_14636);
(statearr_14659_14678[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14645 === 8))
{var inst_14621 = (state_14644[7]);var tmp14656 = inst_14621;var inst_14621__$1 = tmp14656;var state_14644__$1 = (function (){var statearr_14660 = state_14644;(statearr_14660[7] = inst_14621__$1);
return statearr_14660;
})();var statearr_14661_14679 = state_14644__$1;(statearr_14661_14679[2] = null);
(statearr_14661_14679[1] = 2);
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
});})(c__8952__auto___14669,out))
;return ((function (switch__8888__auto__,c__8952__auto___14669,out){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_14665 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14665[0] = state_machine__8889__auto__);
(statearr_14665[1] = 1);
return statearr_14665;
});
var state_machine__8889__auto____1 = (function (state_14644){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_14644);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e14666){if((e14666 instanceof Object))
{var ex__8892__auto__ = e14666;var statearr_14667_14680 = state_14644;(statearr_14667_14680[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14644);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14666;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14681 = state_14644;
state_14644 = G__14681;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_14644){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_14644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___14669,out))
})();var state__8954__auto__ = (function (){var statearr_14668 = f__8953__auto__.call(null);(statearr_14668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___14669);
return statearr_14668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___14669,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8952__auto___14816 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___14816,out){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___14816,out){
return (function (state_14786){var state_val_14787 = (state_14786[1]);if((state_val_14787 === 7))
{var inst_14782 = (state_14786[2]);var state_14786__$1 = state_14786;var statearr_14788_14817 = state_14786__$1;(statearr_14788_14817[2] = inst_14782);
(statearr_14788_14817[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14787 === 1))
{var inst_14749 = (new Array(n));var inst_14750 = inst_14749;var inst_14751 = 0;var state_14786__$1 = (function (){var statearr_14789 = state_14786;(statearr_14789[7] = inst_14750);
(statearr_14789[8] = inst_14751);
return statearr_14789;
})();var statearr_14790_14818 = state_14786__$1;(statearr_14790_14818[2] = null);
(statearr_14790_14818[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14787 === 4))
{var inst_14754 = (state_14786[9]);var inst_14754__$1 = (state_14786[2]);var inst_14755 = (inst_14754__$1 == null);var inst_14756 = cljs.core.not.call(null,inst_14755);var state_14786__$1 = (function (){var statearr_14791 = state_14786;(statearr_14791[9] = inst_14754__$1);
return statearr_14791;
})();if(inst_14756)
{var statearr_14792_14819 = state_14786__$1;(statearr_14792_14819[1] = 5);
} else
{var statearr_14793_14820 = state_14786__$1;(statearr_14793_14820[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14787 === 15))
{var inst_14776 = (state_14786[2]);var state_14786__$1 = state_14786;var statearr_14794_14821 = state_14786__$1;(statearr_14794_14821[2] = inst_14776);
(statearr_14794_14821[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14787 === 13))
{var state_14786__$1 = state_14786;var statearr_14795_14822 = state_14786__$1;(statearr_14795_14822[2] = null);
(statearr_14795_14822[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14787 === 6))
{var inst_14751 = (state_14786[8]);var inst_14772 = (inst_14751 > 0);var state_14786__$1 = state_14786;if(cljs.core.truth_(inst_14772))
{var statearr_14796_14823 = state_14786__$1;(statearr_14796_14823[1] = 12);
} else
{var statearr_14797_14824 = state_14786__$1;(statearr_14797_14824[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14787 === 3))
{var inst_14784 = (state_14786[2]);var state_14786__$1 = state_14786;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14786__$1,inst_14784);
} else
{if((state_val_14787 === 12))
{var inst_14750 = (state_14786[7]);var inst_14774 = cljs.core.vec.call(null,inst_14750);var state_14786__$1 = state_14786;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14786__$1,15,out,inst_14774);
} else
{if((state_val_14787 === 2))
{var state_14786__$1 = state_14786;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14786__$1,4,ch);
} else
{if((state_val_14787 === 11))
{var inst_14766 = (state_14786[2]);var inst_14767 = (new Array(n));var inst_14750 = inst_14767;var inst_14751 = 0;var state_14786__$1 = (function (){var statearr_14798 = state_14786;(statearr_14798[7] = inst_14750);
(statearr_14798[8] = inst_14751);
(statearr_14798[10] = inst_14766);
return statearr_14798;
})();var statearr_14799_14825 = state_14786__$1;(statearr_14799_14825[2] = null);
(statearr_14799_14825[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14787 === 9))
{var inst_14750 = (state_14786[7]);var inst_14764 = cljs.core.vec.call(null,inst_14750);var state_14786__$1 = state_14786;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14786__$1,11,out,inst_14764);
} else
{if((state_val_14787 === 5))
{var inst_14759 = (state_14786[11]);var inst_14750 = (state_14786[7]);var inst_14751 = (state_14786[8]);var inst_14754 = (state_14786[9]);var inst_14758 = (inst_14750[inst_14751] = inst_14754);var inst_14759__$1 = (inst_14751 + 1);var inst_14760 = (inst_14759__$1 < n);var state_14786__$1 = (function (){var statearr_14800 = state_14786;(statearr_14800[11] = inst_14759__$1);
(statearr_14800[12] = inst_14758);
return statearr_14800;
})();if(cljs.core.truth_(inst_14760))
{var statearr_14801_14826 = state_14786__$1;(statearr_14801_14826[1] = 8);
} else
{var statearr_14802_14827 = state_14786__$1;(statearr_14802_14827[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14787 === 14))
{var inst_14779 = (state_14786[2]);var inst_14780 = cljs.core.async.close_BANG_.call(null,out);var state_14786__$1 = (function (){var statearr_14804 = state_14786;(statearr_14804[13] = inst_14779);
return statearr_14804;
})();var statearr_14805_14828 = state_14786__$1;(statearr_14805_14828[2] = inst_14780);
(statearr_14805_14828[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14787 === 10))
{var inst_14770 = (state_14786[2]);var state_14786__$1 = state_14786;var statearr_14806_14829 = state_14786__$1;(statearr_14806_14829[2] = inst_14770);
(statearr_14806_14829[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14787 === 8))
{var inst_14759 = (state_14786[11]);var inst_14750 = (state_14786[7]);var tmp14803 = inst_14750;var inst_14750__$1 = tmp14803;var inst_14751 = inst_14759;var state_14786__$1 = (function (){var statearr_14807 = state_14786;(statearr_14807[7] = inst_14750__$1);
(statearr_14807[8] = inst_14751);
return statearr_14807;
})();var statearr_14808_14830 = state_14786__$1;(statearr_14808_14830[2] = null);
(statearr_14808_14830[1] = 2);
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
});})(c__8952__auto___14816,out))
;return ((function (switch__8888__auto__,c__8952__auto___14816,out){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_14812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14812[0] = state_machine__8889__auto__);
(statearr_14812[1] = 1);
return statearr_14812;
});
var state_machine__8889__auto____1 = (function (state_14786){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_14786);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e14813){if((e14813 instanceof Object))
{var ex__8892__auto__ = e14813;var statearr_14814_14831 = state_14786;(statearr_14814_14831[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14786);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14813;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14832 = state_14786;
state_14786 = G__14832;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_14786){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_14786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___14816,out))
})();var state__8954__auto__ = (function (){var statearr_14815 = f__8953__auto__.call(null);(statearr_14815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___14816);
return statearr_14815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___14816,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8952__auto___14975 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___14975,out){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___14975,out){
return (function (state_14945){var state_val_14946 = (state_14945[1]);if((state_val_14946 === 7))
{var inst_14941 = (state_14945[2]);var state_14945__$1 = state_14945;var statearr_14947_14976 = state_14945__$1;(statearr_14947_14976[2] = inst_14941);
(statearr_14947_14976[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 1))
{var inst_14904 = [];var inst_14905 = inst_14904;var inst_14906 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14945__$1 = (function (){var statearr_14948 = state_14945;(statearr_14948[7] = inst_14906);
(statearr_14948[8] = inst_14905);
return statearr_14948;
})();var statearr_14949_14977 = state_14945__$1;(statearr_14949_14977[2] = null);
(statearr_14949_14977[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 4))
{var inst_14909 = (state_14945[9]);var inst_14909__$1 = (state_14945[2]);var inst_14910 = (inst_14909__$1 == null);var inst_14911 = cljs.core.not.call(null,inst_14910);var state_14945__$1 = (function (){var statearr_14950 = state_14945;(statearr_14950[9] = inst_14909__$1);
return statearr_14950;
})();if(inst_14911)
{var statearr_14951_14978 = state_14945__$1;(statearr_14951_14978[1] = 5);
} else
{var statearr_14952_14979 = state_14945__$1;(statearr_14952_14979[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 15))
{var inst_14935 = (state_14945[2]);var state_14945__$1 = state_14945;var statearr_14953_14980 = state_14945__$1;(statearr_14953_14980[2] = inst_14935);
(statearr_14953_14980[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 13))
{var state_14945__$1 = state_14945;var statearr_14954_14981 = state_14945__$1;(statearr_14954_14981[2] = null);
(statearr_14954_14981[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 6))
{var inst_14905 = (state_14945[8]);var inst_14930 = inst_14905.length;var inst_14931 = (inst_14930 > 0);var state_14945__$1 = state_14945;if(cljs.core.truth_(inst_14931))
{var statearr_14955_14982 = state_14945__$1;(statearr_14955_14982[1] = 12);
} else
{var statearr_14956_14983 = state_14945__$1;(statearr_14956_14983[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 3))
{var inst_14943 = (state_14945[2]);var state_14945__$1 = state_14945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14945__$1,inst_14943);
} else
{if((state_val_14946 === 12))
{var inst_14905 = (state_14945[8]);var inst_14933 = cljs.core.vec.call(null,inst_14905);var state_14945__$1 = state_14945;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14945__$1,15,out,inst_14933);
} else
{if((state_val_14946 === 2))
{var state_14945__$1 = state_14945;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14945__$1,4,ch);
} else
{if((state_val_14946 === 11))
{var inst_14913 = (state_14945[10]);var inst_14909 = (state_14945[9]);var inst_14923 = (state_14945[2]);var inst_14924 = [];var inst_14925 = inst_14924.push(inst_14909);var inst_14905 = inst_14924;var inst_14906 = inst_14913;var state_14945__$1 = (function (){var statearr_14957 = state_14945;(statearr_14957[7] = inst_14906);
(statearr_14957[11] = inst_14925);
(statearr_14957[8] = inst_14905);
(statearr_14957[12] = inst_14923);
return statearr_14957;
})();var statearr_14958_14984 = state_14945__$1;(statearr_14958_14984[2] = null);
(statearr_14958_14984[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 9))
{var inst_14905 = (state_14945[8]);var inst_14921 = cljs.core.vec.call(null,inst_14905);var state_14945__$1 = state_14945;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14945__$1,11,out,inst_14921);
} else
{if((state_val_14946 === 5))
{var inst_14906 = (state_14945[7]);var inst_14913 = (state_14945[10]);var inst_14909 = (state_14945[9]);var inst_14913__$1 = f.call(null,inst_14909);var inst_14914 = cljs.core._EQ_.call(null,inst_14913__$1,inst_14906);var inst_14915 = cljs.core.keyword_identical_QMARK_.call(null,inst_14906,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14916 = (inst_14914) || (inst_14915);var state_14945__$1 = (function (){var statearr_14959 = state_14945;(statearr_14959[10] = inst_14913__$1);
return statearr_14959;
})();if(cljs.core.truth_(inst_14916))
{var statearr_14960_14985 = state_14945__$1;(statearr_14960_14985[1] = 8);
} else
{var statearr_14961_14986 = state_14945__$1;(statearr_14961_14986[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 14))
{var inst_14938 = (state_14945[2]);var inst_14939 = cljs.core.async.close_BANG_.call(null,out);var state_14945__$1 = (function (){var statearr_14963 = state_14945;(statearr_14963[13] = inst_14938);
return statearr_14963;
})();var statearr_14964_14987 = state_14945__$1;(statearr_14964_14987[2] = inst_14939);
(statearr_14964_14987[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 10))
{var inst_14928 = (state_14945[2]);var state_14945__$1 = state_14945;var statearr_14965_14988 = state_14945__$1;(statearr_14965_14988[2] = inst_14928);
(statearr_14965_14988[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 8))
{var inst_14913 = (state_14945[10]);var inst_14905 = (state_14945[8]);var inst_14909 = (state_14945[9]);var inst_14918 = inst_14905.push(inst_14909);var tmp14962 = inst_14905;var inst_14905__$1 = tmp14962;var inst_14906 = inst_14913;var state_14945__$1 = (function (){var statearr_14966 = state_14945;(statearr_14966[7] = inst_14906);
(statearr_14966[8] = inst_14905__$1);
(statearr_14966[14] = inst_14918);
return statearr_14966;
})();var statearr_14967_14989 = state_14945__$1;(statearr_14967_14989[2] = null);
(statearr_14967_14989[1] = 2);
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
});})(c__8952__auto___14975,out))
;return ((function (switch__8888__auto__,c__8952__auto___14975,out){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_14971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14971[0] = state_machine__8889__auto__);
(statearr_14971[1] = 1);
return statearr_14971;
});
var state_machine__8889__auto____1 = (function (state_14945){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_14945);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e14972){if((e14972 instanceof Object))
{var ex__8892__auto__ = e14972;var statearr_14973_14990 = state_14945;(statearr_14973_14990[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14945);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14972;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14991 = state_14945;
state_14945 = G__14991;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_14945){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_14945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___14975,out))
})();var state__8954__auto__ = (function (){var statearr_14974 = f__8953__auto__.call(null);(statearr_14974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___14975);
return statearr_14974;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___14975,out))
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
