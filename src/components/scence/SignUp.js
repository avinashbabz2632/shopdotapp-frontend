/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SignUpLayout from '../sceneComponents/SignUpLayout';

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

function SignUp({ actions, authReducer: { isSignUp } }) {
  const history = useHistory();
  const [passwordType, setPasswordType] = useState(true);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    device_id: 'testingdevice56',
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  useEffect(() => {
    if (isSignUp) {
      history.push('/verifyemail');
      actions.clearAuthReducerAction();
    }
  }, [isSignUp]);

  const onSubmit = (data) => {
    console.log('data', data);
    // reset();
    const updateFormData = {
      first_name: data.fname,
      last_name: data.lname,
      email: data.email,
      password: data.password,
      device_id: 'testingdevice2',
    };
    actions.signUpAction(updateFormData);
  };

  const handleChangeText = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <>
      <SignUpLayout
        onSubmit={onSubmit}
        errors={errors}
        handleSubmit={handleSubmit}
        register={register}
        formData={formData}
        passwordType={passwordType}
        onChangeText={handleChangeText}
        handlePassword={() => {
          setPasswordType(!passwordType);
        }}
      />
    </>
  );
}

export default SignUp;
