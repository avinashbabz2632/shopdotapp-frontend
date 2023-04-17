/* eslint-disable no-unused-vars */

// Auth flow:: CreatePassword page

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../../../components/Header/Header';
import PublicLayout from '../../../layout/PublicLayout';
import Input from '../../../components/common/Input/divStyled';
import Button from '../../../components/common/Button';
import { AuthApiService } from '../../../services/apis/authApis';
import { useSelector } from 'react-redux';
import { selectUserDetails } from '../../../redux/user/userSelector';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import '../auth.style.scss';

// Validation schema of form field
const validationSchema = yup
  .object()
  .shape({
    password: yup.string().required('Password is required.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match.')
      .required('Password confirm is required.'),
  })
  .required();

function CreatePassword() {
  const [passwordType, setPasswordType] = useState(true);
  const [confirmPasswordType, setConfirmPasswordType] = useState(true);
  const useDetails = useSelector(selectUserDetails);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async (data) => {
    const response = await AuthApiService.changePassword(data, useDetails.id);
    if (response) {
      navigate('/reset-password-success');
    } else {
      toast.error('Something went wrong');
    }
  };

  return (
    <>
      <Header pageTitle="Create New Password" />
      <PublicLayout>
        <div className="info-window">
          <div className="info-window__text">
            <p>You can now create a new password.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="sign__form form">
          <div className="form__field form__field--floating-label">
            <Input
              className="password"
              type={passwordType ? 'password' : 'text'}
              name="password"
              {...register('password', {
                required: true,
              })}
              placeholder="Create password"
            />
            <label>Create new password</label>

            <div className="password-message">
              Password is <span>strong!</span>
            </div>
            <span
              className={`password-show ${passwordType ? '' : 'active'}`}
              onClick={() => setPasswordType(!passwordType)}
            />
            {errors.password && (
              <span className="error-text">{errors.password?.message}</span>
            )}
          </div>
          <div className="form__field form__field--floating-label">
            <Input
              className="password"
              name="confirmPassword"
              {...register('confirmPassword', {
                required: true,
              })}
              type={confirmPasswordType ? 'password' : 'text'}
              placeholder="Create password"
            />
            <label>Repeat password</label>

            <div className="password-message">Password matches!</div>
            <span
              className={`password-show ${confirmPasswordType ? '' : 'active'}`}
              onClick={() => setConfirmPasswordType(!confirmPasswordType)}
            />
            {errors.confirmPassword && (
              <span className="error-text">
                {errors.confirmPassword?.message}
              </span>
            )}
          </div>

          <div className="form__field buttons">
            <Button type="submit" className="button mt-5">
              Create
            </Button>
          </div>
        </form>
      </PublicLayout>
    </>
  );
}

export default CreatePassword;
