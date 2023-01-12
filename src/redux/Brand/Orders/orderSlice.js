import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderFilter: { retailerFilter: [], fulfillmentFiter: [], dateRange: {} },
    retailerOptions: [
        'Retailer A',
        'Retailer B',
        'Retailer C',
        'Retailer D',
        'Retailer E',
        'Retailer F',
        'Retailer G',
        'Retailer H',
    ],
    fulFillmentOptions: ['Fulfilled', 'Cancelled', 'Unfulfilled'],
};

const orderSlice = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {
        setOrderFilter: (state, action) => {
            state.orderFilter = action.payload;
        },
        resetToInitial: (state) => {
            state.orderFilter = {
                retailerFilter: [],
                fulfillmentFiter: [],
                dateRange: {},
            };
        },
        retailerClear: (state) => {
            state.orderFilter.retailerFilter = [];
        },
        fulFillmentClear: (state) => {
            state.orderFilter.fulfillmentFiter = [];
        },
        dateRangeClear: (state) => {
            state.orderFilter.dateRange = {};
        },
    },
});

/**
 * Actions
 */
export const {
    setOrderFilter,
    resetToInitial,
    retailerClear,
    fulFillmentClear,
    dateRangeClear,
} = orderSlice.actions;

/**
 * Reducers
 */
export const orderReducer = orderSlice.reducer;
