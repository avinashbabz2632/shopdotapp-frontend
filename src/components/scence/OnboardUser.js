import React from 'react';
import { useHistory } from 'react-router-dom';
import OnboardUserLayout from '../sceneComponents/onboardUser/OnboardUserLayout';

export default function OnboardUser() {
  const history = useHistory();
  return (
    <OnboardUserLayout
      callback={(callbackType) => {
        if (callbackType === 'settings') {
          history.push('/settings');
        }
      }}
    />
  );
}
