import { SET_SUGGESTED, SET_LOADING, SET_ERROR } from "./ActionTypes";

const API_URL = "https://dorsavali.github.io/db.json/db.json/suggested";

export const setSuggested = (suggested) => {
  return {
    type: SET_SUGGESTED,
    payload: suggested,
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

export const fetchSuggested = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));

      const data = await fetch(API_URL);
      const res = await data.json();

      dispatch(setSuggested(res || []));
      dispatch(setError(""));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};
