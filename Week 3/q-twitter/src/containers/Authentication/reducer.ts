import { Action } from "@/lib/type";
import { SET_AUTH, CLEAR_AUTH } from "./constants";

const initialState = {
  authenticated: false,
  isLoading: false,
};

const authenticationReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        authenticated: true,
      };
    case CLEAR_AUTH:
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
