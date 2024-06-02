import { toast } from "react-toastify";
import Axios from "@/utils/axios";
import routerHook from "@/utils/navigation";
import {
  LOGIN_CHANGE,
  LOGIN_RESET,
  SET_LOGIN_LOADING,
  SET_LOGIN_FORM_ERRORS,
} from "./constants";

import setToken from "@/utils/token";
import handleError from "@/utils/error";
import { allFieldsValidation } from "@/utils/validation";

import { MySigninFormData, MySigninNameFormField } from "./type";
import { Dispatch } from "@/lib/type";

export const loginChange = (name: MySigninNameFormField, value: string) => {
  let formData: MySigninFormData = {
    password: "",
    username: "",
  };
  formData[name] = value;

  return {
    type: LOGIN_CHANGE,
    payload: formData,
  };
};

export const login = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const rules = {
        password: "required|min:6",
        username: "required",
      };

      const user = getState().login.loginFormData;

      const { isValid, errors }: { isValid?: boolean; errors?: any } =
        allFieldsValidation(user, rules, {
          "required.password": "رمز عبور خود را وارد کنید",
          "min.password": "رمز عبور باید بیش از شش حرف باشد",
          "required.username": "نام کاربری خود را وارد کنید",
        });
      if (!isValid) {
        return dispatch({ type: SET_LOGIN_FORM_ERRORS, payload: errors });
      }
      dispatch({ type: SET_LOGIN_LOADING, payload: true });
      const response = await Axios.post("/auth/login", user);
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      toast.success(`با موفقیت وارد شدید .`);
      dispatch({ type: LOGIN_RESET });
    } catch (error) {
      const title = `به نظر مشکلی پیش آمده لطفا مدتی بعد ثبت نام کنید`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_LOGIN_LOADING, payload: false });
    }
  };
};
export const signOut = () => {
  return (dispatch: Dispatch, getState: any) => {
    "use client";
    localStorage.removeItem("token");
    toast.warning(`شما خارج شدید`);
    routerHook().push("/login");
  };
};
