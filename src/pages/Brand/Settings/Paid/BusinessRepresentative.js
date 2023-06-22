/* eslint-disable react/prop-types */
import React, { useEffect, Fragment, useMemo } from 'react';
import Select from 'react-select';
import { useForm, Controller, useFieldArray, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setRepresentativeDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSlice';
import {
  selectGettingPaidPreferance,
  selectRepresentativeDetails,
  selectBusinessDetails,
} from '../../../../redux/Brand/GettingPaid/gettingPaidSelector';
import {
  BusinessRepresentativeValidationSchema,
  getRepresentativeValidation,
  shippingValidationSchema,
} from './ValidationSchema';
import rightArrow from '../../../../assets/images/icons/Vector.11.svg';
import info from '../../images/icons/icon-info-red.svg';
import plusprimary from '../../images/icons/plus.svg';
import {
  countryOptions,
  stateIncorporationOptions,
  identityOptions,
  categoryStyle,
  ExampleCustomInput,
} from '../../common/utils/utils';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { selectCountries } from '../../../../redux/General/Countries/getCountriesSelector';
import { selectStates } from '../../../../redux/General/States/getStatesSelector';
import { getStatesAction } from '../../../../actions/generalActions';

export default function BusinessRepresentative({
  setIsEdited,
  isEdited,
  handleChangeTab,
  handleConfirmationModelClose,
}) {
  const businessDetails = useSelector(selectBusinessDetails);
  const personalDetails = useSelector(selectRepresentativeDetails);
  const gettingPaidPreferance = useSelector(selectGettingPaidPreferance);
  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    watch,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(
      gettingPaidPreferance?.publiclyTraded === 'yes'
        ? BusinessRepresentativeValidationSchema
        : getRepresentativeValidation()
    ),
    defaultValues: {
      representativeDetails: [
        {
          fname: '',
          lname: '',
          phoneNumber: '',
          ssn: '',
          dob: '',
          email: '',
          addressLine1: '',
          addressLine2: '',
          countryAddress: '',
          stateAddress: null,
          zipcode: '',
          secondaryIdentificationType: null,
          soInsurence: null,
          idNumber: '',
          UScitizen: 'yes',
          percentageOwnership: '',
        },
      ],
    },
    mode: 'onChange',
    shouldFocusError: true,
  });

  const watchCountry = useWatch({ name: 'countryAddress', control: control });
  const countriesOption = useSelector(selectCountries);
  const states = useSelector(selectStates);
  const transformStatesOption = states?.map((el) => {
    return { label: el.name, value: el.code };
  });
  const transformCountriesOption = countriesOption?.map((el) => {
    return { value: el.id, label: el.name };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (watchCountry && watchCountry.value) {
      dispatch(getStatesAction(watchCountry?.value));
    }
  }, [watchCountry]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'representativeDetails',
  });

  useEffect(() => {
    const isFormValuePresent = personalDetails && personalDetails.length > 0;
    if (isFormValuePresent) {
      reset({
        representativeDetails: personalDetails.map((ele) => {
          return { ...ele, dob: new Date(ele?.dob) };
        }),
      });
    }

    return () => {
      setIsEdited(false);
    };
  }, [isEdited]);

  const onSubmit = (data) => {
    console.log('Business Representative(page-2)', data?.representativeDetails);
    dispatch(setRepresentativeDetails(data?.representativeDetails));
    reset();
    handleChangeTab('3');
  };

  useEffect(() => {
    if (
      businessDetails?.businessCategory?.value !== 'SINGLE_MEMBER_LLC' ||
      businessDetails?.businessCategory?.value !== 'SOLE_PROPRIETOR'
    ) {
      setValue(`representativeDetails.${0}.percentageOwnership`, '100');
    }
  }, []);

  const handlePhoneChange = (event, i) => {
    const rawValue = event.target.value.replace(/[^\d]/g, ''); // Remove all non-digits
    let formattedValue = '';
    if (rawValue.length < 4) {
      formattedValue = rawValue;
    } else if (rawValue.length < 7) {
      formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`;
    } else {
      formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(
        3,
        6
      )}-${rawValue.slice(6, 10)}`;
    }
    setValue(`representativeDetails.${i}.phoneNumber`, formattedValue);
    if (formattedValue === '000-000-0000') {
      setError(`representativeDetails.${i}.phoneNumber`, {
        type: 'custom',
        message: 'Should be in XXX-XXX-XXXX format and Cannot be all zeroes.',
      });
    } else if (formattedValue.length < 12) {
      setError(`representativeDetails.${i}.phoneNumber`, {
        type: 'custom',
        message: 'Phone should be 10 digits.',
      });
    } else {
      clearErrors(`representativeDetails.${i}.phoneNumber`);
      event.target.blur();
    }
  };

  const handleSSNChange = (event, i) => {
    const rawValue = event.target.value.replace(/[^\d]/g, ''); // Remove all non-digits
    let formattedValues = '';
    if (rawValue.length < 4) {
      formattedValues = rawValue;
    } else if (rawValue.length < 6) {
      formattedValues = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`;
    } else {
      formattedValues = `${rawValue.slice(0, 3)}-${rawValue.slice(
        3,
        5
      )}-${rawValue.slice(5, 9)}`;
    }
    setValue(`representativeDetails.${i}.ssn`, formattedValues);

    if (!formattedValues) {
      setError(`representativeDetails.${i}.ssn`, {
        type: 'custom',
        message: 'SSN is required',
      });
    } else if (formattedValues.length < 3) {
      setError(`representativeDetails.${i}.ssn`, {
        type: 'custom',
        message: 'SSN should be in XXX-XX-XXXX format.',
      });
    } else if (formattedValues.length < 11) {
      setError(`representativeDetails.${i}.ssn`, {
        type: 'custom',
        message: 'SSN should be 9 digits',
      });
    } else {
      clearErrors(`representativeDetails.${i}.ssn`);
      event.target.blur();
    }
  };

  const representativeDetailsWatch = watch('representativeDetails');

  const getTotalPercentage = () => {
    const percentage =
      (representativeDetailsWatch &&
        representativeDetailsWatch
          .map((ele) => ele?.percentageOwnership)
          .reduce((acc, currentPrice) => acc + parseFloat(currentPrice), 0)) ||
      0;
    return percentage;
  };

  const checkTotalPercentage = () => {
    const totalCent = getTotalPercentage();
    const isAbletoAddNew = totalCent < 100;
    return isAbletoAddNew;
  };

  const disabledSubmitButton = () => {
    const totalCent = getTotalPercentage();
    if (gettingPaidPreferance?.publiclyTraded === 'no') {
      if (businessDetails?.businessCategory?.value === 'PARTNERSHIP') {
        if (totalCent >= 50) {
          return false;
        }
        return true;
      } else if (
        businessDetails?.businessCategory?.value !== 'SINGLE_MEMBER_LLC' ||
        businessDetails?.businessCategory?.value !== 'SOLE_PROPRIETOR'
      ) {
        // if (totalCent >= 25) {
        //   return false;
        // }
        return false;
      }
    } else {
      return false;
    }
  };

  const handleAddRepresentative = (e) => {
    e.stopPropagation();
    const isAbletoAddNew = checkTotalPercentage();
    if (isAbletoAddNew) {
      append({
        fname: '',
        lname: '',
        phoneNumber: '',
        ssn: '',
        dob: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        countryAddress: countryOptions[0],
        stateAddress: null,
        zipcode: '',
        secondaryIdentificationType: null,
        soInsurence: null,
        idNumber: '',
        UScitizen: 'yes',
        percentageOwnership: '',
      });
    }
  };
  const subtractYears = (date, years) => {
    date.setFullYear(date.getFullYear() - years);
    return date;
  };
  return (
    <form className="gp-right" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => {
        return (
          <Fragment key={item?.id}>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="heading">
                Business Representative <span>#{index + 1}</span>
              </h3>
            </div>
            {gettingPaidPreferance?.publiclyTraded === 'no' ? (
              index === 0 ? (
                <p>
                  As business owner and authorized signer please complete the
                  information below.
                </p>
              ) : (
                <p>As a business owner complete the information below.</p>
              )
            ) : (
              <p>As an authorized signer complete the information below.</p>
            )}
            <div className="form-area position-relative">
              <button
                onClick={() => remove(index)}
                className={`button remove-br ${
                  index === 0 ? 'd-none' : 'd-block'
                }`}
              >
                Remove
              </button>
              <div className="category-form-input">
                <div className="form-input mb-4">
                  <label className="form-label">
                    Legal name of business representative.&nbsp;
                    <span className="asterisk-red">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control mb-0"
                    id=""
                    placeholder="First name"
                    name={`representativeDetails.${index}.fname`}
                    {...register(`representativeDetails.${index}.fname`, {
                      required: true,
                    })}
                  />
                  {errors?.representativeDetails?.[index]?.fname && (
                    <span className="error-text">
                      {errors?.representativeDetails?.[index]?.fname?.message}
                    </span>
                  )}
                </div>
                <div className="form-input mb-4">
                  <label className="form-label">&nbsp;</label>
                  <input
                    type="text"
                    className="form-control mb-0"
                    id=""
                    placeholder="Last name"
                    name={`representativeDetails.${index}.lname`}
                    {...register(`representativeDetails.${index}.lname`, {
                      required: true,
                    })}
                  />
                  {errors?.representativeDetails?.[index]?.lname && (
                    <span className="error-text">
                      {errors?.representativeDetails?.[index]?.lname?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-input mb-4">
                <label className="form-label">
                  Phone number&nbsp;
                  <span className="asterisk-red">*</span>
                </label>
                <Controller
                  name={`representativeDetails.${index}.phoneNumber`}
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <input
                      type="tel"
                      value={value}
                      className="form-control mb-0"
                      placeholder="(123) 456-7899"
                      onChange={(e) => {
                        onChange(e);
                        handlePhoneChange(e, index);
                      }}
                      onBlur={onBlur}
                    />
                  )}
                />
                {errors?.representativeDetails?.[index]?.phoneNumber && (
                  <span className="error-text">
                    {
                      errors?.representativeDetails?.[index]?.phoneNumber
                        ?.message
                    }
                  </span>
                )}
              </div>
              <div className="form-input mb-4">
                <label className="form-label">
                  Social Security Number (SSN)&nbsp;
                  <span className="asterisk-red">*</span>
                </label>
                <Controller
                  name={`representativeDetails.${index}.ssn`}
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <input
                      type="tel"
                      value={value}
                      placeholder="123-44-5678"
                      className="form-control mb-0"
                      onChange={(e) => {
                        onChange(e);
                        handleSSNChange(e, index);
                      }}
                      onBlur={onBlur}
                    />
                  )}
                />
                {errors?.representativeDetails?.[index]?.ssn && (
                  <span className="error-text">
                    {errors?.representativeDetails?.[index]?.ssn?.message}
                  </span>
                )}
              </div>
              <div className="form-input mb-4">
                <label className="form-label">
                  Date of birth&nbsp;
                  <span className="asterisk-red">*</span>
                </label>

                <Controller
                  name={`representativeDetails.${index}.dob`}
                  control={control}
                  render={({
                    field: { onChange, onBlur, value },
                    ...props
                  }) => (
                    <>
                      <DatePicker
                        closeOnScroll
                        maxDate={subtractYears(new Date(), 18)}
                        minDate={subtractYears(new Date(), 100)}
                        customInput={<ExampleCustomInput />}
                        placeholderText="MM-DD-YYYY"
                        dateFormat="MM-dd-yyyy"
                        showPopperArrow={false}
                        {...props}
                        onBlur={onBlur}
                        onChange={onChange}
                        selected={value}
                      />
                    </>
                  )}
                />
                {errors?.representativeDetails?.[index]?.dob && (
                  <span className="error-text">
                    {errors?.representativeDetails?.[index]?.dob?.message}
                  </span>
                )}
              </div>
              <div className="form-input mb-4">
                <label className="form-label">
                  Email address <span className="asterisk-red">*</span>{' '}
                </label>
                <input
                  name={`representativeDetails.${index}.email`}
                  type="text"
                  className="form-control mb-0"
                  placeholder="yourname@email.com"
                  {...register(`representativeDetails.${index}.email`, {
                    required: true,
                  })}
                />
                {errors?.representativeDetails?.[index]?.email && (
                  <span className="error-text">
                    {errors?.representativeDetails?.[index]?.email?.message}
                  </span>
                )}
              </div>
              <div className="form-input mb-4">
                <label className="form-label">
                  Address line 1 <span className="asterisk-red">*</span>
                </label>
                <input
                  type="text"
                  className="form-control mb-0"
                  name={`representativeDetails.${index}.addressLine1`}
                  {...register(`representativeDetails.${index}.addressLine1`, {
                    required: true,
                  })}
                />
                {errors?.representativeDetails?.[index]?.addressLine1 && (
                  <span className="error-text">
                    {
                      errors?.representativeDetails?.[index]?.addressLine1
                        ?.message
                    }
                  </span>
                )}
              </div>
              <div className="form-input mb-4">
                <label className="form-label">Address line 2</label>
                <input
                  type="text"
                  className="form-control mb-0"
                  name={`representativeDetails.${index}.addressLine2`}
                  {...register(`representativeDetails.${index}.addressLine2`, {
                    required: false,
                  })}
                  placeholder=""
                />
                {errors?.representativeDetails?.[index]?.addressLine2 && (
                  <span className="error-text">
                    {
                      errors?.representativeDetails?.[index]?.addressLine2
                        ?.message
                    }
                  </span>
                )}
              </div>
              <div className="category-form-input mb-4">
                <div className="form-input">
                  <label className="form-label">
                    Country <span className="asterisk-red">*</span>
                  </label>
                  <Controller
                    name={`representativeDetails.${index}.countryAddress`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        className="basic-single_top"
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
                        options={transformCountriesOption}
                      />
                    )}
                  />
                  {errors?.representativeDetails?.[index]?.countryAddress && (
                    <span className="error-text">
                      {
                        errors?.representativeDetails?.[index]?.countryAddress
                          ?.message
                      }
                    </span>
                  )}
                </div>
                <div className="form-input mb-2">
                  <label className="form-label">
                    State <span className="asterisk-red">*</span>
                  </label>
                  <Controller
                    name={`representativeDetails.${index}.stateAddress`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        className="basic-single_top"
                        classNamePrefix="select"
                        placeholder="Select State"
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
                        options={transformStatesOption}
                      />
                    )}
                  />
                  {errors?.representativeDetails?.[index]?.stateAddress && (
                    <span className="error-text">
                      {
                        errors?.representativeDetails?.[index]?.stateAddress
                          ?.message
                      }
                    </span>
                  )}
                </div>
              </div>
              <div className="category-form-input mb-4">
                <div className="form-input">
                  <label className="form-label">
                    City <span className="asterisk-red">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control mb-0"
                    id=""
                    placeholder="New York"
                    name={`representativeDetails.${index}.city`}
                    {...register(`representativeDetails.${index}.city`, {
                      required: true,
                    })}
                  />
                  {errors?.representativeDetails?.[index]?.city && (
                    <span className="error-text">
                      {errors?.representativeDetails?.[index]?.city?.message}
                    </span>
                  )}
                </div>
                <div className="form-input">
                  <label className="form-label">
                    ZIP <span className="asterisk-red">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control mb-0"
                    id=""
                    placeholder="10014"
                    name={`representativeDetails.${index}.zipcode`}
                    {...register(`representativeDetails.${index}.zipcode`, {
                      required: true,
                    })}
                  />
                  {errors?.representativeDetails?.[index]?.zipcode && (
                    <span className="error-text">
                      {errors?.representativeDetails?.[index]?.zipcode?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-input mb-4 secondary_identification mt-3">
                <label className="form-label">
                  Secondary identification&nbsp;
                  <span className="asterisk-red">*</span>
                </label>
                <Controller
                  name={`representativeDetails.${index}.secondaryIdentificationType`}
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      placeholder="Identification type"
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
                      options={identityOptions}
                    />
                  )}
                />
                {errors?.representativeDetails?.[index]
                  ?.secondaryIdentificationType && (
                  <span className="error-text">
                    {
                      errors?.representativeDetails?.[index]
                        ?.secondaryIdentificationType?.message
                    }
                  </span>
                )}
                {representativeDetailsWatch?.[index]
                  ?.secondaryIdentificationType?.value === 'DRIVER_LICENSE' && (
                  <div className="form-input mb-2 state_issuance mt-2">
                    <Controller
                      name={`representativeDetails.${index}.soInsurence`}
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          placeholder="Select State"
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
                          options={transformStatesOption}
                        />
                      )}
                    />
                    {errors?.representativeDetails?.[index]?.soInsurence && (
                      <span className="error-text">
                        {
                          errors?.representativeDetails?.[index]?.soInsurence
                            ?.message
                        }
                      </span>
                    )}
                  </div>
                )}

                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="ID Number"
                  name={`representativeDetails.${index}.idNumber`}
                  {...register(`representativeDetails.${index}.idNumber`, {
                    required: true,
                  })}
                />
                {errors?.representativeDetails?.[index]?.idNumber && (
                  <span className="error-text">
                    {errors?.representativeDetails?.[index]?.idNumber?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="form-input return_select-item mb-4 radio-row">
              <p className="mb-0">
                U.S. citizen <span className="asterisk-red">*</span>
              </p>
              <div className="mt-2 radio-flex">
                <label className="radiobox">
                  <input
                    type="radio"
                    id="citizen"
                    control={control}
                    value="yes"
                    name={`representativeDetails.${index}.UScitizen`}
                    {...register(`representativeDetails.${index}.UScitizen`, {
                      required: true,
                    })}
                  />
                  <div className="radiobox-text">
                    <span>Yes</span>
                  </div>
                </label>
                <label className="radiobox">
                  <input
                    type="radio"
                    id="citizen-one"
                    control={control}
                    value="no"
                    name={`representativeDetails.${index}.UScitizen`}
                    {...register(`representativeDetails.${index}.UScitizen`, {
                      required: true,
                    })}
                  />
                  <div className="radiobox-text">
                    <span>No</span>
                  </div>
                </label>
              </div>
            </div>
            <div>
              <div
                className={`form-input mb-4 percentage-input form-area ${
                  gettingPaidPreferance?.publiclyTraded === 'no'
                    ? 'd-block'
                    : 'd-none'
                }`}
              >
                <label className="form-label">
                  Percentage ownership&nbsp;
                  {businessDetails?.businessCategory?.value !==
                    'SINGLE_MEMBER_LLC' &&
                  businessDetails?.businessCategory?.value !==
                    'SOLE_PROPRIETOR' ? (
                    <span className="asterisk-red">*</span>
                  ) : (
                    <div />
                  )}
                </label>
                <div className="wp-right">
                  <span className="percentage-lbl">%</span>
                  <Controller
                    name={`representativeDetails.${index}.percentageOwnership`}
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        type="number"
                        value={
                          businessDetails?.businessCategory?.value ==
                            'SINGLE_MEMBER_LLC' ||
                          businessDetails?.businessCategory?.value ==
                            'SOLE_PROPRIETOR'
                            ? '100'
                            : value
                        }
                        placeholder="25% or more"
                        className="form-control"
                        onChange={(e) => {
                          onChange(e);
                        }}
                        onBlur={onBlur}
                        disabled={
                          businessDetails?.businessCategory?.value ==
                            'SINGLE_MEMBER_LLC' ||
                          businessDetails?.businessCategory?.value ==
                            'SOLE_PROPRIETOR'
                        }
                      />
                    )}
                  />
                </div>
              </div>
              {errors?.representativeDetails?.[index]?.percentageOwnership && (
                <div className="form-area">
                  <div
                    className="alert alert-error sd_alert-error"
                    role="alert"
                  >
                    <div className="icon">
                      <img src={info} alt="info" />
                    </div>
                    <div>
                      {
                        errors?.representativeDetails?.[index]
                          ?.percentageOwnership?.message
                      }
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Fragment>
        );
      })}
      <div className="form-area position-relative">
        {gettingPaidPreferance?.publiclyTraded === 'no' &&
          (businessDetails?.businessCategory?.value === 'PARTNERSHIP' ? (
            <p>
              <strong>
                Complete for any individuals with 25% or more ownership. If
                none, add additional business owners (with less that 25%
                ownership share) until the combined total of all reported
                business owners&apos; share of the business is greater than 50%.
              </strong>
            </p>
          ) : businessDetails?.businessCategory?.value !==
              'SINGLE_MEMBER_LLC' &&
            businessDetails?.businessCategory?.value !== 'SOLE_PROPRIETOR' ? (
            <p>
              <strong>
                Complete for any individuals with 25% or more ownership of the
                business entity.
              </strong>
            </p>
          ) : null)}

        {gettingPaidPreferance?.publiclyTraded === 'no' &&
          businessDetails?.businessCategory?.value !== 'SINGLE_MEMBER_LLC' &&
          businessDetails?.businessCategory?.value !== 'SOLE_PROPRIETOR' && (
            <button
              type="button"
              onClick={(e) => handleAddRepresentative(e)}
              className={'button button-border large add-owner mt-0'}
            >
              <img className="icon" src={plusprimary} /> Add a business owner
            </button>
          )}
      </div>

      <div className="form-area">
        <div className="form-input form-submit">
          <button
            type="button"
            className="button button-grey cancel"
            onClick={() => handleConfirmationModelClose()}
          >
            Back
          </button>
          <button
            className="button summary-icon"
            type="submit"
            disabled={!isValid || disabledSubmitButton()}
          >
            Save and Next
            <img src={rightArrow} alt="Arrow" />
          </button>
        </div>
      </div>
    </form>
  );
}

BusinessRepresentative.propTypes = {
  isEdited: PropTypes.bool,
  handleChangeTab: PropTypes.func,
  setIsEdited: PropTypes.func,
  handleConfirmationModelClose: PropTypes.func,
};
