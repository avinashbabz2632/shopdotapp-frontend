import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    authToken: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.isLoading = false;
            state.authToken = null;
            state.user = null;
        },
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        },
        setLoggedInUserInfo: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

/**
 * Actions
 */
export const { logOut, setAuthToken, setLoggedInUserInfo, setLoading } =
    authSlice.actions;

/**
 * Reducers
 */
export const authReducer = authSlice.reducer;
