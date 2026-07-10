import {
  SET_MENU_ITEMS,
  SET_MEGA_MENU,
  SET_LOADING,
  SET_ERROR,
} from "./ActionType";

const MENU_ITEMS_URL = "https://dorsavali.github.io/db.json/db.json/menuItems";
const MEGA_MENU_URL = "https://dorsavali.github.io/db.json/db.json/megaMenu";

export const setMenuItems = (items) => {
  return {
    type: SET_MENU_ITEMS,
    payload: items,
  };
};

export const setMegaMenu = (items) => {
  return {
    type: SET_MEGA_MENU,
    payload: items,
  };
};

export const setLoading = (status) => {
  return {
    type: SET_LOADING,
    payload: status,
  };
};

export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

export const fetchMenuItems = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));

      const [menuItemsResponse, megaMenuResponse] = await Promise.all([
        fetch(MENU_ITEMS_URL),
        fetch(MEGA_MENU_URL),
      ]);

      if (!menuItemsResponse.ok) {
        throw new Error("Failed to fetch menuItems");
      }

      if (!megaMenuResponse.ok) {
        throw new Error("Failed to fetch megaMenu");
      }

      const menuItems = await menuItemsResponse.json();
      const megaMenu = await megaMenuResponse.json();

      dispatch(setMenuItems(menuItems || []));
      dispatch(setMegaMenu(megaMenu || []));
      dispatch(setError(""));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};
