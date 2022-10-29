import React from 'react';
import './styles.css';

const SettingsHeader = ({ children, heading, isRequired, labelText }) => {
    return (
        <>
            <div className='settingLayoutHeader'>
                <div className='settingLayoutMainHeading'>
                    <h2>{heading}</h2> {isRequired ? <span className='required'>*</span> : null}
                </div>
                {labelText && <label>{labelText}</label>}
            </div>
            <div className='settingLayout'>
                {children}
            </div>
        </>
    );
}

export default SettingsHeader;
