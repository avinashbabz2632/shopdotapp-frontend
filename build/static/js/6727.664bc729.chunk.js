"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[6727],{91:function(e,r,i){i(2791);r.Z=i.p+"static/media/info.6b6d6ceb4e4be005c910c2459c4393f4.svg"},2089:function(e,r,i){i.d(r,{$7:function(){return a},FI:function(){return o},Gq:function(){return c},Ks:function(){return d},rB:function(){return l},tj:function(){return t},zb:function(){return u}});var s=i(2797),n=i(90),a=s.Ry().shape({businessName:s.Z_().required("Legal business name is required."),businessAs:s.Z_().required("Doing business is required.").test("businessname","doing business is different than the legal name",(function(e){return!e||e!==this.parent.businessName})),website:s.Z_().url("Please enter a valid URL").required("Business website address is required."),businessEmail:s.Z_().email("Must be a valid email.").max(255).required("Business email address is required."),businessCategory:s.Ry().nullable().required("Business category is required."),textIdType:s.Ry().when("businessCategory",{is:function(e){return"single_member_llc"===(null===e||void 0===e?void 0:e.value)||"sole_proprietor"===(null===e||void 0===e?void 0:e.value)},then:s.Ry().nullable().required("TextID is required")}),phoneNumber:s.Z_().nullable().required("Phone number is required.").min(12,"Phone should be 10 digits."),addressLine1:s.Z_().nullable().required("Address line 1 is required."),countryAddress:s.Ry().nullable().required("Country is require."),stateAddress:s.Ry().nullable().required("State is require."),city:s.Z_().required("City is required."),zipcode:s.Z_().nullable().notOneOf(["00000"],"Should be in XXXXX format.Cannot containt all zeroes.").min(5,"Should be in XXXXX format.").max(5,"Zip-code should be 5 digits.").required("Zip-code is required."),stateOfIncorportation:s.Ry().nullable().required("State of incorporation is required."),dateOfIncorportation:s.Z_().nullable().required("Date of incorporation is required."),bankruptcy:s.Z_().nullable().required("Prior bankruptcy is required."),dateOfDischarge:s.Z_().when("bankruptcy",{is:function(e){return"yes"===e},then:s.Z_().nullable().required("Date of discharge is required.")}),averageSales:s.Z_().required("Estimated average sales volume on shopdot is required."),averageSalePrice:s.Z_().required("Estimated average sale price on shopdot is required."),averageDeliveryTime:s.Ry().nullable().required("Average delivery time is required."),merchantCategoryCode:s.Ry().nullable().required("Merchant category code is required."),salesMethod:s.Ry().nullable().required("Sales method is required."),productionDescription:s.Z_().required("Product description is required.")}),l=function(){var e=n.h.getState().gettingPaid.businessDetails;return s.Ry().shape({representativeDetails:s.IX().of(s.Ry().shape({fname:s.Z_().nullable().required("Legal person first name is required."),lname:s.Z_().nullable().required("Legal person last name is required."),phoneNumber:s.Z_().nullable().required("Phone number is required.").min(12,"Phone should be 10 digits."),ssn:s.Z_().nullable().required("SSN is required.").min(11,"SSN should be 9 digit."),dob:s.Z_().nullable().required("Date of birth is required."),email:s.Z_().email("Must be a valid email.").max(255).required("Email address is required."),countryAddress:s.Ry().nullable().required("Country is require."),stateAddress:s.Ry().nullable().required("State is require."),addressLine1:s.Z_().nullable().required("Address line 1 is required."),city:s.Z_().required("City is required."),zipcode:s.Z_().nullable().notOneOf(["00000"],"Should be in XXXXX format.Cannot containt all zeroes.").min(5,"Should be in XXXXX format.").max(5,"Zip-code should be 5 digits.").required("Zip-code is required."),secondaryIdentificationType:s.Ry().nullable().required("Secondary identification is required."),soInsurence:s.Ry().nullable().when("secondaryIdentificationType",{is:function(e){return"dl"===(null===e||void 0===e?void 0:e.value)},then:s.Ry().nullable().required("State of issuance is required.")}),idNumber:s.Z_().nullable().required("Id number is required."),percentageOwnership:s.nK().required("Ownership percentage must be 100%.").test("is-valid-settings","Ownership percentage must be 100%.",(function(r,i){var s,n,a;return console.log("context",i),"partnership"===(null===e||void 0===e||null===(s=e.businessCategory)||void 0===s?void 0:s.value)?""!==r&&!isNaN(r)&&(100===Number(r)||Number(r)>=25&&Number(r)<=100)||i.createError({message:Number(r)>100?"Ownership percentage is invalid!":"Ownership percentage must be 25% or more",path:i.path}):"single_member_llc"===(null===e||void 0===e||null===(n=e.businessCategory)||void 0===n?void 0:n.value)||"sole_proprietor"===(null===e||void 0===e||null===(a=e.businessCategory)||void 0===a?void 0:a.value)?""!==r&&!isNaN(r)&&100===Number(r):""!==r&&!isNaN(r)&&(100===Number(r)||Number(r)>=25&&Number(r)<=100)||i.createError({message:Number(r)>100?"Ownership percentage is invalid!":"Ownership percentage must be 25% or more",path:i.path})}))}))})},t=s.Ry().shape({representativeDetails:s.IX().of(s.Ry().shape({fname:s.Z_().nullable().required("Legal person first name is required."),lname:s.Z_().nullable().required("Legal person last name is required."),phoneNumber:s.Z_().nullable().required("Phone number is required.").min(12,"Phone should be 10 digits."),ssn:s.Z_().nullable().required("SSN is required.").min(11,"SSN should be 9 digit.").max(11,"SSN should be 9 digit."),dob:s.Z_().nullable().required("Date of birth is required."),email:s.Z_().email("Must be a valid email.").max(255).required("Email address is required."),countryAddress:s.Ry().nullable().required("Country is require."),stateAddress:s.Ry().nullable().required("State is require."),addressLine1:s.Z_().nullable().required("Address line 1 is required."),city:s.Z_().required("City is required."),zipcode:s.Z_().nullable().notOneOf(["00000"],"Should be in XXXXX format.Cannot containt all zeroes.").min(5,"Should be in XXXXX format.").max(5,"Zip-code should be 5 digits.").required("Zip-code is required."),secondaryIdentificationType:s.Ry().nullable().required("Secondary identification is required."),soInsurence:s.Ry().nullable().when("secondaryIdentificationType",{is:function(e){return"dl"===(null===e||void 0===e?void 0:e.value)},then:s.Ry().nullable().required("State of issuance is required.")}),idNumber:s.Z_().nullable().required("Id number is required.")}))}),d=s.Ry().shape({accountHolderName:s.Z_().required("Bank account holder name is required."),accountType:s.Ry().nullable().required("Bank account type is required."),accountRole:s.Ry().nullable().required("Purpose is required."),accountNumber:s.Z_().required("Account number is required.").max(8,"Account number should be 8 digits.").min(8,"Account number should be 8 digits."),routingNumber:s.Z_().required("Routing number is require").max(9,"Routing number should be 9 digits.").min(9,"Routing number should be 9 digits.")}),o=s.Ry().shape({confirmation:s.O7().oneOf([!0],"uou need to accept the confirm details"),tnc:s.O7().oneOf([!0],"you need to accept the terms and conditions")}),u=s.Ry().shape({address1:s.Z_().required("Address 1 is required."),daystofulfill:s.Ry().nullable().required("Days to fultill  is required."),state:s.Ry().shape({label:s.Z_().required("State is required."),value:s.Z_().required("State is required.")}).nullable().required("State is required."),country:s.Ry().shape({label:s.Z_().required("Country is required."),value:s.Z_().required("Country is required.")}).nullable().required("Country is required."),city:s.Z_().required("City is required."),shippingfee:s.Z_().required("Shipping fee is required."),incrementalfee:s.Z_().required("Incremental fee is required."),zip:s.Z_().required("Zip-code is required.")}),c=s.Ry().shape({company_name:s.Z_().required("Company name is required."),company_email_address:s.Z_().email("Must be a valid email.").max(255).required("Contact email is required."),company_phone_number:s.Z_().nullable().required("Contact phone number is required.").min(12,"Contact phone should be 10 digits."),store_name:s.Z_().required("Brand name is required."),store_website:s.Z_().url("Please enter a valid URL").required("Brand website is required."),brand_categories:s.IX().min(1,"At least 1 category required").nullable().required("Select max 3 category."),brand_values:s.IX().min(1,"At least 1 value required").nullable().required("Select max 3 values."),brand_story:s.Z_().required("About the brand is required."),brand_promo:s.Z_().url("Please enter a valid URL")})},6727:function(e,r,i){i.r(r),i.d(r,{default:function(){return R}});var s=i(1413),n=i(2791),a=i(9434),l=i(91),t=i(1134),d=i(4695),o=i(2089),u=i(9593),c=function(e){return e.shipping.shippingData},m=function(e){return e.shipping.shippingTimes},p=i(9290),h=i(7423),f=i(4165),v=i(5861),b=i(9731),q=i(9085),y=i(5548),g=i(7077),x=i(2381);var _=i(4933),N=function(e){return e.countries.countries},Z=function(e){return e.states.states},j=(i(763),i(184)),S={control:function(e){return(0,s.Z)((0,s.Z)({},e),{},{marginTop:"6px",boxShadow:"none",minHeight:"40px","&:hover":{boxShadow:"none"}})},container:function(e){return(0,s.Z)((0,s.Z)({},e),{},{marginTop:"5xp",marginRight:"1px"})}};function R(){var e,r,i,R,X,w,C,I,P=(0,a.v9)(N),A=null===P||void 0===P?void 0:P.map((function(e){return{value:e.id,label:e.name}})),D=(0,a.v9)(Z),O=null===D||void 0===D?void 0:D.map((function(e){return{label:e.name,value:e.country_id}})),k=(0,t.cI)({mode:"onChange",resolver:(0,d.X)(o.zb),defaultValues:{shippingfee:"0.00",incrementalfee:"0.00"}}),z=k.control,T=k.register,L=k.handleSubmit,F=k.reset,B=k.setValue,E=k.formState.errors,M=(0,t.qo)({name:"country",control:z}),$=(0,a.I0)(),Q=(0,a.v9)(c),U=(0,a.v9)(m),H=(0,a.v9)(p.uy),K=(0,a.v9)(_.Sn),V=function(){return U&&U.length>0?U.map((function(e){return{value:e.id,label:e.name}})):[{value:"",label:""}]};(0,n.useEffect)((function(){var e;$(function(){var e=(0,v.Z)((0,f.Z)().mark((function e(r){var i;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.Z.get("".concat(y.od));case 3:return(i=e.sent)&&i.data&&200==i.data.code&&i.data.data&&r((0,g.s)(i.data.data)),e.abrupt("return",i);case 8:throw e.prev=8,e.t0=e.catch(0),q.Am.error(e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.errors?e.t0.response.data.errors:"Something went worng"),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()),$((0,h.D9)(null===K||void 0===K||null===(e=K.brand_profile)||void 0===e?void 0:e.id)),$((0,h.pP)())}),[]),(0,n.useEffect)((function(){var e;M&&M.value&&$((e=null===M||void 0===M?void 0:M.value,function(){var r=(0,v.Z)((0,f.Z)().mark((function r(i){var s;return(0,f.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,b.Z.get("".concat(y.PO(e)));case 3:return(s=r.sent)&&s.data&&200==s.data.code&&s.data.data&&i((0,x.W)(s.data.data)),r.abrupt("return",s);case 8:throw r.prev=8,r.t0=r.catch(0),q.Am.error(r.t0&&r.t0.response&&r.t0.response.data&&r.t0.response.data.errors?r.t0.response.data.errors:"Something went worng"),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()))}),[M]);(0,n.useEffect)((function(){!function(){var e;if(null!==Q&&void 0!==Q&&null!==(e=Q.shippingDetails)&&void 0!==e&&e.brand_details&&U){var r,i,s,n,a,l,t,d,o=null===Q||void 0===Q||null===(r=Q.shippingDetails)||void 0===r||null===(i=r.brand_details)||void 0===i?void 0:i.shipping_rate;U&&U.length,F({address1:null===o||void 0===o||null===(s=o.shipping_address)||void 0===s?void 0:s.street_address_1,address2:null===o||void 0===o||null===(n=o.shipping_address)||void 0===n?void 0:n.street_address_2,country:A?null===A||void 0===A?void 0:A.find((function(e){var r;return(null===o||void 0===o||null===(r=o.shipping_address)||void 0===r?void 0:r.country)===e.label})):"",state:O?null===O||void 0===O?void 0:O.find((function(e){var r;return(null===o||void 0===o||null===(r=o.shipping_address)||void 0===r?void 0:r.state)===e.label})):"",city:null===o||void 0===o||null===(a=o.shipping_address)||void 0===a?void 0:a.city,zip:null===o||void 0===o||null===(l=o.shipping_address)||void 0===l?void 0:l.zip,shippingfee:null===o||void 0===o?void 0:o.shipping_cost,incrementalfee:null===o||void 0===o?void 0:o.incremental_fee,daystofulfill:!(null===o||void 0===o||null===(t=o.shipping_address)||void 0===t||!t.shipping_time_id)&&(null===(d=V())||void 0===d?void 0:d.find((function(e){var r;return e.value===(null===o||void 0===o||null===(r=o.shipping_address)||void 0===r?void 0:r.shipping_time_id)})))})}}()}),[Q,U]);var Y=function(e){var r;if(e.includes(".")){var i,s=e.split("."),n="".concat(s[0]);i=s[1].length>=2?s[1].substr(0,2):"".concat(s[1],"0"),r="".concat(n,".").concat(i)}else{var a=e.substr(0,2);r="".concat(a,".00")}return r};return(0,j.jsxs)("div",{className:"pc_tabs-content tabs_body",children:[(0,j.jsx)("div",{className:"tab active","data-target":"Shipping",children:(0,j.jsxs)("div",{className:"products_content",children:[(0,j.jsx)("div",{className:"products_head mp-head",children:(0,j.jsx)("div",{className:"products_head-content",children:(0,j.jsx)("div",{className:"title",children:(0,j.jsx)("h1",{children:"Shipping Information"})})})}),(0,j.jsx)("div",{className:"products_body ",children:(0,j.jsx)("div",{className:"content_area",children:(0,j.jsx)("div",{id:"shipping",children:(0,j.jsxs)("form",{onSubmit:L((function(e){var r,i;$((0,h.JT)({brand_id:null===K||void 0===K||null===(r=K.brand_profile)||void 0===r?void 0:r.id,user_id:H.id,street_address_1:e.address1,street_address_2:e.address2?e.address2:null,country:e.country.label,state:e.state.label,city:e.city,zip:e.zip,shipping_cost:parseFloat(e.shippingfee).toFixed(2),incremental_fee:parseFloat(e.incrementalfee).toFixed(2),shipping_time_id:e.daystofulfill.value},null===Q||void 0===Q||null===(i=Q.shippingDetails)||void 0===i?void 0:i.id)),F()})),children:[(0,j.jsxs)("div",{className:"shipping_info",children:[(0,j.jsx)("h2",{children:"Shipping Location"}),(0,j.jsxs)("div",{className:"form-area",children:[(0,j.jsxs)("div",{className:"form-input mb-4",children:[(0,j.jsxs)("label",{className:"form-label",children:["Address 1\xa0",(0,j.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,j.jsx)("input",(0,s.Z)({type:"text",className:"form-control mb-0",id:"",name:"address1",placeholder:""},T("address1",{required:!0}))),E.address1&&(0,j.jsx)("span",{className:"error-text",children:null===(e=E.address1)||void 0===e?void 0:e.message})]}),(0,j.jsxs)("div",{className:"form-input mb-4",children:[(0,j.jsx)("label",{className:"form-label",children:"Address 2"}),(0,j.jsx)("input",(0,s.Z)({type:"text",className:"form-control ",name:"address2"},T("address2",{required:!1})))]}),(0,j.jsxs)("div",{className:"category-form-input",children:[(0,j.jsxs)("div",{className:"form-input",children:[(0,j.jsxs)("label",{className:"form-label",children:["Country \xa0",(0,j.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,j.jsx)(t.Qr,{name:"country",control:z,render:function(e){var r=e.field;return(0,j.jsx)(u.ZP,(0,s.Z)((0,s.Z)({},r),{},{className:"basic-single",classNamePrefix:"select",menuPortalTarget:document.body,styles:S,components:{IndicatorSeparator:function(){return null}},theme:function(e){return(0,s.Z)((0,s.Z)({},e),{},{colors:(0,s.Z)((0,s.Z)({},e.colors),{},{primary25:"#fbf5f0",primary:"#bd6f34"})})},options:A}))}}),E.country&&(0,j.jsx)("span",{className:"error-text",children:null===(r=E.country)||void 0===r?void 0:r.message})]}),(0,j.jsxs)("div",{className:"form-input",children:[(0,j.jsxs)("label",{className:"form-label",children:["State ",(0,j.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,j.jsx)(t.Qr,{name:"state",control:z,render:function(e){var r=e.field;return(0,j.jsx)(u.ZP,(0,s.Z)((0,s.Z)({},r),{},{className:"basic-single",classNamePrefix:"select",menuPortalTarget:document.body,styles:S,components:{IndicatorSeparator:function(){return null}},theme:function(e){return(0,s.Z)((0,s.Z)({},e),{},{colors:(0,s.Z)((0,s.Z)({},e.colors),{},{primary25:"#fbf5f0",primary:"#bd6f34"})})},options:O}))}}),E.state&&(0,j.jsx)("span",{className:"error-text",children:null===(i=E.state)||void 0===i?void 0:i.message})]})]}),(0,j.jsxs)("div",{className:"category-form-input mt-4",children:[(0,j.jsxs)("div",{className:"form-input",children:[(0,j.jsxs)("label",{className:"form-label",children:["City\xa0",(0,j.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,j.jsx)("input",(0,s.Z)({type:"text",className:"form-control mb-0",name:"city",placeholder:""},T("city",{required:!0}))),E.city&&(0,j.jsx)("span",{className:"error-text",children:null===(R=E.city)||void 0===R?void 0:R.message})]}),(0,j.jsxs)("div",{className:"form-input",children:[(0,j.jsxs)("label",{className:"form-label",children:["ZIP\xa0",(0,j.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,j.jsx)("input",(0,s.Z)({type:"number",className:"form-control mb-0",name:"zip",placeholder:""},T("zip",{required:!0}))),E.zip&&(0,j.jsx)("span",{className:"error-text",children:null===(X=E.zip)||void 0===X?void 0:X.message})]})]})]})]}),(0,j.jsxs)("div",{className:"default_shipping_info",children:[(0,j.jsx)("h2",{children:"Flat Shipping Rate"}),(0,j.jsxs)("div",{className:"form-area",children:[(0,j.jsx)("div",{className:"form-input preferences-item",children:(0,j.jsx)("p",{children:"Flat shipping rate is applied on each order from a retailer."})}),(0,j.jsxs)("div",{className:"category-form-input tooltip-input mt-4",children:[(0,j.jsxs)("div",{className:"form-input",children:[(0,j.jsxs)("label",{className:"form-label",children:["Shipping fee ",(0,j.jsx)("span",{className:"asterisk-red",children:"*"}),(0,j.jsxs)("div",{className:"tooltip",children:[(0,j.jsx)("div",{className:"tooltip-icon",children:(0,j.jsx)("img",{src:l.Z,className:"icon"})}),(0,j.jsx)("div",{className:"tooltip_text",children:(0,j.jsx)("p",{children:"This is the flat shipping fee to ship the product."})})]})]}),(0,j.jsxs)("div",{className:"input-wrapper",children:[(0,j.jsx)("div",{className:"prefix",children:"$"}),(0,j.jsx)("input",(0,s.Z)({className:"currency-input mb-0",name:"shippingfee"},T("shippingfee",{required:!0,onBlur:function(e){var r=e.target.value;if(r){var i=Y(r);B("shippingfee",i)}else B("shippingfee","0.00")}})))]}),E.shippingfee&&(0,j.jsx)("span",{className:"error-text",children:null===(w=E.shippingfee)||void 0===w?void 0:w.message})]}),(0,j.jsxs)("div",{className:"form-input",children:[(0,j.jsxs)("label",{className:"form-label",children:["Incremental fee"," ",(0,j.jsx)("span",{className:"asterisk-red",children:"*"}),(0,j.jsxs)("div",{className:"tooltip",children:[(0,j.jsx)("div",{className:"tooltip-icon",children:(0,j.jsx)("img",{src:l.Z,className:"icon"})}),(0,j.jsx)("div",{className:"tooltip_text",children:(0,j.jsx)("p",{children:"This is the cost for every additional item of the same product in an order. For example, if the shipping cost for Product A is $5 and the incremental fee for Product A is $2 and there are 2 units of the same product purchased in the same order, the shipping fee will be $7."})})]})]}),(0,j.jsxs)("div",{className:"input-wrapper",children:[(0,j.jsx)("div",{className:"prefix",children:"$"}),(0,j.jsx)("input",(0,s.Z)({className:"currency-input mb-0",name:"incrementalfee"},T("incrementalfee",{required:!0,onBlur:function(e){var r=e.target.value;if(r){var i=Y(r);B("incrementalfee",i)}else B("incrementalfee","0.00")}})))]}),E.incrementalfee&&(0,j.jsx)("span",{className:"error-text",children:null===(C=E.incrementalfee)||void 0===C?void 0:C.message})]})]})]})]}),(0,j.jsxs)("div",{className:"default_shipping_info",children:[(0,j.jsx)("h2",{children:"Default Days to Fulfill"}),(0,j.jsxs)("div",{className:"form-area",children:[(0,j.jsx)("div",{className:"form-input preferences-item",children:(0,j.jsx)("p",{children:"You can use this section to set default days to fulfill for your products. You will be able to modify this information on a product level."})}),(0,j.jsx)("div",{className:"category-form-input tooltip-input mt-4",children:(0,j.jsxs)("div",{className:"form-input",children:[(0,j.jsxs)("label",{className:"form-label",children:["Default Days to Fulfill",(0,j.jsx)("span",{className:"asterisk-red",children:"*"}),(0,j.jsxs)("div",{className:"tooltip",children:[(0,j.jsx)("div",{className:"tooltip-icon",children:(0,j.jsx)("img",{src:l.Z,className:"icon"})}),(0,j.jsx)("div",{className:"tooltip_text",children:(0,j.jsx)("p",{children:"Number of business days to process and ship product."})})]})]}),(0,j.jsx)(t.Qr,{name:"daystofulfill",control:z,render:function(e){var r=e.field;return(0,j.jsx)(u.ZP,(0,s.Z)((0,s.Z)({},r),{},{className:"basic-single",classNamePrefix:"select",placeholder:"Days to Fulfill",styles:S,components:{IndicatorSeparator:function(){return null}},theme:function(e){return(0,s.Z)((0,s.Z)({},e),{},{colors:(0,s.Z)((0,s.Z)({},e.colors),{},{primary25:"#fbf5f0",primary:"#bd6f34"})})},options:V()}))}}),E.daystofulfill&&(0,j.jsx)("span",{className:"error-text",children:null===(I=E.daystofulfill)||void 0===I?void 0:I.message})]})})]})]}),(0,j.jsx)("div",{className:"form-area",children:(0,j.jsxs)("div",{className:"form-input form-submit mt-4",children:[(0,j.jsx)("button",{onClick:function(){return F()},className:"button button-grey cancel",children:"Cancel"}),(0,j.jsx)("button",{type:"submit",className:"button",children:"Save"})]})})]})})})})]})}),(0,j.jsx)(q.Ix,{})]})}}}]);
//# sourceMappingURL=6727.664bc729.chunk.js.map