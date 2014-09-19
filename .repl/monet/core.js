// Compiled by ClojureScript 0.0-2202
goog.provide('monet.core');
goog.require('cljs.core');
monet.core.animation_frame = (function (){var or__6204__auto__ = window.requestAnimationFrame;if(cljs.core.truth_(or__6204__auto__))
{return or__6204__auto__;
} else
{var or__6204__auto____$1 = window.webkitRequestAnimationFrame;if(cljs.core.truth_(or__6204__auto____$1))
{return or__6204__auto____$1;
} else
{var or__6204__auto____$2 = window.mozRequestAnimationFrame;if(cljs.core.truth_(or__6204__auto____$2))
{return or__6204__auto____$2;
} else
{var or__6204__auto____$3 = window.oRequestAnimationFrame;if(cljs.core.truth_(or__6204__auto____$3))
{return or__6204__auto____$3;
} else
{var or__6204__auto____$4 = window.msRequestAnimationFrame;if(cljs.core.truth_(or__6204__auto____$4))
{return or__6204__auto____$4;
} else
{return ((function (or__6204__auto____$4,or__6204__auto____$3,or__6204__auto____$2,or__6204__auto____$1,or__6204__auto__){
return (function (callback){return setTimeout(callback,17);
});
;})(or__6204__auto____$4,or__6204__auto____$3,or__6204__auto____$2,or__6204__auto____$1,or__6204__auto__))
}
}
}
}
}
})();
