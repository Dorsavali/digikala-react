import { SET_MOBILE_HEADER, SET_LOADING, SET_ERROR } from "./ActionType";

const API_URL = "http://localhost:3000/MobileHeader";

export const setMobileHeader = (items) => {
  return {
    type: SET_MOBILE_HEADER,
    payload: items,
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

export const fetchMobileHeader = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));

      const response = await fetch(API_URL);
      const data = await response.json();

      dispatch(setMobileHeader(data || []));
      dispatch(setError(""));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};
