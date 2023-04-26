import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../images/icons/close-icon.svg';
import info from '../../images/icons/icon-info-red.svg';

function ConfirmationModel(props) {
    return (
        <>
            <Modal
                ariaHideApp={false}
                isOpen={props.modalIsOpen}
                onRequestClose={props.closeConfirmationModal}
                handleConfirmModel={props.handleConfirmModel}
            >
                <div className="popup popup-confirm popup-confirm-push active">
                    <div className="popup_wrapper">
                        <div className="popup_content">
                            <div className="popup-close">
                                <img
                                    src={closeBlackIcon}
                                    alt="close"
                                    className="icon close"
                                    onClick={() =>
                                        props.closeConfirmationModal()
                                    }
                                />
                            </div>
                            <div className="popup_content-header">
                                <img
                                    src={info}
                                    alt="info"
                                    className="icon icon_info"
                                />
                                <div className="h1">Confirmation Required</div>
                            </div>
                            <div className="popup_content-body text-center">
                                <p>
                                    Do you want to discard your changes? <br />
                                    Your changes will be not saved if you click
                                    the <span className="link-text">
                                        Back
                                    </span>{' '}
                                    button.
                                </p>
                            </div>
                            <div className="popup_content-footer">
                                <button
                                    className="button button-dark ignore-cancel"
                                    onClick={() =>
                                        props.closeConfirmationModal()
                                    }
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => props.handleConfirmModel()}
                                    className="button button-orange push"
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

export default React.memo(ConfirmationModel);
ConfirmationModel.propTypes = {
    modalIsOpen: PropTypes.bool,
    closeConfirmationModal: PropTypes.func,
    handleConfirmModel: PropTypes.func,
};
