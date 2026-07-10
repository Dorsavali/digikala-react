import {
  SET_MOBILE_NAVBAR,
  SET_MOBILE_NAVBAR_LOADING,
  SET_MOBILE_NAVBAR_ERROR,
} from "./ActionTypes";

const API_URL = "https://dorsavali.github.io/db.json/db.json/mobileNavbar";

export const setMobileNavbar = (items) => ({
  type: SET_MOBILE_NAVBAR,
  payload: items,
});

export const setMobileNavbarLoading = (status) => ({
  type: SET_MOBILE_NAVBAR_LOADING,
  payload: status,
});

export const setMobileNavbarError = (error) => ({
  type: SET_MOBILE_NAVBAR_ERROR,
  payload: error,
});

export const fetchMobileNavbar = () => {
  return async function (dispatch) {
    try {
      dispatch(setMobileNavbarLoading(true));

      const response = await fetch(API_URL);
      const data = await response.json();

      dispatch(setMobileNavbar(data || []));
      dispatch(setMobileNavbarError(""));
      dispatch(setMobileNavbarLoading(false));
    } catch (error) {
      dispatch(setMobileNavbarError(error.message));
      dispatch(setMobileNavbarLoading(false));
    }
  };
};
