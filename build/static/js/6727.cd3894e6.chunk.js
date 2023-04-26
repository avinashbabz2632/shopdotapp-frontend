"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[6727],{91:function(e,r,i){i(2791);r.Z=i.p+"static/media/info.6b6d6ceb4e4be005c910c2459c4393f4.svg"},743:function(e,r,i){i.d(r,{Gq:function(){return n},zb:function(){return a}});var s=i(2797),a=(s.Ry().shape({legal_name:s.Z_().required("Legal Business name is required."),email:s.Z_().email("Must be a valid email.").max(255).required("Contact email is required."),store_website:s.Z_().required("Must be a valid website."),doing_business_as:s.Z_().required("Doing Business is required.").test("legal_name","Doing Business is different than the legal name",(function(e){return!e||e!==this.parent.legal_name})),business_category:s.Ry().required("Business Category is required."),textIdType:s.Ry().when("businessCategory",{is:function(e){return"signle_member_llc"===(null===e||void 0===e?void 0:e.value)},then:s.Ry().nullable().required("TextID is required")}),ein:s.Z_().required("Employer Identification Number is required"),ssn:s.Z_().when("textIdType",{is:function(e){return"ssn"===(null===e||void 0===e?void 0:e.value)},then:s.Z_().required("Social Security Number is required.")}).when("businessCategory",{is:function(e){return"solo_proprietor"===(null===e||void 0===e?void 0:e.value)},then:s.Z_().required("Social Security Number is required.")}),state_of_incorporation:s.Ry().shape({label:s.Z_().required("State of Incorporation is required."),value:s.Z_().required("State of Incorporation is required.")}).nullable().required("State of Incorporation is required."),date_of_incorporation:s.Z_().required("Date of Incorporation is required."),prior_bankruptcy:s.Z_().nullable().required("Prior Bankruptcy is required."),dateOfDischarge:s.Z_().when("prior_bankruptcy",{is:function(e){return!0===e},then:s.Z_().required("Date of Discharge is required.")}),average_sales_volume:s.Z_().required("Estimated Average Sales Volume on ShopDot is required."),average_purchase:s.Z_().required("Estimated Average Sale Price on ShopDot is required."),average_delivery_time:s.Ry().shape({label:s.Z_().required("Average Delivery Time is required."),value:s.Z_().required("Average Delivery Time is required.")}).nullable().required("Average Delivery Time is required."),merchant_category_code:s.Ry().shape({label:s.Z_().required("Merchant Category Code is required."),value:s.Z_().required("Merchant Category Code is required.")}).nullable().required("Merchant Category Code is required."),sales_method:s.Ry().shape({label:s.Z_().required("Sales Method is required."),value:s.Z_().required("Sales Method is required.")}).nullable().required("Sales Method is required."),product_description:s.Z_().required("Product Description is required.")}),s.Ry().shape({owner_first_name:s.Z_().required("Legal Person first name is required."),owner_last_name:s.Z_().required("Legal Person last name is required."),owner_phone:s.Z_().required("Phone number is required."),owner_dob:s.Z_().required("Date of birth is required."),countryAddress:s.Ry().shape({label:s.Z_().required("Country is require."),value:s.Z_().required("Country is require.")}).nullable().required("Address State is require."),state:s.Ry().shape({label:s.Z_().required("Address State is require."),value:s.Z_().required("Address State is require.")}).nullable().required("Address State is require."),address_line_1:s.Z_().required("Address line 1 is required."),address_line_2:s.Z_(),city:s.Z_().required("City is required."),zip:s.Z_().required("Zip-code is required."),secondary_identification_type:s.Ry().nullable().required("Secondary Identification is required."),identification_state_of_issuance:s.Ry().when("secondary_identification_type",{is:function(e){return"dl"!==(null===e||void 0===e?void 0:e.value)},then:s.Ry().nullable().required("Country of issuance is required.")}),identification_id:s.Z_().required("Id number is required.")}),s.Ry().shape({account_holder_name:s.Z_().required("Bank Account holder name is required."),account_type:s.Ry().nullable().required("Bank Account type is required."),purpose:s.Ry().nullable().required("Purpose is required."),account_number:s.Z_().max(12).required("Account number is required."),routing_number:s.Z_().required("Routing number is require")}),s.Ry().shape({confirmation:s.O7().oneOf([!0],"You need to accept the confirm details"),tnc:s.O7().oneOf([!0],"You need to accept the terms and conditions")}),s.Ry().shape({address1:s.Z_().required("Address 1 is required."),daystofulfill:s.Ry().nullable().required("Days to fultill  is required."),statelist:s.Ry().shape({label:s.Z_().required("State Category is required."),value:s.Z_().required("State Category is required.")}).nullable().required("State Category is required."),country:s.Z_().required("Country is required."),city:s.Z_().required("City is required."),shippingfee:s.Z_().required("Shipping fee is require."),incrementalfee:s.Z_().required("Incremental fee is require."),zip:s.Z_().required("Zip-code is required.")})),n=s.Ry().shape({company_name:s.Z_().required("Company name is required."),company_email_address:s.Z_().email("Must be a valid email.").max(255).required("Contact email is required."),company_phone_number:s.Z_().required("Contact phone number is required."),store_name:s.Z_().required("Brand name is required."),store_website:s.Z_().required("Brand website is required."),brand_categories:s.IX().min(1,"At least 1 category required").max(3,"Select max 3 category.").nullable().required("Select max 3 category."),brand_values:s.IX().min(1,"At least 1 value required").max(3,"Select max 3 values.").nullable().required("Select max 3 values."),brand_story:s.Z_().required("About the brand is required."),brand_promo:s.Z_().required("Please enter valid website.")})},6727:function(e,r,i){i.r(r),i.d(r,{default:function(){return w}});var s=i(1413),a=i(2791),n=i(9434),t=i(91),l=i(1134),d=i(4695),o=i(743),u=i(9593),c=function(e){return e.shipping.shippingData},p=function(e){return e.shipping.shippingTimes},m=i(9290),h=i(7423),f=i(4165),v=i(5861),_=i(9731),x=i(9085),q=i(5548),b=i(7077),y=i(2381);var g=i(4933),Z=function(e){return e.countries.countries},j=function(e){return e.states.states},N=(i(763),i(184)),S={control:function(e){return(0,s.Z)((0,s.Z)({},e),{},{marginTop:"6px",boxShadow:"none",minHeight:"40px","&:hover":{boxShadow:"none"}})},container:function(e){return(0,s.Z)((0,s.Z)({},e),{},{marginTop:"5xp",marginRight:"1px"})}};function w(){var e,r,i,w,C,D,R,A,I=(0,n.v9)(Z),k=null===I||void 0===I?void 0:I.map((function(e){return{value:e.id,label:e.name}})),P=(0,n.v9)(j),z=null===P||void 0===P?void 0:P.map((function(e){return{label:e.name,value:e.country_id}})),T=(0,l.cI)({mode:"onChange",resolver:(0,d.X)(o.zb),defaultValues:{shippingfee:"0.00",incrementalfee:"0.00"}}),B=T.control,F=T.register,M=T.handleSubmit,E=T.reset,O=T.setValue,$=T.formState.errors,L=(0,l.qo)({name:"country",control:B}),Y=(0,n.I0)(),Q=(0,n.v9)(c),V=(0,n.v9)(p),X=(0,n.v9)(m.uy),G=(0,n.v9)(g.Sn),H=function(){return V&&V.length?V.map((function(e){return{value:e.id,label:e.name}})):void 0};(0,a.useEffect)((function(){var e;Y(function(){var e=(0,v.Z)((0,f.Z)().mark((function e(r){var i;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.Z.get("".concat(q.od));case 3:return(i=e.sent)&&i.data&&200==i.data.code&&i.data.data&&r((0,b.s)(i.data.data)),e.abrupt("return",i);case 8:throw e.prev=8,e.t0=e.catch(0),x.Am.error(e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.errors?e.t0.response.data.errors:"Something went worng"),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()),Y((0,h.D9)(null===G||void 0===G||null===(e=G.brand_profile)||void 0===e?void 0:e.id)),Y((0,h.pP)())}),[]),(0,a.useEffect)((function(){var e;L&&L.value&&Y((e=null===L||void 0===L?void 0:L.value,function(){var r=(0,v.Z)((0,f.Z)().mark((function r(i){var s;return(0,f.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,_.Z.get("".concat(q.PO(e)));case 3:return(s=r.sent)&&s.data&&200==s.data.code&&s.data.data&&i((0,y.W)(s.data.data)),r.abrupt("return",s);case 8:throw r.prev=8,r.t0=r.catch(0),x.Am.error(r.t0&&r.t0.response&&r.t0.response.data&&r.t0.response.data.errors?r.t0.response.data.errors:"Something went worng"),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()))}),[L]);(0,a.useEffect)((function(){!function(){var e;if(null!==Q&&void 0!==Q&&null!==(e=Q.shippingDetails)&&void 0!==e&&e.brand_details&&V){var r,i,s,a,n,t,l,d=null===Q||void 0===Q||null===(r=Q.shippingDetails)||void 0===r||null===(i=r.brand_details)||void 0===i?void 0:i.shipping_rate;V&&V.length,E({address1:null===d||void 0===d||null===(s=d.shipping_address)||void 0===s?void 0:s.street_address_1,address2:null===d||void 0===d||null===(a=d.shipping_address)||void 0===a?void 0:a.street_address_2,country:k.find((function(e){var r;return(null===d||void 0===d||null===(r=d.shipping_address)||void 0===r?void 0:r.country)===e.label})),state:z.find((function(e){var r;return(null===d||void 0===d||null===(r=d.shipping_address)||void 0===r?void 0:r.state)===e.label})),city:null===d||void 0===d||null===(n=d.shipping_address)||void 0===n?void 0:n.city,zip:null===d||void 0===d||null===(t=d.shipping_address)||void 0===t?void 0:t.zip,shippingfee:null===d||void 0===d?void 0:d.shipping_cost,incrementalfee:null===d||void 0===d?void 0:d.incremental_fee,daystofulfill:!(null===d||void 0===d||null===(l=d.shipping_address)||void 0===l||!l.shipping_time_id)&&H().find((function(e){var r;return e.value===(null===d||void 0===d||null===(r=d.shipping_address)||void 0===r?void 0:r.shipping_time_id)}))})}}()}),[Q,V]);var J=function(e){var r;if(e.includes(".")){var i,s=e.split("."),a="".concat(s[0]);i=s[1].length>=2?s[1].substr(0,2):"".concat(s[1],"0"),r="".concat(a,".").concat(i)}else{var n=e.substr(0,2);r="".concat(n,".00")}return r};return(0,N.jsxs)("div",{className:"pc_tabs-content tabs_body",children:[(0,N.jsx)("div",{className:"tab active","data-target":"Shipping",children:(0,N.jsxs)("div",{className:"products_content",children:[(0,N.jsx)("div",{className:"products_head mp-head",children:(0,N.jsx)("div",{className:"products_head-content",children:(0,N.jsx)("div",{className:"title",children:(0,N.jsx)("h1",{children:"Shipping Information"})})})}),(0,N.jsx)("div",{className:"products_body ",children:(0,N.jsx)("div",{className:"content_area",children:(0,N.jsx)("div",{id:"shipping",children:(0,N.jsxs)("form",{onSubmit:M((function(e){var r,i;Y((0,h.JT)({brand_id:null===G||void 0===G||null===(r=G.brand_profile)||void 0===r?void 0:r.id,user_id:X.id,street_address_1:e.address1,street_address_2:e.address2?e.address2:null,country:e.country.label,state:e.state.label,city:e.city,zip:e.zip,shipping_cost:parseFloat(e.shippingfee).toFixed(2),incremental_fee:parseFloat(e.incrementalfee).toFixed(2),shipping_time_id:e.daystofulfill.value},null===Q||void 0===Q||null===(i=Q.shippingDetails)||void 0===i?void 0:i.id)),E()})),children:[(0,N.jsxs)("div",{className:"shipping_info",children:[(0,N.jsx)("h2",{children:"Shipping Location"}),(0,N.jsxs)("div",{className:"form-area",children:[(0,N.jsxs)("div",{className:"form-input mb-4",children:[(0,N.jsxs)("label",{className:"form-label",children:["Address 1\xa0",(0,N.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,N.jsx)("input",(0,s.Z)({type:"text",className:"form-control mb-0",id:"",name:"address1",placeholder:""},F("address1",{required:!0}))),$.address1&&(0,N.jsx)("span",{className:"error-text",children:null===(e=$.address1)||void 0===e?void 0:e.message})]}),(0,N.jsxs)("div",{className:"form-input mb-4",children:[(0,N.jsx)("label",{className:"form-label",children:"Address 2"}),(0,N.jsx)("input",(0,s.Z)({type:"text",className:"form-control ",name:"address2"},F("address2",{required:!1})))]}),(0,N.jsxs)("div",{className:"category-form-input",children:[(0,N.jsxs)("div",{className:"form-input",children:[(0,N.jsxs)("label",{className:"form-label",children:["Country \xa0",(0,N.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,N.jsx)(l.Qr,{name:"country",control:B,render:function(e){var r=e.field;return(0,N.jsx)(u.ZP,(0,s.Z)((0,s.Z)({},r),{},{className:"basic-single",classNamePrefix:"select",styles:S,components:{IndicatorSeparator:function(){return null}},theme:function(e){return(0,s.Z)((0,s.Z)({},e),{},{colors:(0,s.Z)((0,s.Z)({},e.colors),{},{primary25:"#fbf5f0",primary:"#bd6f34"})})},options:k}))}}),$.country&&(0,N.jsx)("span",{className:"error-text",children:null===(r=$.country)||void 0===r?void 0:r.message})]}),(0,N.jsxs)("div",{className:"form-input",children:[(0,N.jsxs)("label",{className:"form-label",children:["State ",(0,N.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,N.jsx)(l.Qr,{name:"state",control:B,render:function(e){var r=e.field;return(0,N.jsx)(u.ZP,(0,s.Z)((0,s.Z)({},r),{},{className:"basic-single",classNamePrefix:"select",styles:S,components:{IndicatorSeparator:function(){return null}},theme:function(e){return(0,s.Z)((0,s.Z)({},e),{},{colors:(0,s.Z)((0,s.Z)({},e.colors),{},{primary25:"#fbf5f0",primary:"#bd6f34"})})},options:z}))}}),$.state&&(0,N.jsx)("span",{className:"error-text",children:null===(i=$.state)||void 0===i?void 0:i.message})]})]}),(0,N.jsxs)("div",{className:"category-form-input mt-4",children:[(0,N.jsxs)("div",{className:"form-input",children:[(0,N.jsxs)("label",{className:"form-label",children:["City\xa0",(0,N.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,N.jsx)("input",(0,s.Z)({type:"text",className:"form-control mb-0",name:"city",placeholder:""},F("city",{required:!0}))),$.city&&(0,N.jsx)("span",{className:"error-text",children:null===(w=$.city)||void 0===w?void 0:w.message})]}),(0,N.jsxs)("div",{className:"form-input",children:[(0,N.jsxs)("label",{className:"form-label",children:["ZIP\xa0",(0,N.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,N.jsx)("input",(0,s.Z)({type:"number",className:"form-control mb-0",name:"zip",placeholder:""},F("zip",{required:!0}))),$.zip&&(0,N.jsx)("span",{className:"error-text",children:null===(C=$.zip)||void 0===C?void 0:C.message})]})]})]})]}),(0,N.jsxs)("div",{className:"default_shipping_info",children:[(0,N.jsx)("h2",{children:"Flat Shipping Rate"}),(0,N.jsxs)("div",{className:"form-area",children:[(0,N.jsx)("div",{className:"form-input preferences-item",children:(0,N.jsx)("p",{children:"Flat shipping rate is applied on each order from a retailer."})}),(0,N.jsxs)("div",{className:"category-form-input tooltip-input mt-4",children:[(0,N.jsxs)("div",{className:"form-input",children:[(0,N.jsxs)("label",{className:"form-label",children:["Shipping fee ",(0,N.jsx)("span",{className:"asterisk-red",children:"*"}),(0,N.jsxs)("div",{className:"tooltip",children:[(0,N.jsx)("div",{className:"tooltip-icon",children:(0,N.jsx)("img",{src:t.Z,className:"icon"})}),(0,N.jsx)("div",{className:"tooltip_text",children:(0,N.jsx)("p",{children:"This is the flat shipping fee to ship the product."})})]})]}),(0,N.jsxs)("div",{className:"input-wrapper",children:[(0,N.jsx)("div",{className:"prefix",children:"$"}),(0,N.jsx)("input",(0,s.Z)({className:"currency-input mb-0",name:"shippingfee"},F("shippingfee",{required:!0,onBlur:function(e){var r=e.target.value;if(r){var i=J(r);O("shippingfee",i)}else O("shippingfee","0.00")}})))]}),$.shippingfee&&(0,N.jsx)("span",{className:"error-text",children:null===(D=$.shippingfee)||void 0===D?void 0:D.message})]}),(0,N.jsxs)("div",{className:"form-input",children:[(0,N.jsxs)("label",{className:"form-label",children:["Incremental fee"," ",(0,N.jsx)("span",{className:"asterisk-red",children:"*"}),(0,N.jsxs)("div",{className:"tooltip",children:[(0,N.jsx)("div",{className:"tooltip-icon",children:(0,N.jsx)("img",{src:t.Z,className:"icon"})}),(0,N.jsx)("div",{className:"tooltip_text",children:(0,N.jsx)("p",{children:"This is the cost for every additional item of the same product in an order. For example, if the shipping cost for Product A is $5 and the incremental fee for Product A is $2 and there are 2 units of the same product purchased in the same order, the shipping fee will be $7."})})]})]}),(0,N.jsxs)("div",{className:"input-wrapper",children:[(0,N.jsx)("div",{className:"prefix",children:"$"}),(0,N.jsx)("input",(0,s.Z)({className:"currency-input mb-0",name:"incrementalfee"},F("incrementalfee",{required:!0,onBlur:function(e){var r=e.target.value;if(r){var i=J(r);O("incrementalfee",i)}else O("incrementalfee","0.00")}})))]}),$.incrementalfee&&(0,N.jsx)("span",{className:"error-text",children:null===(R=$.incrementalfee)||void 0===R?void 0:R.message})]})]})]})]}),(0,N.jsxs)("div",{className:"default_shipping_info",children:[(0,N.jsx)("h2",{children:"Default Days to Fulfill"}),(0,N.jsxs)("div",{className:"form-area",children:[(0,N.jsx)("div",{className:"form-input preferences-item",children:(0,N.jsx)("p",{children:"You can use this section to set default days to fulfill for your products. You will be able to modify this information on a product level."})}),(0,N.jsx)("div",{className:"category-form-input tooltip-input mt-4",children:(0,N.jsxs)("div",{className:"form-input",children:[(0,N.jsxs)("label",{className:"form-label",children:["Default Days to Fulfill",(0,N.jsx)("span",{className:"asterisk-red",children:"*"}),(0,N.jsxs)("div",{className:"tooltip",children:[(0,N.jsx)("div",{className:"tooltip-icon",children:(0,N.jsx)("img",{src:t.Z,className:"icon"})}),(0,N.jsx)("div",{className:"tooltip_text",children:(0,N.jsx)("p",{children:"Number of business days to process and ship product."})})]})]}),(0,N.jsx)(l.Qr,{name:"daystofulfill",control:B,render:function(e){var r=e.field;return(0,N.jsx)(u.ZP,(0,s.Z)((0,s.Z)({},r),{},{className:"basic-single",classNamePrefix:"select",placeholder:"Days to Fulfill",styles:S,components:{IndicatorSeparator:function(){return null}},theme:function(e){return(0,s.Z)((0,s.Z)({},e),{},{colors:(0,s.Z)((0,s.Z)({},e.colors),{},{primary25:"#fbf5f0",primary:"#bd6f34"})})},options:H()}))}}),$.daystofulfill&&(0,N.jsx)("span",{className:"error-text",children:null===(A=$.daystofulfill)||void 0===A?void 0:A.message})]})})]})]}),(0,N.jsx)("div",{className:"form-area",children:(0,N.jsxs)("div",{className:"form-input form-submit mt-4",children:[(0,N.jsx)("button",{onClick:function(){return E()},className:"button button-grey cancel",children:"Cancel"}),(0,N.jsx)("button",{type:"submit",className:"button",children:"Save"})]})})]})})})})]})}),(0,N.jsx)(x.Ix,{})]})}}}]);
//# sourceMappingURL=6727.cd3894e6.chunk.js.map