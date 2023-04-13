
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from '../../../layout/OnboardingLayout';
import emailIcon from '../../../assets/images/icons/ic_email_sent.svg';
import Button from '../../../components/common/Button';

function EmailVerification() {
  return (
    <>
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
                Verification Fail Your Email
              </h2>
            </div>

            <div className="form__field  mt-5">
              <Button
                className="button w-100"
                type="button"
                onClick={""}
              >
                      Home
              </Button>
            </div>
          </div>
        </div>
      </OnboardingLayout>
    </>
  );
}

export default EmailVerification;
