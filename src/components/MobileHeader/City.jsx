import { useState } from "react";
import MobileLocation from "./MobileLocation";

const City = () => {
  const [openMobile, setOpenMobile] = useState(false);

  return (
<>
  <div className="flex lg:hidden w-full h-9 items-center px-4 bg-[#f2f3f5]">
    <button
      onClick={() => setOpenMobile(true)}
      className="flex items-center gap-1 text-[12px] font-[iran] text-[#934c0e]"
    >
      <span className="text-[18px] font-[cube]"></span>
      انتخاب آدرس
      <span className="text-[15px] font-[cube]"></span>
    </button>
  </div>

  {openMobile && (
    <MobileLocation onClose={() => setOpenMobile(false)} />
  )}
</>
  );
};

export default City;