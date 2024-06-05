import { SET_FEED_LOADING, FEED_CHANGE } from "./constants";
import { Dispatch } from "@/lib/type";
import Axios from "@/utils/axios";
import handleError from "@/utils/error";

const feedChange = (dataFeed: any) => {
  return {
    type: FEED_CHANGE,
    payload: dataFeed,
  };
};

export const getFeed = (username: string) => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      dispatch({ type: SET_FEED_LOADING, payload: true });
      const response = await Axios.post("/feed/", username);
      feedChange(response.data);
    } catch (error) {
      const title = `به نظر مشکلی پیش آمده لطفا مدتی بعد تلاش کنید`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_FEED_LOADING, payload: false });
    }
  };
};
