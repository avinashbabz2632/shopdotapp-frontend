import React from 'react';
import EditIcon from '../../images/edit.svg';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { selectBankDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSelector';

const trailingCharsIntactCount = 4;
export default function GettingPaid({ setEditBankDetails }) {
    const bankDetails = useSelector(selectBankDetails);

    const hideAccountNumber = (str) => {
        if (str && str.length > 0) {
            return (
                new Array(str.length - trailingCharsIntactCount + 1).join('*') +
                str.slice(-trailingCharsIntactCount)
            );
        }
        return '';
    };
    return (
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
                        {/* {hideAccountNumber(
                            get(bankDetails, 'accountNumber', '-')
                        )} */}
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
        </div>
    );
}

GettingPaid.propTypes = {
    setEditBankDetails: PropTypes.func,
};
