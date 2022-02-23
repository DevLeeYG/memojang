import { combineReducers } from 'redux';
import userReducer from './userAuth';
import acReducer from './accReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userAuth from './userAuth';
export type RootState = ReturnType<typeof rootReducer>;
// const persistConfig = {
//   key: 'root',

//   storage,
// };

const rootReducer = combineReducers({ userReducer, acReducer });

export default rootReducer;

// export default persistReducer(persistConfig, rootReducer);
