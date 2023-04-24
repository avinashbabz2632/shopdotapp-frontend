import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../images/icons/close-icon.svg';
import declineIcon from '../../images/icons/icon-decline.svg';

function DeclineRetailerModel(props) {
    return (
        <Modal
            ariaHideApp={false}
            isOpen={props.modalIsOpen}
            onRequestClose={props.opencloseDeclineRetailerModal}
        >
            <div className="popup popup-message decline-retailer-modal active">
                <div className="popup_wrapper">
                    <div className="popup_content">
                        <div
                            className="popup-close"
                            onClick={props.opencloseDeclineRetailerModal}
                        >
                            <img className="icon" src={closeBlackIcon} />
                        </div>
                        <div className="popup_success popup_decline active">
                            <div className="icon_wrap">
                                <img className="icon" src={declineIcon} />
                            </div>
                            <h2 className="h1">Decline Request</h2>
                            <p>
                                You are declining{' '}
                                <a href="">Retailer Name&apos;s</a> request for
                                access. They will still be able to view your
                                products but not list nor push them to store.
                            </p>
                            <p>Do you wish to continue?</p>
                            <div className="popup_content-footer">
                                <button
                                    onClick={() =>
                                        props.opencloseDeclineRetailerModal()
                                    }
                                    className="button button-grey cancel mr-2"
                                >
                                    Cancel
                                </button>{' '}
                                <button
                                    className="button"
                                    onClick={() =>
                                        props.opencloseDeclineRetailerModal()
                                    }
                                >
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
export default React.memo(DeclineRetailerModel);

DeclineRetailerModel.propTypes = {
    modalIsOpen: PropTypes.bool,
    opencloseDeclineRetailerModal: PropTypes.func,
};
