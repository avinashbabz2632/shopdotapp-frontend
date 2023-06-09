import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import '../../Style/brand.style.scss';
import '../../Style/brand.media.scss';
import '../../Style/brand.dev.scss';
import downArrow from '../../images/icons/icon-chevron--down.svg';
import closeIcon from '../../../Brand/images/icons/icon-close.svg';
import searchIcon from '../../images/icons/icon-search.svg';
import MoreIcon from '../../images/icons/icon-more.svg';
import { connectedData } from '../utils';
import { useSelector } from 'react-redux';
import {
  selectCategoryViseData,
  selectStateViseData,
  selectSalesViseData,
} from '../../../../redux/Brand/Retailers/retailerSelector';
import ProductCartEmpty from '../../images/product-card-empty.svg';

import RightIcon from '../../images/icons/icon-chevron--right.svg';
import LeftIcon from '../../images/icons/icon-chevron--left.svg';
import InviteRetailer from '../../common/components/InviteRetailerHeaderModal';
import DeclineRetailerModel from '../../common/components/DeclineRetailerModel';
import { NavLink } from 'react-router-dom';

export default function Connected(props) {
  const { height, changeSubTab } = props;
  const [data, setData] = useState(connectedData);
  const [dataClone, setDataClone] = useState(connectedData);
  const categoryFilterData = useSelector(selectCategoryViseData);
  const stateFilterData = useSelector(selectStateViseData);
  const salesFilterData = useSelector(selectSalesViseData);
  const [searchVal, setSearchVal] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isDeclineModelOpen, setIsDeclineModelOpen] = useState(false);

  useEffect(() => {
    if (
      categoryFilterData.length > 0 &&
      stateFilterData.length > 0 &&
      salesFilterData?.min !== '' &&
      salesFilterData?.max !== ''
    ) {
      const newArr = connectedData.filter((item) => {
        if (categoryFilterData.includes(item.retailer_category)) {
          return item;
        }
      });
      const newArr1 = newArr.filter((item) => {
        if (stateFilterData.includes(item.state)) {
          return item;
        }
      });
      const newArr2 = newArr1.filter((ele) => {
        if (
          ele?.all_time_sale >= salesFilterData?.min &&
          ele?.all_time_sale <= salesFilterData?.max
        ) {
          return ele;
        }
      });
      setData([...newArr2]);
    } else if (categoryFilterData.length > 0) {
      const newArr = connectedData.filter((item) => {
        if (categoryFilterData.includes(item.retailer_category)) {
          return item;
        }
      });
      setData([...newArr]);
    } else if (stateFilterData.length > 0) {
      const newArr = connectedData.filter((item) => {
        if (stateFilterData.includes(item.state)) {
          return item;
        }
      });
      setData([...newArr]);
    } else if (salesFilterData?.min !== '') {
      const newArr = connectedData.filter((ele) => {
        if (ele?.all_time_sale >= salesFilterData?.min) {
          return ele;
        }
      });
      setData([...newArr]);
    } else if (salesFilterData?.max !== '') {
      const newArr = connectedData.filter((ele) => {
        if (ele?.all_time_sale <= salesFilterData?.max) {
          return ele;
        }
      });
      setData([...newArr]);
    } else {
      setData([...connectedData]);
    }
  }, [categoryFilterData, stateFilterData, salesFilterData]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value?.toLowerCase();
    if (searchQuery) {
      const searchWords = searchQuery.split(' ');
      const searchValue = dataClone.filter((ele) => {
        return searchWords.every((word) => {
          return ele?.retailer_name?.toLowerCase().includes(word);
        });
      });
      setData(searchValue);
      setSearchVal(searchQuery);
    } else {
      setData(dataClone);
      setSearchVal('');
    }
  };

  const opencloseRetailerModal = useCallback(() => {
    setIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  const opencloseDeclineRetailerModal = useCallback(() => {
    setIsDeclineModelOpen(!isDeclineModelOpen);
  }, [isDeclineModelOpen]);

  return (
    <>
      <InviteRetailer
        modalIsOpen={modalIsOpen}
        opencloseRetailerModal={opencloseRetailerModal}
      />
      <DeclineRetailerModel
        modalIsOpen={isDeclineModelOpen}
        opencloseDeclineRetailerModal={opencloseDeclineRetailerModal}
      />
      <div className="products_content">
        <div className="products_head">
          <div className="breadcrumbs_wrap"></div>
          <div className="products_head-content">
            <div className="title">
              <h1>Connected Retailers</h1>
              <div className="number">{data?.length}</div>
            </div>
            <div className="products_head-search">
              <div className="search_form">
                <div className="search_form-input">
                  <input
                    type="text"
                    placeholder="Search retailers"
                    onChange={handleSearch}
                    value={searchVal}
                  />
                </div>
                {searchVal?.length !== 0 ? (
                  <>
                    <div
                      className="close_icon_search"
                      onClick={() =>
                        handleSearch({
                          target: {
                            value: '',
                          },
                        })
                      }
                    >
                      <img className="product_clear_icon" src={closeIcon} />
                    </div>
                  </>
                ) : (
                  <img className="icon" src={searchIcon} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="products_body">
          <div className="content_area">
            <div
              className="datalist-table_wrap wide-scroll dynamic_height"
              style={{ height }}
            >
              <table className="table datalist-table retailer">
                <thead className="nodark-bg sticky-thead">
                  <tr>
                    <th>
                      <div className="title">
                        Retailer Name
                        <span className="sort">
                          <img src={downArrow} />
                        </span>
                      </div>
                    </th>
                    <th>
                      <div className="title">
                        Products Assigned
                        <span className="sort">
                          <img src={downArrow} />
                        </span>
                      </div>
                    </th>

                    <th>
                      <div className="title">
                        All Time Sales
                        <span className="sort">
                          <img src={downArrow} />
                        </span>
                      </div>
                    </th>
                    <th>
                      <div className="title">
                        Retailer Category
                        <span className="sort">
                          <img src={downArrow} />
                        </span>
                      </div>
                    </th>

                    <th>
                      <div className="title">
                        State
                        <span className="sort">
                          <img src={downArrow} />
                        </span>
                      </div>
                    </th>
                    <th>
                      <div className="title">Status</div>
                    </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.length > 0 &&
                    data.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            <div className="store">
                              <div className="number_wrap">
                                <a href="#" className="number">
                                  <img
                                    src={item.productUrl}
                                    className="avtar-img"
                                  />
                                </a>
                              </div>
                              <div className="retailer_web_link">
                                <NavLink
                                  to={`/brand/retailer-profile/${item?.id}`}
                                >
                                  {item.retailer_name}
                                </NavLink>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>{item.assigned_product}</div>
                          </td>

                          <td>
                            <div>{item.all_time_sale}</div>
                          </td>
                          <td>{item.retailer_category}</td>

                          <td>{item.state}</td>
                          <td>
                            <span className="status-pill pill_connected w-auto">
                              {item.status}
                            </span>
                          </td>
                          <td>
                            {/* <div className="actions">
                                                        <div className="dropdown">
                                                            <div className="dropdown_header">
                                                                <img
                                                                    className="icon"
                                                                    src={
                                                                        MoreIcon
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="dropdown_body left-open">
                                                                <div className="dropdown_inner">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="profile.html">
                                                                                View/Edit
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                className="message-box"
                                                                            >
                                                                                Message
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                className="decline-box"
                                                                            >
                                                                                Decline
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                            <div className="actions">
                              <div className="dropdown">
                                <div className="dropdown_header">
                                  <img className="icon" src={MoreIcon} />
                                </div>
                                <div className="dropdown_body left-open dropd">
                                  <div className="dropdown_inner dropd">
                                    <ul>
                                      <li>
                                        <a href="profile.html">View/Edit</a>
                                      </li>
                                      <li>
                                        <a
                                          href="mailto:someone@example.com"
                                          className="message-box"
                                        >
                                          Message
                                        </a>
                                      </li>
                                      <li
                                        onClick={() =>
                                          opencloseDeclineRetailerModal()
                                        }
                                      >
                                        <a href="#" className="decline-box">
                                          Decline
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  {data.length === 0 && (
                    <tr>
                      <td colSpan="7" className="p-0">
                        <div className="content_area">
                          <div className="card-empty">
                            <div className="card-empty_body">
                              <div className="image mb-5">
                                <picture>
                                  <img src={ProductCartEmpty} alt="" />
                                </picture>
                              </div>
                              <h3>
                                You currently have no requests for access from
                                any retailer.
                              </h3>
                              <p>
                                Invite your retailers to join ShopDot so they
                                can start selling your products on their
                                website.
                              </p>
                              <div>
                                <button
                                  className="button me-2"
                                  onClick={opencloseRetailerModal}
                                >
                                  Invite Retailers
                                </button>
                                <button
                                  className="button dark"
                                  onClick={() =>
                                    changeSubTab
                                      ? changeSubTab('request')
                                      : () => {}
                                  }
                                >
                                  View Requests for Access
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {data.length > 0 && (
              <div className="pagination_wrap mt-0">
                <div className="pagination br-top-none">
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
                      <img className="icon" src={LeftIcon} />
                    </button>
                    <button className="pagination-arrow pagination-arrow-next">
                      <img className="icon" src={RightIcon} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

Connected.propTypes = {
  height: PropTypes.any,
  changeSubTab: PropTypes.fun,
};
