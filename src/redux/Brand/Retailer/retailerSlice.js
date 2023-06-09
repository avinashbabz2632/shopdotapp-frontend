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
    // dynamic filter states
    selectedBrandFilters: [],
    selectedBrandStatusFilters: [],
    selectedDaysToFullfilFilters: [],
    selectedStockFilters: [],
    selectedWSPFilter: [],
    selectedMSRPFilter: [],
    limit: 10,
    offset: 0,
    productSearchQuery: "",
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
        setSelectedBrandFilters: (state, action) => {
            state.selectedBrandFilters = [...action.payload];
        },
        setSelectedBrandStatusFilters: (state, action) => {
            state.selectedBrandStatusFilters = [...action.payload];
        },
        setSelectedDaysToFullfilFilters: (state, action) => {
            state.selectedDaysToFullfilFilters = [...action.payload];
        },
        setSelectedStockFilters: (state, action) => {
            state.selectedStockFilters = [...action.payload];
        },
        setSelectedWSPFilter: (state, action) => {
            state.selectedWSPFilter = [...action.payload];
        },
        setSelectedMSRPFilter: (state, action) => {
            state.selectedMSRPFilter = [...action.payload];
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setOffset: (state, action) => {
            state.offset = action.payload;
        },
        setProductSearchQuery: (state, action) => {
            state.productSearchQuery = action.payload;
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
    //Filter
    setSelectedBrandFilters,
    setSelectedBrandStatusFilters,
    setSelectedDaysToFullfilFilters,
    setSelectedStockFilters,
    setSelectedWSPFilter,
    setSelectedMSRPFilter,
    setLimit,
    setOffset,
    setProductSearchQuery,
} = retaielrSlice.actions;

/**
 * Reducers
 */
export const retailerReducer = retaielrSlice.reducer;