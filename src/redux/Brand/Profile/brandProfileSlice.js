import { createSlice } from '@reduxjs/toolkit';
import * as types from '../../../actions/actionTypes';

const initialState = {
  brandProfileDetails: {},
  brandCategory: {},
  brandValues: {},
};

const brandProfileSlice = createSlice({
  name: 'brandProfile',
  initialState,
  reducers: {
    setBrandProfileDetails: (state, action) => {
      if (action.payload.type === types.BRAND_PROFILE) {
        state.brandProfileDetails = action.payload.data;
      }
    },
    setBrandCategory: (state, action) => {
      if (action.payload.type === types.BRAND_CATEGORY) {
        state.brandCategory = action.payload.data;
      }
    },
    setBrandValues: (state, action) => {
      if (action.payload.type === types.BRAND_VALUES) {
        state.brandValues = action.payload.data;
      }
    },
  },
});

/**
 * Actions
 */
export const { setBrandProfileDetails, setBrandCategory, setBrandValues } =
  brandProfileSlice.actions;

/**
 * Reducers
 */
export const brandProfileReducer = brandProfileSlice.reducer;
