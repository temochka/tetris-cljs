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
tetris.core.controls = new cljs.core.PersistentArrayMap(null, 4, [37,new cljs.core.Keyword(null,"left","left",1017222009),39,new cljs.core.Keyword(null,"right","right",1122416014),40,new cljs.core.Keyword(null,"down","down",1016993812),38,new cljs.core.Keyword(null,"rotate","rotate",4383690957)], null);
tetris.core.directions = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0], null)], null);
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
tetris.core.rotate_matrix = (function rotate_matrix(m){return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.reverse.call(null,m)));
});
/**
* Given a sequence of characters, returns a vector of corresponding
* color keywords.
*/
tetris.core.ascii__GT_vector = (function ascii__GT_vector(ascii){return cljs.core.vec.call(null,cljs.core.replace.call(null,tetris.core.colors,ascii));
});
/**
* Transforms a given ascii color schema into a color matrix.
*/
tetris.core.ascii_schema__GT_matrix = (function ascii_schema__GT_matrix(schema){return cljs.core.vec.call(null,cljs.core.map.call(null,tetris.core.ascii__GT_vector,schema));
});
/**
* Transforms a given color matrix into a vector of tetris blocks.
*/
tetris.core.matrix__GT_blocks = (function matrix__GT_blocks(m){return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__11445_SHARP_){return (cljs.core.last.call(null,p1__11445_SHARP_) == null);
}),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,(function (y,xs){return cljs.core.map_indexed.call(null,(function (x,color){return tetris.core.block.call(null,tetris.core.point.call(null,x,y),color);
}),xs);
}),m))));
});
/**
* Defines a tetrimino type using a given ascii color schema.
* Precalculates all 4 possible rotations.
*/
tetris.core.tetrimino_type = (function tetrimino_type(ascii_schema){var m = tetris.core.ascii_schema__GT_matrix.call(null,ascii_schema);var ms = cljs.core.take.call(null,4,cljs.core.iterate.call(null,tetris.core.rotate_matrix,m));return cljs.core.vec.call(null,cljs.core.map.call(null,tetris.core.matrix__GT_blocks,ms));
});
tetris.core.tetrimino_types = cljs.core.vec.call(null,cljs.core.map.call(null,tetris.core.tetrimino_type,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["    ","cccc","    ","    "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b  ","bbb","   "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["  o","ooo","   "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yy","yy"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ll","ll ","   "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" m ","mmm","   "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rr "," rr","   "], null)], null)));
/**
* Sums a point and a vector.
*/
tetris.core.translate_point = (function translate_point(point,dv){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,point,dv));
});
/**
* Translates block’s point by vector dv preserving color.
*/
tetris.core.translate_block = (function translate_block(p__11446,dv){var vec__11448 = p__11446;var point = cljs.core.nth.call(null,vec__11448,0,null);var color = cljs.core.nth.call(null,vec__11448,1,null);return tetris.core.block.call(null,tetris.core.translate_point.call(null,point,dv),color);
});
/**
* Translates all given blocks by vector dv.
*/
tetris.core.translate_blocks = (function translate_blocks(blocks,dv){return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__11449_SHARP_){return tetris.core.translate_block.call(null,p1__11449_SHARP_,dv);
}),blocks));
});
/**
* Transforms a given tetrimino into a sequence of blocks at current position.
*/
tetris.core.tetrimino__GT_blocks = (function tetrimino__GT_blocks(p__11450){var map__11452 = p__11450;var map__11452__$1 = ((cljs.core.seq_QMARK_.call(null,map__11452))?cljs.core.apply.call(null,cljs.core.hash_map,map__11452):map__11452);var pos = cljs.core.get.call(null,map__11452__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));var type = cljs.core.get.call(null,map__11452__$1,new cljs.core.Keyword(null,"type","type",1017479852));var spin = cljs.core.get.call(null,map__11452__$1,new cljs.core.Keyword(null,"spin","spin",1017441204));return tetris.core.translate_blocks.call(null,cljs.core.nth.call(null,type,spin),pos);
});
/**
* Transforms current rows map into blocks sequence.
*/
tetris.core.rows__GT_blocks = (function rows__GT_blocks(rows){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,(function (p__11457){var vec__11458 = p__11457;var y = cljs.core.nth.call(null,vec__11458,0,null);var xs = cljs.core.nth.call(null,vec__11458,1,null);return cljs.core.map.call(null,((function (vec__11458,y,xs){
return (function (p__11459){var vec__11460 = p__11459;var x = cljs.core.nth.call(null,vec__11460,0,null);var color = cljs.core.nth.call(null,vec__11460,1,null);return tetris.core.block.call(null,tetris.core.point.call(null,x,y),color);
});})(vec__11458,y,xs))
,xs);
}),rows));
});
/**
* Defines a tetrimino with given pos, spin and type.
*/
tetris.core.tetrimino = (function tetrimino(pos,spin,type){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"spin","spin",1017441204),spin,new cljs.core.Keyword(null,"type","type",1017479852),type], null);
});
/**
* Given a tetrimino, returns a tetrimino, rotated clockwise once.
*/
tetris.core.rotate_tetrimino = (function rotate_tetrimino(p__11461){var map__11463 = p__11461;var map__11463__$1 = ((cljs.core.seq_QMARK_.call(null,map__11463))?cljs.core.apply.call(null,cljs.core.hash_map,map__11463):map__11463);var t = map__11463__$1;var spin = cljs.core.get.call(null,map__11463__$1,new cljs.core.Keyword(null,"spin","spin",1017441204));return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"spin","spin",1017441204),cljs.core.rem.call(null,(spin + 1),4));
});
/**
* Returns a tetrimino of a random type and spin.
*/
tetris.core.random_tetrimino = (function random_tetrimino(){return tetris.core.tetrimino.call(null,tetris.core.point.call(null,0,0),cljs.core.rand_nth.call(null,cljs.core.range.call(null,0,4)),cljs.core.rand_nth.call(null,tetris.core.tetrimino_types));
});
/**
* Given tetrimino returns a tetrimino moved by one block in given direction.
*/
tetris.core.move_tetrimino = (function move_tetrimino(t,d){return cljs.core.update_in.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",1014015430)], null),tetris.core.translate_point,cljs.core.get.call(null,tetris.core.directions,d));
});
/**
* Checks the current tetrimino for collisions with walls and existing walls.
*/
tetris.core.collisions_QMARK_ = (function collisions_QMARK_(p__11464){var map__11469 = p__11464;var map__11469__$1 = ((cljs.core.seq_QMARK_.call(null,map__11469))?cljs.core.apply.call(null,cljs.core.hash_map,map__11469):map__11469);var t = cljs.core.get.call(null,map__11469__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var rows = cljs.core.get.call(null,map__11469__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var blocks = tetris.core.tetrimino__GT_blocks.call(null,t);return cljs.core.some.call(null,((function (blocks,map__11469,map__11469__$1,t,rows){
return (function (p__11470){var vec__11471 = p__11470;var vec__11472 = cljs.core.nth.call(null,vec__11471,0,null);var x = cljs.core.nth.call(null,vec__11472,0,null);var y = cljs.core.nth.call(null,vec__11472,1,null);var _ = cljs.core.nth.call(null,vec__11471,1,null);var or__3481__auto__ = (x < 0);if(or__3481__auto__)
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
{return cljs.core.get_in.call(null,rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
}
}
}
}
});})(blocks,map__11469,map__11469__$1,t,rows))
,blocks);
});
/**
* Given the rows map and a block, adds the block to the rows.
*/
tetris.core.freeze_block = (function freeze_block(rows,p__11473){var vec__11476 = p__11473;var vec__11477 = cljs.core.nth.call(null,vec__11476,0,null);var x = cljs.core.nth.call(null,vec__11477,0,null);var y = cljs.core.nth.call(null,vec__11477,1,null);var color = cljs.core.nth.call(null,vec__11476,1,null);return cljs.core.assoc_in.call(null,rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),color);
});
/**
* Makes the current tetrimino a part of the rows.
*/
tetris.core.freeze = (function freeze(p__11478){var map__11480 = p__11478;var map__11480__$1 = ((cljs.core.seq_QMARK_.call(null,map__11480))?cljs.core.apply.call(null,cljs.core.hash_map,map__11480):map__11480);var state = map__11480__$1;var rows = cljs.core.get.call(null,map__11480__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var t = cljs.core.get.call(null,map__11480__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",1017410891)], null),cljs.core.partial.call(null,cljs.core.reduce,tetris.core.freeze_block),tetris.core.tetrimino__GT_blocks.call(null,t)),new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),null);
});
/**
* In case of collisions, rolls back the current state to a provided
* 'safe' state applying a function to it if one is given.
*/
tetris.core.maybe_rollback = (function() {
var maybe_rollback = null;
var maybe_rollback__2 = (function (new_state,old_state){return maybe_rollback.call(null,new_state,old_state,cljs.core.identity);
});
var maybe_rollback__3 = (function (new_state,old_state,f){if(cljs.core.truth_(tetris.core.collisions_QMARK_.call(null,new_state)))
{return f.call(null,old_state);
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
tetris.core.process_gravity = (function process_gravity(p__11481){var map__11483 = p__11481;var map__11483__$1 = ((cljs.core.seq_QMARK_.call(null,map__11483))?cljs.core.apply.call(null,cljs.core.hash_map,map__11483):map__11483);var state = map__11483__$1;var tetr = cljs.core.get.call(null,map__11483__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var t = cljs.core.get.call(null,map__11483__$1,new cljs.core.Keyword(null,"now","now",1014013512));var level = cljs.core.get.call(null,map__11483__$1,new cljs.core.Keyword(null,"level","level",1116770038));var i = cljs.core.get.call(null,map__11483__$1,new cljs.core.Keyword(null,"gravity-interval","gravity-interval",3481182422));var t0 = cljs.core.get.call(null,map__11483__$1,new cljs.core.Keyword(null,"last-gravity","last-gravity",626386313));if(cljs.core.truth_((function (){var and__3469__auto__ = tetr;if(cljs.core.truth_(and__3469__auto__))
{return ((t - t0) > (i - (level * tetris.core.level_gravity_penalty)));
} else
{return and__3469__auto__;
}
})()))
{return tetris.core.maybe_rollback.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),(function (){var and__3469__auto__ = tetr;if(cljs.core.truth_(and__3469__auto__))
{return tetris.core.move_tetrimino.call(null,tetr,new cljs.core.Keyword(null,"down","down",1016993812));
} else
{return and__3469__auto__;
}
})(),new cljs.core.Keyword(null,"last-gravity","last-gravity",626386313),t),state,tetris.core.freeze);
} else
{return state;
}
});
/**
* Adds current :now timestamp in milliseconds to a given state map.
*/
tetris.core.process_time = (function process_time(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"now","now",1014013512),(new Date()).getTime());
});
/**
* First swaps :tetrimino and :next-tetrimino map keys, then assigns a random
* tetrimino to the :next-tetrimino key.
*/
tetris.core.next_tetrimino = (function next_tetrimino(p__11484){var map__11486 = p__11484;var map__11486__$1 = ((cljs.core.seq_QMARK_.call(null,map__11486))?cljs.core.apply.call(null,cljs.core.hash_map,map__11486):map__11486);var state = map__11486__$1;var t = cljs.core.get.call(null,map__11486__$1,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pos","pos",1014015430),tetris.core.point.call(null,4,0)),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183),tetris.core.random_tetrimino.call(null));
});
/**
* Requests the next tetrimino if the current one is missing.
*/
tetris.core.maybe_next_tetrimino = (function maybe_next_tetrimino(p__11487){var map__11489 = p__11487;var map__11489__$1 = ((cljs.core.seq_QMARK_.call(null,map__11489))?cljs.core.apply.call(null,cljs.core.hash_map,map__11489):map__11489);var state = map__11489__$1;var tetr = cljs.core.get.call(null,map__11489__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));if(cljs.core.not.call(null,tetr))
{return tetris.core.maybe_rollback.call(null,tetris.core.next_tetrimino.call(null,state),state);
} else
{return state;
}
});
tetris.core.release_keyboard = (function release_keyboard(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pressed-key","pressed-key",3350581670),null);
});
/**
* Collapses completed rows of Tetris blocks.
*/
tetris.core.collapse_rows = (function collapse_rows(p__11490){var map__11496 = p__11490;var map__11496__$1 = ((cljs.core.seq_QMARK_.call(null,map__11496))?cljs.core.apply.call(null,cljs.core.hash_map,map__11496):map__11496);var state = map__11496__$1;var rows = cljs.core.get.call(null,map__11496__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"rows","rows",1017410891),cljs.core.into.call(null,cljs.core.empty.call(null,rows),cljs.core.map_indexed.call(null,((function (map__11496,map__11496__$1,state,rows){
return (function (i,p__11497){var vec__11498 = p__11497;var _ = cljs.core.nth.call(null,vec__11498,0,null);var v = cljs.core.nth.call(null,vec__11498,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((tetris.core.blocks_v - i) - 1),v], null);
});})(map__11496,map__11496__$1,state,rows))
,cljs.core.reverse.call(null,cljs.core.remove.call(null,((function (map__11496,map__11496__$1,state,rows){
return (function (p__11499){var vec__11500 = p__11499;var _ = cljs.core.nth.call(null,vec__11500,0,null);var v = cljs.core.nth.call(null,vec__11500,1,null);return cljs.core._EQ_.call(null,tetris.core.blocks_h,cljs.core.count.call(null,v));
});})(map__11496,map__11496__$1,state,rows))
,rows)))));
});
/**
* Triggers rows collapse and scores points if there were any completed ones.
*/
tetris.core.score = (function score(p__11502){var map__11505 = p__11502;var map__11505__$1 = ((cljs.core.seq_QMARK_.call(null,map__11505))?cljs.core.apply.call(null,cljs.core.hash_map,map__11505):map__11505);var state = map__11505__$1;var old_rows = cljs.core.get.call(null,map__11505__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var map__11506 = tetris.core.collapse_rows.call(null,state);var map__11506__$1 = ((cljs.core.seq_QMARK_.call(null,map__11506))?cljs.core.apply.call(null,cljs.core.hash_map,map__11506):map__11506);var new_state = map__11506__$1;var new_rows = cljs.core.get.call(null,map__11506__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));return cljs.core.update_in.call(null,new_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",1123168772)], null),((function (map__11506,map__11506__$1,new_state,new_rows,map__11505,map__11505__$1,state,old_rows){
return (function (p1__11501_SHARP_){return (p1__11501_SHARP_ + (tetris.core.score_multiplier * (cljs.core.count.call(null,old_rows) - cljs.core.count.call(null,new_rows))));
});})(map__11506,map__11506__$1,new_state,new_rows,map__11505,map__11505__$1,state,old_rows))
);
});
/**
* Check for completed rows if there is no active tetrimino.
*/
tetris.core.maybe_score = (function maybe_score(p__11507){var map__11509 = p__11507;var map__11509__$1 = ((cljs.core.seq_QMARK_.call(null,map__11509))?cljs.core.apply.call(null,cljs.core.hash_map,map__11509):map__11509);var state = map__11509__$1;var t = cljs.core.get.call(null,map__11509__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));if(cljs.core.not.call(null,t))
{return tetris.core.score.call(null,state);
} else
{return state;
}
});
/**
* Stop the game if there is no active tetrimino.
*/
tetris.core.maybe_game_over = (function maybe_game_over(p__11510){var map__11512 = p__11510;var map__11512__$1 = ((cljs.core.seq_QMARK_.call(null,map__11512))?cljs.core.apply.call(null,cljs.core.hash_map,map__11512):map__11512);var state = map__11512__$1;var t = cljs.core.get.call(null,map__11512__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));if(cljs.core.not.call(null,t))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"running?","running?",1843566034),false);
} else
{return state;
}
});
/**
* Sets the current level number according to the current score.
*/
tetris.core.maybe_level_up = (function maybe_level_up(p__11513){var map__11515 = p__11513;var map__11515__$1 = ((cljs.core.seq_QMARK_.call(null,map__11515))?cljs.core.apply.call(null,cljs.core.hash_map,map__11515):map__11515);var state = map__11515__$1;var score = cljs.core.get.call(null,map__11515__$1,new cljs.core.Keyword(null,"score","score",1123168772));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"level","level",1116770038),(((score / tetris.core.level_up_score) | 0) + 1));
});
tetris.core.process_keyboard = (function (){var method_table__4339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4340__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4341__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4342__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4343__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("process-keyboard",((function (method_table__4339__auto__,prefer_table__4340__auto__,method_cache__4341__auto__,cached_hierarchy__4342__auto__,hierarchy__4343__auto__){
return (function (p__11516){var map__11517 = p__11516;var map__11517__$1 = ((cljs.core.seq_QMARK_.call(null,map__11517))?cljs.core.apply.call(null,cljs.core.hash_map,map__11517):map__11517);var key = cljs.core.get.call(null,map__11517__$1,new cljs.core.Keyword(null,"pressed-key","pressed-key",3350581670));if(cljs.core.contains_QMARK_.call(null,tetris.core.directions,key))
{return new cljs.core.Keyword(null,"move","move",1017261891);
} else
{return key;
}
});})(method_table__4339__auto__,prefer_table__4340__auto__,method_cache__4341__auto__,cached_hierarchy__4342__auto__,hierarchy__4343__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4343__auto__,method_table__4339__auto__,prefer_table__4340__auto__,method_cache__4341__auto__,cached_hierarchy__4342__auto__));
})();
cljs.core._add_method.call(null,tetris.core.process_keyboard,new cljs.core.Keyword(null,"move","move",1017261891),(function (p__11518){var map__11519 = p__11518;var map__11519__$1 = ((cljs.core.seq_QMARK_.call(null,map__11519))?cljs.core.apply.call(null,cljs.core.hash_map,map__11519):map__11519);var state = map__11519__$1;var key = cljs.core.get.call(null,map__11519__$1,new cljs.core.Keyword(null,"pressed-key","pressed-key",3350581670));return tetris.core.maybe_rollback.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897)], null),tetris.core.move_tetrimino,key),state);
}));
cljs.core._add_method.call(null,tetris.core.process_keyboard,new cljs.core.Keyword(null,"rotate","rotate",4383690957),(function (state){return tetris.core.maybe_rollback.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897)], null),tetris.core.rotate_tetrimino),state);
}));
cljs.core._add_method.call(null,tetris.core.process_keyboard,new cljs.core.Keyword(null,"default","default",2558708147),(function (state){return state;
}));
/**
* Transforms a given key code to a controls keyword and
* saves it into a given state map.
*/
tetris.core.handle_key_press = (function handle_key_press(state,key_code){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pressed-key","pressed-key",3350581670),cljs.core.get.call(null,tetris.core.controls,key_code));
});
tetris.core.game_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"rows","rows",1017410891),cljs.core.sorted_map.call(null),new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),null,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183),tetris.core.random_tetrimino.call(null),new cljs.core.Keyword(null,"gravity-interval","gravity-interval",3481182422),500,new cljs.core.Keyword(null,"score","score",1123168772),0,new cljs.core.Keyword(null,"level","level",1116770038),1,new cljs.core.Keyword(null,"running?","running?",1843566034),true], null));
/**
* Given an HTML Canvas, draws a background of given width and height.
*/
tetris.core.draw_background = (function draw_background(ctx,color){var G__11521 = ctx;(G__11521["fillStyle"] = color);
G__11521.fillRect(0,0,tetris.core.screen_width,tetris.core.screen_height);
return G__11521;
});
/**
* Draws a colored Tetris block using a given HTML Canvas context.
*/
tetris.core.draw_block = (function draw_block(ctx,offset,p__11522){var vec__11526 = p__11522;var point = cljs.core.nth.call(null,vec__11526,0,null);var color = cljs.core.nth.call(null,vec__11526,1,null);var vec__11527 = tetris.core.translate_point.call(null,point,offset);var x = cljs.core.nth.call(null,vec__11527,0,null);var y = cljs.core.nth.call(null,vec__11527,1,null);var G__11528 = ctx;(G__11528["fillStyle"] = color);
G__11528.fillRect(((tetris.core.block_size * x) + tetris.core.block_border_size),((tetris.core.block_size * y) + tetris.core.block_border_size),(tetris.core.block_size - (2 * tetris.core.block_border_size)),(tetris.core.block_size - (2 * tetris.core.block_border_size)));
return G__11528;
});
/**
* Draws a sequence of blocks on HTML canvas.
*/
tetris.core.draw_blocks = (function() {
var draw_blocks = null;
var draw_blocks__2 = (function (ctx,blocks){return draw_blocks.call(null,ctx,tetris.core.point.call(null,0,0),blocks);
});
var draw_blocks__3 = (function (ctx,offset,blocks){var seq__11533 = cljs.core.seq.call(null,blocks);var chunk__11534 = null;var count__11535 = 0;var i__11536 = 0;while(true){
if((i__11536 < count__11535))
{var block = cljs.core._nth.call(null,chunk__11534,i__11536);tetris.core.draw_block.call(null,ctx,offset,block);
{
var G__11537 = seq__11533;
var G__11538 = chunk__11534;
var G__11539 = count__11535;
var G__11540 = (i__11536 + 1);
seq__11533 = G__11537;
chunk__11534 = G__11538;
count__11535 = G__11539;
i__11536 = G__11540;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11533);if(temp__4126__auto__)
{var seq__11533__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11533__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__11533__$1);{
var G__11541 = cljs.core.chunk_rest.call(null,seq__11533__$1);
var G__11542 = c__4229__auto__;
var G__11543 = cljs.core.count.call(null,c__4229__auto__);
var G__11544 = 0;
seq__11533 = G__11541;
chunk__11534 = G__11542;
count__11535 = G__11543;
i__11536 = G__11544;
continue;
}
} else
{var block = cljs.core.first.call(null,seq__11533__$1);tetris.core.draw_block.call(null,ctx,offset,block);
{
var G__11545 = cljs.core.next.call(null,seq__11533__$1);
var G__11546 = null;
var G__11547 = 0;
var G__11548 = 0;
seq__11533 = G__11545;
chunk__11534 = G__11546;
count__11535 = G__11547;
i__11536 = G__11548;
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
tetris.core.render = (function render(p__11549){var map__11551 = p__11549;var map__11551__$1 = ((cljs.core.seq_QMARK_.call(null,map__11551))?cljs.core.apply.call(null,cljs.core.hash_map,map__11551):map__11551);var t = cljs.core.get.call(null,map__11551__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var tn = cljs.core.get.call(null,map__11551__$1,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183));var rows = cljs.core.get.call(null,map__11551__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var score = cljs.core.get.call(null,map__11551__$1,new cljs.core.Keyword(null,"score","score",1123168772));var level = cljs.core.get.call(null,map__11551__$1,new cljs.core.Keyword(null,"level","level",1116770038));(tetris.core.score_text["innerText"] = score);
(tetris.core.level_text["innerText"] = level);
tetris.core.draw_background.call(null,tetris.core.screen_ctx,"#2a2f34");
tetris.core.draw_background.call(null,tetris.core.preview_ctx,"#3b4045");
if(cljs.core.truth_(t))
{tetris.core.draw_blocks.call(null,tetris.core.screen_ctx,tetris.core.rendering_offset,tetris.core.tetrimino__GT_blocks.call(null,t));
} else
{}
if(cljs.core.truth_(tn))
{tetris.core.draw_blocks.call(null,tetris.core.preview_ctx,tetris.core.tetrimino__GT_blocks.call(null,tn));
} else
{}
return tetris.core.draw_blocks.call(null,tetris.core.screen_ctx,tetris.core.rendering_offset,tetris.core.rows__GT_blocks.call(null,rows));
});
/**
* Starts the rendering loop using requestAnimationFrame callback.
*/
tetris.core.render_loop = (function render_loop(){tetris.core.render.call(null,cljs.core.deref.call(null,tetris.core.game_state));
return window.requestAnimationFrame(render_loop);
});
/**
* Puts everything together.
*/
tetris.core.run_game_cycle = (function run_game_cycle(p__11552){var map__11554 = p__11552;var map__11554__$1 = ((cljs.core.seq_QMARK_.call(null,map__11554))?cljs.core.apply.call(null,cljs.core.hash_map,map__11554):map__11554);var state = map__11554__$1;var tetrimino = cljs.core.get.call(null,map__11554__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var running_QMARK_ = cljs.core.get.call(null,map__11554__$1,new cljs.core.Keyword(null,"running?","running?",1843566034));if(cljs.core.truth_(running_QMARK_))
{return tetris.core.maybe_game_over.call(null,tetris.core.maybe_next_tetrimino.call(null,tetris.core.maybe_level_up.call(null,tetris.core.maybe_score.call(null,tetris.core.process_gravity.call(null,tetris.core.release_keyboard.call(null,tetris.core.process_keyboard.call(null,tetris.core.process_time.call(null,state))))))));
} else
{return state;
}
});
document.addEventListener("keydown",(function (p1__11555_SHARP_){return cljs.core.swap_BANG_.call(null,tetris.core.game_state,tetris.core.handle_key_press,p1__11555_SHARP_.keyCode);
}),false);
tetris.core.render_loop.call(null);
var c__6102__auto___11580 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___11580){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___11580){
return (function (state_11566){var state_val_11567 = (state_11566[1]);if((state_val_11567 === 4))
{var inst_11561 = (state_11566[2]);var inst_11556 = inst_11561;var state_11566__$1 = (function (){var statearr_11568 = state_11566;(statearr_11568[7] = inst_11556);
return statearr_11568;
})();var statearr_11569_11581 = state_11566__$1;(statearr_11569_11581[2] = null);
(statearr_11569_11581[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 3))
{var inst_11564 = (state_11566[2]);var state_11566__$1 = state_11566;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11566__$1,inst_11564);
} else
{if((state_val_11567 === 2))
{var inst_11558 = cljs.core.swap_BANG_.call(null,tetris.core.game_state,tetris.core.run_game_cycle);var inst_11559 = cljs.core.async.timeout.call(null,10);var state_11566__$1 = (function (){var statearr_11570 = state_11566;(statearr_11570[8] = inst_11558);
return statearr_11570;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11566__$1,4,inst_11559);
} else
{if((state_val_11567 === 1))
{var inst_11556 = null;var state_11566__$1 = (function (){var statearr_11571 = state_11566;(statearr_11571[7] = inst_11556);
return statearr_11571;
})();var statearr_11572_11582 = state_11566__$1;(statearr_11572_11582[2] = null);
(statearr_11572_11582[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__6102__auto___11580))
;return ((function (switch__6087__auto__,c__6102__auto___11580){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_11576 = [null,null,null,null,null,null,null,null,null];(statearr_11576[0] = state_machine__6088__auto__);
(statearr_11576[1] = 1);
return statearr_11576;
});
var state_machine__6088__auto____1 = (function (state_11566){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_11566);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e11577){if((e11577 instanceof Object))
{var ex__6091__auto__ = e11577;var statearr_11578_11583 = state_11566;(statearr_11578_11583[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11566);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11584 = state_11566;
state_11566 = G__11584;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_11566){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_11566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___11580))
})();var state__6104__auto__ = (function (){var statearr_11579 = f__6103__auto__.call(null);(statearr_11579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___11580);
return statearr_11579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___11580))
);

//# sourceMappingURL=core.js.map