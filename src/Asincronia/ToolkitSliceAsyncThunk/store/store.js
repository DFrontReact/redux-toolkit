import { configureStore, combineReducers } from '@reduxjs/toolkit';
import pokemonSlice from "./pokemon-slice";

const rootReducer = combineReducers({
  pokemonSlice
});

export const reduxToolkitStoreConfig = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
})

export const getPokemonStore = (state) => state.pokemonSlice;