import * as yup from 'yup';

export const BusinessDetailsValidationSchema = yup.object().shape({
  legal_name: yup.string().required('Legal Business name is required.'),
  doing_business_as: yup
    .string()
    .required('Doing Business is required.')
    .test(
      'legal_name',
      'Doing Business is different than the legal name',
      function (business) {
        return business ? business !== this.parent.legal_name : true;
      }
    ),
  business_category: yup
    .object()
    .shape({
      label: yup.string().required('Business Category is required.'),
      value: yup.string().required('Business Category is required.'),
    })
    .nullable()
    .required('Business Category is required.'),
  textIdType: yup.object().when('businessCategory', {
    is: (businessCategory) => businessCategory?.value === 'signle_member_llc',
    then: yup.object().nullable().required('TextID is required'),
  }),
  ein: yup.string().when('textIdType', {
    is: (textIdType) => textIdType?.value === 'ein',
    then: yup.string().required('Employer Identification Number is required'),
  }),
  // .when('businessCategory', {
  //     is: (businessCategory) =>
  //         businessCategory?.value !== 'solo_proprietor',
  //     then: yup
  //         .string()
  //         .required('Employer Identification Number is required'),
  // }),
  ssn: yup
    .string()
    .when('textIdType', {
      is: (textIdType) => textIdType?.value === 'ssn',
      then: yup.string().required('Social Security Number is required.'),
    })
    .when('businessCategory', {
      is: (businessCategory) => businessCategory?.value === 'solo_proprietor',
      then: yup.string().required('Social Security Number is required.'),
    }),
  state_of_incorporation: yup
    .object()
    .shape({
      label: yup.string().required('State of Incorporation is required.'),
      value: yup.string().required('State of Incorporation is required.'),
    })
    .nullable()
    .required('State of Incorporation is required.'),
  date_of_incorporation: yup
    .string()
    .required('Date of Incorporation is required.'),
  prior_bankruptcy: yup
    .string()
    .nullable()
    .required('Prior Bankruptcy is required.'),
  dateOfDischarge: yup.string().when('prior_bankruptcy', {
    is: (prior_bankruptcy) => prior_bankruptcy === true,
    then: yup.string().required('Date of Discharge is required.'),
  }),
  average_sales_volume: yup
    .string()
    .required('Estimated Average Sales Volume on ShopDot is required.'),
  average_purchase: yup
    .string()
    .required('Estimated Average Sale Price on ShopDot is required.'),
  average_delivery_time: yup
    .object()
    .shape({
      label: yup.string().required('Average Delivery Time is required.'),
      value: yup.string().required('Average Delivery Time is required.'),
    })
    .nullable()
    .required('Average Delivery Time is required.'),

  merchant_category_code: yup
    .object()
    .shape({
      label: yup.string().required('Merchant Category Code is required.'),
      value: yup.string().required('Merchant Category Code is required.'),
    })
    .nullable()
    .required('Merchant Category Code is required.'),

  sales_method: yup
    .object()
    .shape({
      label: yup.string().required('Sales Method is required.'),
      value: yup.string().required('Sales Method is required.'),
    })
    .nullable()
    .required('Sales Method is required.'),
  product_description: yup
    .string()
    .required('Product Description is required.'),
});

export const BusinessRepresentativeValidationSchema = yup.object().shape({
  owner_first_name: yup
    .string()
    .required('Legal Person first name is required.'),
  owner_last_name: yup.string().required('Legal Person last name is required.'),
  owner_phone: yup.string().required('Phone number is required.'),
  // ssn: yup.string().required('SSN is required.'),
  owner_dob: yup.string().required('Date of birth is required.'),
  countryAddress: yup
    .object()
    .shape({
      label: yup.string().required('Country is require.'),
      value: yup.string().required('Country is require.'),
    })
    .nullable()
    .required('Address State is require.'),
  state: yup
    .object()
    .shape({
      label: yup.string().required('Address State is require.'),
      value: yup.string().required('Address State is require.'),
    })
    .nullable()
    .required('Address State is require.'),
  address_line_1: yup.string().required('Address line 1 is required.'),
  address_line_2: yup.string(),
  city: yup.string().required('City is required.'),
  // citySelect: yup
  //   .object()
  //   .shape({
  //     label: yup.string().required('City is required.'),
  //     value: yup.string().required('City is required.'),
  //   })
  //   .nullable()
  //   .required('City is required'),
  zip: yup.string().required('Zip-code is required.'),

  secondary_identification_type: yup
    .object()
    .nullable()
    .required('Secondary Identification is required.'),

  identification_state_of_issuance: yup
    .object()
    .when('secondary_identification_type', {
      is: (secondary_identification_type) =>
        secondary_identification_type?.value !== 'dl',
      then: yup
        .object()
        .nullable()
        .required('Country of issuance is required.'),
    }),
  // identification_state_of_issuance: yup
  //   .object()
  //   .when('identification_state_of_issuance', {
  //     is: (identification_state_of_issuance) =>
  //       identification_state_of_issuance?.value === 'dl',
  //     then: yup.object().nullable().required('State of issuance is required.'),
  //   }),

  identification_id: yup.string().required('Id number is required.'),
});

export const BankDetailsValidationSchema = yup.object().shape({
  account_holder_name: yup
    .string()
    .required('Bank Account holder name is required.'),
  account_type: yup
    .object()
    .nullable()
    .required('Bank Account type is required.'),
  purpose: yup.object().nullable().required('Purpose is required.'),
  account_number: yup.string().required('Account number is required.'),
  routing_number: yup.string().required('Routing number is require'),
});

export const SummaryValidationSchema = yup.object().shape({
  confirmation: yup
    .boolean()
    .oneOf([true], 'You need to accept the confirm details'),
  tnc: yup
    .boolean()
    .oneOf([true], 'You need to accept the terms and conditions'),
});

export const shippingValidationSchema = yup.object().shape({
  address1: yup.string().required('Address 1 is required.'),
  daystofulfill: yup
    .object()
    .nullable()
    .required('Days to fultill  is required.'),
  statelist: yup
    .object()
    .shape({
      label: yup.string().required('State Category is required.'),
      value: yup.string().required('State Category is required.'),
    })
    .nullable()
    .required('State Category is required.'),
  country: yup.string().required('Country is required.'),
  city: yup.string().required('City is required.'),
  shippingfee: yup.string().required('Shipping fee is require.'),
  incrementalfee: yup.string().required('Incremental fee is require.'),
  zip: yup.string().required('Zip-code is required.'),
});

export const brandProfileValidationSchema = yup.object().shape({
  company_name: yup.string().required('Company name is required.'),
  company_email_address: yup
    .string()
    .email('Must be a valid email.')
    .max(255)
    .required('Contact email is required.'),
  company_phone_number: yup
    .string()
    .required('Contact phone number is required.'),
  store_name: yup.string().required('Brand name is required.'),
  store_website: yup.string().required('Brand website is required.'),
  brand_categories: yup
    .array()
    .min(1, 'At least 1 category required')
    .max(3, 'Select max 3 category.')
    .nullable()
    .required('Select max 3 category.'),
  brand_values: yup
    .array()
    .min(1, 'At least 1 category required')
    .max(3, 'Select max 3 category.')
    .nullable()
    .required('Select max 3 category.'),
  brand_story: yup.string().required('About the brand is required.'),
  brand_promo: yup.string().required('Please enter valid website.'),
});
