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
import {
  setRetailerProfileSaveResult,
  setRetailerProfileSaving,
} from '../redux/Retailer/Profile/retailerProfileSlice';
import {
  sendRetaileNewConnectionRequest,
  setRetailerBrandProductsList,
  setRetailerBrandProfile,
  setRetailerBrandValuesList,
  setRetailerNewConnectionRequestError,
  setRetailerNewConnectionRequestSuccess,
  setRetailerProducts,
} from '../redux/Retailer/Brand/Products/retailerBrandProductsSlice';
import { setRetailerProductDetails } from '../redux/Brand/Retailer/retailerSlice';

export function getRetailerProfileAction(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_END_POINT.RETAILER_PROFILE}`);
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
      const response = await axios.post(
        API_END_POINT.RETAILER_PROFILE,
        formData
      );
      if (
        response &&
        response.status &&
        (response.status == 201 || response.status == 200)
      ) {
        toast.success(response?.data?.message);
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

export async function addBillingDetailsAction(data) {
  try {
    const response = await axios.post(API_END_POINT.RETAILER_BILLING, data);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
}

export async function getBillingAction() {
  try {
    const response = await axios.get(API_END_POINT.RETAILER_BILLING);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
}

export function getRetailerBrandProductsListAction(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${API_END_POINT.RETAILER_BRANDS}`,
        data
      );
      if (response && response.data && response.data.code == 201) {
        dispatch(setRetailerBrandProductsList(response?.data?.data));
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

export function updateNotificationAlertAction(data) {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        API_END_POINT.RETAILER_NOTIFICATION_ALERT,
        data
      );
      if (
        (response && response.data && response.data.code == 201) ||
        (response && response.data && response.data.code == 200)
      ) {
        toast.success('Notification Alert Updated');
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

export function getRetailerBrandValuesAction() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_END_POINT.RETAILER_BRAND_VALUES}`
      );
      if (
        (response && response.data && response.data.code == 201) ||
        (response && response.data && response.data.code == 200)
      ) {
        dispatch(setRetailerBrandValuesList(response.data.data));
      } else {
      }
    } catch (err) {}
  };
}

export function retailerNewConnectionRequestAction(data) {
  return async (dispatch) => {
    try {
      dispatch(sendRetaileNewConnectionRequest());
      const response = await axios.post(
        API_END_POINT.RETAILER_NEW_CONNECTION_REQUEST,
        data
      );
      if (
        (response && response.data && response.data.code == 201) ||
        (response && response.data && response.data.code == 200)
      ) {
        dispatch(setRetailerNewConnectionRequestSuccess());
        // toast.success('New Connection request sent successfully');
      }
    } catch (err) {
      dispatch(setRetailerNewConnectionRequestError());
      toast.error(
        err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors[0].invitee_id
          : 'Something went worng'
      );
    }
  };
}

export function getRetailerBrandProfileAction(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_END_POINT.RETAILER_BRAND_PROFILE(id)}`
      );
      if (
        (response && response.data && response.data.code == 201) ||
        (response && response.data && response.data.code == 200)
      ) {
        dispatch(setRetailerBrandProfile(response.data.data));
      } else {
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

export function getRetailerProductsAction(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${API_END_POINT.RETAILER_PRODUCTS}`,
        data
      );
      if (response && response.data && response.data.code == 200) {
        dispatch(setRetailerProducts(response?.data?.data));
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

export function getRetailerProductDetailsAction(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_END_POINT.RETAILER_PRODUCT_DETAILS(id)}`
      );
      if (response && response.data && response.data.code == 200) {
        dispatch(setRetailerProductDetails(response?.data?.data));
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