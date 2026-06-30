import { SET_SUGGESTED, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setSuggested = (suggested) => {
  return {
    type: SET_SUGGESTED,
    payload: suggested,
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
export const fetchSuggested = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      const res = await data.json();
      dispatch(setSuggested(res.suggested));
      dispatch(setError(""));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }finally {
  dispatch(setLoading(false));
}
  };
};
