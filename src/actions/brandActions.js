import axios from 'axios';
import { toast } from 'react-toastify';
import * as API_END_POINT from '../constants/api';
import { setShippingLoading } from '../redux/Brand/Shipping/shippingSlice';
import { onChangePassword } from '../redux/Brand/Security/securitySlice';

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

export function updateShipping(data) {
  return async (dispatch) => {
    try {
      dispatch(setShippingLoading(true));
      const response = await axios.post(API_END_POINT.UPDATE_SHIPPING, data);
      toast.error(response.data.message);
    } catch (err) {
      toast.error(
        err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors
          : 'Something went worng'
      );
    } finally {
      dispatch(setShippingLoading(false));
    }
  }
}
