import { SET_BRANDS, SET_LOADING, SET_ERROR } from "./ActionTypes";

const API_URL = "https://dorsavali.github.io/db.json/db.json/brands";

export const setBrands = (brands) => {
  return {
    type: SET_BRANDS,
    payload: brands,
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

export const fetchBrands = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));

      const data = await fetch(API_URL);
      const res = await data.json();

      dispatch(setBrands(res || []));
      dispatch(setError(""));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};
