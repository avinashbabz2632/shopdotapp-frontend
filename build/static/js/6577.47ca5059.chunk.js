"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[6577],{39377:function(e,i,s){s(72791);i.Z=s.p+"static/media/icon-msrp--dollar.f4e309bd186d1acddc2758623fb08b06.svg"},45875:function(e,i,s){var n=s(29439),a=s(72791),r=s(80184);i.Z=function(e){var i=e.data,s=e.initialValue,t=e.onChange,c=a.useState(!1),d=(0,n.Z)(c,2),l=d[0],o=d[1];a.useEffect((function(){o(s)}),[s]);return(0,r.jsx)("input",{type:"checkbox",value:i,checked:l,name:"bs",onChange:function(e){var i=e.target.checked,s=e.target.value;o(i),t&&t(i,s)}})}},33133:function(e,i,s){s.r(i),s.d(i,{default:function(){return k}});var n=s(93433),a=s(29439),r=s(72791),t=s(59015),c=s(1413),d=s(38803),l=s(59434),o=s(24453),u=s(40749),m=s(45875),h=s(6593),v=s(54356),p=s(80184);var x=function(e){var i=e.brandId,s=(0,r.useState)(!0),t=(0,a.Z)(s,2),x=t[0],f=t[1],j=(0,l.I0)(),b=(0,r.useState)([]),g=(0,a.Z)(b,2),N=(g[0],g[1],(0,r.useState)([])),_=(0,a.Z)(N,2),A=(_[0],_[1],(0,r.useState)({min:"",max:""})),w=(0,a.Z)(A,2),C=w[0],y=w[1],P=(0,r.useState)(""),Z=(0,a.Z)(P,2),B=(Z[0],Z[1],(0,r.useState)("wsp")),K=(0,a.Z)(B,2),S=K[0],I=K[1],k=(0,l.v9)(o.aL),E=(0,l.v9)(o.lF),T=(0,l.v9)(o.Wy),V=(0,l.v9)(o.c1),U=(0,l.v9)(o.A_),M=(0,l.v9)(o.F3),R=(0,l.v9)(o.nF),H=(0,l.v9)(o.vU),F=(0,l.v9)(o.WZ),X=(0,l.v9)(o.O7),W=(0,l.v9)(v.h_),G=["$1 - $99","$100 - $499","$500 - $999","$1000 or more"],z=function(){var e=[];if(e.push({field:"brand_id",operator:"in",value:[i]}),R&&R.length>0){var s={field:"tags",operator:"in",value:R};e.push(s)}if(k&&k.length>0){var n={field:"brand_id",operator:"in",value:k.map((function(e){return parseInt(e.brand_details.id)}))};e.push(n)}if(E&&E.length>0){var a={field:"brand_status",operator:"in",value:E.map((function(e){return e.value}))};e.push(a)}if(U&&U.length>0&&U.forEach((function(i){var s;if("$1 - $99"==i)s={field:"wsp",operator:"between",value:"1-99"};else if("$100 - $499"==i)s={field:"wsp",operator:"between",value:"100-499"};else if("$500 - $999"==i)s={field:"wsp",operator:"between",value:"500-999"};else if("$1000 or more"==i);s&&e.push(s)})),M&&M.length>0&&M.forEach((function(i){var s;"$1 - $99"==i&&(s={field:"price",operator:"between",value:"1-99"}),"$100 - $499"==i&&(s={field:"price",operator:"between",value:"100-499"}),"$500 - $999"==i&&(s={field:"price",operator:"between",value:"500-999"}),"$1000 or more"==i&&(s={field:"price",operator:"gte",value:"1000"}),s&&e.push(s)})),V&&V.length>0&&V.forEach((function(i){if("< 10 units"===i){e.push({field:"inventory_quantity",operator:"lt",value:10})}else if("11-50 units"===i){e.push({field:"inventory_quantity",operator:"between",value:"11-50"})}else if("> 50 units"===i){e.push({field:"inventory_quantity",operator:"gt",value:50})}})),T&&T.length>0){var r={field:"days_to_fulfill",operator:"in",value:T};e.push(r)}if(C.min&&C.max&&parseInt(C.max)>parseInt(C.min)){var t={field:S,operator:"between",value:"".concat(C.min,"-").concat(C.max)};e.push(t)}return e};(0,r.useEffect)((function(){!function(){var e={paging:{limit:H,offset:F},query:{},filter:z()};X&&(e.query.search=X),j((0,h.IE)(e))}()}),[k,E,T,V,U,M,R,C,X,H,F]);var D=function(){j((0,u.Ei)([])),j((0,u.fz)([])),j((0,u.a5)([])),j((0,u.W4)([])),j((0,u.JZ)([])),j((0,u.fu)([]))};(0,r.useEffect)((function(){D()}),[]);var L=function(e,i){var s=(0,n.Z)(R);if(e)s.push(i),j((0,u.Mz)(s));else{var a=s.filter((function(e){return e!==i}));j((0,u.Mz)(a))}},q=function(e,i){var s=(0,n.Z)(U);if(e)s.push(i),j((0,u.JZ)(s));else{var a=s.filter((function(e){return e!==i}));j((0,u.JZ)(a))}},Q=function(e,i){var s=(0,n.Z)(M);if(e)s.push(i),j((0,u.fu)(s));else{var a=s.filter((function(e){return e!==i}));j((0,u.fu)(a))}},J=function(e,i){var s=(0,n.Z)(V);if(e)s.push(i),j((0,u.W4)(s));else{var a=s.filter((function(e){return e!==i}));j((0,u.W4)(a))}},Y=function(e,i){var s=(0,n.Z)(T);if(e)s.push(i),j((0,u.a5)(s));else{var a=s.filter((function(e){return e!==i}));j((0,u.a5)(a))}},$=function(e){I(e)};return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("aside",{className:"filters ".concat(x?"":"hidden"),children:(0,p.jsxs)("div",{className:"filters_wrap",children:[(0,p.jsxs)("div",{className:"filters_block filters_block-head",children:[(0,p.jsx)("button",{className:"filters_hide-and-show",onClick:function(){f(!x)},children:(0,p.jsx)("div",{className:"icon",children:(0,p.jsx)("img",{src:d.Z})})}),!0===x&&(0,p.jsx)("span",{className:"filters-clear",style:{cursor:"pointer"},onClick:function(){return D()},children:"Clear Filters"})]}),(0,p.jsx)("div",{className:"filters_block filters_block-body",children:(0,p.jsx)("div",{className:"filter-by-products",children:(0,p.jsx)("div",{className:"filter_body",children:(0,p.jsxs)("div",{className:"subfilters",children:[(0,p.jsxs)("div",{className:"filter_form-results",children:[(0,p.jsx)("div",{className:"subfilter_head",children:"tagsValue"}),(0,p.jsx)("div",{className:"filter_form-items",children:W&&(null===W||void 0===W?void 0:W.map((function(e,i){return(0,p.jsx)("div",{className:"checkbox checkbox--no-decor",children:(0,p.jsxs)("label",{children:[(0,p.jsx)(m.Z,{data:null===e||void 0===e?void 0:e.tag,onChange:L,initialValue:R&&R.some((function(i){return i==(null===e||void 0===e?void 0:e.tag)}))}),(0,p.jsx)("div",{className:"checkbox-text",children:null===e||void 0===e?void 0:e.tag})]})},i)})))})]}),(0,p.jsxs)("div",{className:"subfilter mt-5",children:[(0,p.jsx)("div",{className:"subfilter_head",children:"Price"}),(0,p.jsx)("div",{className:"subfilter_body",children:(0,p.jsxs)("div",{className:"tabs",children:[(0,p.jsxs)("div",{className:"tab_menu",children:[(0,p.jsx)("button",{className:"tab-link ".concat("wsp"===S?"active":""),onClick:function(){return $("wsp")},children:"WSP"}),(0,p.jsx)("button",{className:"tab-link ".concat("msrp"===S?"active":""),onClick:function(){return $("msrp")},children:"MSRP"})]}),(0,p.jsxs)("div",{className:"tabs_body",children:["wsp"===S?(0,p.jsx)("div",{className:"tab active","data-target":"wsp",children:(0,p.jsx)("div",{className:"tab_inner",children:G.map((function(e,i){return(0,p.jsx)("div",{className:"checkbox checkbox--no-decor",children:(0,p.jsxs)("label",{children:[(0,p.jsx)(m.Z,{data:e,onChange:q,initialValue:"wsp"===S&&U&&U.some((function(i){return i==e}))}),(0,p.jsx)("div",{className:"checkbox-text",children:e})]})},i)}))})}):(0,p.jsx)("div",{className:"tab active","data-target":"msrp",children:(0,p.jsx)("div",{className:"tab_inner",children:G.map((function(e,i){return(0,p.jsx)("div",{className:"checkbox checkbox--no-decor",children:(0,p.jsxs)("label",{children:[(0,p.jsx)(m.Z,{data:e,onChange:Q,initialValue:"msrp"===S&&M&&M.some((function(i){return i==e}))}),(0,p.jsx)("div",{className:"checkbox-text",children:e})]})},i)}))})}),(0,p.jsxs)("div",{className:"min-max",children:[(0,p.jsx)("input",{type:"number",name:"min-wsp-wsp",placeholder:"$ Min",value:null===C||void 0===C?void 0:C.min,onChange:function(e){return y((0,c.Z)((0,c.Z)({},C),{},{min:e.target.value}))}}),(0,p.jsx)("span",{className:"spacer",children:"-"}),(0,p.jsx)("input",{type:"number",name:"max-wsp-wsp",placeholder:"$ Max",onChange:function(e){return y((0,c.Z)((0,c.Z)({},C),{},{max:e.target.value}))},value:null===C||void 0===C?void 0:C.max})]}),C.max&&C.min&&parseInt(C.max)<parseInt(C.min)?(0,p.jsx)("span",{style:{color:"#FF0000"},children:"Max is less than Min"}):null]})]})})]}),(0,p.jsxs)("div",{className:"subfilter",children:[(0,p.jsx)("div",{className:"subfilter_head",children:"Stock"}),(0,p.jsx)("div",{className:"subfilter_body",children:["< 10 units","11-50 units","> 50 units"].map((function(e,i){return(0,p.jsx)("div",{className:"checkbox checkbox--no-decor",children:(0,p.jsxs)("label",{children:[(0,p.jsx)(m.Z,{data:e,onChange:J,initialValue:V&&V.some((function(i){return i==e}))}),(0,p.jsx)("div",{className:"checkbox-text",children:e})]})},i)}))})]}),(0,p.jsxs)("div",{className:"subfilter",children:[(0,p.jsx)("div",{className:"subfilter_head",children:"Days to Fulfill"}),(0,p.jsx)("div",{className:"subfilter_body",children:["1-3 days","4-6 days","> 7 days"].map((function(e,i){return(0,p.jsx)("div",{className:"checkbox checkbox--no-decor",children:(0,p.jsxs)("label",{children:[(0,p.jsx)(m.Z,{data:e,onChange:Y,initialValue:T&&T.some((function(i){return i===e}))}),(0,p.jsx)("div",{className:"checkbox-text",children:e})]})},i)}))})]})]})})})})]})})})},f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEuSURBVHgBzdhbCsIwEIXhwY06O+vsdGygwRgsSZO5nAP6ICn834uEEnVT1eP8vAlspam0jQ6V+DoYxBVfd9wdauNhEF38f8RNfDriJv4XMYhPQwziv4jzi3VuYYjJ+DKuD8AgHsc3D6YjluMRENvxmQiz+AyEeXwkwi0+AuEe74kIi/dAhMdbItLiLRDp8TsImPgVhKLFLyDw4o0RTJnbRDAhbBHBhLSHCCajvchu6nTWfzr/V9kO473TYjwGYjM+F2EUn4N4EM+K9t5JF+42MAjduJilI9TgVpmGUMMrcTjCMj4c4REfhvCMd0dExLshIuPNERnxZojM+G0EQvwyAil+CXF+ycRBpuBNIqQeFqT4SYT0hwUpvuniYXxzWJDi6zqEjA4LUnzdhZD+9w9d5GAK8DaIDAAAAABJRU5ErkJggg==",j=s(57689),b=s(11087),g=s(44573),N=s(34418),_=s(87511),A=s(32337),w=s(38607),C=s(63194),y=s(39377),P=s(763),Z=s(4155),B=s(27852),K=s(26718),S=s(37372),I=s(96710);var k=function(){var e=(0,j.s0)(),i=(0,l.I0)(),s=(0,j.UO)(),c=(0,r.useState)(null),m=(0,a.Z)(c,2),k=(m[0],m[1]),E=(0,r.useState)([]),T=(0,a.Z)(E,2),V=(T[0],T[1],(0,r.useState)([])),U=(0,a.Z)(V,2),M=(U[0],U[1],(0,r.useState)([])),R=(0,a.Z)(M,2),H=R[0],F=(R[1],(0,r.useState)([])),X=(0,a.Z)(F,2),W=X[0],G=(X[1],(0,r.useState)([])),z=(0,a.Z)(G,2),D=z[0],L=(z[1],(0,r.useState)(!0)),q=(0,a.Z)(L,2),Q=q[0],J=q[1],Y=(0,r.useState)(Array(C.l.length).fill(0)),$=(0,a.Z)(Y,2),O=$[0],ee=$[1],ie=(0,j.TH)().state||{},se=ie.user_id,ne=ie.brand_id,ae=(0,l.v9)(v.eA),re=(0,l.v9)(v.Wb),te=(0,l.v9)(o.vU),ce=(0,l.v9)(o.WZ),de=(0,l.v9)(o.Wy),le=(0,l.v9)(o.c1),oe=(0,l.v9)(o.A_),ue=(0,l.v9)(o.F3),me=(0,l.v9)(o.O7),he=(0,l.v9)(o.nF),ve=re.count,pe=re.rows,xe=0;pe&&pe.length>0&&(xe=Math.ceil(ve/te));var fe={field:"brand_id",operator:"in",value:[ne]},je=function(e){var i,s=(e||{}).user||{},n=s.invitees,a=s.inviters;if(0===n.length&&0===a.length)i="Not Connected";else if(n.length>0){var r=n[0];"accepted"===r.invite_status.toLowerCase()?i="Connected":"pending"===r.invite_status.toLowerCase()&&(i="Pending")}else if(a.length>0){var t=a[0];"accepted"===t.invite_status.toLowerCase()?i="Connected":"pending"===t.invite_status.toLowerCase()&&(i="Pending")}return i},be=function(e){var i,s,n=(e||{}).product_images;n&&n.length>0&&(i=null===(s=n[0])||void 0===s?void 0:s.src);return i},ge=ae||{},Ne=ge.brand_profile,_e=(ge.shop_detail,ge.user_detail,ge.referal_url,ge.brandPreference),Ae=(ge.shippingRate,ge.payment_detail,ge.brand_values),we=ge.brand_categories,Ce=ge.connected_status,ye=ge.product_categories,Pe=Ne||{},Ze=Pe.shipping_rate,Be=Pe.store_logo,Ke=(Ze||{}).shipping_address;(0,r.useEffect)((function(){i((0,h.R7)(se)),i((0,u.Np)(10)),i((0,u.nb)(0)),function(){var e={paging:{limit:te,offset:ce},query:{},filter:[fe]};i((0,h.IE)(e))}(),i((0,h.RL)(se))}),[]),(0,r.useEffect)((function(){J(false)}),[false]),(0,r.useEffect)((function(){var e=C.q.find((function(e){return e.id===Number(null===s||void 0===s?void 0:s.id)||e.productCategoryTag===(null===s||void 0===s?void 0:s.productCategoryTag)||e.brandValues===(null===s||void 0===s?void 0:s.brandValues)}));e&&k(e)}),[C.q,null===s||void 0===s?void 0:s.id,null===s||void 0===s?void 0:s.productCategoryTag,null===s||void 0===s?void 0:s.brandValues]);var Se=function(e){"tagsValue"===e?i((0,u.Mz)([])):"wspFilterValues"===e?i((0,u.JZ)([])):"msrpFilterValues"===e?i((0,u.fu)([])):"stockFilters"===e?i((0,u.W4)([])):"daysFullfillFilters"===e&&i((0,u.a5)([]))},Ie=function(e){var s,n=null===(s=e.target.value)||void 0===s?void 0:s.toLowerCase();i((0,u.EZ)(n))};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"wrapper",children:[(0,p.jsx)(t.Z,{}),!0===Q?(0,p.jsx)(S.Z,{}):(0,p.jsx)("main",{className:"content products_content-detail detail-page",children:(0,p.jsx)("section",{className:"section products",children:(0,p.jsxs)("div",{className:"products_content",children:[(0,p.jsx)("div",{className:"products_head mp-head",children:(0,p.jsx)("div",{className:"products_head-content",children:(0,p.jsxs)("div",{className:"product_head",children:[(0,p.jsx)("span",{className:"back",onClick:function(){return e(-1)},children:(0,p.jsx)("div",{className:"icon",children:(0,p.jsx)("img",{src:d.Z})})}),(0,p.jsxs)("div",{className:"title",children:[(0,p.jsx)("h1",{children:null===Ne||void 0===Ne?void 0:Ne.store_name}),(0,p.jsxs)("div",{className:"product_status",children:[(0,p.jsxs)("span",{className:"status-pill w-auto ".concat("connected"===Ce&&"pill_connected"," ").concat("pending"===Ce&&"pill_pending"," ").concat("declined"===Ce&&"pill_declined"," ").concat("not connected"===Ce&&"pill_not_connected"),children:[null===Ce||void 0===Ce?void 0:Ce.charAt(0).toUpperCase(),null===Ce||void 0===Ce?void 0:Ce.substring(1)]}),"\xa0 \xa0"]})]}),(0,p.jsx)("div",{className:"buttons",children:(0,p.jsx)("a",{href:"mailto:".concat(Ne.company_email_address),children:(0,p.jsx)("button",{className:"button message-brand",children:(0,p.jsx)("div",{className:"icon",children:(0,p.jsx)("img",{src:g.Z})})})})})]})})}),(0,p.jsxs)("div",{className:"brand-single_wrap products_body",children:[(0,p.jsx)("div",{className:"brand-single_content",children:(0,p.jsxs)("div",{className:"brand-single_content-body",children:[(0,p.jsx)("div",{className:"brand-single_about",children:(0,p.jsxs)("div",{className:"brand-single_about-content",children:[(0,p.jsxs)("div",{className:"brand-left-head",children:[(0,p.jsx)("div",{className:"brand-img",children:(0,p.jsx)("picture",{children:(0,p.jsx)("img",{src:Be,alt:""})})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:"brand-title",children:null===Ne||void 0===Ne?void 0:Ne.company_name}),(0,p.jsxs)("div",{className:"brand-single_about-item",children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Shipping Location: "}),null===Ke||void 0===Ke?void 0:Ke.country,",",null===Ke||void 0===Ke?void 0:Ke.state]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Website: "}),(0,p.jsx)("a",{href:null===Ne||void 0===Ne?void 0:Ne.store_website,target:"_blank",children:null===Ne||void 0===Ne?void 0:Ne.store_website})]})]})]})]}),(0,p.jsxs)("div",{className:"brand-single_about-items mt-4 mb-4",children:[(0,p.jsxs)("div",{className:"brand-single_about-item",children:[(0,p.jsxs)("div",{className:"brand-single_about-item-title",children:["Brand Categories:"," "]}),(0,p.jsx)("div",{className:"brand-single_about-item-wrap",children:null===we||void 0===we?void 0:we.map((function(e,i){return(0,p.jsx)("a",{href:"#",children:null===e||void 0===e?void 0:e.name},i)}))})]}),(0,p.jsxs)("div",{className:"brand-single_about-item",children:[(0,p.jsxs)("div",{className:"brand-single_about-item-title",children:["Brand Values:"," "]}),(0,p.jsx)("div",{className:"brand-single_about-item-wrap",children:null===Ae||void 0===Ae?void 0:Ae.map((function(e,i){return(0,p.jsx)("a",{href:"#",children:null===e||void 0===e?void 0:e.name},i)}))})]}),(0,p.jsxs)("div",{className:"brand-single_about-item",children:[(0,p.jsxs)("div",{className:"brand-single_about-item-title",children:["Product Categories:"," "]}),(0,p.jsx)("div",{className:"brand-single_about-item-wrap",children:ye&&(null===ye||void 0===ye?void 0:ye.map((function(e,i){var s;return(0,p.jsx)("a",{href:"#",children:null===e||void 0===e||null===(s=e.parent_category)||void 0===s?void 0:s.name},i)})))})]})]}),(0,p.jsxs)("div",{className:"brand-single_about-msrp",children:[(0,p.jsx)("div",{className:"dollar",children:(0,p.jsx)("picture",{children:(0,p.jsx)("img",{src:y.Z,alt:"doller"})})}),"Brand enforces retail price."]}),(0,p.jsx)("div",{className:"mt-4",children:(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Return and Refund Policy "}),(0,p.jsx)("br",{}),null===_e||void 0===_e?void 0:_e.return_policy]})}),(0,p.jsx)("div",{className:"mt-5",children:(0,p.jsxs)("p",{children:[(0,p.jsxs)("strong",{children:["Requirements for retailers who want to connect to with the brand"," "]}),(0,p.jsx)("br",{}),null===_e||void 0===_e?void 0:_e.connect_brand]})})]})}),(0,p.jsx)("div",{className:"brand-single_info",children:(0,p.jsxs)("div",{className:"brand-single_block",children:[(0,p.jsx)("h2",{children:"About the Brand"}),null===Ne||void 0===Ne?void 0:Ne.brand_story,(0,p.jsx)(I.Z,{url:null===Ne||void 0===Ne?void 0:Ne.brand_promo})]})})]})}),(0,p.jsxs)("section",{className:"section products products--style-1 bg-white mt-5",children:[(0,p.jsx)(x,{brandId:ne}),(0,p.jsxs)("div",{className:"products_content update_products_content",children:[(0,p.jsx)("div",{className:"products_head",children:(0,p.jsxs)("div",{className:"products_head-content",children:[(0,p.jsxs)("div",{className:"title",children:[(0,p.jsx)("h1",{children:"Products"}),(0,p.jsx)("div",{className:"number",children:ve})]}),(0,p.jsx)("div",{className:"products_head-search",children:(0,p.jsxs)("form",{className:"search_form",children:[(0,p.jsx)("div",{className:"search_form-input",children:(0,p.jsx)("input",{type:"text",placeholder:"Search product",value:me,onChange:function(e){return Ie(e)}})}),0!==(null===me||void 0===me?void 0:me.length)?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:"close_icon_search",onClick:function(){return Ie({target:{value:""}})},children:(0,p.jsx)("img",{className:"product_clear_icon",src:K.Z})})}):(0,p.jsx)("img",{className:"icon",src:B.Z})]})})]})}),(!(0,P.isEmpty)(he)||!(0,P.isEmpty)(oe)||!(0,P.isEmpty)(ue)||!(0,P.isEmpty)(H)||!(0,P.isEmpty)(W)||!(0,P.isEmpty)(D))&&(0,p.jsx)("div",{className:"products_mid",children:(0,p.jsxs)("div",{className:"products_active-filters mb-0",children:[!(0,P.isEmpty)(he)&&(0,p.jsxs)("div",{className:"products_active-filter",children:[(0,p.jsxs)("div",{className:"txt",children:[(0,p.jsx)("b",{children:"Tags:"})," ",null===he||void 0===he?void 0:he.join(", ")]}),(0,p.jsx)("button",{className:"products_active-remove",onClick:function(){return Se("tagsValue")},children:(0,p.jsx)("img",{src:f})})]}),!(0,P.isEmpty)(oe)&&(0,p.jsxs)("div",{className:"products_active-filter",children:[(0,p.jsxs)("div",{className:"txt",children:[(0,p.jsx)("b",{children:"WSP:"})," ",null===oe||void 0===oe?void 0:oe.join(", ")]}),(0,p.jsx)("button",{className:"products_active-remove",onClick:function(){return Se("wspFilterValues")},children:(0,p.jsx)("img",{src:f})})]}),!(0,P.isEmpty)(ue)&&(0,p.jsxs)("div",{className:"products_active-filter",children:[(0,p.jsxs)("div",{className:"txt",children:[(0,p.jsx)("b",{children:"MSRP:"})," ",null===ue||void 0===ue?void 0:ue.join(", ")]}),(0,p.jsx)("button",{className:"products_active-remove",onClick:function(){return Se("msrpFilterValues")},children:(0,p.jsx)("img",{src:f})})]}),!(0,P.isEmpty)(le)&&(0,p.jsxs)("div",{className:"products_active-filter",children:[(0,p.jsxs)("div",{className:"txt",children:[(0,p.jsx)("b",{children:"Stock:"}),null===le||void 0===le?void 0:le.join(", ")]}),(0,p.jsx)("button",{className:"products_active-remove",onClick:function(){return Se("stockFilters")},children:(0,p.jsx)("img",{src:f})})]}),!(0,P.isEmpty)(de)&&(0,p.jsxs)("div",{className:"products_active-filter",children:[(0,p.jsxs)("div",{className:"txt",children:[(0,p.jsx)("b",{children:"Days to Fulfill:"}),null===de||void 0===de?void 0:de.join(", ")]}),(0,p.jsx)("button",{className:"products_active-remove",onClick:function(){return Se("daysFullfillFilters")},children:(0,p.jsx)("img",{src:f})})]}),(!(0,P.isEmpty)(he)||!(0,P.isEmpty)(oe)||!(0,P.isEmpty)(ue)||!(0,P.isEmpty)(le)||!(0,P.isEmpty)(de))&&(0,p.jsx)("button",{className:"products_active-remove-all",onClick:function(){return i((0,u.Mz)([])),i((0,u.Ei)([])),i((0,u.fz)([])),i((0,u.a5)([])),i((0,u.W4)([])),i((0,u.JZ)([])),void i((0,u.fu)([]))},children:"Clear Filters"})]})}),(0,p.jsxs)("div",{className:"products_body product-tile-grid",children:[(0,p.jsxs)("div",{className:"product-tile dynamic_height",style:{height:"407px"},children:[pe&&0===(null===pe||void 0===pe?void 0:pe.length)&&(0,p.jsx)("tr",{children:(0,p.jsx)("td",{className:"no-data-cell",colSpan:"10",children:(0,p.jsxs)("div",{className:"product-card-empty_body",children:[(0,p.jsx)("p",{children:"There are no orders that meet your criteria."}),(0,p.jsx)("div",{className:"image",children:(0,p.jsx)("picture",{children:(0,p.jsx)("img",{src:Z.Z,alt:""})})})]})})}),pe&&(null===pe||void 0===pe?void 0:pe.map((function(e,i){var s,a,r,t,c,d;return(0,p.jsx)("div",{className:"pc",children:(0,p.jsx)(b.rU,{to:"/retailer/brand/single-product-details/".concat(null===e||void 0===e?void 0:e.id),children:(0,p.jsxs)("div",{className:"pc_main",children:[(0,p.jsx)("div",{className:"pc_head",children:(0,p.jsx)("div",{className:"pc_head-item",children:(0,p.jsx)("span",{className:"status-pill ".concat("Not Connected"===je(e)&&"pill_not_connected"," ").concat("Connected"===je(e)&&"pill_connected"," ").concat("Pending"===je(e)&&"pill_pending"," ").concat("Declined"===je(e)&&"pill_declined"),children:je(e)})})}),(0,p.jsx)("div",{className:"pc_body",children:(0,p.jsx)("div",{className:"pc_slider",children:(0,p.jsxs)("div",{href:"product-single.html",className:"swiper-container swiper-initialized swiper-horizontal swiper-pointer-events",children:[(0,p.jsx)("div",{className:"swiper-wrapper",id:"swiper-wrapper-".concat(i),"aria-live":"polite",style:{transform:"translate3d(-".concat(206*O[i],"px, 0px, 0px)"),transitionDuration:" 1000ms"},children:null===e||void 0===e?void 0:e.product_images.map((function(s,n){return(0,p.jsx)("div",{className:"swiper-slide ".concat(n===O[i]?"swiper-slide-active":""),role:"group","aria-label":"".concat(n+1," / 3"),style:{width:"206px"},children:(0,p.jsx)("div",{className:"image",children:(0,p.jsx)("picture",{children:(0,p.jsx)("img",{src:be(e),alt:""})})})},n)}))}),(0,p.jsx)("div",{className:"swiper-button-prev ".concat(0===O[i]&&"swiper-button-disabled"),"aria-disabled":0===O[i],onClick:function(){return function(e){ee((function(i){var s=(0,n.Z)(i);return s[e]=(s[e]-1+3)%3,s}))}(i)},children:(0,p.jsx)("img",{className:"icon",src:A.Z})}),(0,p.jsx)("div",{className:"swiper-button-next ".concat(2===O[i]&&"swiper-button-disabled"),"aria-disabled":2===O[i],onClick:function(){return function(e){ee((function(i){var s=(0,n.Z)(i);return s[e]=(s[e]+1)%3,s}))}(i)},children:(0,p.jsx)("img",{className:"icon",src:_.Z})}),(0,p.jsx)("div",{className:"swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal",children:null===e||void 0===e?void 0:e.product_images.map((function(e,s){return(0,p.jsx)("span",{className:"swiper-pagination-bullet ".concat(O[i]===s?"swiper-pagination-bullet-active":""),onClick:function(){return function(e,i){ee((function(s){var a=(0,n.Z)(s);return a[e]=i,a}))}(i,s)}},s)}))})]})})}),(0,p.jsxs)("div",{className:"pc_footer",children:[(0,p.jsx)("div",{className:"pc-title",children:null===e||void 0===e?void 0:e.title}),(0,p.jsxs)("div",{className:"pc_price-area",children:[(0,p.jsxs)("div",{className:"pc_price-item",children:[(0,p.jsx)("label",{children:e.wsp}),(0,p.jsxs)("label",{className:"red-text",children:["$ ",null!==(s=e.price_wps)&&void 0!==s?s:"0.00"]})]}),(0,p.jsxs)("div",{className:"pc_price-item",children:[(0,p.jsx)("label",{children:e.msrp}),(0,p.jsxs)("label",{className:"black-text",children:["$ ",null!==(a=e.price_msrp)&&void 0!==a?a:"0.00"]})]})]}),(0,p.jsx)("div",{className:"pc_brand-item",children:(0,p.jsxs)("a",{href:"brand-single.html",children:[(0,p.jsx)("img",{src:null===(r=e.user)||void 0===r||null===(t=r.brand_details)||void 0===t?void 0:t.store_logo}),(0,p.jsx)("span",{className:"brand-name",children:null===(c=e.user)||void 0===c||null===(d=c.brand_details)||void 0===d?void 0:d.store_name})]})})]})]})})},i)})))]}),(0,p.jsx)("div",{className:"pagination_wrap mt-0",children:(0,p.jsxs)("div",{className:"pagination",children:[(0,p.jsxs)("div",{className:"pagination_per",children:[(0,p.jsxs)("select",{name:"per",id:"per",onChange:function(e){i((0,u.Np)(parseInt(e.target.value))),i((0,u.nb)(0))},children:[(0,p.jsx)("option",{value:"20",selected:"",children:"20"}),(0,p.jsx)("option",{value:"50",children:"50"}),(0,p.jsx)("option",{value:"100",children:"100"})]}),(0,p.jsx)("div",{className:"pagination-title",children:"items per page"})]}),(0,p.jsxs)("div",{className:"pagination_nav",children:[(0,p.jsx)("div",{className:"pagination-title",children:"page"}),(0,p.jsx)("select",{name:"per",id:"per",onChange:function(e){i((0,u.nb)(e.target.value-1))},children:function(){for(var e=[],i=1;i<=xe;i++){var s=ce+1===i,n=(0,p.jsx)("option",{value:i,selected:s,children:i},"".concat(i));e.push(n)}return e}()}),(0,p.jsx)("div",{className:"pagination-title",children:"of 2"}),(0,p.jsx)("button",{className:"pagination-arrow pagination-arrow-prev",onClick:function(){ce>0&&i((0,u.nb)(ce-1))},children:(0,p.jsx)("div",{className:"icon",children:(0,p.jsx)("img",{className:"icon",src:w.Z})})}),(0,p.jsx)("button",{className:"pagination-arrow pagination-arrow-next",onClick:function(){var e=ce+1;e<xe&&i((0,u.nb)(e))},children:(0,p.jsx)("div",{className:"icon",children:(0,p.jsx)("img",{className:"icon",src:N.Z})})})]})]})})]})]})]})]})]})})})]})})}},63194:function(e,i,s){s.d(i,{q:function(){return t},l:function(){return c}});var n=s(44573),a=s.p+"static/media/pc-slider-temp.31def2ec3cd423e97135.jfif",r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI+SURBVHgB7ZbNS1VBGMZ/cz78vFct09AKk8os3BTqoqBl0K4/oKBF4aogyH/AhdCiZUQRFglBuIugD1pI0BeYRR9mGaUZkdd7tZvmx51zZpqjiyDoOqfE1X2GGc5wzjzPmXee9z1HaAPWEA5rjIJgQRAls2iU9fP/Jah+jiNfnyGYvBfNrNbEFtT8TltRthHhl+GoInsqHQPK9J6XaX1uIKXnZGDmSvcOT2mlQmsOjxjoH/3OifsTiKhpQWPS4eqbLEeaKq05YoV0V205DaUuSXPtqRyd/SmQJkpCWHNY7XB6XnJ7JEt1uU/PoVo+ZSVnH07yeVqye51LHOQVDBcmEdlnVBijtJX6XPrQyIUnGZSIRATRuL7IQ2ceocMZlvxU2YJTsvmvnHlD6pRsIJwZQg110VieoXvfInePNVEchggZdUV9MQSLKdS7LsLZEZziTeTlzHczOhlv+2m8tmuosZ6lcOxvqKSjtRo3kDhBjvaaNIxehD1X8LedNIvEvwuy7EdEYgdeax/h+26CH6/YuyWBIwOi4zuwNYnXfh0vsRMbWLtU+AmzXUOebEHlzO6k5HBzBaWpPhy3ypbGXlDNjaH8KuT8Fx4Pp6lLFNF5sAbXVejFCVuaGHn47SZi6imj4yPceTHB+aPN1M/egHQ/wXivNY1VaQtNk4MdeuztLX3q8oAe/JhZKnNRaQsyD3Tu+XG9XPhWhogGi9cyn6Epvk771NUkcf9wolpImXSoXbb1CrAUXD0UfjEKgrHxC3Q7gsg+dYiyAAAAAElFTkSuQmCC",t=[{id:1,productUrl:a,brandName:"1Store",productCategory:"Home & Garden,",brandValues:"Handmade, Made in Canada",status:"Not Connected",btn:(0,s(80184).jsx)("button",{className:"button button-dark connect-brand",children:"Connect"}),icon:n.Z},{id:2,productUrl:a,brandName:"2Store",productCategory:"Home & Garden,",brandValues:"Handmade, Made in Canada",status:"Connected",icon:n.Z},{id:3,productUrl:a,brandName:"1Store",productCategory:"Home & Garden,",brandValues:"Handmade, Made in Canada",status:"Pending",icon:n.Z},{id:4,productUrl:a,brandName:"3Store",productCategory:"Home & Garden,",brandValues:"Handmade, Made in Canada",status:"Declined",icon:n.Z},{id:5,productUrl:a,brandName:"3Store",productCategory:"Home & Garden,",brandValues:"Handmade, Made in Canada",status:"Connected",icon:n.Z},{id:6,productUrl:a,brandName:"4Store",productCategory:"Home & Garden,",brandValues:"Handmade, Made in Canada",status:"Connected",icon:n.Z},{id:7,productUrl:a,brandName:"4Store",productCategory:"Home & Garden,",brandValues:"Handmade, Made in Canada",status:"Connected",icon:n.Z},{id:8,productUrl:a,brandName:"5Store",productCategory:"Home & Garden,",brandValues:"Handmade, Made in Canada",status:"Connected",icon:n.Z},{id:9,productUrl:a,brandName:"6Store",productCategory:"Home & Garden,",brandValues:"Handmade, Made in Canada",status:"Connected",icon:n.Z},{id:10,productUrl:a,brandName:"8Store",productCategory:"Home & Garden,",brandValues:"Handmade, Made in Canada",status:"Connected",icon:n.Z}],c=[{id:1,status:"Connected",retailerProUrl:a,name:"1Activities Chips for Kids ps for Kids",wsp:"WSP",wspPrice:"".concat(10,"-",15),msrp:"MSRP",msrpPrice:"".concat(30,"-",50),icon:r,text:"The Idea Box Kids The Idea Box KidsThe Idea Box KidsThe Idea Box Kids Box Kids"},{id:2,status:"Pending",retailerProUrl:a,name:"2Activities Chips for Kids ps for Kids",wsp:"WSP",wspPrice:"".concat(10,"-",15),msrp:"MSRP",msrpPrice:"".concat(30,"-",50),icon:r,text:"The Idea Box Kids The Idea Box KidsThe Idea Box KidsThe Idea Box Kids Box Kids"},{id:3,status:"Not Connected",retailerProUrl:a,name:"3Activities Chips for Kids ps for Kids",wsp:"WSP",wspPrice:"".concat(10,"-",15),msrp:"MSRP",msrpPrice:"".concat(30,"-",50),icon:r,text:"The Idea Box Kids The Idea Box KidsThe Idea Box KidsThe Idea Box Kids Box Kids"},{id:4,status:"Connected",retailerProUrl:a,name:"4Activities Chips for Kids ps for Kids",wsp:"WSP",wspPrice:"".concat(10,"-",15),msrp:"MSRP",msrpPrice:"".concat(30,"-",50),icon:r,text:"The Idea Box Kids The Idea Box KidsThe Idea Box KidsThe Idea Box Kids Box Kids"},{id:5,status:"Pending",retailerProUrl:a,name:"5Activities Chips for Kids ps for Kids",wsp:"WSP",wspPrice:"".concat(10,"-",15),msrp:"MSRP",msrpPrice:"".concat(30,"-",50),icon:r,text:"The Idea Box Kids The Idea Box KidsThe Idea Box KidsThe Idea Box Kids Box Kids"},{id:6,status:"Not Connected",retailerProUrl:a,name:"Activities Chips for Kids ps for Kids",wsp:"WSP",wspPrice:"".concat(10,"-",15),msrp:"MSRP",msrpPrice:"".concat(30,"-",50),icon:r,text:"The Idea Box Kids The Idea Box KidsThe Idea Box KidsThe Idea Box Kids Box Kids"},{id:7,status:"Connected",retailerProUrl:a,name:"Activities Chips for Kids ps for Kids",wsp:"WSP",wspPrice:"".concat(10,"-",15),msrp:"MSRP",msrpPrice:"".concat(30,"-",50),icon:r,text:"The Idea Box Kids The Idea Box KidsThe Idea Box KidsThe Idea Box Kids Box Kids"},{id:8,status:"Pending",retailerProUrl:a,name:"Activities Chips for Kids ps for Kids",wsp:"WSP",wspPrice:"".concat(10,"-",15),msrp:"MSRP",msrpPrice:"".concat(30,"-",50),icon:r,text:"The Idea Box Kids The Idea Box KidsThe Idea Box KidsThe Idea Box Kids Box Kids"}]},54356:function(e,i,s){s.d(i,{EJ:function(){return t},IG:function(){return a},UJ:function(){return d},VP:function(){return l},Wb:function(){return m},_M:function(){return o},dd:function(){return c},eA:function(){return u},h_:function(){return h},qK:function(){return r},v6:function(){return n}});var n=function(e){return e.retailerProduct.retailerBrandProductsList},a=function(e){return e.retailerProduct.retailerBrandValuesList},r=function(e){return e.retailerProduct.retailerBrandValuesFilter},t=function(e){return e.retailerProduct.retailerPricingFilter},c=function(e){return e.retailerProduct.retailerStateFilter},d=function(e){return e.retailerProduct.retailerNewConnectionRequesting},l=function(e){return e.retailerProduct.retailerNewConnectionRequestSuccess},o=function(e){return e.retailerProduct.retailerNewConnectionRequestError},u=function(e){return e.retailerProduct.retailerBrandProfile},m=function(e){return e.retailerProduct.retailerProducts},h=function(e){return e.retailerProduct.retailerBrandTagsValue}}}]);
//# sourceMappingURL=6577.47ca5059.chunk.js.map