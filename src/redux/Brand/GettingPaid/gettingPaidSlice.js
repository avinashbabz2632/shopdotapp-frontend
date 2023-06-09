import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  businessDetails: {},
  representativeDetails: [],
  bankDetails: {},
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
    resetToInitial: (state) => {
      state.businessDetails = {};
      state.representativeDetails = [];
      state.bankDetails = {};
      state.gettingPaidPreferance = {};
    },

    setGettingPaidPreferance: (state, action) => {
      state.gettingPaidPreferance = action.payload;
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
  setBankDetails,
  resetToInitial,
  setGettingPaidPreferance,
  clearPaidLogout,
} = gettingPaidSlice.actions;

/**
 * Reducers
 */
export const gettingPaidReducer = gettingPaidSlice.reducer;
