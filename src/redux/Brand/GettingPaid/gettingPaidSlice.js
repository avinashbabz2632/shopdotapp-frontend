import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  businessDetails: {},
  representativeDetails: {},
  bankDetails: {},
  paidDetails: {},
  gettingPaidPreferance: {},
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
      console.log(action.payload, 'action.payload');
      state.paidDetails = action.payload;
    },
    setGettingPaidPreferance: (state, action) => {
      state.gettingPaidPreferance = action.payload;
    },
    resetToInitial: (state) => {
      state.businessDetails = {};
      state.representativeDetails = {};
      state.bankDetails = {};
    },
    clearPaidLogout: (state) => {
      state = initialState;
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
  setGettingPaidPreferance,
  clearPaidLogout,
} = gettingPaidSlice.actions;

/**
 * Reducers
 */
export const gettingPaidReducer = gettingPaidSlice.reducer;
