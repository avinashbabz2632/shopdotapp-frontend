import React from 'react';
import PropTypes from 'prop-types';

function Alerts({ alertType, children }) {
    return (
        <div className="sd_alert">
            <div className={`${alertType} alert mx-100`} role="alert">
                {children}
            </div>
        </div>
    );
}

Alerts.propTypes = {
    alertType: PropTypes.string,
    children: PropTypes.any,
};

export default Alerts;
