import {
  SET_AMAZING_MARKET,
  SET_LOADING,
  SET_ERROR,
} from "./ActionTypes";

const API_URL = "http://localhost:3000/amazingMarket";

export const setAmazingMarket = (amazingMarket) => {
  return {
    type: SET_AMAZING_MARKET,
    payload: amazingMarket,
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

export const fetchAmazingMarket = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));

      const data = await fetch(API_URL);
      const res = await data.json();

      dispatch(setAmazingMarket(res || {}));
      dispatch(setError(""));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};