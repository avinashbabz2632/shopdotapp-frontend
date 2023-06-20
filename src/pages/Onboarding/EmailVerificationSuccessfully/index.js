// Onboarding flow:: Verify Email Page

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import OnboardingLayout from '../../../layout/OnboardingLayout';
import emailIcon from '../../../assets/images/icons/ic_email_sent.svg';
import { LinkMod } from '../../../components/common/A';
import Button from '../../../components/common/Button';
import { useSelector } from 'react-redux';
import { selectUserDetails } from '../../../redux/user/userSelector';
import { isLoggedIn } from '../../../redux/auth/authSelector';

// import '../onboarding.style.scss';

function EmailVerification() {
  const navigate = useNavigate();
  const userDetails = useSelector(selectUserDetails);
  const loggedIn = useSelector(isLoggedIn);

  const handleNextClick = () => {
    const { is_email_verified } = userDetails || {};
    if (loggedIn && is_email_verified) {
      navigate('/personalize');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="onboard">
      <OnboardingLayout pageTitle="">
        <div className="form-area">
          <div className="form-group verify_email">
            <div className="verify-title">
              <img src={emailIcon} alt="email" />
              <h2
                style={{
                  fontFamily: 'Mulish, sans-serif',
                  marginLeft: '5px',
                }}
              >
                Email Verified Successfully
              </h2>
            </div>
            <p>Your email address is verified successfully</p>
            <div className="form__field  mt-5">
              <Button
                className="button w-100"
                type="button"
                onClick={handleNextClick}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </OnboardingLayout>
    </div>
  );
}

export default EmailVerification;
