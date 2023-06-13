/* eslint-disable no-unused-vars */

// Auth flow:: Signup page

import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../../../components/Header/Header';
import PublicLayout from '../../../layout/PublicLayout';
import { LinkMod } from '../../../components/common/A';
import Input from '../../../components/common/Input/divStyled';
import Button from '../../../components/common/Button';
import '../auth.style.scss';
import tAndCDoc from '../../../assets/ShopDot-Online-Business-Services-Agreement-09-01-2022.pdf';
import privacyDoc from '../../../assets/ShopDot-Privacy-Policy-09.01.2022.pdf';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../../../actions/authActions';
import { registerSuccess } from '../../../redux/auth/authSelector';
import { selectUserDetails } from '../../../redux/user/userSelector';
import { clearAuthReducer } from '../../../redux/auth/authSlice';

// Validation schema of form field
const validationSchema = yup
  .object()
  .shape({
    first_name: yup.string().required('First name is required.'),
    last_name: yup.string().required('Last name is required.'),
    email: yup
      .string()
      .email('Must be a valid email.')
      .max(255)
      .required('Email is required.'),
    password: yup
      .string()
      .required('Password is required.')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character.'
      ),
    termsOfService: yup
      .boolean()
      .required('The terms and conditions must be accepted.')
      .oneOf([true], 'The terms and conditions must be accepted.'),
  })
  .required();

function SignUp() {
  const [passwordType, setPasswordType] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const success = useSelector(registerSuccess);
  const params = useParams();
  const userDetails = useSelector(selectUserDetails);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  useEffect(() => {
    const subscription = watch((value) => {
      for (var key in value) {
        if (!value[key]) {
          setDisabled(true);
          return;
        }
        setDisabled(false);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (success) {
      dispatch(clearAuthReducer());
      reset();
      navigate('/verify-email');
    }
  }, [success]);

  const onSubmit = (data) => {
    dispatch(
      registerAction({
        ...data,
        device_id: '1234',
        referal_code: params?.referralcode,
      })
    );
  };

  return (
    <>
      <Header pageTitle="Create your ShopDot Account" />
      <PublicLayout>
        <form onSubmit={handleSubmit(onSubmit)} className="sign__form form">
          <div className="form__field form__field--half ">
            <Input
              className={errors.first_name ? 'invalid' : ''}
              type="text"
              name="first_name"
              placeholder="First name"
              {...register('first_name', {
                required: true,
              })}
            />
            {errors.first_name && (
              <span className="error-text">{errors.first_name?.message}</span>
            )}
          </div>
          <div className="form__field form__field--half ">
            <Input
              className={errors.last_name ? 'invalid' : ''}
              type="text"
              name="last_name"
              placeholder="Last name"
              {...register('last_name', {
                required: true,
              })}
            />
            {errors.last_name && (
              <span className="error-text">{errors.last_name?.message}</span>
            )}
          </div>
          <div className="form__field ">
            <Input
              className={errors.email ? 'invalid' : ''}
              type="text"
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
          <div className="form__field password-tooltip">
            <Input
              className={`password ${errors.password ? 'invalid' : ''}`}
              type={passwordType ? 'password' : 'text'}
              name="password"
              placeholder="Create password"
              {...register('password', {
                required: true,
              })}
            />
            <div className="password-message">
              Password is <span>strong!</span>
            </div>
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

          <div className="form__field auth_checkbox">
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
                <LinkMod
                  to={'https://shopdotapp.com/terms-of-use/'}
                  target="_blank"
                >
                  Terms{' '}
                </LinkMod>
                &nbsp;and
                <LinkMod
                  to={'https://shopdotapp.com/privacy-policy/'}
                  target="_blank"
                >
                  &nbsp;Privacy Policy.
                </LinkMod>
                &nbsp;
              </small>
            </label>
            {errors.termsOfService && (
              <div className="error-text">{errors.termsOfService?.message}</div>
            )}
          </div>
          <div className="form__field buttons">
            <Button disabled={disabled} type="submit" className="auth_button">
              Sign Up
            </Button>
          </div>
          <div className="form__field mb-0 text-center">
            <small>
              Already have an account? Sign in{' '}
              <LinkMod to="/login">here</LinkMod>
            </small>
          </div>
        </form>
      </PublicLayout>
    </>
  );
}

export default SignUp;
