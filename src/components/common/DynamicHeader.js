import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import logoMain from '../../assets/images/logos/logo-main.png';

function DynamicHeader({ pageTitle, position, reverse }) {
  return (
    <header className="dynamicHeaderWrapper">
      <div className="container dynamicHeader">
        <div
          className="text-center title"
          style={{
            justifyContent: position,
            flexDirection: reverse ? 'row-reverse' : null,
          }}
        >
          <img src={logoMain} alt="Shop Dot" />
          <h3>{pageTitle}</h3>
        </div>
      </div>
    </header>
  );
}

DynamicHeader.propTypes = {
  pageTitle: PropTypes.string,
};

DynamicHeader.defaultProps = {
  pageTitle: 'Signin',
};

export default DynamicHeader;
