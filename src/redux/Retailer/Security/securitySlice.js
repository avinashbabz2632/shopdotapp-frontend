import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  changePasswordLoading: false,
};

const retailerSecuritySlice = createSlice({
  name: 'retailerSecurity',
  initialState,
  reducers: {
    onChangePassword: (state, action) => {
      state.changePasswordLoading = action.payload;
    },
    clearSecurityLogout: (state) => {
      state = initialState;
    },
  },
});

/**
 * Actions
 */
export const { onChangePassword, clearSecurityLogout } = retailerSecuritySlice.actions;

/**
 * Reducers
 */
export const retailerSecurityReducer = retailerSecuritySlice.reducer;
