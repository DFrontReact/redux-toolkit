import { actionsTypes } from "./actionTypes";

export const setUserName = (payload) => ({
  type: actionsTypes.SET_USER_NAME,
  payload,
});

export const setUserAge = (payload) => ({
  type: actionsTypes.SET_USER_AGE,
  payload,
});

export const setUserMail = (payload) => ({
  type: actionsTypes.SET_USER_MAIL,
  payload,
});