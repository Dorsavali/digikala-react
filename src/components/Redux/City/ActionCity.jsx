import { SET_ERROR, SET_LOADING, SET_CITY } from "./ActionType";
export const setCity = (city) => {
  return {
    type: SET_CITY,
    payload: city,
  };
};
export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};
export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};
export const fetchCity = (city) => {
  return async function (dispatch) {
    try {
      let data = await fetch("/db.json");
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setCity(res.setCity));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};
