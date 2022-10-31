// Onboarding flow:: Verify Email Page

import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import OnboardingLayout from '../common/layout/OnboardingLayout';
import emailIcon from '../../assets/images/icons/icon-email-sent.svg';
import { LinkMod } from '../common/A';

export default function VerifyEmail({ actions, userReducer: { userDetails } }) {
  useEffect(() => {
    setTimeout(() => {
      history.push('/platform');
    }, 500);
  }, []);

  const handleResend = () => {
    actions.sendEmailVerificationAction({ id: userDetails.id });
  };

  return (
    <>
      <OnboardingLayout pageTitle="Create Your ShopDot Account">
        <div className="form-area">
          <div className="form-group verify_email">
            <div className="verify-title">
              <img src={emailIcon} alt="email" />
              <h2>Verify Your Email</h2>
            </div>
            <p>
              You will need to verify your email to complete sign up. An email
              has been sent to your email address with a link to verify your
              account.
            </p>
            <div className="form__field buttons mt-5">
              <button
                className="button w-100"
                type="submit"
                onClick={handleResend}
              >
                Resend Verification Email
              </button>
            </div>
            <div className="mt-4">
              <LinkMod to="/">Use a different email address to sign up</LinkMod>
            </div>
          </div>
        </div>
      </OnboardingLayout>
    </>
  );
}
