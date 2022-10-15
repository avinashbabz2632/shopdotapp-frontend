import * as types from './actionTypes';
import * as API_END_POINT from '../constants/api';
import axios from 'axios';

export function signUpAction(formData) {
  console.log(formData, 'formData');
  return async (dispatch) => {
    try {
      const res = await axios.post(API_END_POINT.REGISTER, formData);
      if (res.status === 200) {
      } else {
      }
    } catch (err) {}
  };
}
