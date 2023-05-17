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
import { LinkMod } from '../../../components/common/A';
import { useNavigate } from 'react-router';
import { AuthApiService } from '../../../services/apis/authApis';

import '../auth.style.scss';

// Validation schema of form field
const validationSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required.'),
  })
  .required();

function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async (data) => {
    const response = await AuthApiService.forgotEmailVarification({
      email: data.email,
    });

    if (response) {
      reset();
      navigate('/forgot-password-sent');
    }
  };

  return (
    <>
      <Header pageTitle="Forgot Password?" />
      <PublicLayout>
        <form onSubmit={handleSubmit(onSubmit)} className="sign__form form">
          <div className="form__field ">
            <Input
              className={errors.email ? 'invalid' : ''}
              {...register('email', {
                required: true,
              })}
              type="text"
              name="email"
              placeholder="Email address"
            />
            {errors.email && (
              <span className="error-text">{errors.email?.message}</span>
            )}
          </div>

          <div className="form__field buttons">
            <Button type="submit" className="button">
              Send email
            </Button>
          </div>
          <div className="form__field mb-0 text-center">
            <small>
              <LinkMod to="/">Log in</LinkMod> or{' '}
              <LinkMod to="/signup/">Sign up</LinkMod>
            </small>
          </div>
        </form>
      </PublicLayout>
    </>
  );
}

export default ForgotPassword;
