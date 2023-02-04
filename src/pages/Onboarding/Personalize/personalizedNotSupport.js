import React from 'react';
import OnboardingLayout from '../../../layout/OnboardingLayout';
import Button from '../../../components/common/Button';
import NotSupportImg from '../../../assets/images/not-supported.jpg';
import { useNavigate, useLocation } from 'react-router-dom';
import trafficIcon from '../../../assets/images/icons/traffic.svg';
import '../onboarding.style.scss';

export default function PersonalizeNotSupport() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleGoBackSupport = () => {
    navigate('/personalize');
  };

  return (
    <>
      <OnboardingLayout
        classNames="no_support_wrapper"
        pageTitle="Let’s Personalize Your Platform & Experience"
      >
        <div className="form-supported">
          <form action="#" className="not-supported-area" id="">
            {/*<div className="not-supported-area">*/}
            <div className="verify_email">
              <div className="verify-title">
                <img src={trafficIcon}></img>
                <h2>{state} Currently Not Supported</h2>
              </div>
              <p>
                We currently support Shopify only. We will notify you once
                we&apos;re integrated with your eCommerce hosting platform.
              </p>
              <div className="w-100 form-input mt-5">
                <Button
                  type="button"
                  className="no_support_button w-100 button"
                  onClick={handleGoBackSupport}
                >
                  Back to ShopDot
                </Button>
              </div>
            </div>
            <div className="no_support_img">
              <img className="w-100 no_wrapper_img" src={NotSupportImg} />
            </div>
            {/*</div>*/}
          </form>
        </div>
      </OnboardingLayout>
    </>
  );
}
