import axios from 'axios';
import * as API_END_POINT from '../constants/api';
import { setLoggedIn, setRegister } from '../redux/auth/authSlice';
import { setUserInfo } from '../redux/user/userSlice';
import { toast } from 'react-toastify';

export function loginAction(formData) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.SIGN_IN, formData);
      if (response && response.data && response.data.code == 200) {
        dispatch(setLoggedIn());
        dispatch(setUserInfo(response.data.data));
        axios.defaults.headers.common['Authorization'] =
          response.data.data.access_token;
      } else {
        toast.error('Something went worng');
      }
    } catch (err) {
      toast.error(
        err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors
          : 'Something went worng'
      );
    }
  };
}

export function registerAction(formData) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.REGISTER, formData);
      if (response && response.data && response.data.code == 201) {
        dispatch(setRegister());
        dispatch(setUserInfo(response.data.data));
      } else {
        toast.error('Something went worng');
      }
    } catch (err) {
      toast.error(
        err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors
          : 'Something went worng'
      );
    }
  };
}

export function sendVerifyEmailAction(formData) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        API_END_POINT.VERIFICATION_EMAIL,
        formData
      );
      if (response && response.data && response.data.code == 200) {
      } else {
        toast.error('Something went worng');
      }
    } catch (err) {
      toast.error(
        err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors
          : 'Something went worng'
      );
    }
  };
}
