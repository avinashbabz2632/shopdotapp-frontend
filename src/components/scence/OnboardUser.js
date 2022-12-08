import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import OnboardUserLayout from '../sceneComponents/onboardUser/OnboardUserLayout';

export default function OnboardUser({
  actions,
  userReducer: { isShopityConnected },
}) {
  const history = useHistory();

  const [onboardStep, setOnboardStep] = useState(1);
  const [shopifyUrl, setShopifyUrl] = useState('');

  useEffect(() => {
    if (isShopityConnected) {
      setOnboardStep(2);
      actions.clearUserReducerAction();
    }
  }, [isShopityConnected]);

  const doAction = () => {
    actions.connectShopifyAction(shopifyUrl, 1);
  };

  const btnDisable = isEmpty(shopifyUrl);

  const platformType = localStorage.getItem('platformType');

  return (
    <OnboardUserLayout
      shopifyUrl={shopifyUrl}
      onChangeText={(e) => {
        console.log(e, 'e');
        setShopifyUrl(e.target.value);
      }}
      isBrand={platformType === 'brand'}
      onboardStep={onboardStep}
      disable={btnDisable}
      connectCallback={doAction}
      callback={(callbackType) => {
        if (callbackType === 'settings') {
          history.push('/settings');
        }
      }}
    />
  );
}
