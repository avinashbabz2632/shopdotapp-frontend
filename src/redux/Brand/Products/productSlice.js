import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productCatFilter: [],
  productTagFilter: [],
  stockFilter: [],
  productStatusFilter: 'all',
  productCatOptions: [],
  productTagOptions: [],
  stockOptions: ['< 10 units', '11-50 units', '> 50 units'],
  brandProductList: [],
  productDetails: null,
  //Product Update
  updatingProduct: false,
  updateProductSuccess: false,
  productUpdateResult: null,
  productSubCatOptions: [],
  productGroupOptions: [],
  syncError: null,
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
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
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
    setUpdatingProduct: (state, action) => {
      state.updatingProduct = true;
    },
    setProductUpdateResult: (state, action) => {
      state.updatingProduct = false;
      state.updateProductSuccess = true;
      state.productUpdateResult = action.payload;
    },
    setProductSubCatOptions: (state, action) => {
      state.productSubCatOptions = action.payload;
    },
    setProductGroupOptions: (state, action) => {
      state.productGroupOptions = action.payload;
    },
    setSyncError: (state, action) => {
      state.syncError = action.payload;
    }
  },
});

/**
 * Actions
 */
export const {
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
  setProductStatusFilter,
  setProductDetails,
  setProductSubCatOptions,
  setProductGroupOptions,
  setSyncError,
} = orderSlice.actions;

/**
 * Reducers
 */
export const productReducer = orderSlice.reducer;
