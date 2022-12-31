import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isLoginSuccess: false,
  isRegisterSuccess: false,
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
    clearAuthReducer: (state, action) => {
      state.isLoginSuccess = false;
      state.isRegisterSuccess = false;
    },
  },
});

/**
 * Actions
 */
export const { logOut, setLoggedIn, clearAuthReducer } = authSlice.actions;

/**
 * Reducers
 */
export const authReducer = authSlice.reducer;
