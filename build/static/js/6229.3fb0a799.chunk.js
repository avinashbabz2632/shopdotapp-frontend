"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[6229],{91:function(e,i,r){r(2791);i.Z=r.p+"static/media/info.6b6d6ceb4e4be005c910c2459c4393f4.svg"},2089:function(e,i,r){r.d(i,{$7:function(){return a},FI:function(){return u},Gq:function(){return c},Ks:function(){return d},rB:function(){return l},tj:function(){return t},zb:function(){return o}});var s=r(2797),n=r(90),a=s.Ry().shape({businessName:s.Z_().required("Legal business name is required."),businessAs:s.Z_().required("Doing business is required.").test("businessname","doing business is different than the legal name",(function(e){return!e||e!==this.parent.businessName})),website:s.Z_().url("Please enter a valid URL").required("Business website address is required."),businessEmail:s.Z_().email("Must be a valid email.").max(255).required("Business email address is required."),businessCategory:s.Ry().nullable().required("Business category is required."),textIdType:s.Ry().when("businessCategory",{is:function(e){return"single_member_llc"===(null===e||void 0===e?void 0:e.value)||"sole_proprietor"===(null===e||void 0===e?void 0:e.value)},then:s.Ry().nullable().required("TextID is required")}),phoneNumber:s.Z_().nullable().required("Phone number is required.").min(12,"Phone should be 10 digits."),addressLine1:s.Z_().nullable().required("Address line 1 is required."),countryAddress:s.Ry().nullable().required("Country is require."),stateAddress:s.Ry().nullable().required("State is require."),city:s.Z_().required("City is required."),zipcode:s.Z_().nullable().notOneOf(["00000"],"Should be in XXXXX format.Cannot containt all zeroes.").min(5,"Should be in XXXXX format.").max(5,"Zip-code should be 5 digits.").required("Zip-code is required."),stateOfIncorportation:s.Ry().nullable().required("State of incorporation is required."),dateOfIncorportation:s.Z_().nullable().required("Date of incorporation is required."),bankruptcy:s.Z_().nullable().required("Prior bankruptcy is required."),dateOfDischarge:s.Z_().when("bankruptcy",{is:function(e){return"yes"===e},then:s.Z_().nullable().required("Date of discharge is required.")}),averageSales:s.Z_().required("Estimated average sales volume on shopdot is required."),averageSalePrice:s.Z_().required("Estimated average sale price on shopdot is required."),averageDeliveryTime:s.Ry().nullable().required("Average delivery time is required."),merchantCategoryCode:s.Ry().nullable().required("Merchant category code is required."),salesMethod:s.Ry().nullable().required("Sales method is required."),productionDescription:s.Z_().required("Product description is required.")}),l=function(){var e=n.h.getState().gettingPaid.businessDetails;return s.Ry().shape({representativeDetails:s.IX().of(s.Ry().shape({fname:s.Z_().nullable().required("Legal person first name is required."),lname:s.Z_().nullable().required("Legal person last name is required."),phoneNumber:s.Z_().nullable().required("Phone number is required.").min(12,"Phone should be 10 digits."),ssn:s.Z_().nullable().required("SSN is required.").min(11,"SSN should be 9 digit."),dob:s.Z_().nullable().required("Date of birth is required."),email:s.Z_().email("Must be a valid email.").max(255).required("Email address is required."),countryAddress:s.Ry().nullable().required("Country is require."),stateAddress:s.Ry().nullable().required("State is require."),addressLine1:s.Z_().nullable().required("Address line 1 is required."),city:s.Z_().required("City is required."),zipcode:s.Z_().nullable().notOneOf(["00000"],"Should be in XXXXX format.Cannot containt all zeroes.").min(5,"Should be in XXXXX format.").max(5,"Zip-code should be 5 digits.").required("Zip-code is required."),secondaryIdentificationType:s.Ry().nullable().required("Secondary identification is required."),soInsurence:s.Ry().nullable().when("secondaryIdentificationType",{is:function(e){return"dl"===(null===e||void 0===e?void 0:e.value)},then:s.Ry().nullable().required("State of issuance is required.")}),idNumber:s.Z_().nullable().required("Id number is required."),percentageOwnership:s.nK().required("Ownership percentage must be 100%.").test("is-valid-settings","Ownership percentage must be 100%.",(function(i,r){var s,n,a;return console.log("context",r),"partnership"===(null===e||void 0===e||null===(s=e.businessCategory)||void 0===s?void 0:s.value)?""!==i&&!isNaN(i)&&(100===Number(i)||Number(i)>=25&&Number(i)<=100)||r.createError({message:Number(i)>100?"Ownership percentage is invalid!":"Ownership percentage must be 25% or more",path:r.path}):"single_member_llc"===(null===e||void 0===e||null===(n=e.businessCategory)||void 0===n?void 0:n.value)||"sole_proprietor"===(null===e||void 0===e||null===(a=e.businessCategory)||void 0===a?void 0:a.value)?""!==i&&!isNaN(i)&&100===Number(i):""!==i&&!isNaN(i)&&(100===Number(i)||Number(i)>=25&&Number(i)<=100)||r.createError({message:Number(i)>100?"Ownership percentage is invalid!":"Ownership percentage must be 25% or more",path:r.path})}))}))})},t=s.Ry().shape({representativeDetails:s.IX().of(s.Ry().shape({fname:s.Z_().nullable().required("Legal person first name is required."),lname:s.Z_().nullable().required("Legal person last name is required."),phoneNumber:s.Z_().nullable().required("Phone number is required.").min(12,"Phone should be 10 digits."),ssn:s.Z_().nullable().required("SSN is required.").min(11,"SSN should be 9 digit.").max(11,"SSN should be 9 digit."),dob:s.Z_().nullable().required("Date of birth is required."),email:s.Z_().email("Must be a valid email.").max(255).required("Email address is required."),countryAddress:s.Ry().nullable().required("Country is require."),stateAddress:s.Ry().nullable().required("State is require."),addressLine1:s.Z_().nullable().required("Address line 1 is required."),city:s.Z_().required("City is required."),zipcode:s.Z_().nullable().notOneOf(["00000"],"Should be in XXXXX format.Cannot containt all zeroes.").min(5,"Should be in XXXXX format.").max(5,"Zip-code should be 5 digits.").required("Zip-code is required."),secondaryIdentificationType:s.Ry().nullable().required("Secondary identification is required."),soInsurence:s.Ry().nullable().when("secondaryIdentificationType",{is:function(e){return"dl"===(null===e||void 0===e?void 0:e.value)},then:s.Ry().nullable().required("State of issuance is required.")}),idNumber:s.Z_().nullable().required("Id number is required.")}))}),d=s.Ry().shape({accountHolderName:s.Z_().required("Bank account holder name is required."),accountType:s.Ry().nullable().required("Bank account type is required."),accountRole:s.Ry().nullable().required("Purpose is required."),accountNumber:s.Z_().required("Account number is required.").max(8,"Account number should be 8 digits.").min(8,"Account number should be 8 digits."),routingNumber:s.Z_().required("Routing number is require").max(9,"Routing number should be 9 digits.").min(9,"Routing number should be 9 digits.")}),u=s.Ry().shape({confirmation:s.O7().oneOf([!0],"uou need to accept the confirm details"),tnc:s.O7().oneOf([!0],"you need to accept the terms and conditions")}),o=s.Ry().shape({address1:s.Z_().required("Address 1 is required."),daystofulfill:s.Ry().nullable().required("Days to fultill  is required."),state:s.Ry().shape({label:s.Z_().required("State is required."),value:s.Z_().required("State is required.")}).nullable().required("State is required."),country:s.Ry().shape({label:s.Z_().required("Country is required."),value:s.Z_().required("Country is required.")}).nullable().required("Country is required."),city:s.Z_().required("City is required."),shippingfee:s.Z_().required("Shipping fee is required."),incrementalfee:s.Z_().required("Incremental fee is required."),zip:s.Z_().required("Zip-code is required.")}),c=s.Ry().shape({company_name:s.Z_().required("Company name is required."),company_email_address:s.Z_().email("Must be a valid email.").max(255).required("Contact email is required."),company_phone_number:s.Z_().nullable().required("Contact phone number is required.").min(12,"Contact phone should be 12 digits."),store_name:s.Z_().required("Brand name is required."),store_website:s.Z_().url("Please enter a valid URL").required("Brand website is required."),brand_categories:s.IX().min(1,"At least 1 category required").max(3,"Select max 3 category.").nullable().required("Select max 3 category."),brand_values:s.IX(),brand_story:s.Z_().required("About the brand is required."),brand_promo:s.Z_().url("Please enter a valid URL")})},6229:function(e,i,r){r.r(i),r.d(i,{default:function(){return x}});var s=r(1413),n=r(2791),a=r(9434),l=r(91),t=r(1134),d=r(4695),u=r(2089),o=r(504),c=r(1429),m=r(9290),p=r(7423),h=r(3158),f=r(4933),b=r(6711),v=r(1435),q=r(9085),y=(r(763),r(184)),g={control:function(e){return(0,s.Z)((0,s.Z)({},e),{},{marginTop:"6px",boxShadow:"none",minHeight:"40px","&:hover":{boxShadow:"none"}})},container:function(e){return(0,s.Z)((0,s.Z)({},e),{},{marginTop:"5xp",marginRight:"1px"})}};function x(){var e,i,r,x,_,N,j,Z,S=(0,a.v9)(b.U),R=null===S||void 0===S?void 0:S.map((function(e){return{value:e.id,label:e.name}})),X=(0,a.v9)(v.R),C=null===X||void 0===X?void 0:X.map((function(e){return{label:e.name,value:e.country_id}})),I=(0,t.cI)({mode:"onChange",resolver:(0,d.X)(u.zb),defaultValues:{shippingfee:"0.00",incrementalfee:"0.00"}}),P=I.control,w=I.register,D=I.handleSubmit,A=I.reset,O=I.setValue,k=I.formState.errors,z=(0,t.qo)({name:"country",control:P}),T=(0,a.I0)(),L=(0,a.v9)(c.i),F=(0,a.v9)(c.g),B=(0,a.v9)(m.uy),E=(0,a.v9)(f.Sn),M=function(){return F&&F.length>0?F.map((function(e){return{value:e.id,label:e.name}})):[{value:"",label:""}]};(0,n.useEffect)((function(){var e;T((0,p.D9)(null===E||void 0===E||null===(e=E.brand_profile)||void 0===e?void 0:e.id))}),[]),(0,n.useEffect)((function(){z&&z.value&&T((0,h.k)(null===z||void 0===z?void 0:z.value))}),[z]);(0,n.useEffect)((function(){!function(){var e;if(null!==L&&void 0!==L&&null!==(e=L.shippingDetails)&&void 0!==e&&e.brand_details&&F){var i,r,s,n,a,l,t,d,u=null===L||void 0===L||null===(i=L.shippingDetails)||void 0===i||null===(r=i.brand_details)||void 0===r?void 0:r.shipping_rate;F&&F.length,A({address1:null===u||void 0===u||null===(s=u.shipping_address)||void 0===s?void 0:s.street_address_1,address2:null===u||void 0===u||null===(n=u.shipping_address)||void 0===n?void 0:n.street_address_2,country:R?null===R||void 0===R?void 0:R.find((function(e){var i;return(null===u||void 0===u||null===(i=u.shipping_address)||void 0===i?void 0:i.country)===e.label})):"",state:C?null===C||void 0===C?void 0:C.find((function(e){var i;return(null===u||void 0===u||null===(i=u.shipping_address)||void 0===i?void 0:i.state)===e.label})):"",city:null===u||void 0===u||null===(a=u.shipping_address)||void 0===a?void 0:a.city,zip:null===u||void 0===u||null===(l=u.shipping_address)||void 0===l?void 0:l.zip,shippingfee:null===u||void 0===u?void 0:u.shipping_cost,incrementalfee:null===u||void 0===u?void 0:u.incremental_fee,daystofulfill:!(null===u||void 0===u||null===(t=u.shipping_address)||void 0===t||!t.shipping_time_id)&&(null===(d=M())||void 0===d?void 0:d.find((function(e){var i;return e.value===(null===u||void 0===u||null===(i=u.shipping_address)||void 0===i?void 0:i.shipping_time_id)})))})}}()}),[L,F]);var $=function(e){var i;if(e.includes(".")){var r,s=e.split("."),n="".concat(s[0]);r=s[1].length>=2?s[1].substr(0,2):"".concat(s[1],"0"),i="".concat(n,".").concat(r)}else{var a=e.substr(0,2);i="".concat(a,".00")}return i};return(0,y.jsxs)("div",{className:"pc_tabs-content tabs_body",children:[(0,y.jsx)("div",{className:"tab active","data-target":"Shipping",children:(0,y.jsxs)("div",{className:"products_content",children:[(0,y.jsx)("div",{className:"products_head mp-head",children:(0,y.jsx)("div",{className:"products_head-content",children:(0,y.jsx)("div",{className:"title",children:(0,y.jsx)("h1",{children:"Shipping Information"})})})}),(0,y.jsx)("div",{className:"products_body ",children:(0,y.jsx)("div",{className:"content_area",children:(0,y.jsx)("div",{id:"shipping",children:(0,y.jsxs)("form",{onSubmit:D((function(e){var i,r;T((0,p.JT)({brand_id:null===E||void 0===E||null===(i=E.brand_profile)||void 0===i?void 0:i.id,user_id:B.id,street_address_1:e.address1,street_address_2:e.address2?e.address2:null,country:e.country.label,state:e.state.label,city:e.city,zip:e.zip,shipping_cost:parseFloat(e.shippingfee).toFixed(2),incremental_fee:parseFloat(e.incrementalfee).toFixed(2),shipping_time_id:e.daystofulfill.value},null===L||void 0===L||null===(r=L.shippingDetails)||void 0===r?void 0:r.id)),A()})),children:[(0,y.jsxs)("div",{className:"shipping_info",children:[(0,y.jsx)("h2",{children:"Shipping Location"}),(0,y.jsxs)("div",{className:"form-area",children:[(0,y.jsxs)("div",{className:"form-input mb-4",children:[(0,y.jsxs)("label",{className:"form-label",children:["Address 1\xa0",(0,y.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,y.jsx)("input",(0,s.Z)({type:"text",className:"form-control mb-0",id:"",name:"address1",placeholder:""},w("address1",{required:!0}))),k.address1&&(0,y.jsx)("span",{className:"error-text",children:null===(e=k.address1)||void 0===e?void 0:e.message})]}),(0,y.jsxs)("div",{className:"form-input mb-4",children:[(0,y.jsx)("label",{className:"form-label",children:"Address 2"}),(0,y.jsx)("input",(0,s.Z)({type:"text",className:"form-control ",name:"address2"},w("address2",{required:!1})))]}),(0,y.jsxs)("div",{className:"category-form-input",children:[(0,y.jsxs)("div",{className:"form-input",children:[(0,y.jsxs)("label",{className:"form-label",children:["Country \xa0",(0,y.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,y.jsx)(t.Qr,{name:"country",control:P,render:function(e){var i=e.field;return(0,y.jsx)(o.ZP,(0,s.Z)((0,s.Z)({},i),{},{className:"basic-single",classNamePrefix:"select",menuPortalTarget:document.body,styles:g,components:{IndicatorSeparator:function(){return null}},theme:function(e){return(0,s.Z)((0,s.Z)({},e),{},{colors:(0,s.Z)((0,s.Z)({},e.colors),{},{primary25:"#fbf5f0",primary:"#bd6f34"})})},options:R}))}}),k.country&&(0,y.jsx)("span",{className:"error-text",children:null===(i=k.country)||void 0===i?void 0:i.message})]}),(0,y.jsxs)("div",{className:"form-input",children:[(0,y.jsxs)("label",{className:"form-label",children:["State ",(0,y.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,y.jsx)(t.Qr,{name:"state",control:P,render:function(e){var i=e.field;return(0,y.jsx)(o.ZP,(0,s.Z)((0,s.Z)({},i),{},{className:"basic-single",classNamePrefix:"select",menuPortalTarget:document.body,styles:g,components:{IndicatorSeparator:function(){return null}},theme:function(e){return(0,s.Z)((0,s.Z)({},e),{},{colors:(0,s.Z)((0,s.Z)({},e.colors),{},{primary25:"#fbf5f0",primary:"#bd6f34"})})},options:C}))}}),k.state&&(0,y.jsx)("span",{className:"error-text",children:null===(r=k.state)||void 0===r?void 0:r.message})]})]}),(0,y.jsxs)("div",{className:"category-form-input mt-4",children:[(0,y.jsxs)("div",{className:"form-input",children:[(0,y.jsxs)("label",{className:"form-label",children:["City\xa0",(0,y.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,y.jsx)("input",(0,s.Z)({type:"text",className:"form-control mb-0",name:"city",placeholder:""},w("city",{required:!0}))),k.city&&(0,y.jsx)("span",{className:"error-text",children:null===(x=k.city)||void 0===x?void 0:x.message})]}),(0,y.jsxs)("div",{className:"form-input",children:[(0,y.jsxs)("label",{className:"form-label",children:["ZIP\xa0",(0,y.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,y.jsx)("input",(0,s.Z)({type:"number",className:"form-control mb-0",name:"zip",placeholder:""},w("zip",{required:!0}))),k.zip&&(0,y.jsx)("span",{className:"error-text",children:null===(_=k.zip)||void 0===_?void 0:_.message})]})]})]})]}),(0,y.jsxs)("div",{className:"default_shipping_info",children:[(0,y.jsx)("h2",{children:"Flat Shipping Rate"}),(0,y.jsxs)("div",{className:"form-area",children:[(0,y.jsx)("div",{className:"form-input preferences-item",children:(0,y.jsx)("p",{children:"Flat shipping rate is applied on each order from a retailer."})}),(0,y.jsxs)("div",{className:"category-form-input tooltip-input mt-4",children:[(0,y.jsxs)("div",{className:"form-input",children:[(0,y.jsxs)("label",{className:"form-label",children:["Shipping fee ",(0,y.jsx)("span",{className:"asterisk-red",children:"*"}),(0,y.jsxs)("div",{className:"tooltip",children:[(0,y.jsx)("div",{className:"tooltip-icon",children:(0,y.jsx)("img",{src:l.Z,className:"icon"})}),(0,y.jsx)("div",{className:"tooltip_text",children:(0,y.jsx)("p",{children:"This is the flat shipping fee to ship the product."})})]})]}),(0,y.jsxs)("div",{className:"input-wrapper",children:[(0,y.jsx)("div",{className:"prefix",children:"$"}),(0,y.jsx)("input",(0,s.Z)({className:"currency-input mb-0",name:"shippingfee"},w("shippingfee",{required:!0,onBlur:function(e){var i=e.target.value;if(i){var r=$(i);O("shippingfee",r)}else O("shippingfee","0.00")}})))]}),k.shippingfee&&(0,y.jsx)("span",{className:"error-text",children:null===(N=k.shippingfee)||void 0===N?void 0:N.message})]}),(0,y.jsxs)("div",{className:"form-input",children:[(0,y.jsxs)("label",{className:"form-label",children:["Incremental fee"," ",(0,y.jsx)("span",{className:"asterisk-red",children:"*"}),(0,y.jsxs)("div",{className:"tooltip",children:[(0,y.jsx)("div",{className:"tooltip-icon",children:(0,y.jsx)("img",{src:l.Z,className:"icon"})}),(0,y.jsx)("div",{className:"tooltip_text",children:(0,y.jsx)("p",{children:"This is the cost for every additional item of the same product in an order. For example, if the shipping cost for Product A is $5 and the incremental fee for Product A is $2 and there are 2 units of the same product purchased in the same order, the shipping fee will be $7."})})]})]}),(0,y.jsxs)("div",{className:"input-wrapper",children:[(0,y.jsx)("div",{className:"prefix",children:"$"}),(0,y.jsx)("input",(0,s.Z)({className:"currency-input mb-0",name:"incrementalfee"},w("incrementalfee",{required:!0,onBlur:function(e){var i=e.target.value;if(i){var r=$(i);O("incrementalfee",r)}else O("incrementalfee","0.00")}})))]}),k.incrementalfee&&(0,y.jsx)("span",{className:"error-text",children:null===(j=k.incrementalfee)||void 0===j?void 0:j.message})]})]})]})]}),(0,y.jsxs)("div",{className:"default_shipping_info",children:[(0,y.jsx)("h2",{children:"Default Days to Fulfill"}),(0,y.jsxs)("div",{className:"form-area",children:[(0,y.jsx)("div",{className:"form-input preferences-item",children:(0,y.jsx)("p",{children:"You can use this section to set default days to fulfill for your products. You will be able to modify this information on a product level."})}),(0,y.jsx)("div",{className:"category-form-input tooltip-input mt-4",children:(0,y.jsxs)("div",{className:"form-input",children:[(0,y.jsxs)("label",{className:"form-label",children:["Default Days to Fulfill",(0,y.jsx)("span",{className:"asterisk-red",children:"*"}),(0,y.jsxs)("div",{className:"tooltip",children:[(0,y.jsx)("div",{className:"tooltip-icon",children:(0,y.jsx)("img",{src:l.Z,className:"icon"})}),(0,y.jsx)("div",{className:"tooltip_text",children:(0,y.jsx)("p",{children:"Number of business days to process and ship product."})})]})]}),(0,y.jsx)(t.Qr,{name:"daystofulfill",control:P,render:function(e){var i=e.field;return(0,y.jsx)(o.ZP,(0,s.Z)((0,s.Z)({},i),{},{className:"basic-single",classNamePrefix:"select",placeholder:"Days to Fulfill",styles:g,components:{IndicatorSeparator:function(){return null}},theme:function(e){return(0,s.Z)((0,s.Z)({},e),{},{colors:(0,s.Z)((0,s.Z)({},e.colors),{},{primary25:"#fbf5f0",primary:"#bd6f34"})})},options:M()}))}}),k.daystofulfill&&(0,y.jsx)("span",{className:"error-text",children:null===(Z=k.daystofulfill)||void 0===Z?void 0:Z.message})]})})]})]}),(0,y.jsx)("div",{className:"form-area",children:(0,y.jsxs)("div",{className:"form-input form-submit mt-4",children:[(0,y.jsx)("button",{onClick:function(){return A()},className:"button button-grey cancel",children:"Cancel"}),(0,y.jsx)("button",{type:"submit",className:"button",children:"Save"})]})})]})})})})]})}),(0,y.jsx)(q.Ix,{})]})}},1429:function(e,i,r){r.d(i,{g:function(){return n},i:function(){return s}});var s=function(e){return e.shipping.shippingData},n=function(e){return e.shipping.shippingTimes}},6711:function(e,i,r){r.d(i,{U:function(){return s}});var s=function(e){return e.countries.countries}},1435:function(e,i,r){r.d(i,{R:function(){return s}});var s=function(e){return e.states.states}}}]);
//# sourceMappingURL=6229.3fb0a799.chunk.js.map