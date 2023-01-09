import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  changePasswordLoading: false
};

const securitySlice = createSlice({
  name: 'security',
  initialState,
  reducers: {
    onChangePassword: (state, action) => {
      state.changePasswordLoading = action.payload;
    },
  },
});

/**
 * Actions
 */
export const {
  onChangePassword
} = securitySlice.actions;

/**
 * Reducers
 */
export const securityReducer = securitySlice.reducer;
