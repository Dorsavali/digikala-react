import {
  SET_THREE_HOUR,
  SET_LOADING,
  SET_ERROR,
} from "./ActionTypes";

const initialState = {
  threeHour: {},
  loading: true,
  error: "",
};

const ReducerThreeHour = (
  state = initialState,
  action
) => {
  switch (action.type) {

    case SET_THREE_HOUR:
      return {
        ...state,
        threeHour: action.payload,
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

export default ReducerThreeHour;