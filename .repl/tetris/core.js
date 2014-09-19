// Compiled by ClojureScript 0.0-2202
goog.provide('tetris.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
tetris.core.canvas_dom = document.getElementById("screen");
tetris.core.render_ctx = tetris.core.canvas_dom.getContext("2d");
tetris.core.screen_width = 200;
tetris.core.screen_height = 440;
tetris.core.blocks_h = 10;
tetris.core.blocks_v = 22;
tetris.core.block_size = (tetris.core.screen_width / tetris.core.blocks_h);
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
tetris.core.matrix__GT_blocks = (function matrix__GT_blocks(m){return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__11806_SHARP_){return (cljs.core.last.call(null,p1__11806_SHARP_) == null);
}),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,(function (y,xs){return cljs.core.map_indexed.call(null,(function (x,color){return tetris.core.block.call(null,tetris.core.point.call(null,x,y),color);
}),xs);
}),m))));
});
tetris.core.tetrimino_type = (function tetrimino_type(ascii_schema){var m = tetris.core.ascii_schema__GT_matrix.call(null,ascii_schema);var ms = cljs.core.take.call(null,4,cljs.core.iterate.call(null,tetris.core.rotate_matrix,m));return cljs.core.vec.call(null,cljs.core.map.call(null,tetris.core.matrix__GT_blocks,ms));
});
tetris.core.tetrimino_types = cljs.core.vec.call(null,cljs.core.map.call(null,tetris.core.tetrimino_type,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cccc"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bbb","  b"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ooo","o  "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yy","yy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ll","ll "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mmm"," m "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rr "," rr"], null)], null)));
tetris.core.local__GT_world = (function local__GT_world(local,world){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,local,world));
});
tetris.core.translate_block = (function translate_block(p__11807,world){var vec__11809 = p__11807;var point = cljs.core.nth.call(null,vec__11809,0,null);var color = cljs.core.nth.call(null,vec__11809,1,null);return tetris.core.block.call(null,tetris.core.local__GT_world.call(null,point,world),color);
});
tetris.core.translate_blocks = (function translate_blocks(blocks,pos){return cljs.core.map.call(null,(function (p1__11810_SHARP_){return tetris.core.translate_block.call(null,p1__11810_SHARP_,pos);
}),blocks);
});
tetris.core.tetrimino__GT_blocks = (function tetrimino__GT_blocks(p__11811){var map__11813 = p__11811;var map__11813__$1 = ((cljs.core.seq_QMARK_.call(null,map__11813))?cljs.core.apply.call(null,cljs.core.hash_map,map__11813):map__11813);var pos = cljs.core.get.call(null,map__11813__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));var type = cljs.core.get.call(null,map__11813__$1,new cljs.core.Keyword(null,"type","type",1017479852));var spin = cljs.core.get.call(null,map__11813__$1,new cljs.core.Keyword(null,"spin","spin",1017441204));return tetris.core.translate_blocks.call(null,cljs.core.nth.call(null,type,spin),pos);
});
tetris.core.rows__GT_blocks = (function rows__GT_blocks(rows){return cljs.core.mapcat.call(null,(function (p__11818){var vec__11819 = p__11818;var y = cljs.core.nth.call(null,vec__11819,0,null);var xs = cljs.core.nth.call(null,vec__11819,1,null);return cljs.core.map.call(null,((function (vec__11819,y,xs){
return (function (p__11820){var vec__11821 = p__11820;var x = cljs.core.nth.call(null,vec__11821,0,null);var color = cljs.core.nth.call(null,vec__11821,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),color], null);
});})(vec__11819,y,xs))
,xs);
}),rows);
});
tetris.core.block__GT_point = cljs.core.first;
tetris.core.tetrimino__GT_points = (function tetrimino__GT_points(t){return cljs.core.map.call(null,tetris.core.tetrimino__GT_blocks.call(null,t),tetris.core.block__GT_point);
});
tetris.core.draw_block = (function draw_block(ctx,p__11822){var vec__11826 = p__11822;var vec__11827 = cljs.core.nth.call(null,vec__11826,0,null);var x = cljs.core.nth.call(null,vec__11827,0,null);var y = cljs.core.nth.call(null,vec__11827,1,null);var color = cljs.core.nth.call(null,vec__11826,1,null);var G__11828 = ctx;(G__11828["fillStyle"] = color);
G__11828.fillRect((tetris.core.block_size * x),(tetris.core.block_size * y),tetris.core.block_size,tetris.core.block_size);
return G__11828;
});
tetris.core.tetrimino = (function tetrimino(pos,spin,type){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"spin","spin",1017441204),spin,new cljs.core.Keyword(null,"type","type",1017479852),type], null);
});
tetris.core.rotate_tetrimino = (function rotate_tetrimino(p__11829){var map__11831 = p__11829;var map__11831__$1 = ((cljs.core.seq_QMARK_.call(null,map__11831))?cljs.core.apply.call(null,cljs.core.hash_map,map__11831):map__11831);var t = map__11831__$1;var spin = cljs.core.get.call(null,map__11831__$1,new cljs.core.Keyword(null,"spin","spin",1017441204));return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"spin","spin",1017441204),cljs.core.rem.call(null,(spin + 1),4));
});
tetris.core.draw_blocks = (function draw_blocks(ctx,blocks){return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__11832_SHARP_){return tetris.core.draw_block.call(null,ctx,p1__11832_SHARP_);
}),blocks));
});
tetris.core.random_tetrimino = (function random_tetrimino(){return tetris.core.tetrimino.call(null,null,cljs.core.rand_nth.call(null,cljs.core.range.call(null,0,4)),cljs.core.rand_nth.call(null,tetris.core.tetrimino_types));
});
tetris.core.move_tetrimino = (function move_tetrimino(p__11833,d){var map__11835 = p__11833;var map__11835__$1 = ((cljs.core.seq_QMARK_.call(null,map__11835))?cljs.core.apply.call(null,cljs.core.hash_map,map__11835):map__11835);var t = map__11835__$1;var pos = cljs.core.get.call(null,map__11835__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));var dv = cljs.core.get.call(null,tetris.core.directions,d);return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pos","pos",1014015430),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,dv,pos)));
});
tetris.core.collisions_QMARK_ = (function collisions_QMARK_(p__11836){var map__11844 = p__11836;var map__11844__$1 = ((cljs.core.seq_QMARK_.call(null,map__11844))?cljs.core.apply.call(null,cljs.core.hash_map,map__11844):map__11844);var t = cljs.core.get.call(null,map__11844__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var rows = cljs.core.get.call(null,map__11844__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var points = cljs.core.map.call(null,tetris.core.block__GT_point,tetris.core.tetrimino__GT_blocks.call(null,t));var or__6204__auto__ = cljs.core.some.call(null,((function (points,map__11844,map__11844__$1,t,rows){
return (function (p__11847){var vec__11848 = p__11847;var x = cljs.core.nth.call(null,vec__11848,0,null);var y = cljs.core.nth.call(null,vec__11848,1,null);return cljs.core.get_in.call(null,rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
});})(points,map__11844,map__11844__$1,t,rows))
,points);if(cljs.core.truth_(or__6204__auto__))
{return or__6204__auto__;
} else
{return cljs.core.some.call(null,((function (or__6204__auto__,points,map__11844,map__11844__$1,t,rows){
return (function (p__11849){var vec__11850 = p__11849;var x = cljs.core.nth.call(null,vec__11850,0,null);var y = cljs.core.nth.call(null,vec__11850,1,null);return ((x < 0)) || ((x >= tetris.core.blocks_h)) || ((y < 0)) || ((y >= tetris.core.blocks_v));
});})(or__6204__auto__,points,map__11844,map__11844__$1,t,rows))
,points);
}
});
tetris.core.process_gravity = (function process_gravity(p__11851){var map__11853 = p__11851;var map__11853__$1 = ((cljs.core.seq_QMARK_.call(null,map__11853))?cljs.core.apply.call(null,cljs.core.hash_map,map__11853):map__11853);var state = map__11853__$1;var tetr = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var t = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"now","now",1014013512));var i = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"gravity-interval","gravity-interval",3481182422));var t0 = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"last-gravity","last-gravity",626386313));if(((t - t0) > i))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),(function (){var and__6192__auto__ = tetr;if(cljs.core.truth_(and__6192__auto__))
{return tetris.core.move_tetrimino.call(null,tetr,new cljs.core.Keyword(null,"down","down",1016993812));
} else
{return and__6192__auto__;
}
})(),new cljs.core.Keyword(null,"last-gravity","last-gravity",626386313),t);
} else
{return state;
}
});
tetris.core.process_time = (function process_time(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"now","now",1014013512),(new Date()).getTime());
});
tetris.core.draw_background = (function draw_background(ctx,color){var G__11855 = ctx;(G__11855["fillStyle"] = color);
G__11855.fillRect(0,0,tetris.core.screen_width,tetris.core.screen_height);
return G__11855;
});
tetris.core.freeze_block = (function freeze_block(rows,p__11856){var vec__11859 = p__11856;var vec__11860 = cljs.core.nth.call(null,vec__11859,0,null);var x = cljs.core.nth.call(null,vec__11860,0,null);var y = cljs.core.nth.call(null,vec__11860,1,null);var color = cljs.core.nth.call(null,vec__11859,1,null);return cljs.core.assoc_in.call(null,rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),color);
});
tetris.core.freeze = (function freeze(p__11861){var map__11863 = p__11861;var map__11863__$1 = ((cljs.core.seq_QMARK_.call(null,map__11863))?cljs.core.apply.call(null,cljs.core.hash_map,map__11863):map__11863);var state = map__11863__$1;var rows = cljs.core.get.call(null,map__11863__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var t = cljs.core.get.call(null,map__11863__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",1017410891)], null),cljs.core.partial.call(null,cljs.core.reduce,tetris.core.freeze_block),tetris.core.tetrimino__GT_blocks.call(null,t)),new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),null);
});
tetris.core.maybe_freeze = (function maybe_freeze(p__11864,state){var map__11866 = p__11864;var map__11866__$1 = ((cljs.core.seq_QMARK_.call(null,map__11866))?cljs.core.apply.call(null,cljs.core.hash_map,map__11866):map__11866);var new_state = map__11866__$1;var tetr = cljs.core.get.call(null,map__11866__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var t = cljs.core.get.call(null,map__11866__$1,new cljs.core.Keyword(null,"now","now",1014013512));var t0 = cljs.core.get.call(null,map__11866__$1,new cljs.core.Keyword(null,"last-gravity","last-gravity",626386313));if(cljs.core.truth_((function (){var and__6192__auto__ = tetr;if(cljs.core.truth_(and__6192__auto__))
{var and__6192__auto____$1 = cljs.core._EQ_.call(null,t,t0);if(and__6192__auto____$1)
{return tetris.core.collisions_QMARK_.call(null,new_state);
} else
{return and__6192__auto____$1;
}
} else
{return and__6192__auto__;
}
})()))
{return tetris.core.freeze.call(null,state);
} else
{return new_state;
}
});
tetris.core.next_tetrimino = (function next_tetrimino(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),cljs.core.assoc.call(null,tetris.core.random_tetrimino.call(null),new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,0], null)));
});
tetris.core.maybe_next_tetrimino = (function maybe_next_tetrimino(p__11867){var map__11869 = p__11867;var map__11869__$1 = ((cljs.core.seq_QMARK_.call(null,map__11869))?cljs.core.apply.call(null,cljs.core.hash_map,map__11869):map__11869);var state = map__11869__$1;var tetr = cljs.core.get.call(null,map__11869__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));if(cljs.core.not.call(null,tetr))
{return tetris.core.next_tetrimino.call(null,state);
} else
{return state;
}
});
tetris.core.release_keyboard = (function release_keyboard(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pressed-key","pressed-key",3350581670),null);
});
tetris.core.maybe_rollback = (function maybe_rollback(new_state,state){if(cljs.core.truth_(tetris.core.collisions_QMARK_.call(null,new_state)))
{return state;
} else
{return new_state;
}
});
tetris.core.collapse_rows = (function collapse_rows(p__11870){var map__11876 = p__11870;var map__11876__$1 = ((cljs.core.seq_QMARK_.call(null,map__11876))?cljs.core.apply.call(null,cljs.core.hash_map,map__11876):map__11876);var state = map__11876__$1;var rows = cljs.core.get.call(null,map__11876__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"rows","rows",1017410891),cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.map_indexed.call(null,((function (map__11876,map__11876__$1,state,rows){
return (function (i,p__11877){var vec__11878 = p__11877;var _ = cljs.core.nth.call(null,vec__11878,0,null);var v = cljs.core.nth.call(null,vec__11878,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tetris.core.blocks_v - i),v], null);
});})(map__11876,map__11876__$1,state,rows))
,cljs.core.reverse.call(null,cljs.core.remove.call(null,((function (map__11876,map__11876__$1,state,rows){
return (function (p__11879){var vec__11880 = p__11879;var _ = cljs.core.nth.call(null,vec__11880,0,null);var v = cljs.core.nth.call(null,vec__11880,1,null);return cljs.core._EQ_.call(null,tetris.core.blocks_h,cljs.core.count.call(null,v));
});})(map__11876,map__11876__$1,state,rows))
,rows)))));
});
tetris.core.maybe_score = (function maybe_score(p__11881){var map__11883 = p__11881;var map__11883__$1 = ((cljs.core.seq_QMARK_.call(null,map__11883))?cljs.core.apply.call(null,cljs.core.hash_map,map__11883):map__11883);var state = map__11883__$1;var t = cljs.core.get.call(null,map__11883__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));if(cljs.core.not.call(null,t))
{return tetris.core.collapse_rows.call(null,state);
} else
{return state;
}
});
tetris.core.process_keyboard = (function (){var method_table__7062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7065__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7066__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("process-keyboard",new cljs.core.Keyword(null,"pressed-key","pressed-key",3350581670),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7066__auto__,method_table__7062__auto__,prefer_table__7063__auto__,method_cache__7064__auto__,cached_hierarchy__7065__auto__));
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
tetris.core.game_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",1017410891),cljs.core.sorted_map.call(null),new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897),null,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",1391175183),null,new cljs.core.Keyword(null,"gravity-interval","gravity-interval",3481182422),500], null));
tetris.core.render = (function render(p__11884){var map__11886 = p__11884;var map__11886__$1 = ((cljs.core.seq_QMARK_.call(null,map__11886))?cljs.core.apply.call(null,cljs.core.hash_map,map__11886):map__11886);var t = cljs.core.get.call(null,map__11886__$1,new cljs.core.Keyword(null,"tetrimino","tetrimino",673057897));var rows = cljs.core.get.call(null,map__11886__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));tetris.core.draw_background.call(null,tetris.core.render_ctx,"#000000");
if(cljs.core.truth_(t))
{tetris.core.draw_blocks.call(null,tetris.core.render_ctx,tetris.core.tetrimino__GT_blocks.call(null,t));
} else
{}
return tetris.core.draw_blocks.call(null,tetris.core.render_ctx,tetris.core.rows__GT_blocks.call(null,rows));
});
tetris.core.render_loop = (function render_loop(){tetris.core.render.call(null,cljs.core.deref.call(null,tetris.core.game_state));
return window.requestAnimationFrame(render_loop);
});
tetris.core.handle_key_press = (function handle_key_press(state,key_code){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pressed-key","pressed-key",3350581670),cljs.core.get.call(null,tetris.core.controls,key_code));
});
tetris.core.new_game_BANG_ = (function new_game_BANG_(){return cljs.core.swap_BANG_.call(null,tetris.core.game_state,(function (p1__11887_SHARP_){return tetris.core.next_tetrimino.call(null,p1__11887_SHARP_);
}));
});
document.addEventListener("keydown",(function (p1__11888_SHARP_){return cljs.core.swap_BANG_.call(null,tetris.core.game_state,tetris.core.handle_key_press,p1__11888_SHARP_.keyCode);
}),false);
tetris.core.render_loop.call(null);
var c__8952__auto___11915 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8952__auto___11915){
return (function (){var f__8953__auto__ = (function (){var switch__8888__auto__ = ((function (c__8952__auto___11915){
return (function (state_11901){var state_val_11902 = (state_11901[1]);if((state_val_11902 === 4))
{var inst_11896 = (state_11901[2]);var inst_11890 = inst_11896;var state_11901__$1 = (function (){var statearr_11903 = state_11901;(statearr_11903[7] = inst_11890);
return statearr_11903;
})();var statearr_11904_11916 = state_11901__$1;(statearr_11904_11916[2] = null);
(statearr_11904_11916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11902 === 3))
{var inst_11899 = (state_11901[2]);var state_11901__$1 = state_11901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11901__$1,inst_11899);
} else
{if((state_val_11902 === 2))
{var inst_11890 = (state_11901[7]);var inst_11892 = (function (){var _ = inst_11890;return ((function (_,inst_11890,state_val_11902,c__8952__auto___11915){
return (function (p1__11889_SHARP_){return tetris.core.release_keyboard.call(null,tetris.core.process_keyboard.call(null,tetris.core.maybe_next_tetrimino.call(null,tetris.core.maybe_score.call(null,tetris.core.maybe_freeze.call(null,tetris.core.process_gravity.call(null,tetris.core.process_time.call(null,p1__11889_SHARP_)),p1__11889_SHARP_)))));
});
;})(_,inst_11890,state_val_11902,c__8952__auto___11915))
})();var inst_11893 = cljs.core.swap_BANG_.call(null,tetris.core.game_state,inst_11892);var inst_11894 = cljs.core.async.timeout.call(null,10);var state_11901__$1 = (function (){var statearr_11905 = state_11901;(statearr_11905[8] = inst_11893);
return statearr_11905;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11901__$1,4,inst_11894);
} else
{if((state_val_11902 === 1))
{var inst_11890 = null;var state_11901__$1 = (function (){var statearr_11906 = state_11901;(statearr_11906[7] = inst_11890);
return statearr_11906;
})();var statearr_11907_11917 = state_11901__$1;(statearr_11907_11917[2] = null);
(statearr_11907_11917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__8952__auto___11915))
;return ((function (switch__8888__auto__,c__8952__auto___11915){
return (function() {
var state_machine__8889__auto__ = null;
var state_machine__8889__auto____0 = (function (){var statearr_11911 = [null,null,null,null,null,null,null,null,null];(statearr_11911[0] = state_machine__8889__auto__);
(statearr_11911[1] = 1);
return statearr_11911;
});
var state_machine__8889__auto____1 = (function (state_11901){while(true){
var ret_value__8890__auto__ = (function (){try{while(true){
var result__8891__auto__ = switch__8888__auto__.call(null,state_11901);if(cljs.core.keyword_identical_QMARK_.call(null,result__8891__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8891__auto__;
}
break;
}
}catch (e11912){if((e11912 instanceof Object))
{var ex__8892__auto__ = e11912;var statearr_11913_11918 = state_11901;(statearr_11913_11918[5] = ex__8892__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11901);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11912;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8890__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11919 = state_11901;
state_11901 = G__11919;
continue;
}
} else
{return ret_value__8890__auto__;
}
break;
}
});
state_machine__8889__auto__ = function(state_11901){
switch(arguments.length){
case 0:
return state_machine__8889__auto____0.call(this);
case 1:
return state_machine__8889__auto____1.call(this,state_11901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8889__auto____0;
state_machine__8889__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8889__auto____1;
return state_machine__8889__auto__;
})()
;})(switch__8888__auto__,c__8952__auto___11915))
})();var state__8954__auto__ = (function (){var statearr_11914 = f__8953__auto__.call(null);(statearr_11914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8952__auto___11915);
return statearr_11914;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8954__auto__);
});})(c__8952__auto___11915))
);
