"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[1462],{7489:function(e,n,r){r.d(n,{$c:function(){return u},Rz:function(){return h},kT:function(){return f},ru:function(){return d},uz:function(){return l}});var t=r(4165),a=r(5861),o=r(9731),c=r(9085),s=r(5548),i=r(5821);function u(e,n,r){return function(){var u=(0,a.Z)((0,t.Z)().mark((function a(u){var l;return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.post(s.N1,e);case 3:(l=t.sent)&&l.data&&201==l.data.code?(u((0,i.Ju)()),"brand"===e.role?u(d({user_id:e.user_id,platform:r},n)):n("/retailer-onboarding")):c.Am.error("Something went worng"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c.Am.error(t.t0&&t.t0.response&&t.t0.response.data&&t.t0.response.data.errors?t.t0.response.data.errors:"Something went worng");case 10:case"end":return t.stop()}}),a,null,[[0,7]])})));return function(e){return u.apply(this,arguments)}}()}function d(e,n){return function(){var r=(0,a.Z)((0,t.Z)().mark((function r(a){var i;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.post(s.Wd,e);case 3:(i=r.sent)&&i.data&&201==i.data.code?n("/brand-onboarding"):n("/personalized-not-supported",{state:e.platform}),r.next=11;break;case 7:throw r.prev=7,r.t0=r.catch(0),c.Am.error(r.t0&&r.t0.response&&r.t0.response.data&&r.t0.response.data.errors?r.t0.response.data.errors:"Something went worng"),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,t.Z)().mark((function e(n){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.post(s.NR,n,{headers:{"content-type":"multipart/form-data"}});case 3:if(!(r=e.sent)||!r.data||200!=r.data.code){e.next=8;break}return e.abrupt("return",r.data.data);case 8:c.Am.error("Something went worng");case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),c.Am.error(e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.errors?e.t0.response.data.errors:"Something went worng"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function f(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.post(s.qq,e);case 3:return(a=n.sent)&&a.data&&200==a.data.code?(c.Am.success(null===(i=a.data)||void 0===i?void 0:i.message),r(h(e.brand_id))):c.Am.error("Something went worng"),n.abrupt("return",a);case 8:throw n.prev=8,n.t0=n.catch(0),c.Am.error(n.t0&&n.t0.response&&n.t0.response.data&&n.t0.response.data.errors?n.t0.response.data.errors:"Something went worng"),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}function h(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s.qq,"/").concat(e,"/"));case 3:return(a=n.sent)&&a.data&&200==a.data.code&&a.data.data&&r((0,i.pT)(a.data.data)),n.abrupt("return",a);case 8:throw n.prev=8,n.t0=n.catch(0),c.Am.error(n.t0&&n.t0.response&&n.t0.response.data&&n.t0.response.data.errors?n.t0.response.data.errors:"Something went worng"),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}},5227:function(e,n,r){r(2791);var t=r(1100),a=(r(4092),r(184));function o(e){var n=e.pageTitle;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"ob-head",children:[(0,a.jsx)("img",{src:t,alt:"logo",className:"logo-round"}),(0,a.jsx)("h1",{children:n})]})})}o.defaultProps={pageTitle:"Signin"},n.Z=o},2970:function(e,n,r){var t,a=r(168),o=r(1191),c=r(1011),s=o.ZP.input(t||(t=(0,a.Z)(["\n    // display: flex;\n    // align-items: center;\n    // align-content: center;\n    // z-index: 0;\n    // -webkit-appearance: none;\n    // appearance: none;\n    // width: 100%;\n    // box-sizing: border-box;\n    // font-family: ",";\n    // font-size: ",";\n    // font-weight: 400;\n    // border: 0.1rem solid ",";\n    // border-radius: ",";\n    // padding: ",";\n    // height: ",";\n    // outline: none;\n    // background-color: ",";\n    // transition: all "," ease;\n    // caret-color: ",";\n    //\n    // &::place-holder {\n    //     color: ",";\n    //     opacity: 0.64;\n    // }\n    //\n    // &.invalid {\n    //     border-color: ",";\n    //     background-color: ",";\n    // }\n    //\n    // &:focus {\n    //     border-color: ",";\n    //     background-color: ",";\n    // }\n    //\n    // &:focus:required:invalid {\n    //     border-color: ",";\n    //     background-color: ",";\n    // }\n    //\n    // &:required:valid {\n    //     border-color: var(--orange-tint-10);\n    //     background-color: var(--white);\n    // }\n    //\n    // &.valid {\n    //     border-color: ",";\n    //     background-color: ",";\n    // }\n\n    background: #fffcf9;\n    border: 1px solid #f3e0d2;\n    border-radius: 4px;\n    height: 4rem;\n    padding: 1rem 1.2rem;\n    display: block;\n    width: 100%;\n    margin-top: 0.6rem;\n    appearance: none;\n    box-sizing: border-box;\n    font-family: 'Mulish', sans-serif;\n    outline: none;\n\n    &.invalid {\n        border-color: #eb5757;\n    }\n"])),c.IN,c.dA,c.cb,c.xM,c.nf,c.ZO,c.sE,c.rY,c.J0,c.ZR,c.ow,c.AW,c.ow,c.AW,c.ow,c.AW,c.MG,c.a9);n.Z=s},5548:function(e,n,r){r.d(n,{AM:function(){return x},Di:function(){return N},En:function(){return H},H4:function(){return c},HB:function(){return O},Kp:function(){return I},M8:function(){return W},N1:function(){return p},NC:function(){return j},NR:function(){return h},Nv:function(){return i},Nz:function(){return a},OH:function(){return D},PO:function(){return J},Pm:function(){return P},RR:function(){return A},Rm:function(){return o},Tj:function(){return _},Wd:function(){return f},Xs:function(){return T},Yv:function(){return q},ZS:function(){return R},Zy:function(){return F},b9:function(){return k},bk:function(){return d},dF:function(){return b},gp:function(){return Z},gw:function(){return l},iw:function(){return m},jD:function(){return z},kB:function(){return w},od:function(){return M},oe:function(){return E},oj:function(){return u},p8:function(){return g},qq:function(){return S},ry:function(){return B},uW:function(){return y},wG:function(){return C},xk:function(){return v},z6:function(){return s}});var t="https://dev.backend.shopdotapp.com/api/v1",a="".concat(t,"/auth/signup/"),o="".concat(t,"/auth/verification/send-mail"),c=("".concat(t,"/auth/verify"),"".concat(t,"/auth/signin")),s="".concat(t,"/auth/refresh-token"),i="".concat(t,"/auth/signout"),u=function(e){return"".concat(t,"/auth/user/").concat(e,"/change-password")},d=function(e){return"".concat(t,"/auth/user/").concat(e,"/reset-password")},l="".concat(t,"/auth/send-reset-link"),p="".concat(t,"/user/roles"),f="".concat(t,"/user/platform"),h=("".concat(t,"/platform/shopify-integration"),"".concat(t,"/auth/upload-image")),m=("".concat(t,"/user/retailer-profile"),"".concat(t,"/platform")),x="".concat(t,"/user/brand-profile"),g=function(e){return"".concat(t,"/user/brand-profile/").concat(e)},b="".concat(t,"/payment/create-brand-as-customer"),v="".concat(t,"/payment/customer/external-account"),k="".concat(t,"/payment/customer"),w="".concat(t,"/user/brand-shipping"),y="".concat(t,"/platform/shipping-times"),Z=function(e){return"".concat(t,"/shopify/sync-all-product?&user_id=").concat(e)},j=("".concat(t,"/shopify/sync-all-product"),"".concat(t,"/shopify/sync-product")),N="".concat(t,"/brand/setting/preferences"),S="".concat(t,"/brand/setting/notifications"),T="".concat(t,"/shopify/shopify-remove"),_="".concat(t,"/user/retailer-profile"),A="".concat(t,"/retailer/brands"),z="".concat(t,"/retailer/alert-notification"),I="".concat(t,"/general/brand-values"),R="".concat(t,"/brand/product/list"),B="".concat(t,"/brand/product/download"),C="".concat(t,"/brand/product/upload"),P="".concat(t,"/brand/product-tags"),q="".concat(t,"/brand/product/status"),F=function(e){return"".concat(t,"/brand/product/category/").concat(e)},D=function(e){return"".concat(t,"/brand/product/").concat(e)},E=function(e){return"".concat(t,"/brand/product/").concat(e)},H="".concat(t,"/platform/category"),O="".concat(t,"/platform/values"),W="".concat(t,"/brand/orders"),M=("".concat(t,"/order/details"),"".concat(t,"/general/countries")),J=function(e){return"".concat(t,"/general/countries/").concat(e,"/states")}},5665:function(e,n,r){r(2791);var t=r(5227),a=(r(9434),r(9085)),o=r(184);function c(e){var n=e.children,r=e.classNames,c=e.pageTitle;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"wrapper onbording",children:(0,o.jsx)("main",{children:(0,o.jsxs)("section",{children:[(0,o.jsx)(t.Z,{pageTitle:c}),(0,o.jsx)("div",{className:"ob-body",children:(0,o.jsx)("div",{className:r,children:n})})]})})}),(0,o.jsx)(a.Ix,{})]})}c.defaultProps={children:(0,o.jsx)("p",{children:"Shopdot"}),pageTitle:"Signin",classNames:"form-wrapper"},n.Z=c},1462:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var t=r(4165),a=r(5861),o=r(9439),c=r(2791),s=r(5665),i=r(2970),u=r(8648),d=r(7689);var l=r.p+"static/media/retailer.6ffb15c81c56f87e6bebf0f95d474e71.svg";var p=r.p+"static/media/brand.f5dfc369e5edd2d47730d9ebf454edff.svg",f=(r(4092),r(9434)),h=r(7489),m=r(9290),x=r(763),g=r(184);function b(){var e=(0,c.useState)(0),n=(0,o.Z)(e,2),r=n[0],b=n[1],v=(0,c.useState)(1),k=(0,o.Z)(v,2),w=k[0],y=k[1],Z=(0,c.useState)(""),j=(0,o.Z)(Z,2),N=j[0],S=j[1],T=(0,c.useState)(!1),_=(0,o.Z)(T,2),A=_[0],z=(_[1],(0,d.s0)()),I=(0,f.I0)(),R=(0,f.v9)(m.uy),B=(0,f.v9)(m.fR),C=function(e){1===e?b(1):(b(2),y(1))},P=function(e){y(1==e?1:2)},q=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I(B?(0,h.ru)({user_id:R.id,platform:1===w?"shopify":N},z):(0,h.$c)({user_id:R.id,role:1===r?"brand":"retailer"},z,(0,x.isEmpty)(N)?"shopify":N));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(s.Z,{pageTitle:"Let\u2019s Personalize Your Platform & Experience",children:(0,g.jsx)("form",{action:"#",className:"form",id:"",children:(0,g.jsx)("div",{className:"form-area",children:(0,g.jsxs)("div",{className:"form-group personalize",children:[(0,g.jsx)("p",{className:"p-text mb-0",children:"Please tell us more about you. You are a \u2026"}),(0,g.jsxs)("div",{className:"personalize_selection",children:[(0,g.jsxs)("div",{className:1==r?"personalized-selected pse_item pse_brand":"pse_item",onClick:function(){return C(1)},children:[(0,g.jsx)("img",{style:{marginTop:"2.6rem"},src:p}),(0,g.jsx)("h3",{children:"BRAND Supplier"}),(0,g.jsx)("p",{children:"I would like to use ShopDot to offer product listing content, on-demand inventory and drop-shipping to my retailers."})]}),(0,g.jsxs)("div",{className:2==r?"personalized-selected pse_item pse_retailer":"pse_item",onClick:function(){return C(2)},children:[(0,g.jsx)("img",{style:{marginTop:"2.6rem"},src:l}),(0,g.jsx)("h3",{children:"RETAILER"}),(0,g.jsx)("p",{children:"I would like to use ShopDot to tap into the product listing content, inventory and drop-shipping capabilities of my brand suppliers."})]})]}),r&&1===r&&2!==w?(0,g.jsx)("div",{className:"category-form-input integrate-area mt-5",children:(0,g.jsxs)("div",{className:"form-input",children:[(0,g.jsxs)("label",{htmlFor:"",className:"form-label text-navy mb-0",children:["How do you want to integrate?"," ",(0,g.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,g.jsx)("small",{className:"info-integrate",children:"As a Brand Supplier, ShopDot will sync your products to your retailers using this integration."}),(0,g.jsxs)("div",{className:"pe_radio select_info-integrate radiobox-group radio",children:[(0,g.jsxs)("label",{htmlFor:"radio-integrate",className:"radiobox",onClick:function(){return P(1)},children:[(0,g.jsx)("input",{type:"radio",name:"radio-filter",id:"radio-integrate",value:"1",checked:!0}),(0,g.jsx)("div",{className:"radiobox-text",children:(0,g.jsx)("span",{children:"Shopify"})})]}),(0,g.jsxs)("label",{htmlFor:"radio-integrate-one",className:"radiobox",onClick:function(){return P(2)},children:[(0,g.jsx)("input",{type:"radio",name:"radio-filter",id:"radio-integrate-one",value:"0"}),(0,g.jsx)("div",{className:"radiobox-text",children:(0,g.jsx)("span",{children:"Other"})})]})]})]})}):"",w&&2==w?(0,g.jsx)("div",{className:"integrate-area-input mt-5",children:(0,g.jsxs)("div",{className:"form-input",children:[(0,g.jsxs)("label",{htmlFor:"",className:"form-label text-navy",children:["How do you want to integrate?"," ",(0,g.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,g.jsx)("small",{className:"info-integrate",children:"As a Brand Supplier, ShopDot will sync your products to your retailers using this integration."}),(0,g.jsx)("div",{className:"form__field",children:(0,g.jsx)(i.Z,{type:"text",value:N,placeholder:"Name of the platform",onChange:function(e){S(e.target.value)},className:"form-control"})})]})}):"",w&&2!=w?(0,g.jsx)("div",{className:"mt-5",children:(0,g.jsx)(u.Z,{type:"button",className:"button w-100 ",disabled:0==r||A,onClick:q,children:"Next"})}):"",w&&2==w?(0,g.jsx)("div",{className:"mt-5",children:(0,g.jsxs)("div",{className:"fit-d-flex",children:[(0,g.jsx)(u.Z,{type:"button",className:"button w-50 button bordered cancel",disabled:A,onClick:function(){y(1)},children:"Back"}),(0,g.jsx)(u.Z,{type:"button",disabled:N.length<1||A,className:"button w-50 ",onClick:q,children:"Next"})]})}):""]})})})})})}},9731:function(e,n,r){var t=r(4165),a=r(5861),o=r(3263),c=r(5548),s=o.Z;s.interceptors.request.use(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.headers.Authorization){e.next=7;break}return e.next=3,localStorage.getItem("accessToken");case 3:r=e.sent,s.defaults.headers.common.Authorization=r?"Bearer ".concat(r):"",n.headers.Authorization="Bearer ".concat(r),n.maxRedirects=0;case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),(function(e){Promise.reject(e)})),s.interceptors.response.use(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.config.url!==c.H4&&n.config.url!==c.Nz){e.next=13;break}return r=n.data.data.access_token?n.data.data.access_token:"",a=n.data.data.refresh_token?n.data.data.refresh_token:"",s.defaults.headers.common.Authorization=r?"Bearer ".concat(r):"",e.prev=4,e.next=7,localStorage.setItem("accessToken",r);case 7:return e.next=9,localStorage.setItem("refreshToken",a);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(4);case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(n){return e.apply(this,arguments)}}());var i=[],u=!1;s.interceptors.response.use(void 0,function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.response||!n.response.config||n.response.config.url!==c.z6||401!=n.response.status){e.next=4;break}setTimeout((0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem("accessToken","");case 2:return e.next=4,localStorage.setItem("refreshToken","");case 4:case"end":return e.stop()}}),e)}))),2e3),e.next=19;break;case 4:if(!n.response||401!=n.response.status){e.next=11;break}return r=localStorage.getItem("refreshToken"),o={refresh_token:r},i.push(n.config),e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u||(u=!0,delete s.defaults.headers.common.Authorization,s.post(c.z6,o,{headers:{"content-type":"application/json"}}).then(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(o){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.defaults.headers.common.Authorization="Bearer ".concat(o.data.data.access_token),e.next=3,localStorage.setItem("accessToken",o.data.data.access_token);case 3:return e.next=5,localStorage.setItem("refreshToken",o.data.data.refresh_token);case 5:i.map(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(a,u){var d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i[u].headers.Authorization="Bearer ".concat(o.data.data.access_token),a.url!=c.Nv){e.next=8;break}return d=JSON.parse(a.data),e.next=5,localStorage.setItem("accessToken","");case 5:return e.next=7,localStorage.setItem("refreshToken","");case 7:a.data=JSON.stringify(d);case 8:s(a).then((function(e){return n(e)})).catch((function(e){r(e)}));case 9:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),u=!1,i=[];case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){if(setTimeout((0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem("accessToken","");case 2:return e.next=4,localStorage.setItem("refreshToken","");case 4:case"end":return e.stop()}}),e)}))),2e3),500!==e.response.status)return e})));case 1:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()));case 11:if(!(n.response&&n.response.data&&n.response.data.location)){e.next=15;break}window.location=n.response.data.location,e.next=19;break;case 15:if(!n.response||401!=n.response.status||904==n.response.data.code){e.next=18;break}e.next=19;break;case 18:return e.abrupt("return",Promise.reject(n));case 19:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.Z=s}}]);
//# sourceMappingURL=1462.1538e177.chunk.js.map