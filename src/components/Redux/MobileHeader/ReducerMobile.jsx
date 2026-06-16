import { SET_MOBILE_HEADER, SET_LOADING, SET_ERROR } from "./ActionType";

const initialState = {
  MobileHeader: [],
  loading: false,
  error: "",
};

const ReducerMobile = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBILE_HEADER:
      return {
        ...state,
        MobileHeader: action.payload,
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

export default ReducerMobile;
