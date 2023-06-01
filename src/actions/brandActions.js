import axios from '../utils/axios';
import { toast } from 'react-toastify';
import * as API_END_POINT from '../constants/api';
import * as types from './actionTypes';
import {
  setBrandShippingData,
  setShippingLoading,
  setShippingTimes,
} from '../redux/Brand/Shipping/shippingSlice';
import { onChangePassword } from '../redux/Brand/Security/securitySlice';
import {
  setBrandCategory,
  setBrandProfileDetails,
  setBrandValues,
  setProfileCompleted,
} from '../redux/Brand/Profile/brandProfileSlice';
import { setBrandPreferenceData } from '../redux/Brand/Preference/preferenceSlice';
import { setPaidDetails } from '../redux/Brand/GettingPaid2/gettingPaidSlice';
import { setConnectedRetailers, setRetailers, setRetailerRequests } from '../redux/Brand/Retailer/retailerSlice';
import { setStatusIndicator } from '../redux/auth/authSlice';

export function connectShopifyAction(formData) {
  return async (dispatch) => {
    try {
      const params = {
        shop: formData.name,
        user_id: formData.user_id,
      };

      fetch(
        `${API_END_POINT.PLATFORM}/shopify-integration?shop=${formData.name}&user_id=${formData.user_id}`,
        {
          redirect: 'manual',
        }
      )
        .then((res) => {
          if (res.type === 'opaqueredirect') {
            window.location.href = res.url;
          } else {
            return res;
          }
        })
        .catch(() => {});

      // const response = await axios.get(
      //   `${API_END_POINT.PLATFORM}/shopify-integration`,
      //   {
      //     params,

      //     headers: {
      //       'Content-type': 'text/html',
      //       'Access-Control-Allow-Origin': true,
      //     },
      //   }
      // );
      //
      // if (response && response.data && response.data.code == 201) {
      // } else {
      //
      //   toast.error('Something went worng');
      // }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.location) {
        window.location = err.response.data.location;
      }
      toast.error(
        err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors
          : 'Something went worng'
      );
    }
  };
}

export function disconnectShopifyAction(formData) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        API_END_POINT.DISCONNECT_SHOPIFY,
        formData
      );
      if (response && response.data && response.data.code == 200) {
        dispatch(getBrandProfileAction(formData.user_id));
      } else {
      }
    } catch (err) {}
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
        dispatch(
          setProfileCompleted({
            preference: response?.data?.data?.brandPreference?.id,
            profile: response?.data?.data?.brand_profile?.company_name,
            paid: response?.data?.data?.payment_detail?.customer_id,
            shipping: response?.data?.data?.shippingRate?.id,
            integration: response?.data?.data?.shop_detail?.is_active,
          })
        );
        dispatch(
          setStatusIndicator({
            billing: response?.data?.data?.payment_detail?.customer_id,
            products: response?.data?.data?.user_detail?.is_initial_sync_done,
            store: response?.data?.data?.shop_detail?.is_active,
            onboarding: response?.data?.data?.brandPreference?.id,
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

export function syncProductAction(userId) {
  return async () => {
    try {
      const response = await axios.get(API_END_POINT.SYNC_PRODUCT_ALL(userId));
      if (response && response.data && response.data.code == 200) {
        return true;
      }
    } catch (err) {
      return false;
    }
  };
}

export const syncProduct2 = async (userId) => {
  try {
    const response = await axios.get(API_END_POINT.SYNC_PRODUCT_ALL(userId));
    console.log('response-response---', response);
    return response;
  } catch (error) {
    return error;
  }
};
export function syncProductProfile(userId) {
  return async () => {
    try {
      const response = await axios.get(
        API_END_POINT.USER_BRAND_PROFILE(userId)
      );
      if (response && response.data && response.data.code == 200) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };
}

export function updateBrandProfileAction(formData, isCreate) {
  return async (dispatch) => {
    try {
      let response;
      if (isCreate) {
        response = await axios.post(API_END_POINT.BRAND_PROFILE, formData);
      } else {
        response = await axios.put(API_END_POINT.BRAND_PROFILE, formData);
      }
      if (
        response &&
        response.status &&
        (response.status == 201 || response.status == 200)
      ) {
        toast.success('Profile Details Updated');
        dispatch(getBrandProfileAction(formData.user_id));
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
      toast.success('Password changed successfully');
    } catch (err) {
      toast.error(
        err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors
          : 'Something went worng'
      );
    }
  };
}

export function getBrandBankDetailsAction(customerId, externalAccountId) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_END_POINT.PAYMENT_CUSTOMER}/${customerId}/external-account/${externalAccountId}`
      );
      if (response && response.data && response.data.code == 201) {
        dispatch(setPaidDetails(response.data.data));
      } else {
        toast.error('Something went worng');
      }
    } catch (err) {
      const error = err?.response?.data?.errors;
      if (error.startsWith(`customer with id`)) {
      } else {
        toast.error(
          err && err.response && err.response.data && err.response.data.errors
            ? err.response.data.errors
            : 'Something went worng'
        );
      }
    }
  };
}
export function brandBankDetailsAction(
  formData,
  isEdit,
  customerId,
  externalId
) {
  return async (dispatch) => {
    try {
      let response;
      if (isEdit) {
        response = await axios.put(
          `${API_END_POINT.PAYMENT_CUSTOMER}/${customerId}/external-account/${externalId}`,
          formData
        );
      } else {
        response = await axios.post(API_END_POINT.EXTERNAL_ACCOUNT, formData);
      }
      if (response && response.status === 201) {
        // dispatch(setPaidCompleted(true));
        dispatch(
          getBrandBankDetailsAction(
            formData.customer_id,
            Number(response.data.data.external_account_id)
          )
        );
        dispatch(setProfileCompleted({ paid: true }));
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
export function brandAsCustomerAction(formData, bankDetails) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        API_END_POINT.BRAND_AS_CUSTOMER,
        formData
      );
      if (response && response.data && response.data.code == 201) {
        dispatch(
          brandBankDetailsAction(
            {
              ...bankDetails,
              account_type: bankDetails.account_type.value,
              purpose: bankDetails.purpose.value,
              customer_id: Number(response.data.data.customer_id),
            },
            false,
            null,
            formData.brand_user_id
          )
        );
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

export function getBrandShippingAction(brandId) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_END_POINT.BRAND_SHIPPING}/${brandId}`
      );
      if (response.status == 200) {
        dispatch(
          setBrandShippingData({
            ...response.data.data,
            daystofulfill: response.data.data.shipping_time_id,
          })
        );
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

export function updateShipping(data, shippingId) {
  return async (dispatch) => {
    try {
      dispatch(setShippingLoading(true));
      let response;
      if (shippingId) {
        response = await axios.put(`${API_END_POINT.BRAND_SHIPPING}`, data);
      } else {
        response = await axios.post(API_END_POINT.BRAND_SHIPPING, data);
      }
      dispatch(getBrandShippingAction(data.brand_id));
      dispatch(setProfileCompleted({ shipping: true }));
      toast.success(response.data.message);
    } catch (err) {
      toast.error(
        err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors
          : 'Something went worng'
      );
    } finally {
      dispatch(setShippingLoading(false));
    }
  };
}

export function getBrandShippingTime() {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_END_POINT.BRAND_SHIPPING_TIMES);
      if (response.status == 200) {
        dispatch(setShippingTimes(response.data.data));
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
export function getPreferencesAction(brandId) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_END_POINT.PREFERENCES}/${brandId}`
      );
      if (response.status === 200) {
        dispatch(setBrandPreferenceData(response.data.data));
      }
    } catch (err) {
      console.log(err, 'err');
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
        dispatch(getPreferencesAction(data.brand_id));
        dispatch(setProfileCompleted({ preference: true }));
        toast.success(response.data?.message);
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

export async function getRetailerRequestAction(data) {
  try {
    const response = await axios.post(API_END_POINT.RETAILER_REQUEST, data);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
}

export async function respondRetailerRequestAction(data) {
  try {
    const response = await axios.put(
      API_END_POINT.UPDATE_RETAILER_REQUEST,
      data
    );
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
}
export function getRetailerRequestForAccess(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        API_END_POINT.RETAILER_REQUEST_FOR_ACCESS,
        data
      );
      if (response.status === 200) {
        dispatch(setRetailerRequests(response.data));
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
export function getConnectedRetailer(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.CONECTED_RETAILER, data);
      if (response.status === 200) {
        dispatch(setConnectedRetailers(response.data));
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

export function getRetailerListAction() {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_END_POINT.RETAILER_LIST);
      if (response.status === 200) {
        dispatch(setRetailers(response.data?.data));
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
