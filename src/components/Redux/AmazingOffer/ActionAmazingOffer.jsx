import {
  SET_AMAZINGOFFER,
  SET_LOADING,
  SET_ERROR,
} from "./ActionTypes";

export const setAmazingOffer = (amazingOffer) => {
  return {
    type: SET_AMAZINGOFFER,
    payload: amazingOffer,
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

export const fetchAmazingOffer = () => {
  return async function (dispatch) {
    try {
      const data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      const res = await data.json();

      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setAmazingOffer(res.amazingOffer));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};