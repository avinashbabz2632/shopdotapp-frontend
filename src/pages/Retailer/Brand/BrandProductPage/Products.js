import React, { useEffect, useState } from 'react';
import RetailerHeader from '../../common/components/RetailerHeader';
import BrandProductsSidebar from './BrandProductsSidebar';
import singleSquareImage from '../../../Brand/images/single-square.jpg';
import summer from '../../../Brand/images/pc-slider-temp.jfif';
import close from '../../../Brand/images/icons/icon-close.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ArrowLeft from '../../images/icons/icon-arrow--left.svg';
import mailIcon from '../../../../assets/images/icons/mail-icon.svg';
import RightIcon from '../../../Brand/images/icons/icon-chevron--right.svg';
import RightArrow from '../../../Retailer/images/icons/icon-chevron--right.svg';
import LeftArrow from '../../../Retailer/images/icons/icon-chevron--left.svg';
import LeftIcon from '../../../Brand/images/icons/icon-chevron--left.svg';
import { connectedTableData, retailerProductData } from '../utils';
import doller from '../../../../assets/images/icons/icon-msrp--dollar.svg';
import { isEmpty } from 'lodash';
import emptyTable from '../../../Brand/images/product-card-empty.svg';
import searchIcon from '../../../Brand/images/icons/icon-search.svg';
import closeIcon from '../../../Brand/images/icons/icon-close.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRetailerBrandProfile,
  selectRetailerProducts,
} from '../../../../redux/Retailer/Brand/Products/selectRetailerBrandProductsSelector';
import BabyAndKids from '../../common/BabyAndKids';
import { useLocation } from 'react-router-dom';
import {
  getRetailerBrandProfileAction,
  getRetailerProductsAction,
} from '../../../../actions/retailerActions';
import {
  productSearchQuery,
  selectLimit,
  selectOffset,
  selectSelectedBrandFilters,
  selectSelectedBrandStatusFilters,
  selectSelectedDaysToFullfillFilters,
  selectSelectedMSRPFilters,
  selectSelectedStockFilters,
  selectSelectedWSPFilters,
} from '../../../../redux/Brand/Retailer/retailerSelector';
import {
  setLimit,
  setOffset,
  setProductSearchQuery,
  setSelectedBrandFilters,
  setSelectedBrandStatusFilters,
  setSelectedDaysToFullfilFilters,
  setSelectedMSRPFilter,
  setSelectedStockFilters,
  setSelectedWSPFilter,
} from '../../../../redux/Brand/Retailer/retailerSlice';
import ReactPlayer from 'react-player';

function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const setActiveOpen = false; //useSelector(false);
  const [profileData, setProfileData] = useState(null);
  const [tagsValue, setFilterByBrand] = useState([]);
  const [wspFilterValues, setWspFilter] = useState([]);
  const [msrpFilterValues, setMsrpFilter] = useState([]);
  const [stockFilters, setStockFilter] = useState([]);
  const [daysFullfillFilters, setDaysFullfillFilter] = useState([]);
  const [setActiveOpenVal, setSetActiveOpenVal] = useState(true);
  const [imgStates, setImgStates] = useState(
    Array(retailerProductData.length).fill(0)
  );
  const { state } = useLocation();
  const { user_id, brand_id } = state || {};
  const brandProfileData = useSelector(selectRetailerBrandProfile);
  const productData = useSelector(selectRetailerProducts);
  const pageLimit = useSelector(selectLimit);
  const offset = useSelector(selectOffset);
  const selectedDaysToFullfilFilters = useSelector(
    selectSelectedDaysToFullfillFilters
  );
  const selectedStockFilters = useSelector(selectSelectedStockFilters);
  const selectedWSPFilter = useSelector(selectSelectedWSPFilters);
  const selectedMSRPFilter = useSelector(selectSelectedMSRPFilters);
  const productSearchValue = useSelector(productSearchQuery);

  const { count, rows } = productData;

  let pageCount = 0;
  if (rows && rows.length > 0) {
    pageCount = Math.ceil(count / pageLimit);
  }

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let index = 1; index <= pageCount; index++) {
      const selected = offset + 1 === index;
      const optionItem = (
        <option key={`${index}`} value={index} selected={selected}>
          {index}
        </option>
      );
      pageNumbers.push(optionItem);
    }
    return pageNumbers;
  };

  const onItemPerPageChange = (e) => {
    dispatch(setLimit(parseInt(e.target.value)));
    dispatch(setOffset(0));
  };

  const onPageChange = (e) => {
    dispatch(setOffset(e.target.value - 1));
  };

  const incrementPageNumber = () => {
    let page = offset + 1;
    if (page < pageCount) {
      dispatch(setOffset(page));
    }
  };
  const decrementPageNumber = () => {
    if (offset > 0) {
      dispatch(setOffset(offset - 1));
    }
  };

  const fixedBrandFilter = {
    field: 'brand_id',
    operator: 'in',
    value: [brand_id],
  };

  const fetchRetailerProducts = () => {
    const body = {
      paging: {
        limit: pageLimit,
        offset: offset,
      },
      query: {},
      filter: [fixedBrandFilter],
    };
    dispatch(getRetailerProductsAction(body));
  };

  const getStatus = (item) => {
    const { user } = item || {};
    const { invitees, inviters } = user || {};
    const isNotConnected = invitees.length === 0 && inviters.length === 0;
    let status;
    if (isNotConnected) {
      status = 'Not Connected';
    } else if (invitees.length > 0) {
      const obj = invitees[0];
      if (obj.invite_status.toLowerCase() === 'accepted') {
        status = 'Connected';
      } else if (obj.invite_status.toLowerCase() === 'pending') {
        status = 'Pending';
      }
    } else if (inviters.length > 0) {
      const obj = inviters[0];
      if (obj.invite_status.toLowerCase() === 'accepted') {
        status = 'Connected';
      } else if (obj.invite_status.toLowerCase() === 'pending') {
        status = 'Pending';
      }
    }
    return status;
  };

  const getImage = (item) => {
    let imgUrl;
    const { product_images } = item || {};
    if (product_images && product_images.length > 0) {
      imgUrl = product_images[0]?.src;
    }
    return imgUrl;
  };

  const {
    brand_profile,
    shop_detail,
    user_detail,
    referal_url,
    brandPreference,
    shippingRate,
    payment_detail,
    brand_values,
    brand_categories,
    connected_status,
    product_categories,
  } = brandProfileData || {};

  const { shipping_rate, store_logo } = brand_profile || {};
  const { shipping_address } = shipping_rate || {};

  useEffect(() => {
    dispatch(getRetailerBrandProfileAction(user_id));
    dispatch(setLimit(10));
    dispatch(setOffset(0));
    fetchRetailerProducts();
  }, []);

  useEffect(() => {
    setSetActiveOpenVal(setActiveOpen);
  }, [setActiveOpen]);

  useEffect(() => {
    const findData = connectedTableData.find((ele) => {
      return (
        ele.id === Number(params?.id) ||
        ele.productCategoryTag === params?.productCategoryTag ||
        ele.brandValues === params?.brandValues
      );
    });

    if (findData) {
      setProfileData(findData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    connectedTableData,
    params?.id,
    params?.productCategoryTag,
    params?.brandValues,
  ]);

  const handalSwipeRightImage = (index) => {
    setImgStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = (newStates[index] + 1) % 3;
      return newStates;
    });
  };

  const handalSwipeLeftImage = (index) => {
    setImgStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = (newStates[index] - 1 + 3) % 3;
      return newStates;
    });
  };

  const handleClickBullet = (sliderIndex, bulletIndex) => {
    setImgStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[sliderIndex] = bulletIndex;
      return newStates;
    });
  };

  const clearProductFilter = (e) => {
    if (e === 'tagsValue') {
      // dispatch(retailertagsClear());
    } else if (e === 'wspFilterValues') {
      dispatch(setSelectedWSPFilter([]));
    } else if (e === 'msrpFilterValues') {
      dispatch(setSelectedMSRPFilter([]));
    } else if (e === 'stockFilters') {
      dispatch(setSelectedStockFilters([]));
    } else if (e === 'daysFullfillFilters') {
      dispatch(setSelectedDaysToFullfilFilters([]));
    }
  };

  const ProductSearchBar = (e) => {
    const searchQuery = e.target.value?.toLowerCase();
    dispatch(setProductSearchQuery(searchQuery));
  };

  const handleClearFilter = () => {
    dispatch(setSelectedBrandFilters([]));
    dispatch(setSelectedBrandStatusFilters([]));
    dispatch(setSelectedDaysToFullfilFilters([]));
    dispatch(setSelectedStockFilters([]));
    dispatch(setSelectedWSPFilter([]));
    dispatch(setSelectedMSRPFilter([]));
  };

  return (
    <>
      <div className="wrapper">
        <RetailerHeader />
        {setActiveOpenVal === true ? (
          <BabyAndKids />
        ) : (
          <main className="content products_content-detail detail-page">
            <section className="section products">
              <div className="products_content">
                <div className="products_head mp-head">
                  <div className="products_head-content">
                    <div className="product_head">
                      <span className="back" onClick={() => navigate(-1)}>
                        <div className="icon">
                          <img src={ArrowLeft} />
                        </div>
                      </span>
                      <div className="title">
                        <h1>{brand_profile?.store_name}</h1>
                        <div className="product_status">
                          <span
                            className={`status-pill w-auto ${
                              connected_status === 'connected' &&
                              'pill_connected'
                            } ${
                              connected_status === 'pending' && 'pill_pending'
                            } ${
                              connected_status === 'declined' && 'pill_declined'
                            } ${
                              connected_status === 'not connected' &&
                              'pill_not_connected'
                            }`}
                          >
                            {connected_status?.charAt(0).toUpperCase()}
                            {connected_status?.substring(1)}
                          </span>
                          &nbsp; &nbsp;
                        </div>
                      </div>
                      <div className="buttons">
                        <button className="button message-brand">
                          <div className="icon">
                            <img src={mailIcon} />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brand-single_wrap products_body">
                  <div className="brand-single_content">
                    <div className="brand-single_content-body">
                      <div className="brand-single_about">
                        <div className="brand-single_about-content">
                          <div className="brand-left-head">
                            <div className="brand-img">
                              <picture>
                                <img src={store_logo} alt="" />
                              </picture>
                            </div>
                            <div>
                              <h2 className="brand-title">
                                {brand_profile?.company_name}
                              </h2>
                              <div className="brand-single_about-item">
                                <p>
                                  <strong>Shipping Location: </strong>
                                  {shipping_address?.country},
                                  {shipping_address?.state}
                                </p>
                                <p>
                                  <strong>Website: </strong>
                                  <a href={brand_profile?.store_website} target="_blank">{brand_profile?.store_website}</a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="brand-single_about-items mt-4 mb-4">
                            <div className="brand-single_about-item">
                              <div className="brand-single_about-item-title">
                                Brand Categories:{' '}
                              </div>
                              <div className="brand-single_about-item-wrap">
                                {brand_categories?.map((item, index) => {
                                  return (
                                    <a href="#" key={index}>
                                      {item?.name}
                                    </a>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="brand-single_about-item">
                              <div className="brand-single_about-item-title">
                                Brand Values:{' '}
                              </div>
                              <div className="brand-single_about-item-wrap">
                                {brand_values?.map((item, index) => {
                                  return (
                                    <a href="#" key={index}>
                                      {item?.name}
                                    </a>
                                  );
                                })}
                                {/* <a href="#">
                                                                    Handmade
                                                                </a>
                                                                <a href="#">
                                                                    Made in USA
                                                                </a>
                                                                <a href="#">
                                                                    Small Batch
                                                                </a>
                                                                <a href="#">
                                                                    Women Owned
                                                                </a> */}
                              </div>
                            </div>
                            <div className="brand-single_about-item">
                              <div className="brand-single_about-item-title">
                                Product Categories:{' '}
                                {/* {
                                                                    profileData?.productCategory
                                                                } */}
                              </div>
                              <div className="brand-single_about-item-wrap">
                                {product_categories && product_categories?.map(
                                  (item, index) => {
                                    return (
                                      <a href="#" key={index}>
                                        {item?.parent_category?.name}
                                      </a>
                                    );
                                  }
                                )}
                                {/* <a href="#">
                                                                    Baby &amp;
                                                                    Kids
                                                                </a>
                                                                <a href="#">
                                                                    Men
                                                                </a>
                                                                <a href="#">
                                                                    Women
                                                                </a> */}
                              </div>
                            </div>
                          </div>
                          <div className="brand-single_about-msrp">
                            {/* <!--here 3 icons - icon-msrp--up.svg, icon-msrp--flex.svg, icon-msrp--dollar.svg--> */}
                            <div className="dollar">
                              <picture>
                                <img src={doller} alt="doller" />
                              </picture>
                            </div>
                            Brand enforces retail price.
                          </div>
                          <div className="mt-4">
                            <p>
                              <strong>Return and Refund Policy </strong>
                              <br />
                              {brandPreference?.return_policy}
                            </p>
                          </div>
                          <div className="mt-5">
                            <p>
                              <strong>
                                Requirements for retailers who want to connect
                                to with the brand{' '}
                              </strong>
                              <br />
                              {brandPreference?.connect_brand}
                            </p>
                          </div>
                          {/* <div className="brand-single_about-buttons">
                                                    <a
                                                        href="#"
                                                        className="button button-dark large"
                                                    >
                                                        View All Products (31)
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="button large message-brand"
                                                    >
                                                        Message Brand
                                                    </a>
                                                </div> */}
                        </div>
                      </div>
                      <div className="brand-single_info">
                        <div className="brand-single_block">
                          <h2>About the Brand</h2>
                          {brand_profile?.brand_story}
                          <ReactPlayer url={brand_profile?.brand_promo} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="section products products--style-1 bg-white mt-5">
                    {/* ====================sidebar================ */}
                    <BrandProductsSidebar brandId={brand_id} />
                    <div className="products_content update_products_content">
                      <div className="products_head">
                        <div className="products_head-content">
                          <div className="title">
                            <h1>Products</h1>
                            <div className="number">{count}</div>
                          </div>
                          <div className="products_head-search">
                            <form className="search_form">
                              <div className="search_form-input">
                                <input
                                  type="text"
                                  placeholder="Search product"
                                  value={productSearchValue}
                                  onChange={(e) => ProductSearchBar(e)}
                                />
                              </div>
                              {productSearchValue?.length !== 0 ? (
                                <>
                                  <div
                                    className="close_icon_search"
                                    onClick={() =>
                                      ProductSearchBar({
                                        target: {
                                          value: '',
                                        },
                                      })
                                    }
                                  >
                                    <img
                                      className="product_clear_icon"
                                      src={closeIcon}
                                    />
                                  </div>
                                </>
                              ) : (
                                <img className="icon" src={searchIcon} />
                              )}
                            </form>
                            {/* <form className="search_form">
                                                        <div className="search_form-input">
                                                            <input
                                                                type="text"
                                                                placeholder="Search product"
                                                            />
                                                        </div>
                                                        <button
                                                            type="cancel"
                                                            className="search_form-button"
                                                        >
                                                            <svg className="icon">
                                                                <use xlink:href="images/sprite.svg#icon-clear"></use>
                                                            </svg>
                                                        </button>
                                                        <button type="submit"></button>
                                                        <svg className="icon">
                                                            <use xlink:href="images/sprite.svg#icon-search"></use>
                                                        </svg>
                                                    </form> */}
                          </div>
                        </div>
                      </div>
                      {(!isEmpty(tagsValue) ||
                        !isEmpty(selectedWSPFilter) ||
                        !isEmpty(msrpFilterValues) ||
                        !isEmpty(stockFilters) ||
                        !isEmpty(daysFullfillFilters)) && (
                        <div className="products_mid">
                          <div className="products_active-filters mb-0">
                            {/* <div className="products_active-filters mb-0"> */}
                            {!isEmpty(tagsValue) && (
                              <div className="products_active-filter">
                                <div className="txt">
                                  <b>Tags:</b> {tagsValue?.join(', ')}
                                </div>
                                <button
                                  className="products_active-remove"
                                  onClick={() =>
                                    clearProductFilter('tagsValue')
                                  }
                                >
                                  <img src={close} />
                                </button>
                              </div>
                            )}

                            {!isEmpty(selectedWSPFilter) && (
                              <div className="products_active-filter">
                                <div className="txt">
                                  <b>WSP:</b> {wspFilterValues?.join(', ')}
                                </div>
                                <button
                                  className="products_active-remove"
                                  onClick={() =>
                                    clearProductFilter('wspFilterValues')
                                  }
                                >
                                  <img src={close} />
                                </button>
                              </div>
                            )}
                            {!isEmpty(selectedMSRPFilter) && (
                              <div className="products_active-filter">
                                <div className="txt">
                                  <b>MSRP:</b> {selectedMSRPFilter?.join(', ')}
                                </div>
                                <button
                                  className="products_active-remove"
                                  onClick={() =>
                                    clearProductFilter('msrpFilterValues')
                                  }
                                >
                                  <img src={close} />
                                </button>
                              </div>
                            )}
                            {!isEmpty(selectedStockFilters) && (
                              <div className="products_active-filter">
                                <div className="txt">
                                  <b>Stock:</b>
                                  {selectedStockFilters?.join(', ')}
                                </div>
                                <button
                                  className="products_active-remove"
                                  onClick={() =>
                                    clearProductFilter('stockFilters')
                                  }
                                >
                                  <img src={close} />
                                </button>
                              </div>
                            )}
                            {!isEmpty(selectedDaysToFullfilFilters) && (
                              <div className="products_active-filter">
                                <div className="txt">
                                  <b>Days to Fulfill:</b>
                                  {selectedDaysToFullfilFilters?.join(', ')}
                                </div>
                                <button
                                  className="products_active-remove"
                                  onClick={() =>
                                    clearProductFilter('daysFullfillFilters')
                                  }
                                >
                                  <img src={close} />
                                </button>
                              </div>
                            )}
                            {(!isEmpty(tagsValue) ||
                              !isEmpty(selectedWSPFilter) ||
                              !isEmpty(selectedMSRPFilter) ||
                              !isEmpty(selectedStockFilters) ||
                              !isEmpty(selectedDaysToFullfilFilters)) && (
                              <button
                                className="products_active-remove-all"
                                onClick={() => handleClearFilter()}
                              >
                                Clear Filters
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                      <div className="products_body product-tile-grid">
                        <div
                          className="product-tile dynamic_height"
                          style={{
                            height: '407px',
                            // paddingBottom: '20px',
                          }}
                        >
                          {/* <!--product card--> */}
                          {rows && rows?.length === 0 && (
                            <tr>
                              <td className="no-data-cell" colSpan="10">
                                <div className="product-card-empty_body">
                                  <p>
                                    There are no orders that meet your criteria.
                                  </p>
                                  <div className="image">
                                    <picture>
                                      <img src={emptyTable} alt="" />
                                    </picture>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                          {rows &&
                            rows?.map((item, index) => {
                              return (
                                <div key={index} className="pc">
                                  <Link
                                    to={`/retailer/brand/single-product-details/${item?.id}`}
                                  >
                                    <div className="pc_main">
                                      <div className="pc_head">
                                        <div className="pc_head-item">
                                          <span
                                            className={`status-pill ${
                                              getStatus(item) ===
                                                'Not Connected' &&
                                              'pill_not_connected'
                                            } ${
                                              getStatus(item) === 'Connected' &&
                                              'pill_connected'
                                            } ${
                                              getStatus(item) === 'Pending' &&
                                              'pill_pending'
                                            } ${
                                              getStatus(item) === 'Declined' &&
                                              'pill_declined'
                                            }`}
                                          >
                                            {getStatus(item)}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="pc_body">
                                        <div className="pc_slider">
                                          <div
                                            href="product-single.html"
                                            className="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events"
                                          >
                                            <div
                                              className="swiper-wrapper"
                                              id={`swiper-wrapper-${index}`}
                                              aria-live="polite"
                                              style={{
                                                transform: `translate3d(-${
                                                  206 * imgStates[index]
                                                }px, 0px, 0px)`,
                                                transitionDuration: ' 1000ms',
                                              }}
                                            >
                                              {item?.product_images.map(
                                                (_, imgIndex) => (
                                                  <div
                                                    key={imgIndex}
                                                    className={`swiper-slide ${
                                                      imgIndex ===
                                                      imgStates[index]
                                                        ? 'swiper-slide-active'
                                                        : ''
                                                    }`}
                                                    role="group"
                                                    aria-label={`${
                                                      imgIndex + 1
                                                    } / 3`}
                                                    style={{
                                                      width: '206px',
                                                    }}
                                                  >
                                                    <div className="image">
                                                      <picture>
                                                        <img
                                                          src={getImage(item)}
                                                          alt=""
                                                        />
                                                      </picture>
                                                    </div>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                            <div
                                              className={`swiper-button-prev ${
                                                imgStates[index] === 0 &&
                                                'swiper-button-disabled'
                                              }`}
                                              aria-disabled={
                                                imgStates[index] === 0
                                              }
                                              onClick={() =>
                                                handalSwipeLeftImage(index)
                                              }
                                            >
                                              <img
                                                className="icon"
                                                src={LeftArrow}
                                              />
                                            </div>
                                            <div
                                              className={`swiper-button-next ${
                                                imgStates[index] === 2 &&
                                                'swiper-button-disabled'
                                              }`}
                                              aria-disabled={
                                                imgStates[index] === 2
                                              }
                                              onClick={() =>
                                                handalSwipeRightImage(index)
                                              }
                                            >
                                              <img
                                                className="icon"
                                                src={RightArrow}
                                              />
                                            </div>
                                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                                              {item?.product_images.map(
                                                (_, bulletIndex) => (
                                                  <span
                                                    key={bulletIndex}
                                                    className={`swiper-pagination-bullet ${
                                                      imgStates[index] ===
                                                      bulletIndex
                                                        ? 'swiper-pagination-bullet-active'
                                                        : ''
                                                    }`}
                                                    onClick={() =>
                                                      handleClickBullet(
                                                        index,
                                                        bulletIndex
                                                      )
                                                    }
                                                  ></span>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="pc_footer">
                                        <div className="pc-title">
                                          {item?.title}
                                        </div>
                                        <div className="pc_price-area">
                                          <div className="pc_price-item">
                                            <label>{item.wsp}</label>
                                            <label className="red-text">
                                              $ {item.price_wps ?? '0.00'}
                                            </label>
                                          </div>
                                          <div className="pc_price-item">
                                            <label>{item.msrp}</label>
                                            <label className="black-text">
                                              $ {item.price_msrp ?? '0.00'}
                                            </label>
                                          </div>
                                        </div>
                                        <div className="pc_brand-item">
                                          <a href="brand-single.html">
                                            <img
                                              src={
                                                item.user?.brand_details
                                                  ?.store_logo
                                              }
                                            />
                                            <span className="brand-name">
                                              {
                                                item.user?.brand_details
                                                  ?.store_name
                                              }
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              );
                            })}
                        </div>
                        {/* <!--products pagination--> */}
                        <div className="pagination_wrap mt-0">
                          <div className="pagination">
                            <div className="pagination_per">
                              <select
                                name="per"
                                id="per"
                                onChange={onItemPerPageChange}
                              >
                                <option value="20" selected="">
                                  20
                                </option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                              </select>
                              <div className="pagination-title">
                                items per page
                              </div>
                            </div>
                            <div className="pagination_nav">
                              <div className="pagination-title">page</div>
                              <select
                                name="per"
                                id="per"
                                onChange={onPageChange}
                              >
                                {getPageNumbers()}
                              </select>
                              <div className="pagination-title">of 2</div>
                              <button
                                className="pagination-arrow pagination-arrow-prev"
                                onClick={decrementPageNumber}
                              >
                                <div className="icon">
                                  <img className="icon" src={LeftIcon} />
                                </div>
                              </button>
                              <button
                                className="pagination-arrow pagination-arrow-next"
                                onClick={incrementPageNumber}
                              >
                                <div className="icon">
                                  <img className="icon" src={RightIcon} />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </main>
        )}
      </div>
    </>
  );
}

export default Products;
