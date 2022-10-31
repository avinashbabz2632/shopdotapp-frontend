import * as types from '../actions/actionTypes';

const initialState = {
  isUserRoleUpdated: false,
  isUserPlatformUpdated: false,
  isBrandProfileUpdate: false,
  isRetailerProfileUpdate: false,
  platformType: '',
  userDetails: { id: null },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.USER_DETAILS:
      return Object.assign({}, state, {
        userDetails: action.userDetails,
      });
    case types.IS_USER_ROLE_UPDATED:
      return Object.assign({}, state, {
        isUserRoleUpdated: true,
      });
    case types.IS_USER_PLATFORM_UPDATED:
      return Object.assign({}, state, {
        isUserPlatformUpdated: true,
        platformType: action.platformType,
      });
    case types.IS_BRAND_PROFILE_UPDATED:
      return Object.assign({}, state, {
        isBrandProfileUpdate: true,
      });
    case types.IS_RETAILER_PROFILE_UPDATED:
      return Object.assign({}, state, {
        isRetailerProfileUpdate: true,
      });
    case types.CLEAR_USER_REDUCER:
      return Object.assign({}, state, {
        isUserRoleUpdated: false,
        isUserPlatformUpdated: false,
        isBrandProfileUpdate: false,
        isRetailerProfileUpdate: false,
        platformType: '',
      });
    default:
      return state;
  }
}
