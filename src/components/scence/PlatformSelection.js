import React, { useState } from 'react';
import PlatformSelectionLayout from '../sceneComponents/PlatformSelectionLayout';

export default function PlatformSelection() {
  const [selected, setSelected] = useState('');
  const [radioVal, setRadioVal] = useState('');
  const [otherPlatform, setOtherPlatform] = useState('');

  const selectedStyle = {
    border: '2px solid #D18D58',
    backgroundColor: 'white',
  };

  const handleChange = (id) => {
    setSelected(id);
    setRadioVal('');
  };

  const isDisable =
    selected === '' || selected === 'supplier' ? radioVal == '' : false;

  const doAction = () => {};

  return (
    <PlatformSelectionLayout
      selected={selected}
      radioVal={radioVal}
      selectedStyle={selectedStyle}
      handleChange={handleChange}
      isDisable={isDisable}
      onChangeText={() => {}}
      onChangeRadio={(e) =>
        setRadioVal(e && e.target && e.target.value ? e.target.value : '')
      }
    />
  );
}
