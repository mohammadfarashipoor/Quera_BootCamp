import { Action } from "@/lib/type";
import { FEED_CHANGE, SET_FEED_LOADING } from "./constants";

const initialState = {
  feedState: {},
  isLoading: false,
};
const tweetReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FEED_CHANGE:
      return {
        ...state,
        feedState: { ...action.payload },
      };

    case SET_FEED_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
export default tweetReducer;
