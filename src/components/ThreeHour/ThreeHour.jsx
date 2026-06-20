import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchThreeHour } from "../Redux/ThreeHour/ActionThreeHour";

const ThreeHourDelivery = () => {
  const dispatch = useDispatch();

  const { threeHour, loading } = useSelector((state) => state.threeHour);

  useEffect(() => {
    dispatch(fetchThreeHour());
  }, []);

  return (
    <section dir="rtl" className="block lg:hidden mt-5 bg-[#FCF3EB] py-4">
      <div className="px-4">
        <div className="flex items-center gap-2">
          <img src={threeHour?.icon} alt="" className="w-5 h-5" />
          <div className="font-[iranb] text-[16px]">{threeHour?.title}</div>
        </div>

        <div className="bg-[#F6E6D5] mt-4 rounded-lg p-3">
          <p className="font-medium text-[12px] font-[iran] flex gap-2 items-center">
            <p className="font-[cube2] text-xl text-[#934c0e]"> </p>
            برای بررسی امکان ارسال، آدرس را انتخاب کنید.
          </p>

          <button className="w-full mt-2 text-[#934C0E] font-medium text-[12px] font-[iran] flex justify-end">
            انتخاب آدرس
            <img
              src="/images/icons/chevBrown.svg"
              className="w-4 h-4 mt-0.5"
              alt="chev"
            />
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto hide-scrollbar mt-4 opacity-20">
          {threeHour?.products?.map((item) => (
            <div
              key={item.id}
              className="min-w-[130px] bg-white rounded-lg p-2 flex flex-col gap-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[114px] object-cover rounded-md"
              />

              <h3 className="text-xs line-clamp-2 h-10 mt-2 font-[iran] line-clamp-2 leading-5 overflow-hidden">
                {item.title}
              </h3>

              <div className="mt-auto">
                {item.discount > 0 && (
                  <div className="flex items-center gap-1">
                    <span className="bg-red-500 text-white text-xs px-1 rounded-full font-[iran]">
                      {item.discount.toLocaleString("fa-IR")}%
                    </span>

                    <span className="line-through text-gray-400 text-xs font-[iran]">
                      {item.oldPrice?.toLocaleString("fa-IR")}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-1 mt-1">
                  <span className="font-bold text-sm font-[iran]">
                    {item.price?.toLocaleString("fa-IR")}
                  </span>

                  <img
                    src="/public/images/icons/toman.svg"
                    alt="toman"
                    className="!w-[16px] !h-[16px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeHourDelivery;
