import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails: null,
  personalizeLoading: false,
  roleUpdated: false,
  notificationData: {},
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
    setPersonalizeLoading: () => {
      state.personalizeLoading = action.payload;
    },
    setNotificationData: (state, action) => {
      state.notificationData = action.payload;
    },
    clearUserLogout: (state) => {
      state = initialState;
    },
  },
});

/**
 * Actions
 */
export const {
  setUserInfo,
  setRoleUpdated,
  clearUserReducer,
  setPersonalizeLoading,
  clearUpdateReducer,
  setNotificationData,
  clearUserLogout,
} = userSlice.actions;

/**
 * Reducers
 */
export const userReducer = userSlice.reducer;
