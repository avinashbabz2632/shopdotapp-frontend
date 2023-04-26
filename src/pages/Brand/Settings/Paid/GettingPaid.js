import React, { useState } from 'react';
// import EditIcon from '../../images/edit.svg';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { selectBankDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSelector';
import Alerts from '../../common/components/Alerts';
import SubmitModal from './SubmitModal';
import { Link } from 'react-router-dom';

// const trailingCharsIntactCount = 4;
export default function GettingPaid({
    setEditBankDetails,
    handleChangeTab,
    setIsCompleteApplication,
}) {
    const bankDetails = useSelector(selectBankDetails);
    const [isModelOpen, setIsModelOpen] = useState(true);

    return (
        <>
            {/* {isModelOpen && <SubmitModal setIsModelOpen={setIsModelOpen} />}
            <Alerts alertType="alert-error">
                The payment processor could not validate your bank account
                information. Please contact{' '}
                <a href="">support@shopdotapp.com</a>.
            </Alerts>
            <br />
            <Alerts alertType="alert-success">
                If you would like to make changes to your bank account details.
                please contact <a href="">support@shopdotapp.com</a>.
            </Alerts>
            <br />
            <Alerts alertType="alert-warning">
                Your application is Pending with Priority Holdings.
            </Alerts>
            <br />
            <div className="getting-paid-step-d" style={{ display: 'block' }}>
                <button
                    className="button add-user add-user-link button-dark large"
                    onClick={() => setEditBankDetails(true)}
                >
                    <span className="plus-icon-sm">
                        <img src={EditIcon} />
                    </span>
                    Edit Account
                </button>
                <h2 className="mt-5">Bank Detail</h2>
                <div className="form-area">
                    <div className="form-input">
                        <label htmlFor="" className="form-label">
                            Name of the bank account holder
                        </label>
                        <label className="form-data">
                            {get(bankDetails, 'accountHolderName', '-')}
                        </label>
                    </div>
                    <div className="form-input">
                        <label htmlFor="" className="form-label">
                            Bank account type
                        </label>
                        <label className="form-data">
                            {get(bankDetails, 'accountType.label', '-')}
                        </label>
                    </div>
                    <div className="form-input">
                        <label htmlFor="" className="form-label">
                            Purpose
                        </label>
                        <label className="form-data">
                            {get(bankDetails, 'accountRole.label', '-')}
                        </label>
                    </div>
                    <div className="form-input">
                        <label htmlFor="" className="form-label">
                            Account number
                        </label>
                        <label className="form-data account-number">
                            {get(bankDetails, 'accountNumber', '-')}
                        </label>
                    </div>
                    <div className="form-input">
                        <label htmlFor="" className="form-label">
                            Routing number
                        </label>
                        <label className="form-data">
                            {get(bankDetails, 'routingNumber', '-')}
                        </label>
                    </div>
                </div>
            </div> */}
            {isModelOpen && <SubmitModal setIsModelOpen={setIsModelOpen} />}
            <div id="gettingpaid">
                <div className="gettingpaid_info pos-relative">
                    <button
                        onClick={() => {
                            handleChangeTab('1');
                            setIsCompleteApplication(false);
                        }}
                        className="button add-user add-user-link button-dark small"
                    >
                        Edit
                    </button>
                    <div className="gp-after-note">
                        <div className="gpn-item">
                            <p>
                                Your Priority Holding Merchant and Settlements
                                accounts are
                            </p>
                            <span className="status-pill pill_pending">
                                Pending
                            </span>
                        </div>
                        <div className="gpn-item">
                            <p>
                                Your bank account ending with XXXX connection to
                                Priority Holdings is
                            </p>
                            <span className="status-pill pill_paid">
                                Active
                            </span>
                        </div>
                        <div className="gpn-item">
                            <p className="red-note">
                                Your application is pending with Priority
                                Holdings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

GettingPaid.propTypes = {
    setEditBankDetails: PropTypes.func,
    setIsCompleteApplication: PropTypes.func,
    handleChangeTab: PropTypes.func,
};
