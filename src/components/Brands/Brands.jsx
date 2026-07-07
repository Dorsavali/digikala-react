import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../Redux/Brands/ActionBrands";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Brands.css";

const Brands = () => {
  const dispatch = useDispatch();

  const { brands, loading, error } = useSelector((state) => state.brands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  if (loading) return null;

  if (error) return <div>{error}</div>;

  return (
    <div className=" box-border w-full">

  <section className=" w-full lg:border lg:border-gray-200 rounded-2xl lg:py-[24px] ">
      <div className="flex flex-row-reverse lg:justify-center justify-start items-center gap-2 mb-5 ">
        <img src="/images/icons/star.svg" alt="star" className="w-6 h-6" />

        <h2 className="font-[iranb] lg:font-[iran] text-[14px] lg:text-[21px] ">
          محبوب‌ترین برندها
        </h2>
      </div>

      <div className="md:hidden ">
        <div className="flex overflow-x-auto hide-scrollbar gap-2 " dir="rtl">
          {brands.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="min-w-[90px] h-[124px] border border-gray-200 rounded-lg flex flex-col items-center gap-1   bg-white"
            >
              <div className="w-full h-[90px] bg-gray-100 flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[75px] h-[75px]  object-contain mix-blend-multiply"
                />
              </div>

              <span className="text-[11px] text-center  w-full">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={0}
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
            1280: {
              slidesPerView: 9,
            },
          }}
        >
          {brands.map((item, index) => (
            <SwiperSlide key={item.id}>
              <a
                href={item.link}
                className={`flex justify-center items-center px-4 py-2 ${
                  index !== brands.length - 1 ? "border-l border-gray-200" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[110px] h-[110px] object-contain"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>


    </div>
  
  );
};

export default Brands;
