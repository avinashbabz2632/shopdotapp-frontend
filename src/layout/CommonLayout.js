// Layout:: Onboarding layout component

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import OnboardingHeader from '../components/Header/OnboardingHeader';
import { isLoggedIn } from '../redux/auth/authSelector';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { selectUserDetails } from '../redux/user/userSelector';
import axios from 'axios';
import { shippingValidationSchema } from '../pages/Brand/Settings/Paid/ValidationSchema';

function CommonLayout({ children, classNames, pageTitle }) {
  const navigate = useNavigate();
  const isLogged = useSelector(isLoggedIn);
  const userDetils = useSelector(selectUserDetails);

  useEffect(() => {
    const pathname = window.location.pathname;
    if (isLogged) {
      console.log(userDetils, 'userDetils');
      const token = `${userDetils.access_token}`;
      axios.defaults.headers.common['Authorization'] = token;
    } else {
      if (pathname !== '/sign-up') {
        navigate('/');
      }
    }
  }, []);
  shippingValidationSchema;
  return (
    <>
      <div>{children}</div>
      <ToastContainer />
    </>
  );
}

CommonLayout.propTypes = {
  children: PropTypes.any,
};

CommonLayout.defaultProps = {
  children: <p>Shopdot</p>,
};

export default CommonLayout;
