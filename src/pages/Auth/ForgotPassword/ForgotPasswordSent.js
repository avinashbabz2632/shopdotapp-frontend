/* eslint-disable no-unused-vars */

// Auth flow:: reset password sent page

import React from 'react';
import Header from '../../../components/Header/Header';
import PublicLayout from '../../../layout/PublicLayout';
import SentIcon from '../../../assets/images/sent-mail.jpg';
// import '../auth.style.scss';
import { LinkMod } from '../../../components/common/A';

function ForgotPasswordSent() {
    return (
        <>
            <Header pageTitle="Forgot Password?" />
            <PublicLayout>
                <form className="sign__form form">
                    <div className=" form__field d-flex justify-content-center w-100">
                        <img src={SentIcon} />
                    </div>
                    <div className="form__field text-center ">
                        <p className="fp-text">
                            We have sent instructions on how to change your
                            password to your registered email.
                        </p>
                    </div>
                </form>
            </PublicLayout>
        </>
    );
}

export default ForgotPasswordSent;
