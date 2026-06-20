import {
  SET_THREE_HOUR,
  SET_LOADING,
  SET_ERROR,
} from "./ActionTypes";

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
      let data = await fetch(
        `${import.meta.env.BASE_URL}db.json`
      );

      let res = await data.json();

      dispatch(setError(""));
      dispatch(setLoading(false));

      dispatch(
        setThreeHour(res.threeHour)
      );

    } catch (error) {

      dispatch(setError(error.message));
      dispatch(setLoading(true));

    }
  };
};