"use strict";(self.webpackChunkshopdot=self.webpackChunkshopdot||[]).push([[1616],{1616:function(e,r,i){i.r(r),i.d(r,{default:function(){return p}});var n=i(1413),a=i(2791),s=i(1134),u=i(4695),l=i(9434),t=i(2165),o=i(165),d=i(9593),c=i(2089),m=i(184),b=[{value:"saving",label:"Savings"},{value:"current",label:"Current"}],q={control:function(e){return(0,n.Z)((0,n.Z)({},e),{},{borderColor:"#ebbca2",boxShadow:"none",minHeight:"40px","&:hover":{boxShadow:"none"}})},container:function(e){return(0,n.Z)((0,n.Z)({},e),{},{marginTop:"5xp",marginRight:"1px"})}},h={accountType:b[0],accountRole:{value:"personal",label:"Personal"}};function p(e){e.setEditBankDetails;var r,i,p,f,y,g=(0,s.cI)({mode:"onChange",resolver:(0,u.X)(c.Ks),defaultValues:h}),v=g.register,N=g.handleSubmit,Z=g.control,x=g.setValue,_=g.formState.errors,R=(0,l.v9)(t.jb),S=(0,l.I0)();(0,a.useEffect)((function(){["accountHolderName","accountType","accountRole","accountNumber","routingNumber"].forEach((function(e){return x(e,R[e])}))}),[]);return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("form",{onSubmit:N((function(e){S((0,o.L5)(e))})),children:[(0,m.jsx)("h2",{className:"mt-5",children:"Bank Details"}),(0,m.jsxs)("div",{className:"form-area",children:[(0,m.jsxs)("div",{className:"form-input mb-4",children:[(0,m.jsxs)("label",{htmlFor:"",className:"form-label",children:["Name of the bank account holder\xa0",(0,m.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,m.jsx)("input",(0,n.Z)({type:"text",className:"form-control mb-0",name:"accountHolderName",placeholder:"Jane Doe"},v("accountHolderName",{required:!0}))),_.accountHolderName&&(0,m.jsx)("span",{className:"error-text",children:null===(r=_.accountHolderName)||void 0===r?void 0:r.message})]}),(0,m.jsxs)("div",{className:"form-input mb-4",children:[(0,m.jsxs)("label",{htmlFor:"",className:"form-label",children:["Bank account type\xa0",(0,m.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,m.jsx)(s.Qr,{name:"accountType",control:Z,render:function(e){var r=e.field;return(0,m.jsx)(d.ZP,(0,n.Z)((0,n.Z)({},r),{},{className:"basic-single",classNamePrefix:"select",styles:q,components:{IndicatorSeparator:function(){return null}},theme:function(e){return(0,n.Z)((0,n.Z)({},e),{},{colors:(0,n.Z)((0,n.Z)({},e.colors),{},{primary25:"#fbf5f0",primary:"#bd6f34"})})},options:b}))}}),_.accountType&&(0,m.jsx)("span",{className:"error-text",children:null===(i=_.accountType)||void 0===i?void 0:i.message})]}),(0,m.jsxs)("div",{className:"form-input mb-4",children:[(0,m.jsxs)("label",{htmlFor:"",className:"form-label",children:["Purpose\xa0",(0,m.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,m.jsx)("input",(0,n.Z)({type:"text",className:"form-control mb-0",name:"accountRole",placeholder:"",disabled:!0},v("accountRole",{required:!0}))),_.accountRole&&(0,m.jsx)("span",{className:"error-text",children:null===(p=_.accountRole)||void 0===p?void 0:p.message})]}),(0,m.jsxs)("div",{className:"form-input mb-4",children:[(0,m.jsxs)("label",{htmlFor:"",className:"form-label",children:["Account number\xa0",(0,m.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,m.jsx)("input",(0,n.Z)({type:"number",className:"form-control mb-0",name:"accountNumber",placeholder:"12345678"},v("accountNumber",{required:!0}))),_.accountNumber&&(0,m.jsx)("span",{className:"error-text",children:null===(f=_.accountNumber)||void 0===f?void 0:f.message})]}),(0,m.jsxs)("div",{className:"form-input mb-4",children:[(0,m.jsxs)("label",{htmlFor:"",className:"form-label",children:["Routing number\xa0",(0,m.jsx)("span",{className:"asterisk-red",children:"*"})]}),(0,m.jsx)("input",(0,n.Z)({type:"number",className:"form-control mb-0",name:"routingNumber",placeholder:"123456789"},v("routingNumber",{required:!0}))),_.routingNumber&&(0,m.jsx)("span",{className:"error-text",children:null===(y=_.routingNumber)||void 0===y?void 0:y.message}),(0,m.jsx)("small",{children:"9-digit Routing Number of the account used for ACH transactions."})]})]}),(0,m.jsx)("div",{className:"form-area",children:(0,m.jsx)("div",{className:"form-input form-submit",children:(0,m.jsx)("button",{className:"button w-100",children:"Save"})})})]})})}},2089:function(e,r,i){i.d(r,{$7:function(){return s},FI:function(){return o},Gq:function(){return c},Ks:function(){return t},rB:function(){return u},tj:function(){return l},zb:function(){return d}});var n=i(2797),a=i(90),s=n.Ry().shape({businessName:n.Z_().required("Legal business name is required."),businessAs:n.Z_().required("Doing business is required.").test("businessname","doing business is different than the legal name",(function(e){return!e||e!==this.parent.businessName})),website:n.Z_().url("Please enter a valid URL").required("Business website address is required."),businessEmail:n.Z_().email("Must be a valid email.").max(255).required("Business email address is required."),businessCategory:n.Ry().nullable().required("Business category is required."),textIdType:n.Ry().when("businessCategory",{is:function(e){return"single_member_llc"===(null===e||void 0===e?void 0:e.value)||"sole_proprietor"===(null===e||void 0===e?void 0:e.value)},then:n.Ry().nullable().required("TextID is required")}),phoneNumber:n.Z_().nullable().required("Phone number is required.").min(12,"Phone should be 10 digits."),addressLine1:n.Z_().nullable().required("Address line 1 is required."),countryAddress:n.Ry().nullable().required("Country is require."),stateAddress:n.Ry().nullable().required("State is require."),city:n.Z_().required("City is required."),zipcode:n.Z_().nullable().notOneOf(["00000"],"Should be in XXXXX format.Cannot containt all zeroes.").min(5,"Should be in XXXXX format.").max(5,"Zip-code should be 5 digits.").required("Zip-code is required."),stateOfIncorportation:n.Ry().nullable().required("State of incorporation is required."),dateOfIncorportation:n.Z_().nullable().required("Date of incorporation is required."),bankruptcy:n.Z_().nullable().required("Prior bankruptcy is required."),dateOfDischarge:n.Z_().when("bankruptcy",{is:function(e){return"yes"===e},then:n.Z_().nullable().required("Date of discharge is required.")}),averageSales:n.Z_().required("Estimated average sales volume on shopdot is required."),averageSalePrice:n.Z_().required("Estimated average sale price on shopdot is required."),averageDeliveryTime:n.Ry().nullable().required("Average delivery time is required."),merchantCategoryCode:n.Ry().nullable().required("Merchant category code is required."),salesMethod:n.Ry().nullable().required("Sales method is required."),productionDescription:n.Z_().required("Product description is required.")}),u=function(){var e=a.h.getState().gettingPaid.businessDetails;return n.Ry().shape({representativeDetails:n.IX().of(n.Ry().shape({fname:n.Z_().nullable().required("Legal person first name is required."),lname:n.Z_().nullable().required("Legal person last name is required."),phoneNumber:n.Z_().nullable().required("Phone number is required.").min(12,"Phone should be 10 digits."),ssn:n.Z_().nullable().required("SSN is required.").min(11,"SSN should be 9 digit."),dob:n.Z_().nullable().required("Date of birth is required."),email:n.Z_().email("Must be a valid email.").max(255).required("Email address is required."),countryAddress:n.Ry().nullable().required("Country is require."),stateAddress:n.Ry().nullable().required("State is require."),addressLine1:n.Z_().nullable().required("Address line 1 is required."),city:n.Z_().required("City is required."),zipcode:n.Z_().nullable().notOneOf(["00000"],"Should be in XXXXX format.Cannot containt all zeroes.").min(5,"Should be in XXXXX format.").max(5,"Zip-code should be 5 digits.").required("Zip-code is required."),secondaryIdentificationType:n.Ry().nullable().required("Secondary identification is required."),soInsurence:n.Ry().nullable().when("secondaryIdentificationType",{is:function(e){return"dl"===(null===e||void 0===e?void 0:e.value)},then:n.Ry().nullable().required("State of issuance is required.")}),idNumber:n.Z_().nullable().required("Id number is required."),percentageOwnership:n.nK().required("Ownership percentage must be 100%.").test("is-valid-settings","Ownership percentage must be 100%.",(function(r,i){var n,a,s;return console.log("context",i),"partnership"===(null===e||void 0===e||null===(n=e.businessCategory)||void 0===n?void 0:n.value)?""!==r&&!isNaN(r)&&(100===Number(r)||Number(r)>=25&&Number(r)<=100)||i.createError({message:Number(r)>100?"Ownership percentage is invalid!":"Ownership percentage must be 25% or more",path:i.path}):"single_member_llc"===(null===e||void 0===e||null===(a=e.businessCategory)||void 0===a?void 0:a.value)||"sole_proprietor"===(null===e||void 0===e||null===(s=e.businessCategory)||void 0===s?void 0:s.value)?""!==r&&!isNaN(r)&&100===Number(r):""!==r&&!isNaN(r)&&(100===Number(r)||Number(r)>=25&&Number(r)<=100)||i.createError({message:Number(r)>100?"Ownership percentage is invalid!":"Ownership percentage must be 25% or more",path:i.path})}))}))})},l=n.Ry().shape({representativeDetails:n.IX().of(n.Ry().shape({fname:n.Z_().nullable().required("Legal person first name is required."),lname:n.Z_().nullable().required("Legal person last name is required."),phoneNumber:n.Z_().nullable().required("Phone number is required.").min(12,"Phone should be 10 digits."),ssn:n.Z_().nullable().required("SSN is required.").min(11,"SSN should be 9 digit.").max(11,"SSN should be 9 digit."),dob:n.Z_().nullable().required("Date of birth is required."),email:n.Z_().email("Must be a valid email.").max(255).required("Email address is required."),countryAddress:n.Ry().nullable().required("Country is require."),stateAddress:n.Ry().nullable().required("State is require."),addressLine1:n.Z_().nullable().required("Address line 1 is required."),city:n.Z_().required("City is required."),zipcode:n.Z_().nullable().notOneOf(["00000"],"Should be in XXXXX format.Cannot containt all zeroes.").min(5,"Should be in XXXXX format.").max(5,"Zip-code should be 5 digits.").required("Zip-code is required."),secondaryIdentificationType:n.Ry().nullable().required("Secondary identification is required."),soInsurence:n.Ry().nullable().when("secondaryIdentificationType",{is:function(e){return"dl"===(null===e||void 0===e?void 0:e.value)},then:n.Ry().nullable().required("State of issuance is required.")}),idNumber:n.Z_().nullable().required("Id number is required.")}))}),t=n.Ry().shape({accountHolderName:n.Z_().required("Bank account holder name is required."),accountType:n.Ry().nullable().required("Bank account type is required."),accountRole:n.Ry().nullable().required("Purpose is required."),accountNumber:n.Z_().required("Account number is required.").max(8,"Account number should be 8 digits.").min(8,"Account number should be 8 digits."),routingNumber:n.Z_().required("Routing number is require").max(9,"Routing number should be 9 digits.").min(9,"Routing number should be 9 digits.")}),o=n.Ry().shape({confirmation:n.O7().oneOf([!0],"uou need to accept the confirm details"),tnc:n.O7().oneOf([!0],"you need to accept the terms and conditions")}),d=n.Ry().shape({address1:n.Z_().required("Address 1 is required."),daystofulfill:n.Ry().nullable().required("Days to fultill  is required."),statelist:n.Ry().shape({label:n.Z_().required("State category is required."),value:n.Z_().required("State category is required.")}).nullable().required("State category is required."),country:n.Z_().required("Country is required."),city:n.Z_().required("City is required."),shippingfee:n.Z_().required("Shipping fee is require."),incrementalfee:n.Z_().required("Incremental fee is require."),zip:n.Z_().required("Zip-code is required.")}),c=n.Ry().shape({companyName:n.Z_().required("Company name is required."),contactEmail:n.Z_().email("Must be a valid email.").max(255).required("Contact email is required."),contactPhone:n.Z_().required("Contact phone number is required."),brandName:n.Z_().required("Brand name is required."),brandWebsite:n.Z_().url("Please enter a valid URL").required("Brand website is required."),brandCategory:n.IX().min(1,"At least 1 category required").max(3,"Select max 3 category.").nullable().required("Select max 3 category."),aboutTheBrand:n.Z_().required("About the brand is required."),videoLink:n.Z_().required("Please enter valid website.")})}}]);
//# sourceMappingURL=1616.3e0613c4.chunk.js.map