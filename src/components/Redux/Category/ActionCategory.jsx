import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
} from "./ActionTypes";
const API_URL = "http://localhost:3000/category";
export const fetchCategory = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_CATEGORY_REQUEST,
    });

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات");
      }

      const data = await response.json();

      dispatch({
        type: FETCH_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_CATEGORY_FAILURE,
        payload: error.message,
      });
    }
  };
};