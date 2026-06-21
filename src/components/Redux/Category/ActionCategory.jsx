import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
} from "./ActionTypes";

export const fetchCategory = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_CATEGORY_REQUEST,
    });

    try {
      const response = await fetch("/db.json");

      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات");
      }

      const data = await response.json();

      dispatch({
        type: FETCH_CATEGORY_SUCCESS,
        payload: data.category,
      });
    } catch (error) {
      dispatch({
        type: FETCH_CATEGORY_FAILURE,
        payload: error.message,
      });
    }
  };
};