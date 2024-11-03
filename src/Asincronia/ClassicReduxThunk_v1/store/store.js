import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk";
import { pokemonReducer } from "./counter-pokemon-reducer/reducer";
import { initialStateCounterPokemon } from "./counter-pokemon-reducer/initial-state";

const initialState = {
  pokemonReducer: initialStateCounterPokemon,
}

const rootReducer = combineReducers({
  pokemonReducer,
});

const middlewares = [thunk];

export const classicReduxStoreConfig = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export const getPokemonReducer = (state) => state.pokemonReducer;