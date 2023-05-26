import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatusViseData } from '../../../../redux/Brand/Retailers/retailerSelector';
import { setStatusViseFilter } from '../../../../redux/Brand/Retailers/retailerSlice';
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
import { Table, Tag, Space } from 'antd';
import DataTable from 'react-data-table-component';
import RightIcon from '../../images/icons/icon-chevron--right.svg';
import LeftIcon from '../../images/icons/icon-chevron--left.svg';
import InviteRetailer from '../../common/components/InviteRetailerHeaderModal';
import { NavLink } from 'react-router-dom';
import { getRetailerRequestAction } from '../../../../actions/brandActions';
import moment from 'moment';

export default function RequestAccess(props) {
  const { height } = props;
  const dispatch = useDispatch();
  const [filterStatus, setFilterStatus] = useState('all');
  const [data, setData] = useState(requestAccessData);
  const [dataClone, setDataClone] = useState(requestAccessData);
  const filterdData = useSelector(selectStatusViseData);
  const [searchVal, setSearchVal] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentData, setCurrentData] = useState({});

  const changeStatusFilter = (value) => {
    setFilterStatus(value);
    dispatch(setStatusViseFilter(value));
  };

  useEffect(() => {
    initalCall();
  }, []);

  const initalCall = async () => {
    const response = await getRetailerRequestAction({
      paging: {
        limit: 10,
        offset: 0,
      },
      sort: [
        ['full_name', 'DESC'],
        ['created_at', 'ASC'],
        ['status_updated_on', 'DESC'],
      ],
      query: {},
      filter: [
        // {
        //   field: 'invite_status',
        //   operator: 'eq',
        //   value: 'pending',
        // },
      ],
    });
    if (response.status === 200) {
      console.log(response, 'response');
      setCurrentData(response.data.data);
    }
  };

  useEffect(() => {
    if (filterdData[0] == 'all') {
      setData([...requestAccessData]);
    } else if (filterdData[0] == 'conncted') {
      const newData = requestAccessData.filter((item) => {
        if (item.status == 'Connected') {
          return item;
        }
      });
      setData([...newData]);
    } else if (filterdData[0] == 'pending') {
      const newData = requestAccessData.filter((item) => {
        if (item.status == 'Pending') {
          return item;
        }
      });
      setData([...newData]);
    } else if (filterdData[0] == 'declined') {
      const newData = requestAccessData.filter((item) => {
        if (item.status == 'Declined') {
          return item;
        }
      });
      setData([...newData]);
    }
  }, [filterdData]);

  const handleSearch = (e) => {
    const searchInput = e.target.value.trim(); // remove extra spaces from start/end
    const searchValue = dataClone.filter((ele) => {
      const nameWithoutSpaces = ele.name.replace(/\s+/g, ''); // remove all spaces from name
      const searchInputWithoutSpaces = searchInput.replace(/\s+/g, ''); // remove all spaces from searchInput
      return nameWithoutSpaces
        .toLowerCase()
        .includes(searchInputWithoutSpaces.toLowerCase());
    });
    setData(searchValue);
    setSearchVal(e.target.value);
  };

  const opencloseRetailerModal = useCallback(() => {
    setIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  console.log(currentData, 'currentData');

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
              <div className="number">{currentData?.count}</div>
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
                      <div className="title">
                        Retailer Name
                        <span className="sort">
                          <img src={downArrow} />
                        </span>
                      </div>
                    </th>
                    <th>
                      <div className="title">
                        Date Requested
                        <span className="sort">
                          <img src={downArrow} />
                        </span>
                      </div>
                    </th>
                    <th>
                      <div className="title">
                        Date Approved/Declined
                        <span className="sort">
                          <img src={downArrow} />
                        </span>
                      </div>
                    </th>
                    <th>
                      <div className="title">
                        Status
                        <span className="sort">
                          <img src={downArrow} />
                        </span>
                      </div>
                    </th>
                    <th>
                      <div className="title">Actions</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentData?.rows?.length > 0 &&
                    currentData.rows.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            <div className="store">
                              <div className="number_wrap">
                                <a href="#" className="number">
                                  <img
                                    src={item?.retailer_details?.store_photo}
                                    className="avtar-img"
                                  />
                                </a>
                              </div>
                              <div className="retailer_web_link">
                                <NavLink
                                  to={`/brand/retailer-profile/${item?.id}`}
                                >
                                  {item.user.full_name}
                                </NavLink>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="txt">
                              {moment(item.created_at).format('DD/MM/YYYY')}
                            </div>
                          </td>
                          <td>
                            {item.status_updated_on
                              ? moment(item.status_updated_on).format(
                                  'DD/MM/YYYY'
                                )
                              : '-'}
                          </td>
                          <td>
                            <span
                              className={`status-pill ${
                                item.invite_status == 'pending'
                                  ? 'pill_pending'
                                  : item.invite_status == 'connected'
                                  ? 'pill_connected'
                                  : item.invite_status == 'declined'
                                  ? 'pill_declined'
                                  : item.invite_status == ''
                                  ? 'pill_not_connected'
                                  : ''
                              }`}
                            >
                              {item.invite_status}
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

                  {currentData?.rows?.length === 0 && (
                    // <tr>
                    //     <td colSpan="5">
                    //         <div className="content_area">
                    //             <div className="card-empty">
                    //                 <div className="card-empty_body">
                    //                     <div className="image mb-5">
                    //                         <picture>
                    //                             <img
                    //                                 src={
                    //                                     ProductCartEmpty
                    //                                 }
                    //                                 alt=""
                    //                             />
                    //                         </picture>
                    //                     </div>
                    //                     <h3>
                    //                         You currently have
                    //                         no requests for
                    //                         access from any
                    //                         retailer.
                    //                     </h3>
                    //                     <p>
                    //                         Invite your
                    //                         retailers to join
                    //                         ShopDot so they can
                    //                         start selling your
                    //                         products on their
                    //                         website.
                    //                     </p>
                    //                     <div className=''>
                    //                         <button
                    //                             className="button"
                    //                             onClick={() =>
                    //                                 props.setOpenInviteretailer(
                    //                                     !props.openInviteRetailer
                    //                                 )
                    //                             }
                    //                         >
                    //                             Invite Retailers
                    //                         </button>
                    //                         <button className="button button-dark">View Requests for Access</button>
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     </td>
                    // </tr>
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

RequestAccess.propTypes = {
  openInviteRetailer: PropTypes.bool,
  setOpenInviteretailer: PropTypes.func,
  changeSubTab: PropTypes.func,
  height: PropTypes.any,
};
