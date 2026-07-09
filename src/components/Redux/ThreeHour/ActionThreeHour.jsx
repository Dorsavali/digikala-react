import {
  SET_THREE_HOUR,
  SET_LOADING,
  SET_ERROR,
} from "./ActionTypes";

const API_URL = "http://localhost:3000/threeHour";

export const setThreeHour = (threeHour) => {
  return {
    type: SET_THREE_HOUR,
    payload: threeHour,
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

export const fetchThreeHour = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));

      const data = await fetch(API_URL);
      const res = await data.json();

      dispatch(setThreeHour(res || {}));
      dispatch(setError(""));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};
