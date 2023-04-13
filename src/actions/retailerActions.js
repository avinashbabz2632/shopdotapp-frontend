import axios from '../utils/axios';
import { toast } from 'react-toastify';
import * as API_END_POINT from '../constants/api';
import * as types from './actionTypes';
// import { setShippingLoading } from '../redux/Brand/Shipping/shippingSlice';
// import { onChangePassword } from '../redux/Brand/Security/securitySlice';
import {
  setBrandCategory,
  setBrandProfileDetails,
  setBrandValues,
} from '../redux/Brand/Profile/brandProfileSlice';

export function getRetailerProfileAction(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_END_POINT.RETAILER_PROFILE}/${id}/`
      );
      if (response && response.data && response.data.code == 200) {
        dispatch(
          setBrandProfileDetails({
            type: types.BRAND_PROFILE,
            data: response.data.data,
          })
        );
      } else {
      }
    } catch (err) {}
  };
}

export function updateRetailerProfileAction(formData, isCreate) {
  return async (dispatch) => {
    try {
      let response;
      if (isCreate) {
        response = await axios.post(API_END_POINT.RETAILER_PROFILE, formData);
      } else {
        response = await axios.put(API_END_POINT.RETAILER_PROFILE, formData);
      }
      if (
        response &&
        response.status &&
        (response.status == 201 || response.status == 200)
      ) {
        toast.success('Retailer Profile Details Updated');
        dispatch(getRetailerProfileAction(formData.user_id));
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

export function updatePreferences(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.PREFERENCES, data);
      if (response.status === 201) {
        toast.success('Preferences Updated');
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
