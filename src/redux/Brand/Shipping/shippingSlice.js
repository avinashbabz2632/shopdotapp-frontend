import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shippingLoading: false,
  shippingData: {},
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
  },
});

/**
 * Actions
 */
export const { setShippingLoading, setBrandShippingData } =
  shippingSlice.actions;

/**
 * Reducers
 */
export const shippingReducer = shippingSlice.reducer;
