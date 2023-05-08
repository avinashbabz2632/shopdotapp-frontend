import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import '../Style/brand.style.scss';
import '../Style/brand.media.scss';
import '../Style/brand.dev.scss';
import { Datas } from '../Products/utils';
import BrandHeader from '../common/components/BrandHeader';
import LeftArrowIcon from '../../Brand/images/icons/icon-arrow--left.svg';
import editIcon from '../../Brand/images/icons/icon-edit.svg';
import ProductVariantTable from './VariantTable';
import ProductUrl from '../images/pc-slider-temp.jfif';
import RightArrowIcon from '../images/icons/icon-chevron--right.svg';
import LeftArrow from '../images/icons/icon-chevron--left.svg';
import ZoomIcon from '../images/icons/icon-zoom.svg';
import ProductZoomModal from './ProductZoomModal';
import info from '../images/icons/icon-info-red.svg';

import { useDispatch } from 'react-redux';
import { syncSingleProductAction } from '../../../actions/productActions';

import { getProductDetailsAction } from '../../../actions/productActions';
import { selectProductDetails } from '../../../redux/Brand/Products/productSelectors';
import logoPng from '../../../assets/images/logos/logo-png.png';
import dummyProductDetails from './dummy-product-details.json';

export default function ProductDetails() {
  const [image, setimage] = useState(ProductUrl);
  const [zoomProduct, setZoomProduct] = useState(false);
  const [swipedImage, setSwipedImage] = useState(1);
  const [product, setProduct] = useState([]);
  const params = useParams();
  // const productDetails = useSelector(selectProductDetails);
  const productDetails = dummyProductDetails.data;

  console.log('productDetails------', productDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    // const data = Datas.find((ele) => ele.id === params.id);
    // setProduct(data);
    // setimage(data.productImages[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dispatch(getProductDetailsAction(14));
  }, []);

  const handalProductZoomModal = () => {
    setZoomProduct(zoomProduct === false ? true : false);
  };

  const handalSwipeRightImage = () => {
    setSwipedImage(swipedImage + 1);
  };

  const handalSwipeLeftImage = () => {
    setSwipedImage(swipedImage - 1);
  };

  const handaleChangeImage = (e) => {
    if (e === 1) {
      setSwipedImage(1);
    } else if (e === 2) {
      setSwipedImage(2);
    } else {
      setSwipedImage(3);
    }
  };

  const doSync = () => {
    dispatch(
      syncSingleProductAction({
        product_id: 8026317914418,
        user_id: 12354,
      })
    );
  };

  const getBrandName = () => {
    const { user } = productDetails?.productDetails || {};
    const { brand_details } = user || {};
    const { company_name } = brand_details || {};
    return company_name;
  };

  const getBrandLogo = () => {
    let brandLogo = logoPng;
    const { user } = productDetails?.productDetails || {};
    const { brand_details } = user || {};
    const { store_logo } = brand_details || {};
    if (store_logo) {
      brandLogo = store_logo;
    }
    return brandLogo;
  };

  const getWSP = () => {
    let wsp = 0;
    const { price_wps } = productDetails?.productDetails || {};
    if (price_wps) {
      wsp = price_wps;
    }
    return wsp;
  };

  const getMSRP = () => {
    let msrp = 0;
    const { price_msrp } = productDetails?.productDetails || {};
    if (price_msrp) {
      msrp = price_msrp;
    }
    return msrp;
  };

  const getShippingFrom = () => {
    let brandLogo = logoPng;
    const { user } = productDetails?.productDetails || {};
    const { brand_details } = user || {};
    const { shipping_rate } = brand_details || {};
    const { shipping_address } = shipping_rate || {};
    const { country, state, city, zip } = shipping_address || {};
    return `${city}, ${state}`;
  };

  return (
    <div className="wrapper">
      <BrandHeader />
      <main className="content mp-content products_content-detail">
        <section className="section products mp-section">
          <div className="products_content">
            <div className="products_head mp-head">
              <div className="products_head-content">
                <div className="product_head">
                  <NavLink to={'/brand/products/'} className="back">
                    <img className="icon" src={LeftArrowIcon} />
                  </NavLink>
                  <div className="title">
                    <h1>{productDetails?.productDetails?.title}</h1>
                    {/* <div className="product_status">
                                            <div className="my-toggle-btn">
                                                <input
                                                    type="checkbox"
                                                    id="checkbox13"
                                                    onClick={() => setAction('toggle')}
                                                />
                                                <label>
                                                    <span
                                                        className="on"
                                                        title="Active"
                                                    >
                                                        Active
                                                    </span>
                                                    <span
                                                        className="off"
                                                        title="Inactive"
                                                    >
                                                        Inactive
                                                    </span>
                                                </label>
                                                <div className="tooltip_text">
                                                    <p>
                                                        Product is no longer in
                                                        Active status and/or in
                                                        the ShopDot sales
                                                        channel in your Shopify
                                                        store. To activate,
                                                        update the product
                                                        status in your Shopify
                                                        store.
                                                    </p>
                                                </div>
                                            </div>
                                        </div> */}
                    <div className="product_status">
                      <div className="my-toggle-btn">
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">
                          <span className="on" title="Active">
                            Active
                          </span>
                          <span className="off" title="Inactive">
                            Inactive
                          </span>
                        </label>
                        <div className="tooltip_text">
                          <p>
                            Product is no longer in Active status and/or in the
                            ShopDot sales channel in your Shopify store. To
                            activate, update the product status in your Shopify
                            store.
                          </p>
                        </div>

                        <div className="products_body">
                          <div className="product-alert">
                            <div
                              className="alert alert-error d-flex align-items-center"
                              role="alert"
                            >
                              <img className="icon" src={info} />
                              <div>
                                Unfortunately, the syncing of the product was
                                not successful. Please try again.
                              </div>
                            </div>
                          </div>
                          <div className="product_details open pd-update">
                            <div className="product_details-block">
                              <div className="product-detail product-detail--brand">
                                <div className="product-detail_image">
                                  <div className="image image--cover image--1-1">
                                    <picture>
                                      <img src={getBrandLogo()} alt="Logo" />
                                    </picture>
                                  </div>
                                </div>
                                <div className="product-detail_info">
                                  <div className="ttl">Brand</div>
                                  <p className="txt">{getBrandName()}</p>
                                </div>
                              </div>
                              <div className="product-detail product-detail--stock">
                                <div className="product-detail_info">
                                  <div className="ttl">
                                    Stock
                                    <div className="tooltip">
                                      <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                                        <img className="icon-info" src={info} />
                                      </div>
                                      <div className="tooltip_text">
                                        <p>
                                          The inventory published within ShopDot
                                          is based on the inventory from your
                                          Shopify store x the inventory buffer
                                          that you set under
                                          Settings-Preferences.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="txt txt-dark">
                                    {productDetails?.total_stock_quantity}
                                  </p>
                                </div>
                              </div>
                              <div className="product-detail product-detail--wsp">
                                <div className="product-detail_info">
                                  <div className="ttl">
                                    WSP
                                    <div className="tooltip">
                                      <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                                        <img className="icon-info" src={info} />
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
                                  <p className="txt">{getWSP()}</p>
                                </div>
                              </div>
                              <div className="product-detail product-detail--msrp">
                                <div className="product-detail_info">
                                  <div className="ttl">MSRP</div>
                                  <p className="txt txt-dark">{getMSRP()}</p>
                                </div>
                              </div>
                              <div className="product-detail product-detail--ship-from">
                                <div className="product-detail_info">
                                  <div className="ttl">Ships From</div>
                                  <p className="txt">{getShippingFrom()}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product_main">
                            <div className="product_slider">
                              <div className="product_slider-thumbs">
                                <div className="swiper-container gallery-thumbs swiper-initialized swiper-vertical swiper-pointer-events swiper-thumbs">
                                  <div
                                    className="swiper-wrapper"
                                    id="swiper-wrapper-61653a910e210be737"
                                    aria-live="polite"
                                  >
                                    <div
                                      className={`swiper-slide swiper-slide-visible ${
                                        swipedImage === 1 &&
                                        'swiper-slide-thumb-active'
                                      } `}
                                      onClick={() => handaleChangeImage(1)}
                                      role="group"
                                      aria-label="1 / 3"
                                    >
                                      <div className="image">
                                        <picture>
                                          <img
                                            src={
                                              product.length !== 0 &&
                                              product.productImages[0]
                                            }
                                            alt=""
                                          />
                                        </picture>
                                      </div>
                                    </div>

                                    <div
                                      className={`swiper-slide swiper-slide-visible swiper-slide-prev ${
                                        swipedImage === 2 &&
                                        'swiper-slide-thumb-active'
                                      } `}
                                      onClick={() => handaleChangeImage(2)}
                                      role="group"
                                      aria-label="2 / 3"
                                    >
                                      <div className="image">
                                        <picture>
                                          <img
                                            src={
                                              product.length !== 0 &&
                                              product.productImages[1]
                                            }
                                            alt=""
                                          />
                                        </picture>
                                      </div>
                                    </div>

                                    <div
                                      className={`swiper-slide swiper-slide-visible swiper-slide-active ${
                                        swipedImage === 3 &&
                                        'swiper-slide-thumb-active'
                                      } `}
                                      onClick={() => handaleChangeImage(3)}
                                      role="group"
                                      aria-label="3 / 3"
                                    >
                                      <div className="image">
                                        <picture>
                                          <img
                                            src={
                                              product.length !== 0 &&
                                              product.productImages[2]
                                            }
                                            alt=""
                                          />
                                        </picture>
                                      </div>
                                    </div>
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
                                    className={`swiper-wrapper ${
                                      swipedImage === 2
                                        ? 'swipe-second'
                                        : 'swiper-first'
                                    } ${swipedImage === 3 && 'swipe-third'}`}
                                    id="swiper-wrapper-9a3741016670105a3b"
                                    aria-live="polite"
                                  >
                                    <div
                                      className={`swiper-slide ${
                                        swipedImage === 1 &&
                                        'swiper-slide-visible swiper-slide-active'
                                      } ${
                                        swipedImage === 2 && 'swiper-slide-prev'
                                      }`}
                                      role="group"
                                      aria-label="1 / 3"
                                    >
                                      <div className="image">
                                        <picture>
                                          <img src={image} alt="" />
                                        </picture>
                                      </div>
                                    </div>

                                    <div
                                      className={`swiper-slide ${
                                        swipedImage === 2
                                          ? 'swiper-slide-visible swiper-slide-active'
                                          : 'swiper-slide-next'
                                      }`}
                                      role="group"
                                      aria-label="2 / 3"
                                    >
                                      <div className="image">
                                        <picture>
                                          <img
                                            src={
                                              product.length !== 0 &&
                                              product.productImages[1]
                                            }
                                            alt=""
                                          />
                                        </picture>
                                      </div>
                                    </div>

                                    <div
                                      className={`swiper-slide ${
                                        swipedImage === 3 &&
                                        'swiper-slide-visible swiper-slide-active'
                                      } ${
                                        swipedImage === 2 && 'swiper-slide-next'
                                      }`}
                                      role="group"
                                      aria-label="3 / 3"
                                    >
                                      <div className="image">
                                        <picture>
                                          <img
                                            src={
                                              product.length !== 0 &&
                                              product.productImages[2]
                                            }
                                            alt=""
                                          />
                                        </picture>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={`swiper-button-prev ${
                                      swipedImage === 1 &&
                                      'swiper-button-disabled'
                                    }`}
                                    role="button"
                                    aria-label="Previous slide"
                                    aria-controls="swiper-wrapper-9a3741016670105a3b"
                                    aria-disabled={swipedImage === 1}
                                    onClick={() => handalSwipeLeftImage()}
                                  >
                                    <img
                                      className="icon-left-right"
                                      src={LeftArrow}
                                    />
                                  </div>
                                  <div
                                    className={`swiper-button-next ${
                                      swipedImage === 3 &&
                                      'swiper-button-disabled'
                                    }`}
                                    role="button"
                                    aria-label="Next slide"
                                    aria-controls="swiper-wrapper-9a3741016670105a3b"
                                    aria-disabled={swipedImage === 3}
                                    onClick={() => handalSwipeRightImage()}
                                  >
                                    <img
                                      className="icon-left-right"
                                      src={RightArrowIcon}
                                    />
                                  </div>

                                  <div className="pc_links">
                                    <a
                                      href="#"
                                      className="pc_links-gallery"
                                      data-target="pg1"
                                      onClick={() => handalProductZoomModal()}
                                    >
                                      <img
                                        className="icon-zoom"
                                        src={ZoomIcon}
                                      />
                                    </a>
                                  </div>

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
                                  <span>
                                    {product.length !== 0 &&
                                      product.category.join('  >  ')}
                                  </span>
                                </div>
                              </div>
                              <h2 className="h1">{product.description}</h2>
                              <p>{product.details}</p>
                              <div className="for">
                                <div className="line">
                                  <strong>Activities: </strong>
                                  {product.activities}
                                </div>
                                <div className="line">
                                  <strong>Content:</strong>
                                  {product.content}
                                </div>
                                <div className="line">
                                  <strong>Dimension: </strong>
                                  {product.dimention}
                                </div>
                                <div className="line">
                                  <strong>Weight:</strong> {product.weight}
                                </div>
                              </div>

                              <div className="product-category">
                                <strong>Tags:</strong>
                                <div className="tags">
                                  {product.length !== 0 &&
                                    product.tags.map((ele, i) => (
                                      <div className="tag" key={i}>
                                        {' '}
                                        {ele}{' '}
                                      </div>
                                    ))}
                                  <div className="tag">Baby &amp; Kids</div>
                                  <div className="tag">toys</div>
                                  <div className="tag">games</div>
                                </div>
                              </div>
                            </div>
                            {productDetails?.productDetails
                              ?.product_variants && (
                              <ProductVariantTable
                                productVariants={
                                  productDetails?.productDetails
                                    ?.product_variants
                                }
                              />
                            )}
                            <div className="pv-update product_shipping">
                              <div className="product_extra-head">
                                <h3>Shipping &amp; Processing: </h3>
                              </div>
                              <div className="product_extra-body">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="product_extra-text">
                                      <p>
                                        Estimated days to fulfill is{' '}
                                        <strong>[Range]</strong>. Product ships
                                        from <strong>[Shipping City]</strong>,{' '}
                                        <strong>[Shipping State]</strong>.
                                      </p>
                                      <p>
                                        Shipping costs will be a flat rate of{' '}
                                        <strong>[$Shipping Costs]</strong> for
                                        the first product and{' '}
                                        <strong>[$Incremental Fee]</strong> for
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
                        {zoomProduct && (
                          <ProductZoomModal
                            handalModal={() => handalProductZoomModal()}
                            productImages={product.productImages}
                          />
                        )}
                      </div>
                      <button
                        onClick={doSync}
                        className="button button-sky-blue remove-all-from-my-list large"
                      >
                        Sync Product from Shopify
                      </button>
                    </div>

                    <NavLink
                      to={`/brand/edit-product/${product?.id}`}
                      className="button button-dark black large view-list"
                    >
                      <img className="icon" src={editIcon} />
                      Edit Product
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="products_body">
                <div className="product-alert">
                  <div
                    className="alert alert-error d-flex align-items-center"
                    role="alert"
                  >
                    <img className="icon" src={info} />
                    <div>
                      Unfortunately, the syncing of the product was not
                      successful. Please try again.
                    </div>
                  </div>
                </div>
                <div className="product_details open pd-update">
                  <div className="product_details-block">
                    <div className="product-detail product-detail--brand">
                      <div className="product-detail_image">
                        <div className="image image--cover image--1-1">
                          <picture>
                            <img src={product.brandImage} alt="" />
                          </picture>
                        </div>
                      </div>
                      <div className="product-detail_info">
                        <div className="ttl">Brand</div>
                        <p className="txt">{product.brand}</p>
                      </div>
                    </div>
                    <div className="product-detail product-detail--stock">
                      <div className="product-detail_info">
                        <div className="ttl">
                          Stock
                          <div className="tooltip">
                            <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                              <img className="icon-info" src={info} />
                            </div>
                            <div className="tooltip_text">
                              <p>
                                The inventory published within ShopDot is based
                                on the inventory from your Shopify store x the
                                inventory buffer that you set under
                                Settings-Preferences.
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="txt txt-dark">{product.stock}</p>
                      </div>
                    </div>
                    <div className="product-detail product-detail--wsp">
                      <div className="product-detail_info">
                        <div className="ttl">
                          WSP
                          <div className="tooltip">
                            <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                              <img className="icon-info" src={info} />
                            </div>
                            <div className="tooltip_text">
                              <p>
                                WSP stands for Wholesale Price. This is the
                                price that retailers pay brands.
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="txt">{product.wsp}</p>
                      </div>
                    </div>
                    <div className="product-detail product-detail--msrp">
                      <div className="product-detail_info">
                        <div className="ttl">MSRP</div>
                        <p className="txt txt-dark">{product.msrp}</p>
                      </div>
                    </div>
                    <div className="product-detail product-detail--ship-from">
                      <div className="product-detail_info">
                        <div className="ttl">Ships From</div>
                        <p className="txt">{product.shipsFrom}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product_main">
                  <div className="product_slider">
                    <div className="product_slider-thumbs">
                      <div className="swiper-container gallery-thumbs swiper-initialized swiper-vertical swiper-pointer-events swiper-thumbs">
                        <div
                          className="swiper-wrapper"
                          id="swiper-wrapper-61653a910e210be737"
                          aria-live="polite"
                        >
                          <div
                            className={`swiper-slide swiper-slide-visible ${
                              swipedImage === 1 && 'swiper-slide-thumb-active'
                            } `}
                            onClick={() => handaleChangeImage(1)}
                            role="group"
                            aria-label="1 / 3"
                          >
                            <div className="image">
                              <picture>
                                <img
                                  src={
                                    product.length !== 0 &&
                                    product.productImages[0]
                                  }
                                  alt=""
                                />
                              </picture>
                            </div>
                          </div>

                          <div
                            className={`swiper-slide swiper-slide-visible swiper-slide-prev ${
                              swipedImage === 2 && 'swiper-slide-thumb-active'
                            } `}
                            onClick={() => handaleChangeImage(2)}
                            role="group"
                            aria-label="2 / 3"
                          >
                            <div className="image">
                              <picture>
                                <img
                                  src={
                                    product.length !== 0 &&
                                    product.productImages[1]
                                  }
                                  alt=""
                                />
                              </picture>
                            </div>
                          </div>

                          <div
                            className={`swiper-slide swiper-slide-visible swiper-slide-active ${
                              swipedImage === 3 && 'swiper-slide-thumb-active'
                            } `}
                            onClick={() => handaleChangeImage(3)}
                            role="group"
                            aria-label="3 / 3"
                          >
                            <div className="image">
                              <picture>
                                <img
                                  src={
                                    product.length !== 0 &&
                                    product.productImages[2]
                                  }
                                  alt=""
                                />
                              </picture>
                            </div>
                          </div>
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
                          className={`swiper-wrapper ${
                            swipedImage === 2 ? 'swipe-second' : 'swiper-first'
                          } ${swipedImage === 3 && 'swipe-third'}`}
                          id="swiper-wrapper-9a3741016670105a3b"
                          aria-live="polite"
                        >
                          <div
                            className={`swiper-slide ${
                              swipedImage === 1 &&
                              'swiper-slide-visible swiper-slide-active'
                            } ${swipedImage === 2 && 'swiper-slide-prev'}`}
                            role="group"
                            aria-label="1 / 3"
                          >
                            <div className="image">
                              <picture>
                                <img src={image} alt="" />
                              </picture>
                            </div>
                          </div>

                          <div
                            className={`swiper-slide ${
                              swipedImage === 2
                                ? 'swiper-slide-visible swiper-slide-active'
                                : 'swiper-slide-next'
                            }`}
                            role="group"
                            aria-label="2 / 3"
                          >
                            <div className="image">
                              <picture>
                                <img
                                  src={
                                    product.length !== 0 &&
                                    product.productImages[1]
                                  }
                                  alt=""
                                />
                              </picture>
                            </div>
                          </div>

                          <div
                            className={`swiper-slide ${
                              swipedImage === 3 &&
                              'swiper-slide-visible swiper-slide-active'
                            } ${swipedImage === 2 && 'swiper-slide-next'}`}
                            role="group"
                            aria-label="3 / 3"
                          >
                            <div className="image">
                              <picture>
                                <img
                                  src={
                                    product.length !== 0 &&
                                    product.productImages[2]
                                  }
                                  alt=""
                                />
                              </picture>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`swiper-button-prev ${
                            swipedImage === 1 && 'swiper-button-disabled'
                          }`}
                          role="button"
                          aria-label="Previous slide"
                          aria-controls="swiper-wrapper-9a3741016670105a3b"
                          aria-disabled={swipedImage === 1}
                          onClick={() => handalSwipeLeftImage()}
                        >
                          <img className="icon-left-right" src={LeftArrow} />
                        </div>
                        <div
                          className={`swiper-button-next ${
                            swipedImage === 3 && 'swiper-button-disabled'
                          }`}
                          role="button"
                          aria-label="Next slide"
                          aria-controls="swiper-wrapper-9a3741016670105a3b"
                          aria-disabled={swipedImage === 3}
                          onClick={() => handalSwipeRightImage()}
                        >
                          <img
                            className="icon-left-right"
                            src={RightArrowIcon}
                          />
                        </div>

                        <div className="pc_links">
                          <a
                            href="#"
                            className="pc_links-gallery"
                            data-target="pg1"
                            onClick={() => handalProductZoomModal()}
                          >
                            <img className="icon-zoom" src={ZoomIcon} />
                          </a>
                        </div>

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
                        <span>
                          {product.length !== 0 &&
                            product.category.join('  >  ')}
                        </span>
                      </div>
                    </div>
                    <h2 className="h1">{product.description}</h2>
                    <p>{product.details}</p>
                    <div className="for">
                      <div className="line">
                        <strong>Activities: </strong>
                        {product.activities}
                      </div>
                      <div className="line">
                        <strong>Content:</strong>
                        {product.content}
                      </div>
                      <div className="line">
                        <strong>Dimension: </strong>
                        {product.dimention}
                      </div>
                      <div className="line">
                        <strong>Weight:</strong> {product.weight}
                      </div>
                    </div>

                    <div className="product-category">
                      <strong>Tags:</strong>
                      <div className="tags">
                        {product.length !== 0 &&
                          product.tags.map((ele, i) => (
                            <div className="tag" key={i}>
                              {' '}
                              {ele}{' '}
                            </div>
                          ))}
                        <div className="tag">Baby &amp; Kids</div>
                        <div className="tag">toys</div>
                        <div className="tag">games</div>
                      </div>
                    </div>
                  </div>
                  {product.variants && (
                    <ProductVariantTable productVariant={product.variants} />
                  )}
                  <div className="pv-update product_shipping">
                    <div className="product_extra-head">
                      <h3>Shipping &amp; Processing: </h3>
                    </div>
                    <div className="product_extra-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="product_extra-text">
                            <p>
                              Estimated days to fulfill is{' '}
                              <strong>[Range]</strong>. Product ships from{' '}
                              <strong>[Shipping City]</strong>,{' '}
                              <strong>[Shipping State]</strong>.
                            </p>
                            <p>
                              Shipping costs will be a flat rate of{' '}
                              <strong>[$Shipping Costs]</strong> for the first
                              product and <strong>[$Incremental Fee]</strong>{' '}
                              for each additional product within the same order.
                            </p>
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
                  productImages={product.productImages}
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
