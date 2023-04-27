import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productFilter: {
    productCatFilter: [],
    productTagFilter: [],
    stockFilter: [],
    statusViseFilter: [],
  },
  productCatOptions: ['Baby & Kids', 'Men', 'Women'],
  productTagOptions: ['Chips', 'Summer', 'Summer Activities', 'Summer Toys'],
  stockOptions: ['< 10 units', '11-50 units', '> 50 units'],
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    setProductFilter: (state, action) => {
      state.productFilter = action.payload;
    },
    resetToInitial: (state) => {
      state.productFilter = {
        productCatFilter: [],
        productTagFilter: [],
        stockFilter: [],
        statusViseFilter: [],
      };
    },
    productCatClear: (state) => {
      state.productFilter.productCatFilter = [];
    },
    productTagClear: (state) => {
      state.productFilter.productTagFilter = [];
    },
    stockClear: (state) => {
      state.productFilter.stockFilter = [];
    },
    statusViseClear: (state) => {
      state.productFilter.statusViseFilter = [];
    },
    clearProductLogout: (state) => {
      state = initialState;
    },
    setProductCatOptions: (state, action) => {
      console.log('product-cat-options-----', action.payload);
      state.productCatOptions = action.payload;
    }
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
  stockClear,
  statusViseClear,
  clearProductLogout,
  setProductCatOptions,
} = orderSlice.actions;

/**
 * Reducers
 */
export const productReducer = orderSlice.reducer;
