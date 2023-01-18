import axios from 'axios';
import __ from 'lodash';
import moment from 'moment';
import { toast } from 'react-toastify';
import * as API_END_POINT from '../constants/api';
import { setOrderList, setOrderLoading } from '../redux/Brand/Orders/orderSlice';
import capitalizeFirstLetterEachWord from '../utils/capitalizeFirstLetterEachWord';

export function getOrderList(filterOptions) {
  return async (dispatch) => {
    dispatch(setOrderLoading(true));
    try {
      const response = await axios.post(API_END_POINT.LISTORDER, filterOptions);
      if (response && response.data && response.data.code == 200) {
        const values = response.data.data.rows.map(item => ({
          id: '#' + item.id,
          retailerName: capitalizeFirstLetterEachWord(__.get(item, 'retailer.first_name', '') + ' ' + __.get(item, 'retailer.last_name', '')),
          orderDate: moment(item.createdAt).format('MMM Do h:mm a'),
          customerName: '-',
          customerOrderId: '-',
          orderDetails: item.orderItems.map(element => ({
            id: '#' + element.id,
            productUrl: '-',
            productName: '-',
            qty: element.quantity,
            totalWsp: { wsp: '$10.00', wsp_unit: '$2.00/unit' },
            totalMSRP: { msrp: '$25.00', msrp_unit: '$8.00/unit' },
            fulfillmentStatus: capitalizeFirstLetterEachWord(element.fulfillment_status),
            shippingCarrier: '-',
            TranckingNumber: __.get(element, 'itemTrackingInfo[0].tracking_number', ''),
          })),
          qty: item.orderItems.map(item => parseFloat(item.quantity)).reduce((a, b) => a + b, 0),
          wsp: '$' + item.orderItems.map(item => parseFloat(item.wsp)).reduce((a, b) => a + b, 0),
          fees: '$' + item.orderItems.map(item => parseFloat(item.price)).reduce((a, b) => a + b, 0),
        }));
        dispatch(setOrderList({
          rows: values,
          count: response.data.data.count
        }));
      } else {
        toast.error('Something went worng');
      }
    } catch (err) {
      toast.error(
        err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors
          : 'Something went worng'
      );
    } finally {
      dispatch(setOrderLoading(false));
    }
  };
};
