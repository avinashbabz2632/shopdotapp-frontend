import * as yup from 'yup';

export const retailerProfileValidationSchema = yup.object().shape({
    companyName: yup.string().required('Company name is required.'),
    contactEmail: yup
        .string()
        .email('Must be a valid email.')
        .max(255)
        .required('Contact email is required.'),
    contactPhone: yup.string().required('Contact phone number is required.'),
    retailerName: yup.string().required('Retailer name is required.'),
    retailerWebsite: yup.string().required('Retailer website is required.'),
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
