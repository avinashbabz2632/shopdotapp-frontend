import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../../pages/Brand/images/icons/close-icon.svg';
import SuccessIcon from '../../../assets/images/icons/icon-success-right.svg';

function SuccessfulModel(props) {
    const { modalIsOpen, closeSuccessfulModel } = props;
    return (
        <>
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={closeSuccessfulModel}
            >
                <div className="popup connect-brand-popup active">
                    <div className="popup_wrapper">
                        <div className="popup_content">
                            <div className="popup-close">
                                <div
                                    className="icon icon_position"
                                    onClick={() => closeSuccessfulModel()}
                                >
                                    <img src={closeBlackIcon} alt="close" />
                                </div>
                            </div>
                            <div className="popup_success active">
                                <div className="icon_wrap">
                                    <div className="icon">
                                        <img
                                            src={SuccessIcon}
                                            alt="SuccessIcon"
                                        />
                                    </div>
                                </div>
                                <h2 className="h1">
                                    Connect Request Sent Successfully!
                                </h2>
                                <p>
                                    Your connect request has been successfully
                                    sent and is pending brand approval.
                                </p>
                                <button
                                    className="button popup-close"
                                    onClick={() => closeSuccessfulModel()}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default React.memo(SuccessfulModel);
SuccessfulModel.propTypes = {
    modalIsOpen: PropTypes.bool,
    closeSuccessfulModel: PropTypes.func,
};
