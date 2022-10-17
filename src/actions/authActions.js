import * as types from './actionTypes';
import * as API_END_POINT from '../constants/api';
import axios from 'axios';

export function signUpAction(formData) {
  return async (dispatch) => {
    try {
      const res = await axios.post(API_END_POINT.REGISTER, formData);
      if (res.status === 201) {
        dispatch({
          type: types.IS_SIGN_UP,
        });
      } else {
      }
    } catch (err) {}
  };
}

export function clearAuthReducerAction() {
  return async (dispatch) => {
    dispatch({
      type: types.CLEAR_AUTH_REDUCER,
    });
  };
}
