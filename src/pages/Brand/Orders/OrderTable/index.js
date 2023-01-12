import React, { useEffect, useState } from 'react';
import searchIcon from '../../images/icons/icon-search.svg';
import closeIcon from '../../images/icons/icon-close.svg';
import ArrowDownIcon from '../../images/icons/icon-down-arrow.png';
import DownIcon from '../../images/icons/icon-chevron--down.svg';
import RightIcon from '../../images/icons/icon-chevron--right.svg';
import LeftIcon from '../../images/icons/icon-chevron--left.svg';
import mailIcon from '../../images/icons/icon-mail-black.png';
import emptyTable from '../../images/product-card-empty.svg';
import { ProductData, Data } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrderFilter } from '../../../../redux/Brand/Orders/orderSelectors';
import {
    resetToInitial,
    retailerClear,
    fulFillmentClear,
    dateRangeClear,
} from '../../../../redux/Brand/Orders/orderSlice';
import { isEmpty } from 'lodash';

export default function OrderTable(props) {
    const dispatch = useDispatch();
    const orderFilter = useSelector(selectOrderFilter);
    const [show, setShow] = useState(false);
    const [productId, setProductId] = useState('');
    const [fulfillmentStus, setFulfillmentStus] = useState([]);
    const [retailerStus, setRetailerStus] = useState([]);
    const [dateStus, setDateStus] = useState({});
    const [retailerfilterData, setRetailerFilterData] = useState([]);
    const [productfilterData, setProductfilterData] = useState([]);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setRetailerStus(orderFilter.retailerFilter);
        setFulfillmentStus(orderFilter.fulfillmentFiter);
        setDateStus(orderFilter.dateRange);
        const retailerData = [];
        orderFilter.retailerFilter?.map((ele) => {
            Data.map((e) => {
                e.retailerName === ele && retailerData.push(e);
            });
        });
        setRetailerFilterData(retailerData);
        const productData = [];
        orderFilter.fulfillmentFiter?.map((ele) => {
            ProductData.map((e) => {
                e.fulfillmentStatus === ele && productData.push(e);
            });
        });
        setProductfilterData(productData);
        const newDate = orderFilter.dateRange;
        setDateStus(newDate);
    }, [orderFilter]);

    const handleTableShow = (id) => {
        setProductId(productId === id ? null : id);
        setShow(productId === id ? false : true);
    };

    const handleClearFilter = () => {
        setFulfillmentStus([]);
        setRetailerStus([]);
        setDateStus({});
        dispatch(fulFillmentClear());
        dispatch(retailerClear());
        dispatch(dateRangeClear());
    };

    const clearFulfillmentFilter = () => {
        setFulfillmentStus([]);
        dispatch(fulFillmentClear());
    };

    const clearRetailerFilter = () => {
        setRetailerStus([]);
        dispatch(retailerClear());
    };

    useEffect(() => {
        const otherDivs =
            document.querySelector('.header').offsetHeight +
            document.querySelector('.products_head').offsetHeight +
            document.querySelector('.products_active-filters').offsetHeight +
            document.querySelector('.pagination').offsetHeight +
            (document.querySelector('.my_list-body').offsetHeight -
                document.querySelector('.my_list-body').clientHeight);
        setHeight(window.innerHeight - otherDivs - 55);
    }, []);

    const clearOderDate = () => {
        setDateStus({});
        dispatch(dateRangeClear());
    };

    return (
        <div className="pc_tabs-content tabs_body">
            <div className="products-content">
                <div className="products_head">
                    <div className="breadcrumbs_wrap">
                        <ul className="breadcrumbs">
                            <li>
                                <span>Products</span>
                            </li>
                        </ul>
                    </div>
                    <div className="products_head-content">
                        <div className="title">
                            <h1 className="m-0">Orders</h1>
                            <div className="number">8</div>
                        </div>
                        <div className="products_head-search">
                            <form action="#" className="search_form">
                                <div className="search_form-input">
                                    <input
                                        type="text"
                                        placeholder="Search by Order ID, Customer Name, Product, Tracking Number"
                                    />
                                </div>
                                <img className="icon" src={searchIcon} />
                                <button
                                    type="cancel"
                                    className="search_form-button"
                                >
                                    <img className="icon" src={closeIcon} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="my_list-body order_table">
                    <div className="products_active-filters">
                        {fulfillmentStus.length !== 0 && (
                            <div className="products_active-filter">
                                <div className="txt">
                                    <b>Fulfillment Status: </b>
                                    {fulfillmentStus.join(', ')}
                                </div>
                                <button
                                    className="products_active-remove"
                                    onClick={clearFulfillmentFilter}
                                >
                                    <img className="icon" src={closeIcon} />
                                </button>
                            </div>
                        )}
                        {!isEmpty(dateStus) && (
                            <>
                                <div className="products_active-filter">
                                    <div className="txt">
                                        <b>Order Date: </b>
                                        {dateStus?.From} - {dateStus?.To}
                                    </div>
                                    <button
                                        className="products_active-remove"
                                        onClick={clearOderDate}
                                    >
                                        <img className="icon" src={closeIcon} />
                                    </button>
                                </div>
                            </>
                        )}
                        {retailerStus.length !== 0 && (
                            <>
                                <div className="products_active-filter">
                                    <div className="txt">
                                        <b>Retailer: </b>
                                        {retailerStus.join(', ')}
                                    </div>
                                    <button
                                        className="products_active-remove"
                                        onClick={clearRetailerFilter}
                                    >
                                        <img className="icon" src={closeIcon} />
                                    </button>
                                </div>
                                <button
                                    className="products_active-remove-all"
                                    onClick={handleClearFilter}
                                >
                                    Clear Filters
                                </button>
                            </>
                        )}
                        {(!isEmpty(dateStus) ||
                            !isEmpty(retailerStus) ||
                            !isEmpty(fulfillmentStus)) && (
                            <button
                                className="products_active-remove-all"
                                onClick={() => handleClearFilter()}
                            >
                                Clear Filters
                            </button>
                        )}
                    </div>
                    <div
                        className="my_list-table-wrap datalist-table_wrap sticky-header-table dynamic_height"
                        style={{ height }}
                    >
                        <table className="my_list-table datalist-table my-product-table">
                            <thead className="sticky-thead">
                                <tr>
                                    <th>
                                        <div className="txt">
                                            Order ID
                                            <button className="sort">
                                                <img
                                                    className="icon"
                                                    src={ArrowDownIcon}
                                                />
                                            </button>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="txt">
                                            Retailer Name
                                            <button className="sort">
                                                <img
                                                    className="icon"
                                                    src={ArrowDownIcon}
                                                />
                                            </button>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="txt">
                                            Order Date
                                            <button className="sort">
                                                <img
                                                    className="icon"
                                                    src={ArrowDownIcon}
                                                />
                                            </button>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="txt">
                                            Customer Name
                                            <button className="sort">
                                                <img
                                                    className="icon"
                                                    src={ArrowDownIcon}
                                                />
                                            </button>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="txt">
                                            Customer Order ID
                                            <button className="sort">
                                                <img
                                                    className="icon"
                                                    src={ArrowDownIcon}
                                                />
                                            </button>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="txt">
                                            Qty
                                            <button className="sort">
                                                <img
                                                    className="icon"
                                                    src={ArrowDownIcon}
                                                />
                                            </button>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="txt">
                                            WSP
                                            <button className="sort">
                                                <img
                                                    className="icon"
                                                    src={ArrowDownIcon}
                                                />
                                            </button>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="txt">
                                            Shipping
                                            <button className="sort">
                                                <img
                                                    className="icon"
                                                    src={ArrowDownIcon}
                                                />
                                            </button>
                                        </div>
                                    </th>
                                    <th className="black-envelope-action"></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="accordion">
                                {Data.length === 0 && (
                                    <tr>
                                        <td
                                            className="no-data-cell"
                                            colSpan="10"
                                        >
                                            <div className="product-card-empty_body">
                                                <p>
                                                    There are no orders that
                                                    meet your criteria.
                                                </p>
                                                <div className="image">
                                                    <picture>
                                                        <img
                                                            src={emptyTable}
                                                            alt=""
                                                        />
                                                    </picture>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}

                                {(retailerfilterData.length !== 0
                                    ? retailerfilterData
                                    : Data
                                ).map((item, i) => {
                                    return (
                                        <tr
                                            className="order_parent_row"
                                            key={i}
                                        >
                                            <td colSpan="11">
                                                <table className="op_table">
                                                    <tbody>
                                                        <tr
                                                            onClick={() =>
                                                                handleTableShow(
                                                                    item.id
                                                                )
                                                            }
                                                            // "linen-bg" class will be apply for heighlight row
                                                            // className={`tr-head linen-bg ${
                                                            className={`tr-head ${
                                                                show &&
                                                                productId ===
                                                                    item.id
                                                                    ? 'order_show'
                                                                    : ''
                                                            }
                                                            `}
                                                        >
                                                            <td>
                                                                <div className="text-bolder">
                                                                    {item.id}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="text-bolder">
                                                                    {
                                                                        item.retailerName
                                                                    }
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="text-bolder">
                                                                    {
                                                                        item.orderDate
                                                                    }
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="text-bolder">
                                                                    {
                                                                        item.customerName
                                                                    }
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="text-bolder">
                                                                    {
                                                                        item.customerOrderId
                                                                    }
                                                                    1
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="text-bolder">
                                                                    {item.qty}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="text-bolder">
                                                                    {item.wsp}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="text-bolder">
                                                                    {item.fees}
                                                                </div>
                                                            </td>
                                                            <td className="black-envelope-action">
                                                                <a href="mailto:abc@example.com ">
                                                                    <img
                                                                        className="icon black-arrow black-envelope"
                                                                        src={
                                                                            mailIcon
                                                                        }
                                                                    />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <button className="black-arrow-action">
                                                                    <img
                                                                        className={`icon black-arrow parent-arrow ${
                                                                            show ===
                                                                                true &&
                                                                            productId ===
                                                                                item.id
                                                                                ? 'down-arrow-transform'
                                                                                : ''
                                                                        }`}
                                                                        src={
                                                                            DownIcon
                                                                        }
                                                                    />
                                                                </button>
                                                            </td>
                                                        </tr>

                                                        {show === true &&
                                                            productId ===
                                                                item.id && (
                                                                <>
                                                                    {!ProductData.find(
                                                                        (a) =>
                                                                            a.id ==
                                                                            productId
                                                                    ) ? (
                                                                        <tr className="tr-body">
                                                                            <td
                                                                                colSpan="11"
                                                                                className="order-table-td"
                                                                            >
                                                                                table
                                                                                here
                                                                            </td>
                                                                        </tr>
                                                                    ) : (
                                                                        <tr className="tr-body">
                                                                            <td
                                                                                colSpan="11"
                                                                                className="order-table-td"
                                                                            >
                                                                                <div className="order_inner-table-area">
                                                                                    <div className="order_inner-table-div ">
                                                                                        <div className="order-table-hide">
                                                                                            <div className="order-table-auto">
                                                                                                <table className="order_inner-table">
                                                                                                    <thead className="order_inner-thead">
                                                                                                        <tr>
                                                                                                            <th>
                                                                                                                <div className="txt">
                                                                                                                    Product
                                                                                                                    Name
                                                                                                                    <button className="sort">
                                                                                                                        <img
                                                                                                                            className="icon"
                                                                                                                            src={
                                                                                                                                DownIcon
                                                                                                                            }
                                                                                                                        />
                                                                                                                    </button>
                                                                                                                </div>
                                                                                                            </th>
                                                                                                            <th>
                                                                                                                <div className="txt">
                                                                                                                    Qty
                                                                                                                    <button className="sort">
                                                                                                                        <img
                                                                                                                            className="icon"
                                                                                                                            src={
                                                                                                                                DownIcon
                                                                                                                            }
                                                                                                                        />
                                                                                                                    </button>
                                                                                                                </div>
                                                                                                            </th>
                                                                                                            <th>
                                                                                                                <div className="txt">
                                                                                                                    WSP
                                                                                                                    <button className="sort">
                                                                                                                        <img
                                                                                                                            className="icon"
                                                                                                                            src={
                                                                                                                                DownIcon
                                                                                                                            }
                                                                                                                        />
                                                                                                                    </button>
                                                                                                                </div>
                                                                                                            </th>
                                                                                                            <th>
                                                                                                                <div className="txt">
                                                                                                                    MSRP
                                                                                                                    <button className="sort">
                                                                                                                        <img
                                                                                                                            className="icon"
                                                                                                                            src={
                                                                                                                                DownIcon
                                                                                                                            }
                                                                                                                        />
                                                                                                                    </button>
                                                                                                                </div>
                                                                                                            </th>

                                                                                                            <th>
                                                                                                                <div className="txt">
                                                                                                                    Fulfillment
                                                                                                                    Status
                                                                                                                    <button className="sort">
                                                                                                                        <img
                                                                                                                            className="icon"
                                                                                                                            src={
                                                                                                                                DownIcon
                                                                                                                            }
                                                                                                                        />
                                                                                                                    </button>
                                                                                                                </div>
                                                                                                            </th>
                                                                                                            <th>
                                                                                                                <div className="txt">
                                                                                                                    Shipping
                                                                                                                    Carrier
                                                                                                                    <button className="sort">
                                                                                                                        <img
                                                                                                                            className="icon"
                                                                                                                            src={
                                                                                                                                DownIcon
                                                                                                                            }
                                                                                                                        />
                                                                                                                    </button>
                                                                                                                </div>
                                                                                                            </th>
                                                                                                            <th>
                                                                                                                <div className="txt">
                                                                                                                    Tracking
                                                                                                                    Number
                                                                                                                    <button className="sort">
                                                                                                                        <img
                                                                                                                            className="icon"
                                                                                                                            src={
                                                                                                                                DownIcon
                                                                                                                            }
                                                                                                                        />
                                                                                                                    </button>
                                                                                                                </div>
                                                                                                            </th>
                                                                                                        </tr>
                                                                                                    </thead>
                                                                                                    <tbody className="order_inner-body">
                                                                                                        {(productfilterData.length !==
                                                                                                        0
                                                                                                            ? productfilterData
                                                                                                            : ProductData
                                                                                                        ).map(
                                                                                                            (
                                                                                                                ele,
                                                                                                                // eslint-disable-next-line no-shadow
                                                                                                                i
                                                                                                            ) => {
                                                                                                                return (
                                                                                                                    ele.id ===
                                                                                                                        productId && (
                                                                                                                        <tr
                                                                                                                            key={
                                                                                                                                i
                                                                                                                            }
                                                                                                                        >
                                                                                                                            <td>
                                                                                                                                <div className="my_list-product">
                                                                                                                                    <div className="my_list-product-image">
                                                                                                                                        <picture>
                                                                                                                                            <img
                                                                                                                                                src={
                                                                                                                                                    ele.productUrl
                                                                                                                                                }
                                                                                                                                                alt=""
                                                                                                                                            />
                                                                                                                                        </picture>
                                                                                                                                    </div>
                                                                                                                                    <div>
                                                                                                                                        <a
                                                                                                                                            href="#"
                                                                                                                                            className="my_list-product-title"
                                                                                                                                        >
                                                                                                                                            {
                                                                                                                                                ele.productName
                                                                                                                                            }
                                                                                                                                        </a>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td>
                                                                                                                                <div>
                                                                                                                                    {
                                                                                                                                        ele.qty
                                                                                                                                    }
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td>
                                                                                                                                <div>
                                                                                                                                    {
                                                                                                                                        ele
                                                                                                                                            .totalWsp
                                                                                                                                            .wsp
                                                                                                                                    }
                                                                                                                                </div>
                                                                                                                                <div>
                                                                                                                                    (
                                                                                                                                    {
                                                                                                                                        ele
                                                                                                                                            .totalWsp
                                                                                                                                            .wsp_unit
                                                                                                                                    }

                                                                                                                                    )
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td>
                                                                                                                                <div>
                                                                                                                                    {
                                                                                                                                        ele
                                                                                                                                            .totalMSRP
                                                                                                                                            .msrp
                                                                                                                                    }
                                                                                                                                </div>
                                                                                                                                <div>
                                                                                                                                    (
                                                                                                                                    {
                                                                                                                                        ele
                                                                                                                                            .totalMSRP
                                                                                                                                            .msrp_unit
                                                                                                                                    }

                                                                                                                                    )
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td>
                                                                                                                                <span
                                                                                                                                    className={`status-pill ${
                                                                                                                                        ele.fulfillmentStatus ===
                                                                                                                                            'Fulfilled' &&
                                                                                                                                        'pill_connected'
                                                                                                                                    } ${
                                                                                                                                        ele.fulfillmentStatus ===
                                                                                                                                            'Unfulfilled' &&
                                                                                                                                        'pill_pending'
                                                                                                                                    } ${
                                                                                                                                        ele.fulfillmentStatus ===
                                                                                                                                            'Cancelled' &&
                                                                                                                                        'pill_declined'
                                                                                                                                    }`}
                                                                                                                                >
                                                                                                                                    {
                                                                                                                                        ele.fulfillmentStatus
                                                                                                                                    }
                                                                                                                                </span>
                                                                                                                            </td>
                                                                                                                            <td>
                                                                                                                                <div>
                                                                                                                                    {
                                                                                                                                        ele.shippingCarrier
                                                                                                                                    }
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td>
                                                                                                                                <div>
                                                                                                                                    <a
                                                                                                                                        href="target/blank_"
                                                                                                                                        className="link-text"
                                                                                                                                    >
                                                                                                                                        {
                                                                                                                                            ele.TranckingNumber
                                                                                                                                        }
                                                                                                                                    </a>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    )
                                                                                                                );
                                                                                                            }
                                                                                                        )}
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    )}
                                                                </>
                                                            )}
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination_wrap">
                        <div className="pagination">
                            <div className="pagination_per">
                                <select name="per" id="per">
                                    <option value="10">10</option>
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
                                <button className="pagination-arrow pagination-arrow-prev">
                                    <img className="icon" src={LeftIcon} />
                                </button>
                                <div className="pagination-current">
                                    <input type="text" value="1" />
                                </div>
                                <button className="pagination-arrow pagination-arrow-next">
                                    <img className="icon" src={RightIcon} />
                                </button>
                                <div className="pagination-title">
                                    of 10 pages
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
