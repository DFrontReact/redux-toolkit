import { actionsTypes } from "./actionTypes";
import { initialStateCounterPokemon } from "./initial-state";

export const pokemonReducer = (state = initialStateCounterPokemon, action) => {
  switch (action.type) {
    case actionsTypes.SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    case actionsTypes.INCRESE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionsTypes.DECRESE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
