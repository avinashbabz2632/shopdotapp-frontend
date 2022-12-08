import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import commonReducer from './commonReducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    userReducer,
    commonReducer,
  });

export default rootReducer;
