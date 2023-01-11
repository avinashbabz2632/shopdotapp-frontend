// Onboarding flow:: Verify Email Page

import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import OnboardingLayout from '../../../layout/OnboardingLayout';
import emailIcon from '../../../assets/images/icons/ic_email_sent.svg';
import { LinkMod } from '../../../components/common/A';
import Button from '../../../components/common/Button';
// import '../onboarding.style.scss';

function EmailVerification() {
    const navigate = useNavigate();
    const handleGoPersonalize = () => {
        navigate('/personalize');
    };
    return (
        <>
            <OnboardingLayout pageTitle="Create Your ShopDot Account">
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
                                Verify Your Email
                            </h2>
                        </div>
                        <p>
                            An email has been sent to your email address with a
                            link to verify your account. You will need to verify
                            your email to complete sign up.
                        </p>
                        <div className="form__field  mt-5">
                            <Button
                                className="button w-100"
                                type="button"
                                onClick={handleGoPersonalize}
                            >
                                Resend Verification Email
                            </Button>
                        </div>
                    </div>
                </div>
            </OnboardingLayout>
        </>
    );
}

export default EmailVerification;
