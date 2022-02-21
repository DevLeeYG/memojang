import { combineReducers } from 'redux';
import userReducer from './userAuth';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userAuth from './userAuth';

// const persistConfig = {
//   key: 'root',

//   storage,
// };

const rootReducer = combineReducers({ userReducer });

export default rootReducer;

// export default persistReducer(persistConfig, rootReducer);
