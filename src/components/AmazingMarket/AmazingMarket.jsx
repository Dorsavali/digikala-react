import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./AmazingMarket.css";
import { fetchAmazingMarket } from "../Redux/AmazingMarket/ActionAmazingMarket";

const AmazingMarket = () => {
  const { loading, error, amazingMarket } = useSelector(
    (state) => state.amazingMarket,
  );
  const dispatch = useDispatch();
  const swiperRef = useRef(null);

  const START_TIME = 60 * 200;
  const [timeLeft, setTimeLeft] = useState(START_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return START_TIME;
        }
        return prev - 1;
      });
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

  useEffect(() => {
    dispatch(fetchAmazingMarket());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  const amazingMarketBg = {
    background:
      "linear-gradient(225deg, rgb(107, 185, 39) 0%, rgb(157, 196, 77) 100%)",
  };
  return (
    <section
      className="lg:hidden w-full lg:px-2 lg:px-4 mt-4"
      style={amazingMarketBg}
    >
      <div className="max-w-334 mx-auto">
        <div className=" pt-4">
          <div className="flex flex-row-reverse items-center px-3">
            <div className="flex flex-row-reverse items-center gap-2.5 w-3/4">
              <div className="flex flex-row-reverse items-center gap-2 ">
                {amazingMarket?.percentage && (
                  <img
                    src={amazingMarket.percentage}
                    alt="percentage"
                    className="w-6 h-6"
                  />
                )}
                {amazingMarket?.mobileshegeft && (
                  <img
                    src={amazingMarket.mobileshegeft}
                    alt="mobileshegeft"
                    className="w-[108px]"
                  />
                )}
              </div>

              <div className="flex items-center gap-1">
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
            </div>

            <button className="flex items-center justify-start w-1/4 text-white text-sm text-center font-[iran]">
              <img
                src="/images/icons/chev.svg"
                className="w-[18px] h-[18px] fill-white "
                alt="chev"
              />{" "}
              همه
            </button>
          </div>
        </div>
        <div className=" lg:rounded-2xl rounded-b-2xl px-2 py-5">
          <div className="flex flex-row-reverse">
            <div className="hidden lg:flex w-[150px]  flex-col items-center justify-center">
              {amazingMarket?.shegeftangiz && (
                <img
                  src={amazingMarket.shegeftangiz}
                  alt=""
                  className="w-[88px]"
                />
              )}
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
              {amazingMarket?.percentage && (
                <img
                  src={amazingMarket.percentage}
                  alt="percentage"
                  className="w-6 h-6"
                />
              )}

              <button className="text-white text-[12px] mt-4 flex flex-row-reverse items-center justify-start font-[iran]">
                مشاهده همه
                <img
                  src="/images/icons/chev.svg"
                  className="w-[18px] h-[18px] fill-white "
                  alt="chev"
                />
              </button>
            </div>

            <div className="flex-1 overflow-hidden">
              <Swiper
                onSwiper={(s) => (swiperRef.current = s)}
                modules={[Navigation]}
                navigation
                dir="rtl"
                slidesPerView="auto"
                spaceBetween={5}
                breakpoints={{
                  0: {
                    slidesPerView: 3.5,
                  },
                  480: {
                    slidesPerView: 3.5,
                  },
                  768: {
                    slidesPerView: 7,
                  },
                  1024: {
                    slidesPerView: 7,
                  },
                  1280: {
                    slidesPerView: 7,
                  },
                }}
                className="custom-amazing-swiper"
              >
                {amazingMarket?.roll?.map((item, index) => (
                  <SwiperSlide
                    style={{ width: 140, height: 220 }}
                    key={item.id}
                    className={` !bg-white ${
                      index === 0 ? "!rounded-tr-2xl !rounded-br-2xl" : ""
                    }`}
                  >
                    <div className="flex flex-col  p-2 h-full">
                      {item.img && (
                        <img
                          src={item.img}
                          alt={item.text}
                          className="w-full h-[114px] object-contain rounded-md"
                        />
                      )}

                      <h3 className="text-xs h-10 mt-2 font-[iran , sans-serif] font-medium leading-5 line-clamp-2 overflow-hidden text-right">
                        {item.text}
                      </h3>

                      <div className="mt-2">
                        {item.percentage && (
                          <div className="flex items-center gap-1">
                            <span className="w-[28px] h-4 bg-[#d32f2f] text-white text-center text-xs px-1 rounded-full font-[iran] px-1">
                              {item.percentage}
                            </span>

                            <span className="line-through text-gray-400 text-xs font-[iran]">
                              {item.price}
                            </span>
                          </div>
                        )}

                        <div className="flex items-center gap-1 mt-1">
                          <span className="font-bold text-sm font-[iran]">
                            {item.pureprice}
                          </span>

                          <img
                            src="/public/images/icons/toman.svg"
                            alt="toman"
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <SwiperSlide
                  style={{ width: 160, height: 220 }}
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

export default AmazingMarket;
