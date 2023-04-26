import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from '../../images/edit.svg';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { get, map } from 'lodash';
import merchantServices from '../../../../../src/assets/merchant.pdf';
import {
  selectBankDetails,
  selectBusinessDetails,
  selectRepresentativeDetails,
  selectGettingPaidPreferance,
} from '../../../../redux/Brand/GettingPaid/gettingPaidSelector';
import { SummaryValidationSchema } from './ValidationSchema';
import '../../Style/brand.style.scss';
import '../../Style/brand.media.scss';
import '../../Style/brand.dev.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { selectUserDetails } from '../../../../redux/user/userSelector';
import { brandAsCustomerAction } from '../../../../actions/brandActions';

export default function Summary({
  handleChangeTab,
  setIsCompleteApplication,
  setIsEdited,
  handleConfirmationModelClose,
}) {
  const bankDetails = useSelector(selectBankDetails);
  const representativeDetails = useSelector(selectRepresentativeDetails);
  const businessDetails = useSelector(selectBusinessDetails);
  const paidPreferance = useSelector(selectGettingPaidPreferance);
  const useDetails = useSelector(selectUserDetails);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
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
    console.log('representativeDetails', representativeDetails);
    let representativeArray = [];
    map(representativeDetails, (rep, key) => {
      const data = {
        firstName: rep?.fname,
        lastName: rep?.lname,
        ssn: rep?.ssn,
        dob: moment(rep?.dob).format('MM/DD/YYYY'),
        workPhone: rep?.phoneNumber,
        email: rep?.email,
        mailingAddress: [
          {
            addressLine1: rep?.addressLine1,
            addressLine2: rep?.addressLine2,
            city: rep?.city,
            state: rep?.stateAddress.value,
            zip: rep?.zipcode,
            isPrimary: key === 0,
          },
        ],
        actAsAuthorizedSignatory: key === 0,
        secondaryIdentification: {
          type: rep?.secondaryIdentificationType.value,
          id: rep?.idNumber,
          stateOfIssuance: rep?.soInsurence?.value,
          //   "countryOfIssuance": "US"
        },
        isUSCitizen: rep?.UScitizen === 'yes',
        businessDetails: {
          title: 'Secretary',
          ownershipPercentage: rep?.percentageOwnership,
        },
      };
      representativeArray.push(data);
    });

    const formData = {
      legal_name: businessDetails.businessName,
      doing_business_as: businessDetails.businessAs,
      business_email: businessDetails.businessEmail,
      business_website: businessDetails.website,
      business_category: businessDetails?.businessCategory?.value,
      ein: businessDetails.employerIdentificationNumber,
      ssn: businessDetails?.socialSecurityNumber,
      state_of_incorporation: businessDetails?.stateOfIncorportation?.value,
      date_of_incorporation: moment(
        businessDetails?.dateOfIncorportation
      ).format('MM/DD/YYYY'),
      taxIdType: businessDetails?.textIdType ?? 'ein',
      prior_bankruptcy: businessDetails?.bankruptcy === 'true' ? true : false,
      date_of_discharge: moment(businessDetails?.dateOfDischarge).format(
        'MM/DD/YYYY'
      ),
      average_sales_volume: businessDetails?.averageSales,
      average_purchase: businessDetails?.averageSalePrice,
      average_delivery_time: businessDetails?.averageDeliveryTime?.value,
      merchant_category_code: businessDetails?.merchantCategoryCode?.value,
      sales_method: businessDetails?.merchantCategoryCode?.label,
      product_description: businessDetails?.productionDescription,
      brand_user_id: useDetails.id,
      account_type: 'SAVINGS',
      purpose: 'CONSUMER',
      countryOfIssuance: businessDetails?.countryAddress?.value,
      C_Corp_publicly_traded_or_non_profit:
        paidPreferance.publiclyTraded === 'yes' ? 'YES' : 'NO',
      business_owner: paidPreferance.authorizedSign === 'yes' ? 'YES' : 'NO',
      representatives: representativeArray,
    };

    const bankFormData = {
      account_holder_name: bankDetails.accountHolderName,
      account_type: bankDetails.accountType.value,
      purpose: bankDetails.accountRole.value,
      routing_number: bankDetails.routingNumber,
      account_number: bankDetails.accountNumber,
    };

    if (!formData.taxIdType) {
      delete formData.taxIdType;
    }
    if (
      !formData.date_of_discharge ||
      formData.date_of_discharge === 'Invalid date'
    ) {
      delete formData.date_of_discharge;
    }
    if (!formData.ssn) {
      delete formData.ssn;
    }

    dispatch(brandAsCustomerAction(formData, bankFormData));
    // reset();
    // setIsCompleteApplication(true);
  };

  const tnc = watch('tnc');
  const confirmation = watch('confirmation');

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
                    className="button button-dark"
                    onClick={() => renderEditTab('1')}
                  >
                    <img src={EditIcon} />
                    Edit Business Details
                  </button>
                </h4>
              </div>
              <div className="sm-item">
                <label>Legal name of business</label>
                <label>{get(businessDetails, 'businessName', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Doing business as</label>
                <label>{get(businessDetails, 'businessAs', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Business website address</label>
                <label>{get(businessDetails, 'website', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Business email address</label>
                <label>{get(businessDetails, 'businessEmail', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Business category</label>
                <label>
                  {get(businessDetails, 'businessCategory.label', '-')}
                </label>
              </div>
              <div className="sm-item">
                <label>Business phone number</label>
                <label>{get(businessDetails, 'phoneNumber', '-')}</label>
              </div>
              <div className="sm-item">
                <label>C_Corp - Publicly Traded or Non-Profit</label>
                <label>{get(paidPreferance, 'publiclyTraded', '-')}</label>
              </div>
              {paidPreferance?.publiclyTraded === 'no' && (
                <div className="sm-item">
                  <label>Tax ID type</label>
                  <label>{get(businessDetails, 'textIdType.label', '-')}</label>
                </div>
              )}

              {paidPreferance?.publiclyTraded === 'no' &&
              businessDetails?.textIdType?.value === 'ssn' ? (
                <div className="sm-item">
                  <label>Social Security Number (SSN)</label>
                  <label>
                    {get(businessDetails, 'socialSecurityNumber', '-')}
                  </label>
                </div>
              ) : (
                <div className="sm-item">
                  <label>Employer identification number (EIN)</label>
                  <label>
                    {get(businessDetails, 'employerIdentificationNumber', '-')}
                  </label>
                </div>
              )}
              <div className="sm-item">
                <label>Address</label>
                <label>
                  {get(businessDetails, 'countryAddress.label', '-')}
                  <br />
                  {get(businessDetails, 'stateAddress.label', '-')}
                  <br />
                  {get(businessDetails, 'addressLine1', '-')}
                  <br />
                  {get(businessDetails, 'addressLine2', '-')}
                  <br />
                  {get(businessDetails, 'city', '-')}{' '}
                  {get(businessDetails, 'zipcode', '-')}
                </label>
              </div>
              <div className="sm-item">
                <label>State of incorporation</label>
                <label>
                  {get(businessDetails, 'stateOfIncorportation.label', '-')}
                </label>
              </div>
              <div className="sm-item">
                <label>Date of incorporation</label>
                <label>
                  {get(businessDetails, 'dateOfIncorportation', '-')}
                </label>
              </div>
              <div className="sm-item">
                <label>Prior bankruptcy</label>
                <label>{get(businessDetails, 'bankruptcy', '-')}</label>
              </div>
              <div className="sm-item">
                <label>
                  Estimated average sales volume on ShopDot (Monthly)
                </label>
                <label>${get(businessDetails, 'averageSales', '-')}</label>
              </div>
              <div className="sm-item">
                <label>
                  Estimated average wholesale price on ShopDot (per item)
                </label>
                <label>${get(businessDetails, 'averageSalePrice', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Average delivery time</label>
                <label>
                  {get(businessDetails, 'averageDeliveryTime.label', '-')}
                </label>
              </div>
              <div className="sm-item">
                <label>Merchant category code</label>
                <label>
                  {get(businessDetails, 'merchantCategoryCode.label', '-')}
                </label>
              </div>
              <div className="sm-item">
                <label>Sales method</label>
                <label>{get(businessDetails, 'salesMethod.label', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Product description</label>
                <label>
                  {get(businessDetails, 'productionDescription', '-')}
                </label>
              </div>
            </div>
            {representativeDetails.length > 0 &&
              representativeDetails.map((item, index) => {
                return (
                  <div className="summary-item mt-3" key={index}>
                    <div className="summary-title">
                      <h4>
                        Business Representative <span>#{index + 1}</span>
                        <button
                          className="button button-dark"
                          onClick={() => renderEditTab('2')}
                        >
                          <img src={EditIcon} />
                          Edit Business Representative
                        </button>
                      </h4>
                    </div>
                    <div className="sm-item">
                      <label>Legal name of business representative</label>
                      <label>
                        {get(item, 'fname', '-')} {get(item, 'lname', '-')}
                      </label>
                    </div>
                    <div className="sm-item">
                      <label>Phone number</label>
                      <label>{get(item, 'phoneNumber', '-')}</label>
                    </div>

                    <div className="sm-item">
                      <label>Social Security Number (SSN)</label>
                      <label>{get(item, 'ssn', '-')}</label>
                    </div>
                    <div className="sm-item">
                      <label>Date of birth</label>
                      <label>{get(item, 'dob', '-')}</label>
                    </div>
                    <div className="sm-item">
                      <label>Email address</label>
                      <label>{get(item, 'email', '-')}</label>
                    </div>
                    <div className="sm-item">
                      <label>Address</label>
                      <label>
                        {get(item, 'stateAddress.label', '-')}
                        <br />
                        {get(item, 'addressLine1', '-')}
                        <br />
                        {get(item, 'addressLine2', '-')}
                        <br />
                        {get(item, 'city', '-')} {get(item, 'zipcode', '-')}
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
                        {get(item, 'secondaryIdentificationType.label', '-')}
                      </label>
                    </div>
                    <div className="sm-item">
                      <label>ID number</label>
                      <label>{get(item, 'idNumber', '-')}</label>
                    </div>
                    <div className="sm-item">
                      <label>State of issuance</label>
                      <label>
                        {get(item, 'soInsurence.label', null) ??
                          get(item, 'stateAddress.label', '-')}
                      </label>
                    </div>
                    {index === 0 && (
                      <div className="sm-item">
                        <label>Authorized signer</label>
                        <label>
                          {get(paidPreferance, 'authorizedSign', '-')}
                        </label>
                      </div>
                    )}
                    <div className="sm-item">
                      <label>Business owner</label>
                      <label>
                        {get(paidPreferance, 'businessOwner', 'yes')}
                      </label>
                    </div>
                    <div className="sm-item">
                      <label>U.S. citizen</label>
                      <label>{get(item, 'UScitizen', '-')}</label>
                    </div>
                    <div className="sm-item">
                      <label>Percentage ownership</label>
                      <label>
                        {' '}
                        {get(item, 'percentageOwnership', 0)
                          ? get(item, 'percentageOwnership')
                          : 0}
                        %
                      </label>
                    </div>
                  </div>
                );
              })}

            <div className="summary-item mt-3">
              <div className="summary-title">
                <h4>
                  Bank Details
                  <button
                    className="button button-dark"
                    onClick={() => renderEditTab('3')}
                  >
                    <img src={EditIcon} />
                    Edit Bank Details
                  </button>
                </h4>
              </div>
              <div className="sm-item">
                <label>Name of the bank account holder</label>
                <label>{get(bankDetails, 'accountHolderName', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Bank account type</label>
                <label>{get(bankDetails, 'accountType.label', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Purpose</label>
                <label>{get(bankDetails, 'accountRole.label', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Account number</label>
                <label>{get(bankDetails, 'accountNumber', '-')}</label>
              </div>
              <div className="sm-item">
                <label>Routing number</label>
                <label>{get(bankDetails, 'routingNumber', '-')}</label>
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
                <Link to={merchantServices} target="_blank">
                  Terms and Conditions
                </Link>{' '}
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
            <button
              type="button"
              onClick={() => handleConfirmationModelClose()}
              className="button button-grey cancel"
            >
              Back
            </button>
            <button
              disabled={!isValid}
              type="submit"
              className="button summary-icon"
            >
              Submit
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
  handleConfirmationModelClose: PropTypes.func,
};
