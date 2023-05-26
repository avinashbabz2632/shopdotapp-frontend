import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../images/icons/close-icon.svg';
import Approved from '../../../../assets/images/icons/group-icon.svg';

function ApprovedModel(props) {
    return (
        <>
            <Modal
                ariaHideApp={false}
                isOpen={props.approvedModelOpen}
                onRequestClose={props.opencloseApprovedModel}
            >
                <div className="popup popup-message modal-request-approved">
                    <div className="popup_wrapper">
                        <div className="popup_content">
                            <div
                                className="popup-close"
                                onClick={props.opencloseApprovedModel}
                            >
                                <div className="icon close">
                                    <img src={closeBlackIcon} alt="Close" />
                                </div>
                            </div>

                            <div className="popup_success active">
                                <div className="icon_wrap icon-check">
                                    {/* <div className="icon"> */}
                                    <img src={Approved} alt="Close" />
                                    {/* </div> */}
                                </div>
                                <h2 className="h1">
                                    Request Approved Successfully
                                </h2>
                                <p className="mb-4">
                                    <span className="link-text fw-bold">
                                        {props.profileData_retailer_name}
                                    </span>{' '}
                                    is now connected with you. They will be able
                                    to place orders for assigned products only.
                                </p>
                                <button
                                    className="popup-close button button-orange cancel"
                                    onClick={props.opencloseApprovedModel}
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

export default React.memo(ApprovedModel);
ApprovedModel.propTypes = {
    approvedModelOpen: PropTypes.bool,
    opencloseApprovedModel: PropTypes.func,
    profileData_retailer_name: PropTypes.string,
};
