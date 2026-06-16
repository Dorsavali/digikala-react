import {
  SET_MENU_ITEMS,
  SET_LOADING,
  SET_ERROR,
} from "./ActionType";

const initialState = {
  menuItems: [],
  loading: false,
  error: "",
};

const ReducerDesktop = (
  state = initialState,
  action
) => {
  switch (action.type) {

    case SET_MENU_ITEMS:
      return {
        ...state,
        menuItems: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ReducerDesktop;