import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Info from '../../images/icons/info.svg';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { shippingValidationSchema } from '../Paid/ValidationSchema';
import Select from 'react-select';
import {
  selectShippingData,
  shippingTime,
} from '../../../../redux/Brand/Shipping/shippingPaidSelector';
import { selectUserDetails } from '../../../../redux/user/userSelector';
import {
  getBrandShippingAction,
  getBrandShippingTime,
  updateShipping,
} from '../../../../actions/brandActions';
import {
  getCountriesAction,
  getStatesAction,
} from '../../../../actions/generalActions';
import { selectBrandProfileDetails } from '../../../../redux/Brand/Profile/brandProfileSelectors';
import { selectCountries } from '../../../../redux/General/Countries/getCountriesSelector';
import { selectStates } from '../../../../redux/General/States/getStatesSelector';
import { ToastContainer } from 'react-toastify';
import { map } from 'lodash';

const categoryStyle = {
  control: (styles) => {
    return {
      ...styles,
      marginTop: '6px',
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

export default function Shipping() {
  const countriesOption = useSelector(selectCountries);
  const transformCountriesOption = countriesOption?.map((el) => {
    return { value: el.id, label: el.name };
  });
  const statesOption = useSelector(selectStates);
  const transformStatesOption = statesOption?.map((el) => {
    return { label: el.name, value: el.country_id };
  });

  const defaultValues = {
    // statelist: transformStatesOption ? transformStatesOption[0] : null,
    // countrylist: transformCountriesOption ? transformCountriesOption[0] : null,
    shippingfee: '0.00',
    incrementalfee: '0.00',
  };

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(shippingValidationSchema),
    defaultValues,
  });

  const watchCountry = useWatch({ name: 'country', control: control });

  const dispatch = useDispatch();
  const shippingDetailsRes = useSelector(selectShippingData);
  const shippingTimes = useSelector(shippingTime);
  const userDetails = useSelector(selectUserDetails);
  const brandProfileDetails = useSelector(selectBrandProfileDetails);

  const formatShippingTime = () => {
    if (shippingTimes && shippingTimes.length > 0) {
      return shippingTimes.map((item) => ({
        value: item.id,
        label: item.name,
      }));
    } else {
      return [{ value: '', label: '' }];
    }
  };

  useEffect(() => {
    dispatch(getBrandShippingAction(brandProfileDetails?.brand_profile?.id));
  }, []);

  useEffect(() => {
    if (watchCountry && watchCountry.value) {
      dispatch(getStatesAction(watchCountry?.value));
    }
  }, [watchCountry]);

  const initalCall = () => {
    if (shippingDetailsRes?.shippingDetails?.brand_details && shippingTimes) {
      const shippingDetails =
        shippingDetailsRes?.shippingDetails?.brand_details?.shipping_rate;
      if (shippingTimes && shippingTimes.length) {
        // map(shippingTimes,(ship)=>{
        //   if(){
        //   }
        // })
      }
      reset({
        address1: shippingDetails?.shipping_address?.street_address_1,
        address2: shippingDetails?.shipping_address?.street_address_2,
        country: transformCountriesOption
          ? transformCountriesOption?.find((country) => {
              return (
                shippingDetails?.shipping_address?.country === country.label
              );
            })
          : '',
        state: transformStatesOption
          ? transformStatesOption?.find((state) => {
              return shippingDetails?.shipping_address?.state === state.label;
            })
          : '',
        city: shippingDetails?.shipping_address?.city,
        zip: shippingDetails?.shipping_address?.zip,
        shippingfee: shippingDetails?.shipping_cost,
        incrementalfee: shippingDetails?.incremental_fee,
        daystofulfill: shippingDetails?.shipping_address?.shipping_time_id
          ? formatShippingTime()?.find(
              (item) =>
                item.value ===
                shippingDetails?.shipping_address?.shipping_time_id
            )
          : false,
      });
    }
  };

  useEffect(() => {
    initalCall();
  }, [shippingDetailsRes, shippingTimes]);

  const onSubmit = (data) => {
    dispatch(
      updateShipping(
        {
          brand_id: brandProfileDetails?.brand_profile?.id,
          user_id: userDetails.id,
          street_address_1: data.address1,
          street_address_2: data.address2 ? data.address2 : null,
          country: data.country.label,
          state: data.state.label,
          city: data.city,
          zip: data.zip,
          shipping_cost: parseFloat(data.shippingfee).toFixed(2),
          incremental_fee: parseFloat(data.incrementalfee).toFixed(2),
          shipping_time_id: data.daystofulfill.value,
        },
        shippingDetailsRes?.shippingDetails?.id
      )
    );
  };

  const formatCurrency = (value) => {
    const containsDot = value.includes('.');
    let result;
    if (containsDot) {
      const splits = value.split('.');
      const integerValue = `${splits[0]}`;
      let decimalValue;
      if (splits[1].length >= 2) {
        decimalValue = splits[1].substr(0, 2);
      } else {
        decimalValue = `${splits[1]}0`;
      }
      result = `${integerValue}.${decimalValue}`;
    } else {
      const _result = value.substr(0, 2);
      result = `${_result}.00`;
    }
    return result;
  };

  return (
    <div className="pc_tabs-content tabs_body">
      <div className="tab active" data-target="Shipping">
        <div className="products_content">
          <div className="products_head mp-head">
            <div className="products_head-content">
              <div className="title">
                <h1>Shipping Information</h1>
              </div>
            </div>
          </div>
          <div className="products_body ">
            <div className="content_area">
              <div id="shipping">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="shipping_info">
                    <h2>Shipping Location</h2>
                    <div className="form-area">
                      <div className="form-input mb-4">
                        <label className="form-label">
                          Address 1&nbsp;
                          <span className="asterisk-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control mb-0"
                          id=""
                          name="address1"
                          placeholder=""
                          {...register('address1', {
                            required: true,
                          })}
                        />
                        {errors.address1 && (
                          <span className="error-text">
                            {errors.address1?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-input mb-4">
                        <label className="form-label">Address 2</label>
                        <input
                          type="text"
                          className="form-control "
                          name="address2"
                          {...register('address2', {
                            required: false,
                          })}
                        />
                      </div>
                      <div className="category-form-input">
                        <div className="form-input">
                          <label className="form-label">
                            Country &nbsp;
                            <span className="asterisk-red">*</span>
                          </label>
                          <Controller
                            name="country"
                            control={control}
                            render={({ field }) => (
                              <Select
                                {...field}
                                className="basic-single"
                                classNamePrefix="select"
                                menuPortalTarget={document.body}
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
                          {errors.country && (
                            <span className="error-text">
                              {errors.country?.message}
                            </span>
                          )}
                        </div>
                        <div className="form-input">
                          <label className="form-label">
                            State <span className="asterisk-red">*</span>
                          </label>
                          <Controller
                            name="state"
                            control={control}
                            render={({ field }) => (
                              <Select
                                {...field}
                                className="basic-single"
                                classNamePrefix="select"
                                menuPortalTarget={document.body}
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
                          {errors.state && (
                            <span className="error-text">
                              {errors.state?.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="category-form-input mt-4">
                        <div className="form-input">
                          <label className="form-label">
                            City&nbsp;
                            <span className="asterisk-red">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control mb-0"
                            name="city"
                            placeholder=""
                            {...register('city', {
                              required: true,
                            })}
                          />
                          {errors.city && (
                            <span className="error-text">
                              {errors.city?.message}
                            </span>
                          )}
                        </div>
                        <div className="form-input">
                          <label className="form-label">
                            ZIP&nbsp;
                            <span className="asterisk-red">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-control mb-0"
                            name="zip"
                            placeholder=""
                            {...register('zip', {
                              required: true,
                            })}
                          />
                          {errors.zip && (
                            <span className="error-text">
                              {errors.zip?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="default_shipping_info">
                    <h2>Flat Shipping Rate</h2>

                    <div className="form-area">
                      <div className="form-input preferences-item">
                        <p>
                          Flat shipping rate is applied on each order from a
                          retailer.
                        </p>
                      </div>

                      <div className="category-form-input tooltip-input mt-4">
                        <div className="form-input">
                          <label className="form-label">
                            Shipping fee <span className="asterisk-red">*</span>
                            <div className="tooltip">
                              <div className="tooltip-icon">
                                <img src={Info} className="icon" />
                              </div>
                              <div className="tooltip_text">
                                <p>
                                  This is the flat shipping fee to ship the
                                  product.
                                </p>
                              </div>
                            </div>
                          </label>
                          <div className="input-wrapper">
                            <div className="prefix">$</div>
                            <input
                              className="currency-input mb-0"
                              name="shippingfee"
                              {...register('shippingfee', {
                                required: true,
                                onBlur: (e) => {
                                  const value = e.target.value;
                                  if (value) {
                                    const result = formatCurrency(value);
                                    setValue('shippingfee', result);
                                  } else {
                                    setValue('shippingfee', `0.00`);
                                  }
                                },
                              })}
                            />
                          </div>
                          {errors.shippingfee && (
                            <span className="error-text">
                              {errors.shippingfee?.message}
                            </span>
                          )}
                        </div>

                        <div className="form-input">
                          <label className="form-label">
                            Incremental fee{' '}
                            <span className="asterisk-red">*</span>
                            <div className="tooltip">
                              <div className="tooltip-icon">
                                <img src={Info} className="icon" />
                              </div>
                              <div className="tooltip_text">
                                <p>
                                  This is the cost for every additional item of
                                  the same product in an order. For example, if
                                  the shipping cost for Product A is $5 and the
                                  incremental fee for Product A is $2 and there
                                  are 2 units of the same product purchased in
                                  the same order, the shipping fee will be $7.
                                </p>
                              </div>
                            </div>
                          </label>
                          <div className="input-wrapper">
                            <div className="prefix">$</div>
                            <input
                              className="currency-input mb-0"
                              name="incrementalfee"
                              {...register('incrementalfee', {
                                required: true,
                                onBlur: (e) => {
                                  const value = e.target.value;
                                  if (value) {
                                    const result = formatCurrency(value);
                                    setValue('incrementalfee', result);
                                  } else {
                                    setValue('incrementalfee', `0.00`);
                                  }
                                },
                              })}
                            />
                          </div>

                          {errors.incrementalfee && (
                            <span className="error-text">
                              {errors.incrementalfee?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="default_shipping_info">
                    <h2>Default Days to Fulfill</h2>
                    <div className="form-area">
                      <div className="form-input preferences-item">
                        <p>
                          You can use this section to set default days to
                          fulfill for your products. You will be able to modify
                          this information on a product level.
                        </p>
                      </div>
                      <div className="category-form-input tooltip-input mt-4">
                        <div className="form-input">
                          <label className="form-label">
                            Default Days to Fulfill
                            <span className="asterisk-red">*</span>
                            <div className="tooltip">
                              <div className="tooltip-icon">
                                <img src={Info} className="icon" />
                              </div>
                              <div className="tooltip_text">
                                <p>
                                  Number of business days to process and ship
                                  product.
                                </p>
                              </div>
                            </div>
                          </label>
                          <Controller
                            name="daystofulfill"
                            control={control}
                            render={({ field }) => (
                              <Select
                                {...field}
                                className="basic-single"
                                classNamePrefix="select"
                                placeholder="Days to Fulfill"
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
                                options={formatShippingTime()}
                              />
                            )}
                          />
                          {errors.daystofulfill && (
                            <span className="error-text">
                              {errors.daystofulfill?.message}
                            </span>
                          )}
                          {/* <Controller
                                                    name="daystofulfill"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Select
                                                            {...field}
                                                            className="basic-single"
                                                            classNamePrefix="select"
                                                            styles={
                                                                categoryStyle
                                                            }
                                                            placeholder="Days to Fulfill"
                                                            components={{
                                                                IndicatorSeparator:
                                                                    () => null,
                                                            }}
                                                            theme={(theme) => ({
                                                                ...theme,
                                                                colors: {
                                                                    ...theme.colors,
                                                                    primary25:
                                                                        '#fbf5f0',
                                                                    primary:
                                                                        '#bd6f34',
                                                                },
                                                            })}
                                                            options={daysOption}
                                                        />
                                                    )}
                                                />
                                                {errors.daystofulfill && (
                                                    <span className="error-text">
                                                        {
                                                            errors.daystofulfill
                                                                ?.message
                                                        }
                                                    </span>
                                                )} */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-area">
                    <div className="form-input form-submit mt-4">
                      <button
                        // disabled={shippingDetails.shippingLoading}
                        onClick={() => reset()}
                        className="button button-grey cancel"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        // disabled={shippingDetails.shippingLoading}
                        className="button"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
