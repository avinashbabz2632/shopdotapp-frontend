/* eslint-disable no-unused-vars */

// Auth flow:: Signin page

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../../../components/Header/Header';
import PublicLayout from '../../../layout/PublicLayout';
import { LinkMod } from '../../../components/common/A';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input/divStyled';
import '../auth.style.scss';

// Validation schema of form field
const validationSchema = yup
    .object()
    .shape({
        email: yup
            .string()
            .email('Must be a valid email.')
            .max(255)
            .required('Email is required.'),
        password: yup.string().required('Password is required.'),
    })
    .required();

function SignIn() {
    const [passwordType, setPasswordType] = useState(true);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(validationSchema) });

    const onSubmit = (data) => {
        console.log('data', data);
        navigate('/verify-email');
    };

    return (
        <>
            <Header pageTitle="Sign In" />
            <PublicLayout>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="sign__form form"
                >
                    <div className="form__field ">
                        <Input
                            className={errors.email ? 'invalid' : ''}
                            type="text"
                            name="email"
                            required=""
                            {...register('email', {
                                required: true,
                            })}
                            placeholder="Email address"
                        />
                        {errors.email && (
                            <span className="error-text">
                                {errors.email?.message}
                            </span>
                        )}
                    </div>
                    <div className="form__field ">
                        <Input
                            className={`password ${
                                errors.password ? 'invalid' : ''
                            }`}
                            type={passwordType ? 'password' : 'text'}
                            name="password"
                            // required='true'
                            placeholder="Enter password"
                            {...register('password', {
                                required: true,
                            })}
                        />
                        <span
                            className={`password-show ${
                                passwordType ? '' : 'active'
                            }`}
                            onClick={() => setPasswordType(!passwordType)}
                        />
                        {errors.password && (
                            <span className="error-text">
                                {errors.password?.message}
                            </span>
                        )}
                    </div>
                    <div className="form__field">
                        <div className="forgot">
                            <LinkMod to="/forgot-password">
                                Forgot Password
                            </LinkMod>
                        </div>
                    </div>
                    <div className="form__field buttons">
                        <Button type="submit" className="button">
                            Sign In
                        </Button>
                    </div>
                    <div className="form__field mb-0 text-center">
                        <small>
                            Don&apos;t have a ShopDot account? Register{' '}
                            <Link to="/sign-up">here</Link>
                        </small>
                    </div>
                </form>
            </PublicLayout>
        </>
    );
}

export default SignIn;
