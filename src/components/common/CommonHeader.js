import React from 'react';
import PropTypes from 'prop-types';
import logoMain from '../../assets/images/logos/logo-main.png';

function CommonHeader({ pageTitle }) {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="text-center">
          <h1>{pageTitle}</h1>
        </div>
      </div>

      <div className="header__logo">
        <picture>
          <img src={logoMain} alt="Shop Dot" />
        </picture>
      </div>
    </header>
  );
}

CommonHeader.propTypes = {
  pageTitle: PropTypes.string,
};

CommonHeader.defaultProps = {
  pageTitle: 'Signin',
};

export default CommonHeader;
