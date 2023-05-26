import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productFilter: {
    productCatFilter: [],
    productTagFilter: [],
  },
  productCatOptions: ['Baby & Kids', 'Men', 'Women'],
  productTagOptions: [
    'Chips',
    'Summer',
    'Summer Activities',
    'Summer Toys',
    'Footwear Men',
    'Footwear',
    'Footwear Women',
    'Footwear Baby & Kids',
    'Women',
    'Books',
    'jewelry',
  ],
  currentRetailerProfile: {},
};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setProductFilter: (state, action) => {
      state.productFilter = action.payload;
      console.log('action.payload', action.payload);
    },
    setCurrentRetailerProfile: (state, action) => {
      state.currentRetailerProfile = action.payload;
      console.log('action.payload', action.payload);
    },
    resetToInitial: (state) => {
      state.productFilter = {
        productCatFilter: [],
        productTagFilter: [],
      };
    },
    productCatClear: (state) => {
      state.productFilter.productCatFilter = [];
    },
    productTagClear: (state) => {
      state.productFilter.productTagFilter = [];
    },
  },
});

/**
 * Actions
 */
export const {
  setProductFilter,
  resetToInitial,
  productTagClear,
  productCatClear,
  setCurrentRetailerProfile,
} = profileSlice.actions;

/**
 * Reducers
 */
export const brandRetailerProfileReducer = profileSlice.reducer;
