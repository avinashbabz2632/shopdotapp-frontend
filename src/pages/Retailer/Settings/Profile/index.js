import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';
import { retailerProfileValidationSchema } from '../ValidationSchema';
import EditIcon from '../../../Retailer/images//icons/icon-edit.svg';
import Brandlogo from '../../../Retailer/images/profile-avatar.jpg';
import '../../Style/retail.dev.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrandValues } from '../../../../redux/Brand/Profile/brandProfileSelectors';
import { getPlatformValuesAction } from '../../../../actions/brandActions';
import { cloneDeep, remove } from 'lodash';

const retailerCategoryList = [
  {
    label: 'Apparel Boutique',
    value: 0,
  },
  {
    label: 'Bakery or Coffee Shop',
    value: 1,
  },
  {
    label: 'Book Store',
    value: 2,
  },
  {
    label: 'Electronics',
    value: 3,
  },
  {
    label: 'Fitness or Yoga Studio',
    value: 4,
  },
  {
    label: 'Florist or Garden Store',
    value: 5,
  },
  {
    label: 'Gift Store',
    value: 6,
  },
  {
    label: 'Kids or Toy Store',
    value: 7,
  },
  {
    label: 'Medical Office',
    value: 8,
  },
  {
    label: 'Musical Instruments',
    value: 9,
  },
  {
    label: 'Pharmacy',
    value: 10,
  },
  {
    label: 'Pet Store',
    value: 11,
  },
  {
    label: 'Shoe Store',
    value: 12,
  },
  {
    label: 'Spa or Salon',
    value: 13,
  },
  {
    label: 'Sporting and Outdoors',
    value: 14,
  },
];

const countryOptions = [
  {
    value: 'usa',
    label: 'United States',
  },
  { value: 'canada', label: 'Canada' },
];

const stateOptions = [
  {
    value: 'California',
    label: 'California',
  },
  { value: 'Texas', label: 'Texas' },
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
      marginTop: '5px',
      marginRight: '1px',
    };
  },
};

export default function RetailerProfile() {
  const [image, setImage] = useState(Brandlogo);
  const [file, setFile] = useState();
  const [selectedValues, setSelectValues] = useState([]);
  const dispatch = useDispatch();

  const retailerValueList = useSelector(selectBrandValues);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPlatformValuesAction());
      //   dispatch(getRetailerProfileAction(useDetails.id));
    }, 350);
  }, []);

  const encodeImageFileAsURL = (element) => {
    const fileData = element;
    const reader = new FileReader();
    reader.onloadend = function () {
      setFile(reader.result);
    };
    reader.readAsDataURL(fileData);
  };
  const onImgUpload = (e) => {
    const res = encodeImageFileAsURL(e.target.files[0]);
    setFile(res);
  };

  // const handleChange = (e) => {
  //     console.log(e.target.files);
  //     setFile(URL.createObjectURL(e.target.files[0]));
  // };

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(retailerProfileValidationSchema),
  });

  const onSubmit = (data) => {
    reset();
  };

  const handleCheckbox = (value, valueType) => {
    const valueParse = JSON.parse(value);
    const currentArray = selectedValues;

    let updateArray = cloneDeep(currentArray);
    const isSelected = updateArray.includes(valueParse);
    if (isSelected) {
      remove(updateArray, (r, key) => {
        return r === valueParse;
      });
    } else {
      updateArray.push(valueParse);
    }

    setSelectValues(updateArray);
  };

  return (
    <div className="pc_tabs-content tabs_body">
      <div className="tab active" data-target="Account">
        <div className="products_content">
          <div className="products_head mp-head head-with-subtitle">
            <div className="products_head-content">
              <div className="title">
                <h1>Retailer Profile</h1>
              </div>
            </div>
            <p>
              Information entered on this page will be visible to retailers
              within ShopDot.
            </p>
          </div>
          <div className="products_body">
            <div className="content_area">
              <div id="account">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="account_info">
                    <h2>Company Information </h2>
                    <div className="form-area">
                      <div className="form-input tooltip-input mb-4">
                        <label className="form-label">
                          Company name <span className="asterisk-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control mb-0"
                          name="company_name"
                          id=""
                          placeholder=""
                          {...register('company_name', {
                            required: true,
                          })}
                        />
                        {errors?.company_name && (
                          <span className="error-text">
                            {errors?.company_name?.message}
                          </span>
                        )}
                      </div>

                      <div className="form-input tooltip-input mb-4">
                        <label className="form-label">
                          Contact email <span className="asterisk-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control mb-0"
                          name="company_email_address"
                          id=""
                          placeholder=""
                          {...register('company_email_address', {
                            required: true,
                          })}
                        />
                        {errors?.company_email_address && (
                          <span className="error-text">
                            {errors?.company_email_address?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-input tooltip-input mb-4">
                        <label className="form-label">
                          Contact phone number{' '}
                          <span className="asterisk-red">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control mb-0"
                          id=""
                          name="company_phone_number"
                          placeholder=""
                          {...register('company_phone_number', {
                            required: true,
                          })}
                        />

                        {errors?.company_phone_number && (
                          <span className="error-text">
                            {errors?.company_phone_number?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="shipping_info">
                    <h2>Shipping Address</h2>
                    <div className="form-area">
                      <div className="form-input mb-4">
                        <label htmlFor="" className="form-label">
                          Address line 1 <span className="asterisk-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control mb-0"
                          name="store_mailing_address"
                          placeholder=""
                          {...register('store_mailing_address', {
                            required: true,
                          })}
                        />
                        {errors.store_mailing_address && (
                          <span className="error-text">
                            {errors.store_mailing_address?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-input mb-4">
                        <label htmlFor="" className="form-label">
                          Address line 2
                        </label>
                        <input
                          type="text"
                          className="form-control mb-0"
                          name="store_mailing_address_2"
                          placeholder=""
                          {...register('store_mailing_address_2', {
                            required: false,
                          })}
                        />
                        {errors.store_mailing_address_2 && (
                          <span className="error-text">
                            {errors.store_mailing_address_2?.message}
                          </span>
                        )}
                      </div>
                      <div className="category-form-input">
                        <div className="form-input mb-4">
                          <label className="form-label">
                            Country <span className="asterisk-red">*</span>
                          </label>
                          <Controller
                            name="store_country"
                            control={control}
                            required
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
                                options={countryOptions}
                              />
                            )}
                          />
                          {errors.store_country && (
                            <span className="error-text">
                              {errors.store_country?.message}
                            </span>
                          )}
                        </div>
                        <div className="form-input mb-2">
                          <label className="form-label">
                            State <span className="asterisk-red">*</span>
                          </label>
                          <Controller
                            name="store_state"
                            control={control}
                            required
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
                                options={stateOptions}
                              />
                            )}
                          />
                          {errors.store_state && (
                            <span className="error-text">
                              {errors.store_state?.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="category-form-input">
                        <div className="form-input mb-2">
                          <label htmlFor="" className="form-label">
                            City <span className="asterisk-red">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control mb-2 mt-0"
                            name="store_city"
                            {...register('store_city', {
                              required: true,
                            })}
                          />
                          {errors.store_city && (
                            <span className="error-text">
                              {errors.store_city?.message}
                            </span>
                          )}
                        </div>
                        <div className="form-input mb-2">
                          <label htmlFor="" className="form-label">
                            ZIP <span className="asterisk-red">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control mb-2 mt-0"
                            name="zipcode"
                            {...register('zipcode', { required: true })}
                          />
                          {errors.zipcode && (
                            <span className="error-text">
                              {errors.zipcode?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my_store">
                    <h2>Retailer Information </h2>
                    <div className="form-area">
                      <div className="form-input form-upload-image">
                        <a href="#" className="upload-logo">
                          <label>
                            <input
                              className="d-none"
                              id=""
                              type="file"
                              onChange={(e) =>
                                setImage(URL.createObjectURL(e.target.files[0]))
                              }
                            />
                            <img src={EditIcon} className="icon" />
                            <div className="profile-user-avtar">
                              <img src={image} />
                            </div>
                          </label>
                        </a>
                        <label>
                          Upload logo
                          <span className="asterisk-red"> *</span>
                          <a
                            href="#"
                            className="remove-logo"
                            onClick={() => setImage(Brandlogo)}
                          >
                            Remove logo{' '}
                          </a>
                          <span className="logo-instruction">
                            Format Type:
                            <b> JPEG or PNG</b>. Maximum size is <b>5MB</b>, No
                            less than <b>512 x 512</b> pixels and no more than{' '}
                            <b>1024 x 1024</b> pixels.
                          </span>
                        </label>
                      </div>
                      <div className="form-input mb-4">
                        <label className="form-label">
                          Retailer name <span className="asterisk-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control mb-0"
                          name="store_name"
                          id=""
                          placeholder=""
                          {...register('store_name', {
                            required: true,
                          })}
                        />
                        {errors?.store_name && (
                          <span className="error-text">
                            {errors?.store_name?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-input tooltip-input mb-4">
                        <label className="form-label">
                          Retailer website
                          <span className="asterisk-red">*</span>
                          <div className="tooltip">
                            <div className="tooltip-icon">
                              <svg className="icon"></svg>
                            </div>
                            <div className="tooltip_text">
                              <p>
                                This is your store that is connected with
                                ShopDot. You can connect a different store in
                                the Integration section.
                              </p>
                            </div>
                          </div>
                        </label>
                        <input
                          type="text"
                          className="form-control mb-0"
                          name="store_website"
                          placeholder="janebeautyparlor.com"
                          {...register('store_website', {
                            required: true,
                          })}
                        />
                        {errors?.store_website && (
                          <span className="error-text">
                            {errors?.store_website?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-input mb-4">
                        <label className="form-label">
                          Retailer category{' '}
                          <span className="asterisk-red">*</span>
                        </label>
                        <Controller
                          name="retailerCategory"
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
                              options={retailerCategoryList}
                            />
                          )}
                        />
                        {errors.retailerCategory && (
                          <span className="error-text">
                            {errors.retailerCategory?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-input form-checkbox mb-4">
                        <label className="form-label">Retailer values</label>
                        <div className="select-checkbox third-col">
                          <div className="select-checkbox">
                            {retailerValueList && retailerValueList.length ? (
                              retailerValueList.map((val, i) => {
                                return (
                                  <div className="check-item" key={i}>
                                    <label className="checkbox">
                                      <input
                                        type="checkbox"
                                        name={'retailer_values'}
                                        checked={selectedValues.includes(
                                          val.id
                                        )}
                                        value={val.id}
                                        {...register('retailer_values', {
                                          required: false,
                                          onChange: (e) => {
                                            handleCheckbox(
                                              e.target.value,
                                              'value'
                                            );
                                          },
                                        })}
                                      />
                                      <div className="checkbox-text">
                                        <span>{val.name}</span>
                                      </div>
                                    </label>
                                  </div>
                                );
                              })
                            ) : (
                              <div />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="form-input form-story mb-4">
                        <label className="form-label">
                          About the retailer{' '}
                          <span className="asterisk-red">*</span>
                        </label>
                        <textarea
                          rows="8"
                          className="text-area"
                          name="retailer_story"
                          placeholder=""
                          {...register('retailer_story', {
                            required: true,
                          })}
                        ></textarea>
                        {errors?.retailer_story && (
                          <span className="error-text">
                            {errors?.retailer_story?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-input mb-4">
                        <label className="form-label">
                          Add a Youtube or Vimeo video link
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="link"
                          {...register('link', {
                            required: false,
                          })}
                        />
                        {errors.link && (
                          <span className="error-text">
                            {errors.link?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-input form-upload mb-4">
                        <label className="form-label">
                          Upload a photo of your store
                        </label>
                        <div className="uploadOuter">
                          <span className="dragBox">
                            Drag and drop file here
                            <input
                              type="file"
                              name="storeImage"
                              onChange={(e) => onImgUpload(e)}
                            />
                            <span className="dragbox-smallnote">
                              Format Type: <b>JPEG or PNG</b>. Maximum size is{' '}
                              <b>5MB</b>.
                            </span>
                          </span>
                        </div>
                        <div className="preview">
                          <img src={file} className="preview-img" />
                        </div>
                      </div>

                      <div className="form-input form-submit">
                        <button
                          onClick={() => reset()}
                          className="button button-grey cancel"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="button">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
