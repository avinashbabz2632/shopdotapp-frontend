import React, { useState, useEffect } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import Select from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';
import { retailerProfileValidationSchema } from '../ValidationSchema';
import EditIcon from '../../../Retailer/images//icons/icon-edit.svg';
import Brandlogo from '../../../Retailer/images/profile-avatar.jpg';
import '../../Style/retail.style.scss';
import '../../Style/retail.media.scss';
import '../../Style/retail.dev.scss';
import {
  getRetailerProfileAction,
  updateRetailerProfileAction,
} from '../../../../actions/retailerActions';
import {
  getCountriesAction,
  getStatesAction,
} from '../../../../actions/generalActions';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRetailerProfileSaveResult,
  selectRetailerProfileSaving,
} from '../../../../redux/Retailer/Profile/retailerProfileSelector';
import { selectCountries } from '../../../../redux/General/Countries/getCountriesSelector';
import { selectStates } from '../../../../redux/General/States/getStatesSelector';
import {
  getPlatformCategoryAction,
  getPlatformValuesAction,
} from '../../../../actions/brandActions';
import {
  selectBrandCategory,
  selectBrandProfileDetails,
  selectBrandValues,
} from '../../../../redux/Brand/Profile/brandProfileSelectors';
import { selectUserDetails } from '../../../../redux/user/userSelector';
import { ToastContainer } from 'react-toastify';
import { uploadImageAction } from '../../../../actions/userActions';
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

export default function RetailerProfile() {
  const dispatch = useDispatch();

  const updatingProfile = useSelector(selectRetailerProfileSaving);
  const userDetails = useSelector(selectUserDetails);
  const brandCategoryList = useSelector(selectBrandCategory);
  const brandProfileDetails = useSelector(selectBrandProfileDetails);
  const [profileLoading, setProfileLoading] = useState(false);
  const [selectedRetailerValues, setSelectedRetailerValues] = useState([]);
  let transformCategoryOptions = [];
  if (brandCategoryList && brandCategoryList.length > 0) {
    transformCategoryOptions = brandCategoryList?.map((el) => {
      return { value: el.id, label: el.name };
    });
  }
  const brandValueList = useSelector(selectBrandValues);
  const countriesOption = useSelector(selectCountries);
  let transformCountriesOption = [];
  if (countriesOption && countriesOption.length > 0) {
    transformCountriesOption = countriesOption?.map((el) => {
      return { value: el.id, label: el.name };
    });
  }
  const statesOption = useSelector(selectStates);
  let transformStatesOption = [];
  if (statesOption && statesOption.length > 0) {
    transformStatesOption = statesOption?.map((el) => {
      return { value: el.code, label: el.name };
    });
  }

  const [image, setImage] = useState('');
  const [file, setFile] = useState();
  const [fileLogoError, setfileLogoError] = useState('');
  const [storeLogoError, setStoreLogoError] = useState('');

  // TODO: future use
  // const encodeImageFileAsURL = (element) => {
  //     const fileData = element;
  //     const reader = new FileReader();
  //     reader.onloadend = function () {
  //         setFile(reader.result);
  //     };
  //     reader.readAsDataURL(fileData);
  // };

  useEffect(() => {
    dispatch(getCountriesAction());
    dispatch(getPlatformCategoryAction());
    dispatch(getPlatformValuesAction());
    dispatch(getRetailerProfileAction(userDetails?.id));
  }, []);

  const handleLogoChange = (event, type) => {
    const Image = ['png', 'jpg', 'jpeg'];
    const check = event.target.value.split('.');
    const FilteredImg = Image.filter((item) => check.includes(item));
    if (FilteredImg.length) {
      if (type === 'profile') {
        setImage(URL.createObjectURL(event.target.files[0]));
        setfileLogoError('');
      } else {
        setFile(URL.createObjectURL(event.target.files[0]));
        setStoreLogoError('');
      }
    } else {
      if (type === 'profile') {
        setfileLogoError('Please upload only valid image format.');
      } else {
        setStoreLogoError('Please upload only valid image format.');
      }
    }
  };

  const getDefaultValueOfCountryField = () => {
    let option = null;
    if (
      brandProfileDetails &&
      brandProfileDetails?.shipping_address?.country &&
      transformCountriesOption &&
      transformCountriesOption.length > 0
    ) {
      const country = transformCountriesOption.find(
        (c) => c.label === brandProfileDetails?.shipping_address?.country
      );
      if (country) {
        option = country;
      }
      return option;
    }
    if (transformCountriesOption && transformCountriesOption.length > 0) {
      option = transformCountriesOption[0];
    }
    return option;
  };

  useEffect(() => {
    if (
      brandProfileDetails.retailer_details &&
      brandProfileDetails.retailer_details.id
    ) {
      initialState(brandProfileDetails);
    }
  }, [brandProfileDetails]);

  const initialState = async (brandData) => {
    const valuesArray = [];
    if (
      brandData.retailer_details &&
      brandData.retailer_details.retailer_values &&
      brandData.retailer_details.retailer_values.length
    ) {
      await map(brandData.retailer_details.retailer_values, (cat, key) => {
        valuesArray.push(cat.value_id);
      });
      setSelectedRetailerValues(valuesArray)
    }
    if (brandData?.retailer_details?.id) {
      setImage(brandData?.retailer_details?.store_logo || '');
      setFile(brandData?.retailer_details?.store_photo);
      reset({
        companyName: brandProfileDetails?.retailer_details?.company_name,
        contactEmail:
          brandProfileDetails?.retailer_details?.company_email_address, //
        contactPhone:
          brandProfileDetails?.retailer_details?.company_phone_number,
        addressLine1: brandProfileDetails?.shipping_address?.street_address_1,
        addressLine2: brandProfileDetails?.shipping_address?.street_address_2,
        city: brandProfileDetails?.shipping_address?.city,
        zipcode: brandProfileDetails?.shipping_address?.zip,
        retailerName: brandProfileDetails?.retailer_details?.company_name,
        retailerWebsite: brandProfileDetails?.retailer_details?.store_website,
        retailerCategory: getDefaultValueOfCategoryField(),
        retialerValue: valuesArray,
        aboutTheRetailer: brandProfileDetails?.retailer_details?.retailer_story,
        link: brandProfileDetails?.retailer_details?.retailer_promo,
        countryAddress: getDefaultValueOfCountryField(),
        stateAddress: getDefaultValueOfStateField(),
      });
    }
  };

  const getDefaultValueOfStateField = () => {
    let option = null;
    if (
      brandProfileDetails &&
      brandProfileDetails?.shipping_address?.state &&
      transformStatesOption &&
      transformStatesOption.length > 0
    ) {
      const country = transformStatesOption.find(
        (c) => c.label === brandProfileDetails?.shipping_address?.state
      );
      if (country) {
        option = country;
      }
      return option;
    }
    if (transformStatesOption && transformStatesOption.length > 0) {
      option = transformStatesOption[0];
    }
    return option;
  };

  const getDefaultValueOfCategoryField = () => {
    let option = null;
    const { retailer_details } = brandProfileDetails || {};
    const { retailer_categories = [] } = retailer_details || {};
    if (
      retailer_categories &&
      retailer_categories.length > 0 &&
      transformCategoryOptions &&
      transformCategoryOptions.length > 0
    ) {
      const category = transformCategoryOptions.find((c) =>
        retailer_categories.some((rc) => rc.category_id === c.value)
      );
      if (category) {
        option = category;
      }
    }
    return option;
  };

  const onChangeImage = (e, isStore) => {
    if (!profileLoading) {
      setProfileLoading(true);
      const data = new FormData();
      data.append('file', e.target.files[0]);

      uploadImageAction(data)
        .then((res) => {
          if (isStore) {
            setFile(res.url);
          } else {
            setImage(res.url);
          }
        })
        .finally(() => {
          setProfileLoading(false);
        });
    }
  };

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyName: brandProfileDetails?.retailer_details?.company_name,
      contactEmail:
        brandProfileDetails?.retailer_details?.company_email_address, //
      contactPhone: brandProfileDetails?.retailer_details?.company_phone_number,
      addressLine1: brandProfileDetails?.shipping_address?.street_address_1,
      addressLine2: brandProfileDetails?.shipping_address?.street_address_2,
      city: brandProfileDetails?.shipping_address?.city,
      zipcode: brandProfileDetails?.shipping_address?.zip,
      retailerName: brandProfileDetails?.retailer_details?.company_name,
      retailerWebsite:
        brandProfileDetails?.retailer_details?.company_email_address,
      retailerCategory: getDefaultValueOfCategoryField(),
      retialerValue: '',
      aboutTheRetailer: brandProfileDetails?.retailer_details?.retailer_story,
      link: brandProfileDetails?.retailer_details?.retailer_promo,
      countryAddress: getDefaultValueOfCountryField(),
      stateAddress: getDefaultValueOfStateField(),
      retailer_promo: brandProfileDetails?.retailer_details?.retailer_promo,
    },
    mode: 'onChange',
    resolver: yupResolver(retailerProfileValidationSchema),
  });

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
    setValue('contactPhone', formattedValue);
  };

  const watchCountry = useWatch({ name: 'countryAddress', control: control });

  useEffect(() => {
    if (watchCountry && watchCountry.value) {
      dispatch(getStatesAction(watchCountry?.value));
    }
  }, [watchCountry]);

  const getRetailerValues = (data) => {
    let retalierValues = [];
    if (data.retialerValue && data.retialerValue.length > 0) {
      retalierValues = data.retialerValue.map((rv) => parseInt(rv));
    }
    return retalierValues;
  };

  const getRetailerCategories = (data) => {
    let retalierCategories = [];
    if (data.retailerCategory && data.retailerCategory.length > 0) {
      retalierValues = data.retailerCategory.map((rc) => rc.value);
    }
    return retalierCategories;
  };

  const onSubmit = (data) => {
    const profileData = {
      role_id: 2,
      id: userDetails?.id,
      user_id: userDetails?.id,
      company_name: data.companyName,
      company_email_address: data.contactEmail,
      company_phone_number: data.contactPhone,
      store_name: data.companyName,
      store_logo: image,
      store_website: data.retailerWebsite,
      retailer_story: data.aboutTheRetailer,
      store_photo: file,
      retailer_categories: [data.retailerCategory.value],
      retailer_values: getRetailerValues(data),
      address1: data.addressLine1,
      address2: data.addressLine2 ?? null,
      country: data.countryAddress.label,
      state: data.stateAddress.label,
      city: data.city,
      zip: data.zipcode,
      retailer_promo: data.link ?? null,
      store_mailing_address: 'test address',
      retailer_promo: data.retailer_promo ? data.retailer_promo : null
    };
    if (brandProfileDetails) {
      dispatch(updateRetailerProfileAction(profileData))
    } else {
      delete profileData.id;
      dispatch(updateRetailerProfileAction(profileData));
    }
    // reset();
  };
  const handleChange = (retailerValueId) => {
    const newData = JSON.parse(JSON.stringify(selectedRetailerValues));
    if (newData.includes(retailerValueId)) {
      const index = newData.indexOf(retailerValueId);
      if (index > -1) {
        // only splice array when item is found
        newData.splice(index, 1); // 2nd parameter means remove one item only
        setSelectedRetailerValues(newData);
      }
    }else{
      setSelectedRetailerValues([...newData, retailerValueId]);
    }
  }
  return (
    <>
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
                Information entered on this page will be visible to brands
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
                            name="companyName"
                            id=""
                            placeholder=""
                            {...register('companyName', {
                              required: true,
                            })}
                          />
                          {errors?.companyName && (
                            <span className="error-text">
                              {errors?.companyName?.message}
                            </span>
                          )}
                        </div>

                        <div className="form-input tooltip-input mb-4">
                          <label className="form-label">
                            Contact email{' '}
                            <span className="asterisk-red">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control mb-0"
                            name="contactEmail"
                            id=""
                            placeholder=""
                            {...register('contactEmail', {
                              required: true,
                            })}
                          />
                          {errors?.contactEmail && (
                            <span className="error-text">
                              {errors?.contactEmail?.message}
                            </span>
                          )}
                        </div>
                        <div className="form-input tooltip-input mb-4">
                          <label className="form-label">
                            Contact phone number{' '}
                            <span className="asterisk-red">*</span>
                          </label>

                          <Controller
                            name={'contactPhone'}
                            control={control}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
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
                          {/* <input
                            type="number"
                            className="form-control mb-0"
                            id=""
                            name="contactPhone"
                            placeholder=""
                            {...register('contactPhone', {
                              required: true,
                            })}
                          /> */}

                          {errors?.contactPhone && (
                            <span className="error-text">
                              {errors?.contactPhone?.message}
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
                            Address line 1{' '}
                            <span className="asterisk-red">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control mb-0"
                            name="addressLine1"
                            placeholder=""
                            {...register('addressLine1', { required: true })}
                          />
                          {errors.addressLine1 && (
                            <span className="error-text">
                              {errors.addressLine1?.message}
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
                            name="addressLine2"
                            placeholder=""
                            {...register('addressLine2', { required: false })}
                          />
                          {errors.addressLine2 && (
                            <span className="error-text">
                              {errors.addressLine2?.message}
                            </span>
                          )}
                        </div>
                        <div className="category-form-input">
                          <div className="form-input mb-4">
                            <label className="form-label">
                              Country <span className="asterisk-red">*</span>
                            </label>
                            <Controller
                              name="countryAddress"
                              control={control}
                              required
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  className="basic-single"
                                  classNamePrefix="select"
                                  placeholder="Select Country"
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
                            {errors.countryAddress && (
                              <span className="error-text">
                                {errors.countryAddress?.message}
                              </span>
                            )}
                          </div>
                          <div className="form-input mb-2">
                            <label className="form-label">
                              State <span className="asterisk-red">*</span>
                            </label>
                            <Controller
                              name="stateAddress"
                              control={control}
                              required
                              placeholder="Select State"
                              render={({ field, value }) => (
                                <Select
                                  {...field}
                                  checked={value}
                                  className="basic-single"
                                  classNamePrefix="select"
                                  placeholder="Select State"
                                  styles={categoryStyle}
                                  menuPortalTarget={document.body}
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
                            {errors.stateAddress && (
                              <span className="error-text">
                                {errors.stateAddress?.message}
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
                              name="city"
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
                                accept="image/*"
                                onChange={(e) => {
                                  onChangeImage(e);
                                }}
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
                              onClick={() => {
                                if (!profileLoading) {
                                  setImage('');
                                }
                              }}
                            >
                              Remove logo{' '}
                            </a>
                            <span className="logo-instruction">
                              Format Type:
                              <b> JPEG or PNG</b>. Maximum size is <b>5MB</b>,
                              No less than <b>512 x 512</b> pixels and no more
                              than <b>1024 x 1024</b> pixels.
                            </span>
                          </label>
                        </div>
                        <div className="error-text mb-3">{fileLogoError}</div>
                        <div className="form-input mb-4">
                          <label className="form-label">
                            Retailer name{' '}
                            <span className="asterisk-red">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control mb-0"
                            name="retailerName"
                            id=""
                            placeholder=""
                            {...register('retailerName', {
                              required: true,
                            })}
                          />
                          {errors?.retailerName && (
                            <span className="error-text">
                              {errors?.retailerName?.message}
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
                            name="retailerWebsite"
                            placeholder="www.website.com"
                            {...register('retailerWebsite', {
                              required: true,
                            })}
                          />
                          {errors?.retailerWebsite && (
                            <span className="error-text">
                              {errors?.retailerWebsite?.message}
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
                                placeholder="Select Retailer category"
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
                                options={transformCategoryOptions}
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
                              {brandValueList &&
                                brandValueList.length > 0 &&
                                brandValueList?.map((val, i) => {
                                  return (
                                    <div className="check-item" key={i}>
                                      <label className="checkbox">
                                        <input
                                          type="checkbox"
                                          name={'retialerValue'}
                                          checked={selectedRetailerValues.includes(val.id) ? true : false}
                                          onClick={()=>handleChange(val.id)}
                                          // defaultChecked={true}
                                          value={val.id}
                                          {...register('retialerValue', {
                                            required: false,
                                          })}
                                        />
                                        <div className="checkbox-text">
                                          <span>{val.name}</span>
                                        </div>
                                      </label>
                                    </div>
                                  );
                                })}
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
                            name="aboutTheRetailer"
                            placeholder=""
                            {...register('aboutTheRetailer', {
                              required: true,
                            })}
                          ></textarea>
                          {errors?.aboutTheRetailer && (
                            <span className="error-text">
                              {errors?.aboutTheRetailer?.message}
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
                            name="retailer_promo"
                            {...register('retailer_promo', {
                              required: false,
                            })}
                          />
                          {errors.retailer_promo && (
                            <span className="error-text">
                              {errors.retailer_promo?.message}
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
                                // className="d-none"
                                id=""
                                name="storeImage"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                  onChangeImage(e, true);
                                }}
                              />
                              <span className="dragbox-smallnote">
                                Format Type: <b>JPEG or PNG</b>. Maximum size is{' '}
                                <b>5MB</b>.
                              </span>
                            </span>
                          </div>
                          <div className="error-text mb-3">
                            {storeLogoError}
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
      <ToastContainer />
    </>
  );
}
