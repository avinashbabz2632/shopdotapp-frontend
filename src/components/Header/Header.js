// Component:: Header component

import React from 'react';
import PropTypes from 'prop-types';
import logoPng from '../../assets/images/logos/logo-png.png';
import '../../pages/Onboarding/onboarding.style.scss';

function Header({ pageTitle }) {
  return (
    <div className="onboard">
      <div className="ob-head">
        <img src={logoPng} alt="logo" className="logo-round" />
        <h1>{pageTitle}</h1>
      </div>
    </div>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string,
};

Header.defaultProps = {
  pageTitle: 'Signin',
};

export default Header;
