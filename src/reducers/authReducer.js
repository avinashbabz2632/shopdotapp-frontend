import * as types from '../actions/actionTypes';

const initialState = {
  isSignUp: false,
  isSignUp: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.IS_SIGN_UP:
      return Object.assign({}, state, {
        isSignUp: true,
      });
    case types.IS_SIGN_IN:
      return Object.assign({}, state, {
        isSignIn: true,
      });
    case types.CLEAR_AUTH_REDUCER:
      return Object.assign({}, state, {
        isSignUp: false,
        isSignIn: false,
      });
    default:
      return state;
  }
}
