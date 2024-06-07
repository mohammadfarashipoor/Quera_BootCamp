import { Action } from "@/lib/type";
import {
  TWEET_CHANGE_FORM,
  TWEET_CHANGE_STATE,
  SET_TWEET_FORM_ERRORS,
  SET_TWEET_LOADING,
  TWEET_RESET,
} from "./constants";

const initialState = {
  tweetForm: {
    body: "",
    reply: "",
    tags: [],
  },
  tweetState: {
    thread: [],
    tweetId: "",
  },
  formErrors: {},
  isLoading: false,
};
const tweetReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case TWEET_CHANGE_FORM:
      return {
        ...state,
        tweetForm: { ...state.tweetForm, ...action.payload },
      };
    case TWEET_CHANGE_STATE:
      return {
        ...state,
        tweetState: { ...state.tweetState, ...action.payload },
      };
    case SET_TWEET_FORM_ERRORS:
      return {
        ...state,
        formErrors: action.payload,
      };
    case SET_TWEET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case TWEET_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export default tweetReducer;
