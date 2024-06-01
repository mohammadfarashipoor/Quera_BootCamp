import {
  LOGIN_CHANGE,
  LOGIN_RESET,
  SET_LOGIN_LOADING,
  SET_LOGIN_FORM_ERRORS,
} from "./constants";

const initialState = {
  loginFormData: {
    password: "",
    username: "",
  },
  formErrors: {},
  isLoading: false,
};
import { Action } from "@/lib/type";
const loginReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOGIN_CHANGE:
      return {
        ...state,
        loginFormData: { ...state.loginFormData, ...action.payload },
      };
    case SET_LOGIN_FORM_ERRORS:
      return {
        ...state,
        formErrors: action.payload,
      };
    case SET_LOGIN_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case LOGIN_RESET:
      return {
        ...state,
        signupFormData: {
          username: "",
          password: "",
        },
        formErrors: {},
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
