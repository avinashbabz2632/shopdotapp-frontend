import axios from '../utils/axios';
import { toast } from 'react-toastify';
import * as API_END_POINT from '../constants/api';
import { setNotificationData, setRoleUpdated } from '../redux/user/userSlice';

export function updateUserRoleAction(formData, navigate, platformName) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.USER_ROLE, formData);
      if (response && response.data && response.data.code == 201) {
        dispatch(setRoleUpdated());
        if (formData.role === 'brand') {
          dispatch(
            addUserPlatformAction(
              {
                user_id: formData.user_id,
                platform: platformName,
              },
              navigate
            )
          );
        } else {
          navigate('/retailer-onboarding');
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

export function addUserPlatformAction(formData, navigate) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.USER_PLATFORM, formData);
      if (response && response.data && response.data.code == 201) {
        navigate('/brand-onboarding');
      } else {
        navigate('/personalized-not-supported', { state: formData.platform });
      }
    } catch (err) {
      toast.error(
        err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors
          : 'Something went worng'
      );
      throw err;
    }
  };
}

export async function uploadImageAction(formData) {
  try {
    const response = await axios.post(API_END_POINT.UPLOAD_IMAGE, formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    if (response && response.data && response.data.code == 200) {
      return response.data.data;
    } else {
      toast.error('Something went worng');
    }
    return response;
  } catch (err) {
    toast.error(
      err && err.response && err.response.data && err.response.data.errors
        ? err.response.data.errors
        : 'Something went worng'
    );
    throw err;
  }
}

export function updateNotificationAction(formData) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.NOTIFICATION, formData);
      if (response && response.data && response.data.code == 200) {
        toast.success(response.data?.message);
        dispatch(getNotificationAction(formData.brand_id));
      } else {
        toast.error('Something went worng');
      }
      return response;
    } catch (err) {
      toast.error(
        err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors
          : 'Something went worng'
      );
      throw err;
    }
  };
}

export function getNotificationAction(brandId) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_END_POINT.NOTIFICATION}/${brandId}/`
      );
      if (response && response.data && response.data.code == 200) {
        if (response.data.data) {
          dispatch(setNotificationData(response.data.data));
        }
      } else {
      }
      return response;
    } catch (err) {
      toast.error(
        err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors
          : 'Something went worng'
      );
      throw err;
    }
  };
}
