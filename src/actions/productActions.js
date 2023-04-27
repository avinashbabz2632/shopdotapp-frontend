import axios from '../utils/axios';
import * as API_END_POINT from '../constants/api';
import { setLoggedIn } from '../redux/auth/authSlice';
import { setUserInfo } from '../redux/user/userSlice';
import { setProductCatOptions } from '../redux/Brand/Products/productSlice';
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
        filter: [],
      });
      if (response && response.data && response.data.code == 200) {
        // const data = response.data?.data;
        // console.log('data----', data);
        // if(data) {
        //   if(Array.isArray(data.records) && data.records.length > 0){
        //     // Get First Record
        //     const firstRecord = data.records[0];
        //     console.log('firstRecord----', firstRecord);
        //     if(firstRecord){
        //       dispatch(setProductCatOptions(firstRecord.product_categories));
        //     }
        //   }
        // }
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
