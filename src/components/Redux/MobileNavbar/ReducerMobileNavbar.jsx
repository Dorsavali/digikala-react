import {
  SET_MOBILE_NAVBAR,
  SET_MOBILE_NAVBAR_LOADING,
  SET_MOBILE_NAVBAR_ERROR,
} from "./ActionTypes";

const initialState = {
  loading: true,
  items: [],
  error: "",
};

const ReducerMobileNavbar = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBILE_NAVBAR:
      return { ...state, items: action.payload };

    case SET_MOBILE_NAVBAR_LOADING:
      return { ...state, loading: action.payload };

    case SET_MOBILE_NAVBAR_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default ReducerMobileNavbar;