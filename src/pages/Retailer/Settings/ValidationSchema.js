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
  zipcode: yup.string().required('Zip is required.'),
});
export const retailerBillingValidationSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .test(
      'test-number',
      'Credit Card number is invalid',
      (value) => valid.number(value).isValid
    ),
  expiryDate: yup
    .string()
    .typeError('Not a valid expiration date. Example: MM/YY')
    .max(5, 'Not a valid expiration date. Example: MM/YY')
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      'Not a valid expiration date. Example: MM/YY'
    )
    .test(
      'test-credit-card-expiration-date',
      'Invalid Expiration Date has past',
      (expirationDate) => {
        if (!expirationDate) {
          return false;
        }

        const today = new Date();
        const monthToday = today.getMonth() + 1;
        const yearToday = today.getFullYear().toString().substr(-2);

        const [expMonth, expYear] = expirationDate.split('/');

        if (Number(expYear) < Number(yearToday)) {
          return false;
        } else if (
          Number(expMonth) < monthToday &&
          Number(expYear) <= Number(yearToday)
        ) {
          return false;
        }

        return true;
      }
    )
    .test(
      'test-credit-card-expiration-date',
      'Invalid Expiration Month',
      (expirationDate) => {
        if (!expirationDate) {
          return false;
        }
        const today = new Date().getFullYear().toString().substr(-2);

        const [expMonth] = expirationDate.split('/');

        if (Number(expMonth) > 12) {
          return false;
        }

        return true;
      }
    )
    .required('Expiration date is required'),
  cvv: yup.string().min(3).max(3).required('CVV is required.'),
  nameOnCard: yup.string().required('Name on Card is required.'),
  addressLine1: yup.string().required('Address 1 is required.'),
  state: yup.object().nullable().required('State  is required.'),
  city: yup.string().required('City is required.'),
  zip: yup.string().required('Zip is required.'),
});
