import React, { lazy, useState, Suspense } from 'react';
import gpLogo from '../../images/gp-logo.jpg';
import Loader from '../../../../components/Loader';
import GpInfoIcon from '../../images/gp-info.svg';
import GpTimeIcon from '../../images/gp-time.svg';

//paid component
const BusinessDetails = lazy(() => import('./BusinessDetails'));
const BankDetails = lazy(() => import('./BankDetails'));
const Summary = lazy(() => import('./Summary'));
const BusinessRepresentative = lazy(() => import('./BusinessRepresentative'));
const GettingPaid = lazy(() => import('./GettingPaid'));
const EditBankDetails = lazy(() => import('./EditBankDetails'));

export default function BrandPaid() {
  const [tabCode, setTabCode] = useState('1');
  const [startingTab, setStartingTab] = useState(false);
  const [formData, setFormData] = useState({
    legal_name: '',
    doing_business_as: '',
    business_category: '',
    ein: '',
    state_of_incorporation: '',
    date_of_incorporation: '',
    address_line_1: '',
    address_line_2: '',
    city: '',
    state: '',
    zip: '',
    owner_first_name: '',
    owner_last_name: '',
    owner_phone: '',
    owner_dob: '',
    ssn: '',
    secondary_identification_type: '',
    identification_state_of_issuance: '',
    identification_id: '',
    prior_bankruptcy: false,
    average_sales_volume: 0,
    average_purchase: 0,
    average_delivery_time: '',
    merchant_category_code: '',
    sales_method: '',
    product_description: '',
  });
  const [isCompleteApplication, setIsCompleteApplication] = useState(false);
  const [editBankDetails, setEditBankDetails] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  // eslint-disable-next-line no-shadow
  const handleChangeTab = (tabCode) => {
    const myDiv = document.getElementById('content-wrapper');
    myDiv.scrollTop = 0;
    setTabCode(tabCode);
  };

  const renderTab = () => {
    const renderComponent = {
      1: (
        <BusinessDetails
          formData={formData}
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
    </div>
  );
}
