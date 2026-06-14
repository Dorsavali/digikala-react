import {SET_BANNER, SET_LOADING, SET_ERROR} from "./ActionType";

export const setBanner = (banner) => {
  return {
    type: SET_BANNER,
    payload: banner,
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
export const fetchBanner = () => {
  return async function (dispatch) {
    try {
      let data = await fetch("/db.json");
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setBanner(res.banner));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};