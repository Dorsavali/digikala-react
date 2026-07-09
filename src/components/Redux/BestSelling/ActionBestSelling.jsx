import {
  SET_BESTSELLING,
  SET_LOADING,
  SET_ERROR,
} from "./ActionTypes";

const API_URL = "http://localhost:3000/bestSelling";

export const setBestSelling = (bestSelling) => {
  return {
    type: SET_BESTSELLING,
    payload: bestSelling,
  };
};

export const setLoading = (status) => {
  return {
    type: SET_LOADING,
    payload: status,
  };
};

export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

export const fetchBestSelling = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));

      const data = await fetch(API_URL);
      const res = await data.json();

      dispatch(setBestSelling(res || []));
      dispatch(setError(""));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};
