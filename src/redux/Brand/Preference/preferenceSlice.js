import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  preferenceData: {},
};

const preferenceSlice = createSlice({
  name: 'preference',
  initialState,
  reducers: {
    setBrandPreferenceData: (state, action) => {
      state.preferenceData = action.payload;
    },
  },
});

/**
 * Actions
 */
export const { setBrandPreferenceData } = preferenceSlice.actions;

/**
 * Reducers
 */
export const preferenceReducer = preferenceSlice.reducer;
