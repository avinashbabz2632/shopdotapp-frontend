// Onboarding flow:: Create Account Page

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import OnboardingLayout from '../../../layout/OnboardingLayout';
import { LinkMod } from '../../../components/common/A';
import Input from '../../../components/common/Input/divStyled';
import Button from '../../../components/common/Button';
// import '../onboarding.style.scss';
import '../../Auth/auth.style.scss';

// Validation schema of form field
const validationSchema = yup
  .object()
  .shape({
    fname: yup.string().required('First name is required.'),
    lname: yup.string().required('Last name is required.'),
    email: yup
      .string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required.'),
    password: yup.string().required('Password is required.'),
    termsOfService: yup
      .boolean()
      .required('The terms and conditions must be accepted.')
      .oneOf([true], 'The terms and conditions must be accepted.'),
  })
  .required();

function CreateAccount() {
  const navigate = useNavigate();
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
    navigate('/verify-email');
  };
  return (
    <>
      <OnboardingLayout pageTitle="Create Your ShopDot Account">
        <form onSubmit={handleSubmit(onSubmit)} className="sign__form form">
          <div className="form__field form__field--half ">
            <Input
              className={errors.fname ? 'invalid' : ''}
              type="text"
              name="fname"
              placeholder="First name"
              {...register('fname', {
                required: true,
              })}
            />
            {errors.fname && (
              <span className="error-text">{errors.fname?.message}</span>
            )}
          </div>
          <div className="form__field form__field--half ">
            <Input
              className={errors.lname ? 'invalid' : ''}
              type="text"
              name="lname"
              placeholder="Last name"
              {...register('lname', {
                required: true,
              })}
            />
            {errors.lname && (
              <span className="error-text">{errors.lname?.message}</span>
            )}
          </div>
          <div className="form__field ">
            <Input
              className={errors.email ? 'invalid' : ''}
              type="email"
              name="email"
              placeholder="Email address"
              {...register('email', {
                required: true,
              })}
            />
            {errors.email && (
              <span className="error-text">{errors.email?.message}</span>
            )}
          </div>
          <div className="form__field ">
            <Input
              className={`password ${errors.password ? 'invalid' : ''}`}
              type={passwordType ? 'password' : 'text'}
              name="password"
              placeholder="Create password"
              {...register('password', {
                required: true,
              })}
            />
            <span
              className={`password-show ${passwordType ? '' : 'active'}`}
              onClick={() => setPasswordType(!passwordType)}
            />
            {errors.password && (
              <span className="error-text">{errors.password?.message}</span>
            )}
          </div>

          <div className="form__field checkbox">
            <label>
              <Input
                type="checkbox"
                name="termsOfService"
                {...register('termsOfService', {
                  required: true,
                })}
              />
              <small className="checkbox-text">
                By signing up for ShopDot, you are agreeing to our&nbsp;
                <LinkMod to="#">Terms </LinkMod>&nbsp;and
                <LinkMod to="#">&nbsp;Privacy Policy.</LinkMod>
                &nbsp;
              </small>
            </label>
            {errors.termsOfService && (
              <div className="error-text">{errors.termsOfService?.message}</div>
            )}
          </div>
          <div className="form__field buttons">
            <Button type="submit" className="button">
              Sign Up
            </Button>
          </div>
        </form>
      </OnboardingLayout>
    </>
  );
}

export default CreateAccount;
