import * as yup from 'yup';
import { store } from '../../../../redux/store';

export const BusinessDetailsValidationSchema = yup.object().shape({
    businessName: yup.string().required('Legal business name is required.'),
    businessAs: yup
        .string()
        .required('Doing business is required.')
        .test(
            'businessname',
            'doing business is different than the legal name',
            function (business) {
                return business ? business !== this.parent.businessName : true;
            }
        ),
    website: yup
        .string()
        .url('Please enter a valid URL')
        .required('Business website address is required.'),
    businessEmail: yup
        .string()
        .email('Must be a valid email.')
        .max(255)
        .required('Business email address is required.'),
    businessCategory: yup
        .object()
        .nullable()
        .required('Business category is required.'),
    textIdType: yup.object().when('businessCategory', {
        is: (businessCategory) =>
            businessCategory?.value === 'single_member_llc' ||
            businessCategory?.value === 'sole_proprietor',
        then: yup.object().nullable().required('TextID is required'),
    }),
    // employerIdentificationNumber: yup
    //     .object()
    //     .nullable()
    //     .required('Employer identification number is required'),
    // socialSecurityNumber: yup
    //     .object()
    //     .nullable()
    //     .required('Social security number is required'),
    // employerIdentificationNumber: yup.string().when('businessCategory', {
    //     is: (businessCategory) =>
    //         businessCategory?.value !== 'single_member_llc' ||
    //         businessCategory?.value !== 'sole_proprietor',
    //     then: yup
    //         .string()
    //         .required('Employer identification number is required'),
    // }),
    // socialSecurityNumber: yup
    //     .string()
    //     .when('textIdType', {
    //         is: (textIdType) => textIdType?.value === 'ssn',
    //         then: yup.string().required('Social security number is required'),
    //     })
    //     .when('businessCategory', {
    //         is: (businessCategory) =>
    //             businessCategory?.value === 'single_member_llc' ||
    //             businessCategory?.value === 'sole_proprietor',
    //         then: yup.string().required('Social security number is required'),
    //     }),
    phoneNumber: yup
        .string()
        .nullable()
        .required('Phone number is required.')
        .min(12, 'Phone should be 10 digits.'),
    addressLine1: yup
        .string()
        .nullable()
        .required('Address line 1 is required.'),
    countryAddress: yup.object().nullable().required('Country is require.'),
    stateAddress: yup.object().nullable().required('State is require.'),
    city: yup.string().required('City is required.'),
    zipcode: yup
        .string()
        .nullable()
        .notOneOf(
            ['00000'],
            'Should be in XXXXX format.Cannot containt all zeroes.'
        )
        .min(5, 'Should be in XXXXX format.')
        .max(5, 'Zip-code should be 5 digits.')
        .required('Zip-code is required.'),
    stateOfIncorportation: yup
        .object()
        .nullable()
        .required('State of incorporation is required.'),
    dateOfIncorportation: yup
        .string()
        .nullable()
        .required('Date of incorporation is required.'),
    bankruptcy: yup
        .string()
        .nullable()
        .required('Prior bankruptcy is required.'),
    dateOfDischarge: yup.string().when('bankruptcy', {
        is: (bankruptcy) => bankruptcy === 'yes',
        then: yup
            .string()
            .nullable()
            .required('Date of discharge is required.'),
    }),
    averageSales: yup
        .string()
        .required('Estimated average sales volume on shopdot is required.'),
    averageSalePrice: yup
        .string()
        .required('Estimated average sale price on shopdot is required.'),
    averageDeliveryTime: yup
        .object()
        .nullable()
        .required('Average delivery time is required.'),
    merchantCategoryCode: yup
        .object()
        .nullable()
        .required('Merchant category code is required.'),
    salesMethod: yup.object().nullable().required('Sales method is required.'),
    productionDescription: yup
        .string()
        .required('Product description is required.'),
    // phone: yup
    //     .string()
    //     .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    //     .transform((value, originalValue) => {
    //         if (!originalValue) return originalValue;
    //         const phoneNumber = originalValue.replace(/[^\d]/g, '');
    //         const phoneNumberLength = phoneNumber.length;
    //         if (phoneNumberLength < 4) return phoneNumber;
    //         if (phoneNumberLength < 7) {
    //             return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    //         }
    //         return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
    //             3,
    //             6
    //         )}-${phoneNumber.slice(6)}`;
    //     }),
    // phone: yup
    //     .string()
    //     .matches(phoneRegExp, 'Phone number is not in the correct format')
    //     .transform((value, originalValue) => {
    //         const phoneNumber = originalValue.replace(/[^\d]/g, '');
    //         const hasNonRepeatedConsecutiveNumbers = !/(.)\1{2,}/.test(
    //             phoneNumber
    //         );
    //         console.log(
    //             'phoneNumber',
    //             hasNonRepeatedConsecutiveNumbers,
    //             phoneNumber,
    //             value
    //         );
    //         if (hasNonRepeatedConsecutiveNumbers) {
    //             const newNumber = `${phoneNumber.slice(
    //                 0,
    //                 3
    //             )}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    //             console.log('newNumber-------------------', newNumber);
    //             return newNumber;
    //         }
    //         return originalValue;
    //     }),

    // phone: yup
    //     .string()
    //     .required('Phone number is required')
    //     .transform((value, originalValue) => {
    //         // If value is not undefined, remove all non-digit characters and format
    //         if (value) {
    //             const phoneNumber = originalValue.replace(/[^\d]/g, '');
    //             const newNumber = `${phoneNumber.slice(
    //                 0,
    //                 3
    //             )}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    //             return newNumber;
    //         }

    // const rawValue = value.replace(/[^\d]/g, ''); // Remove all non-digits
    // let formattedValue = '';
    // if (rawValue.length < 4) {
    //     formattedValue = rawValue;
    // } else if (rawValue.length < 7) {
    //     formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`;
    // } else {
    //     formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(
    //         3,
    //         6
    //     )}-${rawValue.slice(6, 10)}`;
    // }
    // If value is undefined, return empty string
    //     return '';
    // })
    // .matches(/^\d{10}$/, 'Phone number must be 10 digits'),

    // phone: yup
    //     .string()
    //     .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    //     .transform((value) =>
    //         value ? value.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3') : ''
    //     )
    //     .nullable()
    //     .required('Phone number is required'),

    // phone: yup
    //     .string()
    //     .matches(phoneRegExp, 'Phone number must be 10 digits')
    //     .transform((value, originalValue) =>
    //         originalValue
    //             ? originalValue.replace(/^(\d{2})(\d{3})(\d{4})$/, '$1-$2-$3')
    //             : ''
    //     )
    //     .nullable()
    //     .required('Phone number is required'),
});

export const getRepresentativeValidation = () => {
    // Get the store data
    const storeData = store.getState();
    const { gettingPaid } = storeData;
    const { businessDetails } = gettingPaid;

    return yup.object().shape({
        representativeDetails: yup.array().of(
            yup.object().shape({
                fname: yup
                    .string()
                    .nullable()
                    .required('Legal person first name is required.'),
                lname: yup
                    .string()
                    .nullable()
                    .required('Legal person last name is required.'),
                phoneNumber: yup
                    .string()
                    .nullable()
                    .required('Phone number is required.')
                    .min(12, 'Phone should be 10 digits.'),
                ssn: yup
                    .string()
                    .nullable()
                    .required('SSN is required.')
                    .min(11, 'SSN should be 9 digit.'),
                dob: yup
                    .string()
                    .nullable()
                    .required('Date of birth is required.'),
                email: yup
                    .string()
                    .email('Must be a valid email.')
                    .max(255)
                    .required('Email address is required.'),
                countryAddress: yup
                    .object()
                    .nullable()
                    .required('Country is require.'),
                stateAddress: yup
                    .object()
                    .nullable()
                    .required('State is require.'),
                addressLine1: yup
                    .string()
                    .nullable()
                    .required('Address line 1 is required.'),
                city: yup.string().required('City is required.'),
                zipcode: yup
                    .string()
                    .nullable()
                    .notOneOf(
                        ['00000'],
                        'Should be in XXXXX format.Cannot containt all zeroes.'
                    )
                    .min(5, 'Should be in XXXXX format.')
                    .max(5, 'Zip-code should be 5 digits.')
                    .required('Zip-code is required.'),
                secondaryIdentificationType: yup
                    .object()
                    .nullable()
                    .required('Secondary identification is required.'),
                soInsurence: yup
                    .object()
                    .nullable()
                    .when('secondaryIdentificationType', {
                        is: (secondaryIdentificationType) =>
                            secondaryIdentificationType?.value === 'dl',
                        then: yup
                            .object()
                            .nullable()
                            .required('State of issuance is required.'),
                    }),
                idNumber: yup
                    .string()
                    .nullable()
                    .required('Id number is required.'),
                percentageOwnership: yup
                    .mixed()
                    .required('Ownership percentage must be 100%.')
                    .test(
                        'is-valid-settings',
                        'Ownership percentage must be 100%.',
                        (value, context) => {
                            console.log('context', context);
                            // Custom validation function for the 'percentageOwnership' field
                            if (
                                businessDetails?.businessCategory?.value ===
                                'partnership'
                            ) {
                                if (
                                    value !== '' &&
                                    !isNaN(value) &&
                                    (Number(value) === 100 ||
                                        (Number(value) >= 25 &&
                                            Number(value) <= 100))
                                ) {
                                    return true;
                                }
                                return context.createError({
                                    message:
                                        Number(value) > 100
                                            ? 'Ownership percentage is invalid!'
                                            : 'Ownership percentage must be 25% or more',
                                    path: context.path,
                                });
                            } else if (
                                businessDetails?.businessCategory?.value ===
                                    'single_member_llc' ||
                                businessDetails?.businessCategory?.value ===
                                    'sole_proprietor'
                            ) {
                                if (
                                    value !== '' &&
                                    !isNaN(value) &&
                                    Number(value) === 100
                                ) {
                                    return true;
                                }
                                return false;
                            }
                            if (
                                value !== '' &&
                                !isNaN(value) &&
                                (Number(value) === 100 ||
                                    (Number(value) >= 25 &&
                                        Number(value) <= 100))
                            ) {
                                return true;
                            }
                            return context.createError({
                                message:
                                    Number(value) > 100
                                        ? 'Ownership percentage is invalid!'
                                        : 'Ownership percentage must be 25% or more',
                                path: context.path,
                            });
                        }
                    ),
            })
        ),
    });
};

export const BusinessRepresentativeValidationSchema = yup.object().shape({
    representativeDetails: yup.array().of(
        yup.object().shape({
            fname: yup
                .string()
                .nullable()
                .required('Legal person first name is required.'),
            lname: yup
                .string()
                .nullable()
                .required('Legal person last name is required.'),
            // phoneNumber: yup
            //     .string()
            // .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Invalid phone number')
            // .notOneOf(['00000'], 'Should be in XXX-XXX-XXXX format and Cannot be all zeroes.')
            // .min(10, 'Phone should be 10 digits.')
            // .max(10, 'Phone should be 10 digits.')
            // .required('Phone number is required.'),
            phoneNumber: yup
                .string()
                .nullable()
                .required('Phone number is required.')
                .min(12, 'Phone should be 10 digits.'),
            ssn: yup
                .string()
                .nullable()
                .required('SSN is required.')
                .min(11, 'SSN should be 9 digit.')
                .max(11, 'SSN should be 9 digit.'),
            dob: yup.string().nullable().required('Date of birth is required.'),
            email: yup
                .string()
                .email('Must be a valid email.')
                .max(255)
                .required('Email address is required.'),
            countryAddress: yup
                .object()
                .nullable()
                .required('Country is require.'),
            stateAddress: yup.object().nullable().required('State is require.'),
            addressLine1: yup
                .string()
                .nullable()
                .required('Address line 1 is required.'),
            city: yup.string().required('City is required.'),
            zipcode: yup
                .string()
                .nullable()
                .notOneOf(
                    ['00000'],
                    'Should be in XXXXX format.Cannot containt all zeroes.'
                )
                .min(5, 'Should be in XXXXX format.')
                .max(5, 'Zip-code should be 5 digits.')
                .required('Zip-code is required.'),
            secondaryIdentificationType: yup
                .object()
                .nullable()
                .required('Secondary identification is required.'),
            soInsurence: yup
                .object()
                .nullable()
                .when('secondaryIdentificationType', {
                    is: (secondaryIdentificationType) =>
                        secondaryIdentificationType?.value === 'dl',
                    then: yup
                        .object()
                        .nullable()
                        .required('State of issuance is required.'),
                }),
            idNumber: yup
                .string()
                .nullable()
                .required('Id number is required.'),
        })
    ),
});

export const BankDetailsValidationSchema = yup.object().shape({
    accountHolderName: yup
        .string()
        .required('Bank account holder name is required.'),
    accountType: yup
        .object()
        .nullable()
        .required('Bank account type is required.'),
    accountRole: yup.object().nullable().required('Purpose is required.'),
    accountNumber: yup
        .string()
        .required('Account number is required.')
        .max(8, 'Account number should be 8 digits.')
        .min(8, 'Account number should be 8 digits.'),
    routingNumber: yup
        .string()
        .required('Routing number is require')
        .max(9, 'Routing number should be 9 digits.')
        .min(9, 'Routing number should be 9 digits.'),
});

export const SummaryValidationSchema = yup.object().shape({
    confirmation: yup
        .boolean()
        .oneOf([true], 'uou need to accept the confirm details'),
    tnc: yup
        .boolean()
        .oneOf([true], 'you need to accept the terms and conditions'),
});

export const shippingValidationSchema = yup.object().shape({
    address1: yup.string().required('Address 1 is required.'),
    daystofulfill: yup
        .object()
        .nullable()
        .required('Days to fultill  is required.'),
    state: yup
        .object()
        .shape({
            label: yup.string().required('State is required.'),
            value: yup.string().required('State is required.'),
        })
        .nullable()
        .required('State is required.'),
    country: yup
        .object()
        .shape({
            label: yup.string().required('Country is required.'),
            value: yup.string().required('Country is required.'),
        })
        .nullable()
        .required('Country is required.'),
    city: yup.string().required('City is required.'),
    shippingfee: yup.string().required('Shipping fee is required.'),
    incrementalfee: yup.string().required('Incremental fee is required.'),
    zip: yup.string().required('Zip-code is required.'),
});

export const brandProfileValidationSchema = yup.object().shape({
    companyName: yup.string().required('Company name is required.'),
    contactEmail: yup
        .string()
        .email('Must be a valid email.')
        .max(255)
        .required('Contact email is required.'),
    contactPhone: yup.string().required('Contact phone number is required.'),
    brandName: yup.string().required('Brand name is required.'),
    brandWebsite: yup
        .string()
        .url('Please enter a valid URL')
        .required('Brand website is required.'),
    brandCategory: yup
        .array()
        .min(1, 'At least 1 category required')
        .max(3, 'Select max 3 category.')
        .nullable()
        .required('Select max 3 category.'),
    aboutTheBrand: yup.string().required('About the brand is required.'),
    videoLink: yup.string().required('Please enter valid website.'),
});
