import Access from "../components/Access/Access";
import Banner from "../components/Banner/Banner";
import DesktopHeader from "../components/DesktopHeader/DesktopHeader";
import MobileHeader from "../components/MobileHeader/MobileHeader";
import Slider from "../components/Slider/Slider";
import Story from "../components/Story/Story";
const Home = () => {
  return (
    <div className="flex flex-col lg:gap-4">
   <Banner/>
   <DesktopHeader/>
   <MobileHeader/>
   <Story/>
   <Slider/>
   <Access/>
    </div>
  );
};

export default Home;
