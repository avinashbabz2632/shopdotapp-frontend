import React, { useState, useEffect } from 'react';
import RetailerHeader from '../../common/components/RetailerHeader';
import ArrowLeft from '../../images/icons/icon-arrow--left.svg';
import singleSquareImage from '../../../Brand/images/single-square.jpg';
import mailIcon from '../../../../assets/images/icons/mail-icon.svg';
import doller from '../../../../assets/images/icons/icon-msrp--dollar.svg';
import summer from '../../../Brand/images/pc-slider-temp.jfif';
import ArrowDown from '../../images/icons/icon-chevron--down.svg';
import InfoIcon from '../../../../assets/images/icons/info-blue.svg';
import danger from '../../images/icons/icon-danger.svg';
import redDanger from '../../images/icons/icon-red-triangle.svg';
import { useNavigate, useParams } from 'react-router-dom';
import RightArrowIcon from '../../images/icons/icon-chevron--right.svg';
import closeIcon from '../../../../assets/images/icons/icon-newclose.svg';
import LeftArrow from '../../images/icons/icon-chevron--left.svg';
import ZoomIcon from '../../images/icons/icon-zoom.svg';
import ProductZoomModal from './ProductZoomModel';
import { useSelector, useDispatch } from 'react-redux';
import BabyAndKids from '../../common/BabyAndKids';
import logoPng from '../../../../assets/images/logos/logo-png.png';
import logoMain from '../../../../assets/images/logos/logo-main.png';


import {
  getRetailerProductDetailsAction,
  retailerNewConnectionRequestAction,
} from '../../../../actions/retailerActions';
import { selectRetailerProductDetails } from '../../../../redux/Brand/Retailer/retailerSelector';

function ProductDetails() {
  const setActiveOpen = false; //useSelector(setProductActiveValue);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [zoomProduct, setZoomProduct] = useState(false);
  const [connectStatus, setConnectStatus] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [setActiveOpenVal, setSetActiveOpenVal] = useState(false);
  const retailerProductsData = useSelector(selectRetailerProductDetails);
  const { productDetails, total_stock_quantity, categories } =
    retailerProductsData || {};
  const {
    user,
    product_variants,
    price_wps,
    price_msrp,
    body_html,
    product_tags,
    shipping_time,
    product_images,
  } = productDetails || {};
  const {
    brand_details,
    brand_categories,
    brand_values,
    brand_retailer_preference,
  } = user || {};
  const { shipping_rate } = brand_details || {};
  const { shipping_address, incremental_fee, shipping_cost } =
    shipping_rate || {};
  const { group, mainCategory, subCategory } = categories || {};
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setSetActiveOpenVal(setActiveOpen);
    if (retailerProductsData?.productDetails?.user?.invitees?.length > 0) {
      setConnectStatus(
        retailerProductsData.productDetails.user.invitees[0].invite_status
      );
    } else if (
      retailerProductsData?.productDetails?.user?.inviters?.length > 0
    ) {
      setConnectStatus(
        retailerProductsData.productDetails.user.inviters[0].invite_status
      );
    }
  }, [setActiveOpen]);

  const handalSwipeRightImage = () => {
    setSlideIndex((prev) => (prev + 1) % 11);
  };
  const handalSwipeLeftImage = () => {
    setSlideIndex((prev) => (prev - 1) % 11);
  };

  const handalProductZoomModal = () => {
    setZoomProduct(zoomProduct === false ? true : false);
  };

  const slideSideSlider = () => {
    return `${(slideIndex / 18) * 100}%`;
  };

  const handleActiveButton = () => {
    setIsActiveButton(!isActiveButton);
  };

  const getProductDetails = () => {
    dispatch(getRetailerProductDetailsAction(params?.id));
  };
  useEffect(() => {
    getProductDetails();
  }, []);

  const getStatus = () => {
    const { invitees = [], inviters = [] } = user || {};
    const isNotConnected = invitees?.length === 0 && inviters?.length === 0;
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

  const handleConnectButton = () => {
    dispatch(
      retailerNewConnectionRequestAction({
        invitee_id: retailerProductsData?.productDetails?.user.id,
        invite_via: 'retailer_request',
      })
    );
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 4000);
  };

  return (
    <>
      <div className="wrapper">
        <RetailerHeader />
        {setActiveOpenVal === true ? (
          <BabyAndKids />
        ) : (
          <>
            <main className="content products_content-detail">
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
                          <h1>{brand_details?.store_name}</h1>
                          <div className="product_status">
                            <span
                              className={`status-pill w-auto ${
                                getStatus() === 'Connected' && 'pill_connected'
                              } ${
                                getStatus() === 'Pending' && 'pill_pending'
                              } ${
                                getStatus() === 'Declined' && 'pill_declined'
                              } ${
                                getStatus() === 'Not Connected' &&
                                'pill_not_connected'
                              }`}
                            >
                              {getStatus()}
                            </span>
                            &nbsp; &nbsp;
                          </div>
                        </div>

                        <div
                          className="buttons"
                          onClick={() => handleActiveButton()}
                        >
                          <div className="channels-area">
                            <div className="ca_area">
                              <div>Add/remove channels</div>
                              <div
                                className="icon"
                                style={{
                                  position: 'absolute',
                                  left: '85%',
                                  top: '20%',
                                }}
                              >
                                <img src={ArrowDown} />
                              </div>
                            </div>
                            <div
                              className="ca_area_data"
                              style={{
                                display: isActiveButton ? 'block' : 'none',
                              }}
                            >
                              <div className="dropdown_inner">
                                <ul>
                                  <li className="shopify_link">
                                    <span>Shopify</span>
                                    <a href="retailer-setting.html">Add</a>
                                  </li>
                                  <li className="shopify_link">
                                    <span>Shopify</span>
                                    <a
                                      href="retailer-setting.html"
                                      className="remove-link"
                                    >
                                      Remove
                                    </a>
                                  </li>
                                  <li className="button-view">
                                    <a href="retailer-setting.html">
                                      <span>
                                        <h3 className="plus_icon">+</h3>
                                      </span>
                                      Add new channel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {getStatus() === 'Not Connected' && (
                            <button
                              className="button button-dark"
                              onClick={() => handleConnectButton()}
                            >
                              Connect
                            </button>
                          )}
                          {/* <a href="#" class="button button-green request-approved-box">Approve</a> */}
                          <button className="button message-brand">
                            <div className="icon">
                              <img src={mailIcon} />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="products_body bg-white p-0">
                    <div className="product-top">
                      <div className="product_details open">
                        <div className="product_details-block">
                          <div className="product-detail product-detail--brand">
                            <div className="product-detail_image">
                              <div className="image image--cover image--1-1">
                                <picture>
                                  <img
                                    src={
                                      brand_details?.store_logo
                                        ? brand_details?.store_logo
                                        : singleSquareImage
                                    }
                                    alt=""
                                  />
                                </picture>
                              </div>
                            </div>
                            <div className="product-detail_info">
                              <div className="ttl">Brand</div>
                              <p className="txt">{brand_details?.store_name}</p>
                            </div>
                          </div>
                          <div className="product-detail product-detail--stock">
                            <div className="product-detail_info">
                              <div className="ttl">
                                {total_stock_quantity} in stock
                              </div>
                              <p className="txt">
                                {product_variants?.length} variants
                              </p>
                            </div>
                          </div>
                          <div className="product-detail product-detail--wsp">
                            <div className="product-detail_info">
                              <div className="ttl">
                                WSP{' '}
                                <div className="tooltip">
                                  <div className="tooltip-icon tooltip-icon-info">
                                    <div className="icon">
                                      <img src={InfoIcon} />
                                    </div>
                                  </div>
                                  <div className="tooltip_text">
                                    <p>
                                      WSP stands for Wholesale Price. This is
                                      the price that retailers pay brands.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <p className="txt">${price_wps}</p>
                            </div>
                          </div>

                          <div className="product-detail product-detail--mspr">
                            <div className="product-detail_info">
                              <div className="ttl">MSRP</div>
                              <p className="txt">${price_msrp}</p>
                            </div>
                          </div>
                          <div className="product-detail product-detail--ship-from">
                            <div className="product-detail_info">
                              <div className="ttl">Ships From</div>
                              <p className="txt">
                                {shipping_address?.city},{' '}
                                {shipping_address?.state}
                              </p>
                            </div>
                          </div>
                          {/* <!--Added latest detail--> */}

                          {/* <!--Added latest detail end--> */}
                        </div>
                      </div>
                      <div className="product_main">
                        <div className="product_slider">
                          <div className="product_slider-thumbs">
                            <div className="swiper-container gallery-thumbs swiper-initialized swiper-vertical swiper-pointer-events swiper-thumbs">
                              <div
                                className="swiper-wrapper"
                                id="swiper-wrapper-7d9e4fb45783cc9b"
                                aria-live="polite"
                                style={{
                                  transform: `translate3d(0px, -${slideSideSlider()}, 0px)`,
                                  transitionDuration: '300ms',
                                }}
                              >
                                {product_images && product_images.length > 0 ?
                                  product_images?.map((productImage, index) => {
                                    return (
                                      <div
                                        className={`swiper-slide swiper-slide-visible ${
                                          slideIndex === index &&
                                          'swiper-slide-thumb-active'
                                        } `}
                                        onClick={() => setSlideIndex(index)}
                                        style={{
                                          marginBottom: '1px',
                                        }}
                                      >
                                        <div className="image">
                                          <picture>
                                            <img
                                              src={productImage.src}
                                              alt=""
                                            />
                                          </picture>
                                        </div>
                                      </div>
                                    );
                                  }) : <div
                                  className={`swiper-slide swiper-slide-visible ${
                                    slideIndex === 0 &&
                                    'swiper-slide-thumb-active'
                                  } `}
                                  style={{
                                    marginBottom: '1px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img
                                        src={logoMain}
                                        alt=""
                                      />
                                    </picture>
                                  </div>
                                </div>}
                              </div>
                              <span
                                className="swiper-notification"
                                aria-live="assertive"
                                aria-atomic="true"
                              ></span>
                            </div>
                          </div>
                          <div className="product_slider-main">
                            <div className="swiper-container gallery-main swiper-initialized swiper-horizontal swiper-pointer-events">
                              <div
                                className="swiper-wrapper"
                                id="swiper-wrapper-b10be92488cd746ab"
                                aria-live="polite"
                                style={{
                                  transform: `translate3d(-${
                                    480 * slideIndex
                                  }px, 0px, 0px)`,
                                  transitionDuration: '300ms',
                                }}
                              >
                                {product_images && product_images.length > 0 ?
                                  product_images?.map((productImage, index) => {
                                    return (
                                      <div
                                        className="swiper-slide"
                                        role="group"
                                        aria-label="1 / 11"
                                        style={{
                                          width: '480px',
                                        }}
                                      >
                                        <div
                                          className="image"
                                          onClick={() => handalSwipeLeftImage()}
                                        >
                                          <picture>
                                            <img
                                              src={productImage.src}
                                              alt=""
                                            />
                                          </picture>
                                        </div>
                                      </div>
                                    );
                                  }) : <div
                                  className="swiper-slide"
                                  role="group"
                                  aria-label="1 / 11"
                                  style={{
                                    width: '480px',
                                  }}
                                >
                                  <div
                                    className="image"
                                    onClick={() => handalSwipeLeftImage()}
                                  >
                                    <picture>
                                      <img
                                        src={logoMain}
                                        alt=""
                                      />
                                    </picture>
                                  </div>
                                </div>}
                              </div>
                              <div
                                className={`swiper-button-prev ${
                                  slideIndex === 0 && 'swiper-button-disabled'
                                }`}
                                role="button"
                                aria-label="Previous slide"
                                aria-controls="swiper-wrapper-9a3741016670105a3b"
                                aria-disabled={slideIndex === 0}
                              >
                                <div
                                  className="icon"
                                  onClick={() => handalSwipeLeftImage()}
                                >
                                  <img src={LeftArrow} alt="" />
                                </div>
                              </div>
                              <div
                                className={`swiper-button-next ${
                                  slideIndex === (product_images?.length === 0 ? 0 : product_images?.length -1) &&
                                  'swiper-button-disabled'
                                }`}
                                role="button"
                                aria-label="Next slide"
                                aria-controls="swiper-wrapper-9a3741016670105a3b"
                                aria-disabled={
                                  slideIndex === (product_images?.length === 0 ? 0 : product_images?.length -1)
                                }
                              >
                                <div
                                  className="icon"
                                  onClick={() => handalSwipeRightImage()}
                                >
                                  <img src={RightArrowIcon} alt="" />
                                </div>
                              </div>

                              {/* <!--Single Product modal--> */}
                              <div className="pc_links">
                                <a
                                  className="pc_links-gallery"
                                  data-target="pg1"
                                  onClick={() => handalProductZoomModal()}
                                >
                                  <div className="icon">
                                    <img src={ZoomIcon} alt="" />
                                  </div>
                                </a>
                              </div>
                              {/* <!--Single Product modal end--> */}
                              <span
                                className="swiper-notification"
                                aria-live="assertive"
                                aria-atomic="true"
                              ></span>
                            </div>
                          </div>
                        </div>

                        <div className="product_info">
                          <div className="product-category">
                            <div className="title category-items">
                              Category:&nbsp;
                              {group?.name && <span>{group?.name}</span>}
                              {mainCategory?.name && (
                                <>
                                  &gt;<span>{mainCategory?.name}</span>
                                </>
                              )}
                              {subCategory?.name && (
                                <>
                                  &gt;<span>{subCategory?.name}</span>
                                </>
                              )}
                            </div>
                          </div>
                          <>{body_html}</>
                          <div className="product-category">
                            <strong>Tags:</strong>
                            <div className="tags">
                              {product_tags &&
                                product_tags.length > 0 &&
                                product_tags.map((item, index) => {
                                  return <div className="tag">{item?.tag}</div>;
                                })}
                            </div>
                          </div>

                          <div className="shipped-info">
                            <p>
                              Product will be shipped by{' '}
                              <span>{brand_details?.store_name}</span> within{' '}
                              <span>{shipping_time} days</span>
                            </p>
                          </div>
                        </div>

                        <div className="product_vars" id="vars">
                          <table className="table table-vars">
                            <thead>
                              <tr>
                                <th></th>
                                <th>
                                  <div className="txt">Material</div>
                                </th>
                                <th>
                                  <div className="txt">Color</div>
                                </th>
                                <th>
                                  <div className="txt">SKU</div>
                                </th>
                                <th>
                                  <div className="txt">
                                    Barcode{' '}
                                    <div className="tooltip">
                                      <div className="tooltip-icon tooltip-icon-info">
                                        <div className="icon">
                                          <img src={InfoIcon} />
                                        </div>
                                      </div>
                                      <div className="tooltip_text">
                                        <p>ISBN, UPC, GTIN, …</p>
                                      </div>
                                    </div>
                                  </div>
                                </th>
                                <th>
                                  <div className="txt">Stock</div>
                                </th>
                                <th>
                                  <div className="txt">
                                    WSP{' '}
                                    <div className="tooltip">
                                      <div className="tooltip-icon tooltip-icon-info">
                                        <div className="icon">
                                          <img src={InfoIcon} />
                                        </div>
                                      </div>
                                      <div className="tooltip_text">
                                        <p>
                                          WSP stands for Wholesale Price. This
                                          is the price that retailers pay
                                          brands.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </th>

                                <th>
                                  <div className="txt">MSRP</div>
                                </th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {product_variants &&
                                product_variants.length > 0 &&
                                product_variants.map((item, index) => {
                                  return (
                                    <tr key={`${index}`}>
                                      <td>
                                        <div className="image image--cover image--1-1">
                                          <picture>
                                            <img src={item?.image ? item?.image : logoPng} alt="" />
                                          </picture>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="txt">
                                          {item?.material}
                                        </div>
                                      </td>
                                      <td>
                                        <div className="txt">{item?.color}</div>
                                      </td>
                                      <td>
                                        <div className="txt">{item?.sku}</div>
                                      </td>
                                      <td>
                                        <div className="txt">
                                          {item?.barcode}
                                        </div>
                                      </td>
                                      <td>
                                        <div className="txt">
                                          {/* <!--Red color for icon by default, orange with className icon--orange--> */}
                                          {item?.inventory_quantity}
                                          <div className="tooltip-icon-orange">
                                            <div className="icon">
                                              <img src={danger} />
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="txt">${item?.wsp}</div>
                                      </td>

                                      <td>
                                        <div className="txt">
                                          ${item?.price}
                                        </div>
                                      </td>

                                      <td>
                                        <div className="txt">
                                          <button className="pc-status-button pc-status-button--add-list">
                                            Add to Cart
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </div>

                        <div className="product_extra product_shipping">
                          <div className="product_extra-head">
                            <h3>Shipping &amp; Processing: </h3>
                          </div>
                          <div className="product_extra-body">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="product_extra-text">
                                  <p>
                                    Estimated days to fulfill is{' '}
                                    <strong>[{shipping_time}]</strong>. Product
                                    ships from{' '}
                                    <strong>[{shipping_address?.city}]</strong>,{' '}
                                    <strong>[{shipping_address?.state}]</strong>
                                    .
                                  </p>
                                  <p>
                                    Shipping costs will be a flat rate of{' '}
                                    <strong>[${shipping_cost}]</strong> for the
                                    first product and{' '}
                                    <strong>[${incremental_fee}]</strong> for
                                    each additional product within the same
                                    order.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="detail-page mt-5">
                      <div className="brand-single_wrap products_body">
                        <div className="brand-single_content">
                          <div className="brand-single_content-body">
                            <div className="brand-single_about">
                              <div className="brand-single_about-content">
                                <div className="brand-left-head">
                                  <div className="brand-img">
                                    <a href="brand-single.html">
                                      <picture>
                                        <img src={brand_details?.store_logo} alt="" />
                                      </picture>
                                    </a>
                                  </div>
                                  <div>
                                    <h2 className="brand-title">
                                      <a
                                        href="brand-single.html"
                                        className="link-text"
                                      >
                                        {brand_details?.store_name}
                                      </a>
                                    </h2>
                                    <div className="brand-single_about-item">
                                      <p>
                                        <strong>Shipping Location: </strong>
                                        {shipping_address?.city},{' '}
                                        {shipping_address?.state}
                                      </p>
                                      <p>
                                        <strong>Website: </strong>
                                        <a href="#">
                                          {brand_details?.store_website}
                                        </a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="brand-single_about-items mt-4 mb-4">
                                  <div className="brand-single_about-item">
                                    <div className="brand-single_about-item-title">
                                      Brand Categories:
                                    </div>
                                    <div className="brand-single_about-item-wrap">
                                      {brand_categories &&
                                        brand_categories.length > 0 &&
                                        brand_categories.map((item, index) => {
                                          return (
                                            <a href="#" key={`${index}`}>
                                              {item?.store_categories?.name}
                                            </a>
                                          );
                                        })}
                                    </div>
                                  </div>
                                  <div className="brand-single_about-item">
                                    <div className="brand-single_about-item-title">
                                      Brand Values:
                                    </div>
                                    <div className="brand-single_about-item-wrap">
                                      {brand_values &&
                                        brand_values.length > 0 &&
                                        brand_values.map((item, index) => {
                                          return (
                                            <a href="#" key={`${index}`}>
                                              {item?.store_values?.name}
                                            </a>
                                          );
                                        })}
                                    </div>
                                  </div>
                                  <div className="brand-single_about-item">
                                    <div className="brand-single_about-item-title">
                                      Product Categories:
                                    </div>
                                    <div className="brand-single_about-item-wrap">
                                      <a href="#">Baby &amp; Kids</a>
                                      <a href="#">Men</a>
                                      <a href="#">Women</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="brand-single_about-msrp">
                                  {/* <!--here 3 icons - icon-msrp--up.svg, icon-msrp--flex.svg, icon-msrp--dollar.svg--> */}
                                  <div className="dollar">
                                    <picture>
                                      <img src={doller} alt="" />
                                    </picture>
                                  </div>
                                  Brand enforces retail price.
                                </div>
                                <div className="mt-4">
                                  <p>
                                    <strong>Return and Refund Policy </strong>
                                    <br />
                                    Returns and refunds are accepted on a
                                    case-by-case basis.
                                  </p>
                                </div>
                                <div className="mt-5">
                                  <p>
                                    <strong>
                                      Requirements for retailers who want to
                                      connect to with the brand{' '}
                                    </strong>
                                    <br />
                                    Retailer has to have an online store.
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
                                {brand_details?.brand_story}
                              </div>
                              <div className="imageArea">
                                <img src={summer} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {zoomProduct && (
                    <ProductZoomModal
                      handalModal={() => handalProductZoomModal()}
                      productImages={product_images}
                    />
                  )}
                </div>
              </section>
            </main>
            {isOpen && (
              <div className="bottom-notify active">
                <div className="container">
                  <div className="bottom-notify_text">
                    <p>
                      Request to connect sent to{' '}
                      {
                        retailerProductsData?.productDetails?.user
                          ?.brand_details?.store_name
                      }
                    </p>
                  </div>
                </div>
                <div className="bottom-notify-close">
                  <img
                    src={closeIcon}
                    alt="email"
                    onClick={() => setIsOpen(false)}
                  />
                </div>
              </div>
            )}
          </>
        )}
        <footer className="footer"></footer>
      </div>
    </>
  );
}

export default ProductDetails;
