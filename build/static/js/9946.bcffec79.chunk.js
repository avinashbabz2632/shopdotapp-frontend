"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[9946],{6632:function(e,r,n){n(2791);r.Z=n.p+"static/media/icon-chevron--down.077a24e37e60b8b0ac3e1a18bdd096e9.svg"},8474:function(e,r,n){n(2791);r.Z=n.p+"static/media/icon-search.4b795e4aaacbad3fcbabd1006974ab22.svg"},5548:function(e,r,n){n.d(r,{AM:function(){return x},Di:function(){return y},En:function(){return D},H4:function(){return c},HB:function(){return U},M8:function(){return B},N1:function(){return p},NC:function(){return _},NR:function(){return m},Nv:function(){return i},Nz:function(){return a},OH:function(){return P},PO:function(){return L},Pm:function(){return I},Rm:function(){return s},Wd:function(){return h},Xs:function(){return S},Yv:function(){return O},ZS:function(){return T},Zy:function(){return z},b9:function(){return g},bk:function(){return d},dF:function(){return j},gp:function(){return w},gw:function(){return l},iw:function(){return f},kB:function(){return N},od:function(){return H},oe:function(){return R},oj:function(){return u},p8:function(){return v},qq:function(){return Z},ry:function(){return A},uW:function(){return k},wG:function(){return C},xk:function(){return b},z6:function(){return o}});var t="https://dev.backend.shopdotapp.com/api/v1",a="".concat(t,"/auth/signup/"),s="".concat(t,"/auth/verification/send-mail"),c=("".concat(t,"/auth/verify"),"".concat(t,"/auth/signin")),o="".concat(t,"/auth/refresh-token"),i="".concat(t,"/auth/signout"),u=function(e){return"".concat(t,"/auth/user/").concat(e,"/change-password")},d=function(e){return"".concat(t,"/auth/user/").concat(e,"/reset-password")},l="".concat(t,"/auth/send-reset-link"),p="".concat(t,"/user/roles"),h="".concat(t,"/user/platform"),m=("".concat(t,"/platform/shopify-integration"),"".concat(t,"/auth/upload-image")),f=("".concat(t,"/user/retailer-profile"),"".concat(t,"/platform")),x="".concat(t,"/user/brand-profile"),v=function(e){return"".concat(t,"/user/brand-profile/").concat(e)},j="".concat(t,"/payment/create-brand-as-customer"),b="".concat(t,"/payment/customer/external-account"),g="".concat(t,"/payment/customer"),N="".concat(t,"/user/brand-shipping"),k="".concat(t,"/platform/shipping-times"),w=function(e){return"".concat(t,"/shopify/sync-all-product?&user_id=").concat(e)},_=("".concat(t,"/shopify/sync-all-product"),"".concat(t,"/shopify/sync-product")),y="".concat(t,"/brand/setting/preferences"),Z="".concat(t,"/brand/setting/notifications"),S="".concat(t,"/shopify/shopify-remove"),T=("".concat(t,"/user/retailer-profile"),"".concat(t,"/brand/product/list")),A="".concat(t,"/brand/product/download"),C="".concat(t,"/brand/product/upload"),I="".concat(t,"/brand/product-tags"),O="".concat(t,"/brand/product/status"),z=function(e){return"".concat(t,"/brand/product/category/").concat(e)},P=function(e){return"".concat(t,"/brand/product/").concat(e)},R=function(e){return"".concat(t,"/brand/product/").concat(e)},D="".concat(t,"/platform/category"),U="".concat(t,"/platform/values"),B="".concat(t,"/brand/orders"),H=("".concat(t,"/order/details"),"".concat(t,"/countries")),L=function(e){return"".concat(t,"/countries/").concat(e,"/states")}},9946:function(e,r,n){n.d(r,{Z:function(){return P}});var t=n(4165),a=n(5861),s=n(9439),c=n(2791),o=n(7689),i=n(1087),u=n(4890),d=n(8474),l=n(6632);var p=n.p+"static/media/icon-mail.97626db0c56a983db8f8f6376b28c539.svg";var h=n.p+"static/media/icon-notification.d46dc32e2194381a579f76ca2793f9b4.svg",m=n(7948),f=n.n(m),x=n(3775),v=n(9434),j=n(9290),b=n(184);function g(e){var r=(0,c.useState)(""),n=(0,s.Z)(r,2),t=n[0],a=n[1],o=(0,v.v9)(j.uy),i=function(e){if("email"==e)navigator.clipboard.writeText(t),a("");else{var r=document.getElementsByClassName("emailTextItem")[0].innerText;navigator.clipboard.writeText(r)}};return(0,b.jsx)(f(),{ariaHideApp:!1,isOpen:e.modalIsOpen,onRequestClose:e.opencloseRetailerModal,children:(0,b.jsx)("div",{className:"popup popup-invite active",children:(0,b.jsx)("div",{className:"popup_wrapper",children:(0,b.jsxs)("div",{className:"popup_content",children:[(0,b.jsx)("div",{className:"popup-close",onClick:e.opencloseRetailerModal,children:(0,b.jsx)("img",{className:"icon",src:x.Z})}),(0,b.jsx)("div",{className:"primary__form form form_brands",children:(0,b.jsxs)("div",{className:"form_brands-right",children:[(0,b.jsx)("h3",{children:"Share this referral link with your retailers."}),(0,b.jsxs)("div",{className:"copyLinkArea",children:[(0,b.jsx)("input",{type:"email",name:"",id:"",value:function(){var e=(o||{}).referal_url;return e||""}(),placeholder:"shopdotapp.com/signup/retaileshopxyz",onChange:function(e){return a(e.target.value)}}),(0,b.jsx)("button",{type:"button",className:"button",onClick:function(){return i("email")},children:"Copy Link"})]}),(0,b.jsxs)("div",{className:"emailTemplateArea",children:[(0,b.jsx)("h4",{children:"Email Template"}),(0,b.jsx)("div",{className:"emailText",children:(0,b.jsxs)("div",{className:"emailTextItem",children:["Hi, We have partnered with ShopDot, a new platform that enables brand suppliers to partner with their retailers in new ways. Through the ShopDot platform, you\u2019re able to easily share product inventory and provide drop-shipping capabilities to your retailers. Helping your retailers never lose a sale and empowering them to delight customers with the right product at the right moment.",(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),"ShopDot integrates with your Shopify store so real-time inventory and product content upload is automated. Plus, any orders placed on ShopDot go right back to your Shopify store to follow your normal fulfillment process.",(0,b.jsx)("br",{}),(0,b.jsx)("h5",{children:"Benefits for Retailers:"}),(0,b.jsx)("b",{children:"Never lose a sale!"})," Cash and space constraints make it hard for retailers to meet the product demands of their customers. With ShopDot, retailers can tap into your inventory and leverage your drop-shipping capabilities to provide product immediacy and selection to their customers."]})}),(0,b.jsx)("div",{className:"action",children:(0,b.jsx)("button",{className:"button",onClick:function(){return i("text")},children:"Copy Text"})})]})]})})]})})})})}var N=c.memo(g),k=(n(7107),n(8882),n(2299),n(390)),w=n(3653),_=n(3541),y=n(5821),Z=n(9931),S=n(6719),T=n(980),A=n(8098),C=n(3537),I=n(1319),O=n(9532);function z(e){var r=(0,o.TH)(),n=(0,c.useState)(!1),m=(0,s.Z)(n,2),f=m[0],x=m[1],g=(0,c.useState)(1),z=(0,s.Z)(g,2),P=(z[0],z[1]),R=(0,c.useState)(null),D=(0,s.Z)(R,2),U=D[0],B=D[1],H=(0,k.lX)(),L=(0,v.v9)(j.uy),M=(0,v.I0)(),q=(0,o.s0)(),E=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={user_id:L.id},e.next=3,w.Q.signOut({fromData:r});case 3:e.sent&&(M((0,_.ni)()),M((0,_.jG)()),M((0,y.UN)()),M((0,Z.MB)()),M((0,S.ef)()),M((0,T.j8)()),M((0,A._K)()),M((0,C.Tz)()),M((0,I.bj)()),M((0,O.Gz)()),M({type:"LOGOUT"}),H.replace("/login"),q("/login"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){P(e.tab),B(e.subTabs)}),[]);var G=(0,c.useCallback)((function(){x(!f)}),[f]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("header",{className:"header_main mp-header",children:[(0,b.jsx)("div",{className:"header_block header_block-top mp-header_block-top",children:(0,b.jsxs)("div",{className:"header_container",children:[(0,b.jsx)("div",{className:"header_logo",children:(0,b.jsx)(i.OL,{to:"/",className:"logo",children:(0,b.jsx)("picture",{children:(0,b.jsx)("img",{src:u.Z,alt:"logo"})})})}),(0,b.jsxs)("div",{className:"header_menu-wrap",children:[(0,b.jsx)("input",{type:"checkbox",name:"",id:"",className:""}),(0,b.jsxs)("div",{className:"hamburger-lines",children:[(0,b.jsx)("span",{className:"line line1"}),(0,b.jsx)("span",{className:"line line2"}),(0,b.jsx)("span",{className:"line line3"})]}),(0,b.jsxs)("ul",{className:"header_menu menu",children:[(0,b.jsx)("li",{className:"menu_item",children:"/brand-onboarding"===(null===r||void 0===r?void 0:r.pathname)?(0,b.jsx)(i.OL,{to:"/brand-onboarding",className:function(e){var r=e.isActive;return"".concat(r?"active":""," menu_link")},children:"Getting Started"}):(0,b.jsx)(i.OL,{to:"/brand/setting/",className:function(e){var r=e.isActive;return"".concat(r?"active":""," menu_link")},children:"Dashboard"})}),(0,b.jsx)("li",{className:"menu_item",children:(0,b.jsx)(i.OL,{to:"/brand/products",className:function(e){var r=e.isActive;return"".concat(r?"active":""," menu_link")},children:"Products"})}),(0,b.jsx)("li",{className:"menu_item",children:(0,b.jsxs)("div",{className:"dropdown",children:[(0,b.jsx)("div",{className:"dropdown_header",children:(0,b.jsx)("div",{className:"dropdown_header-chevron",children:(0,b.jsx)(i.OL,{to:"/brand/retailer",className:function(e){var r=e.isActive;return"".concat(r?"active":""," menu_link")},children:"Retailers"})})}),(0,b.jsx)("div",{className:"dropdown_body",children:(0,b.jsx)("div",{className:"dropdown_inner styled_drop_down",children:(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{className:"sublink ".concat(1==U?"":"link"),onClick:function(){return e.changeSubTab("connect")},children:(0,b.jsx)(i.rU,{to:"/brand/retailer",children:"Connected Retailers"})}),(0,b.jsx)("li",{className:"sublink ".concat(2==U?"active":"link"),onClick:function(){return e.changeSubTab("request")},children:(0,b.jsx)(i.rU,{to:"/brand/retailer",children:"Requests for Access"})})]})})})]})}),(0,b.jsx)("li",{className:"menu_item",children:(0,b.jsx)(i.OL,{to:"/brand/orders",className:function(e){var r=e.isActive;return"".concat(r?"active":""," menu_link")},children:"Orders"})}),(0,b.jsx)("li",{className:"menu_item",children:(0,b.jsxs)("div",{className:"dropdown",children:[(0,b.jsx)("div",{className:"dropdown_header",children:(0,b.jsx)("div",{className:"dropdown_header-chevron",children:(0,b.jsx)(i.OL,{to:"/brand/reports/payout",className:function(e){var r=e.isActive;return"".concat(r?"active":""," menu_link")},children:"Reports"})})}),(0,b.jsx)("div",{className:"dropdown_body",children:(0,b.jsx)("div",{className:"dropdown_inner styled_drop_down",children:(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)(i.rU,{to:"/brand/reports/payout",children:"Payout"})}),(0,b.jsx)("li",{children:(0,b.jsx)(i.rU,{to:"",children:"Account"})}),(0,b.jsx)("li",{children:(0,b.jsx)(i.rU,{to:"",children:"Orders"})}),(0,b.jsx)("li",{children:(0,b.jsx)(i.rU,{to:"",children:"Retailers"})}),(0,b.jsx)("li",{children:(0,b.jsx)(i.rU,{to:"",children:"Products"})})]})})})]})})]})]}),(0,b.jsx)("div",{className:"header_search search",children:(0,b.jsxs)("form",{className:"search_form",children:[(0,b.jsx)("div",{className:"search_form-input",children:(0,b.jsx)("input",{type:"text",placeholder:"Search\u2026"})}),(0,b.jsx)("button",{type:"cancel",className:"search_form-button",children:(0,b.jsx)("span",{className:"icon",children:(0,b.jsx)("img",{src:d.Z,alt:""})})}),(0,b.jsx)("button",{type:"submit"}),(0,b.jsx)("span",{className:"icon",children:(0,b.jsx)("img",{src:d.Z,alt:""})})]})}),(0,b.jsxs)("div",{className:"header_actions",children:[(0,b.jsx)("div",{className:"header_usermenu",children:(0,b.jsxs)("div",{className:"dropdown",children:[(0,b.jsxs)("div",{className:"dropdown_header",children:[(0,b.jsxs)("div",{className:"dropdown_header-text",children:["Hi,"," ",(0,b.jsxs)("span",{className:"username",children:[" ",null!==L&&void 0!==L&&L.first_name?"".concat(null===L||void 0===L?void 0:L.first_name):""]})]}),(0,b.jsx)("div",{className:"dropdown_header-chevron",children:(0,b.jsx)("span",{className:"icon",children:(0,b.jsx)("img",{src:l.Z,alt:""})})})]}),(0,b.jsx)("div",{className:"dropdown_body",children:(0,b.jsx)("div",{className:"dropdown_inner styled_drop_down",children:(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)(i.rU,{to:"/brand/setting",children:"Settings"})}),(0,b.jsx)("li",{children:(0,b.jsx)(i.rU,{to:"/",children:"Help Center"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{children:(0,b.jsx)("span",{onClick:E,children:"Sign out"})})})]})})})]})}),(0,b.jsxs)("button",{className:"header_action header_action-mails",children:[(0,b.jsx)("span",{className:"icon",children:(0,b.jsx)("img",{src:p,alt:""})}),(0,b.jsx)("div",{className:"text visible",children:"5"})]}),(0,b.jsxs)("button",{className:"header_action header_action-notifications",children:[(0,b.jsxs)("div",{className:"dropdown",children:[(0,b.jsx)("div",{className:"dropdown_header",children:(0,b.jsx)("span",{className:"icon",children:(0,b.jsx)("img",{src:h,alt:""})})}),(0,b.jsx)("div",{className:"dropdown_body",children:(0,b.jsx)("div",{className:"dropdown_inner styled_drop_down",children:(0,b.jsxs)("ul",{children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("span",{children:"Summer Activities Chips for Kids"})," ",(0,b.jsx)("br",{}),"updated Dec.15, 2021, 07:56 PM"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("span",{children:"Summer Activities Chips for Kids"})," ",(0,b.jsx)("br",{}),"updated Dec.15, 2021, 07:56 PM"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("span",{children:"Summer Activities Chips for Kids"})," ",(0,b.jsx)("br",{}),"updated Dec.15, 2021, 07:56 PM"]})]})})})]}),(0,b.jsx)("div",{className:"text visible",children:"1"})]}),(0,b.jsx)("div",{className:"header_action header_action-invite",children:(0,b.jsx)("button",{className:"button invite-retailer",onClick:function(){return G()},children:"Invite Retailers"})})]})]})}),(0,b.jsx)("div",{className:"header_block header_block-bottom mp-header_block-bottom"})]}),(0,b.jsx)(N,{modalIsOpen:f,opencloseRetailerModal:G}),(0,b.jsx)(o.j3,{})]})}var P=c.memo(z)},3653:function(e,r,n){n.d(r,{Q:function(){return d}});var t=n(4165),a=n(5861),s=n(3144),c=n(5671),o=n(9085),i=n(9731),u=n(5548),d=(0,s.Z)((function e(){(0,c.Z)(this,e)}));d.signOut=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.fromData,e.prev=1,e.next=4,i.Z.post(u.Nv,n);case 4:if(!(a=e.sent)||!a.data||200!=a.data.code){e.next=9;break}return localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),e.abrupt("return",!0);case 9:return o.Am.error("Something went worng"),e.abrupt("return",!1);case 13:return e.prev=13,e.t0=e.catch(1),o.Am.error(e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.errors?e.t0.response.data.errors:"Something went worng"),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(r){return e.apply(this,arguments)}}(),d.forgotEmailVarification=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.email,e.prev=1,e.next=4,i.Z.post(u.gw,{email:n});case 4:if(!(a=e.sent)||!a.data||200!=a.data.code){e.next=7;break}return e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 10:return e.prev=10,e.t0=e.catch(1),o.Am.error(e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.errors?e.t0.response.data.errors:"Something went worng"),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r){return e.apply(this,arguments)}}(),d.changePassword=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a,s,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.password,a=r.conformPassword,s=r.userId,e.prev=1,e.next=4,i.Z.post((0,u.bk)(s),{password:n,confirm_password:a});case 4:if(!(c=e.sent)||!c.data||200!=c.data.code){e.next=7;break}return e.abrupt("return",!0);case 7:return o.Am.error("Something went wrong"),e.abrupt("return",!1);case 11:return e.prev=11,e.t0=e.catch(1),o.Am.error(e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.errors?e.t0.response.data.errors:"Something went worng"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(r){return e.apply(this,arguments)}}()},9731:function(e,r,n){var t=n(4165),a=n(5861),s=n(3263),c=n(5548),o=s.Z;o.interceptors.request.use(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.headers.Authorization){e.next=7;break}return e.next=3,localStorage.getItem("accessToken");case 3:n=e.sent,o.defaults.headers.common.Authorization=n?"Bearer ".concat(n):"",r.headers.Authorization="Bearer ".concat(n),r.maxRedirects=0;case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),(function(e){Promise.reject(e)})),o.interceptors.response.use(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.config.url!==c.H4&&r.config.url!==c.Nz){e.next=13;break}return n=r.data.data.access_token?r.data.data.access_token:"",a=r.data.data.refresh_token?r.data.data.refresh_token:"",o.defaults.headers.common.Authorization=n?"Bearer ".concat(n):"",e.prev=4,e.next=7,localStorage.setItem("accessToken",n);case 7:return e.next=9,localStorage.setItem("refreshToken",a);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(4);case 13:return e.abrupt("return",r);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(r){return e.apply(this,arguments)}}());var i=[],u=!1;o.interceptors.response.use(void 0,function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.response||!r.response.config||r.response.config.url!==c.z6||401!=r.response.status){e.next=4;break}setTimeout((0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem("accessToken","");case 2:return e.next=4,localStorage.setItem("refreshToken","");case 4:case"end":return e.stop()}}),e)}))),2e3),e.next=19;break;case 4:if(!r.response||401!=r.response.status){e.next=11;break}return n=localStorage.getItem("refreshToken"),s={refresh_token:n},i.push(r.config),e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r,n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u||(u=!0,delete o.defaults.headers.common.Authorization,o.post(c.z6,s,{headers:{"content-type":"application/json"}}).then(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(s){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.defaults.headers.common.Authorization="Bearer ".concat(s.data.data.access_token),e.next=3,localStorage.setItem("accessToken",s.data.data.access_token);case 3:return e.next=5,localStorage.setItem("refreshToken",s.data.data.refresh_token);case 5:i.map(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(a,u){var d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i[u].headers.Authorization="Bearer ".concat(s.data.data.access_token),a.url!=c.Nv){e.next=8;break}return d=JSON.parse(a.data),e.next=5,localStorage.setItem("accessToken","");case 5:return e.next=7,localStorage.setItem("refreshToken","");case 7:a.data=JSON.stringify(d);case 8:o(a).then((function(e){return r(e)})).catch((function(e){n(e)}));case 9:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),u=!1,i=[];case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()).catch((function(e){if(setTimeout((0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem("accessToken","");case 2:return e.next=4,localStorage.setItem("refreshToken","");case 4:case"end":return e.stop()}}),e)}))),2e3),500!==e.response.status)return e})));case 1:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()));case 11:if(!(r.response&&r.response.data&&r.response.data.location)){e.next=15;break}window.location=r.response.data.location,e.next=19;break;case 15:if(!r.response||401!=r.response.status||904==r.response.data.code){e.next=18;break}e.next=19;break;case 18:return e.abrupt("return",Promise.reject(r));case 19:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),r.Z=o},8882:function(){},7107:function(){}}]);
//# sourceMappingURL=9946.bcffec79.chunk.js.map