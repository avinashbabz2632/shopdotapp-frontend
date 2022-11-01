import * as types from '../actions/actionTypes';

const initialState = {
  categoryData: [],
  valueData: [],
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case types.CATEGORY:
      return Object.assign({}, state, {
        categoryData: action.categoryData,
      });
    case types.VALUES:
      return Object.assign({}, state, {
        valueData: action.valueData,
      });

    case types.CLEAR_COMMON_REDUCER:
      return Object.assign({}, state, {
        categoryData: [],
        valueData: [],
      });
    default:
      return state;
  }
}
