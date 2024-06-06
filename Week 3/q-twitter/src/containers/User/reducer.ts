import { Action } from "@/lib/type";
import {
  USER_CHANGE,
  SET_USER_LOADING,
  USER_CHANGE_INFO,
  USER_SEARCH_VALUE,
} from "./constants";

const initialState = {
  userInfo: {},
  userState: {},
  searchValue: "",
  isLoading: false,
};
const tweetReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case USER_CHANGE:
      return {
        ...state,
        userState: { ...action.payload },
      };
    case USER_CHANGE_INFO:
      return {
        ...state,
        userInfo: { ...action.payload },
      };

    case SET_USER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case USER_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};
export default tweetReducer;
