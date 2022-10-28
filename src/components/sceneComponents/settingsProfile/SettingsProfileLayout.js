import React from 'react';
import './style.css';
import SectionHeader from './UI/SectionHeader';

export default function SettingsProfileLayout({
  handleSubmit,
  register,
  textFields,
}) {
  return (
    <div className="conentWrapper">
      <div class="title">
        <h1 className="setting-title">
          Retailer Profile <span class="asterisk-red">*</span>
        </h1>
      </div>
      <p className="setting-sub-title">
        Information entered on this page will be visible to brands within
        ShopDot.
      </p>
      <SectionHeader title={'Company Information'} />
      <form onSubmit={handleSubmit} className="settings_form">
        {textFields.map((field, key) => {
          return (
            <div className="form__field">
              <label>{field.lable}</label>
              <input
                type="text"
                name="first_name"
                onChange={(e) => {
                  onChangeText('first_name', e.target.value);
                }}
                placeholder={field.lable}
                {...register('fname', {
                  required: true,
                })}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}
