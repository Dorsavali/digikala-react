import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSlider } from "../Redux/Slider/ActionSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "./Slider.css";

const Slider = () => {
  const dispatch = useDispatch();
  const { slider, loading, error } = useSelector((state) => state.slider);

  useEffect(() => {
    dispatch(fetchSlider());
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <div dir="rtl" className="block lg:hidden w-full bg-[rgb(242,243,245)] px-3 py-2">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1.08}     
          centeredSlides={true}
          spaceBetween={8}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          style={{ "--swiper-pagination-color": "#ef4056", "--swiper-pagination-bottom": "6px" }}
          className="w-full h-[155px] rounded-xl overflow-hidden"
        >
          {slider?.map((item) => (
            <SwiperSlide key={item.id} className="rounded-xl overflow-hidden">
              <a href={item.link} className="block w-full h-full">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div dir="rtl" className="hidden max-w-[2000px] lg:mx-auto lg:block w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}   
          centeredSlides={true}
          spaceBetween={0}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-[400px] p-[unset]"
        >
          {slider?.map((item) => (
            <SwiperSlide key={item.id} className="w-full h-full p-0">
              <a href={item.link} className="block w-full h-full ">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;