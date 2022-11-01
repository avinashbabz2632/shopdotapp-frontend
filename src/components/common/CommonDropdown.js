import React from 'react';
import Dropdown from 'react-dropdown';
import Select from 'react-select';
import './dropdownStyle.css';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const defaultOption = options[0];

const colourStyles = {
  control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: 'white',
    borderColor: '#f3e0d2',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? '#cd8249' : 'white',
      //   color: '#FFF',
      //   cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
};

export default function CommonDropdown({ lable, isHalf, items, onChange }) {
  return (
    <div className={isHalf ? 'form__field--half' : 'form__field'}>
      <label>{lable}</label>
      {/* <Dropdown
        controlClassName="dropdownContainer"
        menuClassName="dropdownMenu"
        options={options}
        onChange={() => {}}
        value={defaultOption}
        placeholder="Select an option"
        arrowClosed={<IoMdArrowDropdown />}
        arrowOpen={<IoMdArrowDropup />}
      /> */}
      <Select
        label="Single select"
        options={items}
        styles={colourStyles}
        getOptionValue={(option) => option.id}
        getOptionLabel={(option) => option.name}
        onChange={(e) => {
          onChange(e.id);
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#cd8249',
            primary75: '#f3e0d2',
          },
        })}
      />
    </div>
  );
}
