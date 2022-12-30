import axios from 'axios';
import * as API_END_POINT from '../constants/api';
import { setLoggedInUserInfo } from '../redux/auth/authSlice';

export function loginAction(formData) {
  console.log(formData, 'formData');
  return (dispatch) => {
    try {
      const response = axios.post(API_END_POINT.SIGN_IN, formData);
      if (response && response.data && response.data.code == 200) {
        dispatch(setLoggedInUserInfo(response.data.data));
      } else {
      }
    } catch (err) {}
  };
}
