import React, { useState, useEffect } from 'react';
import RetailerHeader from '../../common/components/RetailerHeader';
import FirstImg from '../../../../assets/first_img.jpeg';
import SecondImg from '../../../../assets/second_img.jpeg';
import ThirdImg from '../../../../assets/third_img.jpeg';
import FourImg from '../../../../assets/fourth_img.jpeg';
import FiveImg from '../../../../assets/fifth_img.webp';
import SixImg from '../../../../assets/sixth_img.webp';
import SevenImg from '../../../../assets/seventh_img.webp';
import EightImg from '../../../../assets/eighth_img.webp';
import NineImg from '../../../../assets/nineth_img.webp';
import TenImg from '../../../../assets/tenth_img.webp';
import ElevenImg from '../../../../assets/eleventh_img.webp';
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
import { retailerProductData } from '../../Brand/utils';
import { useSelector, useDispatch } from 'react-redux';
import BabyAndKids from '../../common/BabyAndKids';
import { getRetailerProductDetailsAction } from '../../../../actions/retailerActions';
// import { setProductActiveValue } from '../../../../redux/Retailer/Brand/RetailerBrandSelector';

function ProductDetails() {
  const setActiveOpen = false; //useSelector(setProductActiveValue);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [zoomProduct, setZoomProduct] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  console.log('isOpen', isOpen);
  const [setActiveOpenVal, setSetActiveOpenVal] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setSetActiveOpenVal(setActiveOpen);
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

  useEffect(() => {
    dispatch(getRetailerProductDetailsAction(params?.id));
  }, []);

  useEffect(() => {
    const findData = retailerProductData.find((ele) => {
      return ele.id === Number(params?.id);
    });

    if (findData) {
      setProfileData(findData);
    }
  }, [retailerProductData, params?.id]);

  const handleConnectButton = () => {
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
                          <h1>{profileData?.name}</h1>
                          <div className="product_status">
                            <span
                              className={`status-pill w-auto ${
                                profileData?.status === 'Connected' &&
                                'pill_connected'
                              } ${
                                profileData?.status === 'Pending' &&
                                'pill_pending'
                              } ${
                                profileData?.status === 'Declined' &&
                                'pill_declined'
                              } ${
                                profileData?.status === 'Not Connected' &&
                                'pill_not_connected'
                              }`}
                            >
                              {profileData?.status}
                            </span>
                            &nbsp; &nbsp;
                          </div>
                        </div>

                        <div
                          className="buttons"
                          onClick={() => handleActiveButton()}
                        >
                          {/* <div className="channels-area">
                                                    <div className="ca_area">
                                                        <div>
                                                            Add/remove channels
                                                        </div>

                                                        <div
                                                            className="icon"
                                                            style={{
                                                                position:
                                                                    'absolute',
                                                                left: '85%',
                                                                top: '20%',
                                                            }}
                                                        >
                                                            <img
                                                                src={ArrowDown}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="ca_area_data"
                                                        style={{
                                                            display:
                                                                isActiveButton
                                                                    ? 'block'
                                                                    : 'none',
                                                        }}
                                                    >
                                                        <div className="dropdown_inner">
                                                            <ul>
                                                                <li className="shopify_link">
                                                                    <span>
                                                                        Shopify
                                                                    </span>
                                                                    <a href="retailer-setting.html">
                                                                        Add
                                                                    </a>
                                                                </li>
                                                                <li className="shopify_link">
                                                                    <span>
                                                                        Shopify
                                                                    </span>
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
                                                                            <h3 className="plus_icon">
                                                                                +
                                                                            </h3>
                                                                        </span>
                                                                        Add new
                                                                        channel
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div> */}
                          {profileData?.status === 'Not Connected' && (
                            <button
                              className="button button-dark"
                              onClick={() => handleConnectButton()}
                            >
                              Connect
                            </button>
                          )}
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
                                  <img src={singleSquareImage} alt="" />
                                </picture>
                              </div>
                            </div>
                            <div className="product-detail_info">
                              <div className="ttl">Brand</div>
                              <p className="txt">Alpha One</p>
                            </div>
                          </div>
                          <div className="product-detail product-detail--stock">
                            <div className="product-detail_info">
                              <div className="ttl">9 in stock</div>
                              <p className="txt">4 variants</p>
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
                              <p className="txt">$5.00-$7.50</p>
                            </div>
                          </div>

                          <div className="product-detail product-detail--mspr">
                            <div className="product-detail_info">
                              <div className="ttl">MSRP</div>
                              <p className="txt">$15.00-$17.50</p>
                            </div>
                          </div>
                          <div className="product-detail product-detail--ship-from">
                            <div className="product-detail_info">
                              <div className="ttl">Ships From</div>
                              <p className="txt">Wilsonville, Oregon</p>
                            </div>
                          </div>
                          {/* <!--Added latest detail--> */}

                          {/* <!--Added latest detail end--> */}
                        </div>
                      </div>
                      <div className="product">
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
                                <div
                                  className={`swiper-slide swiper-slide-visible ${
                                    slideIndex === 0 &&
                                    'swiper-slide-thumb-active'
                                  } `}
                                  onClick={() => setSlideIndex(0)}
                                  style={{
                                    marginBottom: '1px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={FirstImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className={`swiper-slide swiper-slide-visible ${
                                    slideIndex === 1 &&
                                    'swiper-slide-thumb-active'
                                  } `}
                                  onClick={() => setSlideIndex(1)}
                                  style={{
                                    marginBottom: '1px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={SecondImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className={`swiper-slide swiper-slide-visible ${
                                    slideIndex === 2 &&
                                    'swiper-slide-thumb-active'
                                  } `}
                                  onClick={() => setSlideIndex(2)}
                                  style={{
                                    marginBottom: '1px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={ThirdImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className={`swiper-slide swiper-slide-visible ${
                                    slideIndex === 3 &&
                                    'swiper-slide-thumb-active'
                                  } `}
                                  onClick={() => setSlideIndex(3)}
                                  style={{
                                    marginBottom: '1px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={FourImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className={`swiper-slide swiper-slide-visible ${
                                    slideIndex === 4 &&
                                    'swiper-slide-thumb-active'
                                  } `}
                                  onClick={() => setSlideIndex(4)}
                                  style={{
                                    marginBottom: '1px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={FiveImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className={`swiper-slide swiper-slide-visible ${
                                    slideIndex === 5 &&
                                    'swiper-slide-thumb-active'
                                  } `}
                                  onClick={() => setSlideIndex(5)}
                                  style={{
                                    marginBottom: '1px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={SixImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className={`swiper-slide swiper-slide-visible ${
                                    slideIndex === 6 &&
                                    'swiper-slide-thumb-active'
                                  } `}
                                  onClick={() => setSlideIndex(6)}
                                  style={{
                                    marginBottom: '1px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={SevenImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className={`swiper-slide swiper-slide-visible ${
                                    slideIndex === 7 &&
                                    'swiper-slide-thumb-active'
                                  } `}
                                  onClick={() => setSlideIndex(7)}
                                  style={{
                                    marginBottom: '1px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={EightImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className={`swiper-slide swiper-slide-visible ${
                                    slideIndex === 8 &&
                                    'swiper-slide-thumb-active'
                                  } `}
                                  onClick={() => setSlideIndex(8)}
                                  style={{
                                    marginBottom: '1px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={NineImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className={`swiper-slide swiper-slide-visible ${
                                    slideIndex === 9 &&
                                    'swiper-slide-thumb-active'
                                  } `}
                                  onClick={() => setSlideIndex(9)}
                                  style={{
                                    marginBottom: '1px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={TenImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className={`swiper-slide swiper-slide-visible ${
                                    slideIndex === 10 &&
                                    'swiper-slide-thumb-active'
                                  } `}
                                  onClick={() => setSlideIndex(10)}
                                  style={{
                                    marginBottom: '1px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={ElevenImg} alt="" />
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
                                      <img src={FirstImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className="swiper-slide"
                                  role="group"
                                  aria-label="2 / 11"
                                  style={{
                                    width: '480px',
                                  }}
                                >
                                  <div
                                    className="image"
                                    onClick={() => handalSwipeLeftImage()}
                                  >
                                    <picture>
                                      <img src={SecondImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className="swiper-slide swiper-slide-prev"
                                  role="group"
                                  aria-label="3 / 11"
                                  style={{
                                    width: '480px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={ThirdImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className="swiper-slide swiper-slide-visible swiper-slide-active"
                                  role="group"
                                  aria-label="4 / 11"
                                  style={{
                                    width: '480px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={FourImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className="swiper-slide swiper-slide-next"
                                  role="group"
                                  aria-label="5 / 11"
                                  style={{
                                    width: '480px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={FiveImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className="swiper-slide"
                                  role="group"
                                  aria-label="6 / 11"
                                  style={{
                                    width: '480px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={SixImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className="swiper-slide"
                                  role="group"
                                  aria-label="7 / 11"
                                  style={{
                                    width: '480px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={SevenImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className="swiper-slide"
                                  role="group"
                                  aria-label="8 / 11"
                                  style={{
                                    width: '480px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={EightImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className="swiper-slide"
                                  role="group"
                                  aria-label="9 / 11"
                                  style={{
                                    width: '480px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={NineImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className="swiper-slide"
                                  role="group"
                                  aria-label="10 / 11"
                                  style={{
                                    width: '480px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={TenImg} alt="" />
                                    </picture>
                                  </div>
                                </div>

                                <div
                                  className="swiper-slide"
                                  role="group"
                                  aria-label="11 / 11"
                                  style={{
                                    width: '480px',
                                  }}
                                >
                                  <div className="image">
                                    <picture>
                                      <img src={ElevenImg} alt="" />
                                    </picture>
                                  </div>
                                </div>
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
                                  slideIndex === 10 && 'swiper-button-disabled'
                                }`}
                                role="button"
                                aria-label="Next slide"
                                aria-controls="swiper-wrapper-9a3741016670105a3b"
                                aria-disabled={slideIndex === 10}
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
                              <span>Baby &amp; Kids</span>
                              &gt;
                              <span>Bath &amp; Safety</span>
                              &gt;
                              <span>Bab Monitors</span>
                            </div>
                          </div>
                          <h2 className="h1">
                            Simple summertime activities for kids. No guesswork,
                            no planning… just a lot of living in the moment.
                          </h2>
                          <p>
                            Running out of ideas to tame your little ones? Have
                            a little box of summer activity ideas for kids.
                            Guaranteed to keep them busy.
                          </p>
                          <div className="for">
                            <div className="line">
                              <strong>Activities:</strong> 60 ideas
                            </div>
                            <div className="line">
                              <strong>Content:</strong> 30 natural, wood coins,
                              each measuring 1 ½ inches round
                            </div>
                            <div className="line">
                              <strong>Dimension:</strong> 4.8&quot; l x 2&quot;
                              w x 1.8&quot;h
                            </div>
                            <div className="line">
                              <strong>Weight:</strong> 0.32 lb
                            </div>
                          </div>

                          <div className="product-category">
                            <strong>Tags:</strong>
                            <div className="tags">
                              <div className="tag">Baby &amp; Kids</div>
                              <div className="tag">toys</div>
                              <div className="tag">games</div>
                            </div>
                          </div>

                          <div className="shipped-info">
                            <p>
                              Product will be shipped by <span>Fusion</span>{' '}
                              within <span>1-3 days</span>
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
                              <tr>
                                <td>
                                  <div className="image image--cover image--1-1">
                                    <picture>
                                      <img src={summer} alt="" />
                                    </picture>
                                  </div>
                                </td>
                                <td>
                                  <div className="txt">Wood</div>
                                </td>
                                <td>
                                  <div className="txt">Blue</div>
                                </td>
                                <td>
                                  <div className="txt">V1N-071A-0122-01</div>
                                </td>
                                <td>
                                  <div className="txt">813687021196</div>
                                </td>
                                <td>
                                  <div className="txt">
                                    {/* <!--Red color for icon by default, orange with className icon--orange--> */}
                                    5
                                    <div className="tooltip-icon-orange">
                                      <div className="icon">
                                        <img src={danger} />
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="txt">$5.00-$7.50</div>
                                </td>

                                <td>
                                  <div className="txt">$15.00-$17.50</div>
                                </td>

                                <td>
                                  <div className="txt">
                                    <button className="pc-status-button pc-status-button--add-list">
                                      Add to Cart
                                    </button>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="image image--cover image--1-1">
                                    <picture>
                                      <img src={summer} alt="" />
                                    </picture>
                                  </div>
                                </td>
                                <td>
                                  <div className="txt">Wood</div>
                                </td>
                                <td>
                                  <div className="txt">Blue</div>
                                </td>
                                <td>
                                  <div className="txt">V1N-071A-0122-01</div>
                                </td>
                                <td>
                                  <div className="txt">813687021196</div>
                                </td>
                                <td>
                                  <div className="txt">
                                    {/* <!--Red color for icon by default, orange with className icon--orange, add className to '.txt"'--> */}
                                    0
                                    <div className="tooltip-icon-danger">
                                      <div className="icon">
                                        <img src={redDanger} />
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="txt">$5.00-$7.50</div>
                                </td>

                                <td>
                                  <div className="txt">$15.00-$17.50</div>
                                </td>

                                <td>
                                  <div className="txt">
                                    <div className="tooltip btn-tooltip">
                                      <div className="tooltip-icon tooltip-icon-info">
                                        <button
                                          className="pc-status-button pc-status-button--add-list"
                                          disabled
                                        >
                                          Add to Cart
                                        </button>
                                      </div>
                                      <div className="tooltip_text">
                                        <p>
                                          You are not connected with the brand.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="image image--cover image--1-1">
                                    <picture>
                                      <img src={summer} alt="" />
                                    </picture>
                                  </div>
                                </td>
                                <td>
                                  <div className="txt">Wood</div>
                                </td>
                                <td>
                                  <div className="txt">Blue</div>
                                </td>
                                <td>
                                  <div className="txt">V1N-071A-0122-01</div>
                                </td>
                                <td>
                                  <div className="txt">813687021196</div>
                                </td>
                                <td>
                                  <div className="txt">
                                    {/* <!--Red color for icon by default, orange with className icon--orange, add className to '.txt"'--> */}
                                    0
                                    <div className="tooltip-icon-danger">
                                      <div className="icon">
                                        <img src={redDanger} />
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="txt">$5.00-$7.50</div>
                                </td>

                                <td>
                                  <div className="txt">$15.00-$17.50</div>
                                </td>

                                <td>
                                  <div className="txt">
                                    <div className="tooltip btn-tooltip">
                                      <div className="tooltip-icon tooltip-icon-info">
                                        <button
                                          className="pc-status-button pc-status-button--add-list"
                                          disabled
                                        >
                                          Add to Cart
                                        </button>
                                      </div>
                                      <div className="tooltip_text">
                                        <p>No stock available.</p>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="image image--cover image--1-1">
                                    <picture>
                                      <img src={summer} alt="" />
                                    </picture>
                                  </div>
                                </td>
                                <td>
                                  <div className="txt">Wood</div>
                                </td>
                                <td>
                                  <div className="txt">Blue</div>
                                </td>
                                <td>
                                  <div className="txt">V1N-071A-0122-01</div>
                                </td>
                                <td>
                                  <div className="txt">813687021196</div>
                                </td>
                                <td>
                                  <div className="txt">
                                    {/* <!--Red color for icon by default, orange with className icon--orange, add className to '.txt"'--> */}
                                    0
                                    <div className="tooltip-icon-danger">
                                      <div className="icon">
                                        <img src={redDanger} />
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="txt">$5.00-$7.50</div>
                                </td>

                                <td>
                                  <div className="txt">$15.00-$17.50</div>
                                </td>

                                <td>
                                  <div className="txt">
                                    <div className="tooltip btn-tooltip">
                                      <div className="tooltip-icon tooltip-icon-info">
                                        <button
                                          className="pc-status-button pc-status-button--add-list"
                                          disabled
                                        >
                                          Add to Cart
                                        </button>
                                      </div>
                                      <div className="tooltip_text">
                                        <p>Already added to cart.</p>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
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
                                    <strong>[Range]</strong>. Product ships from{' '}
                                    <strong>[Shipping City]</strong>,{' '}
                                    <strong>[Shipping State]</strong>.
                                  </p>
                                  <p>
                                    Shipping costs will be a flat rate of{' '}
                                    <strong>[$Shipping Costs]</strong> for the
                                    first product and{' '}
                                    <strong>[$Incremental Fee]</strong> for each
                                    additional product within the same order.
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
                                        <img src={singleSquareImage} alt="" />
                                      </picture>
                                    </a>
                                  </div>
                                  <div>
                                    <h2 className="brand-title">
                                      <a
                                        href="brand-single.html"
                                        className="link-text"
                                      >
                                        1Store
                                      </a>
                                    </h2>
                                    <div className="brand-single_about-item">
                                      <p>
                                        <strong>Shipping Location: </strong>
                                        Wilsonville, Oregon
                                      </p>
                                      <p>
                                        <strong>Website: </strong>
                                        <a href="#">www.2store.com</a>
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
                                      <a href="#">Baby &amp; Kids</a>
                                      <a href="#">Toys &amp; Games</a>
                                      <a href="#">Apparel &amp; Accessories</a>
                                    </div>
                                  </div>
                                  <div className="brand-single_about-item">
                                    <div className="brand-single_about-item-title">
                                      Brand Values:
                                    </div>
                                    <div className="brand-single_about-item-wrap">
                                      <a href="#">Handmade</a>
                                      <a href="#">Made in USA</a>
                                      <a href="#">Small Batch</a>
                                      <a href="#">Women Owned</a>
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
                                                                View All
                                                                Products (31)
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
                                <h3>
                                  We are a company that seeks to cure “I’m
                                  bored” in kids by creating covertly
                                  educational activities.
                                </h3>
                                <p>
                                  Thousands of boxes of open-ended fun have been
                                  sold worldwide. With wholesale products in
                                  every US State, The Idea Box Kids has been
                                  featured in Country Living, American
                                  Farmhouse, MaryJanes Farm, and on sites like
                                  Fodor’s Travel, The Week, Cafe Mom, Simply
                                  Real Moms and more.
                                </p>
                                <p>
                                  We have been a business owner for 23 years
                                  with 16 of those in ecommerce. We are
                                  passionate advocate for all things handmade
                                  wholesale, for both the sellers that create
                                  and the buyers that buy.
                                </p>
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
                      productImages={slideIndex}
                    />
                  )}
                </div>
              </section>
            </main>
            {isOpen && (
              <div className="bottom-notify active">
                <div className="container">
                  <div className="bottom-notify_text">
                    <p>Request to connect sent to DeniumWear</p>
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
