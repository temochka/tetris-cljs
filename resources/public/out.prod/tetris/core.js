// Compiled by ClojureScript 0.0-2202
goog.provide('tetris.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
tetris.core.screen = document.getElementById("screen");
tetris.core.screen_ctx = tetris.core.screen.getContext("2d");
tetris.core.preview_screen = document.getElementById("preview-screen");
tetris.core.preview_screen_ctx = tetris.core.preview_screen.getContext("2d");
tetris.core.level_text = document.getElementById("level");
tetris.core.score_text = document.getElementById("score");
tetris.core.screen_width = 200;
tetris.core.screen_height = 440;
tetris.core.blocks_h = 10;
tetris.core.blocks_v = 22;
tetris.core.block_size = (tetris.core.screen_width / tetris.core.blocks_h);
tetris.core.score_multiplier = 100;
tetris.core.level_up_score = 400;
tetris.core.level_gravity_penalty = 30;
tetris.core.colors = new cljs.core.PersistentArrayMap(null, 8, ["c","#2DFFFE","b","#0B24FB","o","#FDA428","y","#FFFD38","l","#85FD31","m","#7F0F7E","r","#FC0D1B"," ",null], null);
tetris.core.controls = new cljs.core.PersistentArrayMap(null, 4, [37,cljs.core.constant$keyword$47,39,cljs.core.constant$keyword$48,40,cljs.core.constant$keyword$49,38,cljs.core.constant$keyword$50], null);
tetris.core.directions = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$49,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),cljs.core.constant$keyword$48,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),cljs.core.constant$keyword$47,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0], null)], null);
tetris.core.point = (function point(x,y){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
tetris.core.block = (function block(point,color){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,color], null);
});
tetris.core.rotate_matrix = (function rotate_matrix(m){return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.reverse(m)));
});
tetris.core.ascii__GT_vector = (function ascii__GT_vector(ascii){return cljs.core.vec(cljs.core.replace(tetris.core.colors,ascii));
});
tetris.core.ascii_schema__GT_matrix = (function ascii_schema__GT_matrix(schema){return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.ascii__GT_vector,schema));
});
tetris.core.matrix__GT_blocks = (function matrix__GT_blocks(m){return cljs.core.vec(cljs.core.remove((function (p1__8912_SHARP_){return (cljs.core.last(p1__8912_SHARP_) == null);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed((function (y,xs){return cljs.core.map_indexed((function (x,color){return tetris.core.block(tetris.core.point(x,y),color);
}),xs);
}),m))));
});
tetris.core.tetrimino_type = (function tetrimino_type(ascii_schema){var m = tetris.core.ascii_schema__GT_matrix(ascii_schema);var ms = cljs.core.take(4,cljs.core.iterate(tetris.core.rotate_matrix,m));return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.matrix__GT_blocks,ms));
});
tetris.core.tetrimino_types = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.tetrimino_type,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cccc"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bbb","  b"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ooo","o  "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yy","yy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ll","ll "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mmm"," m "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rr "," rr"], null)], null)));
tetris.core.local__GT_world = (function local__GT_world(local,world){return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,local,world));
});
tetris.core.translate_block = (function translate_block(p__8913,world){var vec__8915 = p__8913;var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8915,0,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8915,1,null);return tetris.core.block(tetris.core.local__GT_world(point,world),color);
});
tetris.core.translate_blocks = (function translate_blocks(blocks,pos){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8916_SHARP_){return tetris.core.translate_block(p1__8916_SHARP_,pos);
}),blocks);
});
tetris.core.tetrimino__GT_blocks = (function tetrimino__GT_blocks(p__8917){var map__8919 = p__8917;var map__8919__$1 = ((cljs.core.seq_QMARK_(map__8919))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8919):map__8919);var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8919__$1,cljs.core.constant$keyword$51);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8919__$1,cljs.core.constant$keyword$22);var spin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8919__$1,cljs.core.constant$keyword$52);return tetris.core.translate_blocks(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(type,spin),pos);
});
tetris.core.rows__GT_blocks = (function rows__GT_blocks(rows){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__8924){var vec__8925 = p__8924;var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8925,0,null);var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8925,1,null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__8925,y,xs){
return (function (p__8926){var vec__8927 = p__8926;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8927,0,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8927,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),color], null);
});})(vec__8925,y,xs))
,xs);
}),rows);
});
tetris.core.block__GT_point = cljs.core.first;
tetris.core.tetrimino__GT_points = (function tetrimino__GT_points(t){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.tetrimino__GT_blocks(t),tetris.core.block__GT_point);
});
tetris.core.draw_block = (function draw_block(ctx,p__8928){var vec__8932 = p__8928;var vec__8933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8932,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8933,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8933,1,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8932,1,null);var G__8934 = ctx;(G__8934["fillStyle"] = color);
G__8934.fillRect(((tetris.core.block_size * x) + 1),((tetris.core.block_size * y) + 1),(tetris.core.block_size - 2),(tetris.core.block_size - 2));
return G__8934;
});
tetris.core.tetrimino = (function tetrimino(pos,spin,type){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,pos,cljs.core.constant$keyword$52,spin,cljs.core.constant$keyword$22,type], null);
});
tetris.core.rotate_tetrimino = (function rotate_tetrimino(p__8935){var map__8937 = p__8935;var map__8937__$1 = ((cljs.core.seq_QMARK_(map__8937))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8937):map__8937);var t = map__8937__$1;var spin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8937__$1,cljs.core.constant$keyword$52);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,cljs.core.constant$keyword$52,cljs.core.rem((spin + 1),4));
});
tetris.core.draw_blocks = (function draw_blocks(ctx,blocks){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8938_SHARP_){return tetris.core.draw_block(ctx,p1__8938_SHARP_);
}),blocks));
});
tetris.core.random_tetrimino = (function random_tetrimino(){return tetris.core.tetrimino(tetris.core.point(0,0),cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,4)),cljs.core.rand_nth(tetris.core.tetrimino_types));
});
tetris.core.move_tetrimino = (function move_tetrimino(p__8939,d){var map__8941 = p__8939;var map__8941__$1 = ((cljs.core.seq_QMARK_(map__8941))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8941):map__8941);var t = map__8941__$1;var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8941__$1,cljs.core.constant$keyword$51);var dv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tetris.core.directions,d);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,cljs.core.constant$keyword$51,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,dv,pos)));
});
tetris.core.collisions_QMARK_ = (function collisions_QMARK_(p__8942){var map__8946 = p__8942;var map__8946__$1 = ((cljs.core.seq_QMARK_(map__8946))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8946):map__8946);var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8946__$1,cljs.core.constant$keyword$53);var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8946__$1,cljs.core.constant$keyword$54);var points = cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.block__GT_point,tetris.core.tetrimino__GT_blocks(t));return cljs.core.some(((function (points,map__8946,map__8946__$1,t,rows){
return (function (p__8947){var vec__8948 = p__8947;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8948,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8948,1,null);var or__3481__auto__ = (x < 0);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (x >= tetris.core.blocks_h);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{var or__3481__auto____$2 = (y < 0);if(or__3481__auto____$2)
{return or__3481__auto____$2;
} else
{var or__3481__auto____$3 = (y >= tetris.core.blocks_v);if(or__3481__auto____$3)
{return or__3481__auto____$3;
} else
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
}
}
}
}
});})(points,map__8946,map__8946__$1,t,rows))
,points);
});
tetris.core.freeze_block = (function freeze_block(rows,p__8949){var vec__8952 = p__8949;var vec__8953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8952,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8953,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8953,1,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8952,1,null);return cljs.core.assoc_in(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),color);
});
tetris.core.freeze = (function freeze(p__8954){var map__8956 = p__8954;var map__8956__$1 = ((cljs.core.seq_QMARK_(map__8956))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8956):map__8956);var state = map__8956__$1;var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8956__$1,cljs.core.constant$keyword$54);var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8956__$1,cljs.core.constant$keyword$53);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$54], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,tetris.core.freeze_block),tetris.core.tetrimino__GT_blocks(t)),cljs.core.constant$keyword$53,null);
});
tetris.core.maybe_rollback = (function() {
var maybe_rollback = null;
var maybe_rollback__2 = (function (new_state,old_state){return maybe_rollback.cljs$core$IFn$_invoke$arity$3(new_state,old_state,cljs.core.identity);
});
var maybe_rollback__3 = (function (new_state,old_state,f){if(cljs.core.truth_(tetris.core.collisions_QMARK_(new_state)))
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
} else
{return new_state;
}
});
maybe_rollback = function(new_state,old_state,f){
switch(arguments.length){
case 2:
return maybe_rollback__2.call(this,new_state,old_state);
case 3:
return maybe_rollback__3.call(this,new_state,old_state,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
maybe_rollback.cljs$core$IFn$_invoke$arity$2 = maybe_rollback__2;
maybe_rollback.cljs$core$IFn$_invoke$arity$3 = maybe_rollback__3;
return maybe_rollback;
})()
;
tetris.core.process_gravity = (function process_gravity(p__8957){var map__8959 = p__8957;var map__8959__$1 = ((cljs.core.seq_QMARK_(map__8959))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8959):map__8959);var state = map__8959__$1;var tetr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8959__$1,cljs.core.constant$keyword$53);var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8959__$1,cljs.core.constant$keyword$55);var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8959__$1,cljs.core.constant$keyword$56);var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8959__$1,cljs.core.constant$keyword$57);var t0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8959__$1,cljs.core.constant$keyword$58);if(cljs.core.truth_((function (){var and__3469__auto__ = tetr;if(cljs.core.truth_(and__3469__auto__))
{return ((t - t0) > (i - (level * tetris.core.level_gravity_penalty)));
} else
{return and__3469__auto__;
}
})()))
{return tetris.core.maybe_rollback.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$53,(function (){var and__3469__auto__ = tetr;if(cljs.core.truth_(and__3469__auto__))
{return tetris.core.move_tetrimino(tetr,cljs.core.constant$keyword$49);
} else
{return and__3469__auto__;
}
})(),cljs.core.array_seq([cljs.core.constant$keyword$58,t], 0)),state,tetris.core.freeze);
} else
{return state;
}
});
tetris.core.process_time = (function process_time(state){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$55,(new Date()).getTime());
});
tetris.core.draw_background = (function draw_background(ctx,color){var G__8961 = ctx;(G__8961["fillStyle"] = color);
G__8961.fillRect(0,0,tetris.core.screen_width,tetris.core.screen_height);
return G__8961;
});
tetris.core.next_tetrimino = (function next_tetrimino(p__8962){var map__8964 = p__8962;var map__8964__$1 = ((cljs.core.seq_QMARK_(map__8964))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8964):map__8964);var state = map__8964__$1;var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8964__$1,cljs.core.constant$keyword$59);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$53,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,cljs.core.constant$keyword$51,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,0], null)),cljs.core.array_seq([cljs.core.constant$keyword$59,tetris.core.random_tetrimino()], 0));
});
tetris.core.maybe_next_tetrimino = (function maybe_next_tetrimino(p__8965){var map__8967 = p__8965;var map__8967__$1 = ((cljs.core.seq_QMARK_(map__8967))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8967):map__8967);var state = map__8967__$1;var tetr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8967__$1,cljs.core.constant$keyword$53);if(cljs.core.not(tetr))
{return tetris.core.maybe_rollback.cljs$core$IFn$_invoke$arity$2(tetris.core.next_tetrimino(state),state);
} else
{return state;
}
});
tetris.core.release_keyboard = (function release_keyboard(state){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$60,null);
});
tetris.core.collapse_rows = (function collapse_rows(p__8968){var map__8974 = p__8968;var map__8974__$1 = ((cljs.core.seq_QMARK_(map__8974))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8974):map__8974);var state = map__8974__$1;var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8974__$1,cljs.core.constant$keyword$54);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$54,cljs.core.into(cljs.core.empty(rows),cljs.core.map_indexed(((function (map__8974,map__8974__$1,state,rows){
return (function (i,p__8975){var vec__8976 = p__8975;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8976,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8976,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((tetris.core.blocks_v - i) - 1),v], null);
});})(map__8974,map__8974__$1,state,rows))
,cljs.core.reverse(cljs.core.remove(((function (map__8974,map__8974__$1,state,rows){
return (function (p__8977){var vec__8978 = p__8977;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8978,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8978,1,null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tetris.core.blocks_h,cljs.core.count(v));
});})(map__8974,map__8974__$1,state,rows))
,rows)))));
});
tetris.core.score = (function score(p__8980){var map__8983 = p__8980;var map__8983__$1 = ((cljs.core.seq_QMARK_(map__8983))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8983):map__8983);var state = map__8983__$1;var old_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8983__$1,cljs.core.constant$keyword$54);var map__8984 = tetris.core.collapse_rows(state);var map__8984__$1 = ((cljs.core.seq_QMARK_(map__8984))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8984):map__8984);var new_state = map__8984__$1;var new_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8984__$1,cljs.core.constant$keyword$54);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61], null),((function (map__8984,map__8984__$1,new_state,new_rows,map__8983,map__8983__$1,state,old_rows){
return (function (p1__8979_SHARP_){return (p1__8979_SHARP_ + (tetris.core.score_multiplier * (cljs.core.count(old_rows) - cljs.core.count(new_rows))));
});})(map__8984,map__8984__$1,new_state,new_rows,map__8983,map__8983__$1,state,old_rows))
);
});
tetris.core.maybe_score = (function maybe_score(p__8985){var map__8987 = p__8985;var map__8987__$1 = ((cljs.core.seq_QMARK_(map__8987))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8987):map__8987);var state = map__8987__$1;var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8987__$1,cljs.core.constant$keyword$53);if(cljs.core.not(t))
{return tetris.core.score(state);
} else
{return state;
}
});
tetris.core.maybe_game_over = (function maybe_game_over(p__8988){var map__8990 = p__8988;var map__8990__$1 = ((cljs.core.seq_QMARK_(map__8990))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8990):map__8990);var state = map__8990__$1;var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8990__$1,cljs.core.constant$keyword$53);if(cljs.core.not(t))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$62,false);
} else
{return state;
}
});
tetris.core.maybe_level_up = (function maybe_level_up(p__8991){var map__8993 = p__8991;var map__8993__$1 = ((cljs.core.seq_QMARK_(map__8993))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8993):map__8993);var state = map__8993__$1;var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8993__$1,cljs.core.constant$keyword$61);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$56,(((score / tetris.core.level_up_score) | 0) + 1));
});
tetris.core.process_keyboard = (function (){var method_table__4339__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4340__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4341__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4342__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$63,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("process-keyboard",cljs.core.constant$keyword$60,cljs.core.constant$keyword$7,hierarchy__4343__auto__,method_table__4339__auto__,prefer_table__4340__auto__,method_cache__4341__auto__,cached_hierarchy__4342__auto__));
})();
tetris.core.process_keyboard.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$47,(function (state){return tetris.core.maybe_rollback.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$53], null),tetris.core.move_tetrimino,cljs.core.constant$keyword$47),state);
}));
tetris.core.process_keyboard.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$48,(function (state){return tetris.core.maybe_rollback.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$53], null),tetris.core.move_tetrimino,cljs.core.constant$keyword$48),state);
}));
tetris.core.process_keyboard.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$50,(function (state){return tetris.core.maybe_rollback.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$53], null),tetris.core.rotate_tetrimino),state);
}));
tetris.core.process_keyboard.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$49,(function (state){return tetris.core.maybe_rollback.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$53], null),tetris.core.move_tetrimino,cljs.core.constant$keyword$49),state);
}));
tetris.core.process_keyboard.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (state){return state;
}));
tetris.core.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$54,cljs.core.sorted_map(),cljs.core.constant$keyword$53,null,cljs.core.constant$keyword$59,tetris.core.random_tetrimino(),cljs.core.constant$keyword$57,500,cljs.core.constant$keyword$61,0,cljs.core.constant$keyword$56,1,cljs.core.constant$keyword$62,true], null));
tetris.core.render = (function render(p__8994){var map__8996 = p__8994;var map__8996__$1 = ((cljs.core.seq_QMARK_(map__8996))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8996):map__8996);var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8996__$1,cljs.core.constant$keyword$53);var tn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8996__$1,cljs.core.constant$keyword$59);var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8996__$1,cljs.core.constant$keyword$54);var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8996__$1,cljs.core.constant$keyword$61);var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8996__$1,cljs.core.constant$keyword$56);(tetris.core.score_text["innerText"] = score);
(tetris.core.level_text["innerText"] = level);
tetris.core.draw_background(tetris.core.screen_ctx,"#000000");
tetris.core.draw_background(tetris.core.preview_screen_ctx,"#000000");
if(cljs.core.truth_(t))
{tetris.core.draw_blocks(tetris.core.screen_ctx,tetris.core.tetrimino__GT_blocks(t));
} else
{}
if(cljs.core.truth_(tn))
{tetris.core.draw_blocks(tetris.core.preview_screen_ctx,tetris.core.tetrimino__GT_blocks(tn));
} else
{}
return tetris.core.draw_blocks(tetris.core.screen_ctx,tetris.core.rows__GT_blocks(rows));
});
tetris.core.render_loop = (function render_loop(){tetris.core.render(cljs.core.deref(tetris.core.game_state));
return window.requestAnimationFrame(render_loop);
});
tetris.core.handle_key_press = (function handle_key_press(state,key_code){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$60,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tetris.core.controls,key_code));
});
tetris.core.new_game_BANG_ = (function new_game_BANG_(){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.core.game_state,(function (p1__8997_SHARP_){return tetris.core.next_tetrimino(p1__8997_SHARP_);
}));
});
tetris.core.run_game_cycle = (function run_game_cycle(p__8998){var map__9000 = p__8998;var map__9000__$1 = ((cljs.core.seq_QMARK_(map__9000))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9000):map__9000);var state = map__9000__$1;var tetrimino = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9000__$1,cljs.core.constant$keyword$53);var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9000__$1,cljs.core.constant$keyword$62);if(cljs.core.truth_(running_QMARK_))
{return tetris.core.maybe_game_over(tetris.core.maybe_next_tetrimino(tetris.core.maybe_level_up(tetris.core.maybe_score(tetris.core.process_gravity(tetris.core.release_keyboard((tetris.core.process_keyboard.cljs$core$IFn$_invoke$arity$1 ? tetris.core.process_keyboard.cljs$core$IFn$_invoke$arity$1(tetris.core.process_time(state)) : tetris.core.process_keyboard.call(null,tetris.core.process_time(state)))))))));
} else
{return state;
}
});
document.addEventListener("keydown",(function (p1__9001_SHARP_){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tetris.core.game_state,tetris.core.handle_key_press,p1__9001_SHARP_.keyCode);
}),false);
tetris.core.render_loop();
var c__6102__auto___9026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___9026){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___9026){
return (function (state_9012){var state_val_9013 = (state_9012[1]);if((state_val_9013 === 4))
{var inst_9007 = (state_9012[2]);var inst_9002 = inst_9007;var state_9012__$1 = (function (){var statearr_9014 = state_9012;(statearr_9014[7] = inst_9002);
return statearr_9014;
})();var statearr_9015_9027 = state_9012__$1;(statearr_9015_9027[2] = null);
(statearr_9015_9027[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_9013 === 3))
{var inst_9010 = (state_9012[2]);var state_9012__$1 = state_9012;return cljs.core.async.impl.ioc_helpers.return_chan(state_9012__$1,inst_9010);
} else
{if((state_val_9013 === 2))
{var inst_9004 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.core.game_state,tetris.core.run_game_cycle);var inst_9005 = cljs.core.async.timeout(10);var state_9012__$1 = (function (){var statearr_9016 = state_9012;(statearr_9016[8] = inst_9004);
return statearr_9016;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9012__$1,4,inst_9005);
} else
{if((state_val_9013 === 1))
{var inst_9002 = null;var state_9012__$1 = (function (){var statearr_9017 = state_9012;(statearr_9017[7] = inst_9002);
return statearr_9017;
})();var statearr_9018_9028 = state_9012__$1;(statearr_9018_9028[2] = null);
(statearr_9018_9028[1] = 2);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
});})(c__6102__auto___9026))
;return ((function (switch__6087__auto__,c__6102__auto___9026){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_9022 = [null,null,null,null,null,null,null,null,null];(statearr_9022[0] = state_machine__6088__auto__);
(statearr_9022[1] = 1);
return statearr_9022;
});
var state_machine__6088__auto____1 = (function (state_9012){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_9012);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e9023){if((e9023 instanceof Object))
{var ex__6091__auto__ = e9023;var statearr_9024_9029 = state_9012;(statearr_9024_9029[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_9012);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e9023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__9030 = state_9012;
state_9012 = G__9030;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_9012){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_9012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___9026))
})();var state__6104__auto__ = (function (){var statearr_9025 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_9025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___9026);
return statearr_9025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___9026))
);
