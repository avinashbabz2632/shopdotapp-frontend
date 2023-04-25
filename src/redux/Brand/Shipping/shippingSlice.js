import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shippingLoading: false,
  shippingData: {},
  shippingTimes: [],
};

const shippingSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    setShippingLoading: (state, action) => {
      state.shippingLoading = action.payload;
    },
    setBrandShippingData: (state, action) => {
      state.shippingData = action.payload;
    },
    setShippingTimes: (state, action) => {
      state.shippingTimes = action.payload;
    },
    clearShippingLogout: (state) => {
      state = initialState;
    },
  },
});

/**
 * Actions
 */
export const {
  setShippingLoading,
  setBrandShippingData,
  setShippingTimes,
  clearShippingLogout,
} = shippingSlice.actions;

/**
 * Reducers
 */
export const shippingReducer = shippingSlice.reducer;
