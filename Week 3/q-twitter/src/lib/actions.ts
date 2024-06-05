import { bindActionCreators } from "redux";
import { Dispatch } from "./type";
import * as signup from "@/containers/Signup/actions";
import * as login from "@/containers/Signin/actions";
import * as auth from "@/containers/Authentication/actions";
import * as tweet from "@/containers/Tweet/actions";
import * as feed from "@/containers/Feed/actions";
import * as user from "@/containers/User/actions";
export default function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      ...auth,
      ...signup,
      ...login,
      ...tweet,
      ...feed,
      ...user,
    },
    dispatch
  );
}
