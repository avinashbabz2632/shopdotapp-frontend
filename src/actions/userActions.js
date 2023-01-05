import axios from 'axios';
import { toast } from 'react-toastify';
import * as API_END_POINT from '../constants/api';

export function updateUserRoleAction(formData) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.USER_ROLE, formData);
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
