/**
 * The JWT auth token
 * @param {RootState} state the root state
 * @returns {string | undefined} the token
 */
export const selectToken = (state) => state.auth.authToken;

/**
 * The current logged in user
 * @param {RootState} state the root state
 * @returns {object | undefined} the customer
 */
export const selectLoggedInUser = (state) => state.auth.user;

/**
 * Indicates if it is loading
 * @param {RootState} state the root state
 * @returns {boolean} true if is loading
 */
export const selectIsLoading = (state) => state.auth.isLoading;
