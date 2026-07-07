import { useDispatch, useSelector } from "react-redux";
import { fetchAmazing } from "../Redux/Amazing/ActionAmazing";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./amazing.css";

const Amazing = () => {
  const { loading, error, amazing } = useSelector((state) => state.amazing);
  const dispatch = useDispatch();
  const swiperRef = useRef(null);

  const START_TIME = 60 * 200;
  const [timeLeft, setTimeLeft] = useState(START_TIME);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    dispatch(fetchAmazing());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? START_TIME : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeLeft % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!amazing?.roll?.length) return null;

  const amazingBg = {
    background:
      "linear-gradient(225deg, rgb(210, 44, 78) 0%, rgb(238, 56, 78) 100%)",
  };

  return (
    <section className=" w-full mt-4 font-[iran,sans-serif]">
      <div className=" mx-auto lg:rounded-2xl" style={amazingBg}>
        <div className="lg:hidden pt-4 px-3 flex flex-row-reverse justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5 items-center h-6">
              <div className="flex items-center justify-center bg-white w-[26px] h-[26px] rounded-sm text-xs">
                {hours}
              </div>
              <div className="text-white">:</div>
              <div className="flex items-center justify-center bg-white w-[26px] h-[26px] rounded-sm text-xs">
                {minutes}
              </div>
              <div className="text-white">:</div>
              <div className="flex items-center justify-center bg-white w-[26px] h-[26px] rounded-sm text-xs">
                {seconds}
              </div>
            </div>

            <img src={amazing.mobileshegeft} className="w-[100px]" alt="" />

            <img src={amazing.percentage} className="w-6 h-6" alt="" />
          </div>
          <div className="flex items-center justify-center text-white text-sm gap-0.5">
            <img src="/images/icons/chev.svg" className="w-[16px] mt-0.5" />
            <span className="text-xs font-[iran]">همه</span>
          </div>
        </div>

        <div className="px-2 py-5">
          <div className="flex flex-row-reverse">
            <div className="hidden w-[150px] flex-col items-center justify-center">
              <img src={amazing.shegeftangiz} className="w-[88px]" />

              <div className="flex gap-1 mt-3">
                <span className="bg-white px-2 py-1 rounded text-xs font-bold">
                  {hours}
                </span>
                <span className="bg-white px-2 py-1 rounded text-xs font-bold">
                  {minutes}
                </span>
                <span className="bg-white px-2 py-1 rounded text-xs font-bold">
                  {seconds}
                </span>
              </div>

              <img src={amazing.percentage} className="w-[80px] mt-2" />

              <button className="text-white text-xs mt-3 flex items-center gap-1">
                مشاهده همه
                <img src="/images/icons/chev.svg" className="w-[16px]" />
              </button>
            </div>

            <div className="flex-1 min-w-0">
              <Swiper
                onSwiper={(s) => (swiperRef.current = s)}
                modules={[Navigation]}
                navigation
                dir="rtl"
                slidesPerView="auto"
                spaceBetween={5}
              >
                {!isMobile && (
                  <SwiperSlide
                    style={{ width: 160, height: 250 }}
                    className="bg-transparent"
                  >
                    <div className="hidden lg:flex flex-col items-center justify-center h-full text-white">
                      <img src={amazing.shegeftangiz} className="w-[88px]" />

                      <div className="flex gap-1 mt-3">
                        <span className="bg-white px-2 py-1 rounded text-xs font-bold text-black">
                          {seconds}
                        </span>
                        :
                        <span className="bg-white px-2 py-1 rounded text-xs font-bold text-black">
                          {minutes}
                        </span>
                        :
                        <span className="bg-white px-2 py-1 rounded text-xs font-bold text-black ">
                          {hours}
                        </span>
                      </div>

                      <img src={amazing.percentage} className="w-[80px] mt-2" />

                      <button className="text-white text-xs mt-3 flex items-center gap-1">
                        مشاهده همه
                        <img
                          src="/images/icons/chev.svg"
                          className="w-[16px]"
                        />
                      </button>
                    </div>
                  </SwiperSlide>
                )}

                {amazing.roll.map((item, index) => {
                  const isFirst = index === 0;

                  return (
                    <SwiperSlide
                      key={item.id}
                      style={{ width: 160, height: 250 }}
                      className={`
        bg-white
        ${isFirst ? "rounded-tr-xl rounded-br-xl" : ""}
      `}
                    >
                      <div className="flex flex-col items-center p-3">
                        <img
                          src={item.img}
                          className="w-[132px] h-[132px] object-contain"
                        />

                        <p className="text-[12px] mt-2 line-clamp-2 text-right h-[40px] overflow-hidden font-[iran]">
                          {item.text}
                        </p>

                        <div className="w-full flex justify-between items-center mt-3">
                          <span className="bg-[#d32f2f] text-white rounded-full px-2 py-[2px] text-[11px]">
                            {item.percentage}
                          </span>

                          <div className="flex gap-1">
                            <span className="text-xs font-bold">
                              {item.price}
                            </span>
                            <img
                              src="/images/icons/toman.svg"
                              className="w-[16px] h-[16px]"
                            />
                          </div>
                        </div>

                        <div className="w-full text-left text-[11px] text-gray-400 line-through mt-1 pl-5">
                          {item.pureprice}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <SwiperSlide
                  style={{ width: 160, height: 250 }}
                  className="bg-white rounded-tl-xl rounded-bl-xl"
                >
                  <div className="h-full gap-2.5 flex flex-col justify-center items-center ">
                    <img
                      src="/images/icons/arrowleft.svg"
                      alt="arrow"
                      className="w-[44px] h-[44px] border-[2px] border-[#3f4064] rounded-full p-1 box-border"
                    />
                    <span className="font-[iran] text-[#3f4064] text-xs">
                      مشاهده همه
                    </span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amazing;
