import axios from '../utils/axios';
import * as API_END_POINT from '../constants/api';
import { setLoggedIn } from '../redux/auth/authSlice';
import { setUserInfo } from '../redux/user/userSlice';
import { toast } from 'react-toastify';

export function getProductListAction(formData) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.PRODUCT_LIST, {
        paging: {
          limit: 10,
          offset: 0,
        },
        sort: [['shopify_product_id', 'DESC']],
        query: {
          category_id: 48,
        },
        filter: [
          {
            field: 'status',
            operator: 'eq',
            value: '1',
          },
          {
            field: 'inventory_quantity',
            operator: 'lte',
            value: '7',
          },
        ],
      });
      if (response && response.data && response.data.code == 200) {
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
