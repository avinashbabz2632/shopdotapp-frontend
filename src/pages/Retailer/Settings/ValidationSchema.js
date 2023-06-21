import * as yup from 'yup';
import valid from 'card-validator';

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
  zipcode: yup.string().min(5).max(5).required('Zip is required.'),
});
export const retailerBillingValidationSchema = yup.object().shape({
  cardNumber: yup
    .number()
    .test(
      'test-number',
      'Credit Card number is invalid',
      (value) => valid.number(value).isValid
    ),
  expiryYear: yup
    .string()
    // .typeError('Not a valid expiration date. Example: YY')
    .max(2)
    .test(
      "test-year",
      "Expiration year should be future date",
      (value) => valid.expirationYear(value).isValid
    )
    // .matches(
    //   /([0-9]{2})/,
    //   'Not a valid expiration date. Example: YY'
    // )
    // .test(
    //   'test-credit-card-expiration-date',
    //   'Enter future date',
    //   (expirationDate) => {
    //     if (!expirationDate) {
    //       return false;
    //     }
    //     const today = new Date();
    //     const monthToday = today.getMonth() + 1;
    //     const yearToday = today.getFullYear().toString().substr(-2);

    //     const expYear = expirationDate;
    //     if (Number(expYear) < Number(yearToday)) {
    //       return false;
    //     } else if (
    //       // Number(expMonth) < monthToday &&
    //       Number(expYear) <= Number(yearToday)
    //     ) {
    //       return false;
    //     }

    //     return true;
    //   }
    // )
    .required('Expiration year is required'),
  // expiryMonth: yup.object().nullable().required("Please select expiry month"),
  expiryMonth: yup.object().test(
    "test-month",
    "Month should be future month",
    (value, ctx) => valid.expirationMonth(value).isValid
  ),
  cvv: yup.string().min(3).max(3).required('CVV is required.'),
  nameOnCard: yup.string().required('Name on Card is required.'),
  addressLine1: yup.string().required('Address 1 is required.'),
  state: yup.object().nullable().required('State  is required.'),
  city: yup.string().required('City is required.'),
  zip: yup.string().min(5).max(5).required('Zip is required.'),
});
