import {
  SET_MOBILE_MEGA_MENU,
  SET_MOBILE_MEGA_MENU_LOADING,
  SET_MOBILE_MEGA_MENU_ERROR,
} from "./ActionTypes";

const initialState = {
  loading: true,
  mobileMegaMenu: [],
  error: "",
};

const ReducerMobileMegaMenu = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBILE_MEGA_MENU:
      return {
        ...state,
        mobileMegaMenu: action.payload,
      };

    case SET_MOBILE_MEGA_MENU_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_MOBILE_MEGA_MENU_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ReducerMobileMegaMenu;