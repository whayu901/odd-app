import { Dispatch, GetState } from "../types";
import { axios } from "../../utils";
import { baseURL } from "../../configs";

interface Parameters {
  data?: any;
  id?: string;
}

export const getProducts =
  () => async (dispatch: Dispatch, getState: GetState) => {
    try {
      dispatch({ type: "GET_PRODUCT_PENDING" });

      const url: any = `${baseURL.APP_ENV_API_MAKEUP}`;
      const response: any = await axios.Get({
        url,
      });

      dispatch({
        type: "GET_PRODUCT_SUCCESS",
        payload: {
          data: response.data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: "GET_PRODUCT_ERROR",
        payload: {
          error: `${error.response.data.message} - ${error.response.data.statusCode}`,
        },
      });
    }
  };

export const likeProduct =
  ({ id }: Parameters) =>
  async (dispatch: Dispatch, getState: GetState) => {
    try {
      dispatch({ type: "GET_LIKE_PRODUCT_PENDING" });

      const url: any = `${baseURL.APP_ENV_API_ODDLE}/account/${baseURL.APP_ACCOUNT_NAME}/${id}`;
      await axios.Patch({
        url,
        token: baseURL.APP_API_KEY,
      });

      dispatch({ type: "GET_LIKE_PRODUCT_SUCCESS" });
    } catch (error: any) {
      dispatch({
        type: "GET_LIKE_PRODUCT_ERROR",
        payload: {
          error: `${error.response.data.message} - ${error.response.data.statusCode}`,
        },
      });
    }
  };

export const unLikeProduct =
  ({ id }: Parameters) =>
  async (dispatch: Dispatch, getState: GetState) => {
    try {
      dispatch({ type: "GET_UNLIKE_PRODUCT_PENDING" });

      const url: any = `${baseURL.APP_ENV_API_ODDLE}/account/${baseURL.APP_ACCOUNT_NAME}/${id}`;
      await axios.Delete({
        url,
        token: baseURL.APP_API_KEY,
      });

      dispatch({ type: "GET_UNLIKE_PRODUCT_SUCCESS" });
    } catch (error: any) {
      dispatch({
        type: "GET_UNLIKE_PRODUCT_ERROR",
        payload: {
          error: `${error.response.data.message} - ${error.response.data.statusCode}`,
        },
      });
    }
  };
