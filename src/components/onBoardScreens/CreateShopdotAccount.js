import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DynamicHeader from '../common/DynamicHeader';

const OnBoardingSignUp = ({
    handleSubmit,
    register,
    onSubmit,
    errors,
    handlePassword,
    passwordType,
    onChangeText,
    callback,
}) => {
    return (
        <>
            <DynamicHeader pageTitle="Create Your ShopDot Account" position='center' />
            <section className="section sign-@@cls">
                <div className='container'>
                    <div className="sign__content">
                        <form className="sign__form form">
                            <div className="row mb-5">
                                <div className='col-md-6'>
                                    <input
                                        type={'text'}
                                        name='firstName'
                                        placeholder="First name" />
                                </div>
                                <div className='col-md-6'>
                                    <input
                                        type={'text'}
                                        name='lastName'
                                        placeholder="Last name" />
                                </div>
                            </div>
                            <div className="col-md-12 mb-5">
                                <input type="email" name="email" placeholder='Email' />
                            </div>
                            <div className="col-md-12 mb-5">
                                <input className="password"
                                    type={passwordType ? 'password' : 'text'}
                                    placeholder="Create Password"
                                    name="password" />
                            </div>
                            <div className="form__field checkbox">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="termsOfService"
                                    />
                                    <small className="checkbox-text">
                                        By signing up for ShopDot, you are agreeing to our&nbsp;
                                        <Link to="#">Terms </Link>&nbsp;and
                                        <Link to="#">&nbsp;Privacy Policy.</Link>
                                        &nbsp;
                                    </small>
                                </label>
                            </div>
                            <div className="form__field buttons">
                                <button type="submit" className="button">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section >


        </>
    );
}

export default OnBoardingSignUp;

OnBoardingSignUp.propTypes = {
    handleSubmit: PropTypes.func,
};
