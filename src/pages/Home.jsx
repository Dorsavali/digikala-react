import Access from "../components/Access/Access";
import Amazing from "../components/Amazing/Amazing";
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
import {
  bannerGroup1,
  bannerGroup2,
} from "../components/BigBanner/BigBanner.js";
import Brands from "../components/Brands/Brands.jsx";
import Suggested from "../components/Suggested/Suggested.jsx";
import BestSelling from "../components/BestSelling/BestSelling.jsx";
import { useSelector } from "react-redux";
import SuggestedDesktop from "../components/Suggested/SuggestedDesktop.jsx";
import AmazingOffer from "../components/AmazingOffer/AmazingOffer.jsx";
import HotTrends from "../components/HotTrends/HotTrends.jsx";
import Blog from "../components/Blog/Blog.jsx";
import FooterMobile from "../components/FooterMobile/FooterMobile.jsx";
import FooterDesktop from "../components/FooterDesktop/FooterDesktop.jsx";
import ContainerSize from "../components/ContainerSize.jsx";
import SuperMarketModal from "../components/SuperMarketModal/SuperMarketModal.jsx";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar.jsx";
import SupportButton from "../components/SupportButton/SupportButton.jsx";
import Banner from "../components/Banner/Banner.jsx";

const Home = () => {
  const suggested = useSelector((state) => state.suggested.suggested);

  return (
    <div>
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="mx-auto max-w-[1536px]">
          <Banner />
          <DesktopHeader />
        </div>
      </div>

      <MobileHeader />

      <ContainerSize>
        <div className="hidden lg:block h-[148px]" />
        <Story />
      </ContainerSize>

      <Slider />

      <ContainerSize>
        <Access />
        <Amazing />
        <Container banners={banners1} />
        <SuperMarketBanner />
        <ThreeHourDelivery />
        <Container banners={banners2} />
        <AmazingMarket />
        <Category />
        <BigBanner data={bannerGroup1} />
        <Brands />
        <BigBanner data={bannerGroup2} className="hidden md:block" />
        <Suggested />
        <BestSelling />
        <SuggestedDesktop
          suggested={(suggested || []).filter(
            (item) => item.id >= 19 && item.id <= 22
          )}
        />
        <AmazingOffer />
        <HotTrends />
        <Blog />
      </ContainerSize>

      <SuperMarketModal />
      <SupportButton />
      <FooterMobile />
      <FooterDesktop />
      <MobileNavbar />
    </div>
  );
};

export default Home;