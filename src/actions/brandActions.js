import axios from '../utils/axios';
import { toast } from 'react-toastify';
import * as API_END_POINT from '../constants/api';
import * as types from './actionTypes';
import { setShippingLoading } from '../redux/Brand/Shipping/shippingSlice';
import { onChangePassword } from '../redux/Brand/Security/securitySlice';
import {
  setBrandCategory,
  setBrandProfileDetails,
  setBrandValues,
} from '../redux/Brand/Profile/brandProfileSlice';

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

export function getPlatformCategoryAction() {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_END_POINT.CATEGORY);
      if (response && response.data && response.data.code == 200) {
        dispatch(
          setBrandCategory({
            type: types.BRAND_CATEGORY,
            data: response.data.data,
          })
        );
      } else {
      }
    } catch (err) {}
  };
}

export function getBrandProfileAction(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_END_POINT.BRAND_PROFILE}/${id}/`);
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

export function getPlatformValuesAction() {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_END_POINT.VALUES);
      if (response && response.data && response.data.code == 200) {
        dispatch(
          setBrandValues({
            type: types.BRAND_VALUES,
            data: response.data.data,
          })
        );
      } else {
      }
    } catch (err) {}
  };
}

export function updateBrandProfileAction(formData, isUpdate) {
  return async (dispatch) => {
    try {
      let response;
      if (isUpdate) {
        response = await axios.put(API_END_POINT.BRAND_PROFILE, formData);
      } else {
        response = await axios.post(API_END_POINT.BRAND_PROFILE, formData);
      }
      if (response && response.status && response.status == 201) {
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
    }
  };
}

export function brandAsCustomerAction(formData) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        API_END_POINT.BRAND_AS_CUSTOMER,
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
    }
  };
}
