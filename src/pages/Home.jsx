import Access from "../components/Access/Access";
import Amazing from "../components/Amazing/Amazing";
import Banner from "../components/Banner/Banner";
import Container from "../components/Container/Container";
import DesktopHeader from "../components/DesktopHeader/DesktopHeader";
import MobileHeader from "../components/MobileHeader/MobileHeader";
import Slider from "../components/Slider/Slider";
import Story from "../components/Story/Story";
import SuperMarketBanner from "../components/SupermarketBanner/SupermarketBanner";
import { banners1, banners2 } from "../components/Container/Banners.js";
import ThreeHourDelivery from "../components/ThreeHour/ThreeHour.jsx";
import AmazingMarket from "../components/AmazingMarket/AmazingMarket.jsx";
import Category from "../components/Category/Category.jsx";
import BigBanner from "../components/BigBanner/BigBanner.jsx";
import { bannerGroup1 } from "../components/BigBanner/BigBanner.js";
import Brands from "../components/Brands/Brands.jsx";
const Home = () => {
  return (
    <div className="flex flex-col lg:gap-4">
      <Banner />
      <DesktopHeader />
      <MobileHeader />
      <Story />
      <Slider />
      <Access />
      <Amazing />
      <Container banners={banners1} />
      <SuperMarketBanner />
      <ThreeHourDelivery />
      <Container banners={banners2} />
      <AmazingMarket />
      <Category />
      <BigBanner data={bannerGroup1} />
      <Brands/>
    </div>
  );
};

export default Home;
