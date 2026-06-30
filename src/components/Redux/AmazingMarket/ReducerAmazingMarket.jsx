import { SET_ERROR, SET_AMAZING_MARKET, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  error: "",
  amazingMarket: {},
};
const ReducerAmazingMarket = (state = initialstate, action) => {
  switch (action.type) {
    case SET_AMAZING_MARKET: {
      return { ...state, amazingMarket: action.payload };
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
export default ReducerAmazingMarket;