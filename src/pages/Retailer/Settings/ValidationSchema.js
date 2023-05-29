import * as yup from 'yup';

export const retailerProfileValidationSchema = yup.object().shape({
  companyName: yup.string().required('Company name is required.'),
  contactEmail: yup
    .string()
    .email('Must be a valid email.')
    .max(255)
    .required('Contact email is required.'),
  contactPhone: yup
    .string()
    .nullable()
    .required('Contact phone number is required.')
    .min(12, 'Contact phone should be 10 digits.'),
  retailerName: yup.string().required('Retailer name is required.'),
  retailerWebsite: yup
    .string()
    .url('Please enter a valid URL')
    .required('Retailer website is required.'),
  retailerCategory: yup
    .object()
    .nullable()
    .required('Retailer category  is required.'),
  aboutTheRetailer: yup.string().required('About the retailer is required.'),
  addressLine1: yup.string().required('Address 1 is required.'),
  countryAddress: yup.object().nullable().required('Country  is required.'),
  stateAddress: yup.object().nullable().required('State  is required.'),
  city: yup.string().required('City is required.'),
  zipcode: yup.string().required('Zip is required.'),
});
export const retailerBillingValidationSchema = yup.object().shape({
  cardNumber: yup.string().required('Card Number is required.'),
  expiryDate: yup.string().required('The format should be MM/YYYY.'),
  cvv: yup.string().required('CVV is required.'),
  nameOnCard: yup.string().required('Name on Card is required.'),
  addressLine1: yup.string().required('Address 1 is required.'),
  state: yup.object().nullable().required('State  is required.'),
  city: yup.string().required('City is required.'),
  zip: yup.string().required('Zip is required.'),
});
