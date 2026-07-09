import {
  SET_MENU_ITEMS,
  SET_MEGA_MENU,
  SET_LOADING,
  SET_ERROR,
} from "./ActionType";

export const setMenuItems = (items) => {
  return {
    type: SET_MENU_ITEMS,
    payload: items,
  };
};

export const setMegaMenu = (items) => {
  return {
    type: SET_MEGA_MENU,
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

      const response = await fetch(`${import.meta.env.BASE_URL}db.json`);
      const data = await response.json();

dispatch(setMenuItems(data.menuItems || []));
dispatch(setMegaMenu(data.megaMenu || []));
      dispatch(setError(""));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};