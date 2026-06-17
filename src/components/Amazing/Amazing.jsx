import { useDispatch, useSelector } from "react-redux";
import { fetchAmazing } from "../Redux/Amazing/ActionAmazing";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./amazing.css";


const Amazing = () => {
  const { loading, error, amazing } = useSelector((state) => state.amazing);
  const dispatch = useDispatch();
 function handleAddamazing(item,source){
    dispatch(setAddcart({ ...item, uniqueId: `${source}_${item.id}` }))
    alert(`${item.text} به سبد خرید اضافه شد 🛒`)
  }



const START_TIME = 60 * 200; // 1 ساعت
const [timeLeft, setTimeLeft] = useState(START_TIME);

useEffect(() => {
  const interval = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        return START_TIME; // ریست به مقدار اولیه
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);
const hours = Math.floor(timeLeft / 3600).toString().padStart(2, "0");
const minutes = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, "0");
const seconds = (timeLeft % 60).toString().padStart(2, "0");



  useEffect(() => {
    dispatch(fetchAmazing());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  const amazingBg = {
  background:
    "linear-gradient(225deg, rgb(210, 44, 78) 0%, rgb(238, 56, 78) 100%)",
};
return (
  <section className="w-full lg:px-2 lg:px-4 mt-4">
    <div className="max-w-[1336px] mx-auto">
      <div className="lg:hidden py-4" style={amazingBg}>
  <div className="flex flex-row-reverse items-center px-3">

    <div className="flex flex-row-reverse items-center gap-2.5 w-3/4">

      <div className="flex flex-row-reverse items-center gap-2">
        <img
          src={amazing.percentage}
          alt=""
          className="w-6 h-6"
        />

        <img
          src={amazing.mobileshegeft}
          alt=""
          className="w-[108px]"
        />
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
     
     <img src="/public/images/icons/chev.svg" className="w-[18px] h-[18px] fill-white " alt="chev" />  همه
    </button>

  </div>
</div>
      <div className=" lg:rounded-2xl rounded-b-2xl p-2"  style={amazingBg}>
        <div className="flex flex-row-reverse">

          <div className="hidden lg:flex w-[150px]  flex-col items-center justify-center">
            <img
              src={amazing.shegeftangiz}
              alt=""
              className="w-[88px]"
            />
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
            <img
              src={amazing.percentage}
              alt=""
              className="w-[80px] mt-2"
            />

         

            <button className="text-white text-[12px] mt-4 flex flex-row-reverse items-center justify-start font-[iran]">
              مشاهده همه
     <img src="/public/images/icons/chev.svg" className="w-[18px] h-[18px] fill-white " alt="chev" /> 
            </button>
          </div>

          {/* Products Slider */}
          <div className="flex-1 overflow-hidden">
            <Swiper
              modules={[Navigation]}
              navigation
              dir="rtl"
              spaceBetween={3}
              breakpoints={{
                0: {
                  slidesPerView: 2.2,
                },
                480: {
                  slidesPerView: 3.2,
                },
                768: {
                  slidesPerView: 4.2,
                },
                1024: {
                  slidesPerView: 5.2,
                },
                1280: {
                  slidesPerView: 6.2,
                },
              }}
              className="custom-amazing-swiper"
            >
              {amazing?.roll?.map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  className={`!w-[145px] !h-[250px]  !bg-white ${
                    index === 0 ? "!rounded-r-2xl " : ""
                  }`}
                  
                >
                  <div className=" flex flex-col items-center p-3">

                    <img
                      src={item.img}
                      alt={item.text}
                      className="!w-[132px] !h-[132px] object-contain"
                    />

                    <p className="font-[iran] text-right line-clamp-2 text-[12px]  mt-2 leading-5 text-[#3f4064] h-[40px] overflow-hidden">
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
                      <img src="/public/images/icons/toman.svg" alt="toman" className="!w-[16px] !h-[16px]"/>
                      </div>
                    </div>

                    <div className="w-full text-left text-[11px] text-gray-400 line-through mt-1 pl-5">
                      {item.pureprice}
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <SwiperSlide className="!bg-white !rounded-l-2xl">
                <div className="h-[250px] flex flex-col justify-center items-center">
                  <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                    →
                  </div>

                  <span className="mt-3 text-sm">
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