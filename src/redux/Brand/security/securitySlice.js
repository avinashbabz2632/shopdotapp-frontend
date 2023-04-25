import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  changePasswordLoading: false,
};

const securitySlice = createSlice({
  name: 'security',
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
export const { onChangePassword, clearSecurityLogout } = securitySlice.actions;

/**
 * Reducers
 */
export const securityReducer = securitySlice.reducer;
