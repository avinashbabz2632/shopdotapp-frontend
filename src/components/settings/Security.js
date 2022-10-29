import React from 'react';
import SettingsHeader from '../common/SettingsHeader';


const Security = () => {
    return (
        <SettingsHeader heading={'Security'} isRequired>
            <div>
                <div className="shippingLocationwrapper">
                    <div className='settingLayoutHeading mt-2' style={{ borderBottom: '1px solid #E5E5E5' }} >
                        <h2>Change Password</h2>
                    </div>
                    <div className='row shippingLocation'>
                        <div className='col-12 mb-4'>
                            <label>Old Password</label>
                            <input type='text' className='ExtraStyledInput' placeholder='Enter old password' />
                        </div>
                        <div className='col-12 mb-4'>
                            <label>New Password</label>
                            <input type='text' className='ExtraStyledInput' placeholder='Enter new password' />
                        </div>
                        <div className='col-12 mb-4'>
                            <label>Confirm New Password</label>
                            <input type='text' className='ExtraStyledInput' placeholder='Enter retype new password' />
                        </div>
                        <div className="col-md-6 mt-5">
                            <button className="button button-grey w-100">Cancle</button>
                        </div>
                        <div className="col-md-6  mt-5">
                            <button className="button w-100" type='submit'>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </SettingsHeader>
    );
}

export default Security;
