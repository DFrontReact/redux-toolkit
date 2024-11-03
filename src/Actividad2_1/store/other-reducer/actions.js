import { actionsTypes } from "./actionTypes";

export const setSomeValue = (payload) => ({
  type: actionsTypes.SET_SOME_VALUE,
  payload,
});