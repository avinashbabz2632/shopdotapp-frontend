import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRetailerRequestData,
  selectStatusViseData,
} from '../../../../redux/Brand/Retailer/retailerSelector';
import { setStatusViseFilter } from '../../../../redux/Brand/Retailer/retailerSlice';
import downArrow from '../../images/icons/icon-chevron--down.svg';
import MoreIcon from '../../images/icons/icon-more.svg';
import ProductCartEmpty from '../../images/product-card-empty.svg';
import closeIcon from '../../../Brand/images/icons/icon-close.svg';
import searchIcon from '../../images/icons/icon-search.svg';
import {
  requestAccessData,
  requestAccessDataColumn,
  requestAccessDataColumnGrid,
} from '../utils';
import { getRetailerRequestForAccess } from '../../../../actions/brandActions';
import { Table, Tag, Space } from 'antd';
import DataTable from 'react-data-table-component';
import RightIcon from '../../images/icons/icon-chevron--right.svg';
import LeftIcon from '../../images/icons/icon-chevron--left.svg';
import InviteRetailer from '../../common/components/InviteRetailerHeaderModal';
import { NavLink } from 'react-router-dom';
import { setCurrentRetailerProfile } from '../../../../redux/Brand/RetailerProfile/retailerProfileSlice';

export default function RequestAccess(props) {
  const { height } = props;
  const dispatch = useDispatch();
  const [filterStatus, setFilterStatus] = useState('all');
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [searchVal, setSearchVal] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const newData = useSelector(selectRetailerRequestData);
  const [sortColumn, setSortColumn] = useState('full_name');
  const changeStatusFilter = (value) => {
    setFilterStatus(value);
    dispatch(setStatusViseFilter(value));
  };
  const fetchRetailerRequests = () => {
        const query = {
          paging: {
            limit: limit,
            offset: offset,
          },
          sort: [
            ["full_name",sortColumn == "full_name" ? "ASC" : "DESC"],
            ["created_at",sortColumn == "created_at" ? "ASC" : "DESC"],
            ["status_updated_on",sortColumn == "status_updated_on" ? "ASC" : "DESC"]
          ],
        query: {},
        filter: [],
        };
        if(searchVal){
            query.query.search = searchVal
        }
        if(filterStatus != "all"){
            query.filter.push({
                "field": "invite_status",
                "operator": "eq",
                "value": filterStatus
            })
        }
        dispatch(getRetailerRequestForAccess(query));
      };
    useEffect(() => {
        fetchRetailerRequests();
        const page = (newData.count / limit);
        if(page % 1 === 0){
            setTotalPage(page)
        }else{
            setTotalPage(Math.floor(page)+1)
        }
        getTotalPage()
    }, [filterStatus, searchVal, limit, offset, sortColumn]);

  const handleSearch = (e) => {
    const searchInput = e.target.value.trim(); // remove extra spaces from start/end
    setSearchVal(searchInput);
  };

  const opencloseRetailerModal = useCallback(() => {
    setIsOpen(!modalIsOpen);
  }, [modalIsOpen]);
  const converDate = (d) => {
    const date = new Date(d);
    return date.toLocaleDateString('en-US');
  };
  const handleLimit = (e) => {
    setLimit(e.target.value);
    setOffset(0);
  };
  const getTotalPage = () => {
    const options = [];
    for (let i = 1; i <= totalPage; i++) {
      const selected = offset + 1 == i ? true : false;
      options.push(
        <option value={i} selected={selected}>
          {i}
        </option>
      );
    }
    return options;
  };
  const handlePageNumber = (e) => {
    setOffset(e.target.value - 1);
  };
  const incrementPageNumber = () => {
    let page = offset + 1;
    if (page < totalPage) {
      setOffset(page);
    }
  };
  const decrementPageNumber = () => {
    if (offset > 0) setOffset(offset - 1);
  };
  const handleSort = (column) => {
    setSortColumn(column);
  };
  return (
    <>
      <InviteRetailer
        modalIsOpen={modalIsOpen}
        opencloseRetailerModal={opencloseRetailerModal}
      />
      <div className="products_content mw-100">
        <div className="products_head">
          <div className="breadcrumbs_wrap">
            {/* <ul className="breadcrumbs">
                            <li>
                                {' '}
                                <a href="#">Home</a>
                            </li>
                            <li>
                                {' '}
                                <span>Connected Retailers</span>
                            </li>
                        </ul> */}
          </div>
          <div className="products_head-content">
            <div className="title">
              <h1>Requests for Access</h1>
              <div className="number">{newData?.count}</div>
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
            <div className="products_head-retailer-types">
              <a
                href="#"
                className={`retailer-type  ${
                  filterStatus == 'all' ? 'active' : ''
                }`}
                onClick={() => changeStatusFilter('all')}
              >
                All
              </a>
              <a
                href="#"
                className={`retailer-type  ${
                  filterStatus == 'conncted' ? 'active' : ''
                }`}
                onClick={() => changeStatusFilter('conncted')}
              >
                Connected
              </a>
              <a
                href="#"
                className={`retailer-type  ${
                  filterStatus == 'pending' ? 'active' : ''
                }`}
                onClick={() => changeStatusFilter('pending')}
              >
                Pending
              </a>
              <a
                href="#"
                className={`retailer-type  ${
                  filterStatus == 'declined' ? 'active' : ''
                }`}
                onClick={() => changeStatusFilter('declined')}
              >
                Declined
              </a>
            </div>
          </div>
        </div>
        {/* <Table columns={requestAccessDataColumn} dataSource={data} /> */}
        {/* <DataTable columns={requestAccessDataColumnGrid} data={data} /> */}
        <div className="products_body">
          <div className="content_area">
            <div
              className="datalist-table_wrap wide-scroll dynamic_height"
              style={{ height }}
            >
              <table className="table datalist-table retailer-data-table retailer">
                <thead className="nodark-bg sticky-thead ">
                  <tr>
                    <th>
                      <div
                        className="title"
                        onClick={() => handleSort('full_name')}
                      >
                        Retailer Name
                        <span className="sort">
                          <img src={downArrow} />
                        </span>
                      </div>
                    </th>
                    <th>
                      <div
                        className="title"
                        onClick={() => handleSort('created_at')}
                      >
                        Date Requested
                        <span className="sort">
                          <img src={downArrow} />
                        </span>
                      </div>
                    </th>
                    <th>
                      <div
                        className="title"
                        onClick={() => handleSort('status_updated_on')}
                      >
                        Date Approved/Declined
                        <span className="sort">
                          <img src={downArrow} />
                        </span>
                      </div>
                    </th>
                    <th>
                      <div className="title">Status</div>
                    </th>
                    <th>
                      <div className="title">Actions</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {newData?.count > 0 &&
                    newData.rows.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            <div className="store">
                              <div className="number_wrap">
                                <a href="#" className="number">
                                  <img
                                    src={item.user.retailer_details.store_photo}
                                    className="avtar-img"
                                  />
                                </a>
                              </div>
                              <div className="retailer_web_link">
                                <NavLink
                                  to={`/brand/retailer-profile/${item?.id}`}
                                  onClick={() => {
                                    dispatch(setCurrentRetailerProfile(item));
                                  }}
                                >
                                  {item.user.full_name}
                                </NavLink>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="txt">
                              {converDate(item.created_at)}
                            </div>
                          </td>
                          <td>
                            {item.status_updated_on
                              ? converDate(item.status_updated_on)
                              : '-'}
                          </td>
                          <td>
                            <span
                              className={`status-pill ${
                                item.invite_status == 'pending'
                                  ? 'pill_pending'
                                  : item.invite_status == 'accepted'
                                  ? 'pill_connected'
                                  : item.invite_status == 'declined'
                                  ? 'pill_declined'
                                  : item.invite_status == ''
                                  ? 'pill_not_connected'
                                  : ''
                              }`}
                            >
                              {item.invite_status.charAt(0).toUpperCase() + item.invite_status.slice(1)}
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <div className="dropdown">
                                <div className="dropdown_header">
                                  <img className="icon" src={MoreIcon} />
                                </div>
                                <div className="dropdown_body left-open">
                                  <div className="dropdown_inner">
                                    <ul>
                                      <li>
                                        <a href="#">View/Edit</a>
                                      </li>
                                      <li>
                                        <a href="mailto:someone@example.com">
                                          Message
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

                  {newData?.count === 0 && (
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
                              <div className="button-group">
                                <button
                                  className="button"
                                  onClick={opencloseRetailerModal}
                                >
                                  Invite Retailers
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
            {newData?.count > 0 && (
              <div className="pagination_wrap mt-0">
                <div className="pagination br-top-none">
                  <div className="pagination_per">
                    <select name="per" id="per" onChange={handleLimit}>
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
                    <select name="per" id="per" onChange={handlePageNumber}>
                      {getTotalPage()}
                    </select>
                    <div className="pagination-title">of {totalPage}</div>
                    <button
                      className="pagination-arrow pagination-arrow-prev"
                      onClick={decrementPageNumber}
                    >
                      <img className="icon" src={LeftIcon} />
                    </button>
                    <button
                      className="pagination-arrow pagination-arrow-next"
                      onClick={incrementPageNumber}
                    >
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

RequestAccess.propTypes = {
  openInviteRetailer: PropTypes.bool,
  setOpenInviteretailer: PropTypes.func,
  changeSubTab: PropTypes.func,
  height: PropTypes.any,
}
