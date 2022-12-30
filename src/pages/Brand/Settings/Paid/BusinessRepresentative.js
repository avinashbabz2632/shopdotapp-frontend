import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useForm, useWatch, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import GpArrowWhiteIcon from '../../images/gp-arrow-white.svg';
import { setRepresentativeDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSlice';
import { selectRepresentativeDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSelector';
import { BusinessRepresentativeValidationSchema } from './ValidationSchema';

const countryOptions = [
    {
        value: 'usa',
        label: 'United States',
    },
    { value: 'canada', label: 'Canada' },
];

const stateOptions = [
    {
        value: 'alaska',
        label: 'Alaska',
    },
    { value: 'nyc', label: 'New York' },
];

const countryOfIssurenceOptions = [
    {
        value: 'usa',
        label: 'United States           ',
    },
    { value: 'canada', label: 'Canada' },
];
const identityOptions = [
    {
        value: 'dl',
        label: 'Driver’s License',
    },
    { value: 'passport', label: 'Passport' },
    { value: 'reg_card', label: 'Alien Registration Card' },
];

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

const defaultValues = {
    stateAddress: stateOptions[0],
    citySelect: stateOptions[0],
    countryAddress: countryOptions[0],
};

export default function BusinessRepresentative({
    setIsEdited,
    isEdited,
    handleChangeTab,
}) {
    const personalDetails = useSelector(selectRepresentativeDetails);
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
        mode: 'onChange',
        resolver: yupResolver(BusinessRepresentativeValidationSchema),
        defaultValues,
    });

    useEffect(() => {
        const isFormValuePresent = Object.keys(personalDetails).length;
        if (isFormValuePresent) {
            const fields = [
                'fname',
                'lname',
                'ssn',
                'dob',
                'socialSecurityNumber',
                'stateAddress',
                'addressLine1',
                'addressLine2',
                'city',
                'citySelect',
                'zipcode',
                'coInsurence',
                'soInsurence',
                'idNumber',
                'secondaryIdentificationType',
            ];

            fields.forEach((field) => setValue(field, personalDetails[field]));
        }

        return () => {
            setIsEdited(false);
        };
    }, [isEdited]);

    const onSubmit = (data) => {
        dispatch(setRepresentativeDetails(data));
        reset();
        handleChangeTab('3');
    };

    const businessCategoryWatch = watch('secondaryIdentificationType');

    return (
        <form className="gp-right" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="heading">Business Representative</h3>
            <div className="form-area">
                <div className="category-form-input">
                    <div className="form-input mb-4">
                        <label htmlFor="" className="form-label">
                            Legal name of person&nbsp;
                            <span className="asterisk-red">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control mb-0"
                            id=""
                            name="fname"
                            placeholder="First name"
                            {...register('fname', { required: true })}
                        />
                        {errors.fname && (
                            <span className="error-text">
                                {errors.fname?.message}
                            </span>
                        )}
                    </div>
                    <div className="form-input mb-4">
                        <label htmlFor="" className="form-label">
                            &nbsp;
                        </label>
                        <input
                            type="text"
                            className="form-control mb-0"
                            id=""
                            name="lname"
                            placeholder="Last name"
                            {...register('lname', { required: true })}
                        />
                        {errors.lname && (
                            <span className="error-text">
                                {errors.lname?.message}
                            </span>
                        )}
                    </div>
                </div>
                <div className="form-input mb-4">
                    <label htmlFor="" className="form-label">
                        Phone number&nbsp;
                        <span className="asterisk-red">*</span>
                    </label>
                    <input
                        type="number"
                        className="form-control mb-0"
                        name="phoneNumber"
                        {...register('phoneNumber', { required: true })}
                    />
                    {errors.ssn && (
                        <span className="error-text">
                            {errors.phoneNumber?.message}
                        </span>
                    )}
                </div>
                <div className="form-input mb-4">
                    <label htmlFor="" className="form-label">
                        SSN&nbsp;<span className="asterisk-red">*</span>
                    </label>
                    <input
                        type="number"
                        className="form-control mb-0"
                        name="ssn"
                        {...register('ssn', { required: true })}
                    />
                    {errors.ssn && (
                        <span className="error-text">
                            {errors.ssn?.message}
                        </span>
                    )}
                </div>
                <div className="form-input mb-4">
                    <label htmlFor="" className="form-label">
                        Date of birth&nbsp;
                        <span className="asterisk-red">*</span>
                    </label>
                    <input
                        type="date"
                        className="form-control mb-0"
                        name="dob"
                        placeholder="MM-DD-YY"
                        {...register('dob', { required: true })}
                    />
                    {errors.dob && (
                        <span className="error-text">
                            {errors.dob?.message}
                        </span>
                    )}
                </div>
                <div className="form-input mb-4">
                    <label htmlFor="" className="form-label">
                        Address line 1 <span className="asterisk-red">*</span>
                    </label>
                    <input
                        type="text"
                        className="form-control mb-0"
                        name="addressLine1"
                        placeholder=""
                        {...register('addressLine1', { required: true })}
                    />
                    {errors.addressLine1 && (
                        <span className="error-text">
                            {errors.addressLine1?.message}
                        </span>
                    )}
                </div>
                <div className="form-input mb-4">
                    <label htmlFor="" className="form-label">
                        Address line 2 <span className="asterisk-red">*</span>
                    </label>
                    <input
                        type="text"
                        className="form-control mb-0"
                        name="addressLine2"
                        placeholder=""
                        {...register('addressLine2', { required: true })}
                    />
                    {errors.addressLine2 && (
                        <span className="error-text">
                            {errors.addressLine2?.message}
                        </span>
                    )}
                </div>
                <div className="category-form-input">
                    <div className="form-input mb-4">
                        <label className="form-label">
                            Country <span className="asterisk-red">*</span>
                        </label>
                        <Controller
                            name="countryAddress"
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
                                    options={countryOptions}
                                />
                            )}
                        />
                        {errors.countryAddress && (
                            <span className="error-text">
                                {errors.countryAddress?.message}
                            </span>
                        )}
                    </div>
                    <div className="form-input mb-2">
                        <label className="form-label">
                            State <span className="asterisk-red">*</span>
                        </label>
                        <Controller
                            name="stateAddress"
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
                                    options={stateOptions}
                                />
                            )}
                        />
                        {errors.stateAddress && (
                            <span className="error-text">
                                {errors.stateAddress?.message}
                            </span>
                        )}
                    </div>
                </div>
                <div className="category-form-input">
                    <div className="form-input mb-2">
                        <label htmlFor="" className="form-label">
                            City <span className="asterisk-red">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control mb-2 mt-0"
                            name="city"
                            {...register('city', { required: true })}
                        />
                        {errors.city && (
                            <span className="error-text">
                                {errors.city?.message}
                            </span>
                        )}
                    </div>
                    <div className="form-input mb-2">
                        <label htmlFor="" className="form-label">
                            ZIP <span className="asterisk-red">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control mb-2 mt-0"
                            name="zipcode"
                            {...register('zipcode', { required: true })}
                        />
                        {errors.zipcode && (
                            <span className="error-text">
                                {errors.zipcode?.message}
                            </span>
                        )}
                    </div>
                </div>
                <div className="form-input mb-4 secondary_identification">
                    <label htmlFor="" className="form-label">
                        Secondary identification&nbsp;
                        <span className="asterisk-red">*</span>
                    </label>
                    <Controller
                        name="secondaryIdentificationType"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                placeholder="Identification type"
                                className="basic-single"
                                classNamePrefix="select"
                                styles={categoryStyle}
                                components={{ IndicatorSeparator: () => null }}
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                        ...theme.colors,
                                        primary25: '#fbf5f0',
                                        primary: '#bd6f34',
                                    },
                                })}
                                options={identityOptions}
                            />
                        )}
                    />
                    {errors.secondaryIdentificationType && (
                        <span className="error-text">
                            {errors.secondaryIdentificationType?.message}
                        </span>
                    )}

                    {businessCategoryWatch?.value === 'dl' && (
                        <div className="form-input mb-2 state_issuance mt-2">
                            <Controller
                                name="soInsurence"
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
                                        options={stateOptions}
                                    />
                                )}
                            />
                            {errors.soInsurence && (
                                <span className="error-text">
                                    {errors.soInsurence?.message}
                                </span>
                            )}
                        </div>
                    )}

                    {(businessCategoryWatch?.value === 'passport' ||
                        businessCategoryWatch?.value === 'reg_card') && (
                        <div className="form-input mb-2 country_issuance mt-4">
                            <label htmlFor="" className="form-label">
                                Country of issuance
                                <span className="asterisk-red">*</span>
                            </label>
                            <Controller
                                name="coInsurence"
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
                                        options={countryOfIssurenceOptions}
                                    />
                                )}
                            />
                            {errors.coInsurence && (
                                <span className="error-text">
                                    {errors.coInsurence?.message}
                                </span>
                            )}
                        </div>
                    )}

                    <input
                        type="text"
                        className="form-control mb-2"
                        name="idNumber"
                        placeholder="ID Number"
                        {...register('idNumber', { required: true })}
                    />
                    {errors.idNumber && (
                        <span className="error-text">
                            {errors.idNumber?.message}
                        </span>
                    )}
                </div>
            </div>
            <div className="form-area">
                <div className="form-input form-submit">
                    <button
                        className="button button-grey cancel"
                        onClick={() => handleChangeTab('1')}
                    >
                        Back
                    </button>
                    <button className="button summary-icon">
                        Save and Next
                        <img src={GpArrowWhiteIcon} />
                    </button>
                </div>
            </div>
        </form>
    );
}

BusinessRepresentative.propTypes = {
    isEdited: PropTypes.String,
    handleChangeTab: PropTypes.func,
    setIsEdited: PropTypes.func,
};
