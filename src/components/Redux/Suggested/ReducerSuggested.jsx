// ReducerSuggested.js
import {
  SET_SUGGESTED,
  SET_LOADING,
  SET_ERROR,
} from "./ActionTypes";

const initialState = {
  loading: false,
  error: null,
  suggested: [],
};

export const ReducerSuggested = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true, error: null };

    case SET_SUGGESTED:
      return { ...state, loading: false, suggested: action.payload };

    case SET_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};