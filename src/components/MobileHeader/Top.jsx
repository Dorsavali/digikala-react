import { fetchMobileHeader } from "../Redux/MobileHeader/ActionMobile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const Top = () => {
  const [activeId, setActiveId] = useState(null);
  const dispatch = useDispatch();
  const { MobileHeader } = useSelector((state) => state.MobileHeader);
const data = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMobileHeader());
  }, [dispatch]);

  return (
    <div
      dir="rtl"
      className="md:flex lg:hidden flex  h-[82px] gap-2.5  justify-start snap-x snap-mandatory items-center gap-1.5 px-4 py-2 box-border overflow-x-scroll no-scrollbar"
    >
      {MobileHeader?.map((item) => {
  return (
    <div
      key={item.id}
      onClick={() => setActiveId(item.id)}
      className={`
        shrink-0
        w-[68px]
        h-[66px]
        rounded-xl
        py-1
        flex
        flex-col
        justify-around
        items-center
        border
        border-[#e0e0e2]
        cursor-pointer
        transition-all
text-[10px]
font-[iranb]
        ${
          activeId === item.id
            ? "bg-red-500 text-white"
            : "bg-white text-black"
        }
      `}
    >
      <img
        src={item.imgSrc}
        alt={item.title}
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
