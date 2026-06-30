import { SET_SUGGESTED, SET_LOADING, SET_ERROR } from "./ActionTypes";

const initialState = {
  loading: true,
  error: " ",
  suggested: [],
};

 const ReducerSuggested = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state,loading: action.payload  };

    case SET_SUGGESTED:
      return { ...state,  suggested: action.payload };

    case SET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
export default ReducerSuggested
