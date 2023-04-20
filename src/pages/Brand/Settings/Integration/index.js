import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  connectShopifyAction,
  disconnectShopifyAction,
} from '../../../../actions/brandActions';
import Warning from '../../../../assets/images/icons/icon-outline.svg';
import { selectUserDetails } from '../../../../redux/user/userSelector';
import { useEffect } from 'react';
import { selectBrandProfileDetails } from '../../../../redux/Brand/Profile/brandProfileSelectors';
import Avtar1 from '../../images/shopify_logo_whitebg.jpg';
import required from '../../images/orange_acculturation.svg';
import closes from  "../../../.././assets/images/icons/close.png";
export default function BrandSetting() {
  const [storeUrl, setStoreUrl] = useState('');
  const [isValideStoreURL, setIsValidStoreUrl] = useState(false);
  const [isStoreConnected, setIsStoreConnected] = useState(false);
  const [storeStatus, setStoreStatus] = useState(true); //temporary for seeing a disconnect ui
  const brandProfileDetails = useSelector(selectBrandProfileDetails);
  const useDetails = useSelector(selectUserDetails);
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (brandProfileDetails?.shop_detail?.shop) {
      if (brandProfileDetails?.shop_detail.is_active) {
        setStoreUrl(brandProfileDetails?.shop_detail?.shop);
        setIsStoreConnected(true);
      }
    } else {
      setStoreUrl('');
      setIsValidStoreUrl(false);
      setIsStoreConnected(false);
    }
  }, [brandProfileDetails]);

  const connectStore = () => {
    if (storeUrl) {
      dispatch(
        connectShopifyAction({
          name: `${storeUrl}.myshopify.com`,
          user_id: useDetails.id,
        })
      );
      setIsStoreConnected(true);
    } else {
      setIsStoreConnected(false);
      setIsValidStoreUrl(true);
      setStoreStatus(false);
    }
  };

  const handleInputChange = (e) => {
    setStoreUrl(e.target.value);
    setIsValidStoreUrl(false);
  };

  const handleReconnect = () => {
    dispatch(
      disconnectShopifyAction({ domain: storeUrl, user_id: useDetails.id })
    );
    setStoreUrl('');
    setIsValidStoreUrl(false);
    setIsStoreConnected(false);
    setStoreStatus(true);
  };
  const handleOn = () => {
    setIsOpen(false);
    setIsStoreConnected(!isStoreConnected);
    setStoreStatus(!storeStatus);
  };

  const handleCancle = () => {
    setIsOpen(false);
  };

  return (
    <>
      {modalIsOpen === true ? (
        <div className="popup popup-confirm alert-shopify-modal">
          <div className="popup_wrapper">
            <div className="popup_content">
              <div className="popup-close">
                <img
                   style={{width:"20px"}}
                src={closes}

                 onClick={() => setIsOpen(false)} />
              </div>
              <div className="popup_content-header">
                <img className="icon" src={required}></img>
                <div className="h1">
                  Before you disconnect Shopify from ShopDot
                </div>
              </div>
              <div className="popup_content-body text-center">
                <p className="mb-4 shopify-subtext">
                  Make sure you fulfill all open orders in Shopify before
                  disconnecting ShopDot.
                </p>
                <p className="shopify-note">
                  <span>Please note:</span> Your brand profile and products will
                  not be displayed to retailers in ShopDot and new orders cannot
                  be placed after you disconnect from Shopify.
                </p>
              </div>
              <div className="popup_content-footer">
                <button
                  className="button button-dark ignore-cancel"
                  onClick={() => handleCancle()}
                >
                  Cancel
                </button>
                <button
                  className="button button-red push"
                  onClick={() => handleOn()}
                >
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}

      <div className="pc_tabs-content tabs_body">
        <div className="tab active" data-target="Integration">
          <div className="products_content">
            <div className="products_body">
              <div className="content_area">
                <div id="integration">
                  <div className="integration_info">
                    <h2 className="heading">Integration</h2>
                    {!isStoreConnected && storeStatus && (
                      <div className="integration_item">
                        <div className="email_edit-section">
                          <img src={Avtar1} alt="shopify"></img>
                          <span className="status-pill pill_not_connected">
                            Not Connected
                          </span>
                        </div>
                        <div className="integration_info">
                          <div className="form-area form-input connect-shopify">
                            <input
                              type="text"
                              className="form-control"
                              id=""
                              placeholder=""
                              value={storeUrl}
                              onChange={handleInputChange}
                            />
                            <span className="input-extension">
                              .myshopify.com
                            </span>
                            <button
                              className="button connect_shopify"
                              onClick={connectStore}
                            >
                              Connect
                            </button>
                          </div>
                          <small>
                            {' '}
                            Enter the name of your store without myshopify.com{' '}
                          </small>
                          {isValideStoreURL && (
                            <div className="invalid-feedback">
                              Please only enter the name of your store.
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {isStoreConnected && (
                      <div className="integration_item">
                        <div className="email_edit-section">
                          <img
                            src={Avtar1}
                            className="shopify-logo"
                            alt="shopify"
                          />
                          <span className="status-pill pill_connected">
                            Connected
                          </span>
                        </div>
                        <div className="integration_url">
                          <label>
                            {' '}
                            https:{'//'}
                            {storeUrl}
                          </label>{' '}
                          &nbsp;&nbsp;&nbsp;
                          <button
                            onClick={() => setIsOpen(true)}
                            className="alert-shopify button button-dark"
                          >
                            Disconnect from Shopify
                          </button>
                        </div>
                      </div>
                    )}
                    {!isStoreConnected && !storeStatus && (
                      <div className="integration_item">
                        <div className="email_edit-section">
                          <img
                            src={Avtar1}
                            className="shopify-logo"
                            alt="shopify"
                          />
                          <span className="status-pill pill_declined">
                            Disconnected
                          </span>
                        </div>
                        <div className="integration_url">
                          <span>Shopify Store URL:</span>
                          <label>
                            {' '}
                            https:{'//'}
                            {storeUrl}
                          </label>{' '}
                          &nbsp;&nbsp;&nbsp;
                          <button
                            onClick={() => handleReconnect()}
                            className="alert-shopify button button-dark mx-4"
                          >
                            Reconnect Shopify
                          </button>
                        </div>
                        <div
                          className="alert alert-error d-flex align-items-center mb-3"
                          role="alert"
                        >
                          <img src={Warning} alt="warning" />
                          <div>
                            Your brand profile is not visible to retailers
                            because your Shopify store is disconnected.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
