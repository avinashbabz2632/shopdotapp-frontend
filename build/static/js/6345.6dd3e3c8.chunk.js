"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[6345],{2970:function(e,r,n){var t,a=n(168),o=n(4313),s=n(1011),c=o.ZP.input(t||(t=(0,a.Z)(["\n    // display: flex;\n    // align-items: center;\n    // align-content: center;\n    // z-index: 0;\n    // -webkit-appearance: none;\n    // appearance: none;\n    // width: 100%;\n    // box-sizing: border-box;\n    // font-family: ",";\n    // font-size: ",";\n    // font-weight: 400;\n    // border: 0.1rem solid ",";\n    // border-radius: ",";\n    // padding: ",";\n    // height: ",";\n    // outline: none;\n    // background-color: ",";\n    // transition: all "," ease;\n    // caret-color: ",";\n    //\n    // &::place-holder {\n    //     color: ",";\n    //     opacity: 0.64;\n    // }\n    //\n    // &.invalid {\n    //     border-color: ",";\n    //     background-color: ",";\n    // }\n    //\n    // &:focus {\n    //     border-color: ",";\n    //     background-color: ",";\n    // }\n    //\n    // &:focus:required:invalid {\n    //     border-color: ",";\n    //     background-color: ",";\n    // }\n    //\n    // &:required:valid {\n    //     border-color: var(--orange-tint-10);\n    //     background-color: var(--white);\n    // }\n    //\n    // &.valid {\n    //     border-color: ",";\n    //     background-color: ",";\n    // }\n\n    background: #fffcf9;\n    border: 1px solid #f3e0d2;\n    border-radius: 4px;\n    height: 4rem;\n    padding: 1rem 1.2rem;\n    display: block;\n    width: 100%;\n    margin-top: 0.6rem;\n    appearance: none;\n    box-sizing: border-box;\n    font-family: 'Mulish', sans-serif;\n    outline: none;\n\n    &.invalid {\n        border-color: #eb5757;\n    }\n"])),s.IN,s.dA,s.cb,s.xM,s.nf,s.ZO,s.sE,s.rY,s.J0,s.ZR,s.ow,s.AW,s.ow,s.AW,s.ow,s.AW,s.MG,s.a9);r.Z=c},5548:function(e,r,n){n.d(r,{AM:function(){return w},Di:function(){return S},En:function(){return P},H4:function(){return s},HB:function(){return A},M8:function(){return T},N1:function(){return f},NR:function(){return m},Nv:function(){return u},Nz:function(){return a},PO:function(){return z},Rm:function(){return o},Wd:function(){return l},Xs:function(){return N},ZS:function(){return _},b9:function(){return b},bk:function(){return d},dF:function(){return x},ee:function(){return y},gw:function(){return p},iw:function(){return h},kB:function(){return k},od:function(){return I},oj:function(){return i},p8:function(){return g},qq:function(){return j},uW:function(){return Z},xk:function(){return v},z6:function(){return c}});var t="https://dev.backend.shopdotapp.com/api/v1",a="".concat(t,"/auth/signup/"),o="".concat(t,"/auth/verification/send-mail"),s=("".concat(t,"/auth/verify"),"".concat(t,"/auth/signin")),c="".concat(t,"/auth/refresh-token"),u="".concat(t,"/auth/signout"),i=function(e){return"".concat(t,"/auth/user/").concat(e,"/change-password")},d=function(e){return"".concat(t,"/auth/user/").concat(e,"/reset-password")},p="".concat(t,"/auth/send-reset-link"),f="".concat(t,"/user/roles"),l="".concat(t,"/user/platform"),m=("".concat(t,"/platform/shopify-integration"),"".concat(t,"/auth/upload-image")),h=("".concat(t,"/user/retailer-profile"),"".concat(t,"/platform")),w="".concat(t,"/user/brand-profile"),g=function(e){return"".concat(t,"/user/brand-profile/").concat(e)},x="".concat(t,"/payment/create-brand-as-customer"),v="".concat(t,"/payment/customer/external-account"),b="".concat(t,"/payment/customer"),k="".concat(t,"/user/brand-shipping"),Z="".concat(t,"/platform/shipping-times"),y="".concat(t,"/shopify/sync-all-product"),S="".concat(t,"/brand/setting/preferences"),j="".concat(t,"/brand/setting/notifications"),N="".concat(t,"/shopify/shopify-remove"),_=("".concat(t,"/user/retailer-profile"),"".concat(t,"/brand/product/list")),P="".concat(t,"/platform/category"),A="".concat(t,"/platform/values"),T="".concat(t,"/brand/orders"),I=("".concat(t,"/order/details"),"".concat(t,"/countries")),z=function(e){return"".concat(t,"/countries/").concat(e,"/states")}},6345:function(e,r,n){n.r(r);var t=n(1413),a=n(4165),o=n(5861),s=n(9439),c=n(2791),u=n(1134),i=n(4695),d=n(2797),p=n(1676),f=n(6650),l=n(2970),m=n(8648),h=n(3653),w=n(9434),g=n(9290),x=n(9085),v=n(7689),b=(n(2631),n(184)),k=d.Ry().shape({password:d.Z_().required("Password is required."),confirmPassword:d.Z_().oneOf([d.iH("password"),null],"Passwords must match.").required("Password confirm is required.")}).required();r.default=function(){var e,r,n=(0,c.useState)(!0),d=(0,s.Z)(n,2),Z=d[0],y=d[1],S=(0,c.useState)(!0),j=(0,s.Z)(S,2),N=j[0],_=j[1],P=(0,w.v9)(g.uy),A=(0,v.s0)(),T=(0,u.cI)({resolver:(0,i.X)(k)}),I=T.register,z=T.handleSubmit,q=(T.reset,T.formState.errors),C=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Q.changePassword(r,P.id);case 2:e.sent?A("/reset-password-success"):x.Am.error("Something went wrong");case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p.Z,{pageTitle:"Create New Password"}),(0,b.jsxs)(f.Z,{children:[(0,b.jsx)("div",{className:"info-window",children:(0,b.jsx)("div",{className:"info-window__text",children:(0,b.jsx)("p",{children:"You can now create a new password."})})}),(0,b.jsxs)("form",{onSubmit:z(C),className:"sign__form form",children:[(0,b.jsxs)("div",{className:"form__field form__field--floating-label",children:[(0,b.jsx)(l.Z,(0,t.Z)((0,t.Z)({className:"password",type:Z?"password":"text",name:"password"},I("password",{required:!0})),{},{placeholder:"Create password"})),(0,b.jsx)("label",{children:"Create new password"}),(0,b.jsxs)("div",{className:"password-message",children:["Password is ",(0,b.jsx)("span",{children:"strong!"})]}),(0,b.jsx)("span",{className:"password-show ".concat(Z?"":"active"),onClick:function(){return y(!Z)}}),q.password&&(0,b.jsx)("span",{className:"error-text",children:null===(e=q.password)||void 0===e?void 0:e.message})]}),(0,b.jsxs)("div",{className:"form__field form__field--floating-label",children:[(0,b.jsx)(l.Z,(0,t.Z)((0,t.Z)({className:"password",name:"confirmPassword"},I("confirmPassword",{required:!0})),{},{type:N?"password":"text",placeholder:"Create password"})),(0,b.jsx)("label",{children:"Repeat password"}),(0,b.jsx)("div",{className:"password-message",children:"Password matches!"}),(0,b.jsx)("span",{className:"password-show ".concat(N?"":"active"),onClick:function(){return _(!N)}}),q.confirmPassword&&(0,b.jsx)("span",{className:"error-text",children:null===(r=q.confirmPassword)||void 0===r?void 0:r.message})]}),(0,b.jsx)("div",{className:"form__field buttons",children:(0,b.jsx)(m.Z,{type:"submit",className:"button mt-5",children:"Create"})})]})]})]})}},3653:function(e,r,n){n.d(r,{Q:function(){return d}});var t=n(4165),a=n(5861),o=n(3144),s=n(5671),c=n(9085),u=n(9731),i=n(5548),d=(0,o.Z)((function e(){(0,s.Z)(this,e)}));d.signOut=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.fromData,e.prev=1,e.next=4,u.Z.post(i.Nv,n);case 4:if(!(a=e.sent)||!a.data||200!=a.data.code){e.next=9;break}return localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),e.abrupt("return",!0);case 9:return c.Am.error("Something went worng"),e.abrupt("return",!1);case 13:return e.prev=13,e.t0=e.catch(1),c.Am.error(e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.errors?e.t0.response.data.errors:"Something went worng"),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(r){return e.apply(this,arguments)}}(),d.forgotEmailVarification=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.email,e.prev=1,e.next=4,u.Z.post(i.gw,{email:n});case 4:if(!(a=e.sent)||!a.data||200!=a.data.code){e.next=7;break}return e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 10:return e.prev=10,e.t0=e.catch(1),c.Am.error(e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.errors?e.t0.response.data.errors:"Something went worng"),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r){return e.apply(this,arguments)}}(),d.changePassword=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a,o,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.password,a=r.conformPassword,o=r.userId,e.prev=1,e.next=4,u.Z.post((0,i.bk)(o),{password:n,confirm_password:a});case 4:if(!(s=e.sent)||!s.data||200!=s.data.code){e.next=7;break}return e.abrupt("return",!0);case 7:return c.Am.error("Something went wrong"),e.abrupt("return",!1);case 11:return e.prev=11,e.t0=e.catch(1),c.Am.error(e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.errors?e.t0.response.data.errors:"Something went worng"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(r){return e.apply(this,arguments)}}()},9731:function(e,r,n){var t=n(4165),a=n(5861),o=n(3263),s=n(5548),c=o.Z;c.interceptors.request.use(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.headers.Authorization){e.next=7;break}return e.next=3,localStorage.getItem("accessToken");case 3:n=e.sent,c.defaults.headers.common.Authorization=n?"Bearer ".concat(n):"",r.headers.Authorization="Bearer ".concat(n),r.maxRedirects=0;case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),(function(e){Promise.reject(e)})),c.interceptors.response.use(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.config.url!==s.H4&&r.config.url!==s.Nz){e.next=13;break}return n=r.data.data.access_token?r.data.data.access_token:"",a=r.data.data.refresh_token?r.data.data.refresh_token:"",c.defaults.headers.common.Authorization=n?"Bearer ".concat(n):"",e.prev=4,e.next=7,localStorage.setItem("accessToken",n);case 7:return e.next=9,localStorage.setItem("refreshToken",a);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(4);case 13:return e.abrupt("return",r);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(r){return e.apply(this,arguments)}}());var u=[],i=!1;c.interceptors.response.use(void 0,function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.response||!r.response.config||r.response.config.url!==s.z6||401!=r.response.status){e.next=4;break}setTimeout((0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem("accessToken","");case 2:return e.next=4,localStorage.setItem("refreshToken","");case 4:case"end":return e.stop()}}),e)}))),2e3),e.next=19;break;case 4:if(!r.response||401!=r.response.status){e.next=11;break}return n=localStorage.getItem("refreshToken"),o={refresh_token:n},u.push(r.config),e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r,n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i||(i=!0,delete c.defaults.headers.common.Authorization,c.post(s.z6,o,{headers:{"content-type":"application/json"}}).then(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(o){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.defaults.headers.common.Authorization="Bearer ".concat(o.data.data.access_token),e.next=3,localStorage.setItem("accessToken",o.data.data.access_token);case 3:return e.next=5,localStorage.setItem("refreshToken",o.data.data.refresh_token);case 5:u.map(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(a,i){var d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u[i].headers.Authorization="Bearer ".concat(o.data.data.access_token),a.url!=s.Nv){e.next=8;break}return d=JSON.parse(a.data),e.next=5,localStorage.setItem("accessToken","");case 5:return e.next=7,localStorage.setItem("refreshToken","");case 7:a.data=JSON.stringify(d);case 8:c(a).then((function(e){return r(e)})).catch((function(e){n(e)}));case 9:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),i=!1,u=[];case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()).catch((function(e){if(responseToast(e),setTimeout((0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem("accessToken","");case 2:return e.next=4,localStorage.setItem("refreshToken","");case 4:case"end":return e.stop()}}),e)}))),2e3),500!==e.response.status)return e})));case 1:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()));case 11:if(!(r.response&&r.response.data&&r.response.data.location)){e.next=15;break}window.location=r.response.data.location,e.next=19;break;case 15:if(!r.response||401!=r.response.status||904==r.response.data.code){e.next=18;break}e.next=19;break;case 18:return e.abrupt("return",Promise.reject(r));case 19:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),r.Z=c},2631:function(){}}]);
//# sourceMappingURL=6345.6dd3e3c8.chunk.js.map