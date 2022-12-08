import React from 'react';
import DynamicHeader from '../common/DynamicHeader';
import '../../styles/notSupportedStyle.css';
import not_supported from '../../assets/images/placeholder/not-supported.jpg';

export default function NotSupportedLayout() {
  return (
    <div>
      <DynamicHeader
        pageTitle="Let's Personalize Your Platform & Experience"
        position="center"
      />
      <div class="ob-body">
        <div class="form-supported">
          <form action="#" class="form" id="">
            <div class="not-supported-area">
              <div class="form-group verify_email">
                <div class="verify-title">
                  {/* <svg class="icon-mail">
                    <use xlink:href="images/sprite.svg#supported"></use>
                  </svg> */}
                  <h2>GumRoad Currently Not Supported</h2>
                </div>
                <p>
                  We currently support Shopify only. We will notify you once
                  we're integrated with your eCommerce hosting platform.
                </p>

                <div class="form-input mt-5">
                  <a
                    href="onboarding-personalize.html"
                    class="button w-100 large"
                  >
                    Back to ShopDot
                  </a>
                </div>
              </div>
              <div class="form-group ns-img">
                <img src={not_supported} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
