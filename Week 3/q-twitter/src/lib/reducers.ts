import { combineReducers } from "redux";
import signupReducer from "@/containers/Signup/reducer";
import signinReducer from "@/containers/Signin/reducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: signinReducer,
});
export default rootReducer;
