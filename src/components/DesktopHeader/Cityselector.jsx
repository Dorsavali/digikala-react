import CityModal from "./CityModal";
import { useState } from "react";

const CitySelector = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center relative ">
      <button
        onClick={() => setOpen(true)}
        className="bg-[#fef6ef] text-[#f57f17] rounded-full px-2 py-0.5 text-[12px]  flex items-center"
      >
        <span className="text-[18px] pl-1 font-[cube]"></span>
        انتخاب آدرس 
      </button>

      {open && <CityModal closeModal={() => setOpen(false)} />}
    </div>
  );
};

export default CitySelector;