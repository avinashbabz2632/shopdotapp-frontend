import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  connectShopifyAction,
  disconnectShopifyAction,
  syncProductAction,
} from '../../../../actions/brandActions';
import Warning from '../../../../assets/images/icons/icon-outline.svg';
import { selectUserDetails } from '../../../../redux/user/userSelector';
import { useEffect } from 'react';
import Avtar1 from '../../images/shopify_logo_whitebg.jpg';
import { selectBrandProfileDetails } from '../../../../redux/Brand/Profile/brandProfileSelectors';
import DisconnectModal from './DisconnectModal';
import { ToastContainer, toast } from 'react-toastify';

export default function BrandSetting() {
  const [storeUrl, setStoreUrl] = useState('');
  const [isValideStoreURL, setIsValidStoreUrl] = useState(false);
  const [isStoreConnected, setIsStoreConnected] = useState(false);
  const [storeStatus, setStoreStatus] = useState('');
  //temporary for seeing a disconnect ui
  const brandProfileDetails = useSelector(selectBrandProfileDetails);
  const useDetails = useSelector(selectUserDetails);
  const [openDisconnectModal, setOpenDisconnectModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('brandProfileDetails----', brandProfileDetails);
    if (brandProfileDetails?.shop_detail?.shop) {
      const onlyBranName = brandProfileDetails?.shop_detail?.shop.replace(
        '.myshopify.com',
        ''
      );
      setStoreUrl(onlyBranName);
      setIsStoreConnected(true);
      if (brandProfileDetails?.shop_detail.is_active) {
        setStoreStatus('active');
      } else {
        setStoreStatus('inactive');
      }
    } else {
      setStoreUrl('');
      setIsValidStoreUrl(false);
      setIsStoreConnected(false);
    }
  }, [brandProfileDetails]);

  // alert(storeUrl);

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
    dispatch(
      disconnectShopifyAction({
        domain: `${storeUrl}.myshopify.com`,
        user_id: useDetails.id,
      })
    );
  };

  const onDisconnectClick = () => {
    setOpenDisconnectModal(false);
    handleReconnect();
  };

  const onCancelClick = () => {
    setOpenDisconnectModal(false);
  };

  const handleAddProduct = async () => {
    const productresponse = await dispatch(syncProductAction(useDetails.id));
    if (productresponse) {
      toast.success('Product added successfully');
    }
  };

  return (
    <>
      <div className="pc_tabs-content tabs_body">
        <div className="tab active" data-target="Integration">
          <div className="products_content">
            <div className="products_body">
              <div className="content_area">
                <div id="integration">
                  <div className="integration_info">
                    <h2 className="heading">Integration</h2>
                    {!isStoreConnected && (
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
                        <div className="integration_note">
                          Not on Shopify?&nbsp;
                          <a href="#">Let us know</a> what eCommerce platform
                          you use and we&apos;ll let you know when we&apos;re
                          integrated.
                        </div>
                      </div>
                    )}

                    {isStoreConnected && storeStatus === 'active' && (
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
                          <span>Shopify Store URL:</span>
                          &nbsp;
                          <label>
                            https:{'//'}
                            {`${storeUrl}.myshopify.com`}
                          </label>
                        </div>
                        <div className="integration_shopify small">
                          <button
                            onClick={() => setOpenDisconnectModal(true)}
                            className="button button-dark"
                          >
                            Disconnect from Shopify
                          </button>
                          <button
                            style={{
                              marginLeft: 16,
                              background: '#2870A5',
                              borderColor: '#2870A5',
                              color: 'white',
                            }}
                            onClick={handleAddProduct}
                            className="button button-dark-2"
                          >
                            Add Product
                          </button>
                        </div>
                      </div>
                    )}

                    {/* {true && (   :: For the Disconnected UI  */}
                    {storeStatus === 'inactive' && (
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
                          &nbsp;
                          <label>
                            https:{'//'}
                            {`${storeUrl}.myshopify.com`}
                          </label>
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
                        <div className="integration_shopify small">
                          <button
                            onClick={connectStore}
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
      <ToastContainer />
      <DisconnectModal
        open={openDisconnectModal}
        onCancel={onCancelClick}
        onDisconnect={onDisconnectClick}
      />
    </>
  );
}
