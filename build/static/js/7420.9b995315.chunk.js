"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[7420],{2789:function(e,n,t){t(2791);n.Z=t.p+"static/media/ic_email_sent.e7d8da5a5f749ab9d01d4677163884cb.svg"},5063:function(e,n,t){t.d(n,{F2:function(){return d},y:function(){return f},zl:function(){return p}});var r=t(4165),a=t(5861),o=t(9731),c=t(5548),s=t(3541),i=t(5821),u=t(9085);function f(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.post(c.H4,e);case 3:(a=n.sent)&&a.data&&200==a.data.code?(t((0,s.SL)()),t((0,i.ps)(a.data.data))):u.Am.error("Something went worng"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),u.Am.error(n.t0&&n.t0.response&&n.t0.response.data&&n.t0.response.data.errors&&n.t0.response.data.errors.length&&n.t0.response.data.errors[0]&&n.t0.response.data.errors[0].password?n.t0.response.data.errors[0].password:n.t0&&n.t0.response&&n.t0.response.data&&n.t0.response.data.errors?n.t0.response.data.errors:"Something went worng");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}function p(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.post(c.Nz,e);case 3:(a=n.sent)&&a.data&&201==a.data.code?(t((0,i.ps)(a.data.data)),t((0,s.f6)())):u.Am.error("Something went worng"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),u.Am.error(n.t0&&n.t0.response&&n.t0.response.data&&n.t0.response.data.errors?n.t0.response.data.errors:"Something went worng");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}function d(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.post(c.Rm,e);case 3:(a=n.sent)&&a.data&&200==a.data.code||u.Am.error("Something went worng"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),u.Am.error(n.t0&&n.t0.response&&n.t0.response.data&&n.t0.response.data.errors?n.t0.response.data.errors:"Something went worng");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}},5227:function(e,n,t){t(2791);var r=t(1100),a=(t(4092),t(184));function o(e){var n=e.pageTitle;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"ob-head",children:[(0,a.jsx)("img",{src:r,alt:"logo",className:"logo-round"}),(0,a.jsx)("h1",{children:n})]})})}o.defaultProps={pageTitle:"Signin"},n.Z=o},1097:function(e,n,t){t.d(n,{J:function(){return u}});var r,a,o=t(168),c=t(4313),s=t(1087),i=t(1011),u=(c.ZP.a(r||(r=(0,o.Z)(["\n  color: ",";\n  font-family: 'Mulish', sans-serif;\n  font-size: 16px;\n  text-decoration: none;\n\n  &.sm {\n    font-size: 14px;\n    letter-spacing: -0.02em;\n  }\n\n  &[disabled] {\n    pointer-events: none;\n  }\n\n  &:hover {\n    color: ",";\n  }\n"])),i.J0,i.J0),(0,c.ZP)(s.rU)(a||(a=(0,o.Z)(["\n  color: ",";\n  font-family: 'Mulish', sans-serif;\n  // font-size: 14px;\n  // text-decoration: none;\n  outline: 0;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  text-align: center;\n  border: none;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n  &:hover {\n    color: ",";\n    opacity: 0.8;\n  }\n"])),i.J0,i.J0))},5548:function(e,n,t){t.d(n,{AM:function(){return x},Di:function(){return S},En:function(){return P},H4:function(){return c},HB:function(){return F},M8:function(){return B},N1:function(){return d},NC:function(){return j},NR:function(){return h},Nv:function(){return i},Nz:function(){return a},OH:function(){return I},PO:function(){return C},Pm:function(){return A},Rm:function(){return o},Wd:function(){return l},Xs:function(){return T},ZS:function(){return z},Zy:function(){return _},b9:function(){return w},bk:function(){return f},dF:function(){return v},gp:function(){return y},gw:function(){return p},iw:function(){return m},kB:function(){return b},od:function(){return J},oj:function(){return u},p8:function(){return g},qq:function(){return N},uW:function(){return Z},xk:function(){return k},z6:function(){return s}});var r="https://dev.backend.shopdotapp.com/api/v1",a="".concat(r,"/auth/signup/"),o="".concat(r,"/auth/verification/send-mail"),c=("".concat(r,"/auth/verify"),"".concat(r,"/auth/signin")),s="".concat(r,"/auth/refresh-token"),i="".concat(r,"/auth/signout"),u=function(e){return"".concat(r,"/auth/user/").concat(e,"/change-password")},f=function(e){return"".concat(r,"/auth/user/").concat(e,"/reset-password")},p="".concat(r,"/auth/send-reset-link"),d="".concat(r,"/user/roles"),l="".concat(r,"/user/platform"),h=("".concat(r,"/platform/shopify-integration"),"".concat(r,"/auth/upload-image")),m=("".concat(r,"/user/retailer-profile"),"".concat(r,"/platform")),x="".concat(r,"/user/brand-profile"),g=function(e){return"".concat(r,"/user/brand-profile/").concat(e)},v="".concat(r,"/payment/create-brand-as-customer"),k="".concat(r,"/payment/customer/external-account"),w="".concat(r,"/payment/customer"),b="".concat(r,"/user/brand-shipping"),Z="".concat(r,"/platform/shipping-times"),y=function(e){return"".concat(r,"/shopify/sync-all-product?&user_id=").concat(e)},j=("".concat(r,"/shopify/sync-all-product"),"".concat(r,"/shopify/sync-product")),S="".concat(r,"/brand/setting/preferences"),N="".concat(r,"/brand/setting/notifications"),T="".concat(r,"/shopify/shopify-remove"),z=("".concat(r,"/user/retailer-profile"),"".concat(r,"/brand/product/list")),A=("".concat(r,"/brand/product/download"),"".concat(r,"/brand/product/upload"),"".concat(r,"/brand/product-tags")),_="".concat(r,"/brand/product/category/0"),I=function(e){return"".concat(r,"/brand/product/").concat(e)},P="".concat(r,"/platform/category"),F="".concat(r,"/platform/values"),B="".concat(r,"/brand/orders"),J=("".concat(r,"/order/details"),"".concat(r,"/countries")),C=function(e){return"".concat(r,"/countries/").concat(e,"/states")}},5665:function(e,n,t){t(2791);var r=t(5227),a=(t(9434),t(9085)),o=t(184);function c(e){var n=e.children,t=e.classNames,c=e.pageTitle;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"wrapper onbording",children:(0,o.jsx)("main",{children:(0,o.jsxs)("section",{children:[(0,o.jsx)(r.Z,{pageTitle:c}),(0,o.jsx)("div",{className:"ob-body",children:(0,o.jsx)("div",{className:t,children:n})})]})})}),(0,o.jsx)(a.Ix,{})]})}c.defaultProps={children:(0,o.jsx)("p",{children:"Shopdot"}),pageTitle:"Signin",classNames:"form-wrapper"},n.Z=c},7420:function(e,n,t){t.r(n);var r=t(2791),a=t(7689),o=t(5665),c=t(2789),s=(t(1097),t(8648)),i=t(9434),u=t(9290),f=t(5063),p=t(184);n.default=function(){(0,a.s0)();var e=(0,i.v9)(u.uy),n=(0,i.I0)();return(0,r.useEffect)((function(){n((0,f.F2)({id:e.id}))}),[]),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(o.Z,{pageTitle:"Create Your ShopDot Account",children:(0,p.jsx)("div",{className:"form-area",children:(0,p.jsxs)("div",{className:"form-group verify_email",children:[(0,p.jsxs)("div",{className:"verify-title",children:[(0,p.jsx)("img",{src:c.Z,alt:"email"}),(0,p.jsx)("h2",{style:{fontFamily:"Mulish, sans-serif",marginLeft:"5px"},children:"Verify Your Email"})]}),(0,p.jsx)("p",{children:"An email has been sent to your email address with a link to verify your account. You will need to verify your email to complete sign up."}),(0,p.jsx)("div",{className:"form__field  mt-5",children:(0,p.jsx)(s.Z,{className:"button w-100",type:"button",onClick:function(){n((0,f.F2)({id:e.id}))},children:"Resend Verification Email"})})]})})})})}},9731:function(e,n,t){var r=t(4165),a=t(5861),o=t(3263),c=t(5548),s=o.Z;s.interceptors.request.use(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.headers.Authorization){e.next=7;break}return e.next=3,localStorage.getItem("accessToken");case 3:t=e.sent,s.defaults.headers.common.Authorization=t?"Bearer ".concat(t):"",n.headers.Authorization="Bearer ".concat(t),n.maxRedirects=0;case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),(function(e){Promise.reject(e)})),s.interceptors.response.use(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.config.url!==c.H4&&n.config.url!==c.Nz){e.next=13;break}return t=n.data.data.access_token?n.data.data.access_token:"",a=n.data.data.refresh_token?n.data.data.refresh_token:"",s.defaults.headers.common.Authorization=t?"Bearer ".concat(t):"",e.prev=4,e.next=7,localStorage.setItem("accessToken",t);case 7:return e.next=9,localStorage.setItem("refreshToken",a);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(4);case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(n){return e.apply(this,arguments)}}());var i=[],u=!1;s.interceptors.response.use(void 0,function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.response||!n.response.config||n.response.config.url!==c.z6||401!=n.response.status){e.next=4;break}setTimeout((0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem("accessToken","");case 2:return e.next=4,localStorage.setItem("refreshToken","");case 4:case"end":return e.stop()}}),e)}))),2e3),e.next=19;break;case 4:if(!n.response||401!=n.response.status){e.next=11;break}return t=localStorage.getItem("refreshToken"),o={refresh_token:t},i.push(n.config),e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u||(u=!0,delete s.defaults.headers.common.Authorization,s.post(c.z6,o,{headers:{"content-type":"application/json"}}).then(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(o){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.defaults.headers.common.Authorization="Bearer ".concat(o.data.data.access_token),e.next=3,localStorage.setItem("accessToken",o.data.data.access_token);case 3:return e.next=5,localStorage.setItem("refreshToken",o.data.data.refresh_token);case 5:i.map(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,u){var f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i[u].headers.Authorization="Bearer ".concat(o.data.data.access_token),a.url!=c.Nv){e.next=8;break}return f=JSON.parse(a.data),e.next=5,localStorage.setItem("accessToken","");case 5:return e.next=7,localStorage.setItem("refreshToken","");case 7:a.data=JSON.stringify(f);case 8:s(a).then((function(e){return n(e)})).catch((function(e){t(e)}));case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),u=!1,i=[];case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){if(responseToast(e),setTimeout((0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem("accessToken","");case 2:return e.next=4,localStorage.setItem("refreshToken","");case 4:case"end":return e.stop()}}),e)}))),2e3),500!==e.response.status)return e})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()));case 11:if(!(n.response&&n.response.data&&n.response.data.location)){e.next=15;break}window.location=n.response.data.location,e.next=19;break;case 15:if(!n.response||401!=n.response.status||904==n.response.data.code){e.next=18;break}e.next=19;break;case 18:return e.abrupt("return",Promise.reject(n));case 19:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.Z=s}}]);
//# sourceMappingURL=7420.9b995315.chunk.js.map