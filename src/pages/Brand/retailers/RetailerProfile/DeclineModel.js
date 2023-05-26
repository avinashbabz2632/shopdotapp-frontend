import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../images/icons/close-icon.svg';
import Decline from '../../../../assets/images/icons/invitation-icon.svg';

function DeclineModel(props) {
  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={props.modalIsOpen}
        onRequestClose={props.opencloseDeclineModel}
      >
        <div className="popup popup-confirm popup-confirm-push popup-message decline-retailer-modal">
          <div className="popup_wrapper">
            <div className="popup_content">
              <div
                className="popup-close"
                onClick={props.opencloseDeclineModel}
              >
                <div className="icon close">
                  <img src={closeBlackIcon} alt="Close" />
                </div>
              </div>
              <div className="popup_content-header popup_decline">
                <div className="icon">
                  <img src={Decline} alt="Close" />
                </div>
                <h2 className="h1">Decline Retailer</h2>
              </div>
              <div className="popup_content-body text-center">
                <p className="mb-4">
                  You are declining{' '}
                  <span className="link-text fw-bold">
                    {props.profileData_retailer_name}
                  </span>{' '}
                  request for access. They will not be able to order any of your
                  products in ShopDot.{' '}
                </p>
                <p>Do you wish to continue?</p>
              </div>
              <div className="popup_content-footer">
                <button
                  className="button button-dark ignore-cancel"
                  onClick={props.opencloseDeclineModel}
                >
                  Cancel
                </button>
                <button
                  className="button button-orange push"
                  onClick={props.callback}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default React.memo(DeclineModel);
DeclineModel.propTypes = {
  modalIsOpen: PropTypes.bool,
  opencloseDeclineModel: PropTypes.func,
  profileData_retailer_name: PropTypes.string,
};
