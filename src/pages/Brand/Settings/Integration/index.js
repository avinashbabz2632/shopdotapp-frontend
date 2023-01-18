import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectShopifyAction } from '../../../../actions/brandActions';
import Warning from '../../../../assets/images/icons/icon-outline.svg';
import { selectUserDetails } from '../../../../redux/user/userSelector';

export default function BrandSetting() {
  const [storeUrl, setStoreUrl] = useState('');
  const [isValideStoreURL, setIsValidStoreUrl] = useState(false);
  const [isStoreConnected, setIsStoreConnected] = useState(false);
  const [storeStatus, setStoreStatus] = useState(true); //temporary for seeing a disconnect ui
  const useDetails = useSelector(selectUserDetails);
  const dispatch = useDispatch();

  const connectStore = () => {
    if (storeUrl) {
      dispatch(
        connectShopifyAction({
          name: `${storeUrl}.myshopify.com`,
          user_id: useDetails.id,
        })
      );
      // setIsStoreConnected(true);
    } else {
      setIsStoreConnected(false);
      setIsValidStoreUrl(true);
      // setStoreStatus(false);
    }
  };

  const handleInputChange = (e) => {
    setStoreUrl(e.target.value);
    setIsValidStoreUrl(false);
  };

  const handleReconnect = () => {
    setStoreUrl('');
    setIsValidStoreUrl(false);
    setIsStoreConnected(false);
  };

  return (
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
                        <label>Connect your Shopify Store</label>
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
                      <div className="integration_note">
                        Not on Shopify?&nbsp;
                        <a href="#">Let us know</a> what eCommerce platform you
                        use and we&apos;ll let you know when we&apos;re
                        integrated.
                      </div>
                    </div>
                  )}

                  {isStoreConnected && (
                    <div className="integration_item">
                      <div className="email_edit-section">
                        <label>Connect your Shopify Store</label>
                        <span className="status-pill pill_connected">
                          Connected
                        </span>
                      </div>
                      <div className="integration_url">
                        <span>Shopify Store URL:</span>
                        &nbsp;
                        <label>
                          https:{'//'}
                          {storeUrl}.myshopify.com{' '}
                        </label>
                      </div>
                      <div className="integration_shopify small">
                        <button
                          onClick={() => handleReconnect()}
                          className="button button-dark"
                        >
                          Reconnect Shopify
                        </button>
                      </div>
                    </div>
                  )}

                  {/* {true && (   :: For the Disconnected UI  */}
                  {!isStoreConnected && !storeStatus && (
                    <div className="integration_item">
                      <div className="email_edit-section">
                        <label>Connect your Shopify Store</label>
                        <span className="status-pill pill_declined">
                          Disconnected
                        </span>
                      </div>
                      <div className="integration_url">
                        <span>Shopify Store URL:</span>
                        &nbsp;
                        <label>
                          https:{'//'}
                          {storeUrl}.myshopify.com
                        </label>
                      </div>
                      <div
                        className="alert alert-error d-flex align-items-center mb-3"
                        role="alert"
                      >
                        <img src={Warning} alt="warning" />
                        <div>
                          Your Shopify store has been disconnected with ShopDot.
                        </div>
                      </div>
                      <div className="integration_shopify small">
                        <button
                          onClick={() => handleReconnect()}
                          className="button button-dark"
                        >
                          Reconnect Shopify
                        </button>
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
  );
}
