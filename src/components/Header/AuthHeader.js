// Component:: Header component

import React from 'react';
import PropTypes from 'prop-types';
import logoPng from '../../assets/images/logos/logo-png.png';
import '../../pages/Auth/auth.style.scss';

function AuthHeader({ pageTitle }) {
  return (
    <div className="auth">
      <div className="ob-head">
        <img src={logoPng} alt="logo" className="logo-round" />
        <h1>{pageTitle}</h1>
      </div>
    </div>
  );
}

AuthHeader.propTypes = {
  pageTitle: PropTypes.string,
};

AuthHeader.defaultProps = {
  pageTitle: 'Signin',
};

export default AuthHeader;
