import {
  SET_AMAZING_CRUD,
  SET_AMAZING_CRUD_LOADING,
  SET_AMAZING_CRUD_ERROR,
  ADD_AMAZING_CRUD_SLIDE,
  UPDATE_AMAZING_CRUD_SLIDE,
  DELETE_AMAZING_CRUD_SLIDE,
} from "./ActionTypes";

const initialState = {
  loading: true,
  amazing: {},
  error: "",
};

const ReducerAmazingCrud = (state = initialState, action) => {
  switch (action.type) {
    case SET_AMAZING_CRUD:
      return {
        ...state,
        amazing: action.payload,
      };

    case SET_AMAZING_CRUD_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_AMAZING_CRUD_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case ADD_AMAZING_CRUD_SLIDE:
      return {
        ...state,
        amazing: {
          ...state.amazing,
          roll: [...(state.amazing.roll || []), action.payload],
        },
      };

    case UPDATE_AMAZING_CRUD_SLIDE:
      return {
        ...state,
        amazing: {
          ...state.amazing,
          roll: state.amazing.roll.map((item) =>
            item.id === action.payload.id
              ? { ...item, ...action.payload.updatedSlide }
              : item
          ),
        },
      };

    case DELETE_AMAZING_CRUD_SLIDE:
      return {
        ...state,
        amazing: {
          ...state.amazing,
          roll: state.amazing.roll.filter(
            (item) => item.id !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export default ReducerAmazingCrud;