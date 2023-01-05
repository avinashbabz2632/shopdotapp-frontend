import React, { useState } from 'react';
import OnboardingLayout from '../../../layout/OnboardingLayout';
import Input from '../../../components/common/Input/divStyled';
import Button from '../../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import retailerIcon from '../../../assets/images/icons/retailer.svg';
import brandIcon from '../../../assets/images/icons/brand.svg';
import '../onboarding.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserRoleAction } from '../../../actions/userActions';
import { selectUserDetails } from '../../../redux/user/userSelector';

export default function Personalize() {
  const [supplier, setSupplier] = useState(0);
  const [platform, setPlatform] = useState(1);
  const [platformName, setPlatformName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector(selectUserDetails);

  console.log(userDetails, 'userDetails');

  //Here 1 for BRAND SUPPLIER and 2 for OTHERS
  const selectSupplier = (supplier) => {
    if (supplier === 1) {
      dispatch(
        updateUserRoleAction({
          user_id: userDetails.id,
          role: 'brand',
        })
      );
      setSupplier(1);
    } else {
      dispatch(
        updateUserRoleAction({
          user_id: userDetails.id,
          role: 'retailer',
        })
      );
      setSupplier(2);
      setPlatform(1);
    }
  };

  //Here 1 for SHOFIFY and 2 for OTHERS
  const selectPlatform = (platform) => {
    if (platform == 1) {
      setPlatform(1);
    } else {
      setPlatform(2);
    }
  };

  const handleBack = () => {
    setPlatform(1);
  };

  const handleGoSupport = () => {
    if (supplier === 1 && platform != 2) {
      navigate('/brand-onboarding');
    } else if (supplier === 2 || platform === 2) {
      navigate('/personalized-not-supported', { state: platformName });
    }
  };

  const handleChangeInput = (e) => {
    setPlatformName(e.target.value);
  };

  return (
    <>
      <OnboardingLayout pageTitle="Let’s Personalize Your Platform & Experience">
        <form action="#" className="form" id="">
          <div className="form-area">
            <div className="form-group personalize">
              <p className="p-text mb-0">
                Please tell us more about you. You are a …
              </p>
              <div className="personalize_selection">
                <div
                  className={
                    supplier == 1
                      ? 'personalized-selected pse_item pse_brand'
                      : 'pse_item'
                  }
                  onClick={() => selectSupplier(1)}
                >
                  <img style={{ marginTop: '2.6rem' }} src={brandIcon}></img>
                  <h3>BRAND Supplier</h3>
                  <p>
                    I would like to use ShopDot to offer product listing
                    content, on-demand inventory and drop-shipping to my
                    retailers.
                  </p>
                </div>
                <div
                  className={
                    supplier == 2
                      ? 'personalized-selected pse_item pse_retailer'
                      : 'pse_item'
                  }
                  onClick={() => selectSupplier(2)}
                >
                  {/*<svg className="icon">*/}
                  <img style={{ marginTop: '2.6rem' }} src={retailerIcon}></img>
                  {/*</svg>*/}
                  <h3>RETAILER</h3>
                  <p>
                    I would like to use ShopDot to tap into the product listing
                    content, inventory and drop-shipping capabilities of my
                    brand suppliers.
                  </p>
                </div>
              </div>
              {supplier && supplier === 1 && platform !== 2 ? (
                <div className="category-form-input integrate-area mt-5">
                  <div className="form-input">
                    <label htmlFor="" className="form-label text-navy mb-0">
                      How do you want to integrate?{' '}
                      <span className="asterisk-red">*</span>
                    </label>
                    <small className="info-integrate">
                      As a Brand Supplier, ShopDot will sync your products to
                      your retailers using this integration.
                    </small>
                    <div className="pe_radio select_info-integrate radiobox-group radio">
                      <label
                        htmlFor="radio-integrate"
                        className="radiobox"
                        onClick={() => selectPlatform(1)}
                      >
                        <input
                          type="radio"
                          name="radio-filter"
                          id="radio-integrate"
                          value="1"
                          checked
                        />
                        <div className="radiobox-text">
                          <span>Shopify</span>
                        </div>
                      </label>
                      <label
                        htmlFor="radio-integrate-one"
                        className="radiobox"
                        onClick={() => selectPlatform(2)}
                      >
                        <input
                          type="radio"
                          name="radio-filter"
                          id="radio-integrate-one"
                          value="0"
                        />
                        <div className="radiobox-text">
                          <span>Other</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}
              {platform && platform == 2 ? (
                <div className="integrate-area-input mt-5">
                  <div className="form-input">
                    <label htmlFor="" className="form-label text-navy">
                      How do you want to integrate?{' '}
                      <span className="asterisk-red">*</span>
                    </label>
                    <small className="info-integrate">
                      As a Brand Supplier, ShopDot will sync your products to
                      your retailers using this integration.
                    </small>
                    <div className="form__field">
                      <Input
                        type="text"
                        value={platformName}
                        placeholder="Name of the platform"
                        onChange={handleChangeInput}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}
              {platform && platform != 2 ? (
                <div className="mt-5">
                  <Button
                    type="button"
                    className="button w-100 "
                    disabled={supplier == 0 ? true : false}
                    onClick={handleGoSupport}
                  >
                    Next
                  </Button>
                </div>
              ) : (
                ''
              )}
              {platform && platform == 2 ? (
                <div className="mt-5">
                  <div className="fit-d-flex">
                    <Button
                      type="button"
                      className="button w-50 button bordered cancel"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      disabled={platformName.length > 0 ? false : true}
                      className="button w-50 "
                      onClick={handleGoSupport}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </form>
      </OnboardingLayout>
    </>
  );
}
