import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Select from 'react-select';
import Info from '../../images/icons/info.svg';
import { useDispatch, useSelector } from 'react-redux';
import { updatePreferences } from '../../../../actions/brandActions';
import { selectUserDetails } from '../../../../redux/user/userSelector';
import { ToastContainer } from 'react-toastify';

export const PreferencesValidationSchema = yup.object().shape({
  wholesalePercentage: yup
    .number()
    .typeError('Wholesale Price Percentage is required.')
    .required('Wholesale Price Percentage is required.')
    .min(0, 'Minimum atleast 0')
    .max(100, 'Allowed maximum is 100'),

  inventoryPercentage: yup
    .number()
    .typeError('Inventory Buffer Percentage is required.')
    .required('Inventory Buffer Percentage is required.')
    .min(0, 'Minimum atleast 0')
    .max(100, 'Allowed maximum is 100'),
  retunRefundPolicy: yup
    .string()
    .nullable()
    .required('Prior Bankruptcy is required.'),
  requirementsForRetailers: yup
    .string()
    .nullable()
    .required('Requirements for retailers is required.'),
});

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
const options = [
  {
    value: 'Allow for flexible retail pricing',
    label: 'Allow for flexible retail pricing',
  },
  {
    value: 'Enforce retail price',
    label: 'Enforce retail price',
  },
];

export default function BrandPreference() {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PreferencesValidationSchema),
    defaultValues: {
      wholesalePercentage: 50,
      inventoryPercentage: 70,
      returnPricing: options[0],
      retunRefundPolicy: 'yes',
      connectBrand: null,
    },
  });
  const dispatch = useDispatch();
  const useDetails = useSelector(selectUserDetails);
  const wholesalePercentage = watch('wholesalePercentage');
  const inventoryPercentage = watch('inventoryPercentage');

  const onSubmit = (data) => {
    const formData = {
      brand_id: useDetails.id,
      wholesalePricing: data.wholesalePercentage,
      retailerPricing: data.inventoryPercentage,
      inventoryBuffer: data.inventoryPercentage,
      returnPolicy: data.returnPricing.value,
      connectBrand: data.requirementsForRetailers,
    };
    if (formData.connectBrand == '') {
      delete formData.connectBrand;
    }
    dispatch(updatePreferences(formData));
  };

  return (
    <div className="pc_tabs-content tabs_body">
      <div className="products_content">
        <div className="products_head mp-head">
          <div className="products_head-content">
            <div className="title">
              <h1 className="m-0">Preferences</h1>
            </div>
          </div>
        </div>
        <div className="products_body">
          <div className="content_area">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div id="preferences">
                <div className="preferences_info">
                  <h2>
                    <span>
                      Wholesale Pricing <span className="asterisk-red">*</span>
                    </span>
                    <div className="tooltip">
                      <div className="tooltip-icon">
                        <img src={Info} className="icon" />
                      </div>
                      <div className="tooltip_text">
                        <p className="mb-0">
                          When products are imported into ShopDot, we will
                          calculate the wholesale pricing (WSP) by using this
                          percentage of the MSRP. You can still make edits to
                          WSP on the product variant level. Modifying this
                          percentage will not have an effect on the WSP for
                          products that have already been imported into ShopDot.
                        </p>
                      </div>
                    </div>
                  </h2>
                  <div className="form-area form-area-full">
                    <div className="form-input preferences-item">
                      <h4>
                        Set your wholesale price based on a percentage of the
                        retail price.
                      </h4>
                    </div>
                    <div className="form-input preferences-slider">
                      <div className="wp-item mt-5">
                        <div className="wp-left">
                          Wholesale Price Percentage
                        </div>
                        <div className="wp-right">
                          <span className="percentage-lbl">%</span>
                          <input
                            type="number"
                            name="wholesalePercentage"
                            className="slider"
                            {...register('wholesalePercentage')}
                          />
                        </div>
                        {errors?.wholesalePercentage && (
                          <span className="error-text">
                            {errors?.wholesalePercentage?.message}
                          </span>
                        )}
                      </div>
                      <div className="wp-item srp">
                        <div className="wp-left ">
                          <span className="samle-retail-price">
                            Sample Retail Price
                          </span>
                          <label>
                            <span>$</span>100
                          </label>
                        </div>
                        <div className="wp-right">
                          <p>
                            WSP is the wholesale price that retailers will pay
                            you for the product.
                          </p>
                          <label>
                            <span>$</span>
                            <span id="wpValue">{wholesalePercentage}</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="preferences_info mt-4">
                <h2>
                  <span>
                    Retail Pricing <span className="asterisk-red">*</span>{' '}
                  </span>
                </h2>
                <div className="form-area">
                  <div className="form-input preferences-item">
                    <div className="retail-flex-item">
                      <label>Retail Pricing Flexibility</label>
                      <div className="tooltip">
                        <div className="tooltip-icon">
                          <img src={Info} className="icon" />
                        </div>
                        <div className="tooltip_text">
                          <p className="mb-0">
                            This information will be displayed on your brand
                            profile.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Controller
                      name="returnPricing"
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
                          options={options}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="preferences_info mt-4">
                <h2>
                  <span>
                    Inventory Buffer <span className="asterisk-red">*</span>{' '}
                  </span>
                </h2>
                <div className="form-area form-area-full">
                  <div className="form-input preferences-item">
                    <h4>
                      Set a percentage of the inventory in your eCommerce store
                      that will be published and sold in ShopDot.
                    </h4>
                  </div>
                  <div className="form-input preferences-slider">
                    <div className="wp-item mt-5">
                      <div className="wp-left">Inventory Buffer Percentage</div>
                      <div className="wp-right">
                        <span className="percentage-lbl">%</span>
                        <input
                          type="number"
                          name="inventoryPercentage"
                          className="slider"
                          {...register('inventoryPercentage')}
                        />
                      </div>
                      {errors?.inventoryPercentage && (
                        <span className="error-text">
                          {errors?.inventoryPercentage?.message}
                        </span>
                      )}
                    </div>
                    <div className="wp-item srp">
                      <div className="wp-left ">
                        <span className="samle-retail-price">
                          Sample Shopify Inventory
                        </span>
                        <label>100</label>
                      </div>
                      <div className="wp-right">
                        <p>
                          ShopDot Inventory is the inventory available to your
                          retailers in ShopDot.
                        </p>
                        <label id="ibValue">{inventoryPercentage}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="preferences_info mt-4">
                <h2>
                  <span>
                    Return and Refund Policy{' '}
                    <span className="asterisk-red">*</span>
                  </span>
                </h2>
                <div className="form-area form-area-full">
                  <div className="form-input return_select-item">
                    <h4>
                      <span>
                        You can use this section to define the standard return
                        and refund policy for your ShopDot orders.
                      </span>
                      <div className="tooltip">
                        <div className="tooltip-icon">
                          <img src={Info} className="icon" />
                        </div>
                        <div className="tooltip_text">
                          <p className="mb-0">
                            This return and refund policy is universal and will
                            apply to all of your products.
                          </p>
                        </div>
                      </div>
                    </h4>
                    <div className="pe_radio mt-2">
                      <label className="radiobox">
                        <input
                          type="radio"
                          control={control}
                          name="retunRefundPolicy"
                          value="yes"
                          {...register('retunRefundPolicy', {
                            required: true,
                          })}
                        />
                        <div className="radiobox-text">
                          <span> No returns or refunds</span>
                        </div>
                      </label>
                      <label className="radiobox">
                        <input
                          type="radio"
                          control={control}
                          name="retunRefundPolicy"
                          value="no"
                          {...register('retunRefundPolicy', {
                            required: true,
                          })}
                        />

                        <div className="radiobox-text">
                          <span>
                            Returns and refunds are accepted on a case-by-case
                            basis
                          </span>
                          <div className="tooltip">
                            <div className="tooltip-icon">
                              <img src={Info} className="icon" />
                            </div>
                            <div className="tooltip_text">
                              <p className="mb-0">
                                Retailers will have to message you to see if an
                                order is eligible for a return or refund.
                              </p>
                            </div>
                          </div>
                        </div>
                      </label>
                      {errors?.retunRefundPolicy && (
                        <span className="error-text">
                          {errors?.retunRefundPolicy?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="preferences_info mt-4">
                <h2 className="box-shadow-none">
                  <span>
                    Requirements for retailers who want to connect with your
                    brand{' '}
                  </span>
                </h2>
                <div className="form-area form-area-full">
                  <div className="form-input">
                    <textarea
                      name="requirementsForRetailers"
                      rows="8"
                      className="text-area"
                      placeholder=""
                      {...register('requirementsForRetailers', {
                        required: false,
                      })}
                    ></textarea>
                  </div>
                  {errors?.requirementsForRetailers && (
                    <span className="error-text">
                      {errors?.requirementsForRetailers?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-area">
                <div className="form-input form-submit">
                  <button
                    className="button button-grey cancel"
                    onClick={() => reset()}
                  >
                    Cancel
                  </button>
                  <button className="button" type="submit">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
