import { toast } from "react-toastify";
import Axios from "@/utils/axios";

import {
  SIGNUP_CHANGE,
  SIGNUP_RESET,
  SET_SIGNUP_LOADING,
  SET_SIGNUP_FORM_ERRORS,
} from "./constants";

import setToken from "@/utils/token";
import handleError from "@/utils/error";
import { allFieldsValidation } from "@/utils/validation";

import { MySignupFormData, MySignupNameFormField } from "./type";
import { Dispatch } from "@/lib/type";

export const signupChange = (name: MySignupNameFormField, value: string) => {
  let formData: MySignupFormData = {};
  formData[name] = value;

  return {
    type: SIGNUP_CHANGE,
    payload: formData,
  };
};

export const signUp = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const rules = {
        email: "required|email",
        password: "required|min:6",
        name: "required",
        lastName: "required",
        username: "required",
      };

      const newUser = getState().signup.signupFormData;

      const { isValid, errors }: { isValid?: boolean; errors?: any } =
        allFieldsValidation(newUser, rules, {
          "required.email": "ایمیل خود را وارد کنید",
          "required.password": "رمز عبور خود را وارد کنید",
          "min.password": "رمز عبور باید بیش از شش حرف باشد",
          "required.name": "نام خود را وارد کنید",
          "required.username": "نام کاربری خود را وارد کنید",
        });
      if (!isValid) {
        return dispatch({ type: SET_SIGNUP_FORM_ERRORS, payload: errors });
      }
      dispatch({ type: SET_SIGNUP_LOADING, payload: true });
      await Axios.post("/signup", newUser);
      routerHook().push("/auth/signup");

      toast.success(`با موفقیت ثبت نام انجام شد .`);
      dispatch({ type: SIGNUP_RESET });
    } catch (error) {
      const title = `به نظر مشکلی پیش آمده لطفا مدتی بعد ثبت نام کنید`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_SIGNUP_LOADING, payload: false });
    }
  };
};
