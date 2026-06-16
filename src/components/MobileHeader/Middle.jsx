const Middle = () => {
  return (
    <div className="flex w-full px-4 py-1 box-border justify-start gap-4">
      <div className="relative w-4/5 ">
        <input
          type="search"
          name="search"
          id="search"
          className="
            w-full
            h-[40px]
            rounded-full
            bg-white
            outline-none
            focus:bg-white
            border
            border-[#e0e0e2]
            border-[0.8px]
          "
        />
        <div
          dir="ltr"
          className="absolute flex top-2 justify-center items-center gap-2 font-[iranb] text-[#a1a3a8] text-[14px] pr-3"
        >
          <img
            src="/images/header/typography.svg"
            alt="logo"
            className="w-[61px] h-[16px]"
          />
          جتسجو در
          <img src="/images/icons/search.svg" alt="search" />
        </div>
      </div>
      <div
        className="
    bg-white
    w-11
    h-11
    rounded-full
    border
    border-[#e0e0e2]
    flex
    items-center
    justify-center
  "
      >
        <p className="text-[24px] text-[#424750] cursor-pointer font-[cube]">
          
        </p>
      </div>
    </div>
  );
};

export default Middle;
