import axios from '../utils/axios';
import * as API_END_POINT from '../constants/api';
import { setLoggedIn } from '../redux/auth/authSlice';
import { setUserInfo } from '../redux/user/userSlice';
import { setProductCatOptions, setBrandProductList, setProductTagOptions } from '../redux/Brand/Products/productSlice';
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
      const response = await axios.get(
        `${API_END_POINT.PRODUCT_TAGS}`
      );
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

export function getProductCategoriesAction() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_END_POINT.PRODUCT_CATEGORIES}`
      );
      if (response && response.data && response.data.code == 200) {
        if (response.data.data) {
          dispatch(setProductCatOptions(response.data.data));
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
