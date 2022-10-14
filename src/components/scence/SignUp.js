/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    password: yup.string().required('Password is required'),
    termsOfService: yup
      .boolean()
      .required('The terms and conditions must be accepted.')
      .oneOf([true], 'The terms and conditions must be accepted.'),
  })
  .required();

function SignUp() {
  const [passwordType, setPasswordType] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    console.log('data', data);
    reset();
  };

  return (
    <>
      <SignUpLayout
        onSubmit={onSubmit}
        errors={errors}
        handleSubmit={handleSubmit}
        register={register}
      />
    </>
  );
}

export default SignUp;
