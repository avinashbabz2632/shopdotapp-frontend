"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[3533],{3044:function(e,s,a){a.r(s),a.d(s,{default:function(){return y}});var r=a(9439),l=a(1413),i=a(2791),n=a(1134),t=a(8630),o=a(4695),c=a(2797),d=c.Ry().shape({company_name:c.Z_().required("Company name is required."),contactEmail:c.Z_().email("Must be a valid email.").max(255).required("Contact email is required."),contactPhone:c.Z_().required("Contact phone number is required."),retailerName:c.Z_().required("Retailer name is required."),retailerWebsite:c.Z_().required("Retailer website is required."),retailerCategory:c.Ry().nullable().required("Retailer category  is required."),aboutTheRetailer:c.Z_().required("About the retailer is required."),addressLine1:c.Z_().required("Address 1 is required."),countryAddress:c.Ry().nullable().required("Country  is required."),stateAddress:c.Ry().nullable().required("State  is required."),city:c.Z_().required("City is required."),zipcode:c.Z_().required("Zip is required.")});var m=a.p+"static/media/icon-edit.66db4866fc239f5ff3f3b6abbb739e70.svg",u=a.p+"static/media/profile-avatar.261dfdda4addff8f0f82.jpg",p=(a(5212),a(9434)),h=a(4933),x=a(7423);a(9731),a(9085),a(5548),a(1319),a(3537),a(8098);var b=a(763),v=a(184),f=[{label:"Apparel Boutique",value:0},{label:"Bakery or Coffee Shop",value:1},{label:"Book Store",value:2},{label:"Electronics",value:3},{label:"Fitness or Yoga Studio",value:4},{label:"Florist or Garden Store",value:5},{label:"Gift Store",value:6},{label:"Kids or Toy Store",value:7},{label:"Medical Office",value:8},{label:"Musical Instruments",value:9},{label:"Pharmacy",value:10},{label:"Pet Store",value:11},{label:"Shoe Store",value:12},{label:"Spa or Salon",value:13},{label:"Sporting and Outdoors",value:14}],j=[{value:"usa",label:"United States"},{value:"canada",label:"Canada"}],N=[{value:"California",label:"California"},{value:"Texas",label:"Texas"}],_={control:function(e){return(0,l.Z)((0,l.Z)({},e),{},{boxShadow:"none",minHeight:"40px","&:hover":{boxShadow:"none"}})},container:function(e){return(0,l.Z)((0,l.Z)({},e),{},{marginTop:"5px",marginRight:"1px"})}};function y(){var e,s,a,c,y,g,Z,q,k,S,C,R,w,P,A=(0,i.useState)(u),I=(0,r.Z)(A,2),F=I[0],T=I[1],z=(0,i.useState)(),M=(0,r.Z)(z,2),B=M[0],G=M[1],U=(0,i.useState)([]),D=(0,r.Z)(U,2),E=D[0],L=D[1],O=(0,p.I0)(),Y=(0,p.v9)(h.ZL);(0,i.useEffect)((function(){setTimeout((function(){O((0,x.Yy)())}),350)}),[]);var J=function(e){var s=function(e){var s=e,a=new FileReader;a.onloadend=function(){G(a.result)},a.readAsDataURL(s)}(e.target.files[0]);G(s)},Q=(0,n.cI)({mode:"onChange",resolver:(0,o.X)(d)}),H=Q.control,K=Q.register,V=Q.handleSubmit,W=Q.reset,X=Q.formState.errors;return(0,v.jsx)("div",{className:"pc_tabs-content tabs_body",children:(0,v.jsx)("div",{className:"tab active","data-target":"Account",children:(0,v.jsxs)("div",{className:"products_content",children:[(0,v.jsxs)("div",{className:"products_head mp-head head-with-subtitle",children:[(0,v.jsx)("div",{className:"products_head-content",children:(0,v.jsx)("div",{className:"title",children:(0,v.jsx)("h1",{children:"Retailer Profile"})})}),(0,v.jsx)("p",{children:"Information entered on this page will be visible to retailers within ShopDot."})]}),(0,v.jsx)("div",{className:"products_body",children:(0,v.jsx)("div",{className:"content_area",children:(0,v.jsx)("div",{id:"account",children:(0,v.jsxs)("form",{onSubmit:V((function(e){W()})),children:[(0,v.jsxs)("div",{className:"account_info",children:[(0,v.jsx)("h2",{children:"Company Information "}),(0,v.jsxs)("div",{className:"form-area",children:[(0,v.jsxs)("div",{className:"form-input tooltip-input mb-4",children:[(0,v.jsxs)("label",{className:"form-label",children:["Company name ",(0,v.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,v.jsx)("input",(0,l.Z)({type:"text",className:"form-control mb-0",name:"company_name",id:"",placeholder:""},K("company_name",{required:!0}))),(null===X||void 0===X?void 0:X.company_name)&&(0,v.jsx)("span",{className:"error-text",children:null===X||void 0===X||null===(e=X.company_name)||void 0===e?void 0:e.message})]}),(0,v.jsxs)("div",{className:"form-input tooltip-input mb-4",children:[(0,v.jsxs)("label",{className:"form-label",children:["Contact email ",(0,v.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,v.jsx)("input",(0,l.Z)({type:"text",className:"form-control mb-0",name:"company_email_address",id:"",placeholder:""},K("company_email_address",{required:!0}))),(null===X||void 0===X?void 0:X.company_email_address)&&(0,v.jsx)("span",{className:"error-text",children:null===X||void 0===X||null===(s=X.company_email_address)||void 0===s?void 0:s.message})]}),(0,v.jsxs)("div",{className:"form-input tooltip-input mb-4",children:[(0,v.jsxs)("label",{className:"form-label",children:["Contact phone number"," ",(0,v.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,v.jsx)("input",(0,l.Z)({type:"number",className:"form-control mb-0",id:"",name:"company_phone_number",placeholder:""},K("company_phone_number",{required:!0}))),(null===X||void 0===X?void 0:X.company_phone_number)&&(0,v.jsx)("span",{className:"error-text",children:null===X||void 0===X||null===(a=X.company_phone_number)||void 0===a?void 0:a.message})]})]})]}),(0,v.jsxs)("div",{className:"shipping_info",children:[(0,v.jsx)("h2",{children:"Shipping Address"}),(0,v.jsxs)("div",{className:"form-area",children:[(0,v.jsxs)("div",{className:"form-input mb-4",children:[(0,v.jsxs)("label",{htmlFor:"",className:"form-label",children:["Address line 1 ",(0,v.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,v.jsx)("input",(0,l.Z)({type:"text",className:"form-control mb-0",name:"store_mailing_address",placeholder:""},K("store_mailing_address",{required:!0}))),X.store_mailing_address&&(0,v.jsx)("span",{className:"error-text",children:null===(c=X.store_mailing_address)||void 0===c?void 0:c.message})]}),(0,v.jsxs)("div",{className:"form-input mb-4",children:[(0,v.jsx)("label",{htmlFor:"",className:"form-label",children:"Address line 2"}),(0,v.jsx)("input",(0,l.Z)({type:"text",className:"form-control mb-0",name:"store_mailing_address_2",placeholder:""},K("store_mailing_address_2",{required:!1}))),X.store_mailing_address_2&&(0,v.jsx)("span",{className:"error-text",children:null===(y=X.store_mailing_address_2)||void 0===y?void 0:y.message})]}),(0,v.jsxs)("div",{className:"category-form-input",children:[(0,v.jsxs)("div",{className:"form-input mb-4",children:[(0,v.jsxs)("label",{className:"form-label",children:["Country ",(0,v.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,v.jsx)(n.Qr,{name:"store_country",control:H,required:!0,render:function(e){var s=e.field;return(0,v.jsx)(t.ZP,(0,l.Z)((0,l.Z)({},s),{},{className:"basic-single",classNamePrefix:"select",styles:_,components:{IndicatorSeparator:function(){return null}},theme:function(e){return(0,l.Z)((0,l.Z)({},e),{},{colors:(0,l.Z)((0,l.Z)({},e.colors),{},{primary25:"#fbf5f0",primary:"#bd6f34"})})},options:j}))}}),X.store_country&&(0,v.jsx)("span",{className:"error-text",children:null===(g=X.store_country)||void 0===g?void 0:g.message})]}),(0,v.jsxs)("div",{className:"form-input mb-2",children:[(0,v.jsxs)("label",{className:"form-label",children:["State ",(0,v.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,v.jsx)(n.Qr,{name:"store_state",control:H,required:!0,render:function(e){var s=e.field;return(0,v.jsx)(t.ZP,(0,l.Z)((0,l.Z)({},s),{},{className:"basic-single",classNamePrefix:"select",styles:_,components:{IndicatorSeparator:function(){return null}},theme:function(e){return(0,l.Z)((0,l.Z)({},e),{},{colors:(0,l.Z)((0,l.Z)({},e.colors),{},{primary25:"#fbf5f0",primary:"#bd6f34"})})},options:N}))}}),X.store_state&&(0,v.jsx)("span",{className:"error-text",children:null===(Z=X.store_state)||void 0===Z?void 0:Z.message})]})]}),(0,v.jsxs)("div",{className:"category-form-input",children:[(0,v.jsxs)("div",{className:"form-input mb-2",children:[(0,v.jsxs)("label",{htmlFor:"",className:"form-label",children:["City ",(0,v.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,v.jsx)("input",(0,l.Z)({type:"text",className:"form-control mb-2 mt-0",name:"store_city"},K("store_city",{required:!0}))),X.store_city&&(0,v.jsx)("span",{className:"error-text",children:null===(q=X.store_city)||void 0===q?void 0:q.message})]}),(0,v.jsxs)("div",{className:"form-input mb-2",children:[(0,v.jsxs)("label",{htmlFor:"",className:"form-label",children:["ZIP ",(0,v.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,v.jsx)("input",(0,l.Z)({type:"text",className:"form-control mb-2 mt-0",name:"zipcode"},K("zipcode",{required:!0}))),X.zipcode&&(0,v.jsx)("span",{className:"error-text",children:null===(k=X.zipcode)||void 0===k?void 0:k.message})]})]})]})]}),(0,v.jsxs)("div",{className:"my_store",children:[(0,v.jsx)("h2",{children:"Retailer Information "}),(0,v.jsxs)("div",{className:"form-area",children:[(0,v.jsxs)("div",{className:"form-input form-upload-image",children:[(0,v.jsx)("a",{href:"#",className:"upload-logo",children:(0,v.jsxs)("label",{children:[(0,v.jsx)("input",{className:"d-none",id:"",type:"file",onChange:function(e){return T(URL.createObjectURL(e.target.files[0]))}}),(0,v.jsx)("img",{src:m,className:"icon"}),(0,v.jsx)("div",{className:"profile-user-avtar",children:(0,v.jsx)("img",{src:F})})]})}),(0,v.jsxs)("label",{children:["Upload logo",(0,v.jsx)("span",{className:"asterisk-red",children:" *"}),(0,v.jsxs)("a",{href:"#",className:"remove-logo",onClick:function(){return T(u)},children:["Remove logo"," "]}),(0,v.jsxs)("span",{className:"logo-instruction",children:["Format Type:",(0,v.jsx)("b",{children:" JPEG or PNG"}),". Maximum size is ",(0,v.jsx)("b",{children:"5MB"}),", No less than ",(0,v.jsx)("b",{children:"512 x 512"})," pixels and no more than"," ",(0,v.jsx)("b",{children:"1024 x 1024"})," pixels."]})]})]}),(0,v.jsxs)("div",{className:"form-input mb-4",children:[(0,v.jsxs)("label",{className:"form-label",children:["Retailer name ",(0,v.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,v.jsx)("input",(0,l.Z)({type:"text",className:"form-control mb-0",name:"store_name",id:"",placeholder:""},K("store_name",{required:!0}))),(null===X||void 0===X?void 0:X.store_name)&&(0,v.jsx)("span",{className:"error-text",children:null===X||void 0===X||null===(S=X.store_name)||void 0===S?void 0:S.message})]}),(0,v.jsxs)("div",{className:"form-input tooltip-input mb-4",children:[(0,v.jsxs)("label",{className:"form-label",children:["Retailer website",(0,v.jsx)("span",{className:"asterisk-red",children:"*"}),(0,v.jsxs)("div",{className:"tooltip",children:[(0,v.jsx)("div",{className:"tooltip-icon",children:(0,v.jsx)("svg",{className:"icon"})}),(0,v.jsx)("div",{className:"tooltip_text",children:(0,v.jsx)("p",{children:"This is your store that is connected with ShopDot. You can connect a different store in the Integration section."})})]})]}),(0,v.jsx)("input",(0,l.Z)({type:"text",className:"form-control mb-0",name:"store_website",placeholder:"janebeautyparlor.com"},K("store_website",{required:!0}))),(null===X||void 0===X?void 0:X.store_website)&&(0,v.jsx)("span",{className:"error-text",children:null===X||void 0===X||null===(C=X.store_website)||void 0===C?void 0:C.message})]}),(0,v.jsxs)("div",{className:"form-input mb-4",children:[(0,v.jsxs)("label",{className:"form-label",children:["Retailer category"," ",(0,v.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,v.jsx)(n.Qr,{name:"retailerCategory",control:H,render:function(e){var s=e.field;return(0,v.jsx)(t.ZP,(0,l.Z)((0,l.Z)({},s),{},{className:"basic-single",classNamePrefix:"select",styles:_,components:{IndicatorSeparator:function(){return null}},theme:function(e){return(0,l.Z)((0,l.Z)({},e),{},{colors:(0,l.Z)((0,l.Z)({},e.colors),{},{primary25:"#fbf5f0",primary:"#bd6f34"})})},options:f}))}}),X.retailerCategory&&(0,v.jsx)("span",{className:"error-text",children:null===(R=X.retailerCategory)||void 0===R?void 0:R.message})]}),(0,v.jsxs)("div",{className:"form-input form-checkbox mb-4",children:[(0,v.jsx)("label",{className:"form-label",children:"Retailer values"}),(0,v.jsx)("div",{className:"select-checkbox third-col",children:(0,v.jsx)("div",{className:"select-checkbox",children:Y&&Y.length?Y.map((function(e,s){return(0,v.jsx)("div",{className:"check-item",children:(0,v.jsxs)("label",{className:"checkbox",children:[(0,v.jsx)("input",(0,l.Z)({type:"checkbox",name:"retailer_values",checked:E.includes(e.id),value:e.id},K("retailer_values",{required:!1,onChange:function(e){!function(e,s){var a=JSON.parse(e),r=E,l=(0,b.cloneDeep)(r);l.includes(a)?(0,b.remove)(l,(function(e,s){return e===a})):l.push(a),L(l)}(e.target.value)}}))),(0,v.jsx)("div",{className:"checkbox-text",children:(0,v.jsx)("span",{children:e.name})})]})},s)})):(0,v.jsx)("div",{})})})]}),(0,v.jsxs)("div",{className:"form-input form-story mb-4",children:[(0,v.jsxs)("label",{className:"form-label",children:["About the retailer"," ",(0,v.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,v.jsx)("textarea",(0,l.Z)({rows:"8",className:"text-area",name:"retailer_story",placeholder:""},K("retailer_story",{required:!0}))),(null===X||void 0===X?void 0:X.retailer_story)&&(0,v.jsx)("span",{className:"error-text",children:null===X||void 0===X||null===(w=X.retailer_story)||void 0===w?void 0:w.message})]}),(0,v.jsxs)("div",{className:"form-input mb-4",children:[(0,v.jsx)("label",{className:"form-label",children:"Add a Youtube or Vimeo video link"}),(0,v.jsx)("input",(0,l.Z)({type:"text",className:"form-control",name:"link"},K("link",{required:!1}))),X.link&&(0,v.jsx)("span",{className:"error-text",children:null===(P=X.link)||void 0===P?void 0:P.message})]}),(0,v.jsxs)("div",{className:"form-input form-upload mb-4",children:[(0,v.jsx)("label",{className:"form-label",children:"Upload a photo of your store"}),(0,v.jsx)("div",{className:"uploadOuter",children:(0,v.jsxs)("span",{className:"dragBox",children:["Drag and drop file here",(0,v.jsx)("input",{type:"file",name:"storeImage",onChange:function(e){return J(e)}}),(0,v.jsxs)("span",{className:"dragbox-smallnote",children:["Format Type: ",(0,v.jsx)("b",{children:"JPEG or PNG"}),". Maximum size is"," ",(0,v.jsx)("b",{children:"5MB"}),"."]})]})}),(0,v.jsx)("div",{className:"preview",children:(0,v.jsx)("img",{src:B,className:"preview-img"})})]}),(0,v.jsxs)("div",{className:"form-input form-submit",children:[(0,v.jsx)("button",{onClick:function(){return W()},className:"button button-grey cancel",children:"Cancel"}),(0,v.jsx)("button",{type:"submit",className:"button",children:"Save"})]})]})]})]})})})})]})})})}},5212:function(){}}]);
//# sourceMappingURL=3533.50672307.chunk.js.map