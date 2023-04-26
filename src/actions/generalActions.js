import axios from '../utils/axios';
import { toast } from 'react-toastify';
import * as API_END_POINT from '../constants/api';
import { setCountries } from '../redux/General/Countries/getCountriesSlice';
import { setStates } from '../redux/General/States/getStatesSlice';

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