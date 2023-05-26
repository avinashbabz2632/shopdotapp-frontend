import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    statusViseFilter: [],
    categoryFilter: [],
    stateFilter: [],
    salesFilter: {},
};

const retaielrSlice = createSlice({
    name: 'retailerSlice',
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
} = retaielrSlice.actions;

/**
 * Reducers
 */
export const retailerReducer = retaielrSlice.reducer;
