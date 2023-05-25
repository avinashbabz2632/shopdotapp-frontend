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
import { useDispatch, useSelector } from 'react-redux';
import {
    selectCategoryViseData,
    selectStateViseData,
    selectSalesViseData,
    selectRetailerRequestData,
    selectConnectedRetailerData,
} from '../../../../redux/Brand/Retailer/retailerSelector';
import ProductCartEmpty from '../../images/product-card-empty.svg';

import RightIcon from '../../images/icons/icon-chevron--right.svg';
import LeftIcon from '../../images/icons/icon-chevron--left.svg';
import InviteRetailer from '../../common/components/InviteRetailerHeaderModal';
import DeclineRetailerModel from '../../common/components/DeclineRetailerModel';
import { Link, NavLink } from 'react-router-dom';
import { getConnectedRetailer } from '../../../../actions/brandActions';

export default function Connected(props) {
    const dispatch = useDispatch()
    const { height } = props;
    const data = useSelector(selectConnectedRetailerData);
    const [limit, setLimit] = useState(20);
    const [offset, setOffset] = useState(0);
    const [totalPage, setTotalPage] = useState(1);
    const [searchVal, setSearchVal] = useState('');
    const [sortColumn, setSortColumn] = useState("full_name");
    const [modalIsOpen, setIsOpen] = useState(false);
    const filterCategories = useSelector(selectCategoryViseData);
    const filterStates = useSelector(selectStateViseData);
    const [isDeclineModelOpen, setIsDeclineModelOpen] = useState(false);

    const fetchRetailerRequests = (props) => {
        const query = {
          paging: {
            limit: limit,
            offset: offset,
          },
        query: {},
        filter: [
            {
                "field": "invite_status",
                "operator": "eq",
                "value": "connected"
            }
        ],
        };
        if(searchVal){
            query.query.search = searchVal
        }
        if(filterCategories.length > 0){
            query.filter.push({
                "field": "retailer_categories",
                "operator": "in",
                "value": filterCategories
            })
        }
        if(filterStates.length > 0){
            query.filter.push({
                "field": "state",
                "operator": "in",
                "value": filterStates
            })
        }
        dispatch(getConnectedRetailer(query));
      };
    useEffect(() => {
        fetchRetailerRequests()
        const page = data ? (data.count / limit) : 0;
        if(page % 1 === 0){
            setTotalPage(page)
        }else{
            setTotalPage(Math.floor(page)+1)
        }
        getTotalPage()
    }, [searchVal, limit, offset, sortColumn, filterCategories, filterStates]);

    const handleSearch = (e) => {
        const searchQuery = e.target.value?.toLowerCase();
        setSearchVal(searchQuery);
    };
console.log(filterStates);
    const opencloseRetailerModal = useCallback(() => {
        setIsOpen(!modalIsOpen);
    }, [modalIsOpen]);

    const opencloseDeclineRetailerModal = useCallback(() => {
        setIsDeclineModelOpen(!isDeclineModelOpen);
    }, [isDeclineModelOpen]);
    const handleLimit = (e) => {
        setLimit(e.target.value);
        setOffset(0)
    }
    const getTotalPage = () => {
        const options = [];
        for(let i = 1; i <= totalPage; i++){
            const selected = ((offset+1)) == i ? true : false;
            options.push(<option value={i} selected={selected}>{i}</option>);
        }
        return options
    }
    const handlePageNumber = (e) => {
        setOffset((e.target.value - 1))
    }
    const incrementPageNumber = () => {
        let page = offset+1
        if(page < totalPage){
            setOffset((page))
        }
    }
    const decrementPageNumber = () => {
        if(offset > 0)
            setOffset((offset-1))
    }
    const handleSort = (column) => {
        setSortColumn(column)
    }
    const handleRetailerCategories = (category) => {
        const categories = []
        category.map((cat, i)=>{
            categories.push(cat.store_categories.name)
            // setFilterCategories(...filterCategories, cat.store_categories.name)
        })
        return categories
    }
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
                            <div className="number">{data?.count}</div>
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
                                            <img
                                                className="product_clear_icon"
                                                src={closeIcon}
                                            />
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
                                    {data?.rows?.length > 0 &&
                                        data?.rows.map((item, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>
                                                        <div className="store">
                                                            <div className="number_wrap">
                                                                <a
                                                                    href="#"
                                                                    className="number"
                                                                >
                                                                    <img
                                                                        src={
                                                                            item.user.retailer_details.store_photo
                                                                        }
                                                                        className="avtar-img"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="retailer_web_link">
                                                                <NavLink
                                                                    to={`/brand/retailer-profile/${item?.id}`}
                                                                >
                                                                    {
                                                                        item.user.full_name
                                                                    }
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            {
                                                                item.assigned_products
                                                            }
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div>
                                                            {item.all_time_sale}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {
                                                            handleRetailerCategories(item?.user?.retailer_details?.retailer_categories)
                                                        }
                                                    </td>

                                                    <td>{item.user.retailer_details.store_state}</td>
                                                    <td>
                                                        <span className="status-pill pill_connected w-auto">
                                                            {item.invite_status}
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
                                                                    <img
                                                                        className="icon"
                                                                        src={
                                                                            MoreIcon
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="dropdown_body left-open dropd">
                                                                    <div className="dropdown_inner dropd">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="profile.html">
                                                                                    View/Edit
                                                                                </a>
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
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    {data?.count === 0 && (
                                        <tr>
                                            <td colSpan="7" className="p-0">
                                                <div className="content_area">
                                                    <div className="card-empty">
                                                        <div className="card-empty_body">
                                                            <div className="image mb-5">
                                                                <picture>
                                                                    <img
                                                                        src={
                                                                            ProductCartEmpty
                                                                        }
                                                                        alt=""
                                                                    />
                                                                </picture>
                                                            </div>
                                                            <h3>
                                                                You currently
                                                                have no requests
                                                                for access from
                                                                any retailer.
                                                            </h3>
                                                            <p>
                                                                Invite your
                                                                retailers to
                                                                join ShopDot so
                                                                they can start
                                                                selling your
                                                                products on
                                                                their website.
                                                            </p>
                                                            <div>
                                                                <button
                                                                    className="button me-2"
                                                                    onClick={
                                                                        opencloseRetailerModal
                                                                    }
                                                                >
                                                                    Invite
                                                                    Retailers
                                                                </button>
                                                                <Link to="/brand/request-access">
                                                                <button
                                                                    className="button dark"
                                                                    onClick={() => props.changeSubTab(2)}
                                                                >
                                                                    View
                                                                    Requests for
                                                                    Access
                                                                </button>
                                                                </Link>
                                                                
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
                        {data?.count > 0 && (
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
                                        <div className="pagination-title">
                                            items per page
                                        </div>
                                    </div>
                                    <div className="pagination_nav">
                                        <div className="pagination-title">
                                            page
                                        </div>
                                        <select name="per" id="per" onChange={handlePageNumber}>
                                            {getTotalPage()}
                                        </select>
                                        <div className="pagination-title">
                                            of {totalPage}
                                        </div>
                                        <button className="pagination-arrow pagination-arrow-prev" onClick={decrementPageNumber}>
                                            <img
                                                className="icon"
                                                src={LeftIcon}
                                            />
                                        </button>
                                        <button className="pagination-arrow pagination-arrow-next" onClick={incrementPageNumber}>
                                            <img
                                                className="icon"
                                                src={RightIcon}
                                            />
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