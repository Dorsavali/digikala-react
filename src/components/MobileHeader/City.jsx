
import { useState } from "react";

const City = () => {

  return (
    <div className="h-full flex items-center relative px-4 py-1 gap-1 box-border">
      <button className="font-[iran] text-[#934c0e] rounded-full  text-[12px]  flex items-center">
        <span className="text-[18px] pl-1 font-[cube]"></span>
        انتخاب آدرس 
        
      </button>
      <div
  className="
    font-[cube]
    w-4
    h-4
    text-[16px]
    font-normal
    text-[#934c0e]
    flex
    items-center
    justify-center
  "
>
  
</div>
    </div>
  );
};

export default City;