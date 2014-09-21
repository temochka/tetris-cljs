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
tetris.core.field_bg_color = "#2a2f34";
tetris.core.rendering_offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-2], null);
tetris.core.spawn_point = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,0], null);
tetris.core.block_size = (tetris.core.screen_width / tetris.core.blocks_h);
tetris.core.block_border_size = 1;
tetris.core.score_multiplier = 100;
tetris.core.level_up_score = 400;
tetris.core.level_gravity_penalty = 30;
tetris.core.colors = new cljs.core.PersistentArrayMap(null, 8, ["c","#34aadc","b","#087eff","o","#ffa01b","y","#ffd015","l","#54da6b","m","#a081ee","r","#ff5349"," ",null], null);
tetris.core.controls = new cljs.core.PersistentArrayMap(null, 4, [37,new cljs.core.Keyword(null,"left","left",1017222009),39,new cljs.core.Keyword(null,"right","right",1122416014),40,new cljs.core.Keyword(null,"down","down",1016993812),38,new cljs.core.Keyword(null,"rotate","rotate",4383690957)], null);
tetris.core.directions = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0], null)], null);
tetris.core.point = (function point(x,y){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
tetris.core.block = (function block(point,color){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,color], null);
});
tetris.core.rotate_matrix = (function rotate_matrix(m){return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.reverse.call(null,m)));
});
tetris.core.ascii__GT_vector = (function ascii__GT_vector(ascii){return cljs.core.vec.call(null,cljs.core.replace.call(null,tetris.core.colors,ascii));
});
tetris.core.ascii_schema__GT_matrix = (function ascii_schema__GT_matrix(schema){return cljs.core.vec.call(null,cljs.core.map.call(null,tetris.core.ascii__GT_vector,schema));
});
tetris.core.matrix__GT_blocks = (function matrix__GT_blocks(m){return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__9323_SHARP_){return (cljs.core.last.call(null,p1__9323_SHARP_) == null);
}),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,(function (y,xs){return cljs.core.map_indexed.call(null,(function (x,color){return tetris.core.block.call(null,tetris.core.point.call(null,x,y),color);
}),xs);
}),m))));
});
tetris.core.tetrimino_type = (function tetrimino_type(ascii_schema){var m = tetris.core.ascii_schema__GT_matrix.call(null,ascii_schema);var ms = cljs.core.take.call(null,4,cljs.core.iterate.call(null,tetris.core.rotate_matrix,m));return cljs.core.vec.call(null,cljs.core.map.call(null,tetris.core.matrix__GT_blocks,ms));
});
tetris.core.tetrimino_types = cljs.core.vec.call(null,cljs.core.map.call(null,tetris.core.tetrimino_type,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["    ","cccc","    "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["   ","bbb","  b"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["   ","ooo","o  "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["    "," yy "," yy ","    "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["   "," ll","ll ","   "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["   ","mmm"," m ","   "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["   ","rr "," rr","   "], null)], null)));
tetris.core.translate_point = (function translate_point(point,dv){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,point,dv));
});
tetris.core.translate_block = (function translate_block(p__9324,dv){var vec__9326 = p__9324;var point = cljs.core.nth.call(null,vec__9326,0,null);var color = cljs.core.nth.call(null,vec__9326,1,null);return tetris.core.block.call(null,tetris.core.translate_point.call(null,point,dv),color);
});
tetris.core.translate_blocks = (function translate_blocks(blocks,dv){return cljs.core.map.call(null,(function (p1__9327_SHARP_){return tetris.core.translate_block.call(null,p1__9327_SHARP_,dv);
}),blocks);
});
tetris.core.tetrimino__GT_blocks = (function tetrimino__GT_blocks(p__9328){var map__9330 = p__9328;var map__9330__$1 = ((cljs.core.seq_QMARK_.call(null,map__9330))?cljs.core.apply.call(null,cljs.core.hash_map,map__9330):map__9330);var pos = cljs.core.get.call(null,map__9330__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));var type = cljs.core.get.call(null,map__9330__$1,new cljs.core.Keyword(null,"type","type",1017479852));var spin = cljs.core.get.call(null,map__9330__$1,new cljs.core.Keyword(null,"spin","spin",1017441204));return tetris.core.translate_blocks.call(null,cljs.core.nth.call(null,type,spin),pos);
});
tetris.core.rows__GT_blocks = (function rows__GT_blocks(rows){return cljs.core.mapcat.call(null,(function (p__9335){var vec__9336 = p__9335;var y = cljs.core.nth.call(null,vec__9336,0,null);var xs = cljs.core.nth.call(null,vec__9336,1,null);return cljs.core.map.call(null,((function (vec__9336,y,xs){
return (function (p__9337){var vec__9338 = p__9337;var x = cljs.core.nth.call(null,vec__9338,0,null);var color = cljs.core.nth.call(null,vec__9338,1,null);return tetris.core.block.call(null,tetris.core.point.call(null,x,y),color);
});})(vec__9336,y,xs))
,xs);
}),rows);
});
tetris.core.block__GT_point = (function block__GT_point(p__9339){var vec__9341 = p__9339;var point = cljs.core.nth.call(null,vec__9341,0,null);return point;
});
tetris.core.tetrimino__GT_points = (function tetrimino__GT_points(t){return cljs.core.map.call(null,tetris.core.tetrimino__GT_blocks.call(null,t),tetris.core.block__GT_point);
});
tetris.core.draw_block = (function draw_block(ctx,offset,p__9342){var vec__9346 = p__9342;var point = cljs.core.nth.call(null,vec__9346,0,null);var color = cljs.core.nth.call(null,vec__9346,1,null);var vec__9347 = tetris.core.translate_point.call(null,point,offset);var x = cljs.core.nth.call(null,vec__9347,0,null);var y = cljs.core.nth.call(null,vec__9347,1,null);var G__9348 = ctx;(G__9348["fillStyle"] = color);
G__9348.fillRect(((tetris.core.block_size * x) + tetris.core.block_border_size),((tetris.core.block_size * y) + tetris.core.block_border_size),(tetris.core.block_size - (2 * tetris.core.block_border_size)),(tetris.core.block_size - (2 * tetris.core.block_border_size)));
return G__9348;
});
tetris.core.tetrimino = (function tetrimino(pos,spin,type){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"spin","spin",1017441204),spin,new cljs.core.Keyword(null,"type","type",1017479852),type], null);
});
tetris.core.rotate_tetrimino = (function rotate_tetrimino(p__9349){var map__9351 = p__9349;var map__9351__$1 = ((cljs.core.seq_QMARK_.call(null,map__9351))?cljs.core.apply.call(null,cljs.core.hash_map,map__9351):map__9351);var t = map__9351__$1;var spin = cljs.core.get.call(null,map__9351__$1,new cljs.core.Keyword(null,"spin","spin",1017441204));return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"spin","spin",1017441204),cljs.core.rem.call(null,(spin + 1),4));
});
tetris.core.draw_blocks = (function() {
var draw_blocks = null;
var draw_blocks__2 = (function (ctx,blocks){return draw_blocks.call(null,ctx,tetris.core.point.call(null,0,0),blocks);
});
var draw_blocks__3 = (function (ctx,offset,blocks){var seq__9356 = cljs.core.seq.call(null,blocks);var chunk__9357 = null;var count__9358 = 0;var i__9359 = 0;while(true){
if((i__9359 < count__9358))
{var block = cljs.core._nth.call(null,chunk__9357,i__9359);tetris.core.draw_block.call(null,ctx,offset,block);
{
var G__9360 = seq__9356;
var G__9361 = chunk__9357;
var G__9362 = count__9358;
var G__9363 = (i__9359 + 1);
seq__9356 = G__9360;
chunk__9357 = G__9361;
count__9358 = G__9362;
i__9359 = G__9363;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9356);if(temp__4126__auto__)
{var seq__9356__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9356__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__9356__$1);{
var G__9364 = cljs.core.chunk_rest.call(null,seq__9356__$1);
var G__9365 = c__4229__auto__;
var G__9366 = cljs.core.count.call(null,c__4229__auto__);
var G__9367 = 0;
seq__9356 = G__9364;
chunk__9357 = G__9365;
count__9358 = G__9366;
i__9359 = G__9367;
continue;
}
} else
{var block = cljs.core.first.call(null,seq__9356__$1);tetris.core.draw_block.call(null,ctx,offset,block);
{
var G__9368 = cljs.core.next.call(null,seq__9356__$1);
var G__9369 = null;
var G__9370 = 0;
var G__9371 = 0;
seq__9356 = G__9368;
chunk__9357 = G__9369;
count__9358 = G__9370;
i__9359 = G__9371;
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
tetris.core.random_tetrimino = (function random_tetrimino(){return tetris.core.tetrimino.call(null,tetris.core.point.call(null,0,0),cljs.core.rand_nth.call(null,cljs.core.range.call(null,0,4)),cljs.core.rand_nth.call(null,tetris.core.tetrimino_types));
});
tetris.core.move_tetrimino = (function move_tetrimino(t,d){return cljs.core.update_in.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",1014015430)], null),tetris.core.translate_point,cljs.core.get.call(null,tetris.core.directions,d));
});
tetris.core.collisions_QMARK_ = (function collisions_QMARK_(p__9372){var map__9376 = p__9372;var map__9376__$1 = ((cljs.core.seq_QMARK_.call(null,map__9376))?cljs.core.apply.call(null,cljs.core.hash_map,map__9376):map__9376);var t = cljs.core.get.call(null,map__9376__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var rows = cljs.core.get.call(null,map__9376__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var points = cljs.core.map.call(null,tetris.core.block__GT_point,tetris.core.tetrimino__GT_blocks.call(null,t));return cljs.core.some.call(null,((function (points,map__9376,map__9376__$1,t,rows){
return (function (p__9377){var vec__9378 = p__9377;var x = cljs.core.nth.call(null,vec__9378,0,null);var y = cljs.core.nth.call(null,vec__9378,1,null);var or__3481__auto__ = (x < 0);if(or__3481__auto__)
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
});})(points,map__9376,map__9376__$1,t,rows))
,points);
});
tetris.core.freeze_block = (function freeze_block(rows,p__9379){var vec__9382 = p__9379;var vec__9383 = cljs.core.nth.call(null,vec__9382,0,null);var x = cljs.core.nth.call(null,vec__9383,0,null);var y = cljs.core.nth.call(null,vec__9383,1,null);var color = cljs.core.nth.call(null,vec__9382,1,null);return cljs.core.assoc_in.call(null,rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),color);
});
tetris.core.freeze = (function freeze(p__9384){var map__9386 = p__9384;var map__9386__$1 = ((cljs.core.seq_QMARK_.call(null,map__9386))?cljs.core.apply.call(null,cljs.core.hash_map,map__9386):map__9386);var state = map__9386__$1;var rows = cljs.core.get.call(null,map__9386__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var t = cljs.core.get.call(null,map__9386__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",1017410891)], null),cljs.core.partial.call(null,cljs.core.reduce,tetris.core.freeze_block),tetris.core.tetrimino__GT_blocks.call(null,t)),new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),null);
});
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
tetris.core.process_gravity = (function process_gravity(p__9387){var map__9389 = p__9387;var map__9389__$1 = ((cljs.core.seq_QMARK_.call(null,map__9389))?cljs.core.apply.call(null,cljs.core.hash_map,map__9389):map__9389);var state = map__9389__$1;var tetr = cljs.core.get.call(null,map__9389__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var t = cljs.core.get.call(null,map__9389__$1,new cljs.core.Keyword(null,"now","now",1014013512));var level = cljs.core.get.call(null,map__9389__$1,new cljs.core.Keyword(null,"level","level",1116770038));var i = cljs.core.get.call(null,map__9389__$1,new cljs.core.Keyword(null,"gravity-interval","gravity-interval",3481182422));var t0 = cljs.core.get.call(null,map__9389__$1,new cljs.core.Keyword(null,"last-gravity","last-gravity",626386313));if(cljs.core.truth_((function (){var and__3469__auto__ = tetr;if(cljs.core.truth_(and__3469__auto__))
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
tetris.core.process_time = (function process_time(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"now","now",1014013512),(new Date()).getTime());
});
tetris.core.draw_background = (function draw_background(ctx,color){var G__9391 = ctx;(G__9391["fillStyle"] = color);
G__9391.fillRect(0,0,tetris.core.screen_width,tetris.core.screen_height);
return G__9391;
});
tetris.core.next_tetrimino = (function next_tetrimino(p__9392){var map__9394 = p__9392;var map__9394__$1 = ((cljs.core.seq_QMARK_.call(null,map__9394))?cljs.core.apply.call(null,cljs.core.hash_map,map__9394):map__9394);var state = map__9394__$1;var t = cljs.core.get.call(null,map__9394__$1,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pos","pos",1014015430),tetris.core.spawn_point),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183),tetris.core.random_tetrimino.call(null));
});
tetris.core.maybe_next_tetrimino = (function maybe_next_tetrimino(p__9395){var map__9397 = p__9395;var map__9397__$1 = ((cljs.core.seq_QMARK_.call(null,map__9397))?cljs.core.apply.call(null,cljs.core.hash_map,map__9397):map__9397);var state = map__9397__$1;var tetr = cljs.core.get.call(null,map__9397__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));if(cljs.core.not.call(null,tetr))
{return tetris.core.maybe_rollback.call(null,tetris.core.next_tetrimino.call(null,state),state);
} else
{return state;
}
});
tetris.core.release_keyboard = (function release_keyboard(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pressed-key","pressed-key",3350581670),null);
});
tetris.core.collapse_rows = (function collapse_rows(p__9398){var map__9404 = p__9398;var map__9404__$1 = ((cljs.core.seq_QMARK_.call(null,map__9404))?cljs.core.apply.call(null,cljs.core.hash_map,map__9404):map__9404);var state = map__9404__$1;var rows = cljs.core.get.call(null,map__9404__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"rows","rows",1017410891),cljs.core.into.call(null,cljs.core.empty.call(null,rows),cljs.core.map_indexed.call(null,((function (map__9404,map__9404__$1,state,rows){
return (function (i,p__9405){var vec__9406 = p__9405;var _ = cljs.core.nth.call(null,vec__9406,0,null);var v = cljs.core.nth.call(null,vec__9406,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((tetris.core.blocks_v - i) - 1),v], null);
});})(map__9404,map__9404__$1,state,rows))
,cljs.core.reverse.call(null,cljs.core.remove.call(null,((function (map__9404,map__9404__$1,state,rows){
return (function (p__9407){var vec__9408 = p__9407;var _ = cljs.core.nth.call(null,vec__9408,0,null);var v = cljs.core.nth.call(null,vec__9408,1,null);return cljs.core._EQ_.call(null,tetris.core.blocks_h,cljs.core.count.call(null,v));
});})(map__9404,map__9404__$1,state,rows))
,rows)))));
});
tetris.core.score = (function score(p__9410){var map__9413 = p__9410;var map__9413__$1 = ((cljs.core.seq_QMARK_.call(null,map__9413))?cljs.core.apply.call(null,cljs.core.hash_map,map__9413):map__9413);var state = map__9413__$1;var old_rows = cljs.core.get.call(null,map__9413__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var map__9414 = tetris.core.collapse_rows.call(null,state);var map__9414__$1 = ((cljs.core.seq_QMARK_.call(null,map__9414))?cljs.core.apply.call(null,cljs.core.hash_map,map__9414):map__9414);var new_state = map__9414__$1;var new_rows = cljs.core.get.call(null,map__9414__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));return cljs.core.update_in.call(null,new_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",1123168772)], null),((function (map__9414,map__9414__$1,new_state,new_rows,map__9413,map__9413__$1,state,old_rows){
return (function (p1__9409_SHARP_){return (p1__9409_SHARP_ + (tetris.core.score_multiplier * (cljs.core.count.call(null,old_rows) - cljs.core.count.call(null,new_rows))));
});})(map__9414,map__9414__$1,new_state,new_rows,map__9413,map__9413__$1,state,old_rows))
);
});
tetris.core.maybe_score = (function maybe_score(p__9415){var map__9417 = p__9415;var map__9417__$1 = ((cljs.core.seq_QMARK_.call(null,map__9417))?cljs.core.apply.call(null,cljs.core.hash_map,map__9417):map__9417);var state = map__9417__$1;var t = cljs.core.get.call(null,map__9417__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));if(cljs.core.not.call(null,t))
{return tetris.core.score.call(null,state);
} else
{return state;
}
});
tetris.core.maybe_game_over = (function maybe_game_over(p__9418){var map__9420 = p__9418;var map__9420__$1 = ((cljs.core.seq_QMARK_.call(null,map__9420))?cljs.core.apply.call(null,cljs.core.hash_map,map__9420):map__9420);var state = map__9420__$1;var t = cljs.core.get.call(null,map__9420__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));if(cljs.core.not.call(null,t))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"running?","running?",1843566034),false);
} else
{return state;
}
});
tetris.core.maybe_level_up = (function maybe_level_up(p__9421){var map__9423 = p__9421;var map__9423__$1 = ((cljs.core.seq_QMARK_.call(null,map__9423))?cljs.core.apply.call(null,cljs.core.hash_map,map__9423):map__9423);var state = map__9423__$1;var score = cljs.core.get.call(null,map__9423__$1,new cljs.core.Keyword(null,"score","score",1123168772));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"level","level",1116770038),(((score / tetris.core.level_up_score) | 0) + 1));
});
tetris.core.process_keyboard = (function (){var method_table__4339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4340__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4341__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4342__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4343__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("process-keyboard",new cljs.core.Keyword(null,"pressed-key","pressed-key",3350581670),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4343__auto__,method_table__4339__auto__,prefer_table__4340__auto__,method_cache__4341__auto__,cached_hierarchy__4342__auto__));
})();
cljs.core._add_method.call(null,tetris.core.process_keyboard,new cljs.core.Keyword(null,"left","left",1017222009),(function (state){return tetris.core.maybe_rollback.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897)], null),tetris.core.move_tetrimino,new cljs.core.Keyword(null,"left","left",1017222009)),state);
}));
cljs.core._add_method.call(null,tetris.core.process_keyboard,new cljs.core.Keyword(null,"right","right",1122416014),(function (state){return tetris.core.maybe_rollback.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897)], null),tetris.core.move_tetrimino,new cljs.core.Keyword(null,"right","right",1122416014)),state);
}));
cljs.core._add_method.call(null,tetris.core.process_keyboard,new cljs.core.Keyword(null,"rotate","rotate",4383690957),(function (state){return tetris.core.maybe_rollback.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897)], null),tetris.core.rotate_tetrimino),state);
}));
cljs.core._add_method.call(null,tetris.core.process_keyboard,new cljs.core.Keyword(null,"down","down",1016993812),(function (state){return tetris.core.maybe_rollback.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897)], null),tetris.core.move_tetrimino,new cljs.core.Keyword(null,"down","down",1016993812)),state);
}));
cljs.core._add_method.call(null,tetris.core.process_keyboard,new cljs.core.Keyword(null,"default","default",2558708147),(function (state){return state;
}));
tetris.core.game_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"rows","rows",1017410891),cljs.core.sorted_map.call(null),new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),null,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183),tetris.core.random_tetrimino.call(null),new cljs.core.Keyword(null,"gravity-interval","gravity-interval",3481182422),500,new cljs.core.Keyword(null,"score","score",1123168772),0,new cljs.core.Keyword(null,"level","level",1116770038),1,new cljs.core.Keyword(null,"running?","running?",1843566034),true], null));
tetris.core.render = (function render(p__9424){var map__9426 = p__9424;var map__9426__$1 = ((cljs.core.seq_QMARK_.call(null,map__9426))?cljs.core.apply.call(null,cljs.core.hash_map,map__9426):map__9426);var t = cljs.core.get.call(null,map__9426__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var tn = cljs.core.get.call(null,map__9426__$1,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183));var rows = cljs.core.get.call(null,map__9426__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var score = cljs.core.get.call(null,map__9426__$1,new cljs.core.Keyword(null,"score","score",1123168772));var level = cljs.core.get.call(null,map__9426__$1,new cljs.core.Keyword(null,"level","level",1116770038));(tetris.core.score_text["innerText"] = score);
(tetris.core.level_text["innerText"] = level);
tetris.core.draw_background.call(null,tetris.core.screen_ctx,tetris.core.field_bg_color);
tetris.core.draw_background.call(null,tetris.core.preview_screen_ctx,"#3b4045");
if(cljs.core.truth_(t))
{tetris.core.draw_blocks.call(null,tetris.core.screen_ctx,tetris.core.rendering_offset,tetris.core.tetrimino__GT_blocks.call(null,t));
} else
{}
if(cljs.core.truth_(tn))
{tetris.core.draw_blocks.call(null,tetris.core.preview_screen_ctx,tetris.core.tetrimino__GT_blocks.call(null,tn));
} else
{}
return tetris.core.draw_blocks.call(null,tetris.core.screen_ctx,tetris.core.rendering_offset,tetris.core.rows__GT_blocks.call(null,rows));
});
tetris.core.render_loop = (function render_loop(){tetris.core.render.call(null,cljs.core.deref.call(null,tetris.core.game_state));
return window.requestAnimationFrame(render_loop);
});
tetris.core.handle_key_press = (function handle_key_press(state,key_code){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pressed-key","pressed-key",3350581670),cljs.core.get.call(null,tetris.core.controls,key_code));
});
tetris.core.run_game_cycle = (function run_game_cycle(p__9427){var map__9429 = p__9427;var map__9429__$1 = ((cljs.core.seq_QMARK_.call(null,map__9429))?cljs.core.apply.call(null,cljs.core.hash_map,map__9429):map__9429);var state = map__9429__$1;var tetrimino = cljs.core.get.call(null,map__9429__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var running_QMARK_ = cljs.core.get.call(null,map__9429__$1,new cljs.core.Keyword(null,"running?","running?",1843566034));if(cljs.core.truth_(running_QMARK_))
{return tetris.core.maybe_game_over.call(null,tetris.core.maybe_next_tetrimino.call(null,tetris.core.maybe_level_up.call(null,tetris.core.maybe_score.call(null,tetris.core.process_gravity.call(null,tetris.core.release_keyboard.call(null,tetris.core.process_keyboard.call(null,tetris.core.process_time.call(null,state))))))));
} else
{return state;
}
});
document.addEventListener("keydown",(function (p1__9430_SHARP_){return cljs.core.swap_BANG_.call(null,tetris.core.game_state,tetris.core.handle_key_press,p1__9430_SHARP_.keyCode);
}),false);
tetris.core.render_loop.call(null);
var c__6102__auto___9455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___9455){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___9455){
return (function (state_9441){var state_val_9442 = (state_9441[1]);if((state_val_9442 === 4))
{var inst_9436 = (state_9441[2]);var inst_9431 = inst_9436;var state_9441__$1 = (function (){var statearr_9443 = state_9441;(statearr_9443[7] = inst_9431);
return statearr_9443;
})();var statearr_9444_9456 = state_9441__$1;(statearr_9444_9456[2] = null);
(statearr_9444_9456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 3))
{var inst_9439 = (state_9441[2]);var state_9441__$1 = state_9441;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9441__$1,inst_9439);
} else
{if((state_val_9442 === 2))
{var inst_9433 = cljs.core.swap_BANG_.call(null,tetris.core.game_state,tetris.core.run_game_cycle);var inst_9434 = cljs.core.async.timeout.call(null,10);var state_9441__$1 = (function (){var statearr_9445 = state_9441;(statearr_9445[8] = inst_9433);
return statearr_9445;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9441__$1,4,inst_9434);
} else
{if((state_val_9442 === 1))
{var inst_9431 = null;var state_9441__$1 = (function (){var statearr_9446 = state_9441;(statearr_9446[7] = inst_9431);
return statearr_9446;
})();var statearr_9447_9457 = state_9441__$1;(statearr_9447_9457[2] = null);
(statearr_9447_9457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__6102__auto___9455))
;return ((function (switch__6087__auto__,c__6102__auto___9455){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_9451 = [null,null,null,null,null,null,null,null,null];(statearr_9451[0] = state_machine__6088__auto__);
(statearr_9451[1] = 1);
return statearr_9451;
});
var state_machine__6088__auto____1 = (function (state_9441){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_9441);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e9452){if((e9452 instanceof Object))
{var ex__6091__auto__ = e9452;var statearr_9453_9458 = state_9441;(statearr_9453_9458[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9441);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9459 = state_9441;
state_9441 = G__9459;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_9441){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_9441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___9455))
})();var state__6104__auto__ = (function (){var statearr_9454 = f__6103__auto__.call(null);(statearr_9454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___9455);
return statearr_9454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___9455))
);

//# sourceMappingURL=core.js.map