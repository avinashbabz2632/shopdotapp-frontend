import * as authActions from './authActions';
import * as userActions from './userActions';
import * as commonActions from './commonActions';

export const ActionCreators = Object.assign(
  {},
  authActions,
  userActions,
  commonActions
);
