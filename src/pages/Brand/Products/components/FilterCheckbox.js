import React from 'react';

const FilterCheckbox = ({data, initialValue, onChange}) => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(()=> {
    setChecked(initialValue);
  }, [initialValue]);

  const toggleState = (event) => {
      const isChecked = event.target.checked;
      const value = event.target.value;
      setChecked(isChecked);
      onChange && onChange(isChecked, value)
  }

  return (
    <input
      type="checkbox"
      value={data}
      checked={checked}
      name="bs"
      onChange={toggleState}
    />
  );
};

export default FilterCheckbox;
