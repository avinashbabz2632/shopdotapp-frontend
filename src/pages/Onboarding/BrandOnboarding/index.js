import React, { useState } from 'react';
import checkTrue from '../../../assets/images/icons/check-white.svg';
import exclmenationIcon from '../../../assets/images/icons/acculturation.svg';
import '../../Brand/Style/brand.style.scss';
import '../../Brand/Style/brand.dev.scss';
import '../../Brand/Style/brand.media.scss';
import BrandHeader from '../../../components/Header/BrandHeader';
import OnboardListUI from './UI/OnboardListUI';
import { map } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserDetails } from '../../../redux/user/userSelector';
import { useEffect } from 'react';
import { selectProfileCompleted } from '../../../redux/Brand/Profile/brandProfileSelectors';
import { getBrandProfileAction } from '../../../actions/brandActions';

const list = [
  {
    text1: 'Configure your mandatory',
    linkText: 'Settings',
    guideLink:
      'https://intercom.help/shopdot/en/articles/6549401-how-do-i-confirm-my-settings-and-preferences',
  },
  {
    text1: 'Connect your Shopify store',
    guideLink:
      'https://intercom.help/shopdot/en/articles/6549400-how-do-i-connect-my-shopify-store-to-shopdot',
  },
  {
    text1: 'Add ',
    linkText: 'Shopify Products',
    text2: ' to ShopDot',
    btnText: 'Sync Products',
    guideLink:
      'https://intercom.help/shopdot/en/articles/6549402-how-do-i-add-shopify-products-to-shopdot',
  },
  {
    text1: 'Activate your ',
    linkText: 'Settings',
    guideLink:
      'https://intercom.help/shopdot/en/articles/6549404-how-do-i-activate-a-product',
  },
];

export default function BrandOnBoarding() {
  const useDetails = useSelector(selectUserDetails);
  const profileCompleted = useSelector(selectProfileCompleted);
  const dispatch = useDispatch();
  const [storeName, setStoreName] = useState('');
  const [isStoreNameValid, setIsStoreNameValid] = useState(false);

  const [brandStep, setBrandStep] = useState([]);
  const [activeStep, setActiveStep] = useState(1);
  const [productId, setProductId] = useState('8019618038038');

  useEffect(() => {
    dispatch(getBrandProfileAction(useDetails.id));
  }, []);

  useEffect(() => {
    handleComplete();
  }, [profileCompleted]);

  const handleComplete = () => {
    if (
      profileCompleted.profile &&
      profileCompleted.shipping &&
      profileCompleted.preference &&
      profileCompleted.paid
    ) {
      setBrandStep([1]);
      setActiveStep(2);
    }
    if (profileCompleted.integration) {
    }
  };

  const handleSetStoreName = (e) => {
    const fixedSuffix = ['myshopify', 'com'];
    const storeName = e.target.value;
    const isValid = storeName
      .split('.')
      .some((item) => !fixedSuffix.includes(item));
    console.log(e.target.value, 'e.target.value', isValid);
    setIsStoreNameValid(isValid);
    setStoreName(e.target.value);
  };

  const doSyncProduct = () => {
    dispatch(syncProductAction(productId, useDetails.id));
  };

  return (
    <>
      <BrandHeader />
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
                    {map(list, (l, key) => {
                      const curentKey = key + 1;
                      const isCompleted = brandStep.includes(curentKey);
                      return (
                        <OnboardListUI
                          {...l}
                          key={curentKey}
                          isCompleted={isCompleted}
                          isActive={curentKey == activeStep}
                          openGuide={curentKey == 2 && activeStep == 2}
                          handleStore={handleSetStoreName}
                          shopifyConnected={
                            curentKey == 2 && brandStep.includes(2)
                          }
                          storeName={storeName}
                          btnCallback={doSyncProduct}
                        />
                      );
                    })}
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

                <div className="step-indicator-wide">
                  <h6>Getting Started (0/4)</h6>
                  <div className="si-info not-completed">
                    <img
                      src={exclmenationIcon}
                      alt="connet your shopify store"
                    ></img>{' '}
                    <span className="link">
                      {' '}
                      Configure your mandatory Settings
                    </span>
                  </div>
                  <div className="si-info">
                    <img src={checkTrue} alt="confirm your settings"></img>{' '}
                    <span className="link"> Connect your Shopify store</span>
                  </div>
                  <div className="si-info">
                    <img
                      src={checkTrue}
                      alt="Add shopify products to shopdot"
                    />{' '}
                    <span className="link">
                      Add Shopify producs to Shopdots
                    </span>
                  </div>
                  <div className="si-info not-completed">
                    <img src={checkTrue} alt="Activate your product" />{' '}
                    <span className="link">Activate your products</span>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
