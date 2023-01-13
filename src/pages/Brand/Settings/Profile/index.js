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
} from '../../../../actions/brandActions';
import { selectUserDetails } from '../../../../redux/user/userSelector';

const brandCategoryList = [
  'Animals & Pet Supplies',
  'Hardware & DIY',
  'Apparel & Accessories',
  'Health & Beauty',
  'Baby & Kids',
  'Home & Garden',
  'Electronics',
  'Paper & Novelty',
  'Food & Beverage',
  'Sports & Outdoor',
  'Footwear',
  'Toys & Games',
  'Furniture',
];

const brandValueList = [
  'BIPOC Owned',
  'Eco-friendly',
  'Fair Trade',
  'Handmade',
  'Made in Canada',
  'Made in USA',
  'Not on Amazon',
  'Organic',
  'Size Inclusive',
  'Small Batch',
  'Social Good',
  'Women Owned',
  'Other',
];

export default function BrandProfile() {
  const [image, setImage] = useState(Brandlogo);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(brandProfileValidationSchema),
  });
  const dispatch = useDispatch();
  const useDetails = useSelector(selectUserDetails);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPlatformCategoryAction());
      dispatch(getPlatformValuesAction());
      dispatch(getBrandProfileAction(useDetails.id));
    }, 350);
  }, []);

  const onSubmit = (data) => {
    // console.log(data);
    // reset();
  };

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
                            <b>JPEG or PNG</b>. Maximum size is <b>5MB</b>, No
                            less than <b>512 x 512</b> pixels and no more than{' '}
                            <b>1024 x 1024</b> pixels.
                          </span>
                        </label>
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
                          {brandCategoryList.map((item, i) => {
                            return (
                              <div className="check-item" key={i}>
                                <label className="checkbox">
                                  <input
                                    type="checkbox"
                                    name={'brandCategory'}
                                    value={item}
                                    {...register('brandCategory')}
                                  />
                                  <div className="checkbox-text">
                                    <span>{item}</span>
                                  </div>
                                </label>
                              </div>
                            );
                          })}
                        </div>
                        {errors?.brandCategory && (
                          <span className="error-text">
                            {errors?.brandCategory?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-input form-checkbox mb-4">
                        <label className="form-label">Brand values</label>
                        <div className="select-checkbox third-col">
                          <div className="select-checkbox">
                            {brandValueList.map((val, i) => {
                              return (
                                <div className="check-item" key={i}>
                                  <label className="checkbox">
                                    <input
                                      type="checkbox"
                                      name={'brandValue'}
                                      value={val}
                                      {...register('brandValue', {
                                        required: false,
                                      })}
                                    />
                                    <div className="checkbox-text">
                                      <span>{val}</span>
                                    </div>
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                          {errors?.brandValue && (
                            <span className="error-text">
                              {errors?.brandValue?.message}
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
