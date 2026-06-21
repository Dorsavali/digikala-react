import { SET_AMAZING_MARKET, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setAmazingMarket = (amazingMarket) => {
  return {
    type: SET_AMAZING_MARKET,
    payload: amazingMarket,
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
export const fetchAmazingMarket = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setAmazingMarket(res.amazingMarket));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};