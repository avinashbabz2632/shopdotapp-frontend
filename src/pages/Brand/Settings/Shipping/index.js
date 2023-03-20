import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Info from '../../images/icons/info.svg';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { shippingValidationSchema } from '../Paid/ValidationSchema';
import Select from 'react-select';
import { selectShippingData } from '../../../../redux/Brand/Shipping/shippingPaidSelector';
import { selectUserDetails } from '../../../../redux/user/userSelector';
import {
  getBrandShippingAction,
  updateShipping,
} from '../../../../actions/brandActions';
import { selectBrandProfileDetails } from '../../../../redux/Brand/Profile/brandProfileSelectors';
import { ToastContainer } from 'react-toastify';

const stateOption = [
  { value: 'manitoba', label: 'Manitoba' },
  { value: 'alberta', label: 'Alberta' },
];

const daysOption = [
  { value: '3-7 days', label: '3-7 days' },
  { value: '7-14 days', label: '7-14 days' },
  { value: '14-21 days', label: '14-21 days' },
  { value: '>21 days', label: '>21 days' },
];
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

const defaultValues = {
  statelist: stateOption[0],
};

export default function Shipping() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(shippingValidationSchema),
    defaultValues,
  });

  const dispatch = useDispatch();
  const shippingDetails = useSelector(selectShippingData);
  const userDetails = useSelector(selectUserDetails);
  const brandProfileDetails = useSelector(selectBrandProfileDetails);

  useEffect(() => {
    dispatch(getBrandShippingAction(brandProfileDetails?.brand_profile?.id));
    initalCall();
  }, []);

  const initalCall = () => {
    if (shippingDetails?.street_address_1) {
      reset({
        address1: shippingDetails.street_address_1,
        address2: shippingDetails.street_address_2,
        country: shippingDetails.country,
        state: shippingDetails.state,
        city: shippingDetails.city,
        zip: shippingDetails.zip,
        shippingfee: shippingDetails.ShippingRate.shipping_cost,
        incrementalfee: shippingDetails.ShippingRate.incremental_fee,
      });
    }
  };

  const onSubmit = (data) => {
    dispatch(
      updateShipping({
        brand_id: brandProfileDetails?.brand_profile?.id,
        user_id: userDetails.id,
        street_address_1: data.address1,
        street_address_2: data.address2,
        country: data.country,
        state: 'montana',
        city: data.city,
        zip: data.zip,
        shipping_cost: parseFloat(data.shippingfee),
        incremental_fee: parseFloat(data.incrementalfee),
        shipping_time_id: 1,
      })
    );
    reset();
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
                          <input
                            type="text"
                            className="form-control mb-0"
                            name="country"
                            placeholder=""
                            {...register('country', {
                              required: true,
                            })}
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
                            name="statelist"
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
                                options={stateOption}
                              />
                            )}
                          />
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
                          <input
                            type="number"
                            className="form-control mb-0"
                            name="shippingfee"
                            {...register('shippingfee', { required: true })}
                          />
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
                          <input
                            type="number"
                            className="form-control mb-0"
                            name="incrementalfee"
                            {...register('incrementalfee', { required: true })}
                          />
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
                                options={daysOption}
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
