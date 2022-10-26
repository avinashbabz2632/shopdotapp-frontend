import React, { useState } from 'react';
import PlatformSelectionLayout from '../sceneComponents/PlatformSelectionLayout';

export default function PlatformSelection() {
  const [selected, setSelected] = useState('');
  const [radioVal, setRadioVal] = useState('');

  const selectedStyle = {
    border: '2px solid #D18D58',
    backgroundColor: 'white',
  };

  const handleChange = (id) => {
    setSelected(id);
  };

  const OtherJsx = () => {
    return (
      <input className="mx-3" type="text" placeholder="Name of the platform" />
    );
  };
  return (
    <PlatformSelectionLayout
      selected={selected}
      radioVal={radioVal}
      selectedStyle={selectedStyle}
      handleChange={handleChange}
      OtherJsx={OtherJsx}
    />
  );
}
