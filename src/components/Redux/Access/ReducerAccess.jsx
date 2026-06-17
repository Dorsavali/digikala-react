import { SET_ERROR, SET_ACCESS, SET_LOADING } from "./ActionType";
const initialstate = {
  loading: true,
  access: [],
  error: "",
};
const ReducerAccess = (state = initialstate, action) => {
  switch (action.type) {
    case SET_ACCESS: {
      return { ...state, access: action.payload };
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
export default ReducerAccess;
