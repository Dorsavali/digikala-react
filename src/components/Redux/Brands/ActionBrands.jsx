import {SET_BRANDS, SET_LOADING, SET_ERROR} from "./ActionTypes";

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
      let data = await fetch("/db.json");
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setBrands(res.brands));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};