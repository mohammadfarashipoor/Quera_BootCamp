import {
  TWEET_CHANGE_FORM,
  TWEET_CHANGE_STATE,
  SET_TWEET_FORM_ERRORS,
  SET_TWEET_LOADING,
  TWEET_RESET,
} from "./constants";
import { Dispatch } from "@/lib/type";
import { allFieldsValidation } from "@/utils/validation";
import Axios from "@/utils/axios";
import handleError from "@/utils/error";
import { toast } from "react-toastify";
import { getFeed } from "../Feed/actions";

export const tweetChange = (name: string, value: string | string[]) => {
  let tweetData: any = {};
  tweetData[name] = value;
  return {
    type: TWEET_CHANGE_FORM,
    payload: tweetData,
  };
};
export const newTweet = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const rules = {
        body: "required",
      };
      const newTweet = getState().tweet.tweetForm;
      const username = getState().user.userInfo;
      const { isValid, errors }: { isValid?: boolean; errors?: any } =
        allFieldsValidation(newTweet, rules, {
          "required.body": "پیام خود را وارد کنید",
        });
      if (!isValid) {
        return dispatch({ type: SET_TWEET_FORM_ERRORS, payload: errors });
      }
      dispatch({ type: SET_TWEET_LOADING, payload: true });
      const response = await Axios.post("/tweet/", newTweet);
      getFeed(username);
      toast.success(`با موفقیت توییت انجام شد .`);
      dispatch({ type: TWEET_RESET });
    } catch (error) {
      const title = `به نظر مشکلی پیش آمده لطفا مدتی بعد تلاش کنید`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_TWEET_LOADING, payload: false });
    }
  };
};
export const getTweet = async (tweetId: string) => {
  // return async (dispatch: Dispatch, getState: any) => {
  try {
    // dispatch({ type: SET_TWEET_LOADING, payload: true });
    const response = await Axios.get(`/tweets/${tweetId}`);
    // dispatch({ type: TWEET_CHANGE_STATE, payload: response.data });
    return response.data;
  } catch (error) {
    const title = `به نظر مشکلی پیش آمده لطفا مدتی بعد تلاش کنید`;
    handleError(error, null, title);
  } finally {
    // dispatch({ type: SET_TWEET_LOADING, payload: false });
  }
  // };
};
export const likeTweet = (tweetId: string) => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      dispatch({ type: SET_TWEET_LOADING, payload: true });
      const response = await Axios.put(`/like`, tweetId);
      dispatch({ type: TWEET_CHANGE_STATE, payload: response.data });
    } catch (error) {
      const title = `به نظر مشکلی پیش آمده لطفا مدتی بعد تلاش کنید`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_TWEET_LOADING, payload: false });
    }
  };
};
export const deleteTweet = (tweetId: any) => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      dispatch({ type: SET_TWEET_LOADING, payload: true });
      await Axios.delete(`/delete_tweet`, tweetId);
    } catch (error) {
      const title = `به نظر مشکلی پیش آمده لطفا مدتی بعد تلاش کنید`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_TWEET_LOADING, payload: false });
    }
  };
};