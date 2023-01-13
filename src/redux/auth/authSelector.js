export const selectLoggedInUser = (state) => state.auth.user;
export const loginSuccess = (state) => state.auth.isLoginSuccess;
export const isLoggedIn = (state) => state.auth.isLoggedIn;
export const registerSuccess = (state) => state.auth.isRegisterSuccess;
export const selectAccessToken = (state) => state.auth.access_token;
export const selectRefreshToken = (state) => state.auth.refresh_token;
