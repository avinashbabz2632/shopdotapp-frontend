import React, { lazy, useState, Suspense, useCallback, useEffect } from 'react';
import gpLogo from '../../images/gp-logo.jpg';
import BusinessOwnerModel from './businessOwnerModel';
import AuthorizedSignerModel from './AuthorizedSignerModel';
import { useDispatch, useSelector } from 'react-redux';
import {
  setGettingPaidPreferance,
  setRepresentativeDetails,
  setBankDetails,
  setBusinessDetails,
} from '../../../../redux/Brand/GettingPaid/gettingPaidSlice';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import merchantServices from '../../../../../src/assets/merchant.pdf';
import ConfirmationModel from './ConfirmationModel';
import { isEmpty, isNil } from 'lodash';
import {
  selectBusinessDetails,
  selectRepresentativeDetails,
  selectBankDetails,
} from '../../../../redux/Brand/GettingPaid/gettingPaidSelector';
import { selectBrandProfileDetails } from '../../../../redux/Brand/Profile/brandProfileSelectors';

//paid component
const BusinessDetails = lazy(() => import('./BusinessDetails'));
const BankDetails = lazy(() => import('./BankDetails'));
const Summary = lazy(() => import('./Summary'));
const BusinessRepresentative = lazy(() => import('./BusinessRepresentative'));
const GettingPaid = lazy(() => import('./GettingPaid'));
const EditBankDetails = lazy(() => import('./EditBankDetails'));

export default function BrandPaid() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalOpen, setOpen] = useState(false);
  const [isConfirmBackModel, setIsConfirmBackModel] = useState(false);
  const [tabCode, setTabCode] = useState('1');
  const [startingTab, setStartingTab] = useState(false);
  const [isCompleteApplication, setIsCompleteApplication] = useState(false);
  const [editBankDetails, setEditBankDetails] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const businessDetails = useSelector(selectBusinessDetails);
  const personalDetails = useSelector(selectRepresentativeDetails);
  const bankDetails = useSelector(selectBankDetails);
  const brandProfileDetails = useSelector(selectBrandProfileDetails);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // eslint-disable-next-line no-shadow
  const handleChangeTab = (tabCode) => {
    const myDiv = document.getElementById('content-wrapper');
    myDiv.scrollTop = 0;
    setTabCode(tabCode);
  };

  const publiclyTraded = watch('publiclyTraded');
  const authorizedSign = watch('authorizedSign');
  const businessOwner = watch('businessOwner');
  useEffect(() => {
    if (authorizedSign === 'no') {
      setOpen(true);
    } else if (publiclyTraded === 'no' && authorizedSign === 'no') {
      setIsOpen(true);
    } else if (
      publiclyTraded === 'no' &&
      authorizedSign === 'yes' &&
      businessOwner === 'no'
    ) {
      setIsOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publiclyTraded, authorizedSign, businessOwner]);

  const onSubmit = (data) => {
    dispatch(setGettingPaidPreferance(data));
    setStartingTab(true);
  };
  const opencloseRetailerModal = useCallback(() => {
    setIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  const opencloseModal = useCallback(() => {
    setOpen(!modalOpen);
  }, [modalOpen]);

  const handleConfirmationModelClose = useCallback(() => {
    setIsConfirmBackModel(false);
  }, [isConfirmBackModel]);

  const handleConfirmationModelOpen = useCallback(() => {
    setIsConfirmBackModel(true);
  }, [isConfirmBackModel]);

  const handleConfirmModel = useCallback(() => {
    if (Number(tabCode) === 1) {
      setStartingTab(false);
      dispatch(setBusinessDetails({}));
    } else {
      handleChangeTab(Number(tabCode) - 1);
      if (Number(tabCode) === 2) {
        dispatch(setRepresentativeDetails([]));
      }
      if (Number(tabCode) === 3) {
        dispatch(setBankDetails({}));
      }
    }
    setIsConfirmBackModel(false);
  }, [isConfirmBackModel]);

  const renderTab = () => {
    const renderComponent = {
      1: (
        <BusinessDetails
          isEdited={isEdited}
          setIsEdited={setIsEdited}
          setStartingTab={setStartingTab}
          handleChangeTab={handleChangeTab}
          handleConfirmationModelClose={handleConfirmationModelOpen}
        />
      ),
      2: (
        <BusinessRepresentative
          isEdited={isEdited}
          setIsEdited={setIsEdited}
          handleChangeTab={handleChangeTab}
          handleConfirmationModelClose={handleConfirmationModelOpen}
        />
      ),
      3: (
        <BankDetails
          isEdited={isEdited}
          setIsEdited={setIsEdited}
          handleChangeTab={handleChangeTab}
          handleConfirmationModelClose={handleConfirmationModelOpen}
        />
      ),
      4: (
        <Summary
          setIsEdited={setIsEdited}
          handleChangeTab={handleChangeTab}
          setIsCompleteApplication={setIsCompleteApplication}
          handleConfirmationModelClose={handleConfirmationModelOpen}
        />
      ),
    };
    return renderComponent[tabCode];
  };

  const renderStartingTab = () => {
    return (
      <>
        <div className="form-input preferences-item">
          <h4 className="gp-intro-text">
            {' '}
            <span>
              ShopDot, Inc. works with Priority Technology Holdings, Inc.
              (&#34;PRTH&#34;) to provide merchant accounts for businesses.
              Priority helps process your retailer&apos;s payment transactions
              and deposits the funds into your account. To enable merchant
              account services through Priority, please complete the following
              application. See Priority{' '}
              <Link
                to={merchantServices}
                className="link-text fw-700"
                target="_blank"
              >
                Terms and Conditions
              </Link>
              .
            </span>
          </h4>
        </div>
        <div className="">
          <div className="gp-note">
            <h3 className="mb-2">Before Starting</h3>
            <p>
              Please review the{' '}
              <Link
                to="https://help.shopdotapp.com/en/articles/6549763-getting-paid"
                target="_blank"
                className="link-text fw-700"
              >
                Setup Guide
              </Link>{' '}
              before starting the application. Once you submit your application,
              you will need to contact us at{' '}
              <a
                href="mailto:support@shopdotapp.com"
                className="fw-700 text-none"
              >
                support@shopdotapp.com
              </a>{' '}
              to make any changes.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-input return_select-item radio-business radio-row mt-4">
            <p className="mb-0">
              Is your business a publicly traded C_Corporation or non-profit?{' '}
            </p>
            <div className="mt-2 radio-flex">
              <label className="radiobox">
                <input
                  type="radio"
                  {...register('publiclyTraded')}
                  value="yes"
                />
                <div className="radiobox-text">
                  <span>Yes</span>
                </div>
              </label>
              <label className="radiobox">
                <input
                  type="radio"
                  {...register('publiclyTraded')}
                  value="no"
                />
                <div className="radiobox-text">
                  <span>No</span>
                </div>
              </label>
            </div>
          </div>
          <div className="form-input return_select-item radio-authorizedsign radio-row">
            <p className="mb-0">Are you an authorized signer? </p>
            <div className="mt-2 radio-flex">
              <label className="radiobox">
                <input
                  type="radio"
                  {...register('authorizedSign')}
                  value="yes"
                />
                <div className="radiobox-text">
                  <span>Yes</span>
                </div>
              </label>
              <label className="radiobox">
                <input
                  type="radio"
                  {...register('authorizedSign')}
                  value="no"
                />
                <div className="radiobox-text">
                  <span>No</span>
                </div>
              </label>
            </div>
            <p className="mt-3">
              This application must be completed by an <b>authorized signer</b>{' '}
              with authority to sign the Priority{' '}
              <Link
                to={merchantServices}
                className="link-text fw-700"
                target="_blank"
              >
                Terms and Conditions
              </Link>{' '}
              on behalf of the company.
            </p>
          </div>
          {watch('publiclyTraded') === 'no' &&
            watch('authorizedSign') === 'yes' && (
              <div
                className="form-input return_select-item radio-businessowner radio-row"
                style={{ display: 'block' }}
              >
                <p className="mb-0">Are you a business owner? </p>
                <div className="mt-2 radio-flex">
                  <label className="radiobox">
                    <input
                      type="radio"
                      {...register('businessOwner')}
                      value="yes"
                    />
                    <div className="radiobox-text">
                      <span>Yes</span>
                    </div>
                  </label>
                  <label className="radiobox">
                    <input
                      type="radio"
                      {...register('businessOwner')}
                      value="no"
                    />
                    <div className="radiobox-text">
                      <span>No</span>
                    </div>
                  </label>
                </div>

                <p className="mt-3">
                  This application must be completed by a <b>business owner</b>{' '}
                  who owns 25% or more of the business entity. In addition, any
                  person or legal entity with 25% or more ownership must be
                  identified and provide basic information for the application.
                </p>
              </div>
            )}
          {(publiclyTraded === 'yes' &&
            authorizedSign === 'no' &&
            brandProfileDetails?.brand_profile?.id) ||
          (publiclyTraded === 'no' &&
            authorizedSign === 'yes' &&
            businessOwner === 'yes') ||
          (publiclyTraded === 'yes' && authorizedSign === 'yes') ? (
            <div className="form-input mb-3">
              <button
                type="submit"
                className="button btn-lg StartApplicationOwner"
                style={{ display: 'inline-flex' }}
              >
                Start Application
              </button>
            </div>
          ) : (
            <div className="form-input mb-3">
              <button
                type="submit"
                className="button btn-lg StartApplicationOwner"
                disabled="disabled"
                style={{ display: 'inline-flex' }}
              >
                Start Application
              </button>
            </div>
          )}
        </form>

        <BusinessOwnerModel
          modalIsOpen={modalIsOpen}
          opencloseRetailerModal={opencloseRetailerModal}
        />
        <AuthorizedSignerModel
          modalIsOpen={modalOpen}
          opencloseRetailerModal={opencloseModal}
        />
      </>
    );
  };

  return (
    <div className="pc_tabs-content tabs_body">
      <div className="tab active" data-target="Integration">
        <div className="products_content">
          <div className="products_body" id="content-wrapper">
            <div className="content_area overflow-hidden">
              <h2 className="heading">
                Getting Paid
                <img src={gpLogo} className="company-logo" />
              </h2>
              <div id="gettingpaid">
                <div className="gettingpaid_info">
                  {!isCompleteApplication &&
                    !editBankDetails &&
                    startingTab && (
                      <div className="gettingpaid-tab">
                        <div className="gp-left">
                          <div className="gp-link-area">
                            <a
                              className={tabCode == '1' ? 'active' : ''}
                              onClick={() => handleChangeTab('1')}
                            >
                              Business Details
                            </a>
                            <a
                              className={tabCode == '2' ? 'active' : ''}
                              onClick={() => {
                                !isNil(businessDetails) &&
                                  !isEmpty(businessDetails) &&
                                  handleChangeTab('2');
                              }}
                            >
                              Business Representative
                            </a>
                          </div>
                          <div className="gp-link-area">
                            <a
                              className={tabCode == '3' ? 'active' : ''}
                              onClick={() => {
                                !isNil(personalDetails) &&
                                  !isEmpty(personalDetails) &&
                                  handleChangeTab('3');
                              }}
                            >
                              Bank Details
                            </a>
                          </div>
                          <div className="gp-link-area">
                            <a
                              className={tabCode == '4' ? 'active' : ''}
                              onClick={() => {
                                !isNil(bankDetails) &&
                                  !isEmpty(bankDetails) &&
                                  handleChangeTab('4');
                              }}
                            >
                              Summary
                            </a>
                          </div>
                        </div>
                        <Suspense fallback={null}>
                          {!isCompleteApplication && renderTab()}
                        </Suspense>
                      </div>
                    )}
                  {isCompleteApplication && !editBankDetails && (
                    <GettingPaid
                      setEditBankDetails={setEditBankDetails}
                      handleChangeTab={handleChangeTab}
                      setIsCompleteApplication={setIsCompleteApplication}
                    />
                  )}
                  {editBankDetails && (
                    <EditBankDetails setEditBankDetails={setEditBankDetails} />
                  )}
                  {!isCompleteApplication &&
                    !startingTab &&
                    !editBankDetails &&
                    renderStartingTab()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmationModel
        modalIsOpen={isConfirmBackModel}
        closeConfirmationModal={handleConfirmationModelClose}
        handleConfirmModel={handleConfirmModel}
      />
    </div>
  );
}
