import React, { useState } from 'react';
import Warning from '../../../../assets/images/icons/icon-outline.svg';

export default function RetailerSetting() {
    const [storeUrl, setStoreUrl] = useState('');
    const [isValideStoreURL, setIsValidStoreUrl] = useState(false);
    const [isStoreConnected, setIsStoreConnected] = useState(false);
    const [storeStatus, setStoreStatus] = useState(true); //temporary for seeing a disconnect ui

    const connectStore = () => {
        if (storeUrl) {
            setIsStoreConnected(true);
        } else {
            setIsStoreConnected(false);
            setIsValidStoreUrl(true);
            // setStoreStatus(false);
        }
    };

    const handleInputChange = (e) => {
        setStoreUrl(e.target.value);
        setIsValidStoreUrl(false);
    };

    return (
        <div className="pc_tabs-content tabs_body">
            <div className="tab active" data-target="Integration">
                <div className="products_content">
                    <div className="products_head mp-head">
                        <div className="products_head-content">
                            <div className="title">
                                <h1>
                                    Store Integration{' '}
                                    <span className="asterisk-red">*</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="products_body">
                        <div className="content_area">
                            <div id="integration">
                                <div className="integration_info">
                                    <h2 className="heading">Integration</h2>
                                    {!isStoreConnected && storeStatus && (
                                        <div className="integration_item">
                                            <div className="email_edit-section">
                                                <label>
                                                    Connect your Shopify Store
                                                </label>
                                                <span className="status-pill pill_not_connected">
                                                    Not Connected
                                                </span>
                                            </div>
                                            <div className="integration_info">
                                                <div className="form-area form-input">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id=""
                                                        placeholder="yourstore.myshopify.com"
                                                        value={storeUrl}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    />
                                                    <button
                                                        className="button connect_shopify"
                                                        onClick={connectStore}
                                                    >
                                                        Connect Shopify
                                                    </button>
                                                </div>
                                                {isValideStoreURL && (
                                                    <span className="error-text">
                                                        store url must be
                                                        required.
                                                    </span>
                                                )}
                                            </div>
                                            <div className="integration_note">
                                                Not on Shopify?&nbsp;
                                                <a href="#">Let us know</a> what
                                                eCommerce platform you use and
                                                we&apos;ll let you know when
                                                we&apos;re integrated.
                                            </div>
                                        </div>
                                    )}

                                    {isStoreConnected && (
                                        <div className="integration_item">
                                            <div className="email_edit-section">
                                                <label>
                                                    Connect your Shopify Store
                                                </label>
                                                <span className="status-pill pill_connected">
                                                    Connected
                                                </span>
                                            </div>
                                            <div className="integration_url">
                                                <span>Shopify Store URL:</span>
                                                &nbsp;
                                                <label>{storeUrl}</label>
                                            </div>
                                            <div className="integration_shopify small">
                                                <button className="button button-dark">
                                                    Reconnect Shopify
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {!isStoreConnected && !storeStatus && (
                                        <div className="integration_item">
                                            <div className="email_edit-section">
                                                <label>
                                                    Connect your Shopify Store
                                                </label>
                                                <span className="status-pill pill_declined">
                                                    Disconnected
                                                </span>
                                            </div>
                                            <div
                                                className="alert alert-error d-flex align-items-center"
                                                role="alert"
                                            >
                                                <img
                                                    src={Warning}
                                                    alt="warning"
                                                />
                                                <div>
                                                    Your Shopify store has been
                                                    disconnected with ShopDot
                                                </div>
                                            </div>
                                            <div className="integration_url">
                                                <span>Shopify Store URL:</span>
                                                &nbsp;
                                                <label>{storeUrl}</label>
                                            </div>
                                            <div className="integration_shopify small">
                                                <button className="button button-dark">
                                                    Reconnect Shopify
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
