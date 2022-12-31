// Layout:: Public layout component

import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PublicLayout({ children }) {
  return (
    <>
      <main>
        <section className="section sign sign-@@cls">
          <div className="container">
            <div className="sign__content">{children}</div>
          </div>
        </section>
      </main>
      <ToastContainer />
    </>
  );
}

PublicLayout.propTypes = {
  children: PropTypes.any,
};

PublicLayout.defaultProps = {
  children: <p>Shopdot</p>,
};

export default PublicLayout;
