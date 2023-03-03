import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails: null,
  personalizeLoading: false,
  roleUpdated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userDetails = action.payload;
    },
    setRoleUpdated: (state, action) => {
      state.roleUpdated = true;
    },
    clearUserReducer: (state, action) => {
      state.userDetails = null;
    },
    clearUpdateReducer: (state, action) => {
      state.roleUpdated = false;
    },
    setPersonalizeLoading: () => {
      state.personalizeLoading = action.payload;
    },
  },
});

/**
 * Actions
 */
export const {
  setUserInfo,
  clearUserReducer,
  setPersonalizeLoading,
  clearUpdateReducer,
} = userSlice.actions;

/**
 * Reducers
 */
export const userReducer = userSlice.reducer;
