import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore, combineReducers } from "redux";
import { userReducer } from "./user-reducer/reducer";
import { otherReducer } from './other-reducer/reducer';

const rootReducer = combineReducers({
  userReducer,
  otherReducer
});

export const classicReduxStoreConfig = createStore(rootReducer, composeWithDevTools(applyMiddleware()));