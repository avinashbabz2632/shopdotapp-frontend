import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isLoginSuccess: false,
  isRegisterSuccess: false,
  isVerifyEmailSent: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    setLoggedIn: (state, action) => {
      state.isLoginSuccess = true;
      state.isLoggedIn = true;
    },
    setRegister: (state, action) => {
      state.isRegisterSuccess = true;
      state.isLoggedIn = true;
    },
    setVerifyEmail: (state, action) => {
      state.isVerifyEmailSent = false;
    },
    clearAuthReducer: (state, action) => {
      state.isLoginSuccess = false;
      state.isRegisterSuccess = false;
      state.isVerifyEmailSent = false;
    },
  },
});

/**
 * Actions
 */
export const { logOut, setLoggedIn, setRegister, clearAuthReducer } =
  authSlice.actions;

/**
 * Reducers
 */
export const authReducer = authSlice.reducer;
