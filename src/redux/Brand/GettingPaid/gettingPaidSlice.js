import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  businessDetails: {},
  representativeDetails: {},
  bankDetails: {},
  paidDetails: {},
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
    setPaidCompleted: (state, action) => {
      state.bankDetails = action.payload;
    },
    setPaidDetails: (state, action) => {
      state.paidDetails = action.payload;
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
  setPaidCompleted,
  setBankDetails,
  resetToInitial,
  setPaidDetails,
} = gettingPaidSlice.actions;

/**
 * Reducers
 */
export const gettingPaidReducer = gettingPaidSlice.reducer;
