import React, { useState, useEffect, useMemo } from 'react';
import moment from 'moment';
import RetailerHeader from '../common/components/RetailerHeader';
import LeftIcon from '../../Brand/images/icons/icon-chevron--left.svg';
import RightIcon from '../../Brand/images/icons/icon-chevron--right.svg';
// import DataTable from 'react-data-table-component';
import '../Style/retail.style.scss';
import '../Style/retail.media.scss';
import '../Style/retail.dev.scss';
import { data, monthOptions } from './utils';
import { Link } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';

// const customStyles = {
//     rows: {
//         style: {
//             minHeight: '43px',
//         },
//     },
//     headCells: {
//         style: {
//             BackGround: '#283B49',
//         },
//     },
//     headRow: {
//         style: {
//             background: '#283b49',
//             color: 'white',
//             fontSize: '12px',
//             fontWeight: 'bold',
//             minHeight: '40px',
//         },
//     },
//     cells: {
//         style: {},
//     },
// };

// const columns = [
//     {
//         name: ' Settlement Date',
//         selector: (row) =>
//             moment(row.settlement_Date, 'DD/MM/YYYY').format(
//                 'MMM DD, YYYY'
//             ),
//     },
//     {
//         name: 'Brand Name',
//         selector: (row) => row.brand_Name,
//     },
//     {
//         name: 'Transaction Type',
//         selector: (row) => row.transaction_Type,
//     },
//     {
//         name: 'Reference ID',
//         selector: (row) => row.reference_ID,
//     },
//     {
//         name: 'Order ID',
//         selector: (row) => row.order_ID,
//     },
//     {
//         name: 'Order Date',
//         selector: (row) => row.order_Date,
//     },
//     {
//         name: 'Product Cost',
//         selector: (row) => row.product_Cost,
//     },
//     {
//         name: 'Shipping',
//         selector: (row) => row.shipping,
//     },
//     {
//         name: 'Fees',
//         selector: (row) => row.fees,
//     },
//     {
//         name: 'Total',
//         selector: (row) => row.total,
//     },
//     {
//         name: 'Account',
//         selector: (row) => row.account,
//     },
// ];

function RetailerTransactions() {
    const windowSize = useWindowSize();
    const [monthValue, setMonthValue] = useState(-1);
    const [transactionType, setTransactionType] = useState('All');
    const [filterData, setFilterData] = useState(data);
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
        const dynamicHeight = window.innerHeight - otherDivsHeight - 50;
        setDynamicHeight(dynamicHeight);
    }, [windowSize]);

    const handleCheck = (e) => {
        setTransactionType(e.target.value);
    };

    const handleMonth = (e) => {
        setMonthValue(Number(e.target.value));
    };

    useEffect(() => {
        const cell =
            transactionType !== 'All'
                ? data.filter(
                      (item) => item?.transactionType === transactionType
                  )
                : data;

        const finalData =
            monthValue !== -1
                ? cell.filter((ele) => {
                      const satelmentMonth =
                          moment(ele?.settlementDate, 'DD/MM/YYYY').month() + 1;
                      if (satelmentMonth === Number(monthValue)) {
                          return ele;
                      }
                  })
                : cell;
        setFilterData(finalData);
    }, [transactionType, monthValue]);

    const productCost = useMemo(() => {
        return filterData.reduce(
            (acc, currTeam) => acc + currTeam?.productCost,
            0
        );
    }, [filterData]);

    const shipping = useMemo(() => {
        return filterData.reduce(
            (acc, currTeam) => acc + currTeam?.shipping,
            0
        );
    }, [filterData]);

    const fees = useMemo(() => {
        return filterData.reduce((acc, currTeam) => acc + currTeam?.fees, 0);
    }, [filterData]);

    const total = useMemo(() => {
        return filterData.reduce((acc, currTeam) => acc + currTeam?.total, 0);
    }, [filterData]);

    return (
        <>
            <div className="wrapper">
                <div className=" header_Z-index">
                    <RetailerHeader />
                    <main className="content shopping-cart mp-content">
                        <section className="section products mp-section">
                            <div className="products_content mw-100">
                                <div className="products_head pt-3">
                                    <div className="products_head-content">
                                        <div className="title">
                                            <h1>
                                                Transaction History
                                                <span className="ph_subtitle">
                                                    All Amounts USD
                                                </span>
                                            </h1>
                                        </div>

                                        <div className="ph_actions">
                                            <div className="form-input">
                                                <Link
                                                    to="/retailer/reports/transaction-history"
                                                    target="_blank"
                                                    className="button small"
                                                    fdprocessedid="zj494p"
                                                >
                                                    View PDF
                                                </Link>
                                                <button className="button button-blue small ml-2 button_blue">
                                                    Download CSV
                                                </button>
                                            </div>
                                            <div className="form-input">
                                                <label className="form-label">
                                                    Transaction Type{' '}
                                                </label>
                                                <select
                                                    name="State"
                                                    id="state-list"
                                                    className="select-white-bg mb-0"
                                                    onChange={(e) =>
                                                        handleCheck(e)
                                                    }
                                                >
                                                    <option>All</option>
                                                    <option>Order</option>
                                                    <option>Refund</option>
                                                    <option>Chargeback</option>
                                                </select>
                                            </div>

                                            <div className="form-input">
                                                <label className="form-label">
                                                    Settlement Period{' '}
                                                </label>
                                                <select
                                                    name="State"
                                                    id="state-list"
                                                    className="select-white-bg mb-0"
                                                    onChange={(e) =>
                                                        handleMonth(e)
                                                    }
                                                >
                                                    {monthOptions.map(
                                                        (month, index) => (
                                                            <option
                                                                key={index}
                                                                value={
                                                                    month?.value
                                                                }
                                                            >
                                                                {month?.label}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* =================ReactDataTable========================= */}
                                {/* <DataTable
                                                columns={columns}
                                                data={
                                                    filterData.length > 0
                                                        ? filterData
                                                        : data
                                                }
                                                customStyles={customStyles}
                                                fixedHeader
                                                highlightOnHover
                                                pointerOnHover
                                                fixedHeaderScrollHeight="470px"
                                                pagination
                                                // paginationComponent={
                                                //     CustomPagination
                                                // }
                                            /> */}
                                {/* ================================================================ */}
                                <div className="products_body">
                                    <div className="content_area">
                                        <div
                                            className="datalist-table_wrap wide-scroll dynamic_height"
                                            style={{ height: dynamicHeight }}
                                        >
                                            <table className="table datalist-table payout-table">
                                                <thead className="nodark-bg sticky-thead">
                                                    <tr>
                                                        <th>
                                                            <div className="title">
                                                                Settlement Date
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="title">
                                                                Brand Name
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="title">
                                                                Transaction Type
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="title">
                                                                Reference ID
                                                            </div>
                                                        </th>

                                                        <th>
                                                            <div className="title">
                                                                Order ID
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="title">
                                                                Order Date
                                                            </div>
                                                        </th>

                                                        <th>
                                                            <div className="title">
                                                                Product Cost
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="title">
                                                                Shipping
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="title">
                                                                Fees
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="title">
                                                                Total
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="title">
                                                                Account
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filterData.map(
                                                        (item, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>
                                                                        {moment(
                                                                            item?.settlementDate,
                                                                            'DD/MM/YYYY'
                                                                        ).format(
                                                                            'MMM DD, YYYY'
                                                                        )}
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item?.brandName
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item?.transactionType
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item?.referenceID
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item?.orderID
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item.orderDate
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        $
                                                                        {
                                                                            item?.productCost
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        $
                                                                        {
                                                                            item?.shipping
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        $
                                                                        {
                                                                            item?.fees
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        $
                                                                        {
                                                                            item?.total
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item?.account
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    )}
                                                    <tr className="tr-total-fixed">
                                                        <td>
                                                            <div className="txt">
                                                                &nbsp;
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="txt">
                                                                &nbsp;
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="txt">
                                                                &nbsp;
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="txt">
                                                                &nbsp;
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="txt">
                                                                &nbsp;
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div className="txt">
                                                                Total Amounts
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="txt">
                                                                $
                                                                {productCost?.toFixed(
                                                                    2
                                                                )}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="txt">
                                                                $
                                                                {shipping?.toFixed(
                                                                    2
                                                                )}
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div className="txt">
                                                                $
                                                                {fees?.toFixed(
                                                                    2
                                                                )}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="txt">
                                                                $
                                                                {total?.toFixed(
                                                                    2
                                                                )}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="txt">
                                                                &nbsp;
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="pagination_wrap mt-0">
                                            <div className="pagination br-top-none">
                                                <div className="pagination_per">
                                                    <select name="per">
                                                        <option value="20">
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
                                                        <option value="1">
                                                            1
                                                        </option>
                                                        <option value="2">
                                                            2
                                                        </option>
                                                        <option value="3">
                                                            3
                                                        </option>
                                                        <option value="4">
                                                            4
                                                        </option>
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
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}

export default RetailerTransactions;
