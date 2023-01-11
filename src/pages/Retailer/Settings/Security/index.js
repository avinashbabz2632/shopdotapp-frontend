import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../../../components/common/Input/divStyled';

const validationSchema = yup
    .object()
    .shape({
        password: yup.string().required('Password is required.'),
        newpassword: yup
            .string()
            .required('Password is required.')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character.'
            ),
        confirmNewPassword: yup
            .string()
            .oneOf([yup.ref('newpassword'), null], 'Passwords must match.')
            .required('Password confirm is required.'),
    })
    .required();

export default function RetailerSecurity() {
    const [passwordType, setPasswordType] = useState(true);
    const [passwordTypeNew, setPasswordTypeNew] = useState(true);
    const [passwordTypeConfirmNew, setPasswordTypeConfirmNew] = useState(true);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(validationSchema), onChange: true });

    const onSubmit = (data) => {
        console.log('data', data);
        reset();
    };

    return (
        <div className="products_content">
            <div className="products_head mp-head">
                <div className="products_head-content">
                    <div className="title">
                        <h1>Security</h1>
                    </div>
                </div>
            </div>
            <div className="products_body">
                <div className="content_area">
                    <div id="security">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="security_info">
                                <h2>Change Password</h2>
                                <div className="form-area">
                                    <div className="form-input mb-4">
                                        <label className="form-label">
                                            Old password
                                        </label>
                                        <Input
                                            className={`${
                                                errors?.password
                                                    ? 'is-invalid'
                                                    : ''
                                            } form-control password`}
                                            type={
                                                passwordType
                                                    ? 'password'
                                                    : 'text'
                                            }
                                            name="password"
                                            {...register('password', {
                                                required: true,
                                            })}
                                        />
                                        <span
                                            className={`password-show ${
                                                passwordType ? '' : 'active'
                                            }`}
                                            onClick={() =>
                                                setPasswordType(!passwordType)
                                            }
                                        />
                                        {errors?.password && (
                                            <small className="invalid-feedback mb-0">
                                                {errors?.password?.message}
                                            </small>
                                        )}
                                    </div>
                                    <div className="form-input mb-4 password-tooltip">
                                        <label className="form-label">
                                            New password
                                        </label>
                                        <Input
                                            className={`${
                                                errors?.newpassword
                                                    ? 'is-invalid'
                                                    : ''
                                            } form-control password`}
                                            type={
                                                passwordTypeNew
                                                    ? 'password'
                                                    : 'text'
                                            }
                                            name="newpassword"
                                            {...register('newpassword', {
                                                required: true,
                                            })}
                                        />
                                        <span
                                            className={`password-show ${
                                                passwordTypeNew ? '' : 'active'
                                            }`}
                                            onClick={() =>
                                                setPasswordTypeNew(
                                                    !passwordTypeNew
                                                )
                                            }
                                        />
                                        {errors?.newpassword && (
                                            <small className="invalid-feedback mb-0">
                                                {errors?.newpassword?.message}
                                            </small>
                                        )}
                                        <div className="tooltip">
                                            <div className="tooltip-icon"></div>
                                            <div className="tooltip_text">
                                                <div className="tooltip-arrow"></div>
                                                <div className="pwd-info-title">
                                                    Password must:
                                                </div>
                                                <div className="pwd-info">
                                                    <label>
                                                        - have at least 1 number
                                                    </label>
                                                    <label>
                                                        - have at least 1
                                                        uppercase character
                                                    </label>
                                                    <label>
                                                        - have at least 1
                                                        lowercase character
                                                    </label>
                                                    <label>
                                                        - have at least 1
                                                        special character
                                                    </label>
                                                    <label>
                                                        - have 8 characters
                                                        minimum
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-input mb-4">
                                        <label className="form-label">
                                            Confirm new password
                                        </label>
                                        <Input
                                            className={`${
                                                errors?.confirmNewPassword
                                                    ? 'is-invalid'
                                                    : ''
                                            } form-control password`}
                                            type={
                                                passwordTypeConfirmNew
                                                    ? 'password'
                                                    : 'text'
                                            }
                                            name="confirmNewPassword"
                                            {...register('confirmNewPassword', {
                                                required: true,
                                            })}
                                        />
                                        <span
                                            className={`password-show ${
                                                passwordTypeConfirmNew
                                                    ? ''
                                                    : 'active'
                                            }`}
                                            onClick={() =>
                                                setPasswordTypeConfirmNew(
                                                    !passwordTypeConfirmNew
                                                )
                                            }
                                        />
                                        {errors?.confirmNewPassword && (
                                            <small className="invalid-feedback mb-0">
                                                {
                                                    errors?.confirmNewPassword
                                                        ?.message
                                                }
                                            </small>
                                        )}
                                    </div>
                                </div>
                                <div className="form-area">
                                    <div className="form-input form-submit mt-4">
                                        <button
                                            onClick={() => reset()}
                                            className="button button-grey cancel"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="button"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
