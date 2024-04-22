// combineReducers: 다수의 reducer를 하나로 묶어준다
import { combineReducers } from '@reduxjs/toolkit';
// import { countReducer } from './modules/CountReducer';
import { isLoggedInReducer } from './modules/isLoggedInReducer';
import { bankReducer } from './modules/BackReducer';
import countReducer from './modules/CountSlice';

const rootReducer = combineReducers({
  count: countReducer,
  isLoggedIn: isLoggedInReducer,
  money: bankReducer,
});

export default rootReducer;
