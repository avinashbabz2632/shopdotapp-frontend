import axios from '../utils/axios';
import * as API_END_POINT from '../constants/api';
import { logOut, setLoggedIn, setRegister } from '../redux/auth/authSlice';
import { setRoleUpdated, setUserInfo } from '../redux/user/userSlice';
import { toast } from 'react-toastify';

export function loginAction(formData) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.SIGN_IN, formData);
      if (response && response.data && response.data.code == 200) {
        dispatch(setLoggedIn());
        dispatch(setUserInfo(response.data.data));
        if(response.data.data.role){
          dispatch(setRoleUpdated())
        }
      } else {
        toast.error('Something went worng');
      }
    } catch (err) {
      toast.error(
        err &&
          err.response &&
          err.response.data &&
          err.response.data.errors &&
          err.response.data.errors.length &&
          err.response.data.errors[0] &&
          err.response.data.errors[0].password
          ? err.response.data.errors[0].password
          : err && err.response && err.response.data && err.response.data.errors
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
        dispatch(setUserInfo(response.data.data));
        dispatch(setRegister());
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

export function signOutAction(payload) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.LOGOUT, payload.fromData);

      if (response && response.data && response.data.code == 200) {
        payload.history.replace('/logout');
        dispatch(logOut());
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
export function fetchUserDetailAction() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_END_POINT.USER_DETAILS}`);

      if (response && response.data && response.data.code == 200) {
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
