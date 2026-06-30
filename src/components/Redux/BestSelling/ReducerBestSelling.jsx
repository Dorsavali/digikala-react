import {
  SET_BESTSELLING,
  SET_LOADING,
  SET_ERROR,
} from "./ActionTypes";

const initialState = {
  bestSelling: [],
  loading: true,
  error: "",
};

const ReducerBestSelling = (state = initialState, action) => {
  switch (action.type) {
    case SET_BESTSELLING:
      return {
        ...state,
        bestSelling: action.payload,
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

export default ReducerBestSelling;