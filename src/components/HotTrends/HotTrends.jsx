import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "./HotTrends.css";

import "swiper/css";
import "swiper/css/navigation";
import { fetchHotTrends } from "../Redux/HotTrends/ActionHotTrends";
import HotTrendsCard from "./HotTrendsCard";

const HotTrends = () => {
  const dispatch = useDispatch();

  const { hotTrends, loading, error } = useSelector(
    (state) => state.hotTrends,
  );

  useEffect(() => {
    dispatch(fetchHotTrends());
  }, [dispatch]);

  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const slides = chunkArray(hotTrends, 3);

  if (loading) return null;
  if (error) return <h2>{error}</h2>;

  return (
    <section className="w-full flex flex-col justify-center items-center ">
      <hr className="w-full bg-[#f5f5f5] border-none h-2 m-4.5 lg:hidden"></hr>
      <div className="w-full lg:w-[93%] lg:border lg:border-[#e0e0e2] lg:rounded-2xl bg-white lg:pt-4 lg:pb-2 ">
        {/* Header */}
        <div className="relative flex items-center justify-end lg:justify-center px-2 lg:px-5 mb-4">
          <div className="flex flex-row-reverse items-center gap-2">
            <img
              src="/images/icons/fire.svg"
              alt=""
              className="hidden lg:block w-6 h-6"
            />
           <img
              src="/images/icons/firehottrend.svg"
              alt=""
              className="block lg:hidden w-6 h-6"
            />
            <h2 className="font-[iranb] lg:font-[iran] text-[14px] lg:text-[21px]">
              داغ ترین چند ساعت گذشته
            </h2>
          </div>

          <a
            href="#"
            className="hidden lg:block absolute left-5 text-[14px] text-[#1672dd] font-[iranb] font-extrabold"
          >
            مشاهده همه
          </a>
        </div>

        <div className="lg:px-2">
          <Swiper
            modules={[Navigation]}
            navigation
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 8,
                navigation: false,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 8,
                navigation: false,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
          
          >
            {slides.map((group, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="flex flex-col ">
                  {group.map((item, index) => (
                    <HotTrendsCard
                      key={item.id}
                      item={item}
                      number={slideIndex * 3 + index + 1}
                      lastItem={index === group.length - 1}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HotTrends;
