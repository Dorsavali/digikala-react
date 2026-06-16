import { SET_CITY, SET_LOADING, SET_ERROR } from "./ActionType";

const initialState = {
  city: null,
  isLoading: false,
  error: null,
};
 const ReducerCity = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default ReducerCity;