const HotTrendsCard = ({ item, number, lastItem }) => {
  return (
    <>
      {/* Desktop */}
      <a
        href={item.link}
        className={`hidden lg:flex items-center py-4 relative ${
          !lastItem
            ? "after:absolute after:bottom-0 after:right-[118px] after:left-0 after:h-px after:bg-[#f0f0f1]"
            : ""
        }`}
      >
        <div className="w-[86px] h-[86px] ml-3 shrink-0 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        <span className="w-8 ml-3 shrink-0 text-[#1672dd] text-[26px] font-black leading-none font-[iran] flex justify-center">
          {number.toLocaleString("fa-IR")}
        </span>

        <div >
          <p
            className="font-[iran] text-[12px] text-[#3f4064] leading-[26px]
            overflow-hidden text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {item.title}
          </p>
        </div>
      </a>
      {/* Mobile */}
      <div className="lg:hidden   border border-[#e0e0e2] rounded-xl mb-1.5" >
        <a
          href={item.link}
          className="flex items-center  min-h-[88px]"
        >
          <div className="w-[88px] h-[88px] ml-3 rounded-lg bg-[#f3f3f3] shrink-0 flex items-center justify-center overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-[72px] h-[72px] object-contain mix-blend-multiply"
            />
          </div>

          <div className="flex-1 min-w-0">
  <p
    className="text-[#3f4064]  text-[11px] leading-[22px] font-[iran]"
    style={{
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    }}
  >
    <span className="inline-flex w-[22px] h-[22px] rounded-full bg-[#ef4056] text-white text-[11px] font-bold items-center justify-center ml-2 align-top">
      {number.toLocaleString("fa-IR")}
    </span>

    {item.title}
  </p>
</div>
        </a>
      </div>
    </>
  );
};

export default HotTrendsCard;