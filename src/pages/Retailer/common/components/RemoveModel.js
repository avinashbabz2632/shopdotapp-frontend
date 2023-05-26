import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../../../pages/Brand/images/icons/close-icon.svg';
import info from '../../../../pages/Brand/images/orange_acculturation.svg';
import closeIcon from '../../../../assets/images/icons/icon-newclose.svg';

function RemoveModel(props) {
    const { modalOpen, closeRemoveModal } = props;
    return (
        <>
            <Modal
                ariaHideApp={false}
                isOpen={modalOpen}
                onRequestClose={closeRemoveModal}
            >
                <div className="popup setting-popup delete-user-modal delete-card-modal active">
                    <div className="popup_wrapper">
                        <div className="popup_content">
                            <div
                                className="popup-close"
                                onClick={() => closeRemoveModal()}
                            >
                                <div className="icon">
                                    <img src={closeBlackIcon} alt="close" />
                                </div>
                            </div>
                            <div className="popup-flex">
                                <div className="icon-center">
                                    <div className="icon">
                                        <img src={info} alt="infoicon" />
                                    </div>
                                </div>
                                <h1>Are you sure to remove?</h1>
                                <p>
                                    You&apos;re about to remove your Maestro
                                    card ending with{' '}
                                    <a href="#" className="link-text">
                                        5400
                                    </a>{' '}
                                </p>
                                <br />
                            </div>
                            <div className="action-footer">
                                <button
                                    className="button button-dark px-6"
                                    onClick={() => closeRemoveModal()}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="button px-6 button-red"
                                    onClick={() => closeRemoveModal()}
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

export default React.memo(RemoveModel);
RemoveModel.propTypes = {
    modalOpen: PropTypes.bool,
    closeRemoveModal: PropTypes.func,
};
