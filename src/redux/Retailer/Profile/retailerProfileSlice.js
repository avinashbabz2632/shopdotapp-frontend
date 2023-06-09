import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  retailerProfileSaving: false,
  retailerProfileSaveResult: null,
  retailerProfileCompleted: {
    profile: false,
    paid: false,
  },
};

const retailerProfileSlice = createSlice({
  name: 'retailerProfile',
  initialState,
  reducers: {
    setRetailerProfileSaving: (state, action) => {
      state.retailerProfileSaving = true;
    },
    setRetailerProfileSaveResult: (state, action) => {
      state.retailerProfileSaving = false;
      state.retailerProfileSaveResult = action.payload;
    },
    setRetilerProfileCompleted: (state, action) => {
      state.retailerProfileCompleted = {
        ...state.retailerProfileCompleted,
        ...action.payload,
      };
    },
  },
});

/**
 * Actions
 */
export const {
  setRetailerProfileSaving,
  setRetailerProfileSaveResult,
  setRetilerProfileCompleted,
} = retailerProfileSlice.actions;

/**
 * Reducers
 */
export const retailerProfileReducer = retailerProfileSlice.reducer;
