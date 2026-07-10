import { SET_ACCESS, SET_LOADING, SET_ERROR } from "./ActionType";

const API_URL = "https://dorsavali.github.io/db.json/db.json/access";

export const setAccess = (access) => {
  return {
    type: SET_ACCESS,
    payload: access,
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
      dispatch(setLoading(true));

      const data = await fetch(API_URL);
      const res = await data.json();

      dispatch(setAccess(res || []));
      dispatch(setError(""));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};
