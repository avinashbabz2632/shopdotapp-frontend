import React, { useEffect } from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setBankDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSlice';
import { selectBankDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSelector';
import { BankDetailsValidationSchema } from './ValidationSchema';
import rightArrow from '../../../../assets/images/icons/Vector.11.svg';
import {
    accountRoleOption,
    accountTypeOption,
    categoryStyle,
} from '../../common/utils/utils';

const defaultValues = {
    accountType: accountTypeOption[0],
    accountRole: accountRoleOption[0],
};

export default function BankDetails({
    isEdited,
    setIsEdited,
    handleChangeTab,
    handleConfirmationModelClose,
}) {
    const bankDetails = useSelector(selectBankDetails);
    const dispatch = useDispatch();
    const {
        control,
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isValid },
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
                'routingNumber',
            ];

            fields.forEach((field) => setValue(field, bankDetails[field]));
        }

        return () => {
            setIsEdited(false);
        };
    }, [isEdited]);

    const onSubmit = (data) => {
        console.log('Bank Details(page-3)', data);
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
                    <label className="form-label">
                        Bank account type&nbsp;
                        <span className="asterisk-red">*</span>
                    </label>
                    <Controller
                        name="accountType"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                placeholder="Select Business Category"
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
                <div className="form-input mb-4 form-control-wrapper">
                    <label className="form-label input_disabled">
                        Purpose
                        <span className="asterisk-red">*</span>
                    </label>
                    <Controller
                        name="accountRole"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                placeholder="Select Business Category"
                                className="basic-single"
                                classNamePrefix="select"
                                isDisabled
                                styles={categoryStyle}
                                isOptionDisabled={(option) => option}
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
                    <label className="form-label">
                        Account number <span className="asterisk-red">*</span>
                    </label>
                    <input
                        type="number"
                        className="form-control mb-0"
                        id=""
                        placeholder=""
                        name="accountNumber"
                        {...register('accountNumber', { required: true })}
                    />
                    {errors.accountNumber && (
                        <span className="error-text">
                            {errors.accountNumber?.message}
                        </span>
                    )}
                </div>

                <div className="form-input mb-4">
                    <label className="form-label">
                        Routing number&nbsp;
                        <span className="asterisk-red">*</span>
                    </label>
                    <input
                        type="number"
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
                        type="button"
                        onClick={() => handleConfirmationModelClose()}
                    >
                        Back
                    </button>
                    <button
                        className="button summary-icon"
                        type="submit"
                        disabled={!isValid}
                    >
                        Save and Next
                        <img src={rightArrow} alt="Arrow" />
                    </button>
                </div>
            </div>
        </form>
    );
}

BankDetails.propTypes = {
    isEdited: PropTypes.bool,
    handleChangeTab: PropTypes.func,
    setIsEdited: PropTypes.func,
    handleConfirmationModelClose: PropTypes.func,
};
