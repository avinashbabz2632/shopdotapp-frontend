import React, { useMemo } from 'react';
import { transactionHistory } from './utils';
import moment from 'moment';
import '../Style/retail.style.scss';
import '../Style/retail.media.scss';
import '../Style/retail.dev.scss';

function TransactionHistoryReport() {
    const productCost = useMemo(() => {
        return transactionHistory.reduce(
            (acc, currTeam) => acc + currTeam?.productCost,
            0
        );
    }, [transactionHistory]);

    const shipping = useMemo(() => {
        return transactionHistory.reduce(
            (acc, currTeam) => acc + currTeam?.shipping,
            0
        );
    }, [transactionHistory]);

    const fees = useMemo(() => {
        return transactionHistory.reduce(
            (acc, currTeam) => acc + currTeam?.fees,
            0
        );
    }, [transactionHistory]);

    const total = useMemo(() => {
        return transactionHistory.reduce(
            (acc, currTeam) => acc + currTeam?.total,
            0
        );
    }, [transactionHistory]);
    return (
        <>
            <div className="wrapper">
                <table className="report-table">
                    <thead>
                        <tr className="rt-row">
                            <th colSpan="10" className="rt-title">
                                <label>Transaction History Report</label>
                                &nbsp;&nbsp;<span>All Amounts USD</span>
                            </th>
                            <th className="text-right">
                                <button className="button">Download PDF</button>
                            </th>
                        </tr>
                        <tr>
                            <th>Settlement Date</th>
                            <th>Brand Name</th>
                            <th>Transaction Type</th>
                            <th>Reference ID</th>
                            <th>Order ID</th>
                            <th>Order Date</th>
                            <th>Product Cost</th>
                            <th>Shipping</th>
                            <th>Fees</th>
                            <th>Total</th>
                            <th>Account</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionHistory.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    {moment(
                                        item?.settlementDate,
                                        'DD/MM/YYYY'
                                    ).format('MMM DD, YYYY')}
                                </td>
                                <td>{item?.brandName}</td>
                                <td>{item?.transactionType}</td>
                                <td>{item?.referenceID}</td>
                                <td>{item?.orderID}</td>
                                <td>{item?.orderDate}</td>
                                <td>${item?.productCost.toFixed(2)}</td>
                                <td>${item?.shipping.toFixed(2)}</td>
                                <td>-${item?.fees.toFixed(2)}</td>
                                <td>${item?.total.toFixed(2)}</td>
                                <td>{item?.account}</td>
                            </tr>
                        ))}
                        <tr className="tr-total-fixed">
                            <td>
                                <div className="txt">&nbsp;</div>
                            </td>
                            <td>
                                <div className="txt">&nbsp;</div>
                            </td>
                            <td>
                                <div className="txt">&nbsp;</div>
                            </td>
                            <td>
                                <div className="txt">&nbsp;</div>
                            </td>
                            <td>
                                <div className="txt">&nbsp;</div>
                            </td>
                            <td>
                                <div className="txt text-right">
                                    Total Amounts
                                </div>
                            </td>
                            <td>
                                <div className="txt">
                                    ${productCost?.toFixed(2)}
                                </div>
                            </td>
                            <td>
                                <div className="txt">
                                    ${shipping?.toFixed(2)}
                                </div>
                            </td>
                            <td>
                                <div className="txt">-${fees?.toFixed(2)}</div>
                            </td>
                            <td>
                                <div className="txt">${total?.toFixed(2)}</div>
                            </td>
                            <td>
                                <div className="txt">&nbsp;</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TransactionHistoryReport;
