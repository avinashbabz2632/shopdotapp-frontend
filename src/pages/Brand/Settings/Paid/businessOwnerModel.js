import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../images/icons/close-icon.svg';
import info from '../../images/icons/icon-info-red.svg';
import { Link } from 'react-router-dom';

function BusinessOwnerModel(props) {
    return (
        <>
            <Modal
                ariaHideApp={false}
                isOpen={props.modalIsOpen}
                onRequestClose={props.opencloseRetailerModal}
            >
                <div className="popup popup-confirm popup-authorized-owner active">
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
                                <img
                                    src={info}
                                    alt="Close"
                                    className="icon_info icon"
                                />
                                <div className="h1">Add Business Owner</div>
                            </div>
                            <div className="popup_content-body text-center">
                                <p className="mb-4">
                                    Please add a business owner (25% or more
                                    ownership) who is authorized to complete and
                                    sign the Priority application.{' '}
                                    <Link
                                        to="/brand/setting"
                                        className="link-text"
                                    >
                                        Click here
                                    </Link>{' '}
                                    to add the business owner now.
                                </p>
                            </div>
                            <div className="popup_content-footer">
                                <button
                                    className="popup-close button button-dark"
                                    onClick={props.opencloseRetailerModal}
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

export default React.memo(BusinessOwnerModel);

BusinessOwnerModel.propTypes = {
    modalIsOpen: PropTypes.bool,
    opencloseRetailerModal: PropTypes.func,
};
