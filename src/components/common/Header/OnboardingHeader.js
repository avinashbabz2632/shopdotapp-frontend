// Component:: OnboardingHeader component

import React from 'react';
import PropTypes from 'prop-types';
import logoPng from '../../../assets/images/logos/logo-png.png';

function OnboardingHeader({ pageTitle }) {
  return (
    <>
      <div className="ob-head">
        <img src={logoPng} alt="logo" />
        <h1>{pageTitle}</h1>
      </div>
    </>
  );
}

OnboardingHeader.propTypes = {
  pageTitle: PropTypes.string,
};

OnboardingHeader.defaultProps = {
  pageTitle: 'Signin',
};

export default OnboardingHeader;
