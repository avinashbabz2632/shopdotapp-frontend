import React, { useState } from 'react';
import Switch from 'react-switch';

export default function RetailerNotification() {
    const [checked, setChecked] = useState(true);
    return (
        <div className="products_content">
            <div className="products_body">
                <div className="content_area">
                    <div id="alerts">
                        <div className="alerts_info">
                            <h2 className="heading">Notifications</h2>
                            <div className="form-area">
                                <div className="form-input">
                                    <h4>Email me when:</h4>
                                </div>
                                <div className="form-input retailer_access-item flex_start mt-4">
                                    <div className="alert-access">
                                        <h4>There is a new order</h4>
                                    </div>
                                    <div className="my-toggle-btn">
                                        <Switch
                                            handleDiameter={18}
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            height={20}
                                            width={48}
                                            className="react-switch"
                                            onChange={() =>
                                                setChecked(!checked)
                                            }
                                            checked={checked}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
