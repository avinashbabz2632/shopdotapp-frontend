import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    userReducer,
  });

export default rootReducer;
