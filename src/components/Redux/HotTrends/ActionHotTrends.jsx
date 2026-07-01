import {
  SET_HOTTRENDS,
  SET_LOADING,
  SET_ERROR,
} from "./ActionTypes";

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
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();

      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setHotTrends(res.hotTrends));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};