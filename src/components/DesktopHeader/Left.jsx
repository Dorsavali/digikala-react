const Left = () => {
  return (
    <div className="flex justify-end items-center gap-5 pl-2 shrink-0">
      <p className="text-[24px] text-[#424750] cursor-pointer font-[cube]">
        
      </p>

      <button
        className="
          h-[40px]
          px-4
          border
          border-[#e0e0e2]
          rounded-lg
          flex
          items-center
          gap-2
          shrink-0
          whitespace-nowrap
        "
      >
        <svg className="w-6 h-6 fill-[#424750]">
          <path d="M16 15h-2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2h2V7a4 4 0 00-4-4H6a4 4 0 00-4 4v10a4 4 0 004 4h6a4 4 0 004-4v-2zm6-4H9.414l2.293-2.293-1.414-1.414-4 4a1 1 0 000 1.414l4 4 1.414-1.414L9.414 13H22v-2z" />
        </svg>

        <span className="text-[12px] font-medium text-[#0c0c0c] font-[iranb] whitespace-nowrap">
          ورود | ثبت‌نام
        </span>
      </button>

      <div className="border-r border-[#e0e0e2] pr-4 cursor-pointer pt-2 shrink-0">
        <svg className="w-6 h-6 fill-[#424750]">
          <path
            fillRule="evenodd"
            d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Left;