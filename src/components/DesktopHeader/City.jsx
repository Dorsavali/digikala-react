import { useState } from "react";
import LocationModal from "./LocationModal";

const City = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center relative">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="bg-[#fef6ef] text-[#f57f17] rounded-full px-2 py-0.5 text-[12px] flex items-center"
      >
        <span className="text-[18px] pl-1 font-[cube]"></span>
        انتخاب آدرس
      </button>

{open && <LocationModal close={() => setOpen(false)} />}
    </div>
  );
};

export default City;