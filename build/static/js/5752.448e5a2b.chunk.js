"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[5752],{4183:function(e,r,n){n(2791);r.Z=n.p+"static/media/icon-edit.66db4866fc239f5ff3f3b6abbb739e70.svg"},7489:function(e,r,n){n.d(r,{$c:function(){return d},Rz:function(){return b},kT:function(){return p},ru:function(){return u},uz:function(){return c}});var a=n(4165),i=n(5861),s=n(9731),t=n(9085),o=n(5548),l=n(5821);function d(e,r,n){return function(){var d=(0,i.Z)((0,a.Z)().mark((function i(d){var c;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,s.Z.post(o.N1,e);case 3:(c=a.sent)&&c.data&&201==c.data.code?(d((0,l.Ju)()),"brand"===e.role?d(u({user_id:e.user_id,platform:n},r)):r("/retailer-onboarding")):t.Am.error("Something went worng"),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.Am.error(a.t0&&a.t0.response&&a.t0.response.data&&a.t0.response.data.errors?a.t0.response.data.errors:"Something went worng");case 10:case"end":return a.stop()}}),i,null,[[0,7]])})));return function(e){return d.apply(this,arguments)}}()}function u(e,r){return function(){var n=(0,i.Z)((0,a.Z)().mark((function n(i){var l;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.post(o.Wd,e);case 3:(l=n.sent)&&l.data&&201==l.data.code?r("/brand-onboarding"):r("/personalized-not-supported",{state:e.platform}),n.next=11;break;case 7:throw n.prev=7,n.t0=n.catch(0),t.Am.error(n.t0&&n.t0.response&&n.t0.response.data&&n.t0.response.data.errors?n.t0.response.data.errors:"Something went worng"),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}function c(e){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)((0,a.Z)().mark((function e(r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.post(o.NR,r,{headers:{"content-type":"multipart/form-data"}});case 3:if(!(n=e.sent)||!n.data||200!=n.data.code){e.next=8;break}return e.abrupt("return",n.data.data);case 8:t.Am.error("Something went worng");case 9:return e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),t.Am.error(e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.errors?e.t0.response.data.errors:"Something went worng"),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function p(e){return function(){var r=(0,i.Z)((0,a.Z)().mark((function r(n){var i,l;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.post(o.qq,e);case 3:return(i=r.sent)&&i.data&&200==i.data.code?(t.Am.success(null===(l=i.data)||void 0===l?void 0:l.message),n(b(e.brand_id))):t.Am.error("Something went worng"),r.abrupt("return",i);case 8:throw r.prev=8,r.t0=r.catch(0),t.Am.error(r.t0&&r.t0.response&&r.t0.response.data&&r.t0.response.data.errors?r.t0.response.data.errors:"Something went worng"),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()}function b(e){return function(){var r=(0,i.Z)((0,a.Z)().mark((function r(n){var i;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(o.qq,"/").concat(e,"/"));case 3:return(i=r.sent)&&i.data&&200==i.data.code&&i.data.data&&n((0,l.pT)(i.data.data)),r.abrupt("return",i);case 8:throw r.prev=8,r.t0=r.catch(0),t.Am.error(r.t0&&r.t0.response&&r.t0.response.data&&r.t0.response.data.errors?r.t0.response.data.errors:"Something went worng"),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()}},2089:function(e,r,n){n.d(r,{$7:function(){return s},FI:function(){return d},Gq:function(){return c},Ks:function(){return l},rB:function(){return t},tj:function(){return o},zb:function(){return u}});var a=n(2797),i=n(90),s=a.Ry().shape({businessName:a.Z_().required("Legal business name is required."),businessAs:a.Z_().required("Doing business is required.").test("businessname","doing business is different than the legal name",(function(e){return!e||e!==this.parent.businessName})),website:a.Z_().url("Please enter a valid URL").required("Business website address is required."),businessEmail:a.Z_().email("Must be a valid email.").max(255).required("Business email address is required."),businessCategory:a.Ry().nullable().required("Business category is required."),textIdType:a.Ry().when("businessCategory",{is:function(e){return"single_member_llc"===(null===e||void 0===e?void 0:e.value)||"sole_proprietor"===(null===e||void 0===e?void 0:e.value)},then:a.Ry().nullable().required("TextID is required")}),phoneNumber:a.Z_().nullable().required("Phone number is required.").min(12,"Phone should be 10 digits."),addressLine1:a.Z_().nullable().required("Address line 1 is required."),countryAddress:a.Ry().nullable().required("Country is require."),stateAddress:a.Ry().nullable().required("State is require."),city:a.Z_().required("City is required."),zipcode:a.Z_().nullable().notOneOf(["00000"],"Should be in XXXXX format.Cannot containt all zeroes.").min(5,"Should be in XXXXX format.").max(5,"Zip-code should be 5 digits.").required("Zip-code is required."),stateOfIncorportation:a.Ry().nullable().required("State of incorporation is required."),dateOfIncorportation:a.Z_().nullable().required("Date of incorporation is required."),bankruptcy:a.Z_().nullable().required("Prior bankruptcy is required."),dateOfDischarge:a.Z_().when("bankruptcy",{is:function(e){return"yes"===e},then:a.Z_().nullable().required("Date of discharge is required.")}),averageSales:a.Z_().required("Estimated average sales volume on shopdot is required."),averageSalePrice:a.Z_().required("Estimated average sale price on shopdot is required."),averageDeliveryTime:a.Ry().nullable().required("Average delivery time is required."),merchantCategoryCode:a.Ry().nullable().required("Merchant category code is required."),salesMethod:a.Ry().nullable().required("Sales method is required."),productionDescription:a.Z_().required("Product description is required.")}),t=function(){var e=i.h.getState().gettingPaid.businessDetails;return a.Ry().shape({representativeDetails:a.IX().of(a.Ry().shape({fname:a.Z_().nullable().required("Legal person first name is required."),lname:a.Z_().nullable().required("Legal person last name is required."),phoneNumber:a.Z_().nullable().required("Phone number is required.").min(12,"Phone should be 10 digits."),ssn:a.Z_().nullable().required("SSN is required.").min(11,"SSN should be 9 digit."),dob:a.Z_().nullable().required("Date of birth is required."),email:a.Z_().email("Must be a valid email.").max(255).required("Email address is required."),countryAddress:a.Ry().nullable().required("Country is require."),stateAddress:a.Ry().nullable().required("State is require."),addressLine1:a.Z_().nullable().required("Address line 1 is required."),city:a.Z_().required("City is required."),zipcode:a.Z_().nullable().notOneOf(["00000"],"Should be in XXXXX format.Cannot containt all zeroes.").min(5,"Should be in XXXXX format.").max(5,"Zip-code should be 5 digits.").required("Zip-code is required."),secondaryIdentificationType:a.Ry().nullable().required("Secondary identification is required."),soInsurence:a.Ry().nullable().when("secondaryIdentificationType",{is:function(e){return"dl"===(null===e||void 0===e?void 0:e.value)},then:a.Ry().nullable().required("State of issuance is required.")}),idNumber:a.Z_().nullable().required("Id number is required."),percentageOwnership:a.nK().required("Ownership percentage must be 100%.").test("is-valid-settings","Ownership percentage must be 100%.",(function(r,n){var a,i,s;return console.log("context",n),"partnership"===(null===e||void 0===e||null===(a=e.businessCategory)||void 0===a?void 0:a.value)?""!==r&&!isNaN(r)&&(100===Number(r)||Number(r)>=25&&Number(r)<=100)||n.createError({message:Number(r)>100?"Ownership percentage is invalid!":"Ownership percentage must be 25% or more",path:n.path}):"single_member_llc"===(null===e||void 0===e||null===(i=e.businessCategory)||void 0===i?void 0:i.value)||"sole_proprietor"===(null===e||void 0===e||null===(s=e.businessCategory)||void 0===s?void 0:s.value)?""!==r&&!isNaN(r)&&100===Number(r):""!==r&&!isNaN(r)&&(100===Number(r)||Number(r)>=25&&Number(r)<=100)||n.createError({message:Number(r)>100?"Ownership percentage is invalid!":"Ownership percentage must be 25% or more",path:n.path})}))}))})},o=a.Ry().shape({representativeDetails:a.IX().of(a.Ry().shape({fname:a.Z_().nullable().required("Legal person first name is required."),lname:a.Z_().nullable().required("Legal person last name is required."),phoneNumber:a.Z_().nullable().required("Phone number is required.").min(12,"Phone should be 10 digits."),ssn:a.Z_().nullable().required("SSN is required.").min(11,"SSN should be 9 digit.").max(11,"SSN should be 9 digit."),dob:a.Z_().nullable().required("Date of birth is required."),email:a.Z_().email("Must be a valid email.").max(255).required("Email address is required."),countryAddress:a.Ry().nullable().required("Country is require."),stateAddress:a.Ry().nullable().required("State is require."),addressLine1:a.Z_().nullable().required("Address line 1 is required."),city:a.Z_().required("City is required."),zipcode:a.Z_().nullable().notOneOf(["00000"],"Should be in XXXXX format.Cannot containt all zeroes.").min(5,"Should be in XXXXX format.").max(5,"Zip-code should be 5 digits.").required("Zip-code is required."),secondaryIdentificationType:a.Ry().nullable().required("Secondary identification is required."),soInsurence:a.Ry().nullable().when("secondaryIdentificationType",{is:function(e){return"dl"===(null===e||void 0===e?void 0:e.value)},then:a.Ry().nullable().required("State of issuance is required.")}),idNumber:a.Z_().nullable().required("Id number is required.")}))}),l=a.Ry().shape({accountHolderName:a.Z_().required("Bank account holder name is required."),accountType:a.Ry().nullable().required("Bank account type is required."),accountRole:a.Ry().nullable().required("Purpose is required."),accountNumber:a.Z_().required("Account number is required.").max(8,"Account number should be 8 digits.").min(8,"Account number should be 8 digits."),routingNumber:a.Z_().required("Routing number is require").max(9,"Routing number should be 9 digits.").min(9,"Routing number should be 9 digits.")}),d=a.Ry().shape({confirmation:a.O7().oneOf([!0],"uou need to accept the confirm details"),tnc:a.O7().oneOf([!0],"you need to accept the terms and conditions")}),u=a.Ry().shape({address1:a.Z_().required("Address 1 is required."),daystofulfill:a.Ry().nullable().required("Days to fultill  is required."),state:a.Ry().shape({label:a.Z_().required("State is required."),value:a.Z_().required("State is required.")}).nullable().required("State is required."),country:a.Ry().shape({label:a.Z_().required("Country is required."),value:a.Z_().required("Country is required.")}).nullable().required("Country is required."),city:a.Z_().required("City is required."),shippingfee:a.Z_().required("Shipping fee is required."),incrementalfee:a.Z_().required("Incremental fee is required."),zip:a.Z_().required("Zip-code is required.")}),c=a.Ry().shape({company_name:a.Z_().required("Company name is required."),company_email_address:a.Z_().email("Must be a valid email.").max(255).required("Contact email is required."),company_phone_number:a.Z_().nullable().required("Contact phone number is required.").min(12,"Contact phone should be 12 digits."),store_name:a.Z_().required("Brand name is required."),store_website:a.Z_().url("Please enter a valid URL").required("Brand website is required."),brand_categories:a.IX().min(1,"At least 1 category required").max(3,"Select max 3 category.").nullable().required("Select max 3 category."),brand_values:a.IX(),brand_story:a.Z_().required("About the brand is required."),brand_promo:a.Z_().url("Please enter a valid URL")})},3516:function(e,r,n){n.r(r),n.d(r,{default:function(){return y}});var a=n(1413),i=n(4165),s=n(5861),t=n(9439),o=n(2791),l=n(1134),d=n(4695),u=n(2089),c=n(4183),m=n.p+"static/media/profile-avatar.261dfdda4addff8f0f82.jpg",p=n(9434),b=n(7423),h=n(7489),f=n(9290),v=n(4933),x=n(763),_=n(9085),q=n(184);function y(){var e,r,n,y,g,N,j,Z,w,S=(0,o.useState)(m),k=(0,t.Z)(S,2),R=k[0],C=k[1],X=(0,l.cI)({mode:"onChange",resolver:(0,d.X)(u.Gq)}),A=X.register,I=X.handleSubmit,O=X.reset,P=(X.setValue,X.formState.errors),D=(0,p.I0)(),B=(0,p.v9)(f.uy),T=(0,p.v9)(v.Rp),z=(0,p.v9)(v.ZL),E=(0,p.v9)(v.Sn),L=(0,o.useState)([]),M=(0,t.Z)(L,2),G=M[0],U=M[1],F=(0,o.useState)([]),J=(0,t.Z)(F,2),Y=J[0],K=J[1],V=(0,o.useState)(!1),$=(0,t.Z)(V,2),H=$[0],W=$[1];(0,o.useEffect)((function(){setTimeout((function(){D((0,b.vR)()),D((0,b.Yy)()),D((0,b.mo)(B.id))}),350)}),[]);var Q=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(r){var n,a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===r||void 0===r||null===(n=r.brand_profile)||void 0===n||!n.id){e.next=12;break}if(a=[],s=[],!r.brand_categories||!r.brand_categories.length){e.next=6;break}return e.next=6,(0,x.map)(r.brand_categories,(function(e,r){a.push(e.id)}));case 6:if(!r.brand_values||!r.brand_values.length){e.next=9;break}return e.next=9,(0,x.map)(r.brand_values,(function(e,r){s.push(e.id)}));case 9:C(r.brand_profile.store_logo||m),O({brand_values:s,brand_categories:a,company_name:r.brand_profile.company_name,company_email_address:r.brand_profile.company_email_address,company_phone_number:r.brand_profile.company_phone_number,store_name:r.brand_profile.store_name,store_website:r.brand_profile.store_website,brand_story:r.brand_profile.brand_story,brand_promo:r.brand_profile.brand_promo}),setTimeout((function(){U(a),K(s)}),100);case 12:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){E.brand_profile&&E.brand_profile.id&&Q(E)}),[E]);var ee=function(e,r){var n=JSON.parse(e),a="category"===r?G:Y,i=(0,x.cloneDeep)(a);i.includes(n)?(0,x.remove)(i,(function(e,r){return e===n})):i.push(n),"category"===r?U(i):"value"===r&&K(i)};return console.log(R,"image"),(0,q.jsxs)("div",{className:"pc_tabs-content tabs_body",children:[(0,q.jsx)("div",{className:"tab active","data-target":"Account",children:(0,q.jsxs)("div",{className:"products_content",children:[(0,q.jsxs)("div",{className:"products_head mp-head head-with-subtitle",children:[(0,q.jsx)("div",{className:"products_head-content",children:(0,q.jsx)("div",{className:"title",children:(0,q.jsx)("h1",{children:"Brand Profile"})})}),(0,q.jsx)("p",{children:"Information entered on this page will be visible to retailers within ShopDot."})]}),(0,q.jsx)("div",{className:"products_body",children:(0,q.jsx)("div",{className:"content_area",children:(0,q.jsx)("div",{id:"account",children:(0,q.jsxs)("form",{onSubmit:I((function(e){console.log("data 2",e),D((0,b.fE)((0,a.Z)({user_id:B.id,role_id:1,store_logo:R,profile_picture:R},e),null===E||void 0===E?void 0:E.id))})),children:[(0,q.jsxs)("div",{className:"account_info",children:[(0,q.jsx)("h2",{children:"Contact Information "}),(0,q.jsxs)("div",{className:"form-area",children:[(0,q.jsxs)("div",{className:"form-input tooltip-input mb-4",children:[(0,q.jsxs)("label",{className:"form-label",children:["Company name ",(0,q.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,q.jsx)("input",(0,a.Z)({type:"text",className:"form-control mb-0",name:"company_name",id:"",placeholder:""},A("company_name",{required:!0}))),(null===P||void 0===P?void 0:P.company_name)&&(0,q.jsx)("span",{className:"error-text",children:null===P||void 0===P||null===(e=P.company_name)||void 0===e?void 0:e.message})]}),(0,q.jsxs)("div",{className:"form-input tooltip-input mb-4",children:[(0,q.jsxs)("label",{className:"form-label",children:["Contact email ",(0,q.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,q.jsx)("input",(0,a.Z)({type:"text",className:"form-control mb-0",name:"company_email_address",id:"",placeholder:""},A("company_email_address",{required:!0}))),(null===P||void 0===P?void 0:P.company_email_address)&&(0,q.jsx)("span",{className:"error-text",children:null===P||void 0===P||null===(r=P.company_email_address)||void 0===r?void 0:r.message})]}),(0,q.jsxs)("div",{className:"form-input tooltip-input mb-4",children:[(0,q.jsxs)("label",{className:"form-label",children:["Contact phone number"," ",(0,q.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,q.jsx)("input",(0,a.Z)({type:"number",className:"form-control mb-0",id:"",name:"company_phone_number",placeholder:""},A("company_phone_number",{required:!0}))),(null===P||void 0===P?void 0:P.company_phone_number)&&(0,q.jsx)("span",{className:"error-text",children:null===P||void 0===P||null===(n=P.company_phone_number)||void 0===n?void 0:n.message})]})]})]}),(0,q.jsxs)("div",{className:"my_store",children:[(0,q.jsx)("h2",{children:"Brand Information "}),(0,q.jsxs)("div",{className:"form-area",children:[(0,q.jsxs)("div",{children:[(0,q.jsxs)("div",{className:"form-input form-upload-image",children:[(0,q.jsx)("a",{href:"#",className:"upload-logo",children:(0,q.jsxs)("label",{children:[(0,q.jsx)("input",{className:"d-none",id:"",type:"file",onChange:function(e){if(!H){W(!0);var r=new FormData;r.append("file",e.target.files[0]),D((0,h.uz)(r).then((function(e){C(e.url)})).finally((function(){W(!1)})))}}}),(0,q.jsx)("img",{src:c.Z,className:"icon"}),(0,q.jsx)("div",{className:"profile-user-avtar",children:(0,q.jsx)("img",{src:R})})]})}),(0,q.jsxs)("label",{children:["Upload logo",(0,q.jsx)("span",{className:"asterisk-red",children:" *"}),(0,q.jsxs)("a",{href:"#",className:"remove-logo",onClick:function(){H||C("")},children:["Remove logo"," "]}),(0,q.jsxs)("span",{className:"logo-instruction",children:["Format Type:",(0,q.jsx)("b",{children:"JPEG or PNG"}),". Maximum size is ",(0,q.jsx)("b",{children:"5MB"}),", No less than ",(0,q.jsx)("b",{children:"512 x 512"})," pixels and no more than"," ",(0,q.jsx)("b",{children:"1024 x 1024"})," pixels."]})]})]}),(0,x.isEmpty)(R)&&(0,q.jsx)("span",{className:"error-text",children:"Please add logo"})]}),(0,q.jsxs)("div",{className:"form-input mb-4",children:[(0,q.jsxs)("label",{className:"form-label",children:["Brand name ",(0,q.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,q.jsx)("input",(0,a.Z)({type:"text",className:"form-control mb-0",name:"store_name",id:"",placeholder:""},A("store_name",{required:!0}))),(null===P||void 0===P?void 0:P.store_name)&&(0,q.jsx)("span",{className:"error-text",children:null===P||void 0===P||null===(y=P.store_name)||void 0===y?void 0:y.message})]}),(0,q.jsxs)("div",{className:"form-input tooltip-input mb-4",children:[(0,q.jsxs)("label",{className:"form-label",children:["Brand website",(0,q.jsx)("span",{className:"asterisk-red",children:"*"}),(0,q.jsxs)("div",{className:"tooltip",children:[(0,q.jsx)("div",{className:"tooltip-icon",children:(0,q.jsx)("svg",{className:"icon"})}),(0,q.jsx)("div",{className:"tooltip_text",children:(0,q.jsx)("p",{children:"This is your store that is connected with ShopDot. You can connect a different store in the Integration section."})})]})]}),(0,q.jsx)("input",(0,a.Z)({type:"text",className:"form-control mb-0",name:"store_website",placeholder:"janebeautyparlor.com"},A("store_website",{required:!0}))),(null===P||void 0===P?void 0:P.store_website)&&(0,q.jsx)("span",{className:"error-text",children:null===P||void 0===P||null===(g=P.store_website)||void 0===g?void 0:g.message})]}),(0,q.jsxs)("div",{className:"form-input form-checkbox mb-4",children:[(0,q.jsxs)("label",{className:"form-label",children:["Brand category (Select up to three)"," ",(0,q.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,q.jsx)("div",{className:"select-checkbox",children:T&&T.length?T.map((function(e,r){return(0,q.jsx)("div",{className:"check-item",children:(0,q.jsxs)("label",{className:"checkbox",children:[(0,q.jsx)("input",(0,a.Z)({type:"checkbox",name:"brand_categories",checked:G.includes(e.id),value:e.id},A("brand_categories",{onChange:function(e){ee(e.target.value,"category")}}))),(0,q.jsx)("div",{className:"checkbox-text",children:(0,q.jsx)("span",{children:e.name})})]})},r)})):(0,q.jsx)("div",{})}),(null===P||void 0===P?void 0:P.brand_categories)&&(0,q.jsx)("span",{className:"error-text",children:null===P||void 0===P||null===(N=P.brand_categories)||void 0===N?void 0:N.message})]}),(0,q.jsxs)("div",{className:"form-input form-checkbox mb-4",children:[(0,q.jsx)("label",{className:"form-label",children:"Brand values"}),(0,q.jsxs)("div",{className:"select-checkbox third-col",children:[(0,q.jsx)("div",{className:"select-checkbox",children:z&&z.length?z.map((function(e,r){return(0,q.jsx)("div",{className:"check-item",children:(0,q.jsxs)("label",{className:"checkbox",children:[(0,q.jsx)("input",(0,a.Z)({type:"checkbox",name:"brand_values",checked:Y.includes(e.id),value:e.id},A("brand_values",{required:!1,onChange:function(e){ee(e.target.value,"value")}}))),(0,q.jsx)("div",{className:"checkbox-text",children:(0,q.jsx)("span",{children:e.name})})]})},r)})):(0,q.jsx)("div",{})}),(null===P||void 0===P?void 0:P.brand_values)&&(0,q.jsx)("span",{className:"error-text",children:null===P||void 0===P||null===(j=P.brand_values)||void 0===j?void 0:j.message})]})]}),(0,q.jsxs)("div",{className:"form-input form-story mb-4",children:[(0,q.jsxs)("label",{className:"form-label",children:["About the brand"," ",(0,q.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,q.jsx)("textarea",(0,a.Z)({id:"",rows:"8",required:"",className:"text-area   ",name:"brand_story",placeholder:""},A("brand_story",{required:!0}))),(null===P||void 0===P?void 0:P.brand_story)&&(0,q.jsx)("span",{className:"error-text",children:null===P||void 0===P||null===(Z=P.brand_story)||void 0===Z?void 0:Z.message})]}),(0,q.jsxs)("div",{className:"form-input mb-4",children:[(0,q.jsx)("label",{className:"form-label",children:"Add a Youtube or Vimeo video link."}),(0,q.jsx)("input",(0,a.Z)({type:"text",className:"form-control mb-0",name:"brand_promo",id:"",placeholder:""},A("brand_promo",{required:!0}))),(null===P||void 0===P?void 0:P.brand_promo)&&(0,q.jsx)("span",{className:"error-text",children:null===P||void 0===P||null===(w=P.brand_promo)||void 0===w?void 0:w.message})]}),(0,q.jsxs)("div",{className:"form-input form-submit",children:[(0,q.jsx)("button",{onClick:function(){return O()},className:"button button-grey cancel",children:"Cancel"}),(0,q.jsx)("button",{onClick:function(){I()},type:"submit",className:"button",children:"Save"})]})]})]})]})})})})]})}),(0,q.jsx)(_.Ix,{})]})}}}]);
//# sourceMappingURL=5752.448e5a2b.chunk.js.map