import React from 'react';
import PropTypes from 'prop-types';
import tickIcon from '../../images/icons/round-tick.svg';
import crossIcon from '../../images/icons/close-icon.svg';

export default function SubmitModal({ setIsModelOpen }) {
    return (
        <div className="popup popup-message active">
            <div className="popup_wrapper">
                <div className="popup_content">
                    <div
                        className="popup-close"
                        onClick={() => {
                            setIsModelOpen(false);
                        }}
                    >
                        <img className="icon" src={crossIcon} />
                    </div>

                    <div className="popup_success active">
                        <div className="icon-round">
                            <img src={tickIcon} />
                        </div>
                        <p className="mb-4">
                            Your application has been submitted to Priority
                            Holdings for review and should be approved in 1-2
                            business days.
                        </p>

                        <p>
                            Please contact us at{' '}
                            <a href="" className="link-text link-line">
                                support@shopdotapp.com
                            </a>{' '}
                            if you have any questions.
                        </p>

                        <button
                            className="popup-close button cancel"
                            onClick={() => {
                                setIsModelOpen(false);
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

SubmitModal.propTypes = {
    setIsModelOpen: PropTypes.func,
};
