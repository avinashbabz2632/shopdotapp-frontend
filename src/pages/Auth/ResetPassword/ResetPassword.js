/* eslint-disable no-unused-vars */

// Auth flow:: reset password page

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../../../components/Header/Header';
import PublicLayout from '../../../layout/PublicLayout';
import Input from '../../../components/common/Input/divStyled';
import Button from '../../../components/common/Button';
import '../auth.style.scss';

import { LinkMod } from '../../../components/common/A';
import { useNavigate } from 'react-router-dom';

// Validation schema of form field
const validationSchema = yup.object({
  password: yup
    .string()
    .required('Password does not meet the requirements.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Password does not meet the requirements.'
    ),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Passwords do not match'),
});

function ResetPassword() {
  const [passwordType, setPasswordType] = useState(true);
  const [confirmPasswordType, setConfirmPasswordType] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    navigate('/reset-password-success');
    reset();
  };

  return (
    <>
      <Header pageTitle="Reset Password" />
      <PublicLayout>
        <form onSubmit={handleSubmit(onSubmit)} className="sign__form form">
          <div className="form__field password-tooltip">
            <Input
              className={`password ${errors.password ? 'invalid' : ''}`}
              type={passwordType ? 'password' : 'text'}
              name="password"
              // required='true'
              placeholder="Enter password"
              {...register('password', {
                required: true,
              })}
            />
            <span
              className={`password-show ${passwordType ? '' : 'active'}`}
              onClick={() => setPasswordType(!passwordType)}
            />
            <div className="tooltip">
              <div className="tooltip-icon"></div>
              <div className="tooltip_text">
                <div className="tooltip-arrow"></div>
                <div className="pwd-info-title">Password must:</div>
                <div className="pwd-info">
                  <div className="tooltip-text">- have at least 1 number</div>
                  <div className="tooltip-text">
                    - have at least 1 uppercase character
                  </div>
                  <div className="tooltip-text">
                    - have at least 1 lowercase character
                  </div>
                  <div className="tooltip-text">
                    - have at least 1 special character
                  </div>
                  <div className="tooltip-text">
                    - have 8 characters minimum
                  </div>
                </div>
              </div>
            </div>
            {errors.password && (
              <span className="error-text">{errors.password?.message}</span>
            )}
          </div>
          <div className="form__field ">
            <Input
              className={`password ${
                errors.passwordConfirmation ? 'invalid' : ''
              }`}
              type={confirmPasswordType ? 'password' : 'text'}
              name="passwordConfirmation"
              // required='true'
              placeholder="Confirm new password"
              {...register('passwordConfirmation', {
                required: true,
              })}
            />
            <span
              className={`password-show ${confirmPasswordType ? '' : 'active'}`}
              onClick={() => setConfirmPasswordType(!confirmPasswordType)}
            />
            {errors.passwordConfirmation && (
              <span className="error-text">
                {errors.passwordConfirmation?.message}
              </span>
            )}
          </div>

          <div className="form__field buttons">
            <Button type="submit" className="button">
              Confirm
            </Button>
          </div>
        </form>
      </PublicLayout>
    </>
  );
}

export default ResetPassword;
