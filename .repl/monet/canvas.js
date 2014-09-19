// Compiled by ClojureScript 0.0-2202
goog.provide('monet.canvas');
goog.require('cljs.core');
goog.require('monet.core');
goog.require('monet.core');
monet.canvas.get_context = (function get_context(canvas,type){return canvas.getContext(cljs.core.name.call(null,type));
});
/**
* Starts a new path by resetting the list of sub-paths.
* Call this method when you want to create a new path.
*/
monet.canvas.begin_path = (function begin_path(ctx){ctx.beginPath();
return ctx;
});
/**
* Tries to draw a straight line from the current point to the start.
* If the shape has already been closed or has only one point, this
* function does nothing.
*/
monet.canvas.close_path = (function close_path(ctx){ctx.closePath();
return ctx;
});
/**
* Fills the subpaths with the current fill style.
*/
monet.canvas.fill = (function fill(ctx){ctx.fill();
return ctx;
});
/**
* Strokes the subpaths with the current stroke style.
*/
monet.canvas.stroke = (function stroke(ctx){ctx.stroke();
return ctx;
});
/**
* Sets all pixels in the rectangle defined by starting point (x, y)
* and size (w, h) to transparent black.
*/
monet.canvas.clear_rect = (function clear_rect(ctx,p__12098){var map__12100 = p__12098;var map__12100__$1 = ((cljs.core.seq_QMARK_.call(null,map__12100))?cljs.core.apply.call(null,cljs.core.hash_map,map__12100):map__12100);var h = cljs.core.get.call(null,map__12100__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__12100__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__12100__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__12100__$1,new cljs.core.Keyword(null,"x","x",1013904362));ctx.clearRect(x,y,w,h);
return ctx;
});
/**
* DEPRECATED. Prefer fill-rect
*/
monet.canvas.rect = (function rect(ctx,p__12101){var map__12103 = p__12101;var map__12103__$1 = ((cljs.core.seq_QMARK_.call(null,map__12103))?cljs.core.apply.call(null,cljs.core.hash_map,map__12103):map__12103);var h = cljs.core.get.call(null,map__12103__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__12103__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__12103__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__12103__$1,new cljs.core.Keyword(null,"x","x",1013904362));monet.canvas.begin_path.call(null,ctx);
ctx.rect(x,y,w,h);
monet.canvas.close_path.call(null,ctx);
monet.canvas.fill.call(null,ctx);
return ctx;
});
/**
* Paints a rectangle which has a starting point at (x, y) and has a
* w width and an h height onto the canvas, using the current stroke
* style.
*/
monet.canvas.stroke_rect = (function stroke_rect(ctx,p__12104){var map__12106 = p__12104;var map__12106__$1 = ((cljs.core.seq_QMARK_.call(null,map__12106))?cljs.core.apply.call(null,cljs.core.hash_map,map__12106):map__12106);var h = cljs.core.get.call(null,map__12106__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__12106__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__12106__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__12106__$1,new cljs.core.Keyword(null,"x","x",1013904362));ctx.strokeRect(x,y,w,h);
return ctx;
});
/**
* Draws a filled rectangle at (x, y) position whose size is determined
* by width w and height h.
*/
monet.canvas.fill_rect = (function fill_rect(ctx,p__12107){var map__12109 = p__12107;var map__12109__$1 = ((cljs.core.seq_QMARK_.call(null,map__12109))?cljs.core.apply.call(null,cljs.core.hash_map,map__12109):map__12109);var h = cljs.core.get.call(null,map__12109__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__12109__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__12109__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__12109__$1,new cljs.core.Keyword(null,"x","x",1013904362));ctx.fillRect(x,y,w,h);
return ctx;
});
/**
* Draws a circle at position (x, y) with radius r
*/
monet.canvas.circle = (function circle(ctx,p__12110){var map__12112 = p__12110;var map__12112__$1 = ((cljs.core.seq_QMARK_.call(null,map__12112))?cljs.core.apply.call(null,cljs.core.hash_map,map__12112):map__12112);var r = cljs.core.get.call(null,map__12112__$1,new cljs.core.Keyword(null,"r","r",1013904356));var y = cljs.core.get.call(null,map__12112__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__12112__$1,new cljs.core.Keyword(null,"x","x",1013904362));monet.canvas.begin_path.call(null,ctx);
ctx.arc(x,y,r,0,(Math.PI * 2),true);
monet.canvas.close_path.call(null,ctx);
monet.canvas.fill.call(null,ctx);
return ctx;
});
/**
* Paints the given text at a starting point at (x, y), using the
* current stroke style.
*/
monet.canvas.text = (function text(ctx,p__12113){var map__12115 = p__12113;var map__12115__$1 = ((cljs.core.seq_QMARK_.call(null,map__12115))?cljs.core.apply.call(null,cljs.core.hash_map,map__12115):map__12115);var y = cljs.core.get.call(null,map__12115__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__12115__$1,new cljs.core.Keyword(null,"x","x",1013904362));var text__$1 = cljs.core.get.call(null,map__12115__$1,new cljs.core.Keyword(null,"text","text",1017460895));ctx.fillText(text__$1,x,y);
return ctx;
});
/**
* Sets the font. Default value 10px sans-serif.
*/
monet.canvas.font_style = (function font_style(ctx,font){ctx.font = font;
return ctx;
});
/**
* Color or style to use inside shapes. Default #000 (black).
*/
monet.canvas.fill_style = (function fill_style(ctx,color){ctx.fillStyle = cljs.core.name.call(null,color);
return ctx;
});
/**
* Color or style to use for the lines around shapes. Default #000 (black).
*/
monet.canvas.stroke_style = (function stroke_style(ctx,color){ctx.strokeStyle = cljs.core.name.call(null,color);
return ctx;
});
/**
* Sets the line width. Default 1.0
*/
monet.canvas.stroke_width = (function stroke_width(ctx,w){ctx.lineWidth = w;
return ctx;
});
/**
* Sets the line cap. Possible values (as string or keyword):
* butt (default), round, square
*/
monet.canvas.stroke_cap = (function stroke_cap(ctx,cap){ctx.lineCap = cljs.core.name.call(null,cap);
return ctx;
});
/**
* Moves the starting point of a new subpath to the (x, y) coordinates.
*/
monet.canvas.move_to = (function move_to(ctx,x,y){ctx.moveTo(x,y);
return ctx;
});
/**
* Connects the last point in the subpath to the x, y coordinates with a
* straight line.
*/
monet.canvas.line_to = (function line_to(ctx,x,y){ctx.lineTo(x,y);
return ctx;
});
/**
* Global Alpha value that is applied to shapes and images before they are
* composited onto the canvas. Default 1.0 (opaque).
*/
monet.canvas.alpha = (function alpha(ctx,a){ctx.globalAlpha = a;
return ctx;
});
/**
* With Global Alpha applied this sets how shapes and images are drawn
* onto the existing bitmap. Possible values (as string or keyword):
* source-atop, source-in, source-out, source-over (default),
* destination-atop, destination-in, destination-out, destination-over,
* lighter, darker, copy, xor
*/
monet.canvas.composition_operation = (function composition_operation(ctx,operation){ctx.globalCompositionOperation = cljs.core.name.call(null,operation);
return ctx;
});
/**
* Sets the text alignment attribute. Possible values (specified
* as a string or keyword): start (default), end, left, right or
* center.
*/
monet.canvas.text_align = (function text_align(ctx,alignment){ctx.textAlign = cljs.core.name.call(null,alignment);
return ctx;
});
/**
* Sets the text baseline attribute. Possible values (specified
* as a string or keyword): top, hanging, middle, alphabetic (default),
* ideographic, bottom
*/
monet.canvas.text_baseline = (function text_baseline(ctx,alignment){ctx.textBaseline = cljs.core.name.call(null,alignment);
return ctx;
});
/**
* Gets the pixel value as a hash map of RGBA values
*/
monet.canvas.get_pixel = (function get_pixel(ctx,x,y){var imgd = ctx.getImageData(x,y,1,1).data;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",1014017027),(imgd[0]),new cljs.core.Keyword(null,"green","green",1112523381),(imgd[1]),new cljs.core.Keyword(null,"blue","blue",1016931276),(imgd[2]),new cljs.core.Keyword(null,"alpha","alpha",1106814160),(imgd[3])], null);
});
/**
* Saves the current drawing style state using a stack so you can revert
* any change you make to it using restore.
*/
monet.canvas.save = (function save(ctx){ctx.save();
return ctx;
});
/**
* Restores the drawing style state to the last element on the 'state stack'
* saved by save.
*/
monet.canvas.restore = (function restore(ctx){ctx.restore();
return ctx;
});
/**
* Rotate the context
*/
monet.canvas.rotate = (function rotate(ctx,angle){ctx.rotate(angle);
return ctx;
});
/**
* Scales the context by a floating-point factor in each direction
*/
monet.canvas.scale = (function scale(ctx,x,y){ctx.scale(x,y);
return ctx;
});
/**
* Moves the origin point of the context to (x, y).
*/
monet.canvas.translate = (function translate(ctx,x,y){ctx.translate(x,y);
return ctx;
});
/**
* Multiplies a custom transformation matrix to the existing
* HTML5 canvas transformation according to the follow convention:
* 
* [ x']   [ m11 m21 dx ] [ x ]
* [ y'] = [ m12 m22 dy ] [ y ]
* [ 1 ]   [ 0   0   1  ] [ 1 ]
*/
monet.canvas.transform = (function() {
var transform = null;
var transform__2 = (function (ctx,p__12116){var map__12118 = p__12116;var map__12118__$1 = ((cljs.core.seq_QMARK_.call(null,map__12118))?cljs.core.apply.call(null,cljs.core.hash_map,map__12118):map__12118);var dy = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"dy","dy",1013907463));var dx = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"dx","dx",1013907462));var m22 = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"m22","m22",1014010591));var m21 = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"m21","m21",1014010590));var m12 = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"m12","m12",1014010560));var m11 = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"m11","m11",1014010559));ctx.transform(m11,m12,m21,m22,dx,dy);
return ctx;
});
var transform__7 = (function (ctx,m11,m12,m21,m22,dx,dy){ctx.transform(m11,m12,m21,m22,dx,dy);
return ctx;
});
transform = function(ctx,m11,m12,m21,m22,dx,dy){
switch(arguments.length){
case 2:
return transform__2.call(this,ctx,m11);
case 7:
return transform__7.call(this,ctx,m11,m12,m21,m22,dx,dy);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transform.cljs$core$IFn$_invoke$arity$2 = transform__2;
transform.cljs$core$IFn$_invoke$arity$7 = transform__7;
return transform;
})()
;
/**
* Draws the image onto the canvas at the given position.
* If a map of params is given, the number of entries is used to
* determine the underlying call to make.
*/
monet.canvas.draw_image = (function() {
var draw_image = null;
var draw_image__3 = (function (ctx,img,p__12119){var map__12124 = p__12119;var map__12124__$1 = ((cljs.core.seq_QMARK_.call(null,map__12124))?cljs.core.apply.call(null,cljs.core.hash_map,map__12124):map__12124);var params = map__12124__$1;var sh = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"sh","sh",1013907911));var sw = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"sw","sw",1013907926));var x = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"x","x",1013904362));var y = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"y","y",1013904363));var dh = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"dh","dh",1013907446));var dx = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"dx","dx",1013907462));var w = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"w","w",1013904361));var sy = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"sy","sy",1013907928));var dy = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"dy","dy",1013907463));var h = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"h","h",1013904346));var dw = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"dw","dw",1013907461));var sx = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"sx","sx",1013907927));var pred__12125_12128 = cljs.core._EQ_;var expr__12126_12129 = cljs.core.count.call(null,params);if(cljs.core.truth_(pred__12125_12128.call(null,2,expr__12126_12129)))
{ctx.drawImage(img,x,y);
} else
{if(cljs.core.truth_(pred__12125_12128.call(null,4,expr__12126_12129)))
{ctx.drawImage(img,x,y,w,h);
} else
{if(cljs.core.truth_(pred__12125_12128.call(null,8,expr__12126_12129)))
{ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12126_12129)].join('')));
}
}
}
return ctx;
});
var draw_image__4 = (function (ctx,img,x,y){ctx.drawImage(img,x,y);
return ctx;
});
draw_image = function(ctx,img,x,y){
switch(arguments.length){
case 3:
return draw_image__3.call(this,ctx,img,x);
case 4:
return draw_image__4.call(this,ctx,img,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_image.cljs$core$IFn$_invoke$arity$3 = draw_image__3;
draw_image.cljs$core$IFn$_invoke$arity$4 = draw_image__4;
return draw_image;
})()
;
monet.canvas.quadratic_curve_to = (function() {
var quadratic_curve_to = null;
var quadratic_curve_to__2 = (function (ctx,p__12130){var map__12132 = p__12130;var map__12132__$1 = ((cljs.core.seq_QMARK_.call(null,map__12132))?cljs.core.apply.call(null,cljs.core.hash_map,map__12132):map__12132);var y = cljs.core.get.call(null,map__12132__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__12132__$1,new cljs.core.Keyword(null,"x","x",1013904362));var cpy = cljs.core.get.call(null,map__12132__$1,new cljs.core.Keyword(null,"cpy","cpy",1014002974));var cpx = cljs.core.get.call(null,map__12132__$1,new cljs.core.Keyword(null,"cpx","cpx",1014002973));ctx.quadraticCurveTo(cpx,cpy,x,y);
return ctx;
});
var quadratic_curve_to__5 = (function (ctx,cpx,cpy,x,y){ctx.quadraticCurveTo(cpx,cpy,x,y);
return ctx;
});
quadratic_curve_to = function(ctx,cpx,cpy,x,y){
switch(arguments.length){
case 2:
return quadratic_curve_to__2.call(this,ctx,cpx);
case 5:
return quadratic_curve_to__5.call(this,ctx,cpx,cpy,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quadratic_curve_to.cljs$core$IFn$_invoke$arity$2 = quadratic_curve_to__2;
quadratic_curve_to.cljs$core$IFn$_invoke$arity$5 = quadratic_curve_to__5;
return quadratic_curve_to;
})()
;
monet.canvas.bezier_curve_to = (function() {
var bezier_curve_to = null;
var bezier_curve_to__2 = (function (ctx,p__12133){var map__12135 = p__12133;var map__12135__$1 = ((cljs.core.seq_QMARK_.call(null,map__12135))?cljs.core.apply.call(null,cljs.core.hash_map,map__12135):map__12135);var y = cljs.core.get.call(null,map__12135__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__12135__$1,new cljs.core.Keyword(null,"x","x",1013904362));var cp2y = cljs.core.get.call(null,map__12135__$1,new cljs.core.Keyword(null,"cp2y","cp2y",1016962854));var cp2x = cljs.core.get.call(null,map__12135__$1,new cljs.core.Keyword(null,"cp2x","cp2x",1016962853));var cp1y = cljs.core.get.call(null,map__12135__$1,new cljs.core.Keyword(null,"cp1y","cp1y",1016962823));var cp1x = cljs.core.get.call(null,map__12135__$1,new cljs.core.Keyword(null,"cp1x","cp1x",1016962822));ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
return ctx;
});
var bezier_curve_to__7 = (function (ctx,cp1x,cp1y,cp2x,cp2y,x,y){ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
return ctx;
});
bezier_curve_to = function(ctx,cp1x,cp1y,cp2x,cp2y,x,y){
switch(arguments.length){
case 2:
return bezier_curve_to__2.call(this,ctx,cp1x);
case 7:
return bezier_curve_to__7.call(this,ctx,cp1x,cp1y,cp2x,cp2y,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bezier_curve_to.cljs$core$IFn$_invoke$arity$2 = bezier_curve_to__2;
bezier_curve_to.cljs$core$IFn$_invoke$arity$7 = bezier_curve_to__7;
return bezier_curve_to;
})()
;
monet.canvas.rounded_rect = (function rounded_rect(ctx,p__12136){var map__12138 = p__12136;var map__12138__$1 = ((cljs.core.seq_QMARK_.call(null,map__12138))?cljs.core.apply.call(null,cljs.core.hash_map,map__12138):map__12138);var r = cljs.core.get.call(null,map__12138__$1,new cljs.core.Keyword(null,"r","r",1013904356));var h = cljs.core.get.call(null,map__12138__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__12138__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__12138__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__12138__$1,new cljs.core.Keyword(null,"x","x",1013904362));monet.canvas.stroke.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,ctx),x,(y + r)),x,((y + h) - r)),x,(y + h),(x + r),(y + h)),((x + w) - r),(y + h)),(x + w),(y + h),(x + w),((y + h) - r)),(x + w),(y + r)),(x + w),y,((x + w) - r),y),(x + r),y),x,y,x,(y + r)));
return ctx;
});
monet.canvas.add_entity = (function add_entity(mc,k,ent){return (new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k] = ent);
});
monet.canvas.remove_entity = (function remove_entity(mc,k){return delete new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k];
});
monet.canvas.get_entity = (function get_entity(mc,k){return new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k]));
});
/**
* @param {...*} var_args
*/
monet.canvas.update_entity = (function() { 
var update_entity__delegate = function (mc,k,func,extra){var cur = (new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k]);var res = cljs.core.apply.call(null,func,cur,extra);return (new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k] = res);
};
var update_entity = function (mc,k,func,var_args){
var extra = null;if (arguments.length > 3) {
  extra = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_entity__delegate.call(this,mc,k,func,extra);};
update_entity.cljs$lang$maxFixedArity = 3;
update_entity.cljs$lang$applyTo = (function (arglist__12139){
var mc = cljs.core.first(arglist__12139);
arglist__12139 = cljs.core.next(arglist__12139);
var k = cljs.core.first(arglist__12139);
arglist__12139 = cljs.core.next(arglist__12139);
var func = cljs.core.first(arglist__12139);
var extra = cljs.core.rest(arglist__12139);
return update_entity__delegate(mc,k,func,extra);
});
update_entity.cljs$core$IFn$_invoke$arity$variadic = update_entity__delegate;
return update_entity;
})()
;
monet.canvas.clear_BANG_ = (function clear_BANG_(mc){var ks = cljs.core.js_keys.call(null,new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc));var seq__12144 = cljs.core.seq.call(null,ks);var chunk__12145 = null;var count__12146 = 0;var i__12147 = 0;while(true){
if((i__12147 < count__12146))
{var k = cljs.core._nth.call(null,chunk__12145,i__12147);monet.canvas.remove_entity.call(null,mc,k);
{
var G__12148 = seq__12144;
var G__12149 = chunk__12145;
var G__12150 = count__12146;
var G__12151 = (i__12147 + 1);
seq__12144 = G__12148;
chunk__12145 = G__12149;
count__12146 = G__12150;
i__12147 = G__12151;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12144);if(temp__4126__auto__)
{var seq__12144__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12144__$1))
{var c__6952__auto__ = cljs.core.chunk_first.call(null,seq__12144__$1);{
var G__12152 = cljs.core.chunk_rest.call(null,seq__12144__$1);
var G__12153 = c__6952__auto__;
var G__12154 = cljs.core.count.call(null,c__6952__auto__);
var G__12155 = 0;
seq__12144 = G__12152;
chunk__12145 = G__12153;
count__12146 = G__12154;
i__12147 = G__12155;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__12144__$1);monet.canvas.remove_entity.call(null,mc,k);
{
var G__12156 = cljs.core.next.call(null,seq__12144__$1);
var G__12157 = null;
var G__12158 = 0;
var G__12159 = 0;
seq__12144 = G__12156;
chunk__12145 = G__12157;
count__12146 = G__12158;
i__12147 = G__12159;
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
monet.canvas.entity = (function entity(v,update,draw){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),v,new cljs.core.Keyword(null,"draw","draw",1016996022),draw,new cljs.core.Keyword(null,"update","update",4470025275),update], null);
});
monet.canvas.attr = (function attr(e,a){return e.getAttribute(a);
});
monet.canvas.draw_loop = (function draw_loop(p__12160){var map__12166 = p__12160;var map__12166__$1 = ((cljs.core.seq_QMARK_.call(null,map__12166))?cljs.core.apply.call(null,cljs.core.hash_map,map__12166):map__12166);var mc = map__12166__$1;var entities = cljs.core.get.call(null,map__12166__$1,new cljs.core.Keyword(null,"entities","entities",3206757171));var active = cljs.core.get.call(null,map__12166__$1,new cljs.core.Keyword(null,"active","active",3885920888));var ctx = cljs.core.get.call(null,map__12166__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));var updating_QMARK_ = cljs.core.get.call(null,map__12166__$1,new cljs.core.Keyword(null,"updating?","updating?",3359806763));var canvas = cljs.core.get.call(null,map__12166__$1,new cljs.core.Keyword(null,"canvas","canvas",3941165258));monet.canvas.clear_rect.call(null,ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"w","w",1013904361),monet.canvas.attr.call(null,canvas,"width"),new cljs.core.Keyword(null,"h","h",1013904346),monet.canvas.attr.call(null,canvas,"height")], null));
if(cljs.core.truth_(cljs.core.deref.call(null,active)))
{var ks_12171 = cljs.core.js_keys.call(null,entities);var cnt_12172 = ks_12171.length;var i_12173 = 0;while(true){
if((i_12173 < cnt_12172))
{var k_12174 = (ks_12171[i_12173]);var map__12167_12175 = (entities[k_12174]);var map__12167_12176__$1 = ((cljs.core.seq_QMARK_.call(null,map__12167_12175))?cljs.core.apply.call(null,cljs.core.hash_map,map__12167_12175):map__12167_12175);var ent_12177 = map__12167_12176__$1;var value_12178 = cljs.core.get.call(null,map__12167_12176__$1,new cljs.core.Keyword(null,"value","value",1125876963));var update_12179 = cljs.core.get.call(null,map__12167_12176__$1,new cljs.core.Keyword(null,"update","update",4470025275));var draw_12180 = cljs.core.get.call(null,map__12167_12176__$1,new cljs.core.Keyword(null,"draw","draw",1016996022));if(cljs.core.truth_((function (){var and__6192__auto__ = update_12179;if(cljs.core.truth_(and__6192__auto__))
{return cljs.core.deref.call(null,updating_QMARK_);
} else
{return and__6192__auto__;
}
})()))
{var updated_12181 = (function (){var or__6204__auto__ = (function (){try{return update_12179.call(null,value_12178);
}catch (e12169){if((e12169 instanceof Error))
{var e = e12169;console.log(e);
return value_12178;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12169;
} else
{return null;
}
}
}})();if(cljs.core.truth_(or__6204__auto__))
{return or__6204__auto__;
} else
{return value_12178;
}
})();if(cljs.core.truth_((entities[k_12174])))
{(entities[k_12174] = cljs.core.assoc.call(null,ent_12177,new cljs.core.Keyword(null,"value","value",1125876963),updated_12181));
} else
{}
} else
{}
if(cljs.core.truth_(draw_12180))
{try{draw_12180.call(null,ctx,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1((entities[k_12174])));
}catch (e12170){if((e12170 instanceof Error))
{var e_12182 = e12170;console.log(e_12182);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12170;
} else
{}
}
}} else
{}
{
var G__12183 = (i_12173 + 1);
i_12173 = G__12183;
continue;
}
} else
{}
break;
}
return monet.core.animation_frame.call(null,((function (map__12166,map__12166__$1,mc,entities,active,ctx,updating_QMARK_,canvas){
return (function (){return draw_loop.call(null,mc);
});})(map__12166,map__12166__$1,mc,entities,active,ctx,updating_QMARK_,canvas))
);
} else
{return null;
}
});
monet.canvas.monet_canvas = (function monet_canvas(elem,context_type){var ct = (function (){var or__6204__auto__ = context_type;if(cljs.core.truth_(or__6204__auto__))
{return or__6204__auto__;
} else
{return "2d";
}
})();var ctx = monet.canvas.get_context.call(null,elem,ct);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"canvas","canvas",3941165258),elem,new cljs.core.Keyword(null,"ctx","ctx",1014003097),ctx,new cljs.core.Keyword(null,"entities","entities",3206757171),(function (){var obj12187 = {};return obj12187;
})(),new cljs.core.Keyword(null,"updating?","updating?",3359806763),cljs.core.atom.call(null,true),new cljs.core.Keyword(null,"active","active",3885920888),cljs.core.atom.call(null,true)], null);
});
/**
* @param {...*} var_args
*/
monet.canvas.init = (function() { 
var init__delegate = function (canvas,p__12188){var vec__12190 = p__12188;var context_type = cljs.core.nth.call(null,vec__12190,0,null);var mc = monet.canvas.monet_canvas.call(null,canvas,context_type);monet.canvas.draw_loop.call(null,mc);
return mc;
};
var init = function (canvas,var_args){
var p__12188 = null;if (arguments.length > 1) {
  p__12188 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return init__delegate.call(this,canvas,p__12188);};
init.cljs$lang$maxFixedArity = 1;
init.cljs$lang$applyTo = (function (arglist__12191){
var canvas = cljs.core.first(arglist__12191);
var p__12188 = cljs.core.rest(arglist__12191);
return init__delegate(canvas,p__12188);
});
init.cljs$core$IFn$_invoke$arity$variadic = init__delegate;
return init;
})()
;
monet.canvas.stop = (function stop(mc){return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.stop_updating = (function stop_updating(mc){return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",3359806763).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.start_updating = (function start_updating(mc){return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",3359806763).cljs$core$IFn$_invoke$arity$1(mc),true);
});
monet.canvas.restart = (function restart(mc){cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(mc),true);
return monet.canvas.draw_loop.call(null,mc);
});
