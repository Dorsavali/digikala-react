import { SET_MENU_ITEMS, SET_LOADING, SET_ERROR } from "./ActionType";

export const setMenuItems = (items) => {
  return {
    type: SET_MENU_ITEMS,
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

export const fetchMenuItems = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));

      const response = await fetch("/db.json");

      const data = await response.json();

      dispatch(setMenuItems(data.menuItems));

      dispatch(setError(""));

      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));

      dispatch(setLoading(false));
    }
  };
};
