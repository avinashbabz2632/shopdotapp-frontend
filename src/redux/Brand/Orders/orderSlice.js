import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderFilter: { retailerFilter: [], fulfillmentFiter: [], dateRange: {} },
  fulFillmentOptions: ['Fulfilled', 'Cancelled', 'Unfulfilled'],
  orderList: [],
  orderCount: 0,
  orderLoading: false,
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    setOrderFilter: (state, action) => {
      state.orderFilter = action.payload;
    },
    resetToInitial: (state) => {
      state.orderFilter = {
        retailerFilter: [],
        fulfillmentFiter: [],
        dateRange: {},
      };
    },
    retailerClear: (state) => {
      state.orderFilter.retailerFilter = [];
    },
    fulFillmentClear: (state) => {
      state.orderFilter.fulfillmentFiter = [];
    },
    dateRangeClear: (state) => {
      state.orderFilter.dateRange = {};
    },
    setOrderList: (state, action) => {
      state.orderList = action.payload.rows;
      state.orderCount = action.payload.count
    },
    setOrderLoading: (state, action) => {
      state.orderLoading = action.payload;
    },
  },
});

/**
 * Actions
 */
export const {
  setOrderFilter,
  resetToInitial,
  retailerClear,
  fulFillmentClear,
  dateRangeClear,
  setOrderList,
  setOrderLoading,
} = orderSlice.actions;

/**
 * Reducers
 */
export const orderReducer = orderSlice.reducer;
