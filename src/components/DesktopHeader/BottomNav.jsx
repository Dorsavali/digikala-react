import City from "./City";
import MenuItems from "./MenuItems";

const BottomNav = () => {
  return (
    <div
      className="max-w-[1836px] lg:mx-auto w-full h-10 box-border md:hidden lg:block"
      dir="rtl"
    >
      <nav className="w-full h-full px-3 pb-2 flex justify-between  font-[iran]">
        <MenuItems />
        <City />
      </nav>
    </div>
  );
};

export default BottomNav;
