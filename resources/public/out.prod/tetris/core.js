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
tetris.core.blocks_v = 24;
tetris.core.rendering_offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-2], null);
tetris.core.spawn_point = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,0], null);
tetris.core.block_size = (tetris.core.screen_width / tetris.core.blocks_h);
tetris.core.block_border_size = 1;
tetris.core.score_multiplier = 100;
tetris.core.level_up_score = 400;
tetris.core.level_gravity_penalty = 30;
tetris.core.colors = new cljs.core.PersistentArrayMap(null, 8, ["c","#34aadc","b","#087eff","o","#ffa01b","y","#ffd015","l","#54da6b","m","#a081ee","r","#ff5349"," ",null], null);
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
tetris.core.tetrimino_types = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.tetrimino_type,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["    ","cccc","    ","    "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b  ","bbb","   "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["  o","ooo","   "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yy","yy"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ll","ll ","   "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" m ","mmm","   "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rr "," rr","   "], null)], null)));
tetris.core.translate_point = (function translate_point(point,dv){return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,point,dv));
});
tetris.core.translate_block = (function translate_block(p__8913,dv){var vec__8915 = p__8913;var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8915,0,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8915,1,null);return tetris.core.block(tetris.core.translate_point(point,dv),color);
});
tetris.core.translate_blocks = (function translate_blocks(blocks,dv){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8916_SHARP_){return tetris.core.translate_block(p1__8916_SHARP_,dv);
}),blocks));
});
tetris.core.tetrimino__GT_blocks = (function tetrimino__GT_blocks(p__8917){var map__8919 = p__8917;var map__8919__$1 = ((cljs.core.seq_QMARK_(map__8919))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8919):map__8919);var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8919__$1,cljs.core.constant$keyword$51);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8919__$1,cljs.core.constant$keyword$22);var spin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8919__$1,cljs.core.constant$keyword$52);return tetris.core.translate_blocks(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(type,spin),pos);
});
tetris.core.rows__GT_blocks = (function rows__GT_blocks(rows){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__8924){var vec__8925 = p__8924;var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8925,0,null);var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8925,1,null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__8925,y,xs){
return (function (p__8926){var vec__8927 = p__8926;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8927,0,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8927,1,null);return tetris.core.block(tetris.core.point(x,y),color);
});})(vec__8925,y,xs))
,xs);
}),rows));
});
tetris.core.block__GT_point = (function block__GT_point(block){return cljs.core.first(block);
});
tetris.core.tetrimino__GT_points = (function tetrimino__GT_points(t){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.tetrimino__GT_blocks(t),tetris.core.block__GT_point));
});
tetris.core.draw_block = (function draw_block(ctx,offset,p__8928){var vec__8932 = p__8928;var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8932,0,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8932,1,null);var vec__8933 = tetris.core.translate_point(point,offset);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8933,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8933,1,null);var G__8934 = ctx;(G__8934["fillStyle"] = color);
G__8934.fillRect(((tetris.core.block_size * x) + tetris.core.block_border_size),((tetris.core.block_size * y) + tetris.core.block_border_size),(tetris.core.block_size - (2 * tetris.core.block_border_size)),(tetris.core.block_size - (2 * tetris.core.block_border_size)));
return G__8934;
});
tetris.core.tetrimino = (function tetrimino(pos,spin,type){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,pos,cljs.core.constant$keyword$52,spin,cljs.core.constant$keyword$22,type], null);
});
tetris.core.rotate_tetrimino = (function rotate_tetrimino(p__8935){var map__8937 = p__8935;var map__8937__$1 = ((cljs.core.seq_QMARK_(map__8937))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8937):map__8937);var t = map__8937__$1;var spin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8937__$1,cljs.core.constant$keyword$52);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,cljs.core.constant$keyword$52,cljs.core.rem((spin + 1),4));
});
tetris.core.draw_blocks = (function() {
var draw_blocks = null;
var draw_blocks__2 = (function (ctx,blocks){return draw_blocks.cljs$core$IFn$_invoke$arity$3(ctx,tetris.core.point(0,0),blocks);
});
var draw_blocks__3 = (function (ctx,offset,blocks){var seq__8942 = cljs.core.seq(blocks);var chunk__8943 = null;var count__8944 = 0;var i__8945 = 0;while(true){
if((i__8945 < count__8944))
{var block = chunk__8943.cljs$core$IIndexed$_nth$arity$2(null,i__8945);tetris.core.draw_block(ctx,offset,block);
{
var G__8946 = seq__8942;
var G__8947 = chunk__8943;
var G__8948 = count__8944;
var G__8949 = (i__8945 + 1);
seq__8942 = G__8946;
chunk__8943 = G__8947;
count__8944 = G__8948;
i__8945 = G__8949;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__8942);if(temp__4126__auto__)
{var seq__8942__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__8942__$1))
{var c__4229__auto__ = cljs.core.chunk_first(seq__8942__$1);{
var G__8950 = cljs.core.chunk_rest(seq__8942__$1);
var G__8951 = c__4229__auto__;
var G__8952 = cljs.core.count(c__4229__auto__);
var G__8953 = 0;
seq__8942 = G__8950;
chunk__8943 = G__8951;
count__8944 = G__8952;
i__8945 = G__8953;
continue;
}
} else
{var block = cljs.core.first(seq__8942__$1);tetris.core.draw_block(ctx,offset,block);
{
var G__8954 = cljs.core.next(seq__8942__$1);
var G__8955 = null;
var G__8956 = 0;
var G__8957 = 0;
seq__8942 = G__8954;
chunk__8943 = G__8955;
count__8944 = G__8956;
i__8945 = G__8957;
continue;
}
}
} else
{return null;
}
}
break;
}
});
draw_blocks = function(ctx,offset,blocks){
switch(arguments.length){
case 2:
return draw_blocks__2.call(this,ctx,offset);
case 3:
return draw_blocks__3.call(this,ctx,offset,blocks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_blocks.cljs$core$IFn$_invoke$arity$2 = draw_blocks__2;
draw_blocks.cljs$core$IFn$_invoke$arity$3 = draw_blocks__3;
return draw_blocks;
})()
;
tetris.core.random_tetrimino = (function random_tetrimino(){return tetris.core.tetrimino(tetris.core.point(0,0),cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,4)),cljs.core.rand_nth(tetris.core.tetrimino_types));
});
tetris.core.move_tetrimino = (function move_tetrimino(t,d){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51], null),tetris.core.translate_point,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tetris.core.directions,d));
});
tetris.core.collisions_QMARK_ = (function collisions_QMARK_(p__8958){var map__8962 = p__8958;var map__8962__$1 = ((cljs.core.seq_QMARK_(map__8962))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8962):map__8962);var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8962__$1,cljs.core.constant$keyword$53);var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8962__$1,cljs.core.constant$keyword$54);var points = cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.block__GT_point,tetris.core.tetrimino__GT_blocks(t));return cljs.core.some(((function (points,map__8962,map__8962__$1,t,rows){
return (function (p__8963){var vec__8964 = p__8963;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8964,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8964,1,null);var or__3481__auto__ = (x < 0);if(or__3481__auto__)
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
});})(points,map__8962,map__8962__$1,t,rows))
,points);
});
tetris.core.freeze_block = (function freeze_block(rows,p__8965){var vec__8968 = p__8965;var vec__8969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8968,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8969,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8969,1,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8968,1,null);return cljs.core.assoc_in(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),color);
});
tetris.core.freeze = (function freeze(p__8970){var map__8972 = p__8970;var map__8972__$1 = ((cljs.core.seq_QMARK_(map__8972))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8972):map__8972);var state = map__8972__$1;var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8972__$1,cljs.core.constant$keyword$54);var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8972__$1,cljs.core.constant$keyword$53);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$54], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,tetris.core.freeze_block),tetris.core.tetrimino__GT_blocks(t)),cljs.core.constant$keyword$53,null);
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
tetris.core.process_gravity = (function process_gravity(p__8973){var map__8975 = p__8973;var map__8975__$1 = ((cljs.core.seq_QMARK_(map__8975))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8975):map__8975);var state = map__8975__$1;var tetr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8975__$1,cljs.core.constant$keyword$53);var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8975__$1,cljs.core.constant$keyword$55);var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8975__$1,cljs.core.constant$keyword$56);var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8975__$1,cljs.core.constant$keyword$57);var t0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8975__$1,cljs.core.constant$keyword$58);if(cljs.core.truth_((function (){var and__3469__auto__ = tetr;if(cljs.core.truth_(and__3469__auto__))
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
tetris.core.draw_background = (function draw_background(ctx,color){var G__8977 = ctx;(G__8977["fillStyle"] = color);
G__8977.fillRect(0,0,tetris.core.screen_width,tetris.core.screen_height);
return G__8977;
});
tetris.core.next_tetrimino = (function next_tetrimino(p__8978){var map__8980 = p__8978;var map__8980__$1 = ((cljs.core.seq_QMARK_(map__8980))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8980):map__8980);var state = map__8980__$1;var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8980__$1,cljs.core.constant$keyword$59);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$53,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,cljs.core.constant$keyword$51,tetris.core.spawn_point),cljs.core.array_seq([cljs.core.constant$keyword$59,tetris.core.random_tetrimino()], 0));
});
tetris.core.maybe_next_tetrimino = (function maybe_next_tetrimino(p__8981){var map__8983 = p__8981;var map__8983__$1 = ((cljs.core.seq_QMARK_(map__8983))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8983):map__8983);var state = map__8983__$1;var tetr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8983__$1,cljs.core.constant$keyword$53);if(cljs.core.not(tetr))
{return tetris.core.maybe_rollback.cljs$core$IFn$_invoke$arity$2(tetris.core.next_tetrimino(state),state);
} else
{return state;
}
});
tetris.core.release_keyboard = (function release_keyboard(state){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$60,null);
});
tetris.core.collapse_rows = (function collapse_rows(p__8984){var map__8990 = p__8984;var map__8990__$1 = ((cljs.core.seq_QMARK_(map__8990))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8990):map__8990);var state = map__8990__$1;var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8990__$1,cljs.core.constant$keyword$54);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$54,cljs.core.into(cljs.core.empty(rows),cljs.core.map_indexed(((function (map__8990,map__8990__$1,state,rows){
return (function (i,p__8991){var vec__8992 = p__8991;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8992,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8992,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((tetris.core.blocks_v - i) - 1),v], null);
});})(map__8990,map__8990__$1,state,rows))
,cljs.core.reverse(cljs.core.remove(((function (map__8990,map__8990__$1,state,rows){
return (function (p__8993){var vec__8994 = p__8993;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8994,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8994,1,null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tetris.core.blocks_h,cljs.core.count(v));
});})(map__8990,map__8990__$1,state,rows))
,rows)))));
});
tetris.core.score = (function score(p__8996){var map__8999 = p__8996;var map__8999__$1 = ((cljs.core.seq_QMARK_(map__8999))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8999):map__8999);var state = map__8999__$1;var old_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8999__$1,cljs.core.constant$keyword$54);var map__9000 = tetris.core.collapse_rows(state);var map__9000__$1 = ((cljs.core.seq_QMARK_(map__9000))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9000):map__9000);var new_state = map__9000__$1;var new_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9000__$1,cljs.core.constant$keyword$54);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61], null),((function (map__9000,map__9000__$1,new_state,new_rows,map__8999,map__8999__$1,state,old_rows){
return (function (p1__8995_SHARP_){return (p1__8995_SHARP_ + (tetris.core.score_multiplier * (cljs.core.count(old_rows) - cljs.core.count(new_rows))));
});})(map__9000,map__9000__$1,new_state,new_rows,map__8999,map__8999__$1,state,old_rows))
);
});
tetris.core.maybe_score = (function maybe_score(p__9001){var map__9003 = p__9001;var map__9003__$1 = ((cljs.core.seq_QMARK_(map__9003))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9003):map__9003);var state = map__9003__$1;var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9003__$1,cljs.core.constant$keyword$53);if(cljs.core.not(t))
{return tetris.core.score(state);
} else
{return state;
}
});
tetris.core.maybe_game_over = (function maybe_game_over(p__9004){var map__9006 = p__9004;var map__9006__$1 = ((cljs.core.seq_QMARK_(map__9006))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9006):map__9006);var state = map__9006__$1;var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9006__$1,cljs.core.constant$keyword$53);if(cljs.core.not(t))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$62,false);
} else
{return state;
}
});
tetris.core.maybe_level_up = (function maybe_level_up(p__9007){var map__9009 = p__9007;var map__9009__$1 = ((cljs.core.seq_QMARK_(map__9009))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9009):map__9009);var state = map__9009__$1;var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9009__$1,cljs.core.constant$keyword$61);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$56,(((score / tetris.core.level_up_score) | 0) + 1));
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
tetris.core.render = (function render(p__9010){var map__9012 = p__9010;var map__9012__$1 = ((cljs.core.seq_QMARK_(map__9012))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9012):map__9012);var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9012__$1,cljs.core.constant$keyword$53);var tn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9012__$1,cljs.core.constant$keyword$59);var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9012__$1,cljs.core.constant$keyword$54);var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9012__$1,cljs.core.constant$keyword$61);var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9012__$1,cljs.core.constant$keyword$56);(tetris.core.score_text["innerText"] = score);
(tetris.core.level_text["innerText"] = level);
tetris.core.draw_background(tetris.core.screen_ctx,"#2a2f34");
tetris.core.draw_background(tetris.core.preview_screen_ctx,"#3b4045");
if(cljs.core.truth_(t))
{tetris.core.draw_blocks.cljs$core$IFn$_invoke$arity$3(tetris.core.screen_ctx,tetris.core.rendering_offset,tetris.core.tetrimino__GT_blocks(t));
} else
{}
if(cljs.core.truth_(tn))
{tetris.core.draw_blocks.cljs$core$IFn$_invoke$arity$2(tetris.core.preview_screen_ctx,tetris.core.tetrimino__GT_blocks(tn));
} else
{}
return tetris.core.draw_blocks.cljs$core$IFn$_invoke$arity$3(tetris.core.screen_ctx,tetris.core.rendering_offset,tetris.core.rows__GT_blocks(rows));
});
tetris.core.render_loop = (function render_loop(){tetris.core.render(cljs.core.deref(tetris.core.game_state));
return window.requestAnimationFrame(render_loop);
});
tetris.core.handle_key_press = (function handle_key_press(state,key_code){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$60,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tetris.core.controls,key_code));
});
tetris.core.run_game_cycle = (function run_game_cycle(p__9013){var map__9015 = p__9013;var map__9015__$1 = ((cljs.core.seq_QMARK_(map__9015))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9015):map__9015);var state = map__9015__$1;var tetrimino = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9015__$1,cljs.core.constant$keyword$53);var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9015__$1,cljs.core.constant$keyword$62);if(cljs.core.truth_(running_QMARK_))
{return tetris.core.maybe_game_over(tetris.core.maybe_next_tetrimino(tetris.core.maybe_level_up(tetris.core.maybe_score(tetris.core.process_gravity(tetris.core.release_keyboard((tetris.core.process_keyboard.cljs$core$IFn$_invoke$arity$1 ? tetris.core.process_keyboard.cljs$core$IFn$_invoke$arity$1(tetris.core.process_time(state)) : tetris.core.process_keyboard.call(null,tetris.core.process_time(state)))))))));
} else
{return state;
}
});
document.addEventListener("keydown",(function (p1__9016_SHARP_){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tetris.core.game_state,tetris.core.handle_key_press,p1__9016_SHARP_.keyCode);
}),false);
tetris.core.render_loop();
var c__6102__auto___9041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___9041){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___9041){
return (function (state_9027){var state_val_9028 = (state_9027[1]);if((state_val_9028 === 4))
{var inst_9022 = (state_9027[2]);var inst_9017 = inst_9022;var state_9027__$1 = (function (){var statearr_9029 = state_9027;(statearr_9029[7] = inst_9017);
return statearr_9029;
})();var statearr_9030_9042 = state_9027__$1;(statearr_9030_9042[2] = null);
(statearr_9030_9042[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_9028 === 3))
{var inst_9025 = (state_9027[2]);var state_9027__$1 = state_9027;return cljs.core.async.impl.ioc_helpers.return_chan(state_9027__$1,inst_9025);
} else
{if((state_val_9028 === 2))
{var inst_9019 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.core.game_state,tetris.core.run_game_cycle);var inst_9020 = cljs.core.async.timeout(10);var state_9027__$1 = (function (){var statearr_9031 = state_9027;(statearr_9031[8] = inst_9019);
return statearr_9031;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9027__$1,4,inst_9020);
} else
{if((state_val_9028 === 1))
{var inst_9017 = null;var state_9027__$1 = (function (){var statearr_9032 = state_9027;(statearr_9032[7] = inst_9017);
return statearr_9032;
})();var statearr_9033_9043 = state_9027__$1;(statearr_9033_9043[2] = null);
(statearr_9033_9043[1] = 2);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
});})(c__6102__auto___9041))
;return ((function (switch__6087__auto__,c__6102__auto___9041){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_9037 = [null,null,null,null,null,null,null,null,null];(statearr_9037[0] = state_machine__6088__auto__);
(statearr_9037[1] = 1);
return statearr_9037;
});
var state_machine__6088__auto____1 = (function (state_9027){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_9027);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e9038){if((e9038 instanceof Object))
{var ex__6091__auto__ = e9038;var statearr_9039_9044 = state_9027;(statearr_9039_9044[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_9027);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e9038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__9045 = state_9027;
state_9027 = G__9045;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_9027){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_9027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___9041))
})();var state__6104__auto__ = (function (){var statearr_9040 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_9040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___9041);
return statearr_9040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___9041))
);
