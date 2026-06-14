import MenuItems from "./MenuItems";
import CitySelector from "./CitySelector";

const BottomNav = () => {
  return (
    <div className="w-full h-10 box-border md:hidden lg:block" dir="rtl">
      <nav className="w-full h-full px-3 pb-2 flex justify-between border-b border-[#d0d0d0] font-[iran]">
        <MenuItems />
        <CitySelector />
      </nav>
    </div>
  );
};

export default BottomNav;