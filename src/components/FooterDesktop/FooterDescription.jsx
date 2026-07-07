import { useState } from "react";
import FooterDescriptionData from "./FooterDescriptionData";

const FooterDescription = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="max-w-[1550px] lg:mx-auto  px-5 flex justify-between gap-10 py-8 border-t border-[#f0f0f1]"
      dir="rtl"
    >
      {/* متن */}
      <div className="flex-1">
        <div className="relative">
          <div
            className={`overflow-hidden transition-all duration-300 ${
              showMore ? "max-h-[10000px]" : "max-h-[110px]"
            }`}
          >
            <FooterDescriptionData />
          </div>

          {!showMore && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-1 mt-2 text-[#1672dd] text-xs font-medium"
        >
          {showMore ? "بستن" : "مشاهده بیشتر"}
          <img
            src="/images/icons/chevblue.svg"
            alt=""
            className={`w-[14px] h-[14px] transition-transform ${
              showMore ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* نمادها */}
      <div className="flex gap-2 shrink-0">
        <div className="w-[109px] h-[109px] border border-[#e0e0e2] rounded-lg flex items-center justify-center">
          <img
            src="/images/footer/rezi.webp"
            alt=""
            className="w-[75px] h-auto object-contain"
          />
        </div>

        <div className="w-[109px] h-[109px] border border-[#e0e0e2] rounded-lg flex items-center justify-center">
          <img
            src="/images/footer/kasbokar.webp"
            alt=""
            className="w-[75px] h-auto object-contain"
          />
        </div>

        <div className="w-[109px] h-[109px] border border-[#e0e0e2] rounded-lg flex items-center justify-center">
          <img
            src="/images/footer/namad.png"
            alt=""
            className="w-[75px] h-auto object-contain"
          />
        </div>

        <div className="w-[109px] h-[109px] border border-[#e0e0e2] rounded-lg flex items-center justify-center">
          <img
            src="/images/footer/sapra.webp"
            alt=""
            className="w-[75px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterDescription;
