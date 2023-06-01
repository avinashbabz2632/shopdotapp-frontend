import React, { useState, useEffect } from 'react';
import RetailerHeader from '../common/components/RetailerHeader';
import searchIcon from '../../Brand/images/icons/icon-search.svg';
import closeIcon from '../../Brand/images/icons/icon-close.svg';
import SideBar from './Sidebar';
import SideFilter from './SideFilter';
import RightIcon from '../../Brand/images/icons/icon-chevron--right.svg';
import LeftIcon from '../../Brand/images/icons/icon-chevron--left.svg';
import { Link } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRetailerBrandProductsListAction,
  getRetailerBrandValuesAction,
  retailerNewConnectionRequestAction,
} from '../../../actions/retailerActions';
import {
  selectRetailerBrandProductsList,
  selectRetailerBrandValuesFilter,
  selectRetailerBrandValuesList,
  selectRetailerInviteStatusFilter,
  selectRetailerPricingFilter,
  selectRetailerStateFilter,
  selectSendRetailerNewConnectionRequest,
  selectRetailerNewConnectionSuccess,
  selectRetailerNewConnectionError,
} from '../../../redux/Retailer/Brand/Products/selectRetailerBrandProductsSelector';
import mailIcon from '../../../assets/images/icons/mail-icon.svg';
import {
  getCountriesAction,
  getStatesAction,
} from '../../../actions/generalActions';
import { selectCountries } from '../../../redux/General/Countries/getCountriesSelector';
import {
  clearBrandValuesFilter,
  clearPricingFilter,
  clearStateFilter,
  resetNewConnectionRequestState,
} from '../../../redux/Retailer/Brand/Products/retailerBrandProductsSlice';
import SuccessfulModel from './SuccessfulModel';
import { ToastContainer } from 'react-toastify';
import { selectUserDetails } from '../../../redux/user/userSelector';

function Brands() {
  const windowSize = useWindowSize();
  const dispatch = useDispatch();
  const products = useSelector(selectRetailerBrandProductsList);
  const sendingNewConnectionRequest = useSelector(
    selectSendRetailerNewConnectionRequest
  );
  const newConnectionRequestSuccess = useSelector(
    selectRetailerNewConnectionSuccess
  );
  const newConnectionRequestError = useSelector(
    selectRetailerNewConnectionError
  );

  const { count, rows = [] } = products || {};
  const productList = rows;
  const countriesOption = useSelector(selectCountries);
  const [productsActiveFilterHeight, setProductsActiveFilterHeight] =
    useState(0);
  const [otherDivsHeight, setOtherDivsHeight] = useState(0);
  const [dynamicHeight, setDynamicHeight] = useState(10);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [inviteStatus, setInviteStatus] = useState('All');
  const brandValuesFilter = useSelector(selectRetailerBrandValuesFilter);
  const pricingFilter = useSelector(selectRetailerPricingFilter);
  const stateFilter = useSelector(selectRetailerStateFilter);
  const userDetails = useSelector(selectUserDetails);
  const [search, setSearch] = useState('');
  const [openRequestModal, setOpenRequestModal] = useState(false);

  const prepareFilter = () => {
    const filterArr = [];
    if (brandValuesFilter && brandValuesFilter.length > 0) {
      const obj = {
        field: 'brand_value',
        operator: 'in',
        value: brandValuesFilter.map((e) => e.id.toString()),
      };
      filterArr.push(obj);
    }
    if (pricingFilter && pricingFilter.length > 0) {
      const obj = {
        field: 'retailer_pricing',
        operator: 'in',
        value: pricingFilter,
      };
      filterArr.push(obj);
    }
    if (stateFilter) {
      const obj = { field: 'state', operator: 'eq', value: stateFilter };
      filterArr.push(obj);
    }
    if (inviteStatus !== 'All') {
      const obj = {
        field: 'invite_status',
        operator: 'eq',
        value: inviteStatus.toLowerCase(),
      };
      filterArr.push(obj);
    }
    return filterArr;
  };

  const fetchProducts = () => {
    const requestBody = {
      paging: {
        limit: limit,
        offset: offset,
      },
      filter: prepareFilter(),
    };
    if (search.length > 0) {
      requestBody.query = { search };
    }
    dispatch(getRetailerBrandProductsListAction(requestBody));
  };

  useEffect(() => {
    fetchProducts();
    dispatch(getRetailerBrandValuesAction());
    dispatch(getCountriesAction());
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [brandValuesFilter, pricingFilter, stateFilter, inviteStatus]);

  useEffect(() => {
    if (search && search.length >= 3) {
      fetchProducts();
    } else if (search.length === 0) {
      fetchProducts();
    }
  }, [search]);

  useEffect(() => {
    if (!sendingNewConnectionRequest && newConnectionRequestSuccess && !newConnectionRequestError) {
      setOpenRequestModal(true);
    } else if (!sendingNewConnectionRequest && !newConnectionRequestSuccess && newConnectionRequestError) {
      dispatch(resetNewConnectionRequestState());
    }
  }, [
    sendingNewConnectionRequest,
    newConnectionRequestSuccess,
    newConnectionRequestError,
  ]);

  useEffect(() => {
    if (countriesOption && countriesOption.length > 0) {
      const firstCountry = countriesOption[0];
      const country_id = firstCountry.id;
      dispatch(getStatesAction(country_id));
    } else {
      dispatch(getCountriesAction());
    }
  }, [countriesOption]);

  useEffect(() => {
    const headerHeight = document.querySelector('.header')?.offsetHeight;
    const productsHeadHeight =
      document.querySelector('.products_head')?.offsetHeight;
    const paginationHeight =
      document.querySelector('.pagination')?.offsetHeight;
    const productsBodyHeight =
      document.querySelector('.products_body')?.offsetHeight;
    setProductsActiveFilterHeight(productsActiveFilterHeight);
    const otherDivsHeight =
      headerHeight +
      productsHeadHeight +
      productsActiveFilterHeight +
      paginationHeight +
      (productsBodyHeight -
        document.querySelector('.products_body').clientHeight);
    setOtherDivsHeight(otherDivsHeight);
    const dynamicHeight = window.innerHeight - otherDivsHeight - 100;
    setDynamicHeight(dynamicHeight);
  }, [windowSize]);

  const handleSearch = (e) => {
    setSearch(e.target.value.trim());
  };

  const productStatusViseFilter = (status) => {
    setInviteStatus(status);
  };
  const getProductCategory = (product) => {
    let text = 'NA';
    if (product && product.length > 0) {
      const firstProduct = product[0];
      if (firstProduct && firstProduct.hasOwnProperty('product_categories')) {
        const productCategories = firstProduct?.product_categories;
        if (productCategories && productCategories.length > 0) {
          const firstCategory = productCategories[0];
          if (
            firstCategory &&
            firstCategory.hasOwnProperty('parent_category')
          ) {
            const firstParentCategory = firstCategory?.parent_category;
            if (
              firstParentCategory &&
              firstParentCategory.hasOwnProperty('name')
            ) {
              text = firstParentCategory?.name;
            }
          }
        }
      }
    }
    return text;
  };

  const getBrandValues = (brandValues) => {
    let text = 'NA';
    if (brandValues && brandValues.length > 0) {
      const firstBrandValue = brandValues[0];
      if (firstBrandValue) {
        const storeValue = firstBrandValue?.store_values;
        if (storeValue) {
          text = storeValue?.name;
        }
      }
    }
    return text;
  };

  const getInviteStatus = (status) => {
    let text = '';
    if (status) {
      text = status.charAt(0).toUpperCase() + status.slice(1);
    }
    return text;
  };

  const handleSendNewConnectRequestClick = (invitee_id) => {
    const data = {
      invitee_id: invitee_id,
      invite_via: 'retailer_request',
    }
    dispatch(retailerNewConnectionRequestAction(data));
  };

  const _closeRequestModal = () => {
    setOpenRequestModal(false);
    dispatch(resetNewConnectionRequestState());
  };

  const showConnectButton = (status, invitee_id) => {
    if (status && status.toLowerCase() === 'not connected') {
      return (
        <button
          className="button button-dark connect-brand"
          onClick={() => handleSendNewConnectRequestClick(invitee_id)}
        >
          Connect
        </button>
      );
    }
    return null;
  };

  const _clearBrandValuesFilter = (type) => {
    if (type === 'brand_values') {
      dispatch(clearBrandValuesFilter());
    } else if (type === 'pricing') {
      dispatch(clearPricingFilter());
    } else if (type === 'state') {
      dispatch(clearStateFilter());
    } else if (type === 'invite_status') {
      setInviteStatus('All');
    }
  };

  return (
    <>
      <div className="sidebar-hidden">
        <div className="wrapper">
          <RetailerHeader />
          <main className="content">
            <section className="section products">
              <SideFilter component={<SideBar />}></SideFilter>
              <div className="products_content">
                <div className="products_head">
                  <div className="products_head-content">
                    <div className="title">
                      <h1>Brands</h1>
                      <div className="number">{count}</div>
                    </div>
                    <div className="products_head-search">
                      <form className="search_form">
                        <div className="search_form-input">
                          <input
                            type="text"
                            placeholder="Search brands"
                            value={search}
                            onChange={handleSearch}
                          />
                        </div>
                        <button type="cancel" className="search_form-button">
                          <div className="icon">
                            {/* <img src={cancel} /> */}
                          </div>
                        </button>
                        <button type="submit"></button>
                        <div className="icon">
                          <img src={searchIcon} />
                        </div>
                      </form>
                    </div>
                    <div className="products_head-brand-types">
                      <a
                        href="#"
                        data-val="4"
                        // className="brand-type statusFilter"
                        className={`brand-type ${
                          inviteStatus === 'All' ? 'active' : ''
                        }`}
                        onClick={() => productStatusViseFilter('All')}
                      >
                        All
                      </a>
                      <a
                        href="#"
                        data-val="1"
                        className="brand-type statusFilter"
                        className={`brand-type ${
                          inviteStatus === 'Connected' ? 'active' : ''
                        }`}
                        onClick={() => productStatusViseFilter('Connected')}
                      >
                        Connected
                      </a>
                      <a
                        href="#"
                        data-val="3"
                        className="brand-type statusFilter"
                        className={`brand-type ${
                          inviteStatus === 'Pending' ? 'active' : ''
                        }`}
                        onClick={() => productStatusViseFilter('Pending')}
                      >
                        Pending
                      </a>
                      <a
                        href="#"
                        data-val="0"
                        className="brand-type statusFilter"
                        className={`brand-type ${
                          inviteStatus === 'Not Connected' ? 'active' : ''
                        }`}
                        onClick={() => productStatusViseFilter('Not Connected')}
                      >
                        Not connected
                      </a>
                      <a
                        href="#"
                        data-val="2"
                        className="brand-type statusFilter"
                        className={`brand-type ${
                          inviteStatus === 'Declined' ? 'active' : ''
                        }`}
                        onClick={() => productStatusViseFilter('Declined')}
                      >
                        Declined
                      </a>
                    </div>
                  </div>
                </div>
                <div className="products_body">
                  {brandValuesFilter && brandValuesFilter.length > 0 && (
                    <div className="products_active-filters">
                      <div className="products_active-filter">
                        <div className="txt">
                          <b>Brand Values:</b>{' '}
                          {brandValuesFilter.map((e) => e.name).join(',')}
                        </div>
                        <button className="products_active-remove">
                          <div className="icon">
                            <img
                              src={closeIcon}
                              alt=""
                              style={{
                                marginBottom: '8px',
                              }}
                            />
                          </div>
                        </button>
                      </div>

                      <button
                        className="products_active-remove-all"
                        onClick={() => _clearBrandValuesFilter('brand_values')}
                      >
                        Clear Filters
                      </button>
                    </div>
                  )}
                  {pricingFilter && pricingFilter.length > 0 && (
                    <div className="products_active-filters">
                      <div className="products_active-filter">
                        <div className="txt">
                          <b>Pricing:</b>{' '}
                          {pricingFilter.map((e) => e).join(',')}
                        </div>
                        <button className="products_active-remove">
                          <div className="icon">
                            <img
                              src={closeIcon}
                              alt=""
                              style={{
                                marginBottom: '8px',
                              }}
                            />
                          </div>
                        </button>
                      </div>

                      <button
                        className="products_active-remove-all"
                        onClick={() => _clearBrandValuesFilter('pricing')}
                      >
                        Clear Filters
                      </button>
                    </div>
                  )}
                  {stateFilter && (
                    <div className="products_active-filters">
                      <div className="products_active-filter">
                        <div className="txt">
                          <b>State:</b> {stateFilter}
                        </div>
                        <button className="products_active-remove">
                          <div className="icon">
                            <img
                              src={closeIcon}
                              alt=""
                              style={{
                                marginBottom: '8px',
                              }}
                            />
                          </div>
                        </button>
                      </div>

                      <button
                        className="products_active-remove-all"
                        onClick={() => _clearBrandValuesFilter('state')}
                      >
                        Clear Filters
                      </button>
                    </div>
                  )}
                  {inviteStatus && inviteStatus !== 'All' && (
                    <div className="products_active-filters">
                      <div className="products_active-filter">
                        <div className="txt">
                          <b>Invite Status:</b> {inviteStatus}
                        </div>
                        <button className="products_active-remove">
                          <div className="icon">
                            <img
                              src={closeIcon}
                              alt=""
                              style={{
                                marginBottom: '8px',
                              }}
                            />
                          </div>
                        </button>
                      </div>

                      <button
                        className="products_active-remove-all"
                        onClick={() => _clearBrandValuesFilter('invite_status')}
                      >
                        Clear Filters
                      </button>
                    </div>
                  )}
                  <div
                    className="brands-table_wrap dynamic_height"
                    // style={{ height: 100 }}
                  >
                    <table className="table brands-table">
                      <thead className="sticky-thead">
                        <tr>
                          <th>
                            <div className="title">
                              Brand name
                              <svg className="icon">
                                {/* <use href="https://shopdot.digitalsmac.com/public/front/retailer/images/sprite.svg"></use> */}
                              </svg>
                            </div>
                          </th>

                          <th>
                            <div className="title">
                              Product Category
                              <svg className="icon">
                                {/* <use href="https://shopdot.digitalsmac.com/public/front/retailer/images/sprite.svg"></use> */}
                              </svg>
                            </div>
                          </th>
                          <th>
                            <div className="title">
                              Brand Values
                              <svg className="icon">
                                {/* <use href="https://shopdot.digitalsmac.com/public/front/retailer/images/sprite.svg"></use> */}
                              </svg>
                            </div>
                          </th>
                          <th>
                            <div className="title">
                              Status
                              <svg className="icon">
                                {/* <use href="https://shopdot.digitalsmac.com/public/front/retailer/images/sprite.svg"></use> */}
                              </svg>
                            </div>
                          </th>
                          <th className="align-right">
                            <div className="title">Actions</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(productList ?? []).map((item, i) => {
                          const { invited_user, invite_status } = item || {};
                          const {
                            brand_details = {},
                            product = [],
                            brand_values = [],
                          } = invited_user || {};
                          const {} = product || [];
                          return (
                            <tr key={i}>
                              <td>
                                <div className="store">
                                  <div className="number_wrap">
                                    <a href="#" className="number">
                                      <img
                                        className="avtar-img"
                                        src={brand_details?.store_logo}
                                        alt="Brand"
                                      />
                                    </a>
                                  </div>
                                  <Link to="/retailer/brand/single" state={{user_id: invited_user?.id}}>
                                    {brand_details?.store_name}
                                  </Link>
                                </div>
                              </td>

                              <td>
                                <div className="txt tooltip-tbl">
                                  {getProductCategory(product)}
                                  <div className="tooltip">
                                    <span className="more">
                                      + {product?.length - 1} more
                                    </span>
                                  </div>
                                  {/* <div className="tooltip_text">
                                    <label>Home & Garden</label>
                                    <label>Home & Garden</label>
                                  </div> */}
                                </div>
                              </td>
                              <td>
                                <div className="txt">
                                  {getBrandValues(brand_values)}
                                </div>
                              </td>
                              <td>
                                <div className="status">
                                  <span
                                    className={`status-pill ${
                                      invite_status === 'Not Connected' &&
                                      'pill_not_connected'
                                    } ${
                                      invite_status === 'Connected' &&
                                      'pill_connected'
                                    } ${
                                      invite_status === 'pending' &&
                                      'pill_pending'
                                    } ${
                                      invite_status === 'Declined' &&
                                      'pill_declined'
                                    }`}
                                  >
                                    {getInviteStatus(invite_status)}
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="buttons">
                                  {showConnectButton(invite_status, invited_user?.id)}
                                  <button className="button message-brand">
                                    <img src={mailIcon} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="pagination_wrap mt-0">
                    <div className="pagination br-top-none">
                      <div className="pagination_per">
                        <select name="per" id="per" defaultValue={'20'}>
                          <option value="20">20</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                        <div className="pagination-title">items per page</div>
                      </div>
                      <div className="pagination_nav">
                        <div className="pagination-title">page</div>
                        <select name="per" id="per" defaultValue={'1'}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                        <div className="pagination-title">of 2</div>
                        <button className="pagination-arrow pagination-arrow-prev">
                          <div className="icon">
                            <img className="icon" src={LeftIcon} />
                          </div>
                        </button>
                        <button className="pagination-arrow pagination-arrow-next">
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
          </main>
        </div>
      </div>
      <SuccessfulModel
        modalIsOpen={openRequestModal}
        closeSuccessfulModel={_closeRequestModal}
      />
      <ToastContainer />
    </>
  );
}

export default Brands;
