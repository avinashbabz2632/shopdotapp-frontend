import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '../../images/edit.svg';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { get } from 'lodash';
import {
    selectBankDetails,
    selectBusinessDetails,
    selectRepresentativeDetails,
} from '../../../../redux/Brand/GettingPaid/gettingPaidSelector';
import { SummaryValidationSchema } from './ValidationSchema';
import tAndCDoc from '../../../../assets/ShopDot-Online-Business-Services-Agreement-09-01-2022.pdf';
import { LinkMod } from '../../../../components/common/A';

export default function Summary({
    handleChangeTab,
    setIsCompleteApplication,
    setIsEdited,
}) {
    const bankDetails = useSelector(selectBankDetails);
    const personalDetails = useSelector(selectRepresentativeDetails);
    const businessDetails = useSelector(selectBusinessDetails);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({ resolver: yupResolver(SummaryValidationSchema) });

    const renderEditTab = (tabCode) => {
        // persistor.pause();
        // persistor.flush().then(() => {
        //     return persistor.purge();
        // });
        handleChangeTab(tabCode);
        setIsEdited(true);
    };
    const onSubmit = (data) => {
        reset();
        setIsCompleteApplication(true);
    };

    return (
        <>
            <form className="gp-right" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="heading">Summary</h3>
                <p>Review and confirm your application details. </p>
                <div className="form-area">
                    <div className="summary-area">
                        <div className="summary-item">
                            <div className="summary-title">
                                <h4>
                                    Business Details
                                    <button
                                        className="button button-dark summary-icon"
                                        onClick={() => renderEditTab('1')}
                                    >
                                        <img src={EditIcon} />
                                        Edit Business Details
                                    </button>
                                </h4>
                            </div>
                            <div className="sm-item">
                                <label>Legal business name</label>
                                <label>
                                    {get(businessDetails, 'businessName', '-')}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Doing business as</label>
                                <label>
                                    {get(businessDetails, 'businessAs', '-')}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Business category</label>
                                <label>
                                    {get(
                                        businessDetails,
                                        'businessCategory.label',
                                        '-'
                                    )}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Tax ID type</label>
                                <label>
                                    {get(
                                        businessDetails,
                                        'textIdType.label',
                                        '-'
                                    )}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>
                                    Employer identification number (EIN)
                                </label>
                                <label>
                                    {get(
                                        businessDetails,
                                        'employerIdentificationNumber',
                                        '-'
                                    )}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>State of incorporation</label>
                                <label>
                                    {get(
                                        businessDetails,
                                        'stateOfIncorportation.label',
                                        '-'
                                    )}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Date of incorporation</label>
                                <label>
                                    {get(
                                        businessDetails,
                                        'dateOfIncorportation',
                                        '-'
                                    )}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Prior bankruptcy</label>
                                <label>
                                    {get(businessDetails, 'bankruptcy', '-')}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>
                                    Estimated average sales volume on ShopDot
                                    (Monthly)
                                </label>
                                <label>
                                    {get(businessDetails, 'averageSales', '-')}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Average purchase (annual)</label>
                                <label>
                                    {get(
                                        businessDetails,
                                        'averageSalePrice',
                                        '-'
                                    )}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Average delivery time</label>
                                <label>
                                    {get(
                                        businessDetails,
                                        'averageDeliveryTime.label',
                                        '-'
                                    )}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Merchant category code</label>
                                <label>
                                    {get(
                                        businessDetails,
                                        'merchantCategoryCode.label',
                                        '-'
                                    )}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Sales method</label>
                                <label>
                                    {get(
                                        businessDetails,
                                        'salesMethod.label',
                                        '-'
                                    )}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Product description</label>
                                <label>
                                    {get(
                                        businessDetails,
                                        'productionDescription',
                                        '-'
                                    )}
                                </label>
                            </div>
                        </div>
                        <div className="summary-item mt-3">
                            <div className="summary-title">
                                <h4>
                                    Business Representative
                                    <button
                                        className="button button-dark summary-icon"
                                        onClick={() => renderEditTab('2')}
                                    >
                                        <img src={EditIcon} />
                                        Edit Business Representative
                                    </button>
                                </h4>
                            </div>
                            <div className="sm-item">
                                <label>Legal name of person</label>
                                <label>
                                    {get(personalDetails, 'fname', '-')}{' '}
                                    {get(personalDetails, 'lname', '-')}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Phone number</label>
                                <label>
                                    {get(personalDetails, 'phoneNumber', '-')}
                                </label>
                            </div>

                            <div className="sm-item">
                                <label>SSN</label>
                                <label>
                                    {get(personalDetails, 'ssn', '-')}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Date of birth</label>
                                <label>
                                    {get(personalDetails, 'dob', '-')}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Address</label>
                                <label>
                                    {get(
                                        personalDetails,
                                        'stateAddress.label',
                                        '-'
                                    )}
                                    <br />
                                    {get(personalDetails, 'addressLine1', '-')}
                                    <br />
                                    {get(personalDetails, 'addressLine2', '-')}
                                    <br />
                                    {get(personalDetails, 'city', '-')}{' '}
                                    {get(personalDetails, 'zipcode', '-')}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label className="sm-sub-title">
                                    Secondary Identification
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Identification type</label>
                                <label>
                                    {get(
                                        personalDetails,
                                        'secondaryIdentificationType.label',
                                        '-'
                                    )}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>ID number</label>
                                <label>
                                    {get(personalDetails, 'idNumber', '-')}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>State of issuance</label>
                                <label>
                                    {get(
                                        personalDetails,
                                        'soInsurence.label',
                                        '-'
                                    )}
                                </label>
                            </div>
                        </div>
                        <div className="summary-item mt-3">
                            <div className="summary-title">
                                <h4>
                                    Bank Details
                                    <button
                                        className="button button-dark summary-icon"
                                        onClick={() => renderEditTab('3')}
                                    >
                                        <img src={EditIcon} />
                                        Edit Bank Details
                                    </button>
                                </h4>
                            </div>
                            <div className="sm-item">
                                <label>Name of the bank account holder</label>
                                <label>
                                    {get(bankDetails, 'accountHolderName', '-')}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Bank account type</label>
                                <label>
                                    {get(bankDetails, 'accountType.label', '-')}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Purpose</label>
                                <label>
                                    {get(bankDetails, 'accountRole.label', '-')}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Account number</label>
                                <label>
                                    {get(bankDetails, 'accountNumber', '-')}
                                </label>
                            </div>
                            <div className="sm-item">
                                <label>Routing number</label>
                                <label>
                                    {get(bankDetails, 'routingNumber', '-')}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-area check-box summary-checklist">
                    <label htmlFor="check-a" className="checkbox">
                        <input
                            type="checkbox"
                            name="cehck-a"
                            id="check-a"
                            {...register('confirmation', { required: true })}
                        />
                        <div className="checkbox-text">
                            <span>
                                I confirm that the details I have entered are
                                true.
                            </span>
                        </div>
                        {errors.confirmation && (
                            <span className="error-text">
                                {errors.confirmation?.message}
                            </span>
                        )}
                    </label>
                    <label htmlFor="check-b" className="checkbox">
                        <input
                            type="checkbox"
                            name="check-b"
                            id="check-b"
                            {...register('tnc', { required: true })}
                        />
                        <div className="checkbox-text">
                            <span>
                                I agree with the{' '}
                                <LinkMod to={tAndCDoc} target="_blank">
                                    Terms and Conditions
                                </LinkMod>{' '}
                                set by Priority Technology Holdings, Inc.
                                (&quot;PRTH&quot;)
                            </span>
                        </div>
                        {errors.tnc && (
                            <span className="error-text">
                                {errors.tnc?.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-area">
                    <div className="form-input form-submit">
                        <button className="button w-100" type="submit">
                            Confirm
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

Summary.propTypes = {
    handleChangeTab: PropTypes.func,
    setIsCompleteApplication: PropTypes.func,
    setIsEdited: PropTypes.func,
};
