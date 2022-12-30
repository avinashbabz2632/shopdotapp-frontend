import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    setLoggedInUserInfo: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    clearAuthReducer: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

/**
 * Actions
 */
export const { logOut, setLoggedInUserInfo, clearAuthReducer } =
  authSlice.actions;

/**
 * Reducers
 */
export const authReducer = authSlice.reducer;
