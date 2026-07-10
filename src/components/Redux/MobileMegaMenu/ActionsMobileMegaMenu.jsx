import {
  SET_MOBILE_MEGA_MENU,
  SET_MOBILE_MEGA_MENU_LOADING,
  SET_MOBILE_MEGA_MENU_ERROR,
} from "./ActionTypes";

const API_URL = "https://dorsavali.github.io/db.json/db.json/megaMenu";

export const setMobileMegaMenu = (items) => {
  return {
    type: SET_MOBILE_MEGA_MENU,
    payload: items,
  };
};

export const setMobileMegaMenuLoading = (status) => {
  return {
    type: SET_MOBILE_MEGA_MENU_LOADING,
    payload: status,
  };
};

export const setMobileMegaMenuError = (error) => {
  return {
    type: SET_MOBILE_MEGA_MENU_ERROR,
    payload: error,
  };
};

export const fetchMobileMegaMenu = () => {
  return async function (dispatch) {
    try {
      dispatch(setMobileMegaMenuLoading(true));

      const response = await fetch(API_URL);
      const data = await response.json();

      dispatch(setMobileMegaMenu(data || []));
      dispatch(setMobileMegaMenuError(""));
      dispatch(setMobileMegaMenuLoading(false));
    } catch (error) {
      dispatch(setMobileMegaMenuError(error.message));
      dispatch(setMobileMegaMenuLoading(false));
    }
  };
};
