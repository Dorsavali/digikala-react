import { combineReducers } from "redux";
import ReducerBanner from "./Banner/ReducerBanner";
import ReducerDesktop from "./DesktopHeader/ReducerDesktop";
import ReducerMobile from "./MobileHeader/ReducerMobile";

const rootreducer = combineReducers({
  banner: ReducerBanner,
  menuItems: ReducerDesktop,
  MobileHeader: ReducerMobile,
});

export default rootreducer;