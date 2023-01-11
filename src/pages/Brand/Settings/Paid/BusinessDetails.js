import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import GpArrowWhiteIcon from '../../images/gp-arrow-white.svg';
import { setBusinessDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSlice';
import { selectBusinessDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSelector';
import { BusinessDetailsValidationSchema } from './ValidationSchema';
import { A } from '../../../../components/common/A';
import { termsAndCondition } from '../../../../constants';

const businessCategoryOptions = [
    { value: 'signle_member_llc', label: 'Single Member LLC' },
    { value: 'solo_proprietor', label: 'Sole Proprietor' },
    { value: 'llc', label: 'LLC' },
    { value: 'llp', label: 'LLP' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'ccorp', label: 'C_CORP' },
    { value: 'scorp', label: 'S_CORP' },
    { value: 'goverment_organization', label: 'Government Organization' },
    { value: 'non_profit', label: 'Non Profit' },
    { value: 'tax_exempt', label: 'Tax Exempt' },
];

const textIdOptions = [
    {
        value: 'ein',
        label: 'Employer Identification Number (EIN)',
    },
    { value: 'ssn', label: 'Social Security Number (SSN)' },
];

const stateIncorporationOptions = [
    {
        value: 'alaska',
        label: 'Alaska',
    },
    { value: 'nyc', label: 'New York' },
];

const deliveryTimeOptions = [
    {
        value: 'week',
        label: 'Week',
    },
    { value: '2weeks', label: '2 Weeks' },
    { value: 'month', label: 'Month' },
    { value: '2month', label: '2 Months' },
    { value: '2monthplus', label: 'Over 2 Months' },
];

const merchantOptions = [
    {
        value: '5099',
        label: '5099 (Durable goods - not else classified)',
    },
    { value: '5199', label: '5199 (Nondurable goods - not else classified)' },
];

const salesOptions = [
    {
        value: '0',
        label: '100% Digital Transaction',
    },
];

const defaultValues = {
    stateOfIncorportation: stateIncorporationOptions[0],
    averageDeliveryTime: deliveryTimeOptions[0],
    merchantCategoryCode: merchantOptions[0],
    salesMethod: salesOptions[0],
};
const categoryStyle = {
    control: (styles) => {
        return {
            ...styles,
            boxShadow: 'none',
            minHeight: '40px',
            '&:hover': {
                boxShadow: 'none',
            },
        };
    },
    container: (style) => {
        return {
            ...style,
            marginTop: '5xp',
            marginRight: '1px',
        };
    },
};

export default function BusinessDetails({
    isEdited,
    setStartingTab,
    handleChangeTab,
    setIsEdited,
}) {
    const businessDetails = useSelector(selectBusinessDetails);
    const dispatch = useDispatch();

    const {
        control,
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(BusinessDetailsValidationSchema),
        defaultValues,
    });

    useEffect(() => {
        const isFormValuePresent = Object.keys(businessDetails).length;
        if (isFormValuePresent != null) {
            const fields = [
                'businessName',
                'businessAs',
                'textIdType',
                'employerIdentificationNumber',
                'socialSecurityNumber',
                'dateOfIncorportation',
                'bankruptcy',
                'dateOfDischarge',
                'averageSales',
                'averageSalePrice',
                'productionDescription',
                'businessCategory',
                'salesMethod',
                'merchantCategoryCode',
                'averageDeliveryTime',
            ];

            fields.forEach((field) => setValue(field, businessDetails[field]));
        }

        return () => {
            setIsEdited(false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdited]);

    const onSubmit = (data) => {
        dispatch(setBusinessDetails(data));
        reset();
        handleChangeTab('2');
    };

    const businessCategoryWatch = watch('businessCategory');
    const textIdTypeWatch = watch('textIdType');
    const bankruptcy = watch('bankruptcy');

    return (
        <>
            <form className="gp-right" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="heading">Business Details</h3>
                <p>
                    The information Priority Holdings collects about your
                    business helps them meet requirements from regulators, and
                    their{' '}
                    <A href={termsAndCondition} target="_blank">
                        Terms and Conditions
                    </A>
                    .
                </p>
                <div className="form-area">
                    <div className="form-input mb-4">
                        <label htmlFor="" className="form-label">
                            Legal business name&nbsp;
                            <span className="asterisk-red">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control mb-0"
                            name="businessName"
                            placeholder=""
                            {...register('businessName', { required: true })}
                        />
                        {errors.businessName && (
                            <span className="error-text">
                                {errors.businessName?.message}
                            </span>
                        )}
                    </div>
                    <div className="form-input mb-4">
                        <label htmlFor="" className="form-label">
                            Doing business as
                        </label>
                        <input
                            type="text"
                            className="form-control mb-0"
                            name="businessAs"
                            placeholder=""
                            {...register('businessAs', { required: true })}
                        />
                        <small>
                            The operating name of your company, if it&nbsp;s
                            different than the legal name.{' '}
                        </small>
                        {errors.businessAs && (
                            <span className="error-text">
                                {errors.businessAs?.message}
                            </span>
                        )}
                    </div>
                    <div className="form-input mb-4 business_category">
                        <label htmlFor="" className="form-label">
                            Business category&nbsp;
                            <span className="asterisk-red">*</span>
                        </label>
                        <Controller
                            name="businessCategory"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    placeholder=""
                                    className="basic-single"
                                    classNamePrefix="select"
                                    styles={categoryStyle}
                                    components={{
                                        IndicatorSeparator: () => null,
                                    }}
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#fbf5f0',
                                            primary: '#bd6f34',
                                        },
                                    })}
                                    options={businessCategoryOptions}
                                />
                            )}
                        />
                        {errors.businessCategory && (
                            <span className="error-text">
                                {errors.businessCategory?.message}
                            </span>
                        )}
                    </div>
                    {businessCategoryWatch?.value === 'signle_member_llc' && (
                        <>
                            <div className="form-input mb-4 signle_member_llc">
                                <label htmlFor="" className="form-label">
                                    Tax ID Type&nbsp;
                                    <span className="asterisk-red">*</span>
                                </label>
                                <Controller
                                    name="textIdType"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            className="basic-single"
                                            classNamePrefix="select"
                                            placeholder=""
                                            styles={categoryStyle}
                                            components={{
                                                IndicatorSeparator: () => null,
                                            }}
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    primary25: '#fbf5f0',
                                                    primary: '#bd6f34',
                                                },
                                            })}
                                            options={textIdOptions}
                                        />
                                    )}
                                />
                                {errors.textIdType && (
                                    <span className="error-text">
                                        {errors.textIdType?.message}
                                    </span>
                                )}
                            </div>
                        </>
                    )}
                    {((textIdTypeWatch?.value === 'ein' &&
                        businessCategoryWatch?.value === 'signle_member_llc') ||
                        businessCategoryWatch?.value === 'llc' ||
                        businessCategoryWatch?.value === 'llp' ||
                        businessCategoryWatch?.value === 'partnership' ||
                        businessCategoryWatch?.value === 'ccorp' ||
                        businessCategoryWatch?.value === 'scorp' ||
                        businessCategoryWatch?.value ===
                            'goverment_organization' ||
                        businessCategoryWatch?.value === 'non_profit' ||
                        businessCategoryWatch?.value === 'tax_exempt') && (
                        <div className="form-input mb-4 ein">
                            <label htmlFor="" className="form-label">
                                Employer Identification Number (EIN)&nbsp;
                                <span className="asterisk-red">*</span>
                            </label>
                            <input
                                type="number"
                                name="employerIdentificationNumber"
                                className="form-control mb-0"
                                id=""
                                {...register('employerIdentificationNumber', {
                                    required: true,
                                })}
                            />
                            {errors.employerIdentificationNumber && (
                                <span className="error-text">
                                    {
                                        errors.employerIdentificationNumber
                                            ?.message
                                    }
                                </span>
                            )}
                        </div>
                    )}

                    {(textIdTypeWatch?.value === 'ssn' ||
                        businessCategoryWatch?.value === 'solo_proprietor') &&
                        businessCategoryWatch?.value !== 'llc' &&
                        businessCategoryWatch?.value !== 'llp' &&
                        businessCategoryWatch?.value !== 'partnership' &&
                        businessCategoryWatch?.value !== 'ccorp' &&
                        businessCategoryWatch?.value !== 'scorp' &&
                        businessCategoryWatch?.value !==
                            'goverment_organization' &&
                        businessCategoryWatch?.value !== 'non_profit' &&
                        businessCategoryWatch?.value !== 'tax_exempt' && (
                            <div className="form-input mb-4 ssn">
                                <label htmlFor="" className="form-label">
                                    Social Security Number (SSN)&nbsp;
                                    <span className="asterisk-red">*</span>
                                </label>
                                <input
                                    type="number"
                                    name="socialSecurityNumber"
                                    className="form-control mb-0"
                                    {...register('socialSecurityNumber', {
                                        required: true,
                                    })}
                                />
                                {errors.socialSecurityNumber && (
                                    <span className="error-text">
                                        {errors.socialSecurityNumber?.message}
                                    </span>
                                )}
                            </div>
                        )}

                    <div className="form-input mb-4">
                        <label htmlFor="" className="form-label">
                            State of incorporation&nbsp;
                            <span className="asterisk-red">*</span>
                        </label>
                        <Controller
                            name="stateOfIncorportation"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    styles={categoryStyle}
                                    components={{
                                        IndicatorSeparator: () => null,
                                    }}
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#fbf5f0',
                                            primary: '#bd6f34',
                                        },
                                    })}
                                    options={stateIncorporationOptions}
                                />
                            )}
                        />
                        {errors.stateOfIncorportation && (
                            <span className="error-text">
                                {errors.stateOfIncorportation?.message}
                            </span>
                        )}
                    </div>
                    <div className="form-input mb-4">
                        <label htmlFor="" className="form-label">
                            Date of incorporation&nbsp;
                            <span className="asterisk-red">*</span>
                        </label>
                        <input
                            type="date"
                            name="dateOfIncorportation"
                            className="form-control mb-0"
                            placeholder="MMDDYYYY"
                            {...register('dateOfIncorportation', {
                                required: true,
                            })}
                        />
                        {errors.dateOfIncorportation && (
                            <span className="error-text">
                                {errors.dateOfIncorportation?.message}
                            </span>
                        )}
                    </div>
                    <div className="form-input return_select-item mb-4">
                        <p className="mb-0">
                            Prior bankruptcy&nbsp;
                            <span className="asterisk-red">*</span>
                        </p>
                        <div className="pe_radio mt-2">
                            <label htmlFor="radio-return" className="radiobox">
                                <input
                                    type="radio"
                                    control={control}
                                    name="bankruptcy"
                                    id="radio-return"
                                    value="yes"
                                    {...register('bankruptcy', {
                                        required: true,
                                    })}
                                />
                                <div className="radiobox-text">
                                    <span>Yes</span>
                                </div>
                            </label>
                            <label
                                htmlFor="radio-return-one"
                                className="radiobox"
                            >
                                <input
                                    control={control}
                                    type="radio"
                                    name="bankruptcy"
                                    id="radio-return-one"
                                    value="no"
                                    {...register('bankruptcy', {
                                        required: true,
                                    })}
                                />

                                <div className="radiobox-text">
                                    <span>No</span>
                                </div>
                            </label>
                            {errors.bankruptcy && (
                                <span className="error-text">
                                    {errors.bankruptcy?.message}
                                </span>
                            )}

                            {bankruptcy === 'yes' && (
                                <div className="radio-data-info mt-3">
                                    <div className="form-input">
                                        <label className="form-label">
                                            Date of discharge&nbsp;
                                            <span className="asterisk-red">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="dateOfDischarge"
                                            placeholder="MMDDYYYY"
                                            {...register('dateOfDischarge', {
                                                required: true,
                                            })}
                                        />
                                        {errors.dateOfDischarge && (
                                            <span className="error-text">
                                                {
                                                    errors.dateOfDischarge
                                                        ?.message
                                                }
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="form-input mb-4">
                        <label className="form-label">
                            Estimated average sales volume on ShopDot
                            (Monthly)&nbsp;
                            <span className="asterisk-red">*</span>
                        </label>
                        <input
                            type="number"
                            name="averageSales"
                            className="form-control mb-0"
                            id=""
                            {...register('averageSales', {
                                required: true,
                            })}
                        />
                        {errors.averageSales && (
                            <span className="error-text">
                                {errors.averageSales?.message}
                            </span>
                        )}
                    </div>
                    <div className="form-input mb-4">
                        <label htmlFor="" className="form-label">
                            Estimate average wholesale price on ShopDot&nbsp;
                            <span className="asterisk-red">*</span>
                        </label>
                        <input
                            type="number"
                            name="averageSalePrice"
                            className="form-control mb-0"
                            id=""
                            {...register('averageSalePrice', {
                                required: true,
                            })}
                        />
                        {errors.averageSalePrice && (
                            <span className="error-text">
                                {errors.averageSalePrice?.message}
                            </span>
                        )}
                    </div>
                    <div className="form-input mb-4">
                        <label htmlFor="" className="form-label">
                            Average delivery time&nbsp;
                            <span className="asterisk-red">*</span>
                        </label>
                        <Controller
                            name="averageDeliveryTime"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    styles={categoryStyle}
                                    components={{
                                        IndicatorSeparator: () => null,
                                    }}
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#fbf5f0',
                                            primary: '#bd6f34',
                                        },
                                    })}
                                    options={deliveryTimeOptions}
                                />
                            )}
                        />
                        {errors.averageDeliveryTime && (
                            <span className="error-text">
                                {errors.averageDeliveryTime?.message}
                            </span>
                        )}
                    </div>
                    <div className="form-input mb-4">
                        <label htmlFor="" className="form-label">
                            Merchant category code&nbsp;
                            <span className="asterisk-red">*</span>
                        </label>

                        <Controller
                            name="merchantCategoryCode"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    styles={categoryStyle}
                                    components={{
                                        IndicatorSeparator: () => null,
                                    }}
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#fbf5f0',
                                            primary: '#bd6f34',
                                        },
                                    })}
                                    options={merchantOptions}
                                />
                            )}
                        />
                        {errors.merchantCategoryCode && (
                            <span className="error-text">
                                {errors.merchantCategoryCode?.message}
                            </span>
                        )}
                    </div>
                    <div className="form-input mb-4">
                        <label htmlFor="" className="form-label">
                            Sales method&nbsp;
                            <span className="asterisk-red">*</span>
                        </label>
                        <Controller
                            name="salesMethod"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    styles={categoryStyle}
                                    components={{
                                        IndicatorSeparator: () => null,
                                    }}
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#fbf5f0',
                                            primary: '#bd6f34',
                                        },
                                    })}
                                    options={salesOptions}
                                />
                            )}
                        />
                        {errors.salesMethod && (
                            <span className="error-text">
                                {errors.salesMethod?.message}
                            </span>
                        )}
                    </div>
                    <div className="form-input mb-4">
                        <label htmlFor="" className="form-label">
                            Product description&nbsp;
                            <span className="asterisk-red">*</span>
                        </label>
                        <textarea
                            name="productionDescription"
                            className="textarea-item"
                            id="message"
                            rows="3"
                            cols="5"
                            required=""
                            placeholder=""
                            {...register('productionDescription', {
                                required: true,
                            })}
                        ></textarea>
                        {errors.productionDescription && (
                            <span className="error-text">
                                {errors.productionDescription?.message}
                            </span>
                        )}
                    </div>
                </div>
                <div className="form-area">
                    <div className="form-input form-submit">
                        <button
                            className="button button-grey cancel"
                            onClick={() => setStartingTab(false)}
                        >
                            Back
                        </button>
                        <button className="button summary-icon" type="submit">
                            Save and Next
                            <img src={GpArrowWhiteIcon} />
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

BusinessDetails.propTypes = {
    isEdited: PropTypes.bool,
    setStartingTab: PropTypes.func,
    handleChangeTab: PropTypes.func,
    setIsEdited: PropTypes.func,
};
