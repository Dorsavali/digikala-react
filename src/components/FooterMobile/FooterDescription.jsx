import { useState } from "react";
import FooterDescriptionDataM from "./FooterDescriptionDataM";

const FooterDescription = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="py-5 border-t border-[#f0f0f1]" dir="rtl">
      <div
        className={`overflow-hidden ${
          showMore ? "max-h-[10000px]" : "max-h-[110px]"
        }`}
      >
        <FooterDescriptionDataM />
      </div>

      <button onClick={() => setShowMore(!showMore)} className="flex justify-center items-center text-[#a1a3a8] text-[14px] font-[iran] mt-1.5">
        {showMore ? "بستن" : "مشاهده بیشتر"}
        <img src="/images/icons/chevgray.svg" alt="chev" className="w-[14px] h-[14px]"/>
      </button>
    </div>
  );
};

export default FooterDescription;
