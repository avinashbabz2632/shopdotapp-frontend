import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../images/icons/close-icon.svg';
import info from '../../images/icons/icon-info-red.svg';

function ConfirmationUnAssignModel(props) {
    const { handleOpenClose, isModalOpen, selectedRow, profileData } = props;
    return (
        <>
            <Modal
                ariaHideApp={false}
                isOpen={isModalOpen}
                onRequestClose={handleOpenClose}
            >
                <div className="popup popup-confirm popup-confirm-push modal-unassign-retailer">
                    <div className="popup_wrapper">
                        <div className="popup_content">
                            <div
                                className="popup-close"
                                onClick={() => handleOpenClose()}
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
                                <div className="h1">Confirmation Required</div>
                            </div>
                            <div className="popup_content-body text-center">
                                <p className="mb-4">
                                    You are unassigning{' '}
                                    {selectedRow?.selectedCount ?? 0} products
                                    from{' '}
                                    <span className="link-text fw-bold">
                                        {profileData?.retailer_name}
                                    </span>
                                    . They will not be able to order these
                                    products in ShopDot.
                                </p>
                                <p>Do you wish to continue?</p>
                            </div>
                            <div className="popup_content-footer">
                                <button
                                    className="button button-dark ignore-cancel"
                                    onClick={() => handleOpenClose()}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="button button-orange push"
                                    onClick={() => {
                                        console.log('unassigned successfully');
                                        handleOpenClose();
                                    }}
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
export default React.memo(ConfirmationUnAssignModel);

ConfirmationUnAssignModel.propTypes = {
    isModalOpen: PropTypes.bool,
    handleOpenClose: PropTypes.func,
    selectedRow: PropTypes.any,
    profileData: PropTypes.any,
};
