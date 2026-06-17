import {SET_ACCESS, SET_LOADING, SET_ERROR} from "./ActionType";

export const setAccess = (Access) => {
  return {
    type: SET_ACCESS,
    payload: Access,
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
export const fetchAccess = () => {
  return async function (dispatch) {
    try {
      let data = await fetch("/db.json");
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setAccess(res.access));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};