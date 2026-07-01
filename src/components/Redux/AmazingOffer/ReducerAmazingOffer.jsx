import {
  SET_AMAZINGOFFER,
  SET_LOADING,
  SET_ERROR,
} from "./ActionTypes";

const initialState = {
  amazingOffer: [],
  loading: true,
  error: "",
};

const ReducerAmazingOffer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AMAZINGOFFER:
      return {
        ...state,
        amazingOffer: action.payload,
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

export default ReducerAmazingOffer;