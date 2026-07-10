import { SET_AMAZINGOFFER, SET_LOADING, SET_ERROR } from "./ActionTypes";

const API_URL = "https://dorsavali.github.io/db.json/db.json/amazingOffer";

export const setAmazingOffer = (amazingOffer) => {
  return {
    type: SET_AMAZINGOFFER,
    payload: amazingOffer,
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

export const fetchAmazingOffer = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));

      const data = await fetch(API_URL);
      const res = await data.json();

      dispatch(setAmazingOffer(res || []));
      dispatch(setError(""));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};
