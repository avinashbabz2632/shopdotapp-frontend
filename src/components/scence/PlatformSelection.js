import React, { useEffect, useState } from 'react';
import PlatformSelectionLayout from '../sceneComponents/PlatformSelectionLayout';
import { isEmpty } from 'lodash';
import { useHistory } from 'react-router-dom';

export default function PlatformSelection({
  actions,
  userReducer: {
    userDetails: { id },
    isUserPlatformUpdated,
    platformType,
  },
}) {
  const history = useHistory();
  const [selected, setSelected] = useState('');
  const [radioVal, setRadioVal] = useState('');
  const [otherPlatform, setOtherPlatform] = useState('');

  const selectedStyle = {
    border: '2px solid #D18D58',
    backgroundColor: 'white',
  };

  useEffect(() => {
    if (isUserPlatformUpdated) {
      localStorage.setItem('platformType', platformType);
      history.push('/onboard');
      actions.clearUserReducerAction();
    }
  }, [isUserPlatformUpdated]);

  const handleChange = (id) => {
    setSelected(id);
    setRadioVal('');
  };

  const isDisable =
    selected === '' || selected === 'brand'
      ? radioVal == 'other'
        ? isEmpty(otherPlatform)
        : radioVal == ''
      : false;

  const doAction = () => {
    const getId = localStorage.getItem('userId');
    const currentPlatform = radioVal == 'shopify' ? 'shopify' : otherPlatform;
    actions.updateUserRoleAction(
      { user_id: getId, role: selected },
      currentPlatform,
      history
    );
  };

  return (
    <PlatformSelectionLayout
      selected={selected}
      radioVal={radioVal}
      selectedStyle={selectedStyle}
      handleChange={handleChange}
      isDisable={isDisable}
      callback={doAction}
      otherPlatform={otherPlatform}
      onChangeText={(e) => {
        setOtherPlatform(e.target.value);
      }}
      onChangeRadio={(e) =>
        setRadioVal(e && e.target && e.target.value ? e.target.value : '')
      }
    />
  );
}
