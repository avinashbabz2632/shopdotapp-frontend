import * as types from './actionTypes';
import * as API_END_POINT from '../constants/api';
import axios from 'axios';
import { toast } from 'react-toastify';

export function getCategories() {
  return async (dispatch) => {
    try {
      const res = await axios.get(API_END_POINT.CATEGORY);
      if (res.status === 200) {
        dispatch({
          type: types.CATEGORY,
          categoryData: res.data.data,
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

export function getValues() {
  return async (dispatch) => {
    try {
      const res = await axios.get(API_END_POINT.VALUES);
      if (res.status === 200) {
        dispatch({
          type: types.VALUES,
          valueData: res.data.data,
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

export function clearCommonReducerAction() {
  return async (dispatch) => {
    dispatch({
      type: types.CLEAR_USER_REDUCER,
    });
  };
}
