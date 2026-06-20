import { combineReducers } from "redux";
import ReducerBanner from "./Banner/ReducerBanner";
import ReducerDesktop from "./DesktopHeader/ReducerDesktop";
import ReducerMobile from "./MobileHeader/ReducerMobile";
import ReducerStory from "./Story/ReducerStory";
import ReducerSlider from "./Slider/ReducerSlider";
import ReducerAccess from "./Access/ReducerAccess";
import ReducerAmazing from "./Amazing/ReducerAmazing";
import ReducerThreeHour from "./ThreeHour/ReducerThreeHour";
const rootreducer = combineReducers({
  banner: ReducerBanner,
  menuItems: ReducerDesktop,
  mobileHeader: ReducerMobile,
  story: ReducerStory,
  slider: ReducerSlider,
  access: ReducerAccess,
  amazing: ReducerAmazing,
  threeHour: ReducerThreeHour,
});

export default rootreducer;