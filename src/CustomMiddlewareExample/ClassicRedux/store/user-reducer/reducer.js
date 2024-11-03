import { actionsTypes } from "./actionTypes";
import { initialUserState } from "./initial-state";

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionsTypes.SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case actionsTypes.SET_USER_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case actionsTypes.SET_USER_MAIL:
      return {
        ...state,
        mail: action.payload,
      };
    default:
      return state;
  }
};
