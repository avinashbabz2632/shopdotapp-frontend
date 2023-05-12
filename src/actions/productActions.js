import axios from '../utils/axios';
import * as API_END_POINT from '../constants/api';
import { setLoggedIn } from '../redux/auth/authSlice';
import { setUserInfo } from '../redux/user/userSlice';
import {
  setProductCatOptions,
  setBrandProductList,
  setProductTagOptions,
  setProductDetails,
  setProductSubCatOptions,
  setProductGroupOptions,
} from '../redux/Brand/Products/productSlice';
import { toast } from 'react-toastify';

export function getProductListAction(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.PRODUCT_LIST, data);
      if (response && response.data && response.data.code == 200) {
        const data = response.data?.data;
        dispatch(setBrandProductList(data.records));
      } else {
        toast.error('Something went worng');
      }
    } catch (err) {
      toast.error(
        err &&
          err.response &&
          err.response.data &&
          err.response.data.errors &&
          err.response.data.errors.length &&
          err.response.data.errors[0] &&
          err.response.data.errors[0].password
          ? err.response.data.errors[0].password
          : err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors
          : 'Something went worng'
      );
    }
  };
}

export function getProductTagsAction() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_END_POINT.PRODUCT_TAGS}`);
      if (response && response.data && response.data.code == 200) {
        if (response.data.data) {
          dispatch(setProductTagOptions(response.data.data));
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

export function getProductCategoriesAction(type, id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_END_POINT.PRODUCT_CATEGORIES(id)}`);
      if (response && response.data && response.data.code == 200) {
        if (response.data.data) {
          if(type === 'category') {
            dispatch(setProductCatOptions(response.data.data));
          } else if(type === 'subcategory') {
            dispatch(setProductSubCatOptions(response.data.data));
          } else if(type === 'group') {
            dispatch(setProductGroupOptions(response.data.data));
          }
        }
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

export function syncSingleProductAction(params) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_END_POINT.SYNC_SINGLE_PRODUCT}`, {
        params,
      });
      if (response && response.data && response.data.code == 200) {
        if (response.data.data) {
        }
      } else {
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

export function downloadProductAction(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${API_END_POINT.DOWNLOAD_PRODUCT}`,
        data
      );
      if (response && response.data && response.data.code == 200) {
        if (response.data.data) {
        }
      } else {
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

export function uploadProductAction(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${API_END_POINT.UPLOAD_PRODUCT}`,
        data
      );
      if (response && response.data && response.data.code == 200) {
        if (response.data.data) {
        }
      } else {
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

export function getProductDetailsAction(productId) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_END_POINT.PRODUCT_DETAILS(productId)}`
      );
      if (response && response.data && response.data.code == 200) {
        if (response.data.data) {
          dispatch(setProductDetails(response.data.data));
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

export function editProductDetailsAction(data) {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `${API_END_POINT.EDIT_PRODUCT_DETAILS(productId)}`,
        data
      );
      if (response && response.data && response.data.code == 200) {
        if (response.data.data) {
          dispatch(setProductDetails(response.data.data));
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
