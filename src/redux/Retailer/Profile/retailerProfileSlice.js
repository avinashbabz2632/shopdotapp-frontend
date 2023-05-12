import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  retailerProfileSaving: false,
  retailerProfileSaveResult: null,
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
  },
});

/**
 * Actions
 */
export const { setRetailerProfileSaving, setRetailerProfileSaveResult } = retailerProfileSlice.actions;

/**
 * Reducers
 */
export const retailerProfileReducer = retailerProfileSlice.reducer;
