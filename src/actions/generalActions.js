import axios from '../utils/axios';
import { toast } from 'react-toastify';
import * as API_END_POINT from '../constants/api';
import { setCountries } from '../redux/General/Countries/getCountriesSlice';

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