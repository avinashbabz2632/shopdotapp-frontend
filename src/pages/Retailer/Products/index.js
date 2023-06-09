import React, { useEffect, useState } from 'react';
import RetailerHeader from '../common/components/RetailerHeader';
import SideBar from './SideBar';
import close from '../.././Retailer/images/icons/icon-close.png';
import { retailerProductData } from '../Brand/utils';
import RightArrow from '../../Retailer/images/icons/icon-chevron--right.svg';
import LeftArrow from '../../Retailer/images/icons/icon-chevron--left.svg';
import emptyTable from '../../Brand/images/product-card-empty.svg';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import searchIcon from '../../Brand/images/icons/icon-search.svg';
import closeIcon from '../../Brand/images/icons/icon-close.svg';
import BabyAndKids from '../common/BabyAndKids';
import { Link } from 'react-router-dom';
import { getRetailerProductsAction } from '../../../actions/retailerActions';
import { selectRetailerProducts } from '../../../redux/Retailer/Brand/Products/selectRetailerBrandProductsSelector';
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
} from '../../../redux/Brand/Retailer/retailerSelector';
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
} from '../../../redux/Brand/Retailer/retailerSlice';

function Products() {
  const dispatch = useDispatch();
  const productData = useSelector(selectRetailerProducts);
  const productSearchValue = useSelector(productSearchQuery);

  const selectedBrandFilters = useSelector(selectSelectedBrandFilters);
  const selectedBrandStatusFilters = useSelector(
    selectSelectedBrandStatusFilters
  );
  const selectedDaysToFullfilFilters = useSelector(
    selectSelectedDaysToFullfillFilters
  );
  const selectedStockFilters = useSelector(selectSelectedStockFilters);
  const selectedWSPFilter = useSelector(selectSelectedWSPFilters);
  const selectedMSRPFilter = useSelector(selectSelectedMSRPFilters);
  const [setActiveOpenVal, setSetActiveOpenVal] = useState(false);
  const [imgStates, setImgStates] = useState(
    Array(retailerProductData.length).fill(0)
  );
  const pageLimit = useSelector(selectLimit);
  const offset = useSelector(selectOffset);

  const { count, rows } = productData;

  let pageCount = 0;
  if (rows && rows.length > 0) {
    pageCount = Math.ceil(count / pageLimit);
  }

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let index = 1; index <= pageCount; index++) {
      const selected = offset + 1 === index;
      const optionItem = <option key={`${index}`} value={index} selected={selected}>
        {index}
      </option> 
      pageNumbers.push(optionItem);
    }
    return pageNumbers;
  }

  const fetchRetailerProducts = () => {
    const body = {
      paging: {
        limit: pageLimit,
        offset: offset,
      },
      query: {},
      filter: [],
    };
    dispatch(getRetailerProductsAction(body));
  };

  useEffect(() => {
    dispatch(setLimit(10));
    dispatch(setOffset(0));
    fetchRetailerProducts();
  }, []);

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

  const handleClearFilter = () => {
    dispatch(setSelectedBrandFilters([]));
    dispatch(setSelectedBrandStatusFilters([]));
    dispatch(setSelectedDaysToFullfilFilters([]));
    dispatch(setSelectedStockFilters([]));
    dispatch(setSelectedWSPFilter([]));
    dispatch(setSelectedMSRPFilter([]));
  };

  useEffect(() => {
    handleClearFilter();
  }, []);

  const ProductSearchBar = (e) => {
    const searchQuery = e.target.value?.toLowerCase();
    dispatch(setProductSearchQuery(searchQuery));
  };
  const clearProductFilter = (e) => {
    if (e === 'filterByBrand') {
      dispatch(setSelectedBrandFilters([]));
    } else if (e === 'statusViseFilter') {
      dispatch(setSelectedBrandStatusFilters([]));
    } else if (e === 'wspFilter') {
      dispatch(setSelectedWSPFilter([]));
    } else if (e === 'msrpFilter') {
      dispatch(setSelectedMSRPFilter([]));
    } else if (e === 'stockFilter') {
      dispatch(setSelectedStockFilters([]));
    } else if (e === 'daysFullfillFilter') {
      dispatch(setSelectedDaysToFullfilFilters([]));
    }
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

  const getTextOfBrandFilter = () => {

  }

  return (
    <>
      <div className="wrapper">
        <RetailerHeader />
        {setActiveOpenVal === true ? (
          <BabyAndKids />
        ) : (
          <main className="content">
            <section className="section products">
              <SideBar />
              <div className="products_content update_products_content">
                <div className="products_head">
                  <div className="products_head-content">
                    <div className="title">
                      <h1>Products</h1>
                      <div className="number">{count}</div>
                    </div>
                    <div className="products_head-search">
                      <form action="#" className="search_form">
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
                    </div>
                  </div>
                </div>
                {(!isEmpty(selectedBrandFilters) ||
                  !isEmpty(selectedBrandStatusFilters) ||
                  !isEmpty(selectedWSPFilter) ||
                  !isEmpty(selectedMSRPFilter) ||
                  !isEmpty(selectedStockFilters) ||
                  !isEmpty(selectedDaysToFullfilFilters)) && (
                  <div className="products_mid">
                    <div className="products_active-filters mb-0">
                      {!isEmpty(selectedBrandFilters) && (
                        <div className="products_active-filter">
                          <div className="txt">
                            <b>Brand:</b> {selectedBrandFilters?.map(el => el.brand_details.store_name).join(', ')}
                          </div>
                          <button
                            className="products_active-remove"
                            onClick={() => clearProductFilter('filterByBrand')}
                          >
                            <img src={close} />
                          </button>
                        </div>
                      )}
                      {!isEmpty(selectedBrandStatusFilters) && (
                        <div className="products_active-filter">
                          <div className="txt">
                            <b>BrandStatus:</b> {selectedBrandStatusFilters?.map(el => el.name).join(', ')}
                          </div>
                          <button
                            className="products_active-remove"
                            onClick={() =>
                              clearProductFilter('statusViseFilter')
                            }
                          >
                            <img src={close} />
                          </button>
                        </div>
                      )}
                      {!isEmpty(selectedWSPFilter) && (
                        <div className="products_active-filter">
                          <div className="txt">
                            <b>WSP:</b> {selectedWSPFilter?.join(', ')}
                          </div>
                          <button
                            className="products_active-remove"
                            onClick={() => clearProductFilter('wspFilter')}
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
                            onClick={() => clearProductFilter('msrpFilter')}
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
                            onClick={() => clearProductFilter('stockFilter')}
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
                              clearProductFilter('daysFullfillFilter')
                            }
                          >
                            <img src={close} />
                          </button>
                        </div>
                      )}
                      {(!isEmpty(selectedBrandFilters) ||
                        !isEmpty(selectedBrandStatusFilters) ||
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
                      // height: dynamicHeight,
                      paddingBottom: '80px',
                    }}
                  >
                    {rows && rows?.length === 0 && (
                      <tr>
                        <td className="no-data-cell" colSpan="10">
                          <div className="product-card-empty_body">
                            <p>There are no orders that meet your criteria.</p>
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
                      rows.length > 0 &&
                      rows?.map((item, index) => {
                        return (
                          <div key={index} className="pc">
                            <div className="pc_main">
                              <div className="pc_head">
                                <div className="pc_head-item">
                                  <span
                                    className={`status-pill ${
                                      getStatus(item) === 'Not Connected' &&
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
                                              imgIndex === imgStates[index]
                                                ? 'swiper-slide-active'
                                                : ''
                                            }`}
                                            role="group"
                                            aria-label={`${imgIndex + 1} / 3`}
                                            style={{
                                              width: '206px',
                                            }}
                                          >
                                            <div className="image">
                                              <Link
                                                to={`/retailer/brand/single-product-details/${item?.id}`}
                                              >
                                                <picture>
                                                  <img
                                                    src={getImage(item)}
                                                    alt=""
                                                  />
                                                </picture>
                                              </Link>
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
                                      aria-disabled={imgStates[index] === 0}
                                      onClick={() =>
                                        handalSwipeLeftImage(index)
                                      }
                                    >
                                      <img className="icon" src={LeftArrow} />
                                    </div>
                                    <div
                                      className={`swiper-button-next ${
                                        imgStates[index] === 2 &&
                                        'swiper-button-disabled'
                                      }`}
                                      aria-disabled={imgStates[index] === 2}
                                      onClick={() =>
                                        handalSwipeRightImage(index)
                                      }
                                    >
                                      <img className="icon" src={RightArrow} />
                                    </div>
                                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                                      {item?.product_images.map(
                                        (_, bulletIndex) => (
                                          <span
                                            key={bulletIndex}
                                            className={`swiper-pagination-bullet ${
                                              imgStates[index] === bulletIndex
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
                                    {/* <span className="swiper-notification"></span>
                                                                    <span className="swiper-notification"></span> */}
                                  </div>
                                  {/* <div className="pc_links">
                                                                    <a
                                                                        href="product-single.html"
                                                                        className="pc_links-product"
                                                                    >
                                                                        <svg className="icon">
                                                                            <use xlink:href="images/sprite.svg#icon-link"></use>
                                                                        </svg>
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        className="pc_links-gallery"
                                                                    >
                                                                        <svg className="icon">
                                                                            <use xlink:href="images/sprite.svg#icon-zoom"></use>
                                                                        </svg>
                                                                    </a>
                                                                </div> */}
                                </div>
                              </div>
                              <div className="pc_footer">
                                <div className="pc-title">{item?.title}</div>
                                <div className="pc_price-area">
                                  <div className="pc_price-item">
                                    <label>WSP</label>
                                    <label className="red-text">
                                      $ {item?.price_wps ?? '0.00'}
                                    </label>
                                  </div>
                                  <div className="pc_price-item">
                                    <label>MSRP</label>
                                    <label className="black-text">
                                      $ {item?.price_msrp ?? '0.00'}
                                    </label>
                                  </div>
                                </div>
                                <div className="pc_brand-item">
                                  <a href="brand-single.html">
                                    <img src={item.icon} />
                                    <span className="brand-name">
                                      {item?.text || 'NA'}
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <div className="pagination_wrap mt-0">
                    <div className="pagination">
                      <div className="pagination_per">
                        <select
                          name="per"
                          id="per"
                          onChange={onItemPerPageChange}
                        >
                          <option value="10" selected="">
                            10
                          </option>
                          <option value="20" selected="">
                            20
                          </option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                        <div className="pagination-title">items per page</div>
                      </div>
                      <div className="pagination_nav">
                        <div className="pagination-title">page</div>
                        <select name="per" id="per" onChange={onPageChange}>
                          {getPageNumbers()}
                        </select>
                        <div className="pagination-title">of {pageCount}</div>
                        <button
                          className="pagination-arrow pagination-arrow-prev"
                          onClick={decrementPageNumber}
                        >
                          <div className="icon">
                            <img className="icon" src={LeftArrow} />
                          </div>
                        </button>
                        <button
                          className="pagination-arrow pagination-arrow-next"
                          onClick={incrementPageNumber}
                        >
                          <div className="icon">
                            <img className="icon" src={RightArrow} />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
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
