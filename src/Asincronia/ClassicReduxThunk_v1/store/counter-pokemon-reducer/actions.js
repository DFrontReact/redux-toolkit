import { actionsTypes } from "./actionTypes";

export const setPokemon = (payload) => ({
  type: actionsTypes.SET_POKEMON,
  payload,
});

export const increaseCounter = (payload) => ({
  type: actionsTypes.INCRESE_COUNTER,
  payload,
});

export const decreaseCounter = (payload) => ({
  type: actionsTypes.DECRESE_COUNTER,
  payload,
});