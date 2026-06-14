import CustomFetch from "../CustomFetch/CustomFetch";

const Top = () => {
  const menu = CustomFetch("headerMobile");
  return (
    <div dir="rtl" className="md:flex lg:hidden flex  h-[82px] gap-2.5  justify-center items-center gap-1.5 px-4 py-2 box-border overflow-x-scroll no-scrollbar">
      {menu?.map((item, index) => {
        return (
          <div key={index} className="shrink-0 bg-white pb-2 border border-[0.8px] w-[68px] h-[66px] border-[rgb(224, 224, 224)] font-[iranb] text-[10px] text-black flex justify-around items-center flex-col border-[#e0e0e2] rounded-xl py-1">
            <img
              src={item.imgSrc}
              
              alt="Banner"
              className="w-[32px] h-[32px] object-cover"
            />
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default Top;
