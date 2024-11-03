import { configureStore, combineReducers } from '@reduxjs/toolkit';
import pokemonSlice from "./pokemon-slice";
import { apiSlice } from './api-slice';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  pokemonSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const reduxToolkitStoreConfig = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

setupListeners(reduxToolkitStoreConfig.dispatch)

export const getPokemonStore = (state) => state.pokemonSlice;