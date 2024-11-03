import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from "./user-slice";

const rootReducer = combineReducers({
  userSlice
});

export const reduxToolkitStoreConfig = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
})
