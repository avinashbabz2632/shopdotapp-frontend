import React from 'react';
import { LinkMod } from '../../../components/common/A';
import tickIcon from '../../../assets/images/icons/tick.svg';
import checkTrue from '../../../assets/images/icons/check-white.svg';
import '../../Retailer/Style/retail.style.scss';
import '../../Retailer/Style/retail.media.scss';
import '../../Retailer/Style/retail.dev.scss';
import RetailerHeader from '../../Retailer/common/components/RetailerHeader';

export default function ReatialerOnBoarding() {
  return (
    <div className="onboard">
      <RetailerHeader />
      <div className="wrapper onbording">
        <main>
          <section>
            <div className="ob-head oh-setting">
              <h1>Getting Started</h1>
            </div>
            <div className="ob-body">
              <div className="form-wrapper fw-wide">
                <form className="form" id="">
                  <div className="w-100 form-area">
                    <div className="confirm-setting-area">
                      <div className="cs-item">
                        <img src={tickIcon}></img>
                        <span className="cs-label">
                          Confirm your mandatory&nbsp;
                          <LinkMod
                            className="ob-link"
                            to={'/retailer/setting/'}
                          >
                            Settings
                          </LinkMod>
                        </span>
                        <a
                          href="https://intercom.help/shopdot/en/articles/6772133-how-do-i-confirm-my-settings-and-preferences"
                          target="_blank"
                          className="cs-link"
                        >
                          Setup Guide
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* <div className="steps step-left">
                <div className="step-indicator">
                  <h6>Getting Started</h6>
                  <div className="si-info">
                    <img src={checkTrue} alt="confirm your setting" /> Confirm
                    your settings
                  </div>
                </div>
              </div> */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
