import React, { useEffect } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectBankDetails } from '../../../../redux/Brand/GettingPaid2/gettingPaidSelector';
import { setBankDetails } from '../../../../redux/Brand/GettingPaid2/gettingPaidSlice';
import Select from 'react-select';
import { BankDetailsValidationSchema } from './ValidationSchema';
import { brandBankDetailsAction } from '../../../../actions/brandActions';

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
      borderColor: '#ebbca2',
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

export default function EditBankDetail({
  setEditBankDetails,
  customerId,
  externalId,
}) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(BankDetailsValidationSchema),
    defaultValues,
  });

  const bankDetails = useSelector(selectBankDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    const fields = [
      'account_holder_name',
      'account_type',
      'purpose',
      'account_number',
      'routing_number',
    ];

    fields.forEach((field) => setValue(field, bankDetails[field]));
  }, []);

  const onSubmit = (data) => {
    dispatch(
      brandBankDetailsAction(
        {
          ...data,
          account_type: data.account_type.value,
          purpose: data.purpose.value,
          customer_id: customerId,
        },
        true,
        customerId,
        externalId
      )
    );
    // dispatch(setBankDetails(data));
    // setEditBankDetails(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mt-5">Bank Details</h2>
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
            placeholder="Jane Doe"
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
            placeholder="12345678"
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
            type="number"
            className="form-control mb-0"
            name="routing_number"
            placeholder="123456789"
            {...register('routing_number', { required: true })}
          />
          {errors.routing_number && (
            <span className="error-text">{errors.routing_number?.message}</span>
          )}
          <small>
            9-digit Routing Number of the account used for ACH transactions.
          </small>
        </div>
      </div>
      <div className="form-area">
        <div className="form-input form-submit">
          <button className="button w-100">Submit</button>
        </div>
      </div>
    </form>
  );
}
