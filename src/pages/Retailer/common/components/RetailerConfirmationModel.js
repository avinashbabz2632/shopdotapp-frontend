import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../../../pages/Brand/images/icons/close-icon.svg';
import info from '../../../../pages/Brand/images/orange_acculturation.svg';
import closeIcon from '../../../../assets/images/icons/icon-newclose.svg';

function RetailerConfirmationModel(props) {
    const { modalIsOpen, closeConfirmationModal } = props;
    return (
        <>
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={closeConfirmationModal}
            >
                <div className="popup setting-popup make-default-modal active">
                    <div className="popup_wrapper">
                        <div className="popup_content">
                            <div
                                className="popup-close"
                                onClick={() => closeConfirmationModal()}
                            >
                                <div className="icon">
                                    <img src={closeBlackIcon} alt="close" />
                                </div>
                            </div>
                            <div className="popup-flex">
                                <div className="icon-center">
                                    <dic className="icon">
                                        <img src={info} alt="infoicon" />
                                    </dic>
                                </div>
                                <h1>Confirmation Required</h1>
                                <p className="w-100">
                                    Are you sure you want to set the billing
                                    method below as your default?
                                </p>
                                <br />
                                <p>
                                    Visa card ending With{' '}
                                    <a href="#" className="link-text">
                                        5400
                                    </a>{' '}
                                </p>
                            </div>
                            <div className="action-footer">
                                <button
                                    className="button button-dark px-6"
                                    onClick={() => closeConfirmationModal()}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="button px-6 button-orange"
                                    onClick={() => closeConfirmationModal()}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default React.memo(RetailerConfirmationModel);
RetailerConfirmationModel.propTypes = {
    modalIsOpen: PropTypes.bool,
    closeConfirmationModal: PropTypes.func,
};
