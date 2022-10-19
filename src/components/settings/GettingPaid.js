import React from 'react';
import SettingsHeader from '../common/SettingsHeader';
import './style.css';

const GettingPaid = () => {
    return (
        <div className='gettingPaid'>
            <SettingsHeader heading={'Getting Paid'} isRequired>
                <div>
                    <p className='settingLayoutParagraph'>
                        ShopDot, Inc. works with Priority Technology Holdings, Inc. ("PRTH") to provide merchant accounts for businesses just like you. Priority provides a valuable service which includes processing your customer's payment transactions and depositing the funds into your account. To enable merchant account services through Priority, please complete the following application.
                    </p>
                    <button className='settingbutton'>Start Application</button>
                    <div className='row' style={{ marginTop: 30 }}>
                        <div className='col-md-6'>
                            <div className='icons'></div>
                            <p className='settingLayoutParagraph' style={{ marginBottom: 14 }}>What information will I need?</p>
                            <span>You will be asked to provide standard business and bank account details</span>
                        </div>
                        <div className='col-md-6'>
                            <div className='icons'></div>
                            <p className='settingLayoutParagraph' style={{ marginBottom: 14 }}>How long does it take?</p>
                            <span>It will take 5-10 minutes to complete this application</span>
                        </div>

                    </div>
                </div>
            </SettingsHeader>
        </div>
    );
}

export default GettingPaid;
