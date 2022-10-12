/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CommonHeader from '../common/CommonHeader';

// Validation schema of form field
const validationSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  })
  .required();

function SignIn() {
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
      <CommonHeader pageTitle="Sign In" />
      <main className="content">
        <section className="section sign sign-@@cls">
          <div className="container">
            <div className="sign__content">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="sign__form form"
              >
                <div className="form__field form__field--floating-label">
                  <input
                    type="email"
                    name="email"
                    {...register('email', {
                      required: true,
                    })}
                    placeholder="Email address"
                  />
                  <label>Email address</label>
                  {errors && errors.email && (
                    <span className="error-text">{errors.email?.message}</span>
                  )}
                </div>
                <div className="form__field form__field--floating-label">
                  <input
                    className="password"
                    type={passwordType ? 'password' : 'text'}
                    name="password"
                    placeholder="Create password"
                    {...register('password', {
                      required: true,
                    })}
                  />
                  <label>Enter password</label>
                  <div className="password-message">
                    Password is <span>strong!</span>
                  </div>
                  <span
                    onClick={() => setPasswordType(!passwordType)}
                    className="password-show"
                  ></span>
                  {errors.password && (
                    <span className="error-text">
                      {errors.password?.message}
                    </span>
                  )}
                </div>
                <div className="form__field buttons">
                  <button type="submit" className="button">
                    Sign In
                  </button>
                </div>
                <div className="form__field helpers">
                  <div className="forgot text-center">
                    <Link to="/forgot-password">Forgot Password</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default SignIn;
