import React from 'react';
import { map } from 'lodash';
import './selectionStyle.css';
import checked from '../../assets/images/icons/icon-check--true.png';
import unChecked from '../../assets/images/icons/icon-check--false.png';

export default function CommonSelection({
  items,
  lable,
  currentKey,
  selectedArray,
  onChange,
}) {
  return (
    <div className="form__field">
      <label>{lable}</label>
      <div className="check-container">
        {map(items, (item, key) => {
          const isSelected = selectedArray.includes(item.id);
          return (
            <div
              onClick={() => {
                onChange(item.id);
              }}
              key={key}
              className="item"
            >
              <label className={isSelected ? 'checkbox-selected' : 'checkbox'}>
                <img
                  src={isSelected ? checked : unChecked}
                  className="checkbox-img"
                />
                <div className="checkbox-text">
                  <span className="checkbox-span">{item.name}</span>
                </div>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
