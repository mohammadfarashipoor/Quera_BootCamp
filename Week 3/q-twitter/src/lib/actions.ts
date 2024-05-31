import { bindActionCreators } from "redux";
import { Dispatch } from "./type";
import * as signup from "@/containers/Signup/actions";
export default function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      ...signup,
    },
    dispatch
  );
}
