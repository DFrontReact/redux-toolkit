import { actionsTypes } from "./actionTypes";
import { initialOtherState } from "./initial-state";

export const otherReducer = (state = initialOtherState, action) => {
  switch (action.type) {
    case actionsTypes.SET_SOME_VALUE:
      return {
        ...state,
        someValue: action.payload,
      };
    default:
      return state;
  }
};
