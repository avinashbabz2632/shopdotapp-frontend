import { createSlice } from '@reduxjs/toolkit';
import { productStatus } from '../../../constants/constants';

const initialState = {
  productFilter: {
    productCatFilter: [],
    productTagFilter: [],
    stockFilter: [],
    statusViseFilter: [],
  },
  loading: false,
  productCatOptions: [],
  productTagOptions: ['Chips', 'Summer', 'Summer Activities', 'Summer Toys'],
  stockOptions: ['< 10 units', '11-50 units', '> 50 units'],
  productList: [],
  productCount: 0,
  pagination: {
    limit: 20,
    page: 1
  },
  filter: {
    status: productStatus.all
  }
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
    setProductList: (state, action) => {
      state.productList = action.payload.rows;
      state.productCount = action.payload.count;
    },
    setProductCategory: (state, action) => {
      state.productCatOptions = action.payload;
    },
    setPaginationLimit: (state, action) => {
      state.pagination.limit = action.payload;
    },
    setPaginationPage: (state, action) => {
      state.pagination.page = action.payload;
    },
    setProductStatus: (state, action) => {
      state.filter.status = action.payload;
    },
    setProductTags: (state, action) => {
      state.productTagOptions = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
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
  setProductList,
  setProductCategory,
  setPaginationLimit,
  setPaginationPage,
  setProductStatus,
  setProductTags,
  setLoading
} = orderSlice.actions;

/**
 * Reducers
 */
export const productReducer = orderSlice.reducer;
