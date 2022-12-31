import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userDetails = action.payload;
    },
    clearUserReducer: (state, action) => {
      state.userDetails = null;
    },
  },
});

/**
 * Actions
 */
export const { setUserInfo, clearUserReducer } = userSlice.actions;

/**
 * Reducers
 */
export const userReducer = userSlice.reducer;
