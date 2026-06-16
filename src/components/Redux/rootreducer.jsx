import { combineReducers } from "redux";
import ReducerBanner from "./Banner/ReducerBanner";
import ReducerDesktop from "./DesktopHeader/ReducerDesktop";
import ReducerMobile from "./MobileHeader/ReducerMobile";
import ReducerStory from "./Story/ReducerStory";

const rootreducer = combineReducers({
  banner: ReducerBanner,
  menuItems: ReducerDesktop,
  MobileHeader: ReducerMobile,
    story: ReducerStory,
});

export default rootreducer;