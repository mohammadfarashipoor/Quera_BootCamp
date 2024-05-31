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
  let formData: MySignupFormData = {
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: "",
  };
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
        firstName: "required",
        lastName: "required",
      };

      const newUser = getState().signup.signupFormData;

      const { isValid, errors }: { isValid?: boolean; errors?: any } =
        allFieldsValidation(newUser, rules, {
          "required.email": "ایمیل خود را وارد کنید",
          "required.password": "رمز عبور خود را وارد کنید",
          "min.password": "رمز عبور باید بیش از شش حرف باشد",
          "required.firstName": "نام خود را وارد کنید",
          "required.lastName": "نام خانوادگی خود را وارد کنید",
        });
      if (!isValid) {
        return dispatch({ type: SET_SIGNUP_FORM_ERRORS, payload: errors });
      }
      dispatch({ type: SET_SIGNUP_LOADING, payload: true });
      const response = await Axios.post("/auth/register", newUser);
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
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
