import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BrandHeader from '../../common/components/BrandHeader';
import ArrowLeft from '../../images/icons/icon-arrow--left.svg';
import mailIcon from '../../../../assets/images/icons/mail-icon.svg';
import RetailerConfiguration from './RetailerConfiguration';
import SchulerBookstjpg from '../../../../assets/images/profile-image-logo.jpg';
import SchulerModel from './DeclineModel';
import { connectedData } from '../utils';
import ApprovedModel from './ApprovedModel';
import notifications from '../../../../assets/images/icons/notifications-icon.svg';
import { respondRetailerRequestAction } from '../../../../actions/brandActions';
import { useSelector } from 'react-redux';
import { selectBrandProfileDetails } from '../../../../redux/Brand/Profile/brandProfileSelectors';
import { ToastContainer, toast } from 'react-toastify';
import { selectCurrentRetailerProfile } from '../../../../redux/Brand/RetailerProfile/retailerProfileSelector';

function RetailerProfile() {
  const [profileData, setProfileData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [approvedModelOpen, setApprovedModel] = useState(false);
  const currentProfile = useSelector(selectCurrentRetailerProfile);

  console.log(currentProfile, 'currentProfile');

  const brandProfileDetails = useSelector(selectBrandProfileDetails);

  const opencloseDeclineModel = useCallback(() => {
    setIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  const opencloseApprovedModel = useCallback(() => {
    setApprovedModel(!approvedModelOpen);
  }, [approvedModelOpen]);

  useEffect(() => {
    const findData = connectedData.find((ele) => ele.id === Number(params?.id));
    console.log('findData', findData);
    if (findData) {
      setProfileData(findData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // https://dev.backend.shopdotapp.com/api/v1/retailer/request-connection/update
    // https://dev.backend.shopdotapp.com/api/v1/retailer/request-connection/update
  }, []);

  const updateRequestStatus = async (currentStatus) => {
    console.log(brandProfileDetails, 'brandProfileDetails');
    const data = {
      inviter_id: currentProfile?.inviter_id,
      invite_via: 'retailer_request',
      invite_status: currentStatus,
    };
    const response = await respondRetailerRequestAction(data);
    if (response.status === 200) {
      if (currentStatus === 'accepted') {
        opencloseApprovedModel();
      } else {
        opencloseDeclineModel();
      }
    } else {
      if (currentStatus === 'declined') {
        opencloseDeclineModel();
      }
      toast.error(
        response && response.data && response.data.errors
          ? response.data.errors
          : 'Something went worng'
      );
    }
  };

  return (
    <>
      <div className="brands-single-page">
        <div className="wrapper">
          <BrandHeader />
          <main className="content mp-content detail-page">
            <section className="section products mp-section">
              <div className="products_content mx-100">
                <div className="products_head mp-head">
                  <div className="products_head-content">
                    <div className="title">
                      <span
                        onClick={() => navigate(-1)}
                        className="back cursor-pointer"
                      >
                        <div className="icon">
                          <img src={ArrowLeft} />
                        </div>
                      </span>
                      <div className="title">
                        <h1>{currentProfile?.user?.full_name} </h1>

                        <span
                          className={`status-pill w-auto ${
                            currentProfile?.invite_status === 'connected' &&
                            'pill_connected'
                          } ${
                            currentProfile?.invite_status === 'pending' &&
                            'pill_pending'
                          } ${
                            currentProfile?.invite_status === 'declined' &&
                            'pill_declined'
                          }`}
                        >
                          {currentProfile?.invite_status}
                        </span>
                      </div>
                    </div>
                    <div className="buttons">
                      {/* {profileData?.status !== 'Declined' && (
                        <button
                          className="button button-green request-approved-box"
                          //   onClick={() => opencloseApprovedModel()}
                          onClick={() => {
                            updateRequestStatus('accepted');
                          }}
                        >
                          Approve
                        </button>
                      )}
                      {profileData?.status === 'Connected' && (
                        <button
                          onClick={() => opencloseDeclineModel()}
                          className="button button-red decline-box"
                        >
                          Decline
                        </button>
                      )} */}

                      {currentProfile?.invite_status === 'pending' && (
                        <>
                          <button
                            className="button button-green request-approved-box"
                            onClick={() => {
                              updateRequestStatus('accepted');
                            }}
                          >
                            Approve
                          </button>

                          <button
                            onClick={() => opencloseDeclineModel()}
                            className="button button-red decline-box"
                          >
                            Decline
                          </button>
                        </>
                      )}

                      <a
                        href="mailto:dave+retailer1@shopdotapp.com"
                        className="mailAction button icon_mail"
                      >
                        <div className="icon">
                          <img src={mailIcon} />
                        </div>
                      </a>
                    </div>
                  </div>
                  {(profileData?.status === 'Pending' ||
                    profileData?.status === 'Declined') && (
                    <div className="info-note">
                      {/* <div className="icon"> */}
                      <img src={notifications} style={{ width: '19px' }} />
                      {/* </div> */}
                      <p>
                        You must assign at least one product to the retailer
                        before approving this request.
                        {profileData?.status === 'Declined'
                          ? ' See below to assign products to retailer.'
                          : ' See Product Access section below.'}{' '}
                      </p>
                    </div>
                  )}
                </div>
                <div className="brand-single_wrap products_body">
                  <div className="brand-single_content">
                    <div className="brand-single_content-body">
                      <div className="brand-single_about">
                        <div className="brand-single_about-content">
                          <div className="brand-left-head">
                            <div className="brand-img">
                              <picture>
                                <img
                                  src={SchulerBookstjpg}
                                  alt="SchulerBookst"
                                />
                              </picture>
                            </div>
                            <div>
                              <h2 className="brand-title">
                                {profileData?.retailer_name}
                              </h2>
                              <div className="brand-single_about-item">
                                <p>
                                  <strong>Website: </strong>
                                  <a href="#">www.2store.com</a>
                                </p>
                                <p>
                                  <strong>Location: </strong>
                                  Wilsonville, Oregon
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="brand-single_about-items mt-4 mb-4">
                            <div className="brand-single_about-item">
                              <div className="brand-single_about-item-title">
                                Retailer Categories:
                              </div>
                              <div className="brand-single_about-item-wrap">
                                <a href="#">Baby &amp; Kids</a>
                                <a href="#">Toys &amp; Games</a>
                                <a href="#">Apparel &amp; Accessories</a>
                              </div>
                            </div>
                            <div className="brand-single_about-item">
                              <div className="brand-single_about-item-title">
                                Retailer Values:
                              </div>
                              <div className="brand-single_about-item-wrap">
                                <a href="#">Handmade</a>
                                <a href="#">Made in USA</a>
                                <a href="#">Small Batch</a>
                                <a href="#">Women Owned</a>
                              </div>
                            </div>
                            <div className="brand-single_about-item">
                              <p>
                                <strong>Products Assigned: </strong>
                                340 / 340
                              </p>
                              <p>
                                <strong>Products Sales: </strong>
                                10000 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="brand-single_info">
                        <div className="brand-single_block">
                          <h2>About the Retailer</h2>
                          <h3>
                            We are a company that seeks to cure “I’m Retailer”
                            in kids by creating covertly educational activities.
                          </h3>
                          <p>
                            Thousands of boxes of open-ended fun have been sold
                            worldwide. With wholesale products in every US
                            State, The Idea Box Kids has been featured in
                            Country Living, American Farmhouse, MaryJanes Farm,
                            and on sites like Fodor’s Travel, The Week, Cafe
                            Mom, Simply Real Moms and more.
                          </p>
                          <p>
                            We have been a business owner for 23 years with 16
                            of those in ecommerce. We are passionate advocate
                            for all things handmade wholesale, for both the
                            sellers that create and the buyers that buy.
                          </p>
                        </div>

                        <div className="video_section">
                          <div className="video-item">
                            <iframe
                              className="vimeo-video"
                              src="https://player.vimeo.com/video/736680636?h=b9fecbe8f3"
                              width=""
                              height=""
                              frameBorder="0"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowfullscreen=""
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <RetailerConfiguration profileData={profileData} />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <SchulerModel
        modalIsOpen={modalIsOpen}
        opencloseDeclineModel={opencloseDeclineModel}
        profileData_retailer_name={profileData?.retailer_name}
        callback={() => {
          updateRequestStatus('declined');
        }}
      />
      <ApprovedModel
        approvedModelOpen={approvedModelOpen}
        opencloseApprovedModel={opencloseApprovedModel}
        profileData_retailer_name={profileData?.retailer_name}
        callback={() => {}}
      />
      <ToastContainer />
    </>
  );
}

export default RetailerProfile;
