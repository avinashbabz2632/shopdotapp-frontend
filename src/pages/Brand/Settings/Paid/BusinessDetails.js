import React, { useEffect, useState } from 'react';
import { useForm, useWatch, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Select, { components } from 'react-select';
import * as yup from 'yup';
import PropTypes, { oneOf } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import GpArrowWhiteIcon from '../../images/gp-arrow-white.svg';
import { get } from 'lodash';
import { setBusinessDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSlice';
import { selectBusinessDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSelector';
import { BusinessDetailsValidationSchema } from './ValidationSchema';
import tAndCDoc from '../../../../assets/ShopDot-Online-Business-Services-Agreement-09-01-2022.pdf';
import { LinkMod } from '../../../../components/common/A';
import moment from 'moment';
import { ExampleCustomInput } from '../../../../utils/utils';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const businessCategoryOptions = [
  { value: 'C_CORP', label: 'C_CORP - Publicly Traded' },
  { value: 'GOVERNMENT_ORGANISATION', label: 'Government Organization' },
  { value: 'NON_PROFIT', label: 'Non Profit' },
  { value: 'TAX_EXEMPT', label: 'Tax Exempt' },
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
    value: 'AL',
    label: 'Alaska',
  },
  { value: 'NY', label: 'New York' },
];

const deliveryTimeOptions = [
  {
    value: 'WEEK',
    label: 'Week',
  },
  { value: 'FORTNIGHT', label: '2 Weeks' },
  { value: 'MONTH', label: 'Month' },
  { value: 'TWO_MONTHS', label: '2 Months' },
  { value: 'OVER_TWO_MONTHS', label: 'Over 2 Months' },
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
    value: 'ECOM',
    label: '100% Digital Transaction',
  },
];

const defaultValues = {
  state_of_incorporation: stateIncorporationOptions[0],
  average_delivery_time: deliveryTimeOptions[0],
  merchant_category_code: merchantOptions[0],
  sales_method: salesOptions[0],
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
  formData,
}) {
  const businessDetails = useSelector(selectBusinessDetails);
  const dispatch = useDispatch();
  const [incorporationDate, setIncorporationDate] = useState(null);
  const [dischargeDate, setDischargeDate] = useState(null);

  const {
    control,
    register,
    handleSubmit,
    reset,
    value,
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(BusinessDetailsValidationSchema),
    defaultValues,
  });
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <i className="dropdown-icon" />
      </components.DropdownIndicator>
    );
  };

  useEffect(() => {
    const isFormValuePresent = Object.keys(businessDetails).length;
    if (isFormValuePresent != null) {
      const fields = [
        'legal_name',
        'doing_business_as',
        'textIdType',
        'ein',
        'ssn',
        'date_of_incorporation',
        'prior_bankruptcy',
        'dateOfDischarge',
        'average_sales_volume',
        'average_purchase',
        'product_description',
        'business_category',
        'sales_method',
        'merchant_category_code',
        'average_delivery_time',
        'email',
        'store_website',
      ];

      fields.forEach((field) => setValue(field, businessDetails[field]));
    }

    return () => {
      setIsEdited(false);
    };
  }, [isEdited]);

  const handleEINChange = (event) => {
    const rawValue = event.target.value.replace(/[^\d]/g, ''); // Remove all non-digits
    let formattedValues = '';
    if (rawValue.length < 3) {
      formattedValues = rawValue;
    } else {
      formattedValues = `${rawValue.slice(0, 2)}-${rawValue.slice(2, 9)}`;
    }
    setValue('ein', formattedValues);
    if (formattedValues.length < 2) {
      setError('ein', {
        type: 'custom',
        message: 'should be in XX-XXXXXXX format.',
      });
    } else if (formattedValues.length < 10) {
      setError('ein', {
        type: 'custom',
        message: 'EIN should be 9 digit',
      });
    } else {
      clearErrors('ein');
      event.target.blur();
    }
  };

  const handleDateChange = (date, event) => {
    if (date) {
      const isoDate = new Date(date).toISOString();
      const formatedDate = moment(isoDate).format('MM-DD-YYYY');
      setIncorporationDate(date);
      setValue('date_of_incorporation', formatedDate);
      clearErrors('date_of_incorporation');
    } else {
      setValue('date_of_incorporation', null);
      setError('date_of_incorporation', {
        type: 'custom',
        message: 'Date of Incorporation is required',
      });
    }
    event.target.blur();
  };

  const handleDateOfDischargeChange = (date, event) => {
    if (date) {
      const isoDate = new Date(date).toISOString();
      const formatedDate = moment(isoDate).format('MM-DD-YYYY');
      setIncorporationDate(date);
      setValue('dateOfDischarge', formatedDate);
      clearErrors('dateOfDischarge');
    } else {
      setValue('dateOfDischarge', null);
      setError('dateOfDischarge', {
        type: 'custom',
        message: 'Date of Incorporation is required',
      });
    }
    event.target.blur();
  };

  const onSubmit = (data) => {
    dispatch(setBusinessDetails(data));
    reset();
    handleChangeTab('2');
  };

  const businessCategoryWatch = watch('business_category');
  const textIdTypeWatch = watch('textIdType');
  const prior_bankruptcy = watch('prior_bankruptcy');

  return (
    <>
      <form className="gp-right" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="heading">Business Details</h3>
        <p>
          The information Priority Holdings collects about your business helps
          them meet requirements from regulators, and their{' '}
          <LinkMod to={tAndCDoc} target="_blank">
            Terms and Conditions
          </LinkMod>
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
              name="legal_name"
              placeholder=""
              {...register('legal_name', { required: true })}
            />
            {errors.legal_name && (
              <span className="error-text">{errors.legal_name?.message}</span>
            )}
          </div>
          <div className="form-input mb-4">
            <label htmlFor="" className="form-label">
              Doing business as
            </label>
            <input
              type="text"
              className="form-control mb-0"
              name="doing_business_as"
              placeholder=""
              {...register('doing_business_as', { required: true })}
            />
            <small>
              The operating name of your company, if it&nbsp;s different than
              the legal name.{' '}
            </small>
            {errors.doing_business_as && (
              <span className="error-text">
                {errors.doing_business_as?.message}
              </span>
            )}
          </div>
          <div className="form-input mb-4">
            <label htmlFor="" className="form-label">
              Business website address&nbsp;
              <span className="asterisk-red">*</span>
            </label>
            <input
              type="text"
              className="form-control mb-0"
              name="store_website"
              placeholder=""
              {...register('store_website', { required: true })}
            />
            {errors.store_website && (
              <span className="error-text">
                {errors.store_website?.message}
              </span>
            )}
          </div>
          <div className="form-input mb-4">
            <label htmlFor="" className="form-label">
              Business email address&nbsp;
              <span className="asterisk-red">*</span>
            </label>
            <input
              type="text"
              className="form-control mb-0"
              name="email"
              placeholder=""
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="error-text">{errors.email?.message}</span>
            )}
          </div>
          <div className="form-input mb-4 business_category">
            <label htmlFor="" className="form-label">
              Business category&nbsp;
              <span className="asterisk-red">*</span>
            </label>
            <Controller
              name="business_category"
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
            {errors.business_category && (
              <span className="error-text">
                {errors.business_category?.message}
              </span>
            )}
          </div>
          {/* {businessCategoryWatch?.value === 'SINGLE_MEMBER_LLC' && (
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
          )} */}
          {(businessCategoryWatch?.value === 'SINGLE_MEMBER_LLC' ||
            businessCategoryWatch?.value === 'SOLE_PROPRIETOR' ||
            businessCategoryWatch?.value === 'LLC' ||
            businessCategoryWatch?.value === 'LLP' ||
            businessCategoryWatch?.value === 'PARTNERSHIP' ||
            businessCategoryWatch?.value === 'C_CORP' ||
            businessCategoryWatch?.value === 'S_CORP' ||
            businessCategoryWatch?.value === 'GOVERNMENT_ORGANISATION' ||
            businessCategoryWatch?.value === 'NON_PROFIT' ||
            businessCategoryWatch?.value === 'TAX_EXEMPT') && (
            <div className="form-input mb-4 ein">
              <label htmlFor="" className="form-label">
                Employer Identification Number (EIN)&nbsp;
                <span className="asterisk-red">*</span>
              </label>
              <input
                type="tel"
                placeholder="12-3456789"
                name="ein"
                className="form-control mb-0"
                id=""
                {...register('ein', {
                  required: true,
                })}
                onChange={(event) => handleEINChange(event)}
              />
              {errors.ein && (
                <span className="error-text">{errors.ein?.message}</span>
              )}
            </div>
          )}

          {/* {(textIdTypeWatch?.value === 'ssn' ||
            businessCategoryWatch?.value === 'SOLE_PROPRIETOR') &&
            businessCategoryWatch?.value !== 'LLC' &&
            businessCategoryWatch?.value !== 'LLP' &&
            businessCategoryWatch?.value !== 'PARTNERSHIP' &&
            businessCategoryWatch?.value !== 'C_CORP' &&
            businessCategoryWatch?.value !== 'S_CORP' &&
            businessCategoryWatch?.value !== 'GOVERNMENT_ORGANISATION' &&
            businessCategoryWatch?.value !== 'NON_PROFIT' &&
            businessCategoryWatch?.value !== 'TAX_EXEMPT' && (
              <div className="form-input mb-4 ssn">
                <label htmlFor="" className="form-label">
                  Social Security Number (SSN)&nbsp;
                  <span className="asterisk-red">*</span>
                </label>
                <input
                  type="number"
                  name="ssn"
                  className="form-control mb-0"
                  {...register('ssn', {
                    required: true,
                  })}
                />
                {errors.ssn && (
                  <span className="error-text">{errors.ssn?.message}</span>
                )}
              </div>
            )} */}

          <div className="form-input mb-4">
            <label className="form-label">
              State of incorporation&nbsp;
              <span className="asterisk-red">*</span>
            </label>
            <Controller
              name="state_of_incorporation"
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
                  options={stateIncorporationOptions}
                />
              )}
            />
            {errors.state_of_incorporation && (
              <span className="error-text">
                {errors.state_of_incorporation?.message}
              </span>
            )}
          </div>

          <div className="form-input mb-4">
            <label htmlFor="" className="form-label">
              Date of incorporation&nbsp;
              <span className="asterisk-red">*</span>
            </label>

            <Controller
              name="date_of_incorporation"
              control={control}
              render={({ field }) => (
                <>
                  <DatePicker
                    {...field}
                    closeOnScroll
                    maxDate={new Date()}
                    customInput={<ExampleCustomInput />}
                    placeholderText="MM-DD-YYYY"
                    selected={incorporationDate}
                    onChange={(date, event) => {
                      setIncorporationDate(date);
                      handleDateChange(date, event);
                    }}
                    dateFormat="MM-dd-yyyy"
                    showPopperArrow={false}
                  />
                </>
              )}
            />

            {errors.date_of_incorporation && (
              <span className="error-text">
                {errors.date_of_incorporation?.message}
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
                  name="prior_bankruptcy"
                  id="radio-return"
                  value="yes"
                  {...register('prior_bankruptcy', {
                    required: true,
                  })}
                />
                <div className="radiobox-text">
                  <span>Yes</span>
                </div>
              </label>
              <label htmlFor="radio-return-one" className="radiobox">
                <input
                  control={control}
                  type="radio"
                  name="prior_bankruptcy"
                  id="radio-return-one"
                  value="no"
                  {...register('prior_bankruptcy', {
                    required: true,
                  })}
                />

                <div className="radiobox-text">
                  <span>No</span>
                </div>
              </label>
              {errors.prior_bankruptcy && (
                <span className="error-text">
                  {errors.prior_bankruptcy?.message}
                </span>
              )}

              {prior_bankruptcy === 'yes' && (
                <div className="radio-data-info mt-3">
                  <div className="form-input">
                    <label className="form-label">
                      Date of discharge&nbsp;
                      <span className="asterisk-red">*</span>
                    </label>

                    <Controller
                      name="dateOfDischarge"
                      control={control}
                      render={({ field }) => (
                        <>
                          <DatePicker
                            maxDate={new Date()}
                            customInput={<ExampleCustomInput />}
                            {...field}
                            closeOnScroll
                            placeholderText="MM-DD-YYYY"
                            selected={dischargeDate}
                            onChange={(date, event) => {
                              setDischargeDate(date);
                              handleDateOfDischargeChange(date, event);
                            }}
                            dateFormat="MM-dd-yyyy"
                            showPopperArrow={false}
                          />
                        </>
                      )}
                    />

                    {errors.dateOfDischarge && (
                      <span className="error-text">
                        {errors.dateOfDischarge?.message}
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
                name="average_sales_volume"
                className="form-control mb-0"
                id=""
                {...register('average_sales_volume', {
                  required: true,
                })}
              />
            </div>
            {errors.average_sales_volume && (
              <span className="error-text">
                {errors.average_sales_volume?.message}
              </span>
            )}
          </div>
          <div className="form-input mb-4">
            <label htmlFor="" className="form-label">
              Estimate average wholesale price on ShopDot&nbsp;
              <span className="asterisk-red">*</span>
            </label>
            <div className="wp-right">
              <span className="doller-lbl">$</span>
              <input
                type="number"
                name="average_purchase"
                className="form-control mb-0"
                id=""
                {...register('average_purchase', {
                  required: true,
                })}
              />
            </div>
            {errors.average_purchase && (
              <span className="error-text">
                {errors.average_purchase?.message}
              </span>
            )}
          </div>
          <div className="form-input mb-4">
            <label htmlFor="" className="form-label">
              Average delivery time&nbsp;
              <span className="asterisk-red">*</span>
            </label>
            <Controller
              name="average_delivery_time"
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
            {errors.average_delivery_time && (
              <span className="error-text">
                {errors.average_delivery_time?.message}
              </span>
            )}
          </div>
          <div className="form-input mb-4">
            <label htmlFor="" className="form-label">
              Merchant category code&nbsp;
              <span className="asterisk-red">*</span>
            </label>

            <Controller
              name="merchant_category_code"
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
            {errors.merchant_category_code && (
              <span className="error-text">
                {errors.merchant_category_code?.message}
              </span>
            )}
          </div>
          <div className="form-input mb-4">
            <label htmlFor="" className="form-label">
              Sales method&nbsp;
              <span className="asterisk-red">*</span>
            </label>
            <Controller
              name="sales_method"
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
            {errors.sales_method && (
              <span className="error-text">{errors.sales_method?.message}</span>
            )}
          </div>
          <div className="form-input mb-4">
            <label htmlFor="" className="form-label">
              Product description&nbsp;
              <span className="asterisk-red">*</span>
            </label>
            <textarea
              name="product_description"
              className="textarea-item"
              id="message"
              rows="3"
              cols="5"
              required=""
              placeholder=""
              {...register('product_description', {
                required: true,
              })}
            ></textarea>
            {errors.product_description && (
              <span className="error-text">
                {errors.product_description?.message}
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
  isEdited: PropTypes.String,
  setStartingTab: PropTypes.func,
  handleChangeTab: PropTypes.func,
  setIsEdited: PropTypes.func,
};
