import axios from '../utils/axios';
import { toast } from 'react-toastify';
import * as API_END_POINT from '../constants/api';
import * as types from './actionTypes';
import {
  setBrandShippingData,
  setShippingLoading,
  setShippingTimes,
} from '../redux/Brand/Shipping/shippingSlice';
import { onChangePassword } from '../redux/Brand/security/securitySlice';
import {
  setBrandCategory,
  setBrandProfileDetails,
  setBrandValues,
  setProfileCompleted,
} from '../redux/Brand/Profile/brandProfileSlice';
import { setBrandPreferenceData } from '../redux/Brand/Preference/preferenceSlice';
import { setPaidDetails } from '../redux/Brand/GettingPaid/gettingPaidSlice';

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
            integration: response?.data?.data?.shop_detail,
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

export function syncProductAction(productId, userId) {
  return async (dispatch) => {
    const params = {
      product_id: productId,
      user_id: userId,
    };
    try {
      const response = await axios.get(API_END_POINT.SYNC_PRODUCT, { params });
      if (response && response.data && response.data.code == 200) {
      } else {
      }
    } catch (err) {}
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

export function brandBankDetailsAction(formData) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        API_END_POINT.EXTERNAL_ACCOUNT,
        formData
      );
      if (response && response.data && response.data.code == 201) {
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

export function getBrandBankDetailsAction(customerId, externalAccountId) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_END_POINT.PAYMENT_CUSTOMER}/${customerId}/external-account/${externalAccountId}`
      );
      if (response && response.data && response.data.code == 200) {
        setPaidDetails(response.data.data);
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

export function updatePreferences(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.PREFERENCES, data);
      if (response.status === 201) {
        dispatch(getPreferencesAction(data.brand_id));
        dispatch(setProfileCompleted({ preference: true }));
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
