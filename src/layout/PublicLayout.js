// Layout:: Public layout component

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isLoggedIn } from '../redux/auth/authSelector';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PublicLayout({ children }) {
  const navigate = useNavigate();
  const isLogged = useSelector(isLoggedIn);

  useEffect(() => {
    const pathname = window.location.pathname;
    if (isLogged) {
    } else {
      if (pathname !== '/sign-up') {
        navigate('/');
      }
    }
  }, []);

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
