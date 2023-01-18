import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isLoginSuccess: false,
  isRegisterSuccess: false,
  isVerifyEmailSent: false,
  user: null,
  access_token: '',
  refresh_token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.isLoggedIn = false;
      state.access_token = '';
      state.refresh_token = '';
    },
    setLoggedIn: (state, action) => {
      state.isLoginSuccess = true;
      state.isLoggedIn = true;
    },
    setToken: (state, action) => {
      state.access_token = action.access_token;
      state.refresh_token = action.refresh_token;
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
export const { logOut, setLoggedIn, setRegister, clearAuthReducer, setToken } =
  authSlice.actions;

/**
 * Reducers
 */
export const authReducer = authSlice.reducer;
