"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[3286],{39454:function(e,n,t){t(72791);t.p},75808:function(e,n,t){t(72791);n.Z=t.p+"static/media/tick.1d4e83f4468904bfeb0b86d66e263460.svg"},91097:function(e,n,t){t.d(n,{J:function(){return l}});var i,o,s=t(30168),r=t(91191),a=t(11087),c=t(11011),l=(r.default.a(i||(i=(0,s.Z)(["\n  color: ",";\n  font-family: 'Mulish', sans-serif;\n  font-size: 16px;\n  text-decoration: none;\n\n  &.sm {\n    font-size: 14px;\n    letter-spacing: -0.02em;\n  }\n\n  &[disabled] {\n    pointer-events: none;\n  }\n\n  &:hover {\n    color: ",";\n  }\n"])),c.J0,c.J0),(0,r.default)(a.rU)(o||(o=(0,s.Z)(["\n  color: ",";\n  font-family: 'Mulish', sans-serif;\n  // font-size: 14px;\n  // text-decoration: none;\n  outline: 0;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  text-align: center;\n  border: none;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n  &:hover {\n    color: ",";\n    opacity: 0.8;\n  }\n"])),c.J0,c.J0))},83286:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var i=t(1413),o=t(74165),s=t(15861),r=t(29439),a=t(72791);t(39454);t.p,t(17107),t(2299),t(18882);var c=t(22114),l=t(78648),d=t(75808);var u=t.p+"static/media/tick-green.75434920035d17643cc506c83c586c38.svg",h=t(91097),p=t(80184);function f(e){var n=e.isActive,t=e.isCompleted,i=e.text1,o=e.linkText,s=e.text2,r=e.btnText,a=e.openGuide,c=e.storeName,f=e.isStoreNameValid,m=e.handleConnect,x=e.guideLink,b=e.handleStore,v=e.shopifyConnected,g=e.btnCallback,y=e.activeStep;return(0,p.jsxs)("div",{className:"confirm-setting-area ".concat(n||t?"":"light-item"),children:[(0,p.jsxs)("div",{className:"cs-item ".concat(n||t?"":"pointer-none"),children:[t?(0,p.jsx)("img",{src:u}):(0,p.jsx)("img",{src:d.Z}),(0,p.jsxs)("span",{href:"",className:"cs-label",children:[i," \xa0",(0,p.jsx)(h.J,{className:"ob-link",to:"/brand/setting/",children:o}),s]}),r?(0,p.jsx)("button",{type:"button",onClick:g,className:"button button-blue",children:y>3?"Synced":r}):(0,p.jsx)("div",{}),(0,p.jsx)("a",{href:x,target:"_blank",className:"cs-link",children:"Setup Guide"})]}),a&&(0,p.jsxs)("div",{className:"integration_info",children:[(0,p.jsxs)("div",{className:"form-area form-input connect-shopify",children:[(0,p.jsx)("input",{type:"text",className:"form-control mb-0",id:"",placeholder:"",onChange:b}),(0,p.jsx)("span",{className:"input-extension",children:".myshopify.com"}),(0,p.jsx)(l.Z,{className:"button p-0 connect_shopify",type:"button",disabled:!(!f&&c.length>0),id:"button-addon2",onClick:function(){f||m(2)},children:"Connect"})]}),(0,p.jsx)("small",{children:"Enter the name of your store without myshopify.com"}),f&&(0,p.jsx)("div",{className:"invalid-feedback mb-0",children:"Please only enter the name of your store"})]}),v&&(0,p.jsx)("div",{className:"input-group form-input",children:(0,p.jsxs)("div",{className:"alert alert-success",role:"alert",children:[c," is connected"]})})]})}var m=t(763),x=t(59434),b=t(9290),v=t(84933),g=t(7423),y=[{text1:"Configure your mandatory",linkText:"Settings",guideLink:"https://intercom.help/shopdot/en/articles/6549401-how-do-i-confirm-my-settings-and-preferences"},{text1:"Connect your Shopify store",guideLink:"https://intercom.help/shopdot/en/articles/6549400-how-do-i-connect-my-shopify-store-to-shopdot"},{text1:"Add ",linkText:"Shopify Products",text2:" to ShopDot",btnText:"Sync Products",guideLink:"https://intercom.help/shopdot/en/articles/6549402-how-do-i-add-shopify-products-to-shopdot"},{text1:"Activate your ",linkText:"Settings",guideLink:"https://intercom.help/shopdot/en/articles/6549404-how-do-i-activate-a-product"}];function j(){var e=(0,x.v9)(b.uy),n=(0,x.v9)(v._e),t=(0,x.v9)(v.Sn),l=(0,x.I0)(),d=(0,a.useState)(""),u=(0,r.Z)(d,2),h=u[0],j=u[1],k=(0,a.useState)(!1),S=(0,r.Z)(k,2),N=(S[0],S[1],(0,a.useState)([])),Z=(0,r.Z)(N,2),_=Z[0],C=Z[1],w=(0,a.useState)(1),P=(0,r.Z)(w,2),J=P[0],L=P[1],T=(0,a.useState)("8019618038038"),E=(0,r.Z)(T,2),G=(E[0],E[1],(0,a.useState)(!1)),z=(0,r.Z)(G,2),A=z[0],V=z[1],D=(0,a.useState)(!1),M=(0,r.Z)(D,2),R=M[0],B=M[1],F=(0,a.useState)(!1),I=(0,r.Z)(F,2),K=(I[0],I[1]),U=(0,a.useState)(!1),q=(0,r.Z)(U,2),H=(q[0],q[1],(n||{}).integration,t||{}),O=H.brand_profile,Q=H.brandPreference,W=H.shippingRate,X=H.shipping_charges,Y=H.shop_detail,$=H.user_detail,ee=H.payment_detail,ne=X||{},te=(ne.base_shipping_charge,ne.incremental_shipping_charge,W||{}),ie=te.incremental_fee,oe=te.shipping_cost,se=Y||{},re=se.is_active,ae=se.shop;(0,a.useEffect)((function(){l((0,g.mo)(e.id))}),[]),(0,a.useEffect)((function(){ce()}),[n]);var ce=function(){C([1]),L(1),O&&Q&&W&&ie&&oe&&ee&&(V(!0),C([1]),L(2)),re&&ae&&(A&&C([1,2]),B(!0),j(ae)),null!==$&&void 0!==$&&$.is_initial_sync_done&&(A&&R&&C([1,2,3]),K(!0),L(4))},le=function(e){j(e.target.value)},de=function(){var n=(0,s.Z)((0,o.Z)().mark((function n(){var t,i;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l((0,g.KG)(e.id));case 2:return t=n.sent,n.next=5,l((0,g.EV)(e.id));case 5:i=n.sent,Promise.all([t,i]).then((function(e){C([1,2,3]),L(4)})).catch((function(e){console.log(e)}));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ue=function(){l((0,g.B6)({name:"".concat(h,".myshopify.com"),user_id:e.id}))};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"wrapper onbording",children:[(0,p.jsx)(c.Z,{}),(0,p.jsx)("main",{children:(0,p.jsxs)("section",{children:[(0,p.jsx)("div",{className:"ob-head oh-setting",children:(0,p.jsx)("h1",{children:"Getting Started"})}),(0,p.jsx)("div",{className:"ob-body",children:(0,p.jsx)("div",{className:"form-wrapper fw-wide",children:(0,p.jsx)("form",{className:"form",id:"",children:(0,p.jsx)("div",{className:"w-100 form-area",children:(0,m.map)(y,(function(e,n){var t=n+1,o=_.includes(t);return(0,a.createElement)(f,(0,i.Z)((0,i.Z)({},e),{},{key:t,isCompleted:o,isActive:t==J,openGuide:!re&&2==t&&2==J,handleStore:le,shopifyConnected:2==t&&_.includes(2),activeStep:J,handleConnect:ue,storeName:h,btnCallback:de}))}))})})})})]})})]})})}},84933:function(e,n,t){t.d(n,{Rp:function(){return o},Sn:function(){return i},ZL:function(){return s},_e:function(){return r}});var i=function(e){return e.brandProfile.brandProfileDetails},o=function(e){return e.brandProfile.brandCategory},s=function(e){return e.brandProfile.brandValues},r=function(e){return e.brandProfile.profileCompleted}}}]);
//# sourceMappingURL=3286.48aac6f4.chunk.js.map