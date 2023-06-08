import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../images/icons/close-icon.svg';
import info from '../../images/icons/icon-info-red.svg';
import { Link } from 'react-router-dom';

function AuthorizedSignerModel(props) {
  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={props.modalIsOpen}
        onRequestClose={props.opencloseRetailerModal}
      >
        <div className="popup popup-confirm popup-authorized-signer active">
          <div className="popup_wrapper">
            <div className="popup_content">
              <div
                className="popup-close"
                onClick={props.opencloseRetailerModal}
              >
                <div className="icon close">
                  <img src={closeBlackIcon} alt="Close" />
                </div>
              </div>
              <div className="popup_content-header">
                <img src={info} alt="Close" className="icon_info icon" />
                <div className="h1">Add Authorized Signer</div>
              </div>
              <div className="popup_content-body text-center">
                <p className="mb-4">
                  {props.type2
                    ? `Please add a business owner (25% or more ownership) who is authorized to complete and sign the Priority application. `
                    : `Please add an authorized signer as a ShopDot user to complete and sign the application. `}
                  <Link to="/brand/setting/users" className="link-text">
                    Click here
                  </Link>{' '}
                  {props.type2
                    ? `to add the business owner now.`
                    : `to add this person so they can complete the application.`}
                </p>
              </div>
              <div className="popup_content-footer">
                <button
                  onClick={() => props.opencloseRetailerModal()}
                  className="popup-close button button-dark"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AuthorizedSignerModel;
AuthorizedSignerModel.propTypes = {
  modalIsOpen: PropTypes.bool,
  opencloseRetailerModal: PropTypes.func,
};
