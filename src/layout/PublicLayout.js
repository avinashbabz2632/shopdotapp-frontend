// Layout:: Public layout component

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isLoggedIn } from '../redux/auth/authSelector';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { selectUserDetails } from '../redux/user/userSelector';

function PublicLayout({ children }) {
  return (
    <>
      <main>
        <section className="auth_section sign sign-@@cls">
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
