import React, { useState } from 'react';
import checkTrue from '../../../assets/images/icons/check-white.svg';
import exclmenationIcon from '../../../assets/images/icons/acculturation.svg';
import '../../Brand/Style/brand.style.scss';
import '../../Brand/Style/brand.dev.scss';
import '../../Brand/Style/brand.media.scss';
import BrandHeader from '../../Brand/common/components/BrandHeader';
import OnboardListUI from './UI/OnboardListUI';
import { map } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserDetails } from '../../../redux/user/userSelector';
import { useEffect } from 'react';
import {
  selectBrandProfileDetails,
  selectProfileCompleted,
} from '../../../redux/Brand/Profile/brandProfileSelectors';
import {
  connectShopifyAction,
  getBrandProfileAction,
  syncProductAction,
  syncProductProfile,
} from '../../../actions/brandActions';

const list = [
  {
    text1: 'Configure your mandatory',
    linkText: 'Settings',
    isOnboarding: true,
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
    isOnboarding: false,
    guideLink:
      'https://intercom.help/shopdot/en/articles/6549404-how-do-i-activate-a-product',
  },
];

export default function BrandOnBoarding() {
  const useDetails = useSelector(selectUserDetails);
  const profileCompleted = useSelector(selectProfileCompleted);
  const brandProfileDetails = useSelector(selectBrandProfileDetails);
  const dispatch = useDispatch();
  const [storeName, setStoreName] = useState('');
  const [isStoreNameValid, setIsStoreNameValid] = useState(false);

  const [brandStep, setBrandStep] = useState([]);
  const [activeStep, setActiveStep] = useState(1);
  const [productId, setProductId] = useState('8019618038038');
  const [isStepOneCompleted, setIsStepOneCompleted] = useState(false);
  const [isStepTwoCompleted, setIsStepTwoCompleted] = useState(false);
  const [isStepThreeCompleted, setIsStepThreeCompleted] = useState(false);
  const [isStepFourCompleted, setIsStepFourCompleted] = useState(false);

  const { integration } = profileCompleted || {};
  const {
    brand_profile,
    brandPreference,
    shippingRate,
    shipping_charges,
    shop_detail,
    user_detail,
    payment_detail,
  } = brandProfileDetails || {};
  const { base_shipping_charge, incremental_shipping_charge } =
    shipping_charges || {};
  const { incremental_fee, shipping_cost } = shippingRate || {};
  const { is_active, shop } = shop_detail || {};

  useEffect(() => {
    dispatch(getBrandProfileAction(useDetails.id));
  }, []);

  useEffect(() => {
    handleComplete();
  }, [profileCompleted]);

  const handleComplete = () => {
    if (
      brandProfileDetails?.user_detail?.is_initial_sync_done &&
      profileCompleted.integration
    ) {
      setBrandStep([1, 2, 3]);
      setActiveStep(4);
      setStoreName(brandProfileDetails?.shop_detail?.shop);
    } else if (profileCompleted.integration) {
      setBrandStep([1, 2]);
      setActiveStep(3);
      setStoreName(brandProfileDetails?.shop_detail?.shop);
    } else if (
      profileCompleted.profile &&
      profileCompleted.shipping &&
      profileCompleted.preference &&
      profileCompleted.paid
    ) {
      setBrandStep([1]);
      setActiveStep(2);
    }
  };

  // useEffect(() => {
  //   dispatch(getBrandProfileAction(useDetails.id));
  // }, []);

  // useEffect(() => {
  //   handleComplete();
  // }, [brandProfileDetails]);

  // const handleComplete = () => {
  //   setBrandStep([1]);
  //   setActiveStep(1);
  //   if (
  //     brand_profile &&
  //     brandPreference &&
  //     shippingRate &&
  //     incremental_fee &&
  //     shipping_cost &&
  //     payment_detail
  //   ) {
  //     setIsStepOneCompleted(true);
  //     setBrandStep([1]);
  //     setActiveStep(2);
  //   }
  //   if (is_active && shop) {
  //     if (isStepOneCompleted) {
  //       setBrandStep([1, 2]);
  //     }
  //     setIsStepTwoCompleted(true);
  //     setStoreName(shop);
  //   }

  //   if (isStepOneCompleted && isStepTwoCompleted) {
  //     setBrandStep([1, 2, 3]);
  //     setIsStepThreeCompleted(true);
  //   }
  //   if (isStepThreeCompleted) {
  //     setActiveStep(4);
  //   }
  // };

  const handleSetStoreName = (e) => {
    setStoreName(e.target.value);
  };

  const doSyncProduct = async () => {
    const productresponse = await dispatch(syncProductAction(useDetails.id));
    const profilerespose = await dispatch(syncProductProfile(useDetails.id));

    Promise.all([productresponse, profilerespose])
      .then((response) => {
        setBrandStep([1, 2, 3]);
        setActiveStep(4);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleStoreConnect = () => {
    dispatch(
      connectShopifyAction({
        name: `${storeName}.myshopify.com`,
        user_id: useDetails.id,
      })
    );
  };

  return (
    <>
      <div className="wrapper onbording">
        <BrandHeader />
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
                          isOnboarding={l.isOnboarding}
                          isCompleted={isCompleted}
                          isActive={curentKey == activeStep}
                          openGuide={
                            !is_active && curentKey == 2 && activeStep == 2
                          }
                          handleStore={handleSetStoreName}
                          shopifyConnected={
                            curentKey == 2 && brandStep.includes(2)
                          }
                          activeStep={activeStep}
                          handleConnect={handleStoreConnect}
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
