import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function authReducer(
  state = initialState.userReducerInitial,
  action
) {
  switch (action.type) {
    case types.IS_SIGN_UP:
      return Object.assign({}, state, {
        isSignUp: true,
      });
    case types.CLEAR_AUTH_REDUCER:
      return Object.assign({}, state, {
        isSignUp: false,
      });
    default:
      return state;
  }
}

