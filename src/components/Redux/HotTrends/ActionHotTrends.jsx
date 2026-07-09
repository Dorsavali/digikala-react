import {
  SET_HOTTRENDS,
  SET_LOADING,
  SET_ERROR,
} from "./ActionTypes";

const API_URL = "http://localhost:3000/hotTrends";

export const setHotTrends = (hotTrends) => {
  return {
    type: SET_HOTTRENDS,
    payload: hotTrends,
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

export const fetchHotTrends = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));

      const data = await fetch(API_URL);
      const res = await data.json();

      dispatch(setHotTrends(res || []));
      dispatch(setError(""));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};
