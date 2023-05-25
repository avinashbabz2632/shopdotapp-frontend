import axios from '../utils/axios';
import { toast } from 'react-toastify';
import * as API_END_POINT from '../constants/api';
import { setCountries } from '../redux/General/Countries/getCountriesSlice';
import { setStates } from '../redux/General/States/getStatesSlice';
import { setCategories } from '../redux/General/Category/getCategorySlice';

export function getCountriesAction() {
    return async (dispatch) => {
      try {
        const response = await axios.get(
          `${API_END_POINT.COUNTRIES}`
        );
        if (response && response.data && response.data.code == 200) {
          if (response.data.data) {
            dispatch(setCountries(response.data.data));
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

  export function getStatesAction(id) {
    return async (dispatch) => {
      try {
        const response = await axios.get(
          `${API_END_POINT.STATES(id)}`
        );
        if (response && response.data && response.data.code == 200) {
          if (response.data.data) {
            dispatch(setStates(response.data.data));
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
  export function getRetailerCategory() {
    return async (dispatch) => {
      try {
        const response = await axios.get(
          `${API_END_POINT.RETAILER_CATEGORIES}`
        );
        if (response && response.data && response.data.code == 200) {
          if (response.data.data) {
            dispatch(setCategories(response.data.data));
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