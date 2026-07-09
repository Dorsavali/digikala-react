const Middle = ({ bgColor = "bg-[#f2f3f5]" }) => {
  return (
    <div
      className={`flex lg:hidden w-full px-4 py-2 box-border items-center gap-3 ${bgColor}`}
    >
      <div className="relative flex-1">
        <input
          type="search"
          className="w-full h-10 rounded-full bg-white outline-none border border-[#e0e0e2] pr-28 pl-4"
        />

        <div
          dir="rtl"
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[#a1a3a8] text-[12px] font-[iran]"
        >
          <img src="/images/icons/search.svg" alt="" className="w-5 h-5" />
          <span>جستجو در</span>
          <img
            src="/images/header/typography.svg"
            alt="digikala"
            className="w-[61px] h-[16px]"
          />
        </div>
      </div>

      <button className="w-10 h-10 shrink-0 rounded-full bg-white border border-[#e0e0e2] flex items-center justify-center">
        <span className="text-[22px] text-[#424750] font-[cube]"></span>
      </button>
    </div>
  );
};

export default Middle;
