import {
  SIGNUP_CHANGE,
  SIGNUP_RESET,
  SET_SIGNUP_LOADING,
  SET_SIGNUP_FORM_ERRORS,
} from "./constants";

const initialState = {
  signupFormData: {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    username: "",
  },
  formErrors: {},
  isLoading: false,
};
import { Action } from "@/lib/type";
const signupReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SIGNUP_CHANGE:
      return {
        ...state,
        signupFormData: { ...state.signupFormData, ...action.payload },
      };
    case SET_SIGNUP_FORM_ERRORS:
      return {
        ...state,
        formErrors: action.payload,
      };
    case SET_SIGNUP_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SIGNUP_RESET:
      return {
        ...state,
        signupFormData: {
          email: "",
          firstName: "",
          username: "",
          lastName: "",
          password: "",
        },
        formErrors: {},
        isLoading: false,
      };
    default:
      return state;
  }
};

export default signupReducer;
