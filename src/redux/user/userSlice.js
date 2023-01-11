import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails: null,
  personalizeLoading: false
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
    setPersonalizeLoading: () => {
      state.personalizeLoading = action.payload;
    }
  },
});

/**
 * Actions
 */
export const { setUserInfo, clearUserReducer, setPersonalizeLoading } = userSlice.actions;

/**
 * Reducers
 */
export const userReducer = userSlice.reducer;
