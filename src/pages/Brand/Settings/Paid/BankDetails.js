import React, { useEffect } from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import GpArrowWhiteIcon from '../../images/gp-arrow-white.svg';
import { setBankDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSlice';
import { selectBankDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSelector';
import { BankDetailsValidationSchema } from './ValidationSchema';

const accountTypeOption = [
    { value: 'checking', label: 'Checking' },
    {
        value: 'saving',
        label: 'Savings',
    },
];

const accountRoleOption = [
    { value: 'business', label: 'Business' },
    {
        value: 'personal',
        label: 'Personal',
    },
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
    accountType: accountTypeOption[0],
    accountRole: accountRoleOption[0],
};

export default function BankDetails({
    isEdited,
    setIsEdited,
    handleChangeTab,
}) {
    const bankDetails = useSelector(selectBankDetails);
    const dispatch = useDispatch();
    const {
        control,
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(BankDetailsValidationSchema),
        defaultValues,
    });

    useEffect(() => {
        const isFormValuePresent = Object.keys(bankDetails).length;
        if (isFormValuePresent) {
            const fields = [
                'accountHolderName',
                'accountType',
                'accountRole',
                'accountNumber',
                'socialSecurityNumber',
                'routingNumber',
            ];

            fields.forEach((field) => setValue(field, bankDetails[field]));
        }

        return () => {
            setIsEdited(false);
        };
    }, [isEdited]);

    const onSubmit = (data) => {
        dispatch(setBankDetails(data));
        reset();
        handleChangeTab('4');
    };

    return (
        <form className="gp-right" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="heading">Bank Details</h3>
            <p>Link your account to seamlessly receive payouts.</p>
            <div className="form-area">
                <div className="form-input mb-4">
                    <label htmlFor="" className="form-label">
                        Name of the bank account holder&nbsp;
                        <span className="asterisk-red">*</span>
                    </label>
                    <input
                        type="text"
                        className="form-control mb-0"
                        name="accountHolderName"
                        placeholder=""
                        {...register('accountHolderName', { required: true })}
                    />
                    {errors.accountHolderName && (
                        <span className="error-text">
                            {errors.accountHolderName?.message}
                        </span>
                    )}
                </div>

                <div className="form-input mb-4">
                    <label htmlFor="" className="form-label">
                        Bank account type&nbsp;
                        <span className="asterisk-red">*</span>
                    </label>
                    <Controller
                        name="accountType"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
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
                                options={accountTypeOption}
                            />
                        )}
                    />
                    {errors.accountType && (
                        <span className="error-text">
                            {errors.accountType?.message}
                        </span>
                    )}
                </div>

                <div className="form-input mb-4">
                    <label htmlFor="" className="form-label">
                        Purpose&nbsp;<span className="asterisk-red">*</span>
                    </label>
                    <Controller
                        name="accountRole"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
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
                                options={accountRoleOption}
                            />
                        )}
                    />
                    {errors.accountRole && (
                        <span className="error-text">
                            {errors.accountRole?.message}
                        </span>
                    )}
                </div>

                <div className="form-input mb-4">
                    <label htmlFor="" className="form-label">
                        Account number&nbsp;
                        <span className="asterisk-red">*</span>
                    </label>
                    <input
                        type="number"
                        className="form-control mb-0"
                        name="accountNumber"
                        placeholder=""
                        {...register('accountNumber', { required: true })}
                    />
                    {errors.accountNumber && (
                        <span className="error-text">
                            {errors.accountNumber?.message}
                        </span>
                    )}
                </div>

                <div className="form-input mb-4">
                    <label htmlFor="" className="form-label">
                        Routing number&nbsp;
                        <span className="asterisk-red">*</span>
                    </label>
                    <input
                        type="text"
                        className="form-control mb-0"
                        name="routingNumber"
                        placeholder=""
                        {...register('routingNumber', { required: true })}
                    />
                    {errors.routingNumber && (
                        <span className="error-text">
                            {errors.routingNumber?.message}
                        </span>
                    )}
                    <small>
                        9-digit Routing number of the account used for ACH
                        transactions.
                    </small>
                </div>
            </div>
            <div className="form-area">
                <div className="form-input form-submit">
                    <button
                        className="button button-grey cancel"
                        onClick={() => handleChangeTab('2')}
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

BankDetails.propTypes = {
    isEdited: PropTypes.String,
    handleChangeTab: PropTypes.func,
    setIsEdited: PropTypes.func,
};
