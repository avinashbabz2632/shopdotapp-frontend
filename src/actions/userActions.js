import axios from '../utils/axios';
import { toast } from 'react-toastify';
import * as API_END_POINT from '../constants/api';

export async function updateUserRoleAction(formData, thunkAPI) {
  try {
    const response = await axios.post(API_END_POINT.USER_ROLE, formData);
    if (response && response.data && response.data.code == 200) {
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

export async function addUserPlatformAction(formData, thunkAPI) {
  try {
    const response = await axios.post(API_END_POINT.USER_PLATFORM, formData);
    if (response && response.data && response.data.code == 200) {
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

export async function uploadImageAction(formData) {
  try {
    const response = await axios.post(API_END_POINT.UPLOAD_IMAGE, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    if (response && response.data && response.data.code == 200) {
      return response.data;
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
