import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../Redux/Category/ActionCategory";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import "./Category.css";

const Category = () => {
  const dispatch = useDispatch();

  const { category, loading, error } = useSelector(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  if (loading)
    return (
      <div className="w-full flex justify-center py-10">
        <h1 className="font-[iran] text-sm">در حال بارگذاری...</h1>
      </div>
    );

  if (error)
    return (
      <div className="w-full flex justify-center py-10">
        <h1 className="font-[iran] text-sm">{error}</h1>
      </div>
    );

  return (
    <section className="w-full lg:px-4 px-0 mt-5">
      <div className="max-w-[1336px] mx-auto">

        <div className="w-full flex lg:justify-center justify-end mb-6 lg:mb-9 px-4 lg:px-0">
          <h2 className="font-[iranb] text-[16px] hidden lg:block lg:text-[21px] text-[#0c0c0c]">
            خرید بر اساس دسته‌بندی
          </h2>
          <h2 className="font-[iranb] lg:hidden text-[16px] text-[#0c0c0c]">
             دسته‌بندی‌ها
          </h2>
        </div>

        <Swiper
          modules={[FreeMode]}
          freeMode
          grabCursor
          watchOverflow
          spaceBetween={0}
          breakpoints={{
            0: {
              slidesPerView: 4.1,
            },
            480: {
              slidesPerView: 4.5,
            },
            640: {
              slidesPerView: 5.5,
            },
            768: {
              slidesPerView: 6.5,
            },
            1024: {
              slidesPerView: 7.5,
            },
            1280: {
              slidesPerView: 7.5,
            },
          }}
        >
          {category.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center justify-between gap-5">
                <div className="h-[125px] px-4">
                  <div className="flex flex-col items-center w-full select-none cursor-pointer">

                    <div className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] flex justify-center items-center">
                      <img
                        src={item.top.image}
                        alt={item.top.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <p className="mt-2 text-center text-[10px] lg:text-xs leading-5 text-[#3f4064] font-[iran] lg:font-[iranb] ">
                      {item.top.title}
                    </p>
                  </div>
                </div>
                <div className="h-[125px] px-4">
                  <div className="flex flex-col items-center w-full select-none cursor-pointer">

                    <div className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] flex justify-center items-center">
                      <img
                        src={item.bottom.image}
                        alt={item.bottom.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="mt-2 text-center text-[10px] lg:text-xs leading-5 text-[#3f4064] font-[iran] lg:font-[iranb]">
                      {item.bottom.title}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;