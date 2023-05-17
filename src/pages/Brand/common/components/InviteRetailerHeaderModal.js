import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../images/icons/close-icon.svg';
import { useSelector } from 'react-redux';
import { selectUserDetails } from '../../../../redux/user/userSelector';

function InviteRetailer(props) {
  const [retailerMail, setRetailerMail] = useState('');
  const userDetails = useSelector(selectUserDetails);

  const getReferralUrl = () => {
    const { referal_url } = userDetails || {};
    return referal_url ? referal_url : '';
  };

  const copyRetilerInfo = (copyType) => {
    if (copyType == 'email') {
      navigator.clipboard.writeText(retailerMail);
      setRetailerMail('');
    } else {
      const text =
        document.getElementsByClassName('emailTextItem')[0].innerText;

      navigator.clipboard.writeText(text);
    }
  };

  const copyInvite = (copyType) => {
    navigator.clipboard.writeText(getReferralUrl());
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={props.modalIsOpen}
      onRequestClose={props.opencloseRetailerModal}
    >
      <div className="popup popup-invite active">
        <div className="popup_wrapper">
          <div className="popup_content">
            <div className="popup-close" onClick={props.opencloseRetailerModal}>
              <img className="icon" src={closeBlackIcon} />
            </div>
            <div className="primary__form form form_brands">
              <div className="form_brands-right">
                <h3>Share this referral link with your retailers.</h3>
                <div className="copyLinkArea">
                  <input
                    type="email"
                    name=""
                    id=""
                    value={getReferralUrl()}
                    placeholder="shopdotapp.com/signup/retaileshopxyz"
                    onChange={(e) => setRetailerMail(e.target.value)}
                  />
                  <button type="button" className="button" onClick={copyInvite}>
                    Copy Link
                  </button>
                </div>
                <div className="emailTemplateArea">
                  <h4>Email Template</h4>
                  <div className="emailText">
                    <div className="emailTextItem">
                      Hi, We have partnered with ShopDot, a new platform that
                      enables brand suppliers to partner with their retailers in
                      new ways. Through the ShopDot platform, you’re able to
                      easily share product inventory and provide drop-shipping
                      capabilities to your retailers. Helping your retailers
                      never lose a sale and empowering them to delight customers
                      with the right product at the right moment.
                      <br />
                      <br />
                      ShopDot integrates with your Shopify store so real-time
                      inventory and product content upload is automated. Plus,
                      any orders placed on ShopDot go right back to your Shopify
                      store to follow your normal fulfillment process.
                      <br />
                      <h5>Benefits for Retailers:</h5>
                      <b>Never lose a sale!</b> Cash and space constraints make
                      it hard for retailers to meet the product demands of their
                      customers. With ShopDot, retailers can tap into your
                      inventory and leverage your drop-shipping capabilities to
                      provide product immediacy and selection to their
                      customers.
                    </div>
                  </div>
                  <div className="action">
                    <button
                      className="button"
                      onClick={() => copyRetilerInfo('text')}
                    >
                      Copy Text
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default React.memo(InviteRetailer);

InviteRetailer.propTypes = {
  modalIsOpen: PropTypes.bool,
  opencloseRetailerModal: PropTypes.func,
};
