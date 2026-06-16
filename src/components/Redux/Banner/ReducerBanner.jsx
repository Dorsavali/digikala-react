import { SET_ERROR, SET_BANNER, SET_LOADING } from "./ActionType";
const initialstate = {
  loading: true,
  banner: [],
  error: "",
};
const ReducerBanner = (state = initialstate, action) => {
  switch (action.type) {
    case SET_BANNER: {
      return { ...state, banner: action.payload };
    }
    case SET_LOADING: {
      return { ...state, loading: action.payload };
    }
    case SET_ERROR: {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default ReducerBanner;
