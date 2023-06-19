"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[1722],{64587:function(t,e,n){n.d(e,{JB:function(){return g},RR:function(){return O},cv:function(){return C},oo:function(){return m},uY:function(){return S},x7:function(){return R}});var r=n(93433),i=n(44925),o=n(74165),u=n(4942),c=n(1413),a=n(15861),f=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],s=["mainAxis","crossAxis","limiter"];function l(t){return t.split("-")[1]}function d(t){return"y"===t?"height":"width"}function p(t){return t.split("-")[0]}function v(t){return["top","bottom"].includes(p(t))?"x":"y"}function h(t,e,n){var r,i=t.reference,o=t.floating,u=i.x+i.width/2-o.width/2,c=i.y+i.height/2-o.height/2,a=v(e),f=d(a),s=i[f]/2-o[f]/2,h="x"===a;switch(p(e)){case"top":r={x:u,y:i.y-o.height};break;case"bottom":r={x:u,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:c};break;case"left":r={x:i.x-o.width,y:c};break;default:r={x:i.x,y:i.y}}switch(l(e)){case"start":r[a]-=s*(n&&h?-1:1);break;case"end":r[a]+=s*(n&&h?-1:1)}return r}var m=function(){var t=(0,a.Z)((0,o.Z)().mark((function t(e,n,r){var i,a,f,s,l,d,p,v,m,x,g,b,y,w,k,Z,R,E,A,L,T,D,F,O,C,P;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.placement,a=void 0===i?"bottom":i,f=r.strategy,s=void 0===f?"absolute":f,l=r.middleware,d=void 0===l?[]:l,p=r.platform,v=d.filter(Boolean),t.next=10,null==p.isRTL?void 0:p.isRTL(n);case 10:return m=t.sent,t.next=13,p.getElementRects({reference:e,floating:n,strategy:s});case 13:x=t.sent,g=h(x,a,m),b=g.x,y=g.y,w=a,k={},Z=0,R=0;case 21:if(!(R<v.length)){t.next=56;break}return A=v[R],L=A.name,T=A.fn,t.next=27,T({x:b,y:y,initialPlacement:a,placement:w,strategy:s,middlewareData:k,rects:x,platform:p,elements:{reference:e,floating:n}});case 27:if(D=t.sent,F=D.x,O=D.y,C=D.data,P=D.reset,b=null!=F?F:b,y=null!=O?O:y,k=(0,c.Z)((0,c.Z)({},k),{},(0,u.Z)({},L,(0,c.Z)((0,c.Z)({},k[L]),C))),t.t0=P&&Z<=50,!t.t0){t.next=53;break}if(Z++,t.t1="object"==typeof P,!t.t1){t.next=52;break}if(P.placement&&(w=P.placement),t.t2=P.rects,!t.t2){t.next=51;break}if(!0!==P.rects){t.next=49;break}return t.next=46,p.getElementRects({reference:e,floating:n,strategy:s});case 46:t.t3=t.sent,t.next=50;break;case 49:t.t3=P.rects;case 50:x=t.t3;case 51:E=h(x,w,m),b=E.x,y=E.y;case 52:R=-1;case 53:R++,t.next=21;break;case 56:return t.abrupt("return",{x:b,y:y,placement:w,strategy:s,middlewareData:k});case 57:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();function x(t){return"number"!=typeof t?function(t){return(0,c.Z)({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function g(t){return(0,c.Z)((0,c.Z)({},t),{},{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function b(t,e){return y.apply(this,arguments)}function y(){return y=(0,a.Z)((0,o.Z)().mark((function t(e,n){var r,i,u,a,f,s,l,d,p,v,h,m,b,y,w,k,Z,R,E,A,L,T,D,F;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===n&&(n={}),i=e.x,u=e.y,a=e.platform,f=e.rects,s=e.elements,l=e.strategy,p=(d=n).boundary,v=void 0===p?"clippingAncestors":p,h=d.rootBoundary,m=void 0===h?"viewport":h,b=d.elementContext,y=void 0===b?"floating":b,w=d.altBoundary,k=void 0!==w&&w,Z=d.padding,R=x(void 0===Z?0:Z),E=s[k?"floating"===y?"reference":"floating":y],t.t0=g,t.t1=a,t.next=24,null==a.isElement?void 0:a.isElement(E);case 24:if(t.t3=r=t.sent,t.t2=null==t.t3,t.t2){t.next=28;break}t.t2=r;case 28:if(!t.t2){t.next=32;break}t.t4=E,t.next=38;break;case 32:if(t.t5=E.contextElement,t.t5){t.next=37;break}return t.next=36,null==a.getDocumentElement?void 0:a.getDocumentElement(s.floating);case 36:t.t5=t.sent;case 37:t.t4=t.t5;case 38:return t.t6=t.t4,t.t7=v,t.t8=m,t.t9=l,t.t10={element:t.t6,boundary:t.t7,rootBoundary:t.t8,strategy:t.t9},t.next=45,t.t1.getClippingRect.call(t.t1,t.t10);case 45:return t.t11=t.sent,A=(0,t.t0)(t.t11),L="floating"===y?(0,c.Z)((0,c.Z)({},f.floating),{},{x:i,y:u}):f.reference,t.next=50,null==a.getOffsetParent?void 0:a.getOffsetParent(s.floating);case 50:return T=t.sent,t.next=53,null==a.isElement?void 0:a.isElement(T);case 53:if(t.t13=t.sent,!t.t13){t.next=58;break}return t.next=57,null==a.getScale?void 0:a.getScale(T);case 57:t.t13=t.sent;case 58:if(t.t12=t.t13,t.t12){t.next=61;break}t.t12={x:1,y:1};case 61:if(D=t.t12,t.t14=g,!a.convertOffsetParentRelativeRectToViewportRelativeRect){t.next=69;break}return t.next=66,a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:L,offsetParent:T,strategy:l});case 66:t.t15=t.sent,t.next=70;break;case 69:t.t15=L;case 70:return t.t16=t.t15,F=(0,t.t14)(t.t16),t.abrupt("return",{top:(A.top-F.top+R.top)/D.y,bottom:(F.bottom-A.bottom+R.bottom)/D.y,left:(A.left-F.left+R.left)/D.x,right:(F.right-A.right+R.right)/D.x});case 73:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}var w=Math.min,k=Math.max;function Z(t,e,n){return k(t,w(e,n))}var R=function(t){return{name:"arrow",options:t,fn:function(e){return(0,a.Z)((0,o.Z)().mark((function n(){var r,i,c,a,f,s,p,h,m,g,b,y,w,k,R,E,A,L,T,D,F,O,C,P,S,H,W,B,M,V,j;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=(c=t||{}).element,f=c.padding,s=void 0===f?0:f,p=e.x,h=e.y,m=e.placement,g=e.rects,b=e.platform,y=e.elements,null!=a){n.next=3;break}return n.abrupt("return",{});case 3:return w=x(s),k={x:p,y:h},R=v(m),E=d(R),n.next=9,b.getDimensions(a);case 9:return A=n.sent,T=(L="y"===R)?"top":"left",D=L?"bottom":"right",F=L?"clientHeight":"clientWidth",O=g.reference[E]+g.reference[R]-k[R]-g.floating[E],C=k[R]-g.reference[R],n.next=18,null==b.getOffsetParent?void 0:b.getOffsetParent(a);case 18:if(P=n.sent,S=P?P[F]:0,n.t0=S,!n.t0){n.next=25;break}return n.next=24,null==b.isElement?void 0:b.isElement(P);case 24:n.t0=n.sent;case 25:if(n.t1=n.t0,n.t1){n.next=28;break}S=y.floating[F]||g.floating[E];case 28:return H=O/2-C/2,W=w[T],B=S-A[E]-w[D],M=S/2-A[E]/2+H,V=Z(W,M,B),j=null!=l(m)&&M!=V&&g.reference[E]/2-(M<W?w[T]:w[D])-A[E]/2<0,n.abrupt("return",(i={},(0,u.Z)(i,R,k[R]-(j?M<W?W-M:B-M:0)),(0,u.Z)(i,"data",(r={},(0,u.Z)(r,R,V),(0,u.Z)(r,"centerOffset",M-V),r)),i));case 30:case"end":return n.stop()}}),n)})))()}}},E=["top","right","bottom","left"],A=(E.reduce((function(t,e){return t.concat(e,e+"-start",e+"-end")}),[]),{left:"right",right:"left",bottom:"top",top:"bottom"});function L(t){return t.replace(/left|right|bottom|top/g,(function(t){return A[t]}))}function T(t,e,n){void 0===n&&(n=!1);var r=l(t),i=v(t),o=d(i),u="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(u=L(u)),{main:u,cross:L(u)}}var D={start:"end",end:"start"};function F(t){return t.replace(/start|end/g,(function(t){return D[t]}))}var O=function(t){return void 0===t&&(t={}),{name:"flip",options:t,fn:function(e){return(0,a.Z)((0,o.Z)().mark((function n(){var u,c,a,s,d,v,h,m,x,g,y,w,k,Z,R,E,A,D,O,C,P,S,H,W,B,M,V,j,q,z,U,K,N,Q,J,Y,$,G;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=e.placement,a=e.middlewareData,s=e.rects,d=e.initialPlacement,v=e.platform,h=e.elements,x=(m=t).mainAxis,g=void 0===x||x,y=m.crossAxis,w=void 0===y||y,k=m.fallbackPlacements,Z=m.fallbackStrategy,R=void 0===Z?"bestFit":Z,E=m.fallbackAxisSideDirection,A=void 0===E?"none":E,D=m.flipAlignment,O=void 0===D||D,C=(0,i.Z)(m,f),P=p(c),S=p(d)===d,n.next=23,null==v.isRTL?void 0:v.isRTL(h.floating);case 23:return H=n.sent,W=k||(S||!O?[L(d)]:function(t){var e=L(t);return[F(t),e,F(e)]}(d)),k||"none"===A||W.push.apply(W,(0,r.Z)(function(t,e,n,r){var i=l(t),o=function(t,e,n){var r=["left","right"],i=["right","left"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(p(t),"start"===n,r);return i&&(o=o.map((function(t){return t+"-"+i})),e&&(o=o.concat(o.map(F)))),o}(d,O,A,H))),B=[d].concat((0,r.Z)(W)),n.next=29,b(e,C);case 29:if(M=n.sent,V=[],j=(null==(u=a.flip)?void 0:u.overflows)||[],g&&V.push(M[P]),w&&(q=T(c,s,H),z=q.main,U=q.cross,V.push(M[z],M[U])),j=[].concat((0,r.Z)(j),[{placement:c,overflows:V}]),V.every((function(t){return t<=0}))){n.next=48;break}if(Q=((null==(K=a.flip)?void 0:K.index)||0)+1,!(J=B[Q])){n.next=37;break}return n.abrupt("return",{data:{index:Q,overflows:j},reset:{placement:J}});case 37:if(Y=null==(N=j.filter((function(t){return t.overflows[0]<=0})).sort((function(t,e){return t.overflows[1]-e.overflows[1]}))[0])?void 0:N.placement,Y){n.next=46;break}n.t0=R,n.next="bestFit"===n.t0?42:"initialPlacement"===n.t0?45:46;break;case 42:return G=null==($=j.map((function(t){return[t.placement,t.overflows.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0)]})).sort((function(t,e){return t[1]-e[1]}))[0])?void 0:$[0],G&&(Y=G),n.abrupt("break",46);case 45:Y=d;case 46:if(c===Y){n.next=48;break}return n.abrupt("return",{reset:{placement:Y}});case 48:return n.abrupt("return",{});case 49:case"end":return n.stop()}}),n)})))()}}};var C=function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn:function(e){return(0,a.Z)((0,o.Z)().mark((function n(){var r,i,u;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.x,i=e.y,n.next=4,function(){var t=(0,a.Z)((0,o.Z)().mark((function t(e,n){var r,i,u,a,f,s,d,h,m,x,g,b,y,w;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.placement,i=e.platform,u=e.elements,t.next=5,null==i.isRTL?void 0:i.isRTL(u.floating);case 5:return a=t.sent,f=p(r),s=l(r),d="x"===v(r),h=["left","top"].includes(f)?-1:1,m=a&&d?-1:1,x="function"==typeof n?n(e):n,g="number"==typeof x?{mainAxis:x,crossAxis:0,alignmentAxis:null}:(0,c.Z)({mainAxis:0,crossAxis:0,alignmentAxis:null},x),b=g.mainAxis,y=g.crossAxis,w=g.alignmentAxis,t.abrupt("return",(s&&"number"==typeof w&&(y="end"===s?-1*w:w),d?{x:y*m,y:b*h}:{x:b*h,y:y*m}));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()(e,t);case 4:return u=n.sent,n.abrupt("return",{x:r+u.x,y:i+u.y,data:u});case 6:case"end":return n.stop()}}),n)})))()}}};function P(t){return"x"===t?"y":"x"}var S=function(t){return void 0===t&&(t={}),{name:"shift",options:t,fn:function(e){return(0,a.Z)((0,o.Z)().mark((function n(){var r,a,f,l,d,h,m,x,g,y,w,k,R,E,A,L,T,D,F,O,C;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.x,f=e.y,l=e.placement,h=(d=t).mainAxis,m=void 0===h||h,x=d.crossAxis,g=void 0!==x&&x,y=d.limiter,w=void 0===y?{fn:function(t){return{x:t.x,y:t.y}}}:y,k=(0,i.Z)(d,s),R={x:a,y:f},n.next=14,b(e,k);case 14:return E=n.sent,A=v(p(l)),L=P(A),T=R[A],D=R[L],m&&(F="y"===A?"bottom":"right",T=Z(T+E["y"===A?"top":"left"],T,T-E[F])),g&&(O="y"===L?"bottom":"right",D=Z(D+E["y"===L?"top":"left"],D,D-E[O])),C=w.fn((0,c.Z)((0,c.Z)({},e),{},(r={},(0,u.Z)(r,A,T),(0,u.Z)(r,L,D),r))),n.abrupt("return",(0,c.Z)((0,c.Z)({},C),{},{data:{x:C.x-a,y:C.y-f}}));case 22:case"end":return n.stop()}}),n)})))()}}}},31877:function(t,e,n){n.d(e,{Me:function(){return z},oo:function(){return U}});var r,i=n(74165),o=n(15861),u=n(93433),c=n(1413),a=n(64587);function f(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function s(t){return f(t).getComputedStyle(t)}function l(t){return t instanceof f(t).Node}function d(t){return l(t)?(t.nodeName||"").toLowerCase():""}function p(){if(r)return r;var t=navigator.userAgentData;return t&&Array.isArray(t.brands)?r=t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function v(t){return t instanceof f(t).HTMLElement}function h(t){return t instanceof f(t).Element}function m(t){return"undefined"!=typeof ShadowRoot&&(t instanceof f(t).ShadowRoot||t instanceof ShadowRoot)}function x(t){var e=s(t),n=e.overflow,r=e.overflowX,i=e.overflowY,o=e.display;return/auto|scroll|overlay|hidden|clip/.test(n+i+r)&&!["inline","contents"].includes(o)}function g(t){return["table","td","th"].includes(d(t))}function b(t){var e=/firefox/i.test(p()),n=s(t),r=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!r&&"none"!==r||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((function(t){return n.willChange.includes(t)}))||["paint","layout","strict","content"].some((function(t){var e=n.contain;return null!=e&&e.includes(t)}))}function y(){return/^((?!chrome|android).)*safari/i.test(p())}function w(t){return["html","body","#document"].includes(d(t))}var k=Math.min,Z=Math.max,R=Math.round;function E(t){var e=s(t),n=parseFloat(e.width),r=parseFloat(e.height),i=v(t),o=i?t.offsetWidth:n,u=i?t.offsetHeight:r,c=R(n)!==o||R(r)!==u;return c&&(n=o,r=u),{width:n,height:r,fallback:c}}function A(t){return h(t)?t:t.contextElement}var L={x:1,y:1};function T(t){var e=A(t);if(!v(e))return L;var n=e.getBoundingClientRect(),r=E(e),i=r.width,o=r.height,u=r.fallback,c=(u?R(n.width):n.width)/i,a=(u?R(n.height):n.height)/o;return c&&Number.isFinite(c)||(c=1),a&&Number.isFinite(a)||(a=1),{x:c,y:a}}function D(t,e,n,r){var i,o;void 0===e&&(e=!1),void 0===n&&(n=!1);var u=t.getBoundingClientRect(),c=A(t),s=L;e&&(r?h(r)&&(s=T(r)):s=T(t));var l=c?f(c):window,d=y()&&n,p=(u.left+(d&&(null==(i=l.visualViewport)?void 0:i.offsetLeft)||0))/s.x,v=(u.top+(d&&(null==(o=l.visualViewport)?void 0:o.offsetTop)||0))/s.y,m=u.width/s.x,x=u.height/s.y;if(c)for(var g=f(c),b=r&&h(r)?f(r):r,w=g.frameElement;w&&r&&b!==g;){var k=T(w),Z=w.getBoundingClientRect(),R=getComputedStyle(w);Z.x+=(w.clientLeft+parseFloat(R.paddingLeft))*k.x,Z.y+=(w.clientTop+parseFloat(R.paddingTop))*k.y,p*=k.x,v*=k.y,m*=k.x,x*=k.y,p+=Z.x,v+=Z.y,w=f(w).frameElement}return(0,a.JB)({width:m,height:x,x:p,y:v})}function F(t){return((l(t)?t.ownerDocument:t.document)||window.document).documentElement}function O(t){return h(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function C(t){return D(F(t)).left+O(t).scrollLeft}function P(t){if("html"===d(t))return t;var e=t.assignedSlot||t.parentNode||m(t)&&t.host||F(t);return m(e)?e.host:e}function S(t){var e=P(t);return w(e)?e.ownerDocument.body:v(e)&&x(e)?e:S(e)}function H(t,e){var n;void 0===e&&(e=[]);var r=S(t),i=r===(null==(n=t.ownerDocument)?void 0:n.body),o=f(r);return i?e.concat(o,o.visualViewport||[],x(r)?r:[]):e.concat(r,H(r))}function W(t,e,n){var r;if("viewport"===e)r=function(t,e){var n=f(t),r=F(t),i=n.visualViewport,o=r.clientWidth,u=r.clientHeight,c=0,a=0;if(i){o=i.width,u=i.height;var s=y();(!s||s&&"fixed"===e)&&(c=i.offsetLeft,a=i.offsetTop)}return{width:o,height:u,x:c,y:a}}(t,n);else if("document"===e)r=function(t){var e=F(t),n=O(t),r=t.ownerDocument.body,i=Z(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=Z(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),u=-n.scrollLeft+C(t),c=-n.scrollTop;return"rtl"===s(r).direction&&(u+=Z(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:u,y:c}}(F(t));else if(h(e))r=function(t,e){var n=D(t,!0,"fixed"===e),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=v(t)?T(t):{x:1,y:1};return{width:t.clientWidth*o.x,height:t.clientHeight*o.y,x:i*o.x,y:r*o.y}}(e,n);else{var i=(0,c.Z)({},e);if(y()){var o,u,l=f(t);i.x-=(null==(o=l.visualViewport)?void 0:o.offsetLeft)||0,i.y-=(null==(u=l.visualViewport)?void 0:u.offsetTop)||0}r=i}return(0,a.JB)(r)}function B(t,e){var n=P(t);return!(n===e||!h(n)||w(n))&&("fixed"===s(n).position||B(n,e))}function M(t,e){return v(t)&&"fixed"!==s(t).position?e?e(t):t.offsetParent:null}function V(t,e){var n=f(t);if(!v(t))return n;for(var r=M(t,e);r&&g(r)&&"static"===s(r).position;)r=M(r,e);return r&&("html"===d(r)||"body"===d(r)&&"static"===s(r).position&&!b(r))?n:r||function(t){for(var e=P(t);v(e)&&!w(e);){if(b(e))return e;e=P(e)}return null}(t)||n}function j(t,e,n){var r=v(e),i=F(e),o=D(t,!0,"fixed"===n,e),u={scrollLeft:0,scrollTop:0},c={x:0,y:0};if(r||!r&&"fixed"!==n)if(("body"!==d(e)||x(i))&&(u=O(e)),v(e)){var a=D(e,!0);c.x=a.x+e.clientLeft,c.y=a.y+e.clientTop}else i&&(c.x=C(i));return{x:o.left+u.scrollLeft-c.x,y:o.top+u.scrollTop-c.y,width:o.width,height:o.height}}var q={getClippingRect:function(t){var e=t.element,n=t.boundary,r=t.rootBoundary,i=t.strategy,o="clippingAncestors"===n?function(t,e){var n=e.get(t);if(n)return n;for(var r=H(t).filter((function(t){return h(t)&&"body"!==d(t)})),i=null,o="fixed"===s(t).position,u=o?P(t):t;h(u)&&!w(u);){var c=s(u),a=b(u);a||"fixed"!==c.position||(i=null),(o?!a&&!i:!a&&"static"===c.position&&i&&["absolute","fixed"].includes(i.position)||x(u)&&!a&&B(t,u))?r=r.filter((function(t){return t!==u})):i=c,u=P(u)}return e.set(t,r),r}(e,this._c):[].concat(n),c=[].concat((0,u.Z)(o),[r]),a=c[0],f=c.reduce((function(t,n){var r=W(e,n,i);return t.top=Z(r.top,t.top),t.right=k(r.right,t.right),t.bottom=k(r.bottom,t.bottom),t.left=Z(r.left,t.left),t}),W(e,a,i));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){var e=t.rect,n=t.offsetParent,r=t.strategy,i=v(n),o=F(n);if(n===o)return e;var u={scrollLeft:0,scrollTop:0},c={x:1,y:1},a={x:0,y:0};if((i||!i&&"fixed"!==r)&&(("body"!==d(n)||x(o))&&(u=O(n)),v(n))){var f=D(n);c=T(n),a.x=f.x+n.clientLeft,a.y=f.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-u.scrollLeft*c.x+a.x,y:e.y*c.y-u.scrollTop*c.y+a.y}},isElement:h,getDimensions:function(t){return E(t)},getOffsetParent:V,getDocumentElement:F,getScale:T,getElementRects:function(t){var e=this;return(0,o.Z)((0,i.Z)().mark((function n(){var r,o,u,a,f;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.reference,o=t.floating,u=t.strategy,a=e.getOffsetParent||V,f=e.getDimensions,n.t0=j,n.t1=r,n.next=6,a(o);case 6:return n.t2=n.sent,n.t3=u,n.t4=(0,n.t0)(n.t1,n.t2,n.t3),n.t5=c.Z,n.t6={x:0,y:0},n.next=13,f(o);case 13:return n.t7=n.sent,n.t8=(0,n.t5)(n.t6,n.t7),n.abrupt("return",{reference:n.t4,floating:n.t8});case 16:case"end":return n.stop()}}),n)})))()},getClientRects:function(t){return Array.from(t.getClientRects())},isRTL:function(t){return"rtl"===s(t).direction}};function z(t,e,n,r){void 0===r&&(r={});var i=r,o=i.ancestorScroll,c=void 0===o||o,a=i.ancestorResize,f=void 0===a||a,s=i.elementResize,l=void 0===s||s,d=i.animationFrame,p=void 0!==d&&d,v=c||f?[].concat((0,u.Z)(h(t)?H(t):t.contextElement?H(t.contextElement):[]),(0,u.Z)(H(e))):[];v.forEach((function(t){var e=!h(t)&&t.toString().includes("V");!c||p&&!e||t.addEventListener("scroll",n,{passive:!0}),f&&t.addEventListener("resize",n)}));var m,x=null;l&&(x=new ResizeObserver((function(){n()})),h(t)&&!p&&x.observe(t),h(t)||!t.contextElement||p||x.observe(t.contextElement),x.observe(e));var g=p?D(t):null;return p&&function e(){var r=D(t);!g||r.x===g.x&&r.y===g.y&&r.width===g.width&&r.height===g.height||n(),g=r,m=requestAnimationFrame(e)}(),n(),function(){var t;v.forEach((function(t){c&&t.removeEventListener("scroll",n),f&&t.removeEventListener("resize",n)})),null==(t=x)||t.disconnect(),x=null,p&&cancelAnimationFrame(m)}}var U=function(t,e,n){var r=new Map,i=(0,c.Z)({platform:q},n),o=(0,c.Z)((0,c.Z)({},i.platform),{},{_c:r});return(0,a.oo)(t,e,(0,c.Z)((0,c.Z)({},i),{},{platform:o}))}},78825:function(t,e,n){n.d(e,{Ab:function(){return u},Fr:function(){return c},G$:function(){return o},K$:function(){return f},MS:function(){return r},h5:function(){return a},lK:function(){return s},uj:function(){return i}});var r="-ms-",i="-moz-",o="-webkit-",u="comm",c="rule",a="decl",f="@import",s="@keyframes"},1287:function(t,e,n){n.d(e,{MY:function(){return u}});var r=n(78825),i=n(26100),o=n(1795);function u(t){return(0,o.cE)(c("",null,null,null,[""],t=(0,o.un)(t),0,[0],t))}function c(t,e,n,r,u,l,d,p,v){for(var h=0,m=0,x=d,g=0,b=0,y=0,w=1,k=1,Z=1,R=0,E="",A=u,L=l,T=r,D=E;k;)switch(y=R,R=(0,o.lp)()){case 40:if(108!=y&&58==(0,i.uO)(D,x-1)){-1!=(0,i.Cw)(D+=(0,i.gx)((0,o.iF)(R),"&","&\f"),"&\f")&&(Z=-1);break}case 34:case 39:case 91:D+=(0,o.iF)(R);break;case 9:case 10:case 13:case 32:D+=(0,o.Qb)(y);break;case 92:D+=(0,o.kq)((0,o.Ud)()-1,7);continue;case 47:switch((0,o.fj)()){case 42:case 47:(0,i.R3)(f((0,o.q6)((0,o.lp)(),(0,o.Ud)()),e,n),v);break;default:D+="/"}break;case 123*w:p[h++]=(0,i.to)(D)*Z;case 125*w:case 59:case 0:switch(R){case 0:case 125:k=0;case 59+m:b>0&&(0,i.to)(D)-x&&(0,i.R3)(b>32?s(D+";",r,n,x-1):s((0,i.gx)(D," ","")+";",r,n,x-2),v);break;case 59:D+=";";default:if((0,i.R3)(T=a(D,e,n,h,m,u,p,E,A=[],L=[],x),l),123===R)if(0===m)c(D,e,T,T,A,l,x,p,L);else switch(99===g&&110===(0,i.uO)(D,3)?100:g){case 100:case 109:case 115:c(t,T,T,r&&(0,i.R3)(a(t,T,T,0,0,u,p,E,u,A=[],x),L),u,L,x,p,r?A:L);break;default:c(D,T,T,T,[""],L,0,p,L)}}h=m=b=0,w=Z=1,E=D="",x=d;break;case 58:x=1+(0,i.to)(D),b=y;default:if(w<1)if(123==R)--w;else if(125==R&&0==w++&&125==(0,o.mp)())continue;switch(D+=(0,i.Dp)(R),R*w){case 38:Z=m>0?1:(D+="\f",-1);break;case 44:p[h++]=((0,i.to)(D)-1)*Z,Z=1;break;case 64:45===(0,o.fj)()&&(D+=(0,o.iF)((0,o.lp)())),g=(0,o.fj)(),m=x=(0,i.to)(E=D+=(0,o.QU)((0,o.Ud)())),R++;break;case 45:45===y&&2==(0,i.to)(D)&&(w=0)}}return l}function a(t,e,n,u,c,a,f,s,l,d,p){for(var v=c-1,h=0===c?a:[""],m=(0,i.Ei)(h),x=0,g=0,b=0;x<u;++x)for(var y=0,w=(0,i.tb)(t,v+1,v=(0,i.Wn)(g=f[x])),k=t;y<m;++y)(k=(0,i.fy)(g>0?h[y]+" "+w:(0,i.gx)(w,/&\f/g,h[y])))&&(l[b++]=k);return(0,o.dH)(t,e,n,0===c?r.Fr:s,l,d,p)}function f(t,e,n){return(0,o.dH)(t,e,n,r.Ab,(0,i.Dp)((0,o.Tb)()),(0,i.tb)(t,2,-2),0)}function s(t,e,n,u){return(0,o.dH)(t,e,n,r.h5,(0,i.tb)(t,0,u),(0,i.tb)(t,u+1,-1),u)}},54132:function(t,e,n){n.d(e,{P:function(){return u},q:function(){return o}});var r=n(78825),i=n(26100);function o(t,e){for(var n="",r=(0,i.Ei)(t),o=0;o<r;o++)n+=e(t[o],o,t,e)||"";return n}function u(t,e,n,u){switch(t.type){case r.K$:case r.h5:return t.return=t.return||t.value;case r.Ab:return"";case r.lK:return t.return=t.value+"{"+o(t.children,u)+"}";case r.Fr:t.value=t.props.join(",")}return(0,i.to)(n=o(t.children,u))?t.return=t.value+"{"+n+"}":""}},1795:function(t,e,n){n.d(e,{FK:function(){return c},JG:function(){return l},QU:function(){return A},Qb:function(){return k},Tb:function(){return d},Ud:function(){return m},cE:function(){return y},dH:function(){return s},fj:function(){return h},iF:function(){return w},kq:function(){return Z},lp:function(){return v},mp:function(){return p},q6:function(){return E},r:function(){return g},tP:function(){return x},un:function(){return b}});var r=n(26100),i=1,o=1,u=0,c=0,a=0,f="";function s(t,e,n,r,u,c,a){return{value:t,root:e,parent:n,type:r,props:u,children:c,line:i,column:o,length:a,return:""}}function l(t,e){return(0,r.f0)(s("",null,null,"",null,null,0),t,{length:-t.length},e)}function d(){return a}function p(){return a=c>0?(0,r.uO)(f,--c):0,o--,10===a&&(o=1,i--),a}function v(){return a=c<u?(0,r.uO)(f,c++):0,o++,10===a&&(o=1,i++),a}function h(){return(0,r.uO)(f,c)}function m(){return c}function x(t,e){return(0,r.tb)(f,t,e)}function g(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function b(t){return i=o=1,u=(0,r.to)(f=t),c=0,[]}function y(t){return f="",t}function w(t){return(0,r.fy)(x(c-1,R(91===t?t+2:40===t?t+1:t)))}function k(t){for(;(a=h())&&a<33;)v();return g(t)>2||g(a)>3?"":" "}function Z(t,e){for(;--e&&v()&&!(a<48||a>102||a>57&&a<65||a>70&&a<97););return x(t,m()+(e<6&&32==h()&&32==v()))}function R(t){for(;v();)switch(a){case t:return c;case 34:case 39:34!==t&&39!==t&&R(a);break;case 40:41===t&&R(t);break;case 92:v()}return c}function E(t,e){for(;v()&&t+a!==57&&(t+a!==84||47!==h()););return"/*"+x(e,c-1)+"*"+(0,r.Dp)(47===t?t:v())}function A(t){for(;!g(h());)v();return x(t,c)}},26100:function(t,e,n){n.d(e,{$e:function(){return m},Cw:function(){return s},Dp:function(){return i},EQ:function(){return a},Ei:function(){return v},R3:function(){return h},Wn:function(){return r},f0:function(){return o},fy:function(){return c},gx:function(){return f},tb:function(){return d},to:function(){return p},uO:function(){return l},vp:function(){return u}});var r=Math.abs,i=String.fromCharCode,o=Object.assign;function u(t,e){return 45^l(t,0)?(((e<<2^l(t,0))<<2^l(t,1))<<2^l(t,2))<<2^l(t,3):0}function c(t){return t.trim()}function a(t,e){return(t=e.exec(t))?t[0]:t}function f(t,e,n){return t.replace(e,n)}function s(t,e){return t.indexOf(e)}function l(t,e){return 0|t.charCodeAt(e)}function d(t,e,n){return t.slice(e,n)}function p(t){return t.length}function v(t){return t.length}function h(t,e){return e.push(t),t}function m(t,e){return t.map(e).join("")}}}]);
//# sourceMappingURL=1722.223a5e43.chunk.js.map