"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[1938],{7423:function(e,t,r){r.d(t,{B6:function(){return v},Cp:function(){return x},D9:function(){return S},HX:function(){return y},JT:function(){return _},QX:function(){return b},RP:function(){return g},Yy:function(){return w},al:function(){return P},ex:function(){return T},fE:function(){return k},mo:function(){return Z},pP:function(){return A},vR:function(){return m}});var n=r(1413),a=r(4165),o=r(5861),s=r(9731),c=r(9085),u=r(5548),i=r(2143),p=r(1319),d=r(3537),f=r(8098),l=r(9532),h=r(165);function v(e){return function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{({shop:e.name,user_id:e.user_id}),fetch("".concat(u.iw,"/shopify-integration?shop=").concat(e.name,"&user_id=").concat(e.user_id),{redirect:"manual"}).then((function(e){if("opaqueredirect"!==e.type)return e;window.location.href=e.url})).catch((function(){}))}catch(r){r.response&&r.response.data&&r.response.data.location&&(window.location=r.response.data.location),c.Am.error(r&&r.response&&r.response.data&&r.response.data.errors?r.response.data.errors:"Something went worng")}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function m(){return function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get(u.En);case 3:(r=e.sent)&&r.data&&200==r.data.code&&t((0,f.d7)({type:i.e7,data:r.data.data})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function Z(e){return function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var n,o,c,p,d,l,h,v,m,Z,w,k,x,g,b;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(u.AM,"/").concat(e,"/"));case 3:(n=t.sent)&&n.data&&200==n.data.code&&(r((0,f.bV)({type:i.AM,data:n.data.data})),r((0,f.K5)({preference:null===n||void 0===n||null===(o=n.data)||void 0===o||null===(c=o.data)||void 0===c||null===(p=c.brandPreference)||void 0===p?void 0:p.id,profile:null===n||void 0===n||null===(d=n.data)||void 0===d||null===(l=d.data)||void 0===l||null===(h=l.brand_profile)||void 0===h?void 0:h.company_name,paid:null===n||void 0===n||null===(v=n.data)||void 0===v||null===(m=v.data)||void 0===m||null===(Z=m.payment_detail)||void 0===Z?void 0:Z.customer_id,shipping:null===n||void 0===n||null===(w=n.data)||void 0===w||null===(k=w.data)||void 0===k||null===(x=k.shippingRate)||void 0===x?void 0:x.id,integration:null===n||void 0===n||null===(g=n.data)||void 0===g||null===(b=g.data)||void 0===b?void 0:b.shop_detail}))),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function w(){return function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get(u.HB);case 3:(r=e.sent)&&r.data&&200==r.data.code&&t((0,f.ku)({type:i.R0,data:r.data.data})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function k(e,t){return function(){var r=(0,o.Z)((0,a.Z)().mark((function r(n){var o;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!t){r.next=7;break}return r.next=4,s.Z.post(u.AM,e);case 4:o=r.sent,r.next=10;break;case 7:return r.next=9,s.Z.put(u.AM,e);case 9:o=r.sent;case 10:o&&o.status&&(201==o.status||200==o.status)?(c.Am.success("Profile Details Updated"),n(Z(e.user_id))):c.Am.error("Something went worng"),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),c.Am.error(r.t0&&r.t0.response&&r.t0.response.data&&r.t0.response.data.errors?r.t0.response.data.errors:"Something went worng");case 16:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(e){return r.apply(this,arguments)}}()}function x(e,t){return function(){var r=(0,o.Z)((0,a.Z)().mark((function r(n){return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n((0,d.O)(!0)),r.prev=1,r.next=4,s.Z.post(u.oj(t),e);case 4:c.Am.success("Password changed successfully"),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(1),c.Am.error(r.t0&&r.t0.response&&r.t0.response.data&&r.t0.response.data.errors?r.t0.response.data.errors:"Something went worng");case 10:case"end":return r.stop()}}),r,null,[[1,7]])})));return function(e){return r.apply(this,arguments)}}()}function g(e,t){return function(){var r=(0,o.Z)((0,a.Z)().mark((function r(o){var i;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.post(u.dF,e);case 3:(i=r.sent)&&i.data&&201==i.data.code?o(b((0,n.Z)((0,n.Z)({},t),{},{account_type:t.account_type.value,purpose:t.purpose.value,customer_id:Number(i.data.data.customer_id)}),e.brand_user_id)):c.Am.error("Something went worng"),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),c.Am.error(r.t0&&r.t0.response&&r.t0.response.data&&r.t0.response.data.errors?r.t0.response.data.errors:"Something went worng");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}function b(e){return function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.post(u.xk,e);case 3:(n=t.sent)&&n.data&&201==n.data.code?(r(y(e.customer_id,Number(n.data.data.external_account_id))),r((0,f.K5)({paid:!0}))):c.Am.error("Something went worng"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c.Am.error(t.t0&&t.t0.response&&t.t0.response.data&&t.t0.response.data.errors?t.t0.response.data.errors:"Something went worng");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function y(e,t){return function(){var r=(0,o.Z)((0,a.Z)().mark((function r(n){var o,i,p;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(u.b9,"/").concat(e,"/external-account/").concat(t));case 3:(o=r.sent)&&o.data&&200==o.data.code?(0,h.Jx)(o.data.data):c.Am.error("Something went worng"),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),(null===r.t0||void 0===r.t0||null===(i=r.t0.response)||void 0===i||null===(p=i.data)||void 0===p?void 0:p.errors).startsWith("customer with id")||c.Am.error(r.t0&&r.t0.response&&r.t0.response.data&&r.t0.response.data.errors?r.t0.response.data.errors:"Something went worng");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}function _(e,t){return function(){var r=(0,o.Z)((0,a.Z)().mark((function r(n){var o;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,n((0,p.bl)(!0)),!t){r.next=8;break}return r.next=5,s.Z.put("".concat(u.kB),e);case 5:o=r.sent,r.next=11;break;case 8:return r.next=10,s.Z.post(u.kB,e);case 10:o=r.sent;case 11:n(S(e.brand_id)),n((0,f.K5)({shipping:!0})),c.Am.success(o.data.message),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(0),c.Am.error(r.t0&&r.t0.response&&r.t0.response.data&&r.t0.response.data.errors?r.t0.response.data.errors:"Something went worng");case 19:return r.prev=19,n((0,p.bl)(!1)),r.finish(19);case 22:case"end":return r.stop()}}),r,null,[[0,16,19,22]])})));return function(e){return r.apply(this,arguments)}}()}function A(){return function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get(u.uW);case 3:200==(r=e.sent).status&&t((0,p.Ii)(r.data.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c.Am.error(e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.errors?e.t0.response.data.errors:"Something went worng");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function S(e){return function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(u.kB,"/").concat(e));case 3:200==(o=t.sent).status&&r((0,p.Pr)((0,n.Z)((0,n.Z)({},o.data.data),{},{daystofulfill:o.data.data.shipping_time_id}))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c.Am.error(t.t0&&t.t0.response&&t.t0.response.data&&t.t0.response.data.errors?t.t0.response.data.errors:"Something went worng");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function T(e){return function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.post(u.Di,e);case 3:201===t.sent.status&&(r(P(e.brand_id)),r((0,f.K5)({preference:!0})),c.Am.success("Preferences Updated")),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c.Am.error(t.t0&&t.t0.response&&t.t0.response.data&&t.t0.response.data.errors?t.t0.response.data.errors:"Something went worng");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function P(e){return function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(u.Di,"/").concat(e));case 3:200===(n=t.sent).status&&r((0,l.K)(n.data.data)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0,"err"),c.Am.error(t.t0&&t.t0.response&&t.t0.response.data&&t.t0.response.data.errors?t.t0.response.data.errors:"Something went worng");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},5548:function(e,t,r){r.d(t,{AM:function(){return h},Di:function(){return x},En:function(){return y},H4:function(){return s},HB:function(){return _},M8:function(){return A},N1:function(){return p},NR:function(){return f},Nv:function(){return u},Nz:function(){return a},Rm:function(){return o},Wd:function(){return d},ZS:function(){return b},b9:function(){return Z},dF:function(){return v},iw:function(){return l},kB:function(){return w},oj:function(){return i},qq:function(){return g},uW:function(){return k},xk:function(){return m},z6:function(){return c}});var n="https://dev.backend.shopdotapp.com/api/v1",a="".concat(n,"/auth/signup/"),o="".concat(n,"/auth/verification/send-mail"),s=("".concat(n,"/auth/verify"),"".concat(n,"/auth/signin")),c="".concat(n,"/auth/refresh-token"),u="".concat(n,"/auth/logout"),i=function(e){return"".concat(n,"/auth/user/").concat(e,"/change-password")},p="".concat(n,"/user/roles"),d="".concat(n,"/user/platform"),f=("".concat(n,"/platform/shopify-integration"),"".concat(n,"/auth/upload-image")),l=("".concat(n,"/user/retailer-profile"),"".concat(n,"/platform")),h="".concat(n,"/user/brand-profile"),v="".concat(n,"/payment/create-brand-as-customer"),m="".concat(n,"/payment/customer/external-account"),Z="".concat(n,"/payment/customer"),w="".concat(n,"/user/brand-shipping"),k="".concat(n,"/platform/shipping-times"),x=("".concat(n,"/shopify/sync-product"),"".concat(n,"/brand/setting/preferences")),g="".concat(n,"/brand/setting/notifications"),b=("".concat(n,"/user/retailer-profile"),"".concat(n,"/brand/product/list")),y="".concat(n,"/platform/category"),_="".concat(n,"/platform/values"),A="".concat(n,"/brand/orders");"".concat(n,"/order/details")},4933:function(e,t,r){r.d(t,{Rp:function(){return a},Sn:function(){return n},ZL:function(){return o},_e:function(){return s}});var n=function(e){return e.brandProfile.brandProfileDetails},a=function(e){return e.brandProfile.brandCategory},o=function(e){return e.brandProfile.brandValues},s=function(e){return e.brandProfile.profileCompleted}},9731:function(e,t,r){var n=r(4165),a=r(5861),o=r(3263),s=r(5548),c=o.Z;c.interceptors.request.use(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.headers.Authorization){e.next=7;break}return e.next=3,localStorage.getItem("accessToken");case 3:r=e.sent,c.defaults.headers.common.Authorization=r?"Bearer ".concat(r):"",t.headers.Authorization="Bearer ".concat(r),t.maxRedirects=0;case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){Promise.reject(e)})),c.interceptors.response.use(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.config.url!==s.H4&&t.config.url!==s.Nz){e.next=13;break}return r=t.data.data.access_token?t.data.data.access_token:"",a=t.data.data.refresh_token?t.data.data.refresh_token:"",c.defaults.headers.common.Authorization=r?"Bearer ".concat(r):"",e.prev=4,e.next=7,localStorage.setItem("accessToken",r);case 7:return e.next=9,localStorage.setItem("refreshToken",a);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(4);case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}());var u=[],i=!1;c.interceptors.response.use(void 0,function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.response||!t.response.config||t.response.config.url!==s.z6||401!=t.response.status){e.next=4;break}setTimeout((0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem("accessToken","");case 2:return e.next=4,localStorage.setItem("refreshToken","");case 4:case"end":return e.stop()}}),e)}))),2e3),e.next=19;break;case 4:if(!t.response||401!=t.response.status){e.next=11;break}return r=localStorage.getItem("refreshToken"),o={refresh_token:r},u.push(t.config),e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i||(i=!0,delete c.defaults.headers.common.Authorization,c.post(s.z6,o,{headers:{"content-type":"application/json"}}).then(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(o){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.defaults.headers.common.Authorization="Bearer ".concat(o.data.data.access_token),e.next=3,localStorage.setItem("accessToken",o.data.data.access_token);case 3:return e.next=5,localStorage.setItem("refreshToken",o.data.data.refresh_token);case 5:u.map(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(a,i){var p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u[i].headers.Authorization="Bearer ".concat(o.data.data.access_token),a.url!=s.Nv){e.next=8;break}return p=JSON.parse(a.data),e.next=5,localStorage.setItem("accessToken","");case 5:return e.next=7,localStorage.setItem("refreshToken","");case 7:a.data=JSON.stringify(p);case 8:c(a).then((function(e){return t(e)})).catch((function(e){r(e)}));case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),i=!1,u=[];case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){if(responseToast(e),setTimeout((0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem("accessToken","");case 2:return e.next=4,localStorage.setItem("refreshToken","");case 4:case"end":return e.stop()}}),e)}))),2e3),500!==e.response.status)return e})));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()));case 11:if(!(t.response&&t.response.data&&t.response.data.location)){e.next=15;break}window.location=t.response.data.location,e.next=19;break;case 15:if(!t.response||401!=t.response.status||904==t.response.data.code){e.next=18;break}e.next=19;break;case 18:return e.abrupt("return",Promise.reject(t));case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=c}}]);
//# sourceMappingURL=1938.a98b27f0.chunk.js.map