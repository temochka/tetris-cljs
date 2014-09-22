// Compiled by ClojureScript 0.0-2202
goog.provide('tetris.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
tetris.core.screen_ctx = document.getElementById("screen").getContext("2d");
tetris.core.preview_ctx = document.getElementById("preview-screen").getContext("2d");
tetris.core.level_text = document.getElementById("level");
tetris.core.score_text = document.getElementById("score");
tetris.core.screen_width = 200;
tetris.core.screen_height = 440;
tetris.core.blocks_h = 10;
tetris.core.blocks_v = 24;
tetris.core.block_size = (tetris.core.screen_width / tetris.core.blocks_h);
tetris.core.block_border_size = 1;
tetris.core.rendering_offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-2], null);
tetris.core.score_multiplier = 100;
tetris.core.level_up_score = 400;
tetris.core.level_gravity_penalty = 30;
tetris.core.colors = new cljs.core.PersistentArrayMap(null, 8, ["c","#34aadc","b","#087eff","o","#ffa01b","y","#ffd015","l","#54da6b","m","#a081ee","r","#ff5349"," ",null], null);
tetris.core.controls = new cljs.core.PersistentArrayMap(null, 4, [37,cljs.core.constant$keyword$47,39,cljs.core.constant$keyword$48,40,cljs.core.constant$keyword$49,38,cljs.core.constant$keyword$50], null);
tetris.core.directions = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$49,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),cljs.core.constant$keyword$48,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),cljs.core.constant$keyword$47,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0], null)], null);
/**
* A coordinate on a screen or a vector.
*/
tetris.core.point = (function point(x,y){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
/**
* A colored tetris block.
*/
tetris.core.block = (function block(point,color){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,color], null);
});
/**
* Treats a given sequence m as a matrix. Rotates the matrix
* clockwise.
*/
tetris.core.rotate_matrix = (function rotate_matrix(m){return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.reverse(m)));
});
/**
* Given a sequence of characters, returns a vector of corresponding
* color keywords.
*/
tetris.core.ascii__GT_vector = (function ascii__GT_vector(ascii){return cljs.core.vec(cljs.core.replace(tetris.core.colors,ascii));
});
/**
* Transforms a given ascii color schema into a color matrix.
*/
tetris.core.ascii_schema__GT_matrix = (function ascii_schema__GT_matrix(schema){return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.ascii__GT_vector,schema));
});
/**
* Transforms a given color matrix into a vector of tetris blocks.
*/
tetris.core.matrix__GT_blocks = (function matrix__GT_blocks(m){return cljs.core.vec(cljs.core.remove((function (p1__8912_SHARP_){return (cljs.core.last(p1__8912_SHARP_) == null);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed((function (y,xs){return cljs.core.map_indexed((function (x,color){return tetris.core.block(tetris.core.point(x,y),color);
}),xs);
}),m))));
});
/**
* Defines a tetrimino type using a given ascii color schema.
* Precalculates all 4 possible rotations.
*/
tetris.core.tetrimino_type = (function tetrimino_type(ascii_schema){var m = tetris.core.ascii_schema__GT_matrix(ascii_schema);var ms = cljs.core.take(4,cljs.core.iterate(tetris.core.rotate_matrix,m));return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.matrix__GT_blocks,ms));
});
tetris.core.tetrimino_types = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.tetrimino_type,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["    ","cccc","    ","    "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b  ","bbb","   "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["  o","ooo","   "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yy","yy"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ll","ll ","   "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" m ","mmm","   "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rr "," rr","   "], null)], null)));
/**
* Sums a point and a vector.
*/
tetris.core.translate_point = (function translate_point(point,dv){return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,point,dv));
});
/**
* Translates block’s point by vector dv preserving color.
*/
tetris.core.translate_block = (function translate_block(p__8913,dv){var vec__8915 = p__8913;var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8915,0,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8915,1,null);return tetris.core.block(tetris.core.translate_point(point,dv),color);
});
/**
* Translates all given blocks by vector dv.
*/
tetris.core.translate_blocks = (function translate_blocks(blocks,dv){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8916_SHARP_){return tetris.core.translate_block(p1__8916_SHARP_,dv);
}),blocks));
});
/**
* Transforms a given tetrimino into a sequence of blocks at current position.
*/
tetris.core.tetrimino__GT_blocks = (function tetrimino__GT_blocks(p__8917){var map__8919 = p__8917;var map__8919__$1 = ((cljs.core.seq_QMARK_(map__8919))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8919):map__8919);var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8919__$1,cljs.core.constant$keyword$51);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8919__$1,cljs.core.constant$keyword$22);var spin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8919__$1,cljs.core.constant$keyword$52);return tetris.core.translate_blocks(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(type,spin),pos);
});
/**
* Transforms current rows map into blocks sequence.
*/
tetris.core.rows__GT_blocks = (function rows__GT_blocks(rows){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__8924){var vec__8925 = p__8924;var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8925,0,null);var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8925,1,null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__8925,y,xs){
return (function (p__8926){var vec__8927 = p__8926;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8927,0,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8927,1,null);return tetris.core.block(tetris.core.point(x,y),color);
});})(vec__8925,y,xs))
,xs);
}),rows));
});
/**
* Defines a tetrimino with given pos, spin and type.
*/
tetris.core.tetrimino = (function tetrimino(pos,spin,type){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,pos,cljs.core.constant$keyword$52,spin,cljs.core.constant$keyword$22,type], null);
});
/**
* Given a tetrimino, returns a tetrimino, rotated clockwise once.
*/
tetris.core.rotate_tetrimino = (function rotate_tetrimino(p__8928){var map__8930 = p__8928;var map__8930__$1 = ((cljs.core.seq_QMARK_(map__8930))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8930):map__8930);var t = map__8930__$1;var spin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8930__$1,cljs.core.constant$keyword$52);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,cljs.core.constant$keyword$52,cljs.core.rem((spin + 1),4));
});
/**
* Returns a tetrimino of a random type and spin.
*/
tetris.core.random_tetrimino = (function random_tetrimino(){return tetris.core.tetrimino(tetris.core.point(0,0),cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,4)),cljs.core.rand_nth(tetris.core.tetrimino_types));
});
/**
* Given tetrimino returns a tetrimino moved by one block in given direction.
*/
tetris.core.move_tetrimino = (function move_tetrimino(t,d){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51], null),tetris.core.translate_point,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tetris.core.directions,d));
});
/**
* Checks the current tetrimino for collisions with walls and existing walls.
*/
tetris.core.collisions_QMARK_ = (function collisions_QMARK_(p__8931){var map__8936 = p__8931;var map__8936__$1 = ((cljs.core.seq_QMARK_(map__8936))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8936):map__8936);var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8936__$1,cljs.core.constant$keyword$53);var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8936__$1,cljs.core.constant$keyword$54);var blocks = tetris.core.tetrimino__GT_blocks(t);return cljs.core.some(((function (blocks,map__8936,map__8936__$1,t,rows){
return (function (p__8937){var vec__8938 = p__8937;var vec__8939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8938,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8939,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8939,1,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8938,1,null);var or__3481__auto__ = (x < 0);if(or__3481__auto__)
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
});})(blocks,map__8936,map__8936__$1,t,rows))
,blocks);
});
/**
* Given the rows map and a block, adds the block to the rows.
*/
tetris.core.freeze_block = (function freeze_block(rows,p__8940){var vec__8943 = p__8940;var vec__8944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8943,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8944,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8944,1,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8943,1,null);return cljs.core.assoc_in(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),color);
});
/**
* Makes the current tetrimino a part of the rows.
*/
tetris.core.freeze = (function freeze(p__8945){var map__8947 = p__8945;var map__8947__$1 = ((cljs.core.seq_QMARK_(map__8947))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8947):map__8947);var state = map__8947__$1;var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8947__$1,cljs.core.constant$keyword$54);var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8947__$1,cljs.core.constant$keyword$53);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$54], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,tetris.core.freeze_block),tetris.core.tetrimino__GT_blocks(t)),cljs.core.constant$keyword$53,null);
});
/**
* In case of collisions, rolls back the current state to a provided
* 'safe' state applying a function to it if one is given.
*/
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
/**
* If the gravity interval is due, moves a tetrimino down by one block or freezes it
* in case any collisions are detected.
*/
tetris.core.process_gravity = (function process_gravity(p__8948){var map__8950 = p__8948;var map__8950__$1 = ((cljs.core.seq_QMARK_(map__8950))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8950):map__8950);var state = map__8950__$1;var tetr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8950__$1,cljs.core.constant$keyword$53);var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8950__$1,cljs.core.constant$keyword$55);var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8950__$1,cljs.core.constant$keyword$56);var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8950__$1,cljs.core.constant$keyword$57);var t0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8950__$1,cljs.core.constant$keyword$58);if(cljs.core.truth_((function (){var and__3469__auto__ = tetr;if(cljs.core.truth_(and__3469__auto__))
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
/**
* Adds current :now timestamp in milliseconds to a given state map.
*/
tetris.core.process_time = (function process_time(state){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$55,(new Date()).getTime());
});
/**
* First swaps :tetrimino and :next-tetrimino map keys, then assigns a random
* tetrimino to the :next-tetrimino key.
*/
tetris.core.next_tetrimino = (function next_tetrimino(p__8951){var map__8953 = p__8951;var map__8953__$1 = ((cljs.core.seq_QMARK_(map__8953))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8953):map__8953);var state = map__8953__$1;var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8953__$1,cljs.core.constant$keyword$59);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$53,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,cljs.core.constant$keyword$51,tetris.core.point(4,0)),cljs.core.array_seq([cljs.core.constant$keyword$59,tetris.core.random_tetrimino()], 0));
});
/**
* Requests the next tetrimino if the current one is missing.
*/
tetris.core.maybe_next_tetrimino = (function maybe_next_tetrimino(p__8954){var map__8956 = p__8954;var map__8956__$1 = ((cljs.core.seq_QMARK_(map__8956))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8956):map__8956);var state = map__8956__$1;var tetr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8956__$1,cljs.core.constant$keyword$53);if(cljs.core.not(tetr))
{return tetris.core.maybe_rollback.cljs$core$IFn$_invoke$arity$2(tetris.core.next_tetrimino(state),state);
} else
{return state;
}
});
tetris.core.release_keyboard = (function release_keyboard(state){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$60,null);
});
/**
* Collapses completed rows of Tetris blocks.
*/
tetris.core.collapse_rows = (function collapse_rows(p__8957){var map__8963 = p__8957;var map__8963__$1 = ((cljs.core.seq_QMARK_(map__8963))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8963):map__8963);var state = map__8963__$1;var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8963__$1,cljs.core.constant$keyword$54);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$54,cljs.core.into(cljs.core.empty(rows),cljs.core.map_indexed(((function (map__8963,map__8963__$1,state,rows){
return (function (i,p__8964){var vec__8965 = p__8964;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8965,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8965,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((tetris.core.blocks_v - i) - 1),v], null);
});})(map__8963,map__8963__$1,state,rows))
,cljs.core.reverse(cljs.core.remove(((function (map__8963,map__8963__$1,state,rows){
return (function (p__8966){var vec__8967 = p__8966;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8967,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8967,1,null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tetris.core.blocks_h,cljs.core.count(v));
});})(map__8963,map__8963__$1,state,rows))
,rows)))));
});
/**
* Triggers rows collapse and scores points if there were any completed ones.
*/
tetris.core.score = (function score(p__8969){var map__8972 = p__8969;var map__8972__$1 = ((cljs.core.seq_QMARK_(map__8972))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8972):map__8972);var state = map__8972__$1;var old_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8972__$1,cljs.core.constant$keyword$54);var map__8973 = tetris.core.collapse_rows(state);var map__8973__$1 = ((cljs.core.seq_QMARK_(map__8973))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8973):map__8973);var new_state = map__8973__$1;var new_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8973__$1,cljs.core.constant$keyword$54);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61], null),((function (map__8973,map__8973__$1,new_state,new_rows,map__8972,map__8972__$1,state,old_rows){
return (function (p1__8968_SHARP_){return (p1__8968_SHARP_ + (tetris.core.score_multiplier * (cljs.core.count(old_rows) - cljs.core.count(new_rows))));
});})(map__8973,map__8973__$1,new_state,new_rows,map__8972,map__8972__$1,state,old_rows))
);
});
/**
* Check for completed rows if there is no active tetrimino.
*/
tetris.core.maybe_score = (function maybe_score(p__8974){var map__8976 = p__8974;var map__8976__$1 = ((cljs.core.seq_QMARK_(map__8976))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8976):map__8976);var state = map__8976__$1;var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8976__$1,cljs.core.constant$keyword$53);if(cljs.core.not(t))
{return tetris.core.score(state);
} else
{return state;
}
});
/**
* Stop the game if there is no active tetrimino.
*/
tetris.core.maybe_game_over = (function maybe_game_over(p__8977){var map__8979 = p__8977;var map__8979__$1 = ((cljs.core.seq_QMARK_(map__8979))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8979):map__8979);var state = map__8979__$1;var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8979__$1,cljs.core.constant$keyword$53);if(cljs.core.not(t))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$62,false);
} else
{return state;
}
});
/**
* Sets the current level number according to the current score.
*/
tetris.core.maybe_level_up = (function maybe_level_up(p__8980){var map__8982 = p__8980;var map__8982__$1 = ((cljs.core.seq_QMARK_(map__8982))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8982):map__8982);var state = map__8982__$1;var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8982__$1,cljs.core.constant$keyword$61);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$56,(((score / tetris.core.level_up_score) | 0) + 1));
});
tetris.core.process_keyboard = (function (){var method_table__4339__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4340__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4341__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4342__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$63,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("process-keyboard",((function (method_table__4339__auto__,prefer_table__4340__auto__,method_cache__4341__auto__,cached_hierarchy__4342__auto__,hierarchy__4343__auto__){
return (function (p__8983){var map__8984 = p__8983;var map__8984__$1 = ((cljs.core.seq_QMARK_(map__8984))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8984):map__8984);var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8984__$1,cljs.core.constant$keyword$60);if(cljs.core.contains_QMARK_(tetris.core.directions,key))
{return cljs.core.constant$keyword$64;
} else
{return key;
}
});})(method_table__4339__auto__,prefer_table__4340__auto__,method_cache__4341__auto__,cached_hierarchy__4342__auto__,hierarchy__4343__auto__))
,cljs.core.constant$keyword$7,hierarchy__4343__auto__,method_table__4339__auto__,prefer_table__4340__auto__,method_cache__4341__auto__,cached_hierarchy__4342__auto__));
})();
tetris.core.process_keyboard.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$64,(function (p__8985){var map__8986 = p__8985;var map__8986__$1 = ((cljs.core.seq_QMARK_(map__8986))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8986):map__8986);var state = map__8986__$1;var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8986__$1,cljs.core.constant$keyword$60);return tetris.core.maybe_rollback.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$53], null),tetris.core.move_tetrimino,key),state);
}));
tetris.core.process_keyboard.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$50,(function (state){return tetris.core.maybe_rollback.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$53], null),tetris.core.rotate_tetrimino),state);
}));
tetris.core.process_keyboard.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (state){return state;
}));
/**
* Transforms a given key code to a controls keyword and
* saves it into a given state map.
*/
tetris.core.handle_key_press = (function handle_key_press(state,key_code){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$60,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tetris.core.controls,key_code));
});
tetris.core.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$54,cljs.core.sorted_map(),cljs.core.constant$keyword$53,null,cljs.core.constant$keyword$59,tetris.core.random_tetrimino(),cljs.core.constant$keyword$57,500,cljs.core.constant$keyword$61,0,cljs.core.constant$keyword$56,1,cljs.core.constant$keyword$62,true], null));
/**
* Given an HTML Canvas, draws a background of given width and height.
*/
tetris.core.draw_background = (function draw_background(ctx,color){var G__8988 = ctx;(G__8988["fillStyle"] = color);
G__8988.fillRect(0,0,tetris.core.screen_width,tetris.core.screen_height);
return G__8988;
});
/**
* Draws a colored Tetris block using a given HTML Canvas context.
*/
tetris.core.draw_block = (function draw_block(ctx,offset,p__8989){var vec__8993 = p__8989;var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8993,0,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8993,1,null);var vec__8994 = tetris.core.translate_point(point,offset);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8994,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8994,1,null);var G__8995 = ctx;(G__8995["fillStyle"] = color);
G__8995.fillRect(((tetris.core.block_size * x) + tetris.core.block_border_size),((tetris.core.block_size * y) + tetris.core.block_border_size),(tetris.core.block_size - (2 * tetris.core.block_border_size)),(tetris.core.block_size - (2 * tetris.core.block_border_size)));
return G__8995;
});
/**
* Draws a sequence of blocks on HTML canvas.
*/
tetris.core.draw_blocks = (function() {
var draw_blocks = null;
var draw_blocks__2 = (function (ctx,blocks){return draw_blocks.cljs$core$IFn$_invoke$arity$3(ctx,tetris.core.point(0,0),blocks);
});
var draw_blocks__3 = (function (ctx,offset,blocks){var seq__9000 = cljs.core.seq(blocks);var chunk__9001 = null;var count__9002 = 0;var i__9003 = 0;while(true){
if((i__9003 < count__9002))
{var block = chunk__9001.cljs$core$IIndexed$_nth$arity$2(null,i__9003);tetris.core.draw_block(ctx,offset,block);
{
var G__9004 = seq__9000;
var G__9005 = chunk__9001;
var G__9006 = count__9002;
var G__9007 = (i__9003 + 1);
seq__9000 = G__9004;
chunk__9001 = G__9005;
count__9002 = G__9006;
i__9003 = G__9007;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__9000);if(temp__4126__auto__)
{var seq__9000__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9000__$1))
{var c__4229__auto__ = cljs.core.chunk_first(seq__9000__$1);{
var G__9008 = cljs.core.chunk_rest(seq__9000__$1);
var G__9009 = c__4229__auto__;
var G__9010 = cljs.core.count(c__4229__auto__);
var G__9011 = 0;
seq__9000 = G__9008;
chunk__9001 = G__9009;
count__9002 = G__9010;
i__9003 = G__9011;
continue;
}
} else
{var block = cljs.core.first(seq__9000__$1);tetris.core.draw_block(ctx,offset,block);
{
var G__9012 = cljs.core.next(seq__9000__$1);
var G__9013 = null;
var G__9014 = 0;
var G__9015 = 0;
seq__9000 = G__9012;
chunk__9001 = G__9013;
count__9002 = G__9014;
i__9003 = G__9015;
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
/**
* Draws everything on the screen.
*/
tetris.core.render = (function render(p__9016){var map__9018 = p__9016;var map__9018__$1 = ((cljs.core.seq_QMARK_(map__9018))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9018):map__9018);var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9018__$1,cljs.core.constant$keyword$53);var tn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9018__$1,cljs.core.constant$keyword$59);var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9018__$1,cljs.core.constant$keyword$54);var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9018__$1,cljs.core.constant$keyword$61);var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9018__$1,cljs.core.constant$keyword$56);(tetris.core.score_text["innerText"] = score);
(tetris.core.level_text["innerText"] = level);
tetris.core.draw_background(tetris.core.screen_ctx,"#2a2f34");
tetris.core.draw_background(tetris.core.preview_ctx,"#3b4045");
if(cljs.core.truth_(t))
{tetris.core.draw_blocks.cljs$core$IFn$_invoke$arity$3(tetris.core.screen_ctx,tetris.core.rendering_offset,tetris.core.tetrimino__GT_blocks(t));
} else
{}
if(cljs.core.truth_(tn))
{tetris.core.draw_blocks.cljs$core$IFn$_invoke$arity$2(tetris.core.preview_ctx,tetris.core.tetrimino__GT_blocks(tn));
} else
{}
return tetris.core.draw_blocks.cljs$core$IFn$_invoke$arity$3(tetris.core.screen_ctx,tetris.core.rendering_offset,tetris.core.rows__GT_blocks(rows));
});
/**
* Starts the rendering loop using requestAnimationFrame callback.
*/
tetris.core.render_loop = (function render_loop(){tetris.core.render(cljs.core.deref(tetris.core.game_state));
return window.requestAnimationFrame(render_loop);
});
/**
* Puts everything together.
*/
tetris.core.run_game_cycle = (function run_game_cycle(p__9019){var map__9021 = p__9019;var map__9021__$1 = ((cljs.core.seq_QMARK_(map__9021))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9021):map__9021);var state = map__9021__$1;var tetrimino = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9021__$1,cljs.core.constant$keyword$53);var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9021__$1,cljs.core.constant$keyword$62);if(cljs.core.truth_(running_QMARK_))
{return tetris.core.maybe_game_over(tetris.core.maybe_next_tetrimino(tetris.core.maybe_level_up(tetris.core.maybe_score(tetris.core.process_gravity(tetris.core.release_keyboard((tetris.core.process_keyboard.cljs$core$IFn$_invoke$arity$1 ? tetris.core.process_keyboard.cljs$core$IFn$_invoke$arity$1(tetris.core.process_time(state)) : tetris.core.process_keyboard.call(null,tetris.core.process_time(state)))))))));
} else
{return state;
}
});
document.addEventListener("keydown",(function (p1__9022_SHARP_){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tetris.core.game_state,tetris.core.handle_key_press,p1__9022_SHARP_.keyCode);
}),false);
tetris.core.render_loop();
var c__6102__auto___9047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6102__auto___9047){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___9047){
return (function (state_9033){var state_val_9034 = (state_9033[1]);if((state_val_9034 === 4))
{var inst_9028 = (state_9033[2]);var inst_9023 = inst_9028;var state_9033__$1 = (function (){var statearr_9035 = state_9033;(statearr_9035[7] = inst_9023);
return statearr_9035;
})();var statearr_9036_9048 = state_9033__$1;(statearr_9036_9048[2] = null);
(statearr_9036_9048[1] = 2);
return cljs.core.constant$keyword$31;
} else
{if((state_val_9034 === 3))
{var inst_9031 = (state_9033[2]);var state_9033__$1 = state_9033;return cljs.core.async.impl.ioc_helpers.return_chan(state_9033__$1,inst_9031);
} else
{if((state_val_9034 === 2))
{var inst_9025 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.core.game_state,tetris.core.run_game_cycle);var inst_9026 = cljs.core.async.timeout(10);var state_9033__$1 = (function (){var statearr_9037 = state_9033;(statearr_9037[8] = inst_9025);
return statearr_9037;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9033__$1,4,inst_9026);
} else
{if((state_val_9034 === 1))
{var inst_9023 = null;var state_9033__$1 = (function (){var statearr_9038 = state_9033;(statearr_9038[7] = inst_9023);
return statearr_9038;
})();var statearr_9039_9049 = state_9033__$1;(statearr_9039_9049[2] = null);
(statearr_9039_9049[1] = 2);
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
});})(c__6102__auto___9047))
;return ((function (switch__6087__auto__,c__6102__auto___9047){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_9043 = [null,null,null,null,null,null,null,null,null];(statearr_9043[0] = state_machine__6088__auto__);
(statearr_9043[1] = 1);
return statearr_9043;
});
var state_machine__6088__auto____1 = (function (state_9033){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__(state_9033);if(cljs.core.keyword_identical_QMARK_(result__6090__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e9044){if((e9044 instanceof Object))
{var ex__6091__auto__ = e9044;var statearr_9045_9050 = state_9033;(statearr_9045_9050[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_9033);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e9044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6089__auto__,cljs.core.constant$keyword$31))
{{
var G__9051 = state_9033;
state_9033 = G__9051;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_9033){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_9033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___9047))
})();var state__6104__auto__ = (function (){var statearr_9046 = (f__6103__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6103__auto__.cljs$core$IFn$_invoke$arity$0() : f__6103__auto__.call(null));(statearr_9046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___9047);
return statearr_9046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6104__auto__);
});})(c__6102__auto___9047))
);
