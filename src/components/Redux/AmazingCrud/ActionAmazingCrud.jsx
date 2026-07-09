  import {
    SET_AMAZING_CRUD,
    SET_AMAZING_CRUD_LOADING,
    SET_AMAZING_CRUD_ERROR,
    ADD_AMAZING_CRUD_SLIDE,
    UPDATE_AMAZING_CRUD_SLIDE,
    DELETE_AMAZING_CRUD_SLIDE,
  } from "./ActionTypes";

  const API_URL = "http://localhost:3000/amazing";

  export const setAmazingCrud = (amazing) => ({
    type: SET_AMAZING_CRUD,
    payload: amazing,
  });

  export const setAmazingCrudLoading = (status) => ({
    type: SET_AMAZING_CRUD_LOADING,
    payload: status,
  });

  export const setAmazingCrudError = (error) => ({
    type: SET_AMAZING_CRUD_ERROR,
    payload: error,
  });

  const saveAmazing = async (amazing) => {
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(amazing),
    });

    if (!response.ok) {
      throw new Error("Failed to save amazing data");
    }

    return response.json();
  };

  export const fetchAmazingCrud = () => {
    return async function (dispatch) {
      try {
        dispatch(setAmazingCrudLoading(true));

        const response = await fetch(API_URL);
        const data = await response.json();

        dispatch(setAmazingCrud(data));
        dispatch(setAmazingCrudError(""));
        dispatch(setAmazingCrudLoading(false));
      } catch (error) {
        dispatch(setAmazingCrudError(error.message));
        dispatch(setAmazingCrudLoading(false));
      }
    };
  };

  export const addAmazingCrudSlide = (slide) => {
    return async function (dispatch, getState) {
      try {
        const amazing = getState().amazingCrud.amazing;

        const newSlide = {
          ...slide,
          id: Date.now(),
        };

        const updatedAmazing = {
          ...amazing,
          roll: [...(amazing.roll || []), newSlide],
        };

        await saveAmazing(updatedAmazing);

        dispatch({
          type: ADD_AMAZING_CRUD_SLIDE,
          payload: newSlide,
        });
      } catch (error) {
        dispatch(setAmazingCrudError(error.message));
      }
    };
  };

  export const updateAmazingCrudSlide = (id, updatedSlide) => {
    return async function (dispatch, getState) {
      try {
        const amazing = getState().amazingCrud.amazing;

        const updatedAmazing = {
          ...amazing,
          roll: amazing.roll.map((item) =>
            item.id === id ? { ...item, ...updatedSlide } : item
          ),
        };

        await saveAmazing(updatedAmazing);

        dispatch({
          type: UPDATE_AMAZING_CRUD_SLIDE,
          payload: {
            id,
            updatedSlide,
          },
        });
      } catch (error) {
        dispatch(setAmazingCrudError(error.message));
      }
    };
  };

  export const deleteAmazingCrudSlide = (id) => {
    return async function (dispatch, getState) {
      try {
        const amazing = getState().amazingCrud.amazing;

        const updatedAmazing = {
          ...amazing,
          roll: amazing.roll.filter((item) => item.id !== id),
        };

        await saveAmazing(updatedAmazing);

        dispatch({
          type: DELETE_AMAZING_CRUD_SLIDE,
          payload: id,
        });
      } catch (error) {
        dispatch(setAmazingCrudError(error.message));
      }
    };
  };