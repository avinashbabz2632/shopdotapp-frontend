import React, { lazy, useState, Suspense, useEffect } from 'react';
import gpLogo from '../../images/gp-logo.jpg';
import Loader from '../../../../components/Loader';
import GpInfoIcon from '../../images/gp-info.svg';
import GpTimeIcon from '../../images/gp-time.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getBrandBankDetailsAction } from '../../../../actions/brandActions';
import { selectUserDetails } from '../../../../redux/user/userSelector';
import { ToastContainer } from 'react-toastify';
import { selectPaidDetails } from '../../../../redux/Brand/GettingPaid/gettingPaidSelector';
import { selectBrandProfileDetails } from '../../../../redux/Brand/Profile/brandProfileSelectors';

//paid component
const BusinessDetails = lazy(() => import('./BusinessDetails'));
const BankDetails = lazy(() => import('./BankDetails'));
const Summary = lazy(() => import('./Summary'));
const BusinessRepresentative = lazy(() => import('./BusinessRepresentative'));
const GettingPaid = lazy(() => import('./GettingPaid'));
const EditBankDetails = lazy(() => import('./EditBankDetails'));

export default function BrandPaid() {
  const dispatch = useDispatch();
  const paidDetails = useSelector(selectPaidDetails);
  const brandProfileDetails = useSelector(selectBrandProfileDetails);
  const [tabCode, setTabCode] = useState('1');
  const [startingTab, setStartingTab] = useState(false);
  const [isCompleteApplication, setIsCompleteApplication] = useState(false);
  const [editBankDetails, setEditBankDetails] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  // eslint-disable-next-line no-shadow
  const handleChangeTab = (tabCode) => {
    const myDiv = document.getElementById('content-wrapper');
    myDiv.scrollTop = 0;
    setTabCode(tabCode);
  };

  useEffect(() => {
    if (brandProfileDetails?.payment_detail?.customer_id) {
      if (brandProfileDetails?.payment_detail?.external_account_id) {
        dispatch(
          getBrandBankDetailsAction(
            brandProfileDetails?.payment_detail?.customer_id,
            brandProfileDetails?.payment_detail?.external_account_id
          )
        );
      } else {
        setIsCompleteApplication(true);
      }
    }
  }, []);

  useEffect(() => {
    if (paidDetails?.external) {
      setEditBankDetails(paidDetails);
      setIsCompleteApplication(true);
    }
  }, [paidDetails]);

  const renderTab = () => {
    const renderComponent = {
      1: (
        <BusinessDetails
          isEdited={isEdited}
          setIsEdited={setIsEdited}
          setStartingTab={setStartingTab}
          handleChangeTab={handleChangeTab}
        />
      ),
      2: (
        <BusinessRepresentative
          isEdited={isEdited}
          setIsEdited={setIsEdited}
          handleChangeTab={handleChangeTab}
        />
      ),
      3: (
        <BankDetails
          isEdited={isEdited}
          setIsEdited={setIsEdited}
          handleChangeTab={handleChangeTab}
        />
      ),
      4: (
        <Summary
          setIsEdited={setIsEdited}
          handleChangeTab={handleChangeTab}
          setIsCompleteApplication={setIsCompleteApplication}
        />
      ),
    };
    return renderComponent[tabCode];
  };

  const renderStartingTab = () => {
    return (
      <>
        <div className="form-input preferences-item">
          <h4>
            ShopDot, Inc. works with Priority Technology Holdings, Inc.
            (&quot;PRTH&quot;) to provide merchant accounts for businesses just
            like you. Priority provides a valuable service which includes
            processing your customer&apos;s payment transactions and depositing
            the funds into your account. To enable merchant account services
            through Priority, please complete the following application.{' '}
          </h4>
          <button
            onClick={() => {
              setStartingTab(true);
            }}
            className="button btn-lg mt-4"
          >
            Start Application
          </button>
        </div>

        <div className="form-input">
          <div className="gp-info">
            <div className="gpinfo-item">
              <img src={GpInfoIcon} />
              <h5>What information will I need? </h5>
              <p>
                You will be asked to provide standard business and bank account
                details
              </p>
            </div>
            <div className="gpinfo-item">
              <img src={GpTimeIcon} />
              <h5>How long does it take? </h5>
              <p>It will take 5-10 minutes to complete this application </p>
            </div>
          </div>
        </div>
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
                          <h4>Add Business Info</h4>
                          <div className="gp-link-area">
                            <a
                              className={tabCode == '1' ? 'active' : ''}
                              onClick={() => handleChangeTab('1')}
                            >
                              Business Details
                            </a>
                            <a
                              className={tabCode == '2' ? 'active' : ''}
                              onClick={() => handleChangeTab('2')}
                            >
                              Business Representative
                            </a>
                          </div>
                          <h4 className="mt-5">ADD YOUR BANK</h4>
                          <div className="gp-link-area">
                            <a
                              className={tabCode == '3' ? 'active' : ''}
                              onClick={() => handleChangeTab('3')}
                            >
                              Bank Details
                            </a>
                          </div>
                          <h4 className="mt-5">REVIEW AND FINISH</h4>
                          <div className="gp-link-area">
                            <a
                              className={tabCode == '4' ? 'active' : ''}
                              onClick={() => handleChangeTab('4')}
                            >
                              Summary
                            </a>
                          </div>
                        </div>
                        <Suspense fallback={<Loader />}>
                          {!isCompleteApplication && renderTab()}
                        </Suspense>
                      </div>
                    )}
                  {isCompleteApplication && !editBankDetails && (
                    <GettingPaid setEditBankDetails={setEditBankDetails} />
                  )}
                  {editBankDetails && (
                    <EditBankDetails
                      setEditBankDetails={setEditBankDetails}
                      customerId={
                        brandProfileDetails?.payment_detail?.customer_id
                      }
                    />
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
      <ToastContainer />
    </div>
  );
}
