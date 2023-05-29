import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Avtar1 from '../../../images/shopify_logo_whitebg.jpg';
import required from '../../../images/orange_acculturation.svg';

const DisconnectModal = ({ open, onCancel, onDisconnect }) => {
  if (!open) return null;

  return (
    <div className="popup popup-confirm alert-shopify-modal">
      <div className="popup_wrapper">
        <div className="popup_content">
          <div className="popup-close">
            <AiOutlineClose size="20px" onClick={onCancel} />
          </div>
          <div className="popup_content-header">
            <img className="icon" src={required}></img>
            <div className="h1">Before you disconnect Shopify from ShopDot</div>
          </div>
          <div className="popup_content-body text-center">
            <p className="mb-4 shopify-subtext">
              Make sure you fulfill all open orders in Shopify before
              disconnecting ShopDot.
            </p>
            <p className="shopify-note">
              <span>Please note:</span> Your brand profile and products will not
              be displayed to retailers in ShopDot and new orders cannot be
              placed after you disconnect from Shopify.
            </p>
          </div>
          <div className="popup_content-footer">
            <button
              className="button button-dark ignore-cancel"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button className="button button-red push" onClick={onDisconnect}>
              Disconnect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisconnectModal;
