import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shippingLoading: false
};

const shippingSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    setShippingLoading: (state, action) => {
      state.shippingLoading = action.payload;
    },
  },
});

/**
 * Actions
 */
export const {
  setShippingLoading
} = shippingSlice.actions;

/**
 * Reducers
 */
export const shippingReducer = shippingSlice.reducer;
