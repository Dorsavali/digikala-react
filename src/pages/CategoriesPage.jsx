import MobileMegaMenu from "../components/MegaMenuMobile/MegaMenuMobile";
import Middle from "../components/MobileHeader/Middle";
import Top from "../components/MobileHeader/Top";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-white pb-[58px] lg:hidden">
      <header
        dir="rtl"
        className="sticky top-0 z-50 w-full flex flex-col lg:hidden bg-white"
      >
        <div className="h-[60px] overflow-hidden">
          <Top bgColor="bg-white" showImages={false} fitText />
        </div>

        <Middle bgColor="bg-white" />
      </header>

      <MobileMegaMenu />
      <MobileNavbar />
    </div>
  );
};

export default CategoriesPage;


