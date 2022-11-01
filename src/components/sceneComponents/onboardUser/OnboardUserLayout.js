import React from 'react';
import DynamicHeader from '../../common/DynamicHeader';
import SetUpGuidCard from './UI/SetUpGuidCard';

export default function OnboardUserLayout({ isBrand, callback }) {
  const setUpCardData = isBrand
    ? [
        {
          title: 'Confirm your settings',
          src: '#',
        },
        {
          title: 'Confirm your settings',
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
      <SetUpGuidCard data={setUpCardData} callback={callback} />
    </div>
  );
}
