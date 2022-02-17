import { combineReducers } from 'redux';
import userReducer from './userAuth';

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
