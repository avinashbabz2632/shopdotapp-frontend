import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    statusViseFilter: [],
    categoryFilter: [],
    stateFilter: [],
    salesFilter: {},
    retailerRequests: [],
    connectedRetailers: [],
};

const retaielrSlice = createSlice({
    name: 'brandRetailer',
    initialState,
    reducers: {
        setStatusViseFilter: (state, action) => {
            state.statusViseFilter = [action.payload];
        },
        setCategoryFilter: (state, action) => {
            state.categoryFilter = [...action.payload];
        },
        setStateFilter: (state, action) => {
            state.stateFilter = [...action.payload];
        },
        setSalesFilter: (state, action) => {
            state.salesFilter = { ...action.payload };
        },
        resetConnecteRetailersFilter: (state) => {
            state.categoryFilter = [];
            state.stateFilter = [];
            state.salesFilter = {};
        },
        setRetailerRequests: (state, action) => {
            state.retailerRequests = action.payload.data
        },
        setConnectedRetailers: (state, action) => {
            state.connectedRetailers = action.payload.data
        },
        resetToInitial: (state) => {
            state.statusViseFilter = [];
        },
    },
});

export const {
    setCategoryFilter,
    setStateFilter,
    setSalesFilter,
    resetToInitial,
    setStatusViseFilter,
    resetConnecteRetailersFilter,
    setRetailerRequests,
    setConnectedRetailers,
} = retaielrSlice.actions;

/**
 * Reducers
 */
export const retailerReducer = retaielrSlice.reducer;