import * as types from './actionTypes';
import * as API_END_POINT from '../constants/api';
import axios from 'axios';
import { toast } from 'react-toastify';

export function signUpAction(formData) {
  return async (dispatch) => {
    try {
      const res = await axios.post(API_END_POINT.REGISTER, formData);
      if (res.status === 201) {
        dispatch({
          type: types.IS_SIGN_UP,
          userDetails: res.data.data,
        });
        setTimeout(() => {
          dispatch(
            sendEmailVerificationAction({
              id: res.data.data.id,
            })
          );
        }, 450);
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

export function signInAction(formData) {
  return async (dispatch) => {
    try {
      const res = await axios.post(API_END_POINT.SIGN_IN, formData);
      if (res.status === 200) {
        dispatch({
          type: types.IS_SIGN_IN,
          userDetails: res.data.data,
        });
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

export function sendEmailVerificationAction(formData) {
  return async (dispatch) => {
    try {
      const res = await axios.post(API_END_POINT.VERIFICATION_EMAIL, formData);
      if (res.status === 200) {
        toast.success(res.data.data);
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

export function clearAuthReducerAction() {
  return async (dispatch) => {
    dispatch({
      type: types.CLEAR_AUTH_REDUCER,
    });
  };
}
