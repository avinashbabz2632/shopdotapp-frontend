/* eslint-disable no-unused-vars */

// Auth flow:: reset password success page

import React from 'react';
import Header from '../../../components/Header/Header';
import PublicLayout from '../../../layout/PublicLayout';
import Button from '../../../components/common/Button';
import SuccessIcon from '../../../assets/images/yellow-tick.jpg';
// import '../auth.style.scss';
import '../password.style.scss';

function ResetPasswordSuccess() {
    return (
        <>
            <Header pageTitle="Reset Password" />
            <PublicLayout>
                <form className="sign__form form">
                    <div className=" form__field d-flex justify-content-center w-100">
                        <img src={SuccessIcon} />
                    </div>
                    <div className="form__field text-center ">
                        <p className="fp-text">
                            Your password is successfully changed.
                        </p>
                    </div>
                    <div className="form__field buttons">
                        <Button type="submit" className="button">
                            Go to ShopDot
                        </Button>
                    </div>
                </form>
            </PublicLayout>
        </>
    );
}

export default ResetPasswordSuccess;
