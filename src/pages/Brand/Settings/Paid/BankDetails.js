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
  { value: 'CHECKING', label: 'Current' },
  {
    value: 'SAVINGS',
    label: 'Savings',
  },
];

const accountRoleOption = [
  { value: 'CORPORATE', label: 'Business' },
  {
    value: 'CONSUMER',
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
  account_type: accountTypeOption[0],
  purpose: accountRoleOption[0],
};

export default function BankDetails({
  isEdited,
  setIsEdited,
  handleChangeTab,
  formData,
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
        'account_holder_name',
        'account_type',
        'purpose',
        'account_number',
        'socialSecurityNumber',
        'routing_number',
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
            name="account_holder_name"
            placeholder=""
            {...register('account_holder_name', { required: true })}
          />
          {errors.account_holder_name && (
            <span className="error-text">
              {errors.account_holder_name?.message}
            </span>
          )}
        </div>

        <div className="form-input mb-4">
          <label htmlFor="" className="form-label">
            Bank account type&nbsp;
            <span className="asterisk-red">*</span>
          </label>
          <Controller
            name="account_type"
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
          {errors.account_type && (
            <span className="error-text">{errors.account_type?.message}</span>
          )}
        </div>

        <div className="form-input mb-4">
          <label htmlFor="" className="form-label">
            Purpose&nbsp;<span className="asterisk-red">*</span>
          </label>
          <Controller
            name="purpose"
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
          {errors.purpose && (
            <span className="error-text">{errors.purpose?.message}</span>
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
            name="account_number"
            placeholder=""
            {...register('account_number', { required: true })}
          />
          {errors.account_number && (
            <span className="error-text">{errors.account_number?.message}</span>
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
            name="routing_number"
            placeholder=""
            {...register('routing_number', { required: true })}
          />
          {errors.routing_number && (
            <span className="error-text">{errors.routing_number?.message}</span>
          )}
          <small>
            9-digit Routing number of the account used for ACH transactions.
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
