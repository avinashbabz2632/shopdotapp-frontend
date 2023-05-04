import React, { useState, useEffect } from 'react';
import RetailerHeader from '../common/components/RetailerHeader';
import searchIcon from '../../Brand/images/icons/icon-search.svg';
import closeIcon from '../../Brand/images/icons/icon-close.svg';
import SideBar from './Sidebar';
import SideFilter from './SideFilter';
import RightIcon from '../../Brand/images/icons/icon-chevron--right.svg';
import LeftIcon from '../../Brand/images/icons/icon-chevron--left.svg';
import useWindowSize from '../../../hooks/useWindowSize';
import { connectedTableData } from './utils';
import { Link } from 'react-router-dom';
function Brands() {
    const windowSize = useWindowSize();
    const [data, setData] = useState(connectedTableData);
    const [dataClone, setDataClone] = useState(connectedTableData);
    const [productsActiveFilterHeight, setProductsActiveFilterHeight] =
        useState(0);
    const [otherDivsHeight, setOtherDivsHeight] = useState(0);
    const [dynamicHeight, setDynamicHeight] = useState(0);
    useEffect(() => {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const productsHeadHeight =
            document.querySelector('.products_head').offsetHeight;
        const paginationHeight =
            document.querySelector('.pagination').offsetHeight;
        const productsBodyHeight =
            document.querySelector('.products_body').offsetHeight;
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
        if (e.target.value.trim()) {
            const searchValue = dataClone.filter((ele) => {
                return ele.brandName
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase());
            });
            setData(searchValue);
        } else {
            setData(dataClone);
        }
    };
    const productStatusViseFilter = (status) => {
        const cell =
            status !== 'All'
                ? connectedTableData.filter((item) => item.status === status)
                : connectedTableData;
        setData(cell);
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
                                            <div className="number">200</div>
                                        </div>
                                        <div className="products_head-search">
                                            <form className="search_form">
                                                <div className="search_form-input">
                                                    <input
                                                        type="text"
                                                        placeholder="Search brands"
                                                        onChange={(e) =>
                                                            handleSearch(e)
                                                        }
                                                    />
                                                </div>
                                                <button
                                                    type="cancel"
                                                    className="search_form-button"
                                                >
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
                                                className="brand-type statusFilter"
                                                // className={`brand-type ${
                                                //     productFilter?.status ===
                                                //     'All'
                                                //         ? 'active'
                                                //         : ''
                                                // }`}
                                                onClick={() =>
                                                    productStatusViseFilter(
                                                        'All'
                                                    )
                                                }
                                            >
                                                All
                                            </a>
                                            <a
                                                href="#"
                                                data-val="1"
                                                className="brand-type statusFilter"
                                                // className={`brand-type ${
                                                //     productFilter?.status ===
                                                //     'Connected'
                                                //         ? 'active'
                                                //         : ''
                                                // }`}
                                                onClick={() =>
                                                    productStatusViseFilter(
                                                        'Connected'
                                                    )
                                                }
                                            >
                                                Connected
                                            </a>
                                            <a
                                                href="#"
                                                data-val="3"
                                                className="brand-type statusFilter"
                                                // className={`brand-type ${
                                                //     productFilter?.status ===
                                                //     'Pending'
                                                //         ? 'active'
                                                //         : ''
                                                // }`}
                                                onClick={() =>
                                                    productStatusViseFilter(
                                                        'Pending'
                                                    )
                                                }
                                            >
                                                Pending
                                            </a>
                                            <a
                                                href="#"
                                                data-val="0"
                                                className="brand-type statusFilter"
                                                // className={`brand-type ${
                                                //     productFilter?.status ===
                                                //     'Not connected'
                                                //         ? 'active'
                                                //         : ''
                                                // }`}
                                                onClick={() =>
                                                    productStatusViseFilter(
                                                        'Not Connected'
                                                    )
                                                }
                                            >
                                                Not connected
                                            </a>
                                            <a
                                                href="#"
                                                data-val="2"
                                                className="brand-type statusFilter"
                                                // className={`brand-type ${
                                                //     productFilter?.status ===
                                                //     'all'
                                                //         ? 'active'
                                                //         : ''
                                                // }`}
                                                onClick={() =>
                                                    productStatusViseFilter(
                                                        'Declined'
                                                    )
                                                }
                                            >
                                                Declined
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="products_body">
                                    <div className="products_active-filters">
                                        <div className="products_active-filter">
                                            <div className="txt">
                                                <b>Brand Values:</b> Not on
                                                Amazon
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

                                        <button className="products_active-remove-all">
                                            Clear Filters
                                        </button>
                                    </div>
                                    <div
                                        className="brands-table_wrap dynamic_height"
                                        style={{ height: dynamicHeight }}
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
                                                        <div className="title">
                                                            Actions
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((item, i) => {
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
                                                                                className="avtar-img"
                                                                                src={
                                                                                    item?.productUrl
                                                                                }
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                    <Link to="#">
                                                                        {
                                                                            item?.brandName
                                                                        }
                                                                    </Link>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="txt tooltip-tbl">
                                                                    {
                                                                        item?.productCategory
                                                                    }
                                                                    <div className="tooltip">
                                                                        <span className="more">
                                                                            + 2
                                                                            more
                                                                        </span>
                                                                    </div>
                                                                    <div className="tooltip_text">
                                                                        <lable>
                                                                            Home
                                                                            &
                                                                            Garden
                                                                        </lable>
                                                                        <lable>
                                                                            Home
                                                                            &
                                                                            Garden
                                                                        </lable>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="txt">
                                                                    {
                                                                        item?.brandValues
                                                                    }
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="status">
                                                                    <span
                                                                        className={`status-pill ${
                                                                            item?.status ===
                                                                                'Not Connected' &&
                                                                            'pill_not_connected'
                                                                        } ${
                                                                            item?.status ===
                                                                                'Connected' &&
                                                                            'pill_connected'
                                                                        } ${
                                                                            item?.status ===
                                                                                'Pending' &&
                                                                            'pill_pending'
                                                                        } ${
                                                                            item?.status ===
                                                                                'Declined' &&
                                                                            'pill_declined'
                                                                        }`}
                                                                    >
                                                                        {
                                                                            item?.status
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="buttons">
                                                                    {item?.btn}

                                                                    <button className="button message-brand">
                                                                        <img
                                                                            src={
                                                                                item?.icon
                                                                            }
                                                                        />
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
                                                <select name="per" id="per">
                                                    <option
                                                        value="20"
                                                        selected=""
                                                    >
                                                        20
                                                    </option>
                                                    <option value="50">
                                                        50
                                                    </option>
                                                    <option value="100">
                                                        100
                                                    </option>
                                                </select>
                                                <div className="pagination-title">
                                                    items per page
                                                </div>
                                            </div>
                                            <div className="pagination_nav">
                                                <div className="pagination-title">
                                                    page
                                                </div>
                                                <select name="per" id="per">
                                                    <option
                                                        value="1"
                                                        selected=""
                                                    >
                                                        1
                                                    </option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                                <div className="pagination-title">
                                                    of 2
                                                </div>
                                                <button className="pagination-arrow pagination-arrow-prev">
                                                    <div className="icon">
                                                        <img
                                                            className="icon"
                                                            src={LeftIcon}
                                                        />
                                                    </div>
                                                </button>
                                                <button className="pagination-arrow pagination-arrow-next">
                                                    <div className="icon">
                                                        <img
                                                            className="icon"
                                                            src={RightIcon}
                                                        />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <div className="popup popup-invite">
                        <div className="popup_wrapper">
                            <div className="popup_content">
                                <div className="popup-close">
                                    <svg className="icon">
                                        <use href="images/sprite.svg#icon-close"></use>
                                    </svg>
                                </div>
                                <form
                                    action="#"
                                    className="primary__form form form_brands"
                                >
                                    <div className="form_brands-right">
                                        <h3>
                                            Share this referral link with your
                                            brand suppliers.
                                        </h3>
                                        <div className="copyLinkArea">
                                            <input
                                                type="email"
                                                name=""
                                                id=""
                                                placeholder="shopdotapp.com/signup/brandshopxyz"
                                            />
                                            <button
                                                type="submit"
                                                className="button"
                                            >
                                                Copy Link
                                            </button>
                                        </div>
                                        <div className="emailTemplateArea">
                                            <h4>Email Template</h4>
                                            <div className="emailText">
                                                <div className="emailTextItem">
                                                    Hi,
                                                    <br />
                                                    <br />
                                                    We have partnered with
                                                    ShopDot, a new platform that
                                                    enables brand suppliers to
                                                    partner with their retailers
                                                    in new ways. Through the
                                                    ShopDot platform, you’re
                                                    able to easily share product
                                                    inventory and provide
                                                    drop-shipping capabilities
                                                    to your retailers. Helping
                                                    your retailers never lose a
                                                    sale and empowering them to
                                                    delight customers with the
                                                    right product at the right
                                                    moment.
                                                    <br />
                                                    <br />
                                                    ShopDot integrates with your
                                                    Shopify store so real-time
                                                    inventory and product
                                                    content upload is automated.
                                                    Plus, any orders placed on
                                                    ShopDot go right back to
                                                    your Shopify store to follow
                                                    your normal fulfillment
                                                    process.
                                                    <br />
                                                    <h5>Benefits for you:</h5>
                                                    <b>
                                                        Never lose a sale!
                                                    </b>{' '}
                                                    Cash and space constraints
                                                    make it hard for retailers
                                                    to meet the product demands
                                                    of their customers. With
                                                    ShopDot, retailers can tap
                                                    into your inventory and
                                                    leverage your drop-shipping
                                                    capabilities to provide
                                                    product immediacy and
                                                    selection to their
                                                    customers.
                                                </div>
                                            </div>
                                            <div className="action">
                                                <button
                                                    type="submit"
                                                    className="button"
                                                >
                                                    Copy Text
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="popup connect-brand-popup" id="">
                        <div className="popup_wrapper">
                            <div className="popup_content">
                                <div
                                    className="popup-close"
                                    onClick="return $('#request_success').removeclassName('active');"
                                >
                                    <div className="icon">
                                        {/* <img src={RightIcon} /> */}
                                    </div>
                                </div>
                                <div className="popup_success active">
                                    <div className="icon_wrap">
                                        <div className="icon">
                                            {/* <use xlink:href="{{ url('/public/front/retailer') }}/images/sprite.div#icon-checked-1"></use> */}
                                        </div>
                                    </div>
                                    <h2 className="h1">
                                        Connect Request Sent Successfully!
                                    </h2>
                                    <p>
                                        Your connect request has been
                                        successfully sent and is pending brand
                                        approval.
                                    </p>
                                    <button
                                        className="button popup-close"
                                        onClick="return $('#request_success').removeclassName('active');"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Brands;
