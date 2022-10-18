import React from 'react';
import Note from '../common/note';
import SettingsHeader from '../common/SettingsHeader';

const noteDate = ['Red flag warnings are shown at both product and variant level when stock is 0. There is also automatic in-app notifications for low and empty stock.']

const AlertAndNotifications = () => {
    return (
        <SettingsHeader heading={'Alerts and Notifications'} isRequired>
            <div>
                <div className="shippingLocationwrapper">
                    <div className='settingLayoutHeading mb-4' style={{ borderBottom: '1px solid #E5E5E5' }} >
                        <h2>Email Notifications</h2>
                    </div>
                    <div className='row shippingLocation'>
                        <div className='col-12 mb-4'>
                            <h6 style={{ fontSize: 14, marginBottom: 14 }}>Email me when:</h6>
                            <div class="form-check form-switch orderSwitch">
                                <label className="form-check-label" for="flexSwitchCheckChecked">There is a new order</label>
                                <input className="form-check-input orderFormSwitch" type="checkbox" role="switch" id="flexSwitchCheckChecked" data-onstyle="success" />
                            </div>
                        </div>

                        <div className='settingLayoutHeading mt-4' style={{ borderBottom: '1px solid #E5E5E5' }} >
                            <h2>Low Stock Level Warnings</h2>
                        </div>
                        <div className='col-12 mb-4'>
                            <h6>Show Orange flag at product level when product stock is below:</h6>
                            <input type='text' className='ExtraStyledInput mt-4' placeholder='10' />
                        </div>
                        <div className="col-12">
                            <Note data={noteDate} />
                        </div>
                        <div className="col-md-6 mt-5">
                            <button className="button button-grey w-100">Cancle</button>
                        </div>
                        <div className="col-md-6  mt-5">
                            <button className="button w-100 " type='submit'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </SettingsHeader>
    );
}

export default AlertAndNotifications;
