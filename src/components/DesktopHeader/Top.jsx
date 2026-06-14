import Search from "./Search";
import Left from "./Left";

const Top = () => {
  return (
    <div
      className="w-full h-[68px] lg:flex md:hidden items-center justify-between px-4 bg-white"
      dir="rtl"
    >
      <div className="flex items-center gap-5 w-[70%]">
        <img
          src="/images/header/logo.svg"
          alt="logo"
          className="w-[195px] h-[30px] cursor-pointer shrink-0"
        />
        <Search />
      </div>
      <Left />
    </div>
  );
};

export default Top;
