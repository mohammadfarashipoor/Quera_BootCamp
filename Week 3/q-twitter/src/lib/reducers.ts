import { combineReducers } from "redux";
import signupReducer from "@/containers/Signup/reducer";

const rootReducer = combineReducers({
  signup: signupReducer,
});
export default rootReducer;
