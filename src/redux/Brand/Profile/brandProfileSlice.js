import { createSlice } from '@reduxjs/toolkit';
import * as types from '../../../actions/actionTypes';

const initialState = {
  brandProfileDetails: {},
  brandCategory: {},
  brandValues: {},
  profileCompleted: {
    profile: false,
    preference: false,
    paid: false,
    shipping: false,
    integration: false,
  },
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
    setProfileCompleted: (state, action) => {
      state.profileCompleted = { ...state.profileCompleted, ...action.payload };
    },
    clearProfileLogout: (state) => {
      state = initialState;
    },
  },
});

/**
 * Actions
 */
export const {
  setBrandProfileDetails,
  setBrandCategory,
  setBrandValues,
  setProfileCompleted,
  clearProfileLogout,
} = brandProfileSlice.actions;

/**
 * Reducers
 */
export const brandProfileReducer = brandProfileSlice.reducer;
