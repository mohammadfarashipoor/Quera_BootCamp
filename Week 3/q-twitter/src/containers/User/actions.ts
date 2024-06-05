import { SET_USER_LOADING, USER_CHANGE, USER_CHANGE_INFO } from "./constants";
import { Dispatch } from "@/lib/type";
import Axios from "@/utils/axios";
import handleError from "@/utils/error";
import { toast } from "react-toastify";

const userChange = (dataUser) => {
  return {
    type: USER_CHANGE,
    payload: dataUser,
  };
};

export const getUser = (username: string) => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      dispatch({ type: SET_USER_LOADING, payload: true });
      const response = await Axios.get(`/user/${username}`);
      userChange(response.data);
    } catch (error) {
      const title = `به نظر مشکلی پیش آمده لطفا مدتی بعد تلاش کنید`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_USER_LOADING, payload: false });
    }
  };
};
export const getUserInfo = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const username = localStorage.getItem("username");
      dispatch({ type: SET_USER_LOADING, payload: true });
      const response = await Axios.get(`/user/${username}`);
      dispatch({ type: USER_CHANGE_INFO, payload: response.data });
    } catch (error) {
      const title = `به نظر مشکلی پیش آمده لطفا مدتی بعد تلاش کنید`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_USER_LOADING, payload: false });
    }
  };
};
export const followUser = (username: string) => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      dispatch({ type: SET_USER_LOADING, payload: true });
      const response = await Axios.post(`/follow/`, username);
      toast.success(`با موفقیت توییت انجام شد .`);
    } catch (error) {
      const title = `به نظر مشکلی پیش آمده لطفا مدتی بعد تلاش کنید`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_USER_LOADING, payload: false });
    }
  };
};
