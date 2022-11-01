import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SettingsProfileLayout from '../sceneComponents/settingsProfile/SettingsProfileLayout';
import { cloneDeep, isEmpty, remove } from 'lodash';

// Validation schema of form field
const validationSchema = yup
  .object()
  .shape({
    fname: yup.string().required('First name is required'),
    lname: yup.string().required('Last name is required'),
    email: yup
      .string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'Password must contain at least 8 characters, one uppercase, one number and one special case character'
      ),
    termsOfService: yup
      .boolean()
      .required('The terms and conditions must be accepted.')
      .oneOf([true], 'The terms and conditions must be accepted.'),
  })
  .required();
const platformType = localStorage.getItem('platformType');
const textFields =
  platformType === 'brand'
    ? []
    : [
        {
          title: 'Company Information',
          fields: [
            {
              key: 'company_name',
              lable: 'Company name',
            },
            {
              key: 'company_email_address',
              lable: 'Company email address',
            },
            {
              key: 'company_phone_number',
              lable: 'Company phone number',
            },
          ],
        },
        {
          title: 'Retailer Information',
          fields: [
            {
              key: 'store_logo',
              lable: 'Company name',
              fieldType: 'avatar',
            },
            {
              key: 'store_name',
              lable: 'Store name',
            },
            {
              key: 'store_website',
              lable: 'Store Website',
            },
            {
              key: 'retailer_categories',
              lable: 'Store category',
              fieldType: 'dropdown',
            },
            {
              key: 'retailer_values',
              lable: 'Store values',
              fieldType: 'selection',
            },
            {
              key: 'retailer_story',
              lable: 'Your Retailer Story',
              fieldType: 'editor',
            },
          ],
        },
        {
          title: 'Store Address',
          fields: [
            {
              key: 'store_country',
              lable: 'Country',
              isHalf: true,
              fieldType: 'dropdown',
            },
            {
              key: 'store_state',
              lable: 'State',
              isHalf: true,
              fieldType: 'dropdown',
            },
            {
              key: 'store_city',
              lable: 'City',
            },
            {
              key: 'store_mailing_address',
              lable: 'Mailing Address',
            },
          ],
        },
      ];

let textArea = '';

export default function SettingsProfile({
  actions,
  commonReducer: { categoryData, valueData },
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [formData, setFormData] = useState({
    company_name: '',
    company_email_address: '',
    company_phone_number: '',
    store_name: '',
    store_logo: 'www.example.com',
    store_website: '',
    retailer_story: '',
    store_photo: 'www.example.com',
    retailer_categories: [],
    retailer_values: [],
    store_country: '',
    store_state: '',
    store_city: '',
    store_mailing_address: '',
  });

  const [richText, setRichText] = useState(null);

  const onChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  useEffect(() => {
    actions.getCategories();
    actions.getValues();
  }, []);

  const handleSelection = (key, value, isSingle, tempData) => {
    if (isSingle) {
      if (key === 'store_country' || key === 'store_state') {
        setFormData({
          ...formData,
          [key]: tempData.name,
        });
      } else {
        setFormData({
          ...formData,
          [key]: [value],
        });
      }
    } else {
      let currentArray = cloneDeep(formData[key]);
      const isThere = currentArray.includes(value);
      if (isThere) {
        remove(currentArray, (cur, key) => {
          return cur === value;
        });
      } else {
        currentArray.push(value);
      }
      setFormData({
        ...formData,
        [key]: currentArray,
      });
    }
  };

  const doAction = () => {
    const getId = localStorage.getItem('userId');
    const roleId = localStorage.getItem('roleId');
    const data = {
      ...formData,
      user_id: getId,
      role_id: roleId ? JSON.parse(roleId) : 1,
    };
    actions.updateUserRetailerAction(data);
  };

  const btnDisable = isEmpty(formData.company_name);

  return (
    <SettingsProfileLayout
      formData={formData}
      register={register}
      textFields={textFields}
      onChange={onChange}
      valueData={valueData}
      categoryData={categoryData}
      onChangeSelection={handleSelection}
      callback={doAction}
      richText={richText}
      onChangeText={(key, richValue, value) => {
        // onChange(key, value);
        setRichText(richValue);
        setFormData({
          ...formData,
          retailer_story: value,
        });
      }}
    />
  );
}
