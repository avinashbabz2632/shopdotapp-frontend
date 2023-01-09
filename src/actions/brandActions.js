import axios from 'axios';
import { toast } from 'react-toastify';
import * as API_END_POINT from '../constants/api';
import { onChangePassword } from '../redux/Brand/security/securitySlice';

export function connectShopifyAction(formData) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.PLATFORM, formData);
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

export function changePassword(formData, id) {
  console.log(formData, id);
  return async (dispatch) => {
    dispatch(onChangePassword(true));
    try {
      await axios.post(API_END_POINT.CHANGE_PASSWORD(id), formData);
      toast.error('Password changed successfully');
    } catch (err) {
      toast.error(
        err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors
          : 'Something went worng'
      );
    } finally {
      dispatch(onChangePassword(false));
    }
  }
}
