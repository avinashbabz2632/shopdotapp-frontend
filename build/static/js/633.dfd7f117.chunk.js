"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[633],{2970:function(s,e,n){var a,r=n(168),o=n(4313),i=n(1011),d=o.ZP.input(a||(a=(0,r.Z)(["\n    // display: flex;\n    // align-items: center;\n    // align-content: center;\n    // z-index: 0;\n    // -webkit-appearance: none;\n    // appearance: none;\n    // width: 100%;\n    // box-sizing: border-box;\n    // font-family: ",";\n    // font-size: ",";\n    // font-weight: 400;\n    // border: 0.1rem solid ",";\n    // border-radius: ",";\n    // padding: ",";\n    // height: ",";\n    // outline: none;\n    // background-color: ",";\n    // transition: all "," ease;\n    // caret-color: ",";\n    //\n    // &::place-holder {\n    //     color: ",";\n    //     opacity: 0.64;\n    // }\n    //\n    // &.invalid {\n    //     border-color: ",";\n    //     background-color: ",";\n    // }\n    //\n    // &:focus {\n    //     border-color: ",";\n    //     background-color: ",";\n    // }\n    //\n    // &:focus:required:invalid {\n    //     border-color: ",";\n    //     background-color: ",";\n    // }\n    //\n    // &:required:valid {\n    //     border-color: var(--orange-tint-10);\n    //     background-color: var(--white);\n    // }\n    //\n    // &.valid {\n    //     border-color: ",";\n    //     background-color: ",";\n    // }\n\n    background: #fffcf9;\n    border: 1px solid #f3e0d2;\n    border-radius: 4px;\n    height: 4rem;\n    padding: 1rem 1.2rem;\n    display: block;\n    width: 100%;\n    margin-top: 0.6rem;\n    appearance: none;\n    box-sizing: border-box;\n    font-family: 'Mulish', sans-serif;\n    outline: none;\n\n    &.invalid {\n        border-color: #eb5757;\n    }\n"])),i.IN,i.dA,i.cb,i.xM,i.nf,i.ZO,i.sE,i.rY,i.J0,i.ZR,i.ow,i.AW,i.ow,i.AW,i.ow,i.AW,i.MG,i.a9);e.Z=d},633:function(s,e,n){n.r(e),n.d(e,{default:function(){return f}});var a=n(1413),r=n(9439),o=n(2791),i=n(9434),d=n(1134),l=n(4695),c=n(2797),t=n(2970),m=n(7423),u=function(s){return s.security},p=n(9290),w=n(9085),h=n(763),v=n(184),b=c.Ry().shape({password:c.Z_().required("Password is required."),newpassword:c.Z_().required("Password is required.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character."),confirmNewPassword:c.Z_().oneOf([c.iH("newpassword"),null],"Passwords must match.").required("Password confirm is required.")}).required();function f(){var s,e,n,c=(0,o.useState)(!0),f=(0,r.Z)(c,2),x=f[0],j=f[1],N=(0,o.useState)(!0),g=(0,r.Z)(N,2),k=g[0],y=g[1],Z=(0,o.useState)(!0),P=(0,r.Z)(Z,2),C=P[0],q=P[1],_=(0,d.cI)({resolver:(0,l.X)(b),onBlur:!0}),S=_.register,O=_.handleSubmit,z=_.reset,A=_.formState.errors,I=(0,i.I0)(),M=((0,i.v9)(u),(0,i.v9)(p.uy));return(0,v.jsxs)("div",{className:"products_content",children:[(0,v.jsx)("div",{className:"products_head mp-head",children:(0,v.jsx)("div",{className:"products_head-content",children:(0,v.jsx)("div",{className:"title",children:(0,v.jsx)("h1",{children:"Security"})})})}),(0,v.jsx)("div",{className:"products_body",children:(0,v.jsx)("div",{className:"content_area",children:(0,v.jsx)("div",{id:"security",children:(0,v.jsx)("form",{onSubmit:O((function(s){(0,h.isEmpty)(s.password)||(I((0,m.Cp)({old_password:s.password,password:s.newpassword,confirm_password:s.confirmNewPassword},M.id)),z())})),children:(0,v.jsxs)("div",{className:"security_info",children:[(0,v.jsx)("h2",{children:"Change Password"}),(0,v.jsxs)("div",{className:"form-area",children:[(0,v.jsxs)("div",{className:"form-input mb-4",children:[(0,v.jsx)("label",{className:"form-label",children:"Old password"}),(0,v.jsx)(t.Z,(0,a.Z)({className:"".concat(null!==A&&void 0!==A&&A.password?"is-invalid":""," form-control password"),type:x?"password":"text",name:"password"},S("password",{required:!0}))),(0,v.jsx)("span",{className:"password-show ".concat(x?"":"active"),onClick:function(){return j(!x)}}),(null===A||void 0===A?void 0:A.password)&&(0,v.jsx)("small",{className:"invalid-feedback mb-0",children:null===A||void 0===A||null===(s=A.password)||void 0===s?void 0:s.message})]}),(0,v.jsxs)("div",{className:"form-input mb-4 password-tooltip",children:[(0,v.jsx)("label",{className:"form-label",children:"New password"}),(0,v.jsx)(t.Z,(0,a.Z)({className:"".concat(null!==A&&void 0!==A&&A.newpassword?"is-invalid":""," form-control password"),type:k?"password":"text",name:"newpassword"},S("newpassword",{required:!0}))),(0,v.jsx)("span",{className:"password-show ".concat(k?"":"active"),onClick:function(){return y(!k)}}),(null===A||void 0===A?void 0:A.newpassword)&&(0,v.jsx)("small",{className:"invalid-feedback mb-0",children:null===A||void 0===A||null===(e=A.newpassword)||void 0===e?void 0:e.message}),(0,v.jsxs)("div",{className:"tooltip",children:[(0,v.jsx)("div",{className:"tooltip-icon"}),(0,v.jsxs)("div",{className:"tooltip_text",children:[(0,v.jsx)("div",{className:"tooltip-arrow"}),(0,v.jsx)("div",{className:"pwd-info-title",children:"Password must:"}),(0,v.jsxs)("div",{className:"pwd-info",children:[(0,v.jsx)("label",{children:"- have at least 1 number"}),(0,v.jsx)("label",{children:"- have at least 1 uppercase character"}),(0,v.jsx)("label",{children:"- have at least 1 lowercase character"}),(0,v.jsx)("label",{children:"- have at least 1 special character"}),(0,v.jsx)("label",{children:"- have 8 characters minimum"})]})]})]})]}),(0,v.jsxs)("div",{className:"form-input mb-4",children:[(0,v.jsx)("label",{className:"form-label",children:"Confirm new password"}),(0,v.jsx)(t.Z,(0,a.Z)({className:"".concat(null!==A&&void 0!==A&&A.confirmNewPassword?"is-invalid":""," form-control password"),type:C?"password":"text",name:"confirmNewPassword"},S("confirmNewPassword",{required:!0}))),(0,v.jsx)("span",{className:"password-show ".concat(C?"":"active"),onClick:function(){return q(!C)}}),(null===A||void 0===A?void 0:A.confirmNewPassword)&&(0,v.jsx)("small",{className:"invalid-feedback mb-0",children:null===A||void 0===A||null===(n=A.confirmNewPassword)||void 0===n?void 0:n.message})]})]}),(0,v.jsx)("div",{className:"form-area",children:(0,v.jsxs)("div",{className:"form-input form-submit mt-4",children:[(0,v.jsx)("button",{onClick:function(){return z()},className:"button button-grey cancel",children:"Cancel"}),(0,v.jsx)("button",{type:"submit",className:"button",children:"Save"})]})})]})})})})}),(0,v.jsx)(w.Ix,{})]})}}}]);
//# sourceMappingURL=633.dfd7f117.chunk.js.map