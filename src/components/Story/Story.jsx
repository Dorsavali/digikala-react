import { useDispatch, useSelector } from "react-redux";
import { fetchStory } from "../Redux/Story/ActionStory";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./story.css";

const Story = () => {
  const { loading, error, story } = useSelector((state) => state.story);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStory());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div
      dir="rtl"
      className=" hidden lg:flex select-none w-full lg:h-[173px] flex flex-row flex-wrap justify-center pt-3 overflow-hidden lg:overflow-visible"
    >
      <div className="w-[92%] h-[150px] flex flex-row flex-nowrap items-center gap-6">
        <Swiper
          dir="rtl"
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={12.5}
          breakpoints={{
            768: {
              slidesPerView: 8.5,
            },
            1200: {
              slidesPerView: 10.5,
            },
            1440: {
              slidesPerView: 12.5,
            },
          }}
          navigation
          className="w-full h-full"
        >
          {story?.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="!flex !flex-col justify-start items-center text-center cursor-pointer bg-white h-full"
              >
                <div className="flex flex-col items-center w-[110px] h-full pt-2 box-border">
                  <div className="relative w-[84px] h-[84px] flex items-center justify-center flex-shrink-0">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(315deg, rgb(224, 61, 150), rgb(125, 76, 158))",
                      }}
                    />

                    <div className="absolute inset-[2px] rounded-full bg-white" />

                    <img
                      src={item.img}
                      alt={item.name}
                      className="relative w-[76px] h-[76px] rounded-full object-cover"
                    />
                  </div>

                  <div className="w-full h-[48px] mt-3 text-[11px] leading-6 text-center text-[#23254e] font-[iran] line-clamp-2 overflow-hidden">
                    {item.name}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Story;
