import {
  SET_HOTTRENDS,
  SET_LOADING,
  SET_ERROR,
} from "./ActionTypes";

const initialState = {
  hotTrends: [],
  loading: true,
  error: "",
};

const ReducerHotTrends = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTTRENDS:
      return {
        ...state,
        hotTrends: action.payload,
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

export default ReducerHotTrends;