/* eslint-disable no-unused-vars */

// Auth flow:: reset password success page

import React from 'react';
import Header from '../../../components/Header/Header';
import PublicLayout from '../../../layout/PublicLayout';
import Button from '../../../components/common/Button';
import SuccessIcon from '../../../assets/images/yellow-tick.jpg';
import { Link } from 'react-router-dom';

import '../password.style.scss';

function ResetPasswordSuccess() {
  return (
    <div className="auth">
      <Header pageTitle="Reset Password" />
      <PublicLayout>
        <form className="sign__form form">
          <div className=" form__field d-flex justify-content-center w-100">
            <img src={SuccessIcon} />
          </div>
          <div className="form__field text-center ">
            <p className="fp-text">Your password is successfully changed.</p>
          </div>
          <div className="form__field buttons">
            <Link to="/login">
              <Button type="submit" className="button">
                Go to ShopDot
              </Button>
            </Link>
          </div>
        </form>
      </PublicLayout>
    </div>
  );
}

export default ResetPasswordSuccess;
