import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '../../images/edit.svg';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
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
import { brandAsCustomerAction } from '../../../../actions/brandActions';
import { selectUserDetails } from '../../../../redux/user/userSelector';
import moment from 'moment';

export default function Summary({
  handleChangeTab,
  setIsCompleteApplication,
  setIsEdited,
}) {
  const bankDetails = useSelector(selectBankDetails);
  const personalDetails = useSelector(selectRepresentativeDetails);
  const businessDetails = useSelector(selectBusinessDetails);
  const useDetails = useSelector(selectUserDetails);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SummaryValidationSchema) });

  const renderEditTab = (tabCode) => {
    handleChangeTab(tabCode);
    setIsEdited(true);
  };

  const onSubmit = (data) => {
    const formData = {
      legal_name: businessDetails.legal_name,
      doing_business_as: businessDetails.doing_business_as,
      business_category: businessDetails.business_category.value,
      ein: businessDetails.ein,
      state_of_incorporation: businessDetails.state_of_incorporation.value,
      date_of_incorporation: moment(
        businessDetails.date_of_incorporation
      ).format('MM/DD/YYYY'),
      address_line_1: personalDetails.address_line_1,
      address_line_2: personalDetails.address_line_1,
      city: personalDetails.citySelect.value,
      state: personalDetails.state.value,
      zip: personalDetails.zip,
      owner_first_name: personalDetails.owner_first_name,
      owner_last_name: personalDetails.owner_last_name,
      owner_phone: personalDetails.owner_phone,
      owner_dob: personalDetails.owner_dob,
      ssn: personalDetails.ssn,
      secondary_identification_type:
        personalDetails.secondary_identification_type.value,
      identification_state_of_issuance:
        personalDetails.identification_state_of_issuance.value,
      countryOfIssuance: personalDetails.identification_state_of_issuance.value,
      identification_id: personalDetails.identification_id,
      prior_bankruptcy: businessDetails.prior_bankruptcy == 'no' ? false : true,
      average_sales_volume: businessDetails.average_sales_volume
        ? Number(businessDetails.average_sales_volume)
        : 0,
      average_purchase: businessDetails.average_purchase
        ? Number(businessDetails.average_purchase)
        : 0,
      average_delivery_time: businessDetails.average_delivery_time.value,
      merchant_category_code: businessDetails.merchant_category_code.value,
      sales_method: businessDetails.sales_method.value,
      product_description: businessDetails.product_description,
      taxIdType: businessDetails.textIdType
        ? businessDetails.textIdType.value
        : null,
      brand_user_id: useDetails.id,
      date_of_discharge: businessDetails.dateOfDischarge,
      account_type: bankDetails.account_type.value,
      purpose: bankDetails.purpose.value,
    };

    if (!formData.taxIdType) {
      delete formData.taxIdType;
    }
    if (!formData.date_of_discharge) {
      delete formData.date_of_discharge;
    }
    if (!formData.ssn) {
      delete formData.ssn;
    }

    dispatch(brandAsCustomerAction(formData, bankDetails));
    // reset();
    // setIsCompleteApplication(true);
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
                <label>{get(businessDetails, 'legal_name', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Doing business as</label>
                <label>{get(businessDetails, 'doing_business_as', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Business category</label>
                <label>
                  {get(businessDetails, 'business_category.label', '-')}
                </label>
              </div>
              <div className="sm-item">
                <label>Tax ID type</label>
                <label>{get(businessDetails, 'textIdType.label', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Employer identification number (EIN)</label>
                <label>{get(businessDetails, 'ein', '-')}</label>
              </div>
              <div className="sm-item">
                <label>State of incorporation</label>
                <label>
                  {get(businessDetails, 'state_of_incorporation.label', '-')}
                </label>
              </div>
              <div className="sm-item">
                <label>Date of incorporation</label>
                <label>
                  {get(businessDetails, 'date_of_incorporation', '-')}
                </label>
              </div>
              <div className="sm-item">
                <label>Prior bankruptcy</label>
                <label>{get(businessDetails, 'prior_bankruptcy', '-')}</label>
              </div>
              <div className="sm-item">
                <label>
                  Estimated average sales volume on ShopDot (Monthly)
                </label>
                <label>
                  {get(businessDetails, 'average_sales_volume', '-')}
                </label>
              </div>
              <div className="sm-item">
                <label>Average purchase (annual)</label>
                <label>{get(businessDetails, 'average_purchase', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Average delivery time</label>
                <label>
                  {get(businessDetails, 'average_delivery_time.label', '-')}
                </label>
              </div>
              <div className="sm-item">
                <label>Merchant category code</label>
                <label>
                  {get(businessDetails, 'merchant_category_code.label', '-')}
                </label>
              </div>
              <div className="sm-item">
                <label>Sales method</label>
                <label>{get(businessDetails, 'sales_method.label', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Product description</label>
                <label>
                  {get(businessDetails, 'product_description', '-')}
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
                  {get(personalDetails, 'owner_first_name', '-')}{' '}
                  {get(personalDetails, 'owner_last_name', '-')}
                </label>
              </div>
              <div className="sm-item">
                <label>Phone number</label>
                <label>{get(personalDetails, 'owner_phone', '-')}</label>
              </div>

              <div className="sm-item">
                <label>SSN</label>
                <label>{get(personalDetails, 'ssn', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Date of birth</label>
                <label>{get(personalDetails, 'owner_dob', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Address</label>
                <label>
                  {get(personalDetails, 'state.label', '-')}
                  <br />
                  {get(personalDetails, 'address_line_1', '-')}
                  <br />
                  {get(personalDetails, 'address_line_2', '-')}
                  <br />
                  {get(personalDetails, 'city', '-')}{' '}
                  {get(personalDetails, 'zip', '-')}
                </label>
              </div>
              <div className="sm-item">
                <label className="sm-sub-title">Secondary Identification</label>
              </div>
              <div className="sm-item">
                <label>Identification type</label>
                <label>
                  {get(
                    personalDetails,
                    'identification_state_of_issuance.label',
                    '-'
                  )}
                </label>
              </div>
              <div className="sm-item">
                <label>ID number</label>
                <label>{get(personalDetails, 'identification_id', '-')}</label>
              </div>
              <div className="sm-item">
                <label>State of issuance</label>
                <label>
                  {get(
                    personalDetails,
                    'identification_state_of_issuance.label',
                    '-'
                  )}
                </label>
              </div>
            </div>
            <div className="summary-item">
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
                <label>{get(bankDetails, 'account_holder_name', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Bank account type</label>
                <label>{get(bankDetails, 'account_type.label', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Purpose</label>
                <label>{get(bankDetails, 'purpose.label', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Account number</label>
                <label>{get(bankDetails, 'account_number', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Routing number</label>
                <label>{get(bankDetails, 'routing_number', '-')}</label>
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
              <span>I confirm that the details I have entered are true.</span>
            </div>
            {errors.confirmation && (
              <span className="error-text">{errors.confirmation?.message}</span>
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
                set by Priority Technology Holdings, Inc. (&quot;PRTH&quot;)
              </span>
            </div>
            {errors.tnc && (
              <span className="error-text">{errors.tnc?.message}</span>
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
