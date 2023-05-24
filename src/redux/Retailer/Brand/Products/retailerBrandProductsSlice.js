import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  retailerBrandProductsList: [],
  retailerBrandValuesList: [],
  retailerBrandValuesFilter: [],
  retailerPricingFilter: [],
  retailerStateFilter: '',
  retailerInviteStatusFilter: '',
};

const retailerBrandProductsSlice = createSlice({
  name: 'retailerBrandProductsSlice',
  initialState,
  reducers: {
    setRetailerBrandProductsList: (state, action) => {
      state.retailerBrandProductsList = action.payload;
    },
    setRetailerBrandValuesList: (state, action) => {
      state.retailerBrandValuesList = action.payload;
    },
    setRetailerBrandValuesFilter: (state, action) => {
      state.retailerBrandValuesFilter = [...action.payload];
    },
    setRetailerPricingFilter: (state, action) => {
      state.retailerPricingFilter = [...action.payload];
    },
    setRetailerStateFilter: (state, action) => {
      state.retailerStateFilter = action.payload;
    },
    setRetailerInviteStatusFilter: (state, action) => {
      state.retailerInviteStatusFilter = action.payload;
    },
    resetAllFilter: (state) => {
      state.retailerBrandValuesFilter = [];
      state.retailerPricingFilter = [];
      state.retailerStateFilter = '';
      state.retailerInviteStatusFilter = '';
    },
    clearBrandValuesFilter: (state) => {
      state.retailerBrandValuesFilter = [];
    },
    clearPricingFilter: (state) => {
      state.retailerPricingFilter = [];
    },
  },
});

/**
 * Actions
 */
export const {
  setRetailerBrandProductsList,
  setRetailerBrandValuesList,
  setRetailerBrandValuesFilter,
  setRetailerPricingFilter,
  setRetailerStateFilter,
  resetAllFilter,
  clearBrandValuesFilter,
  clearPricingFilter,
} = retailerBrandProductsSlice.actions;

/**
 * Reducer
 */
export const retailerProductReducer = retailerBrandProductsSlice.reducer;
