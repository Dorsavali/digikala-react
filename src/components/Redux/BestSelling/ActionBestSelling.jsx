import {
  SET_BESTSELLING,
  SET_LOADING,
  SET_ERROR,
} from "./ActionTypes";

export const setBestSelling = (bestSelling) => {
  return {
    type: SET_BESTSELLING,
    payload: bestSelling,
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

export const fetchBestSelling = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();

      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setBestSelling(res.bestSelling));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};