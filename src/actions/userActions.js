import * as types from './actionTypes';
import * as API_END_POINT from '../constants/api';
import axios from 'axios';
import { toast } from 'react-toastify';

export function updateUserRoleAction(formData, platform) {
  return async (dispatch) => {
    try {
      const res = await axios.post(API_END_POINT.USER_ROLE, formData);
      if (res.status === 201) {
        dispatch({
          type: types.IS_USER_PLATFORM_UPDATED,
          platformType: 'retailer',
        });
        if (formData.role === 'brand') {
          dispatch(
            updateUserPlatformAction({
              user_id: formData.user_id,
              platform: platform,
            })
          );
        }
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

export function updateUserPlatformAction(formData) {
  return async (dispatch) => {
    try {
      const res = await axios.post(API_END_POINT.USER_PLATFORM, formData);
      if (res.status === 201) {
        dispatch({
          type: types.IS_USER_PLATFORM_UPDATED,
          platformType: 'brand',
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

export function updateUserBrandAction(formData) {
  return async (dispatch) => {
    try {
      const res = await axios.post(API_END_POINT.BRAND_PROFILE, formData);
      if (res.status === 200) {
        dispatch({
          type: types.IS_BRAND_PROFILE_UPDATED,
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

export function updateUserRetailerAction(formData) {
  return async (dispatch) => {
    try {
      const res = await axios.post(API_END_POINT.RETAIL_PROFILE, formData);
      if (res.status === 200) {
        dispatch({
          type: types.IS_RETAILER_PROFILE_UPDATED,
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

export function clearUserReducerAction() {
  return async (dispatch) => {
    dispatch({
      type: types.CLEAR_USER_REDUCER,
    });
  };
}
