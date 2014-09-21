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
tetris.core.matrix__GT_blocks = (function matrix__GT_blocks(m){return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__10279_SHARP_){return (cljs.core.last.call(null,p1__10279_SHARP_) == null);
}),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,(function (y,xs){return cljs.core.map_indexed.call(null,(function (x,color){return tetris.core.block.call(null,tetris.core.point.call(null,x,y),color);
}),xs);
}),m))));
});
tetris.core.tetrimino_type = (function tetrimino_type(ascii_schema){var m = tetris.core.ascii_schema__GT_matrix.call(null,ascii_schema);var ms = cljs.core.take.call(null,4,cljs.core.iterate.call(null,tetris.core.rotate_matrix,m));return cljs.core.vec.call(null,cljs.core.map.call(null,tetris.core.matrix__GT_blocks,ms));
});
tetris.core.tetrimino_types = cljs.core.vec.call(null,cljs.core.map.call(null,tetris.core.tetrimino_type,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["    ","cccc","    ","    "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b  ","bbb","   "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["  o","ooo","   "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yy","yy"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ll","ll ","   "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" m ","mmm","   "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rr "," rr","   "], null)], null)));
tetris.core.translate_point = (function translate_point(point,dv){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,point,dv));
});
tetris.core.translate_block = (function translate_block(p__10280,dv){var vec__10282 = p__10280;var point = cljs.core.nth.call(null,vec__10282,0,null);var color = cljs.core.nth.call(null,vec__10282,1,null);return tetris.core.block.call(null,tetris.core.translate_point.call(null,point,dv),color);
});
tetris.core.translate_blocks = (function translate_blocks(blocks,dv){return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10283_SHARP_){return tetris.core.translate_block.call(null,p1__10283_SHARP_,dv);
}),blocks));
});
tetris.core.tetrimino__GT_blocks = (function tetrimino__GT_blocks(p__10284){var map__10286 = p__10284;var map__10286__$1 = ((cljs.core.seq_QMARK_.call(null,map__10286))?cljs.core.apply.call(null,cljs.core.hash_map,map__10286):map__10286);var pos = cljs.core.get.call(null,map__10286__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));var type = cljs.core.get.call(null,map__10286__$1,new cljs.core.Keyword(null,"type","type",1017479852));var spin = cljs.core.get.call(null,map__10286__$1,new cljs.core.Keyword(null,"spin","spin",1017441204));return tetris.core.translate_blocks.call(null,cljs.core.nth.call(null,type,spin),pos);
});
tetris.core.rows__GT_blocks = (function rows__GT_blocks(rows){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,(function (p__10291){var vec__10292 = p__10291;var y = cljs.core.nth.call(null,vec__10292,0,null);var xs = cljs.core.nth.call(null,vec__10292,1,null);return cljs.core.map.call(null,((function (vec__10292,y,xs){
return (function (p__10293){var vec__10294 = p__10293;var x = cljs.core.nth.call(null,vec__10294,0,null);var color = cljs.core.nth.call(null,vec__10294,1,null);return tetris.core.block.call(null,tetris.core.point.call(null,x,y),color);
});})(vec__10292,y,xs))
,xs);
}),rows));
});
tetris.core.block__GT_point = (function block__GT_point(block){return cljs.core.first.call(null,block);
});
tetris.core.tetrimino__GT_points = (function tetrimino__GT_points(t){return cljs.core.doall.call(null,cljs.core.map.call(null,tetris.core.tetrimino__GT_blocks.call(null,t),tetris.core.block__GT_point));
});
tetris.core.draw_block = (function draw_block(ctx,offset,p__10295){var vec__10299 = p__10295;var point = cljs.core.nth.call(null,vec__10299,0,null);var color = cljs.core.nth.call(null,vec__10299,1,null);var vec__10300 = tetris.core.translate_point.call(null,point,offset);var x = cljs.core.nth.call(null,vec__10300,0,null);var y = cljs.core.nth.call(null,vec__10300,1,null);var G__10301 = ctx;(G__10301["fillStyle"] = color);
G__10301.fillRect(((tetris.core.block_size * x) + tetris.core.block_border_size),((tetris.core.block_size * y) + tetris.core.block_border_size),(tetris.core.block_size - (2 * tetris.core.block_border_size)),(tetris.core.block_size - (2 * tetris.core.block_border_size)));
return G__10301;
});
tetris.core.tetrimino = (function tetrimino(pos,spin,type){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"spin","spin",1017441204),spin,new cljs.core.Keyword(null,"type","type",1017479852),type], null);
});
tetris.core.rotate_tetrimino = (function rotate_tetrimino(p__10302){var map__10304 = p__10302;var map__10304__$1 = ((cljs.core.seq_QMARK_.call(null,map__10304))?cljs.core.apply.call(null,cljs.core.hash_map,map__10304):map__10304);var t = map__10304__$1;var spin = cljs.core.get.call(null,map__10304__$1,new cljs.core.Keyword(null,"spin","spin",1017441204));return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"spin","spin",1017441204),cljs.core.rem.call(null,(spin + 1),4));
});
tetris.core.draw_blocks = (function() {
var draw_blocks = null;
var draw_blocks__2 = (function (ctx,blocks){return draw_blocks.call(null,ctx,tetris.core.point.call(null,0,0),blocks);
});
var draw_blocks__3 = (function (ctx,offset,blocks){var seq__10309 = cljs.core.seq.call(null,blocks);var chunk__10310 = null;var count__10311 = 0;var i__10312 = 0;while(true){
if((i__10312 < count__10311))
{var block = cljs.core._nth.call(null,chunk__10310,i__10312);tetris.core.draw_block.call(null,ctx,offset,block);
{
var G__10313 = seq__10309;
var G__10314 = chunk__10310;
var G__10315 = count__10311;
var G__10316 = (i__10312 + 1);
seq__10309 = G__10313;
chunk__10310 = G__10314;
count__10311 = G__10315;
i__10312 = G__10316;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10309);if(temp__4126__auto__)
{var seq__10309__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10309__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__10309__$1);{
var G__10317 = cljs.core.chunk_rest.call(null,seq__10309__$1);
var G__10318 = c__4229__auto__;
var G__10319 = cljs.core.count.call(null,c__4229__auto__);
var G__10320 = 0;
seq__10309 = G__10317;
chunk__10310 = G__10318;
count__10311 = G__10319;
i__10312 = G__10320;
continue;
}
} else
{var block = cljs.core.first.call(null,seq__10309__$1);tetris.core.draw_block.call(null,ctx,offset,block);
{
var G__10321 = cljs.core.next.call(null,seq__10309__$1);
var G__10322 = null;
var G__10323 = 0;
var G__10324 = 0;
seq__10309 = G__10321;
chunk__10310 = G__10322;
count__10311 = G__10323;
i__10312 = G__10324;
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
tetris.core.collisions_QMARK_ = (function collisions_QMARK_(p__10325){var map__10329 = p__10325;var map__10329__$1 = ((cljs.core.seq_QMARK_.call(null,map__10329))?cljs.core.apply.call(null,cljs.core.hash_map,map__10329):map__10329);var t = cljs.core.get.call(null,map__10329__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var rows = cljs.core.get.call(null,map__10329__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var points = cljs.core.map.call(null,tetris.core.block__GT_point,tetris.core.tetrimino__GT_blocks.call(null,t));return cljs.core.some.call(null,((function (points,map__10329,map__10329__$1,t,rows){
return (function (p__10330){var vec__10331 = p__10330;var x = cljs.core.nth.call(null,vec__10331,0,null);var y = cljs.core.nth.call(null,vec__10331,1,null);var or__3481__auto__ = (x < 0);if(or__3481__auto__)
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
});})(points,map__10329,map__10329__$1,t,rows))
,points);
});
tetris.core.freeze_block = (function freeze_block(rows,p__10332){var vec__10335 = p__10332;var vec__10336 = cljs.core.nth.call(null,vec__10335,0,null);var x = cljs.core.nth.call(null,vec__10336,0,null);var y = cljs.core.nth.call(null,vec__10336,1,null);var color = cljs.core.nth.call(null,vec__10335,1,null);return cljs.core.assoc_in.call(null,rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),color);
});
tetris.core.freeze = (function freeze(p__10337){var map__10339 = p__10337;var map__10339__$1 = ((cljs.core.seq_QMARK_.call(null,map__10339))?cljs.core.apply.call(null,cljs.core.hash_map,map__10339):map__10339);var state = map__10339__$1;var rows = cljs.core.get.call(null,map__10339__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var t = cljs.core.get.call(null,map__10339__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",1017410891)], null),cljs.core.partial.call(null,cljs.core.reduce,tetris.core.freeze_block),tetris.core.tetrimino__GT_blocks.call(null,t)),new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),null);
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
tetris.core.process_gravity = (function process_gravity(p__10340){var map__10342 = p__10340;var map__10342__$1 = ((cljs.core.seq_QMARK_.call(null,map__10342))?cljs.core.apply.call(null,cljs.core.hash_map,map__10342):map__10342);var state = map__10342__$1;var tetr = cljs.core.get.call(null,map__10342__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var t = cljs.core.get.call(null,map__10342__$1,new cljs.core.Keyword(null,"now","now",1014013512));var level = cljs.core.get.call(null,map__10342__$1,new cljs.core.Keyword(null,"level","level",1116770038));var i = cljs.core.get.call(null,map__10342__$1,new cljs.core.Keyword(null,"gravity-interval","gravity-interval",3481182422));var t0 = cljs.core.get.call(null,map__10342__$1,new cljs.core.Keyword(null,"last-gravity","last-gravity",626386313));if(cljs.core.truth_((function (){var and__3469__auto__ = tetr;if(cljs.core.truth_(and__3469__auto__))
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
tetris.core.draw_background = (function draw_background(ctx,color){var G__10344 = ctx;(G__10344["fillStyle"] = color);
G__10344.fillRect(0,0,tetris.core.screen_width,tetris.core.screen_height);
return G__10344;
});
tetris.core.next_tetrimino = (function next_tetrimino(p__10345){var map__10347 = p__10345;var map__10347__$1 = ((cljs.core.seq_QMARK_.call(null,map__10347))?cljs.core.apply.call(null,cljs.core.hash_map,map__10347):map__10347);var state = map__10347__$1;var t = cljs.core.get.call(null,map__10347__$1,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pos","pos",1014015430),tetris.core.spawn_point),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183),tetris.core.random_tetrimino.call(null));
});
tetris.core.maybe_next_tetrimino = (function maybe_next_tetrimino(p__10348){var map__10350 = p__10348;var map__10350__$1 = ((cljs.core.seq_QMARK_.call(null,map__10350))?cljs.core.apply.call(null,cljs.core.hash_map,map__10350):map__10350);var state = map__10350__$1;var tetr = cljs.core.get.call(null,map__10350__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));if(cljs.core.not.call(null,tetr))
{return tetris.core.maybe_rollback.call(null,tetris.core.next_tetrimino.call(null,state),state);
} else
{return state;
}
});
tetris.core.release_keyboard = (function release_keyboard(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pressed-key","pressed-key",3350581670),null);
});
tetris.core.collapse_rows = (function collapse_rows(p__10351){var map__10357 = p__10351;var map__10357__$1 = ((cljs.core.seq_QMARK_.call(null,map__10357))?cljs.core.apply.call(null,cljs.core.hash_map,map__10357):map__10357);var state = map__10357__$1;var rows = cljs.core.get.call(null,map__10357__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"rows","rows",1017410891),cljs.core.into.call(null,cljs.core.empty.call(null,rows),cljs.core.map_indexed.call(null,((function (map__10357,map__10357__$1,state,rows){
return (function (i,p__10358){var vec__10359 = p__10358;var _ = cljs.core.nth.call(null,vec__10359,0,null);var v = cljs.core.nth.call(null,vec__10359,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((tetris.core.blocks_v - i) - 1),v], null);
});})(map__10357,map__10357__$1,state,rows))
,cljs.core.reverse.call(null,cljs.core.remove.call(null,((function (map__10357,map__10357__$1,state,rows){
return (function (p__10360){var vec__10361 = p__10360;var _ = cljs.core.nth.call(null,vec__10361,0,null);var v = cljs.core.nth.call(null,vec__10361,1,null);return cljs.core._EQ_.call(null,tetris.core.blocks_h,cljs.core.count.call(null,v));
});})(map__10357,map__10357__$1,state,rows))
,rows)))));
});
tetris.core.score = (function score(p__10363){var map__10366 = p__10363;var map__10366__$1 = ((cljs.core.seq_QMARK_.call(null,map__10366))?cljs.core.apply.call(null,cljs.core.hash_map,map__10366):map__10366);var state = map__10366__$1;var old_rows = cljs.core.get.call(null,map__10366__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var map__10367 = tetris.core.collapse_rows.call(null,state);var map__10367__$1 = ((cljs.core.seq_QMARK_.call(null,map__10367))?cljs.core.apply.call(null,cljs.core.hash_map,map__10367):map__10367);var new_state = map__10367__$1;var new_rows = cljs.core.get.call(null,map__10367__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));return cljs.core.update_in.call(null,new_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",1123168772)], null),((function (map__10367,map__10367__$1,new_state,new_rows,map__10366,map__10366__$1,state,old_rows){
return (function (p1__10362_SHARP_){return (p1__10362_SHARP_ + (tetris.core.score_multiplier * (cljs.core.count.call(null,old_rows) - cljs.core.count.call(null,new_rows))));
});})(map__10367,map__10367__$1,new_state,new_rows,map__10366,map__10366__$1,state,old_rows))
);
});
tetris.core.maybe_score = (function maybe_score(p__10368){var map__10370 = p__10368;var map__10370__$1 = ((cljs.core.seq_QMARK_.call(null,map__10370))?cljs.core.apply.call(null,cljs.core.hash_map,map__10370):map__10370);var state = map__10370__$1;var t = cljs.core.get.call(null,map__10370__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));if(cljs.core.not.call(null,t))
{return tetris.core.score.call(null,state);
} else
{return state;
}
});
tetris.core.maybe_game_over = (function maybe_game_over(p__10371){var map__10373 = p__10371;var map__10373__$1 = ((cljs.core.seq_QMARK_.call(null,map__10373))?cljs.core.apply.call(null,cljs.core.hash_map,map__10373):map__10373);var state = map__10373__$1;var t = cljs.core.get.call(null,map__10373__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));if(cljs.core.not.call(null,t))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"running?","running?",1843566034),false);
} else
{return state;
}
});
tetris.core.maybe_level_up = (function maybe_level_up(p__10374){var map__10376 = p__10374;var map__10376__$1 = ((cljs.core.seq_QMARK_.call(null,map__10376))?cljs.core.apply.call(null,cljs.core.hash_map,map__10376):map__10376);var state = map__10376__$1;var score = cljs.core.get.call(null,map__10376__$1,new cljs.core.Keyword(null,"score","score",1123168772));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"level","level",1116770038),(((score / tetris.core.level_up_score) | 0) + 1));
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
tetris.core.render = (function render(p__10377){var map__10379 = p__10377;var map__10379__$1 = ((cljs.core.seq_QMARK_.call(null,map__10379))?cljs.core.apply.call(null,cljs.core.hash_map,map__10379):map__10379);var t = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var tn = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183));var rows = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var score = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword(null,"score","score",1123168772));var level = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword(null,"level","level",1116770038));(tetris.core.score_text["innerText"] = score);
(tetris.core.level_text["innerText"] = level);
tetris.core.draw_background.call(null,tetris.core.screen_ctx,"#2a2f34");
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
tetris.core.run_game_cycle = (function run_game_cycle(p__10380){var map__10382 = p__10380;var map__10382__$1 = ((cljs.core.seq_QMARK_.call(null,map__10382))?cljs.core.apply.call(null,cljs.core.hash_map,map__10382):map__10382);var state = map__10382__$1;var tetrimino = cljs.core.get.call(null,map__10382__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var running_QMARK_ = cljs.core.get.call(null,map__10382__$1,new cljs.core.Keyword(null,"running?","running?",1843566034));if(cljs.core.truth_(running_QMARK_))
{return tetris.core.maybe_game_over.call(null,tetris.core.maybe_next_tetrimino.call(null,tetris.core.maybe_level_up.call(null,tetris.core.maybe_score.call(null,tetris.core.process_gravity.call(null,tetris.core.release_keyboard.call(null,tetris.core.process_keyboard.call(null,tetris.core.process_time.call(null,state))))))));
} else
{return state;
}
});
document.addEventListener("keydown",(function (p1__10383_SHARP_){return cljs.core.swap_BANG_.call(null,tetris.core.game_state,tetris.core.handle_key_press,p1__10383_SHARP_.keyCode);
}),false);
tetris.core.render_loop.call(null);
var c__6102__auto___10408 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___10408){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___10408){
return (function (state_10394){var state_val_10395 = (state_10394[1]);if((state_val_10395 === 4))
{var inst_10389 = (state_10394[2]);var inst_10384 = inst_10389;var state_10394__$1 = (function (){var statearr_10396 = state_10394;(statearr_10396[7] = inst_10384);
return statearr_10396;
})();var statearr_10397_10409 = state_10394__$1;(statearr_10397_10409[2] = null);
(statearr_10397_10409[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10395 === 3))
{var inst_10392 = (state_10394[2]);var state_10394__$1 = state_10394;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10394__$1,inst_10392);
} else
{if((state_val_10395 === 2))
{var inst_10386 = cljs.core.swap_BANG_.call(null,tetris.core.game_state,tetris.core.run_game_cycle);var inst_10387 = cljs.core.async.timeout.call(null,10);var state_10394__$1 = (function (){var statearr_10398 = state_10394;(statearr_10398[8] = inst_10386);
return statearr_10398;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10394__$1,4,inst_10387);
} else
{if((state_val_10395 === 1))
{var inst_10384 = null;var state_10394__$1 = (function (){var statearr_10399 = state_10394;(statearr_10399[7] = inst_10384);
return statearr_10399;
})();var statearr_10400_10410 = state_10394__$1;(statearr_10400_10410[2] = null);
(statearr_10400_10410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__6102__auto___10408))
;return ((function (switch__6087__auto__,c__6102__auto___10408){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_10404 = [null,null,null,null,null,null,null,null,null];(statearr_10404[0] = state_machine__6088__auto__);
(statearr_10404[1] = 1);
return statearr_10404;
});
var state_machine__6088__auto____1 = (function (state_10394){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_10394);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e10405){if((e10405 instanceof Object))
{var ex__6091__auto__ = e10405;var statearr_10406_10411 = state_10394;(statearr_10406_10411[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10394);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10405;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10412 = state_10394;
state_10394 = G__10412;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_10394){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_10394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___10408))
})();var state__6104__auto__ = (function (){var statearr_10407 = f__6103__auto__.call(null);(statearr_10407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___10408);
return statearr_10407;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___10408))
);

//# sourceMappingURL=core.js.map