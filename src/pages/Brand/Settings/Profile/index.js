import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { brandProfileValidationSchema } from '../Paid/ValidationSchema';
import EditIcon from '../../images/icons/icon-edit.svg';
import Brandlogo from '../../images/profile-avatar.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBrandProfileAction,
  getPlatformCategoryAction,
  getPlatformValuesAction,
  updateBrandProfileAction,
} from '../../../../actions/brandActions';
import { uploadImageAction } from '../../../../actions/userActions';
import { selectUserDetails } from '../../../../redux/user/userSelector';
import {
  selectBrandCategory,
  selectBrandProfileDetails,
  selectBrandValues,
} from '../../../../redux/Brand/Profile/brandProfileSelectors';
import { cloneDeep, isEmpty, map, remove } from 'lodash';
import { ToastContainer } from 'react-toastify';

export default function BrandProfile() {
  const [image, setImage] = useState(Brandlogo);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(brandProfileValidationSchema),
  });
  const dispatch = useDispatch();
  const useDetails = useSelector(selectUserDetails);
  const brandCategoryList = useSelector(selectBrandCategory);
  const brandValueList = useSelector(selectBrandValues);
  const brandProfileDetails = useSelector(selectBrandProfileDetails);
  const [selectedCategory, setSelectCategory] = useState([]);
  const [selectedValues, setSelectValues] = useState([]);
  const [profileLoading, setProfileLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      dispatch(getPlatformCategoryAction());
      dispatch(getPlatformValuesAction());
      dispatch(getBrandProfileAction(useDetails.id));
    }, 350);
  }, []);

  const initialState = async (brandData) => {
    if (brandData?.brand_profile?.id) {
      const categoryArray = [];
      const valuesArray = [];
      if (brandData.brand_categories && brandData.brand_categories.length) {
        await map(brandData.brand_categories, (cat, key) => {
          categoryArray.push(cat.id);
        });
      }
      if (brandData.brand_values && brandData.brand_values.length) {
        await map(brandData.brand_values, (cat, key) => {
          valuesArray.push(cat.id);
        });
      }
      setImage(brandData.brand_profile.store_logo || Brandlogo);
      reset({
        brand_values: valuesArray,
        brand_categories: categoryArray,
        company_name: brandData.brand_profile.company_name,
        company_email_address: brandData.brand_profile.company_email_address,
        company_phone_number: brandData.brand_profile.company_phone_number,
        store_name: brandData.brand_profile.store_name,
        store_website: brandData.brand_profile.store_website,
        brand_story: brandData.brand_profile.brand_story,
        brand_promo: brandData.brand_profile.brand_promo,
      });
      setTimeout(() => {
        setSelectCategory(categoryArray);
        setSelectValues(valuesArray);
      }, 100);
    }
  };

  useEffect(() => {
    if (
      brandProfileDetails.brand_profile &&
      brandProfileDetails.brand_profile.id
    ) {
      initialState(brandProfileDetails);
    }
  }, [brandProfileDetails]);

  const handleCheckbox = (value, valueType) => {
    const valueParse = JSON.parse(value);
    const currentArray =
      valueType === 'category' ? selectedCategory : selectedValues;

    const updateArray = cloneDeep(currentArray);
    const isSelected = updateArray.includes(valueParse);
    if (isSelected) {
      remove(updateArray, (r, key) => {
        return r === valueParse;
      });
    } else {
      updateArray.push(valueParse);
    }
    if (valueType === 'category') {
      setSelectCategory(updateArray);
    } else if (valueType === 'value') {
      setSelectValues(updateArray);
    }
  };

  const onChangeImage = (e) => {
    if (!profileLoading) {
      setProfileLoading(true);
      const data = new FormData();
      data.append('file', e.target.files[0]);
      dispatch(
        uploadImageAction(data)
          .then((res) => {
            setImage(res.url);
          })
          .finally(() => {
            setProfileLoading(false);
          })
      );
    }
  };

  const onSubmit = (data) => {
    console.log('data 2', data);
    dispatch(
      updateBrandProfileAction(
        {
          user_id: useDetails.id,
          role_id: 1,
          store_logo: image,
          profile_picture: image,
          ...data,
        },
        brandProfileDetails?.id
      )
    );
    // reset();
  };

  console.log(image, 'image');

  return (
    <div className="pc_tabs-content tabs_body">
      <div className="tab active" data-target="Account">
        <div className="products_content">
          <div className="products_head mp-head head-with-subtitle">
            <div className="products_head-content">
              <div className="title">
                <h1>Brand Profile</h1>
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
                    <h2>Contact Information </h2>
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
                  <div className="my_store">
                    <h2>Brand Information </h2>
                    <div className="form-area">
                      <div>
                        <div className="form-input form-upload-image">
                          <a href="#" className="upload-logo">
                            <label>
                              <input
                                className="d-none"
                                id=""
                                type="file"
                                onChange={onChangeImage}
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
                              <b>JPEG or PNG</b>. Maximum size is <b>5MB</b>, No
                              less than <b>512 x 512</b> pixels and no more than{' '}
                              <b>1024 x 1024</b> pixels.
                            </span>
                          </label>
                        </div>
                        {isEmpty(image) && (
                          <span className="error-text">Please add logo</span>
                        )}
                      </div>
                      <div className="form-input mb-4">
                        <label className="form-label">
                          Brand name <span className="asterisk-red">*</span>
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
                          Brand website
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
                      <div className="form-input form-checkbox mb-4">
                        <label className="form-label">
                          Brand category (Select up to three){' '}
                          <span className="asterisk-red">*</span>
                        </label>

                        <div className="select-checkbox">
                          {brandCategoryList && brandCategoryList.length ? (
                            brandCategoryList.map((item, i) => {
                              return (
                                <div className="check-item" key={i}>
                                  <label className="checkbox">
                                    <input
                                      type="checkbox"
                                      name={'brand_categories'}
                                      checked={selectedCategory.includes(
                                        item.id
                                      )}
                                      value={item.id}
                                      {...register('brand_categories', {
                                        onChange: (e) => {
                                          handleCheckbox(
                                            e.target.value,
                                            'category'
                                          );
                                        },
                                      })}
                                    />
                                    <div className="checkbox-text">
                                      <span>{item.name}</span>
                                    </div>
                                  </label>
                                </div>
                              );
                            })
                          ) : (
                            <div />
                          )}
                        </div>
                        {errors?.brand_categories && (
                          <span className="error-text">
                            {errors?.brand_categories?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-input form-checkbox mb-4">
                        <label className="form-label">Brand values</label>
                        <div className="select-checkbox third-col">
                          <div className="select-checkbox">
                            {brandValueList && brandValueList.length ? (
                              brandValueList.map((val, i) => {
                                return (
                                  <div className="check-item" key={i}>
                                    <label className="checkbox">
                                      <input
                                        type="checkbox"
                                        name={'brand_values'}
                                        checked={selectedValues.includes(
                                          val.id
                                        )}
                                        value={val.id}
                                        {...register('brand_values', {
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
                          {errors?.brand_values && (
                            <span className="error-text">
                              {errors?.brand_values?.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-input form-story mb-4">
                        <label className="form-label">
                          About the brand{' '}
                          <span className="asterisk-red">*</span>
                        </label>
                        <textarea
                          id=""
                          rows="8"
                          required=""
                          className="text-area   "
                          name="brand_story"
                          placeholder=""
                          {...register('brand_story', {
                            required: true,
                          })}
                        ></textarea>
                        {errors?.brand_story && (
                          <span className="error-text">
                            {errors?.brand_story?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-input mb-4">
                        <label className="form-label">
                          Add a Youtube or Vimeo video link.
                        </label>
                        <input
                          type="text"
                          className="form-control mb-0"
                          name="brand_promo"
                          id=""
                          placeholder=""
                          {...register('brand_promo', {
                            required: true,
                          })}
                        />
                        {errors?.brand_promo && (
                          <span className="error-text">
                            {errors?.brand_promo?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-input form-submit">
                        <button
                          onClick={() => reset()}
                          className="button button-grey cancel"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            handleSubmit();
                          }}
                          type="submit"
                          className="button"
                        >
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
      <ToastContainer />
    </div>
  );
}
