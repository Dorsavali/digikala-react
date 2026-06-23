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
  console.log("ACTION STARTED");
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setSuggested(res.suggested));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};
