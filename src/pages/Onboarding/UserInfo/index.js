/* eslint-disable no-unused-vars */

// Auth flow:: Forgot password page

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../../../components/Header/Header';
import PublicLayout from '../../../layout/PublicLayout';
import Input from '../../../components/common/Input/divStyled';
import Button from '../../../components/common/Button';
import '../onboarding.style.scss';
import { LinkMod } from '../../../components/common/A';

// Validation schema of form field
const validationSchema = yup
  .object()
  .shape({
    fname: yup.string().required('First name is required.'),
    lname: yup.string().required('Last name is required.'),
  })
  .required();

function ForgotPassword() {
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
      <Header pageTitle="User Info" />
      <PublicLayout>
        <form onSubmit={handleSubmit(onSubmit)} className="sign__form form">
          <div className="form__field ">
            <Input
              className={errors.fname ? 'invalid' : ''}
              {...register('email', {
                required: true,
              })}
              type="text"
              name="fname"
              placeholder="First name"
            />
            {errors.fname && (
              <span className="error-text">{errors.fname?.message}</span>
            )}
          </div>
          <div className="form__field ">
            <Input
              className={errors.lname ? 'invalid' : ''}
              {...register('email', {
                required: true,
              })}
              type="text"
              name="fname"
              placeholder="Last name"
            />
            {errors.lname && (
              <span className="error-text">{errors.lname?.message}</span>
            )}
          </div>

          <div className="form__field buttons">
            <Button type="submit" className="button">
              Save
            </Button>
          </div>
        </form>
      </PublicLayout>
    </>
  );
}

export default ForgotPassword;
