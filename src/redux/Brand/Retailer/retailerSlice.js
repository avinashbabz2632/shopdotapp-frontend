import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    statusViseFilter: [],
    categoryFilter: [],
    stateFilter: [],
    salesFilter: {},
    retailerRequests: [],
    connectedRetailers: [],
    retailers: null,
    brandAssignedRetailerUpdating: false,
    brandAssignedRetailerUpdateSuccess: false,
    brandAssignedRetailerUpdateError: false,
    retailerProductDetails: null,
    brandFilters: [],
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
        setRetailers: (state, action) => {
            state.retailers = action.payload;
        },
        setBrandAssignedRetailersUpdating: (state) => {
            state.brandAssignedRetailerUpdating = true;
        },
        setBrandAssignedRetailerSuccess: (state) => {
            state.brandAssignedRetailerUpdating = false;
            state.brandAssignedRetailerUpdateSuccess = true;
            state.brandAssignedRetailerUpdateError = false;
        },
        setBrandAssignedRetailerError: (state) => {
            state.brandAssignedRetailerUpdating = false;
            state.brandAssignedRetailerUpdateSuccess = false;
            state.brandAssignedRetailerUpdateError = true;
        },
        resetBrandAssignedRetailerState: (state) => {
            state.brandAssignedRetailerUpdating = false;
            state.brandAssignedRetailerUpdateSuccess = false;
            state.brandAssignedRetailerUpdateError = false;
        },
        setRetailerProductDetails: (state, action) => {
            state.retailerProductDetails = action.payload;
        },
        setBrandFilters: (state, action) => {
            state.brandFilters = action.payload;
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
    setRetailers,
    setBrandAssignedRetailersUpdating,
    setBrandAssignedRetailerSuccess,
    setBrandAssignedRetailerError,
    resetBrandAssignedRetailerState,
    setRetailerProductDetails,
    setBrandFilters,
} = retaielrSlice.actions;

/**
 * Reducers
 */
export const retailerReducer = retaielrSlice.reducer;