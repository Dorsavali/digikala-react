import { combineReducers } from "redux";
import ReducerDesktop from "./DesktopHeader/ReducerDesktop";
import ReducerMobile from "./MobileHeader/ReducerMobile";
import ReducerStory from "./Story/ReducerStory";
import ReducerSlider from "./Slider/ReducerSlider";
import ReducerAccess from "./Access/ReducerAccess";
import ReducerAmazing from "./Amazing/ReducerAmazing";
import ReducerThreeHour from "./ThreeHour/ReducerThreeHour";
import ReducerAmazingMarket from "./AmazingMarket/ReducerAmazingMarket";
import ReducerCategory from "./Category/ReducerCategory";
import ReducerBrands from "./Brands/ReducerBrands";
import  ReducerSuggested  from "./Suggested/ReducerSuggested";
import ReducerBestSelling from "./BestSelling/ReducerBestSelling";
import ReducerAmazingOffer from "./AmazingOffer/ReducerAmazingOffer";
import ReducerHotTrends from "./HotTrends/ReducerHotTrends";
import ReducerAmazingCrud from "./AmazingCrud/ReducerAmazingCrud";
import ReducerMobileNavbar from "./MobileNavbar/ReducerMobileNavbar";
import ReducerMobileMegaMenu from "./MobileMegaMenu/ReducerMobileMegaMenu";
const rootreducer = combineReducers({
  menuItems: ReducerDesktop,
  mobileHeader: ReducerMobile,
  story: ReducerStory,
  slider: ReducerSlider,
  access: ReducerAccess,
  amazing: ReducerAmazing,
amazingCrud: ReducerAmazingCrud,
  threeHour: ReducerThreeHour,
  amazingMarket: ReducerAmazingMarket,
  category: ReducerCategory,
  brands: ReducerBrands,
  suggested: ReducerSuggested,
  bestSelling: ReducerBestSelling,
  amazingOffer:ReducerAmazingOffer,
  hotTrends:ReducerHotTrends,
  mobileNavbar: ReducerMobileNavbar,
  mobileMegaMenu: ReducerMobileMegaMenu,
});

export default rootreducer;
