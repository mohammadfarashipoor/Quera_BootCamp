import { combineReducers } from "redux";
import authReducer from "@/containers/Authentication/reducer";
import signupReducer from "@/containers/Signup/reducer";
import signinReducer from "@/containers/Signin/reducer";
import tweetReducer from "@/containers/Tweet/reducer";
import feedReducer from "@/containers/Feed/reducer";
import userReducer from "@/containers/User/reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
  login: signinReducer,
  tweet: tweetReducer,
  feed: feedReducer,
  user: userReducer,
});
export default rootReducer;
