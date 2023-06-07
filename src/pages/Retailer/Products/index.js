import React, { useEffect, useState, useLayoutEffect } from 'react';
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
import useWindowSize from '../../../hooks/useWindowSize';
// import { selectProductFilter } from '../../../redux/Retailer/Products/RetailerProductsSelector';
// import {
//     daysFullfillFilterClear,
//     msrpFilterClear,
//     retailerfilterByBrandClear,
//     statusViseClear,
//     stockFilterClear,
//     wspFilterClear,
// } from '../../../redux/Retailer/Products/RetailerProductsSlice';
// import { setProductActiveValue } from '../../../redux/Retailer/Brand/RetailerBrandSelector';
import BabyAndKids from '../common/BabyAndKids';
import { Link } from 'react-router-dom';
import { getRetailerProductsAction } from '../../../actions/retailerActions';
import { selectRetailerProducts } from '../../../redux/Retailer/Brand/Products/selectRetailerBrandProductsSelector';
import { selectBrandFilters } from '../../../redux/Brand/Retailer/retailerSelector';

function Products() {
  const windowSize = useWindowSize();
  const dispatch = useDispatch();
  const productData = useSelector(selectRetailerProducts);
  const ProductFilters = []; //useSelector(selectProductFilter);
  const setActiveOpen = false; //useSelector(setProductActiveValue);
  const [data, setData] = useState(retailerProductData);
  const [dataClone, setDataClone] = useState(retailerProductData);
  const [searchVal, setSearchVal] = useState('');
  // const [dynamicHeight, setDynamicHeight] = useState(0);
  const [filterByBrand, setFilterByBrand] = useState([]);
  const [statusViseFilter, setStatusViseFilter] = useState([]);
  const [wspFilter, setWspFilter] = useState([]);
  const [msrpFilter, setMsrpFilter] = useState([]);
  const [stockFilter, setStockFilter] = useState([]);
  const [daysFullfillFilter, setDaysFullfillFilter] = useState([]);
  const [productfilterData, setProductFilterData] = useState([]);
  const [productFilterClone, setProductFilterClone] = useState([]);
  const [setActiveOpenVal, setSetActiveOpenVal] = useState(false);
  const [imgStates, setImgStates] = useState(
    Array(retailerProductData.length).fill(0)
  );
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const { count, rows } = productData;

  const fetchRetailerProducts = () => {
    const body = {
      paging: {
        limit: limit,
        offset: offset,
      },
      query: {
        search: searchVal ? searchVal : 'full',
      },
      filter: [],
    };
    // if (searchVal !== '') {
    //   body.query = {
    //     search: searchVal,
    //   };
    // }
    dispatch(getRetailerProductsAction(body));
  };

  useEffect(() => {
    fetchRetailerProducts();
  }, []);

  useEffect(() => {
    // setSetActiveOpenVal(setActiveOpen);
  }, [setActiveOpen]);

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
    // setFilterByBrand([]);
    // setStatusViseFilter([]);
    // setWspFilter([]);
    // setMsrpFilter([]);
    // setStockFilter([]);
    // setDaysFullfillFilter([]);
    // dispatch(retailerfilterByBrandClear());
    // dispatch(statusViseClear());
    // dispatch(wspFilterClear());
    // dispatch(msrpFilterClear());
    // dispatch(stockFilterClear());
    // dispatch(daysFullfillFilterClear());
  };

  useEffect(() => {
    // handleClearFilter();
  }, []);

  useEffect(() => {
    // setFilterByBrand(ProductFilters?.filterByBrand);
    // setStatusViseFilter(ProductFilters?.statusViseFilter);
    // setWspFilter(ProductFilters?.wspFilter);
    // setMsrpFilter(ProductFilters?.msrpFilter);
    // setStockFilter(ProductFilters?.stockFilter);
    // setDaysFullfillFilter(ProductFilters?.daysFullfillFilter);
    // const productArray = [
    //   'filterByBrand',
    //   'statusViseFilter',
    //   'wspFilter',
    //   'msrpFilter',
    //   'stockFilter',
    //   'daysFullfillFilter',
    // ];
    // const retailerProductData = [];
    // productArray.forEach((e) => {
    //   if (e === 'filterByBrand') {
    //     ProductFilters.filterByBrand?.map((ele) => {
    //       data.map((e) => {
    //         e.brandValues === ele && retailerProductData.push(e);
    //       });
    //       setProductFilterData(retailerProductData);
    //       setProductFilterClone(retailerProductData);
    //     });
    //   }
    //   if (e === 'statusViseFilter') {
    //     ProductFilters.statusViseFilter?.map((ele) => {
    //       data.map((e) => {
    //         e.status === ele && retailerProductData.push(e);
    //       });
    //       setProductFilterData(retailerProductData);
    //       setProductFilterClone(retailerProductData);
    //     });
    //   }
    //   if (e === 'wspFilter') {
    //     ProductFilters.wspFilter?.map((ele) => {
    //       data.map((e) => {
    //         e.brandValues === ele && retailerProductData.push(e);
    //       });
    //       setProductFilterData(retailerProductData);
    //       setProductFilterClone(retailerProductData);
    //     });
    //   }
    //   if (e === 'msrpFilter') {
    //     ProductFilters.msrpFilter?.map((ele) => {
    //       data.map((e) => {
    //         e.brandValues === ele && retailerProductData.push(e);
    //       });
    //       setProductFilterData(retailerProductData);
    //       setProductFilterClone(retailerProductData);
    //     });
    //   }
    //   if (e === 'stockFilter') {
    //     ProductFilters.stockFilter?.map((ele) => {
    //       data.map((e) => {
    //         e.brandValues === ele && retailerProductData.push(e);
    //       });
    //       setProductFilterData(retailerProductData);
    //       setProductFilterClone(retailerProductData);
    //     });
    //   }
    //   if (e === 'daysFullfillFilter') {
    //     ProductFilters.daysFullfillFilter?.map((ele) => {
    //       data.map((e) => {
    //         e.brandValues === ele && retailerProductData.push(e);
    //       });
    //       setProductFilterData(retailerProductData);
    //       setProductFilterClone(retailerProductData);
    //     });
    //   }
    // });
  }, [ProductFilters]);

  const ProductSearchBar = (e) => {
    const searchQuery = e.target.value?.toLowerCase();
    if (searchQuery) {
      const searchWords = searchQuery.split(' ');
      const searchValue = dataClone.filter((ele) => {
        return searchWords.every((word) => {
          return ele?.name?.toLowerCase().includes(word);
        });
      });
      setData(searchValue);
      setSearchVal(searchQuery);
    } else {
      setData(dataClone);
      setSearchVal('');
    }
    if (searchQuery) {
      const searchWords = searchQuery.split(' ');
      const searchValue = productFilterClone.filter((ele) => {
        return searchWords.every((word) => {
          return ele?.name?.toLowerCase().includes(word);
        });
      });
      setProductFilterData(searchValue);
      setSearchVal(searchQuery);
    } else {
      setProductFilterData(productFilterClone);
      setSearchVal('');
    }
  };
  const clearProductFilter = (e) => {
    if (e === 'filterByBrand') {
      // setFilterByBrand([]);
      // dispatch(retailerfilterByBrandClear());
    } else if (e === 'statusViseFilter') {
      // setStatusViseFilter([]);
      // dispatch(statusViseClear());
    } else if (e === 'wspFilter') {
      // setWspFilter([]);
      // dispatch(wspFilterClear());
    } else if (e === 'msrpFilter') {
      // setMsrpFilter([]);
      // dispatch(msrpFilterClear());
    } else if (e === 'stockFilter') {
      // setStockFilter([]);
      // dispatch(stockFilterClear());
    } else if (e === 'daysFullfillFilter') {
      // setDaysFullfillFilter([]);
      // dispatch(daysFullfillFilterClear());
    }
  };

  const getStatus = (item) => {
    let status = 'Connected';
    switch (item.status) {
      case '1':
        status = 'Connected';
        break;
      case '0':
        status = 'Not Connected';
        break;
      case '0':
        status = 'Pending';
        break;
      default:
        break;
    }
    return status;
  };

  const getImage = (item) => {
      let imgUrl;
      const {product_images} = item || {};
      if(product_images && product_images.length > 0) {
          imgUrl = product_images[0]?.src;
      }
      return imgUrl;
  };

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
                      <div className="number">
                        {rows?.length}
                      </div>
                    </div>
                    <div className="products_head-search">
                      <form action="#" className="search_form">
                        <div className="search_form-input">
                          <input
                            type="text"
                            placeholder="Search product"
                            value={searchVal}
                            onChange={(e) => ProductSearchBar(e)}
                          />
                        </div>
                        {searchVal?.length !== 0 ? (
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
                {(!isEmpty(filterByBrand) ||
                  !isEmpty(statusViseFilter) ||
                  !isEmpty(wspFilter) ||
                  !isEmpty(msrpFilter) ||
                  !isEmpty(stockFilter) ||
                  !isEmpty(daysFullfillFilter)) && (
                  <div className="products_mid">
                    <div className="products_active-filters mb-0">
                      {!isEmpty(filterByBrand) && (
                        <div className="products_active-filter">
                          <div className="txt">
                            <b>Brand:</b> {filterByBrand?.join(', ')}
                          </div>
                          <button
                            className="products_active-remove"
                            onClick={() => clearProductFilter('filterByBrand')}
                          >
                            <img src={close} />
                          </button>
                        </div>
                      )}
                      {!isEmpty(statusViseFilter) && (
                        <div className="products_active-filter">
                          <div className="txt">
                            <b>BrandStatus:</b> {statusViseFilter?.join(', ')}
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
                      {!isEmpty(wspFilter) && (
                        <div className="products_active-filter">
                          <div className="txt">
                            <b>WSP:</b> {wspFilter?.join(', ')}
                          </div>
                          <button
                            className="products_active-remove"
                            onClick={() => clearProductFilter('wspFilter')}
                          >
                            <img src={close} />
                          </button>
                        </div>
                      )}
                      {!isEmpty(msrpFilter) && (
                        <div className="products_active-filter">
                          <div className="txt">
                            <b>MSRP:</b> {msrpFilter?.join(', ')}
                          </div>
                          <button
                            className="products_active-remove"
                            onClick={() => clearProductFilter('msrpFilter')}
                          >
                            <img src={close} />
                          </button>
                        </div>
                      )}
                      {!isEmpty(stockFilter) && (
                        <div className="products_active-filter">
                          <div className="txt">
                            <b>Stock:</b>
                            {stockFilter?.join(', ')}
                          </div>
                          <button
                            className="products_active-remove"
                            onClick={() => clearProductFilter('stockFilter')}
                          >
                            <img src={close} />
                          </button>
                        </div>
                      )}
                      {!isEmpty(daysFullfillFilter) && (
                        <div className="products_active-filter">
                          <div className="txt">
                            <b>Days to Fulfill:</b>
                            {daysFullfillFilter?.join(', ')}
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
                      {(!isEmpty(filterByBrand) ||
                        !isEmpty(statusViseFilter) ||
                        !isEmpty(wspFilter) ||
                        !isEmpty(msrpFilter) ||
                        !isEmpty(stockFilter) ||
                        !isEmpty(daysFullfillFilter)) && (
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
                    {data?.length === 0 && (
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
                                      item?.status === 'Not Connected' &&
                                      'pill_not_connected'
                                    } ${
                                      item?.status === '1' && 'pill_connected'
                                    } ${
                                      item?.status === 'Pending' &&
                                      'pill_pending'
                                    } ${
                                      item?.status === 'Declined' &&
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
                                      {item?.product_images.map((_, imgIndex) => (
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
                                        ))}
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
                                      {item?.product_images.map((_, bulletIndex) => (
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
                                        ))}
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
                                      $ {item?.price_wps}
                                    </label>
                                  </div>
                                  <div className="pc_price-item">
                                    <label>MSRP</label>
                                    <label className="black-text">
                                      $ {item?.price_msrp}
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
                        <select name="per" id="per">
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
                        <select name="per" id="per">
                          <option value="1" selected="">
                            1
                          </option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                        <div className="pagination-title">of 2</div>
                        <button className="pagination-arrow pagination-arrow-prev">
                          <div className="icon">
                            <img className="icon" src={LeftArrow} />
                          </div>
                        </button>
                        <button className="pagination-arrow pagination-arrow-next">
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
