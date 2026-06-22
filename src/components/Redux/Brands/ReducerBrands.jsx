import { SET_ERROR, SET_BRANDS, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  brands: [],
  error: "",
};
const ReducerBrands = (state = initialstate, action) => {
  switch (action.type) {
    case SET_BRANDS: {
      return { ...state, brands: action.payload };
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
export default ReducerBrands;