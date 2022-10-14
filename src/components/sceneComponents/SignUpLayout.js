import React from 'react';
import { Link } from 'react-router-dom';
import CommonHeader from '../common/CommonHeader';
import PropTypes from 'prop-types';

export default function SignUpLayout({
  handleSubmit,
  register,
  onSubmit,
  errors,
}) {
  return (
    <>
      <CommonHeader pageTitle="Sign Up" />
      <main className="content">
        <section className="section sign sign-@@cls">
          <div className="container">
            <div className="sign__content">
              <div className="text-message text-center">
                <p>
                  Hi! Nice to meet you. Sign up to start shopping for your store
                  and community.
                </p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="sign__form form"
              >
                <div className="form__field form__field--half form__field--floating-label">
                  <input
                    type="text"
                    name="fname"
                    placeholder="First name"
                    {...register('fname', {
                      required: true,
                    })}
                  />
                  <label>First name</label>
                  {errors.fname && (
                    <span className="error-text">{errors.fname?.message}</span>
                  )}
                </div>
                <div className="form__field form__field--half form__field--floating-label">
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last name"
                    {...register('lname', {
                      required: true,
                    })}
                  />
                  <label>Last name</label>
                  {errors.lname && (
                    <span className="error-text">{errors.lname?.message}</span>
                  )}
                </div>
                <div className="form__field form__field--floating-label">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    {...register('email', {
                      required: true,
                    })}
                  />
                  <label>Email address</label>
                  {errors.email && (
                    <span className="error-text">{errors.email?.message}</span>
                  )}
                </div>
                <div className="form__field form__field--floating-label">
                  <input
                    className="password"
                    type="password"
                    name="password"
                    placeholder="Create password"
                    {...register('password', {
                      required: true,
                    })}
                  />
                  <label>Create password</label>
                  <div className="password-message">
                    Password is <span>strong!</span>
                  </div>
                  <span
                    className="password-show"
                    onClick={() => setPasswordType(!passwordType)}
                  ></span>
                  {errors.password && (
                    <span className="error-text">
                      {errors.password?.message}
                    </span>
                  )}
                </div>

                <div className="form__field checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="termsOfService"
                      {...register('termsOfService', {
                        required: true,
                      })}
                    />
                    <small className="checkbox-text">
                      By signing up for ShopDot, you are agreeing to our&nbsp;
                      <Link to="#">Terms </Link>&nbsp;and
                      <Link to="#">&nbsp;Privacy Policy.</Link>
                      &nbsp;
                    </small>
                  </label>
                  {errors.termsOfService && (
                    <div className="error-text">
                      {errors.termsOfService?.message}
                    </div>
                  )}
                </div>
                <div className="form__field buttons">
                  <button type="submit" className="button">
                    Sign Up
                  </button>
                </div>
                <div className="form__field helpers">
                  <small>
                    Are you a Content Creator and interested in using ShopDot?{' '}
                    <Link to="/">Sign up</Link>
                  </small>
                  <small>
                    Interested in selling on ShopDot?{' '}
                    <Link to="/">Sign up</Link> as a brand
                  </small>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

SignUpLayout.propTypes = {
  handleSubmit: PropTypes.func,
};
