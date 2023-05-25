import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../../Brand/images/icons/close-icon.svg';
import {useSelector} from 'react-redux';
import { selectUserDetails } from '../../../../redux/user/userSelector';

function InviteBrand(props) {
    const userDetails = useSelector(selectUserDetails);

    const copyRetilerInfo = (copyType) => {
        if (copyType == 'email') {
            navigator.clipboard.writeText(userDetails?.referal_url);
        } else {
            const text =
                document.getElementsByClassName('emailTextItem')[0].innerText;
            navigator.clipboard.writeText(text);
        }
    };

    return (
        <Modal
            ariaHideApp={false}
            isOpen={props.modalIsOpen}
            onRequestClose={props.opencloseBrandModal}
        >
            <div className="popup popup-invite active">
                <div className="popup_wrapper">
                    <div className="popup_content">
                        <div
                            className="popup-close"
                            onClick={props.opencloseBrandModal}
                        >
                            <img className="icon" src={closeBlackIcon} />
                        </div>
                        <div className="primary__form form form_brands">
                            <div className="form_brands-right">
                                <h3>
                                    Share this referral link with your brand
                                    suppliers.
                                </h3>
                                <div className="copyLinkArea">
                                    <input
                                        type="email"
                                        value={userDetails?.referal_url}
                                        placeholder="shopdotapp.com/signup/brandshopxyz"
                                        disabled
                                    />
                                    <button
                                        type="button"
                                        className="button"
                                        onClick={() => copyRetilerInfo('email')}
                                    >
                                        Copy Link
                                    </button>
                                </div>
                                <div className="emailTemplateArea">
                                    <h4>Email Template</h4>
                                    <div className="emailText">
                                        <div className="emailTextItem">
                                            Hi,
                                            <br />
                                            <br />
                                            We have partnered with ShopDot, a
                                            new platform that enables brand
                                            suppliers to partner with their
                                            retailers in new ways. Through the
                                            ShopDot platform, you&apos;re able
                                            to easily share product inventory
                                            and provide drop-shipping
                                            capabilities to your retailers.
                                            Helping your retailers never lose a
                                            sale and empowering them to delight
                                            customers with the right product at
                                            the right moment.
                                            <br />
                                            <br />
                                            ShopDot integrates with your Shopify
                                            store so real-time inventory and
                                            product content upload is automated.
                                            Plus, any orders placed on ShopDot
                                            go right back to your Shopify store
                                            to follow your normal fulfillment
                                            process.
                                            <br />
                                            <h5>Benefits for you:</h5>
                                            <b>Never lose a sale!</b> Cash and
                                            space constraints make it hard for
                                            retailers to meet the product
                                            demands of their customers. With
                                            ShopDot, retailers can tap into your
                                            inventory and leverage your
                                            drop-shipping capabilities to
                                            provide product immediacy and
                                            selection to their customers.
                                        </div>
                                    </div>
                                    <div className="action">
                                        <button
                                            className="button"
                                            onClick={() =>
                                                copyRetilerInfo('text')
                                            }
                                        >
                                            Copy Text
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
export default React.memo(InviteBrand);

InviteBrand.propTypes = {
    modalIsOpen: PropTypes.bool,
    opencloseBrandModal: PropTypes.func,
};
