import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from "./user-slice";

const rootReducer = combineReducers({
  userSlice
});

export const reduxToolkitStoreConfig = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
})

//es buena practica, tal y como indica la documnetación, definir un useAppDispatch y un useAppSelector por si en algún momento se cambia de la librería de redux a otra
export const useAppSelector = useSelector
export const useAppDispatch = useDispatch;

//es buena practica definir getters para acceder a las partes del estado
export const getUserStore = (state) => state.userSlice;