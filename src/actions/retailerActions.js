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
import {setRetailerProfileSaveResult, setRetailerProfileSaving} from '../redux/Retailer/Profile/retailerProfileSlice';

export function getRetailerProfileAction(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_END_POINT.RETAILER_PROFILE}`
      );
      if (response && response.data && response.data.code == 201) {
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
      dispatch(setRetailerProfileSaving());
      // let response;
      // if (isCreate) {
      //   response = await axios.post(API_END_POINT.RETAILER_PROFILE, formData);
      // } else {
      //   response = await axios.put(API_END_POINT.RETAILER_PROFILE, formData);
      // }
      const response = await axios.post(API_END_POINT.RETAILER_PROFILE, formData);
      if (
        response &&
        response.status &&
        (response.status == 201 || response.status == 200)
      ) {
        toast.success(response?.data?.message);
        // dispatch(getRetailerProfileAction(formData.user_id));
        dispatch(setRetailerProfileSaveResult(response.data.data));
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
