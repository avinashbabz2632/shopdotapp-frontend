import React from 'react';
import countryArray from '../../../constants/countryArray';
import stateArray from '../../../constants/stateArray';
import CommonDropdown from '../../common/CommonDropdown';
import CommonSelection from '../../common/CommonSelection';
import TextEditor from '../../common/TextEditor';
import './style.css';
import SectionHeader from './UI/SectionHeader';
import SettingsAvatar from './UI/SettingsAvatar';

export default function SettingsProfileLayout({
  handleSubmit,
  register,
  textFields,
  valueData,
  categoryData,
  formData,
  onChangeSelection,
  onChange,
  callback,
  onChangeText,
  richText,
}) {
  return (
    <div className="conentWrapper">
      <div className="title">
        <h1 className="setting-title">
          Retailer Profile <span class="asterisk-red">*</span>
        </h1>
      </div>
      <p className="setting-sub-title">
        Information entered on this page will be visible to brands within
        ShopDot.
      </p>
      <form onSubmit={handleSubmit} className="settings_form">
        {textFields.map((fields, key) => {
          return (
            <div>
              <SectionHeader title={fields.title} />
              {fields.fields.map((field, key) => {
                if (field.fieldType === 'avatar') {
                  return <SettingsAvatar />;
                } else if (field.fieldType === 'dropdown') {
                  return (
                    <CommonDropdown
                      lable={field.lable}
                      onChange={(value, tempData) => {
                        onChangeSelection(field.key, value, true, tempData);
                      }}
                      items={
                        field.key === 'retailer_categories'
                          ? categoryData
                          : field.key === 'store_country'
                          ? countryArray
                          : field.key === 'store_state'
                          ? stateArray
                          : []
                      }
                    />
                  );
                } else if (field.fieldType === 'selection') {
                  return (
                    <CommonSelection
                      lable={field.lable}
                      currentKey={0}
                      items={field.key === 'retailer_values' ? valueData : []}
                      selectedArray={
                        formData && formData[field.key]
                          ? formData[field.key]
                          : []
                      }
                      onChange={(value) => {
                        onChangeSelection(field.key, value);
                      }}
                    />
                  );
                } else if (field.fieldType === 'editor') {
                  return (
                    <TextEditor
                      value={richText}
                      onChange={(content, delta, source, editor) => {
                        const text = editor.getText(content);
                        onChangeText(field.key, content, text);
                      }}
                    />
                  );
                } else {
                  return (
                    <div className="form__field">
                      <label>{field.lable}</label>
                      <input
                        type="text"
                        value={formData[field.key]}
                        onChange={(e) => {
                          onChange(field.key, e.target.value);
                        }}
                        placeholder={field.lable}
                      />
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </form>
      <div class="row shippingLocation">
        <div className="col-md-6 mt-5">
          <button className="button button-grey w-100">Cancle</button>
        </div>
        <div className="col-md-6  mt-5">
          <button className="button w-100" type="submit" onClick={callback}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
