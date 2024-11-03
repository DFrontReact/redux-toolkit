import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { otherReducer } from './other-reducer/reducer';
import { userReducer } from "./user-reducer/reducer";

const rootReducer = combineReducers({
  userReducer,
  otherReducer
});

export const reduxToolkitStoreConfig = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
})
