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

function OnboardingLayout({ children, classNames, pageTitle }) {
  return (
    <>
      <div className="wrapper onbording">
        <main>
          <section>
            <OnboardingHeader pageTitle={pageTitle} />
            <div className="ob-body">
              <div className={classNames}>{children}</div>
            </div>
          </section>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}

OnboardingLayout.propTypes = {
  children: PropTypes.any,
  pageTitle: PropTypes.any,
  classNames: PropTypes.any,
};

OnboardingLayout.defaultProps = {
  children: <p>Shopdot</p>,
  pageTitle: 'Signin',
  classNames: 'form-wrapper',
};

export default OnboardingLayout;
