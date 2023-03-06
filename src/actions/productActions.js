import axios from '../utils/axios';
import __ from 'lodash';
import * as API_END_POINT from '../constants/api';
import { setProductList, setProductCategory, setProductTags } from '../redux/Brand/Products/productSlice';
import { toast } from 'react-toastify';

export function getProductListAction(formData) {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_END_POINT.PRODUCT_LIST, formData);
      if (response && response.data && response.data.code == 200) {
        const values = response.data.data.records.map(item => ({
          id: __.get(item, 'product_variants[0].product_id', ''),
          productUrl: __.get(item, 'product_images[0].src', ''),
          productName: __.get(item, 'product_variants[0].title', ''),
          status: __.get(item, 'status', '') === '1' ? 'Active' : 'Inactive',
          category: __.get(item, 'product_categories[0].parent_category[0].name', ''),
          tags: _.get(item, 'product_tags', []).map(element => element.tag),
          stock: '0',
          sales: '$0',
          retailers: '',
          checked: false,
        }));
        dispatch(setProductList({
          rows: values,
          count: response.data.data.count
        }));
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

export function getProductCategories() {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_END_POINT.PRODUCT_CATEGORIES(14));
      if (response && response.data && response.data.code == 200) {
        // console.log(response.data.data);
        const values = response.data.data.map(item => item.name);
        dispatch(setProductCategory(values));
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

export function getProductTags() {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_END_POINT.PRODUCT_TAGS);
      if (response && response.data && response.data.code == 200) {
        console.log(response.data.data);
        const values = response.data.data.map(item => item.name);
        dispatch(setProductTags(values));
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
