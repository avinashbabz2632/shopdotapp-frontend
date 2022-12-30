import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    businessDetails: {},
    representativeDetails: {},
    bankDetails: {},
};

const gettingPaidSlice = createSlice({
    name: 'gettingPaid',
    initialState,
    reducers: {
        setBusinessDetails: (state, action) => {
            state.businessDetails = action.payload;
        },
        setRepresentativeDetails: (state, action) => {
            state.representativeDetails = action.payload;
        },
        setBankDetails: (state, action) => {
            state.bankDetails = action.payload;
        },
        resetToInitial: (state) => {
            state.businessDetails = {};
            state.representativeDetails = {};
            state.bankDetails = {};
        },
    },
});

/**
 * Actions
 */
export const {
    setBusinessDetails,
    setRepresentativeDetails,
    setBankDetails,
    resetToInitial,
} = gettingPaidSlice.actions;

/**
 * Reducers
 */
export const gettingPaidReducer = gettingPaidSlice.reducer;
