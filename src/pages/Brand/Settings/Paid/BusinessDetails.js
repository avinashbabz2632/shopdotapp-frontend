import React, { useEffect, useState } from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setBusinessDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSlice';
import {
  selectBusinessDetails,
  selectGettingPaidPreferance,
} from '../../../../redux/Brand/GettingPaid/gettingPaidSelector';
import { BusinessDetailsValidationSchema } from './ValidationSchema';
import rightArrow from '../../../../assets/images/icons/Vector.11.svg';
import {
  businessCategoryOptions,
  stateIncorporationOptions,
  deliveryTimeOptions,
  merchantOptions,
  salesOptions,
  categoryStyle,
  ExampleCustomInput,
  businessCategoryOptionsNew,
  textIdOptions,
  countryOptions,
} from '../../common/utils/utils';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { isEmpty, isNil } from 'lodash';
import { selectStates } from '../../../../redux/General/States/getStatesSelector';
import { getStatesAction } from '../../../../actions/generalActions';
import { selectCountries } from '../../../../redux/General/Countries/getCountriesSelector';

const defaultValues = {
  //   averageDeliveryTime: deliveryTimeOptions[0],
  //   merchantCategoryCode: merchantOptions[0],
  //   countryAddress: countryOptions[0],
  //   salesMethod: salesOptions[0],
  bankruptcy: 'no',
};

export default function BusinessDetails({
  isEdited,
  setStartingTab,
  handleChangeTab,
  setIsEdited,
  handleConfirmationModelClose,
}) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(BusinessDetailsValidationSchema),
    defaultValues,
  });

  const watchCountry = useWatch({ name: 'countryAddress', control: control });
  const countriesOption = useSelector(selectCountries);
  const transformCountriesOption = countriesOption?.map((el) => {
    return { value: el.id, label: el.name };
  });
  const businessDetails = useSelector(selectBusinessDetails);
  const gettingPaidPreferance = useSelector(selectGettingPaidPreferance);
  const [stateList, setStateList] = useState([]);
  const states = useSelector(selectStates);
  const transformStatesOption = states?.map((el) => {
    return { label: el.name, value: el.code };
  });
  useEffect(() => {
    if (watchCountry && watchCountry.value) {
      dispatch(getStatesAction(watchCountry?.value));
    }
  }, [watchCountry]);

  const bussinessCategoryOptions =
    !isEmpty(gettingPaidPreferance) &&
    !isNil(gettingPaidPreferance) &&
    gettingPaidPreferance?.publiclyTraded === 'no'
      ? businessCategoryOptionsNew
      : businessCategoryOptions;

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getStatesAction(1));
    const isFormValuePresent = Object.keys(businessDetails).length;
    if (isFormValuePresent !== 0) {
      const fields = [
        'businessName',
        'textIdType',
        'socialSecurityNumber',
        'businessAs',
        'employerIdentificationNumber',
        'bankruptcy',
        'averageSales',
        'averageSalePrice',
        'productionDescription',
        'businessCategory',
        'salesMethod',
        'merchantCategoryCode',
        'averageDeliveryTime',
        'website',
        'businessEmail',
        'stateOfIncorportation',
        'phoneNumber',
        'addressLine1',
        'addressLine2',
        'countryAddress',
        'stateAddress',
        'city',
        'zipcode',
      ];
      fields.forEach((field) => setValue(field, businessDetails[field]));
      setValue(
        'dateOfIncorportation',
        businessDetails['dateOfIncorportation']
          ? new Date(businessDetails['dateOfIncorportation'])
          : ''
      );

      setValue(
        'dateOfDischarge',
        businessDetails['dateOfDischarge']
          ? new Date(businessDetails['dateOfDischarge'])
          : ''
      );
    }
    // if (states.length > 0) {
    //   const s = [];
    //   states.map((v, k) => {
    //     s.push({ value: v.name, label: v.name });
    //   });
    //   setStateList(s);
    // }
    return () => {
      setIsEdited(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdited]);
  const onSubmit = (data) => {
    console.log('Business Details(page-1)', data);
    dispatch(setBusinessDetails(data));
    reset();
    handleChangeTab('2');
  };
  const handleEINChange = (event) => {
    const rawValue = event.target.value.replace(/[^\d]/g, ''); // Remove all non-digits
    if (rawValue === '') {
      // Check if the input is empty
      setError('employerIdentificationNumber', {
        type: 'custom',
        message: 'Please enter an EIN',
      });
      return;
    }
    let formattedValues = '';
    if (rawValue.length < 3) {
      formattedValues = rawValue;
    } else {
      formattedValues = `${rawValue.slice(0, 2)}-${rawValue.slice(2, 9)}`;
    }
    setValue('employerIdentificationNumber', formattedValues);
    if (formattedValues?.length < 2) {
      setError('employerIdentificationNumber', {
        type: 'custom',
        message: 'should be in XX-XXXXXXX format.',
      });
    } else if (formattedValues?.length < 10) {
      setError('employerIdentificationNumber', {
        type: 'custom',
        message: 'EIN should be 9 digit',
      });
    } else {
      clearErrors('employerIdentificationNumber');
      event.target.blur();
    }
  };

  const handleSSNChange = (event) => {
    const rawValue = event.target.value.replace(/[^\d]/g, ''); // Remove all non-digits
    if (rawValue === '') {
      // Check if the input is empty
      setError('socialSecurityNumber', {
        type: 'custom',
        message: 'Please enter an SSN',
      });
      return;
    }
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
    setValue('socialSecurityNumber', formattedValues);
    if (formattedValues.length < 3) {
      setError('socialSecurityNumber', {
        type: 'custom',
        message: 'should be in XXX-XX-XXXX format.',
      });
    } else if (formattedValues.length < 11) {
      setError('socialSecurityNumber', {
        type: 'custom',
        message: 'SSN should be 9 digit',
      });
    } else {
      clearErrors('socialSecurityNumber');
      event.target.blur();
    }
  };
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
    setValue('phoneNumber', formattedValue);
  };

  const businessCategoryWatch = watch('businessCategory');
  const bankruptcy = watch('bankruptcy');
  const textIdTypeWatch = watch('textIdType');

  return (
    <>
      <form className="gp-right" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="heading">Business Details</h3>
        <div className="form-area">
          <div className="form-input mb-4">
            <label className="form-label">
              Legal name of business&nbsp;
              <span className="asterisk-red">*</span>
            </label>
            <input
              type="text"
              className="form-control mb-0"
              name="businessName"
              placeholder=""
              {...register('businessName', { required: true })}
            />
            {errors?.businessName && (
              <span className="error-text">
                {errors?.businessName?.message}
              </span>
            )}
          </div>
          <div className="form-input mb-4">
            <label className="form-label">Doing business as</label>
            <input
              type="text"
              className="form-control mb-0"
              name="businessAs"
              placeholder=""
              {...register('businessAs', { required: true })}
            />
            <small>
              The operating name of your company if it&lsquo;s different than
              the legal name.{' '}
            </small>
            {errors?.businessAs && (
              <span className="error-text">{errors?.businessAs?.message}</span>
            )}
          </div>
          <div className="form-input mb-4">
            <label className="form-label">
              Business website address <span className="asterisk-red">*</span>{' '}
            </label>
            <input
              {...register('website', { required: true })}
              name="website"
              type="text"
              className="form-control mb-0"
              id=""
              placeholder=""
            />
            {errors?.website && (
              <span className="error-text">{errors?.website?.message}</span>
            )}
          </div>
          <div className="form-input mb-4">
            <label className="form-label">
              Business email address <span className="asterisk-red">*</span>{' '}
            </label>
            <input
              {...register('businessEmail', { required: true })}
              name="businessEmail"
              type="text"
              className="form-control mb-0"
              id=""
              placeholder=""
            />
            {errors?.businessEmail && (
              <span className="error-text">
                {errors?.businessEmail?.message}
              </span>
            )}
          </div>
          <div className="form-input mb-4 business_category">
            <label className="form-label">
              Business category&nbsp;
              <span className="asterisk-red">*</span>
            </label>
            <Controller
              name="businessCategory"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select Business Category"
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
                  options={bussinessCategoryOptions}
                />
              )}
            />
            {errors?.businessCategory && (
              <span className="error-text">
                {errors?.businessCategory?.message}
              </span>
            )}
          </div>
          {(businessCategoryWatch?.value === 'SINGLE_MEMBER_LLC' ||
            businessCategoryWatch?.value === 'SOLE_PROPRIETOR') && (
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
                    <>
                      <Select
                        {...field}
                        className="basic-single"
                        classNamePrefix="select"
                        placeholder={'Select Text ID'}
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
                    </>
                  )}
                />
                {errors?.textIdType && (
                  <span className="error-text">
                    {errors?.textIdType?.message}
                  </span>
                )}
              </div>
            </>
          )}
          {(businessCategoryWatch?.value === 'c_corp_publicly_traded' ||
            businessCategoryWatch?.value === 'goverment_organization' ||
            businessCategoryWatch?.value === 'non_profit' ||
            businessCategoryWatch?.value === 'tax_exempt' ||
            businessCategoryWatch?.value === 'llc' ||
            businessCategoryWatch?.value === 'llp' ||
            businessCategoryWatch?.value === 'partnership' ||
            businessCategoryWatch?.value === 'c_corp_not_publicly_traded' ||
            businessCategoryWatch?.value === 's_crop' ||
            textIdTypeWatch?.value === 'ein') && (
            <div className="form-input mb-4 ein">
              <label className="form-label">
                Employer Identification Number (EIN)&nbsp;
                <span className="asterisk-red">*</span>
              </label>
              <input
                type="tel"
                placeholder="12-3456789"
                name="employerIdentificationNumber"
                className="form-control mb-0"
                id=""
                {...register('employerIdentificationNumber', {
                  required: true,
                })}
                onChange={(event) => handleEINChange(event)}
              />
              {errors?.employerIdentificationNumber && (
                <span className="error-text">
                  {errors?.employerIdentificationNumber?.message}
                </span>
              )}
            </div>
          )}

          {(businessCategoryWatch?.value === 'SINGLE_MEMBER_LLC' ||
            businessCategoryWatch?.value === 'SOLE_PROPRIETOR') &&
            textIdTypeWatch?.value === 'ssn' && (
              <div className="form-input mb-4">
                <label htmlFor="" className="form-label">
                  Social Security Number (SSN)&nbsp;
                  <span className="asterisk-red">*</span>
                </label>
                <Controller
                  name="socialSecurityNumber"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="tel"
                      name="socialSecurityNumber"
                      className="form-control mb-0"
                      placeholder="123-44-5678"
                      onChange={(event) => {
                        handleSSNChange(event);
                      }}
                    />
                  )}
                />
                {errors?.socialSecurityNumber && (
                  <span className="error-text">
                    {errors?.socialSecurityNumber?.message}
                  </span>
                )}
              </div>
            )}
          <div className="form-input mb-4">
            <label className="form-label">
              Business phone number&nbsp;
              <span className="asterisk-red">*</span>
            </label>
            <Controller
              name={'phoneNumber'}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <input
                  type="tel"
                  value={value}
                  className="form-control mb-0"
                  placeholder="(123) 456-7899"
                  onChange={(e) => {
                    onChange(e);
                    handlePhoneChange(e);
                  }}
                  onBlur={onBlur}
                />
              )}
            />
            {errors?.phoneNumber && (
              <span className="error-text">{errors?.phoneNumber?.message}</span>
            )}
          </div>
          <div className="form-input">
            <label className="fw-700 mb-2 mt-4 d-flex">
              Business mailing address <span className="asterisk-red">*</span>
            </label>
          </div>
          <div className="form-input mb-4">
            <label className="form-label">
              Address line 1 <span className="asterisk-red">*</span>
            </label>
            <input
              type="text"
              className="form-control mb-0"
              name={'addressLine1'}
              {...register('addressLine1', {
                required: true,
              })}
            />
            {errors?.addressLine1 && (
              <span className="error-text">
                {errors?.addressLine1?.message}
              </span>
            )}
          </div>
          <div className="form-input mb-4">
            <label className="form-label">Address line 2</label>
            <input
              type="text"
              className="form-control mb-0"
              name={'addressLine2'}
              {...register('addressLine2', {
                required: false,
              })}
              placeholder=""
            />
            {errors?.addressLine2 && (
              <span className="error-text">
                {errors?.addressLine2?.message}
              </span>
            )}
          </div>
          <div className="category-form-input mb-4">
            <div className="form-input">
              <label className="form-label">
                Country <span className="asterisk-red">*</span>
              </label>
              <Controller
                name={'countryAddress'}
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
              {errors?.countryAddress && (
                <span className="error-text">
                  {errors?.countryAddress?.message}
                </span>
              )}
            </div>
            <div className="form-input mb-2">
              <label className="form-label">
                State <span className="asterisk-red">*</span>
              </label>
              <Controller
                name={'stateAddress'}
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
              {errors?.stateAddress && (
                <span className="error-text">
                  {errors?.stateAddress?.message}
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
                name={'city'}
                {...register('city', {
                  required: true,
                })}
              />
              {errors?.city && (
                <span className="error-text">{errors?.city?.message}</span>
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
                name={'zipcode'}
                {...register('zipcode', {
                  required: true,
                })}
              />
              {errors?.zipcode && (
                <span className="error-text">{errors?.zipcode?.message}</span>
              )}
            </div>
          </div>
          <div className="form-input mb-4">
            <label className="form-label">
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
                  placeholder={'Select State'}
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
            {errors?.stateOfIncorportation && (
              <span className="error-text">
                {errors?.stateOfIncorportation?.message}
              </span>
            )}
          </div>
          <div className="form-input mb-4">
            <label className="form-label">
              Date of incorporation&nbsp;
              <span className="asterisk-red">*</span>
            </label>

            <Controller
              control={control}
              name="dateOfIncorportation"
              render={({ field: { onChange, onBlur, value }, ...props }) => (
                <>
                  <DatePicker
                    closeOnScroll
                    maxDate={new Date()}
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
            {errors?.dateOfIncorportation && (
              <span className="error-text">
                {errors?.dateOfIncorportation?.message}
              </span>
            )}
          </div>
          <div className="form-input return_select-item mb-4 radio-row">
            <p className="mb-0">
              Prior bankruptcy&nbsp;
              <span className="asterisk-red">*</span>
            </p>
            <div className="pe_radio mt-2">
              <div className="radio-flex">
                <label className="radiobox">
                  <input
                    type="radio"
                    id="radio-return"
                    name="bankruptcy"
                    value="yes"
                    {...register('bankruptcy', {
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
                    id="radio-return-one"
                    name="bankruptcy"
                    value="no"
                    {...register('bankruptcy', {
                      required: true,
                    })}
                  />

                  <div className="radiobox-text">
                    <span>No</span>
                  </div>
                </label>
                {errors?.bankruptcy && (
                  <span className="error-text">
                    {errors?.bankruptcy?.message}
                  </span>
                )}
              </div>
              {bankruptcy === 'yes' && (
                <div className="radio-data-info mt-3">
                  <div className="form-input">
                    <label className="form-label">
                      Date of discharge&nbsp;
                      <span className="asterisk-red">*</span>
                    </label>

                    <Controller
                      control={control}
                      name="dateOfDischarge"
                      render={({
                        field: { onChange, onBlur, value },
                        ...props
                      }) => (
                        <>
                          <DatePicker
                            closeOnScroll
                            maxDate={new Date()}
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
                    {errors?.dateOfDischarge && (
                      <span className="error-text">
                        {errors?.dateOfDischarge?.message}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="form-input mb-4">
            <label className="form-label">
              Estimated average sales volume on ShopDot (Monthly)&nbsp;
              <span className="asterisk-red">*</span>
            </label>
            <div className="wp-right">
              <span className="doller-lbl">$</span>
              <input
                type="number"
                name="averageSales"
                className="form-control mb-0"
                id=""
                {...register('averageSales', {
                  required: true,
                })}
              />
              {errors?.averageSales && (
                <span className="error-text">
                  {errors?.averageSales?.message}
                </span>
              )}
            </div>
          </div>
          <div className="form-input mb-4">
            <label className="form-label">
              Estimated average wholesale price on ShopDot&nbsp;(per item)
              <span className="asterisk-red">*</span>
            </label>
            <div className="wp-right">
              <span className="doller-lbl">$</span>
              <input
                type="number"
                name="averageSalePrice"
                className="form-control mb-0"
                id=""
                {...register('averageSalePrice', {
                  required: true,
                })}
              />
              {errors?.averageSalePrice && (
                <span className="error-text">
                  {errors?.averageSalePrice?.message}
                </span>
              )}
            </div>
          </div>
          <div className="form-input mb-4">
            <label className="form-label">
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
            {errors?.averageDeliveryTime && (
              <span className="error-text">
                {errors?.averageDeliveryTime?.message}
              </span>
            )}
          </div>
          <div className="form-input mb-4">
            <label className="form-label">
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
            {errors?.merchantCategoryCode && (
              <span className="error-text">
                {errors?.merchantCategoryCode?.message}
              </span>
            )}
          </div>
          <div className="form-input mb-4">
            <label className="form-label">
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
            {errors?.salesMethod && (
              <span className="error-text">{errors?.salesMethod?.message}</span>
            )}
          </div>
          <div className="form-input mb-4">
            <label className="form-label">
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
            {errors?.productionDescription && (
              <span className="error-text">
                {errors?.productionDescription?.message}
              </span>
            )}
          </div>
        </div>
        <div className="form-area">
          <div className="form-input form-submit">
            <button
              type="button"
              onClick={() => handleConfirmationModelClose()}
              className="button button-grey cancel"
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
    </>
  );
}

BusinessDetails.propTypes = {
  isEdited: PropTypes.bool,
  setStartingTab: PropTypes.func,
  handleChangeTab: PropTypes.func,
  setIsEdited: PropTypes.func,
  handleConfirmationModelClose: PropTypes.func,
};
