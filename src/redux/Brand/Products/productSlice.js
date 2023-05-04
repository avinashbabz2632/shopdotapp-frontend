import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productFilter: {
    productCatFilter: [],
    productTagFilter: [],
    stockFilter: [],
    statusViseFilter: [],
  },
  productCatFilter: [],
  productTagFilter: [],
  stockFilter: [],
  productStatusFilter: [],
  productCatOptions: ['Baby & Kids', 'Men', 'Women'],
  productTagOptions: ['Chips', 'Summer', 'Summer Activities', 'Summer Toys'],
  stockOptions: ['< 10 units', '11-50 units', '> 50 units'],
  brandProductList: [],
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    setProductFilter: (state, action) => {
      state.productFilter = action.payload;
    },
    resetToInitial: (state) => {
      state.productCatFilter = [];
      state.productTagFilter = [];
      state.stockFilter = [];
    },
    productCatClear: (state) => {
      state.productCatFilter = [];
    },
    productTagClear: (state) => {
      state.productTagFilter = [];
    },
    stockClear: (state) => {
      state.stockFilter = [];
    },
    statusViseClear: (state) => {
      state.productFilter.statusViseFilter = [];
    },
    clearProductLogout: (state) => {
      state = initialState;
    },
    setBrandProductList: (state, action) => {
      state.brandProductList = action.payload;
    },
    setProductCatOptions: (state, action) => {
      state.productCatOptions = action.payload;
    },
    setProductTagOptions: (state, action) => {
      state.productTagOptions = action.payload;
    },
    setProductCatFilter: (state, action) => {
      state.productCatFilter = [...action.payload];
    },
    setProductTagsFilter: (state, action) => {
      state.productTagFilter = [...action.payload];
    },
    setStockFilter: (state, action) => {
      state.stockFilter = [...action.payload];
    },
    setProductStatusFilter: (state, action) => {
      state.productStatusFilter = action.payload;
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
  stockClear,
  statusViseClear,
  clearProductLogout,
  setProductCatOptions,
  setBrandProductList,
  setProductTagOptions,
  //
  setProductCatFilter,
  setProductTagsFilter,
  setStockFilter,
  setProductStatusFilter
} = orderSlice.actions;

/**
 * Reducers
 */
export const productReducer = orderSlice.reducer;
