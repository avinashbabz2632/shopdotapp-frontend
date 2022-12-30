import * as yup from 'yup';

export const BusinessDetailsValidationSchema = yup.object().shape({
    businessName: yup.string().required('Legal Business name is required.'),
    businessAs: yup
        .string()
        .required('Doing Business is required.')
        .test(
            'businessName',
            'Doing Business is different than the legal name',
            function (business) {
                return business ? business !== this.parent.businessName : true;
            }
        ),
    businessCategory: yup
        .object()
        .shape({
            label: yup.string().required('Business Category is required.'),
            value: yup.string().required('Business Category is required.'),
        })
        .nullable()
        .required('Business Category is required.'),
    textIdType: yup.object().when('businessCategory', {
        is: (businessCategory) =>
            businessCategory?.value === 'signle_member_llc',
        then: yup.object().nullable().required('TextID is required'),
    }),
    employerIdentificationNumber: yup.string().when('textIdType', {
        is: (textIdType) => textIdType?.value === 'ein',
        then: yup
            .string()
            .required('Employer Identification Number is required'),
    }),
    // .when('businessCategory', {
    //     is: (businessCategory) =>
    //         businessCategory?.value !== 'solo_proprietor',
    //     then: yup
    //         .string()
    //         .required('Employer Identification Number is required'),
    // }),
    socialSecurityNumber: yup
        .string()
        .when('textIdType', {
            is: (textIdType) => textIdType?.value === 'ssn',
            then: yup.string().required('Social Security Number is required.'),
        })
        .when('businessCategory', {
            is: (businessCategory) =>
                businessCategory?.value === 'solo_proprietor',
            then: yup.string().required('Social Security Number is required.'),
        }),
    stateOfIncorportation: yup
        .object()
        .shape({
            label: yup.string().required('State of Incorporation is required.'),
            value: yup.string().required('State of Incorporation is required.'),
        })
        .nullable()
        .required('State of Incorporation is required.'),
    dateOfIncorportation: yup
        .string()
        .required('Date of Incorporation is required.'),
    bankruptcy: yup
        .string()
        .nullable()
        .required('Prior Bankruptcy is required.'),
    dateOfDischarge: yup.string().when('bankruptcy', {
        is: (bankruptcy) => bankruptcy === true,
        then: yup.string().required('Date of Discharge is required.'),
    }),
    averageSales: yup
        .string()
        .required('Estimated Average Sales Volume on ShopDot is required.'),
    averageSalePrice: yup
        .string()
        .required('Estimated Average Sale Price on ShopDot is required.'),
    averageDeliveryTime: yup
        .object()
        .shape({
            label: yup.string().required('Average Delivery Time is required.'),
            value: yup.string().required('Average Delivery Time is required.'),
        })
        .nullable()
        .required('Average Delivery Time is required.'),

    merchantCategoryCode: yup
        .object()
        .shape({
            label: yup.string().required('Merchant Category Code is required.'),
            value: yup.string().required('Merchant Category Code is required.'),
        })
        .nullable()
        .required('Merchant Category Code is required.'),

    salesMethod: yup
        .object()
        .shape({
            label: yup.string().required('Sales Method is required.'),
            value: yup.string().required('Sales Method is required.'),
        })
        .nullable()
        .required('Sales Method is required.'),
    productionDescription: yup
        .string()
        .required('Product Description is required.'),
});

export const BusinessRepresentativeValidationSchema = yup.object().shape({
    fname: yup.string().required('Legal Person first name is required.'),
    lname: yup.string().required('Legal Person last name is required.'),
    phoneNumber: yup.string().required('Phone number is required.'),
    ssn: yup.string().required('SSN is required.'),
    dob: yup.string().required('Date of birth is required.'),
    countryAddress: yup
        .object()
        .shape({
            label: yup.string().required('Country is require.'),
            value: yup.string().required('Country is require.'),
        })
        .nullable()
        .required('Address State is require.'),
    stateAddress: yup
        .object()
        .shape({
            label: yup.string().required('Address State is require.'),
            value: yup.string().required('Address State is require.'),
        })
        .nullable()
        .required('Address State is require.'),
    addressLine1: yup.string().required('Address line 1 is required.'),
    addressLine2: yup.string(),
    city: yup.string().required('City is required.'),
    citySelect: yup
        .object()
        .shape({
            label: yup.string().required('City is required.'),
            value: yup.string().required('City is required.'),
        })
        .nullable()
        .required('City is required'),
    zipcode: yup.string().required('Zip-code is required.'),

    secondaryIdentificationType: yup
        .object()
        .nullable()
        .required('Secondary Identification is required.'),

    coInsurence: yup.object().when('secondaryIdentificationType', {
        is: (secondaryIdentificationType) =>
            secondaryIdentificationType?.value !== 'dl',
        then: yup
            .object()
            .nullable()
            .required('Country of issuance is required.'),
    }),
    soInsurence: yup.object().when('secondaryIdentificationType', {
        is: (secondaryIdentificationType) =>
            secondaryIdentificationType?.value === 'dl',
        then: yup
            .object()
            .nullable()
            .required('State of issuance is required.'),
    }),

    idNumber: yup.string().required('Id number is required.'),
});

export const BankDetailsValidationSchema = yup.object().shape({
    accountHolderName: yup
        .string()
        .required('Bank Account holder name is required.'),
    accountType: yup
        .object()
        .nullable()
        .required('Bank Account type is required.'),
    accountRole: yup.object().nullable().required('Purpose is required.'),
    accountNumber: yup.string().required('Account number is required.'),
    routingNumber: yup.string().required('Routing number is require'),
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
    companyName: yup.string().required('Company name is required.'),
    contactEmail: yup
        .string()
        .email('Must be a valid email.')
        .max(255)
        .required('Contact email is required.'),
    contactPhone: yup.string().required('Contact phone number is required.'),
    brandName: yup.string().required('Brand name is required.'),
    brandWebsite: yup.string().required('Brand website is required.'),
    brandCategory: yup
        .array()
        .min(1, 'At least 1 category required')
        .max(3, 'Select max 3 category.')
        .nullable()
        .required('Select max 3 category.'),
    aboutTheBrand: yup.string().required('About the brand is required.'),
    videoLink: yup.string().required('Please enter valid website.'),
});
