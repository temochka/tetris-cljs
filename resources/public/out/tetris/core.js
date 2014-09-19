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
tetris.core.matrix__GT_blocks = (function matrix__GT_blocks(m){return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__14866_SHARP_){return (cljs.core.last.call(null,p1__14866_SHARP_) == null);
}),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,(function (y,xs){return cljs.core.map_indexed.call(null,(function (x,color){return tetris.core.block.call(null,tetris.core.point.call(null,x,y),color);
}),xs);
}),m))));
});
tetris.core.tetrimino_type = (function tetrimino_type(ascii_schema){var m = tetris.core.ascii_schema__GT_matrix.call(null,ascii_schema);var ms = cljs.core.take.call(null,4,cljs.core.iterate.call(null,tetris.core.rotate_matrix,m));return cljs.core.vec.call(null,cljs.core.map.call(null,tetris.core.matrix__GT_blocks,ms));
});
tetris.core.tetrimino_types = cljs.core.vec.call(null,cljs.core.map.call(null,tetris.core.tetrimino_type,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cccc"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bbb","  b"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ooo","o  "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yy","yy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ll","ll "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mmm"," m "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rr "," rr"], null)], null)));
tetris.core.local__GT_world = (function local__GT_world(local,world){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,local,world));
});
tetris.core.translate_block = (function translate_block(p__14867,world){var vec__14869 = p__14867;var point = cljs.core.nth.call(null,vec__14869,0,null);var color = cljs.core.nth.call(null,vec__14869,1,null);return tetris.core.block.call(null,tetris.core.local__GT_world.call(null,point,world),color);
});
tetris.core.translate_blocks = (function translate_blocks(blocks,pos){return cljs.core.map.call(null,(function (p1__14870_SHARP_){return tetris.core.translate_block.call(null,p1__14870_SHARP_,pos);
}),blocks);
});
tetris.core.tetrimino__GT_blocks = (function tetrimino__GT_blocks(p__14871){var map__14873 = p__14871;var map__14873__$1 = ((cljs.core.seq_QMARK_.call(null,map__14873))?cljs.core.apply.call(null,cljs.core.hash_map,map__14873):map__14873);var pos = cljs.core.get.call(null,map__14873__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));var type = cljs.core.get.call(null,map__14873__$1,new cljs.core.Keyword(null,"type","type",1017479852));var spin = cljs.core.get.call(null,map__14873__$1,new cljs.core.Keyword(null,"spin","spin",1017441204));return tetris.core.translate_blocks.call(null,cljs.core.nth.call(null,type,spin),pos);
});
tetris.core.rows__GT_blocks = (function rows__GT_blocks(rows){return cljs.core.mapcat.call(null,(function (p__14878){var vec__14879 = p__14878;var y = cljs.core.nth.call(null,vec__14879,0,null);var xs = cljs.core.nth.call(null,vec__14879,1,null);return cljs.core.map.call(null,((function (vec__14879,y,xs){
return (function (p__14880){var vec__14881 = p__14880;var x = cljs.core.nth.call(null,vec__14881,0,null);var color = cljs.core.nth.call(null,vec__14881,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),color], null);
});})(vec__14879,y,xs))
,xs);
}),rows);
});
tetris.core.block__GT_point = cljs.core.first;
tetris.core.tetrimino__GT_points = (function tetrimino__GT_points(t){return cljs.core.map.call(null,tetris.core.tetrimino__GT_blocks.call(null,t),tetris.core.block__GT_point);
});
tetris.core.draw_block = (function draw_block(ctx,p__14882){var vec__14886 = p__14882;var vec__14887 = cljs.core.nth.call(null,vec__14886,0,null);var x = cljs.core.nth.call(null,vec__14887,0,null);var y = cljs.core.nth.call(null,vec__14887,1,null);var color = cljs.core.nth.call(null,vec__14886,1,null);var G__14888 = ctx;(G__14888["fillStyle"] = color);
G__14888.fillRect(((tetris.core.block_size * x) + 1),((tetris.core.block_size * y) + 1),(tetris.core.block_size - 2),(tetris.core.block_size - 2));
return G__14888;
});
tetris.core.tetrimino = (function tetrimino(pos,spin,type){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"spin","spin",1017441204),spin,new cljs.core.Keyword(null,"type","type",1017479852),type], null);
});
tetris.core.rotate_tetrimino = (function rotate_tetrimino(p__14889){var map__14891 = p__14889;var map__14891__$1 = ((cljs.core.seq_QMARK_.call(null,map__14891))?cljs.core.apply.call(null,cljs.core.hash_map,map__14891):map__14891);var t = map__14891__$1;var spin = cljs.core.get.call(null,map__14891__$1,new cljs.core.Keyword(null,"spin","spin",1017441204));return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"spin","spin",1017441204),cljs.core.rem.call(null,(spin + 1),4));
});
tetris.core.draw_blocks = (function draw_blocks(ctx,blocks){return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__14892_SHARP_){return tetris.core.draw_block.call(null,ctx,p1__14892_SHARP_);
}),blocks));
});
tetris.core.random_tetrimino = (function random_tetrimino(){return tetris.core.tetrimino.call(null,tetris.core.point.call(null,0,0),cljs.core.rand_nth.call(null,cljs.core.range.call(null,0,4)),cljs.core.rand_nth.call(null,tetris.core.tetrimino_types));
});
tetris.core.move_tetrimino = (function move_tetrimino(p__14893,d){var map__14895 = p__14893;var map__14895__$1 = ((cljs.core.seq_QMARK_.call(null,map__14895))?cljs.core.apply.call(null,cljs.core.hash_map,map__14895):map__14895);var t = map__14895__$1;var pos = cljs.core.get.call(null,map__14895__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));var dv = cljs.core.get.call(null,tetris.core.directions,d);return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pos","pos",1014015430),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,dv,pos)));
});
tetris.core.collisions_QMARK_ = (function collisions_QMARK_(p__14896){var map__14900 = p__14896;var map__14900__$1 = ((cljs.core.seq_QMARK_.call(null,map__14900))?cljs.core.apply.call(null,cljs.core.hash_map,map__14900):map__14900);var t = cljs.core.get.call(null,map__14900__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var rows = cljs.core.get.call(null,map__14900__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var points = cljs.core.map.call(null,tetris.core.block__GT_point,tetris.core.tetrimino__GT_blocks.call(null,t));return cljs.core.some.call(null,((function (points,map__14900,map__14900__$1,t,rows){
return (function (p__14901){var vec__14902 = p__14901;var x = cljs.core.nth.call(null,vec__14902,0,null);var y = cljs.core.nth.call(null,vec__14902,1,null);var or__3481__auto__ = (x < 0);if(or__3481__auto__)
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
});})(points,map__14900,map__14900__$1,t,rows))
,points);
});
tetris.core.freeze_block = (function freeze_block(rows,p__14903){var vec__14906 = p__14903;var vec__14907 = cljs.core.nth.call(null,vec__14906,0,null);var x = cljs.core.nth.call(null,vec__14907,0,null);var y = cljs.core.nth.call(null,vec__14907,1,null);var color = cljs.core.nth.call(null,vec__14906,1,null);return cljs.core.assoc_in.call(null,rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),color);
});
tetris.core.freeze = (function freeze(p__14908){var map__14910 = p__14908;var map__14910__$1 = ((cljs.core.seq_QMARK_.call(null,map__14910))?cljs.core.apply.call(null,cljs.core.hash_map,map__14910):map__14910);var state = map__14910__$1;var rows = cljs.core.get.call(null,map__14910__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var t = cljs.core.get.call(null,map__14910__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",1017410891)], null),cljs.core.partial.call(null,cljs.core.reduce,tetris.core.freeze_block),tetris.core.tetrimino__GT_blocks.call(null,t)),new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),null);
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
tetris.core.process_gravity = (function process_gravity(p__14911){var map__14913 = p__14911;var map__14913__$1 = ((cljs.core.seq_QMARK_.call(null,map__14913))?cljs.core.apply.call(null,cljs.core.hash_map,map__14913):map__14913);var state = map__14913__$1;var tetr = cljs.core.get.call(null,map__14913__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var t = cljs.core.get.call(null,map__14913__$1,new cljs.core.Keyword(null,"now","now",1014013512));var level = cljs.core.get.call(null,map__14913__$1,new cljs.core.Keyword(null,"level","level",1116770038));var i = cljs.core.get.call(null,map__14913__$1,new cljs.core.Keyword(null,"gravity-interval","gravity-interval",3481182422));var t0 = cljs.core.get.call(null,map__14913__$1,new cljs.core.Keyword(null,"last-gravity","last-gravity",626386313));if(cljs.core.truth_((function (){var and__3469__auto__ = tetr;if(cljs.core.truth_(and__3469__auto__))
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
tetris.core.draw_background = (function draw_background(ctx,color){var G__14915 = ctx;(G__14915["fillStyle"] = color);
G__14915.fillRect(0,0,tetris.core.screen_width,tetris.core.screen_height);
return G__14915;
});
tetris.core.next_tetrimino = (function next_tetrimino(p__14916){var map__14918 = p__14916;var map__14918__$1 = ((cljs.core.seq_QMARK_.call(null,map__14918))?cljs.core.apply.call(null,cljs.core.hash_map,map__14918):map__14918);var state = map__14918__$1;var t = cljs.core.get.call(null,map__14918__$1,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,0], null)),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183),tetris.core.random_tetrimino.call(null));
});
tetris.core.maybe_next_tetrimino = (function maybe_next_tetrimino(p__14919){var map__14921 = p__14919;var map__14921__$1 = ((cljs.core.seq_QMARK_.call(null,map__14921))?cljs.core.apply.call(null,cljs.core.hash_map,map__14921):map__14921);var state = map__14921__$1;var tetr = cljs.core.get.call(null,map__14921__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));if(cljs.core.not.call(null,tetr))
{return tetris.core.maybe_rollback.call(null,tetris.core.next_tetrimino.call(null,state),state);
} else
{return state;
}
});
tetris.core.release_keyboard = (function release_keyboard(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pressed-key","pressed-key",3350581670),null);
});
tetris.core.collapse_rows = (function collapse_rows(p__14922){var map__14928 = p__14922;var map__14928__$1 = ((cljs.core.seq_QMARK_.call(null,map__14928))?cljs.core.apply.call(null,cljs.core.hash_map,map__14928):map__14928);var state = map__14928__$1;var rows = cljs.core.get.call(null,map__14928__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"rows","rows",1017410891),cljs.core.into.call(null,cljs.core.empty.call(null,rows),cljs.core.map_indexed.call(null,((function (map__14928,map__14928__$1,state,rows){
return (function (i,p__14929){var vec__14930 = p__14929;var _ = cljs.core.nth.call(null,vec__14930,0,null);var v = cljs.core.nth.call(null,vec__14930,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((tetris.core.blocks_v - i) - 1),v], null);
});})(map__14928,map__14928__$1,state,rows))
,cljs.core.reverse.call(null,cljs.core.remove.call(null,((function (map__14928,map__14928__$1,state,rows){
return (function (p__14931){var vec__14932 = p__14931;var _ = cljs.core.nth.call(null,vec__14932,0,null);var v = cljs.core.nth.call(null,vec__14932,1,null);return cljs.core._EQ_.call(null,tetris.core.blocks_h,cljs.core.count.call(null,v));
});})(map__14928,map__14928__$1,state,rows))
,rows)))));
});
tetris.core.score = (function score(p__14934){var map__14937 = p__14934;var map__14937__$1 = ((cljs.core.seq_QMARK_.call(null,map__14937))?cljs.core.apply.call(null,cljs.core.hash_map,map__14937):map__14937);var state = map__14937__$1;var old_rows = cljs.core.get.call(null,map__14937__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var map__14938 = tetris.core.collapse_rows.call(null,state);var map__14938__$1 = ((cljs.core.seq_QMARK_.call(null,map__14938))?cljs.core.apply.call(null,cljs.core.hash_map,map__14938):map__14938);var new_state = map__14938__$1;var new_rows = cljs.core.get.call(null,map__14938__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));return cljs.core.update_in.call(null,new_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",1123168772)], null),((function (map__14938,map__14938__$1,new_state,new_rows,map__14937,map__14937__$1,state,old_rows){
return (function (p1__14933_SHARP_){return (p1__14933_SHARP_ + (tetris.core.score_multiplier * (cljs.core.count.call(null,old_rows) - cljs.core.count.call(null,new_rows))));
});})(map__14938,map__14938__$1,new_state,new_rows,map__14937,map__14937__$1,state,old_rows))
);
});
tetris.core.maybe_score = (function maybe_score(p__14939){var map__14941 = p__14939;var map__14941__$1 = ((cljs.core.seq_QMARK_.call(null,map__14941))?cljs.core.apply.call(null,cljs.core.hash_map,map__14941):map__14941);var state = map__14941__$1;var t = cljs.core.get.call(null,map__14941__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));if(cljs.core.not.call(null,t))
{return tetris.core.score.call(null,state);
} else
{return state;
}
});
tetris.core.maybe_game_over = (function maybe_game_over(p__14942){var map__14944 = p__14942;var map__14944__$1 = ((cljs.core.seq_QMARK_.call(null,map__14944))?cljs.core.apply.call(null,cljs.core.hash_map,map__14944):map__14944);var state = map__14944__$1;var t = cljs.core.get.call(null,map__14944__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));if(cljs.core.not.call(null,t))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"running?","running?",1843566034),false);
} else
{return state;
}
});
tetris.core.maybe_level_up = (function maybe_level_up(p__14945){var map__14947 = p__14945;var map__14947__$1 = ((cljs.core.seq_QMARK_.call(null,map__14947))?cljs.core.apply.call(null,cljs.core.hash_map,map__14947):map__14947);var state = map__14947__$1;var score = cljs.core.get.call(null,map__14947__$1,new cljs.core.Keyword(null,"score","score",1123168772));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"level","level",1116770038),(((score / tetris.core.level_up_score) | 0) + 1));
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
tetris.core.render = (function render(p__14948){var map__14950 = p__14948;var map__14950__$1 = ((cljs.core.seq_QMARK_.call(null,map__14950))?cljs.core.apply.call(null,cljs.core.hash_map,map__14950):map__14950);var t = cljs.core.get.call(null,map__14950__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var tn = cljs.core.get.call(null,map__14950__$1,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183));var rows = cljs.core.get.call(null,map__14950__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var score = cljs.core.get.call(null,map__14950__$1,new cljs.core.Keyword(null,"score","score",1123168772));var level = cljs.core.get.call(null,map__14950__$1,new cljs.core.Keyword(null,"level","level",1116770038));(tetris.core.score_text["innerText"] = score);
(tetris.core.level_text["innerText"] = level);
tetris.core.draw_background.call(null,tetris.core.screen_ctx,"#000000");
tetris.core.draw_background.call(null,tetris.core.preview_screen_ctx,"#000000");
if(cljs.core.truth_(t))
{tetris.core.draw_blocks.call(null,tetris.core.screen_ctx,tetris.core.tetrimino__GT_blocks.call(null,t));
} else
{}
if(cljs.core.truth_(tn))
{tetris.core.draw_blocks.call(null,tetris.core.preview_screen_ctx,tetris.core.tetrimino__GT_blocks.call(null,tn));
} else
{}
return tetris.core.draw_blocks.call(null,tetris.core.screen_ctx,tetris.core.rows__GT_blocks.call(null,rows));
});
tetris.core.render_loop = (function render_loop(){tetris.core.render.call(null,cljs.core.deref.call(null,tetris.core.game_state));
return window.requestAnimationFrame(render_loop);
});
tetris.core.handle_key_press = (function handle_key_press(state,key_code){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pressed-key","pressed-key",3350581670),cljs.core.get.call(null,tetris.core.controls,key_code));
});
tetris.core.new_game_BANG_ = (function new_game_BANG_(){return cljs.core.swap_BANG_.call(null,tetris.core.game_state,(function (p1__14951_SHARP_){return tetris.core.next_tetrimino.call(null,p1__14951_SHARP_);
}));
});
tetris.core.run_game_cycle = (function run_game_cycle(p__14952){var map__14954 = p__14952;var map__14954__$1 = ((cljs.core.seq_QMARK_.call(null,map__14954))?cljs.core.apply.call(null,cljs.core.hash_map,map__14954):map__14954);var state = map__14954__$1;var tetrimino = cljs.core.get.call(null,map__14954__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var running_QMARK_ = cljs.core.get.call(null,map__14954__$1,new cljs.core.Keyword(null,"running?","running?",1843566034));if(cljs.core.truth_(running_QMARK_))
{return tetris.core.maybe_game_over.call(null,tetris.core.maybe_next_tetrimino.call(null,tetris.core.maybe_level_up.call(null,tetris.core.maybe_score.call(null,tetris.core.process_gravity.call(null,tetris.core.release_keyboard.call(null,tetris.core.process_keyboard.call(null,tetris.core.process_time.call(null,state))))))));
} else
{return state;
}
});
document.addEventListener("keydown",(function (p1__14955_SHARP_){return cljs.core.swap_BANG_.call(null,tetris.core.game_state,tetris.core.handle_key_press,p1__14955_SHARP_.keyCode);
}),false);
tetris.core.render_loop.call(null);
var c__6102__auto___14980 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6102__auto___14980){
return (function (){var f__6103__auto__ = (function (){var switch__6087__auto__ = ((function (c__6102__auto___14980){
return (function (state_14966){var state_val_14967 = (state_14966[1]);if((state_val_14967 === 4))
{var inst_14961 = (state_14966[2]);var inst_14956 = inst_14961;var state_14966__$1 = (function (){var statearr_14968 = state_14966;(statearr_14968[7] = inst_14956);
return statearr_14968;
})();var statearr_14969_14981 = state_14966__$1;(statearr_14969_14981[2] = null);
(statearr_14969_14981[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14967 === 3))
{var inst_14964 = (state_14966[2]);var state_14966__$1 = state_14966;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14966__$1,inst_14964);
} else
{if((state_val_14967 === 2))
{var inst_14958 = cljs.core.swap_BANG_.call(null,tetris.core.game_state,tetris.core.run_game_cycle);var inst_14959 = cljs.core.async.timeout.call(null,10);var state_14966__$1 = (function (){var statearr_14970 = state_14966;(statearr_14970[8] = inst_14958);
return statearr_14970;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14966__$1,4,inst_14959);
} else
{if((state_val_14967 === 1))
{var inst_14956 = null;var state_14966__$1 = (function (){var statearr_14971 = state_14966;(statearr_14971[7] = inst_14956);
return statearr_14971;
})();var statearr_14972_14982 = state_14966__$1;(statearr_14972_14982[2] = null);
(statearr_14972_14982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__6102__auto___14980))
;return ((function (switch__6087__auto__,c__6102__auto___14980){
return (function() {
var state_machine__6088__auto__ = null;
var state_machine__6088__auto____0 = (function (){var statearr_14976 = [null,null,null,null,null,null,null,null,null];(statearr_14976[0] = state_machine__6088__auto__);
(statearr_14976[1] = 1);
return statearr_14976;
});
var state_machine__6088__auto____1 = (function (state_14966){while(true){
var ret_value__6089__auto__ = (function (){try{while(true){
var result__6090__auto__ = switch__6087__auto__.call(null,state_14966);if(cljs.core.keyword_identical_QMARK_.call(null,result__6090__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6090__auto__;
}
break;
}
}catch (e14977){if((e14977 instanceof Object))
{var ex__6091__auto__ = e14977;var statearr_14978_14983 = state_14966;(statearr_14978_14983[5] = ex__6091__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14966);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14977;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6089__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14984 = state_14966;
state_14966 = G__14984;
continue;
}
} else
{return ret_value__6089__auto__;
}
break;
}
});
state_machine__6088__auto__ = function(state_14966){
switch(arguments.length){
case 0:
return state_machine__6088__auto____0.call(this);
case 1:
return state_machine__6088__auto____1.call(this,state_14966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6088__auto____0;
state_machine__6088__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6088__auto____1;
return state_machine__6088__auto__;
})()
;})(switch__6087__auto__,c__6102__auto___14980))
})();var state__6104__auto__ = (function (){var statearr_14979 = f__6103__auto__.call(null);(statearr_14979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6102__auto___14980);
return statearr_14979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6104__auto__);
});})(c__6102__auto___14980))
);

//# sourceMappingURL=core.js.map