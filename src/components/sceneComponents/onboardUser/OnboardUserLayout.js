import React from 'react';
import DynamicHeader from '../../common/DynamicHeader';
import SetUpGuidCard from './UI/SetUpGuidCard';

export default function OnboardUserLayout({
  isBrand,
  callback,
  onChangeText,
  disable,
  connectCallback,
  onboardStep,
  shopifyUrl,
}) {
  const setUpCardData = isBrand
    ? [
        {
          title: 'Connect your shopify store',
          src: '#',
          isInputRequired: true,
        },
        {
          title: 'Confirm your settings',
          src: '#',
        },
        {
          title: 'Add shopify products to ShopDot',
          src: '#',
        },
        {
          title: 'Activate your products',
          src: '#',
        },
      ]
    : [
        {
          key: 'settings',
          title: 'Confirm your settings',
          src: '#',
        },
      ];
  return (
    <div>
      <DynamicHeader pageTitle="Getting Started" />
      <SetUpGuidCard
        shopifyUrl={shopifyUrl}
        onboardStep={onboardStep}
        data={setUpCardData}
        callback={callback}
        onChangeText={onChangeText}
        disable={disable}
        connectCallback={connectCallback}
      />
    </div>
  );
}
