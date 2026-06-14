import { Link } from "react-router-dom";
import CustomFetch from "../CustomFetch/CustomFetch";

const Banner = () => {
  const Banners = CustomFetch("Banner");
  return (
    <div className="w-full h-[35px] md:h-[35px] lg:h-[60px] bg-[rgba(0,0,0,0.04)]">
      <Link to="#" className="w-full h-full">
        {Banners?.map((item , index) => {
          return (
              <img  src={item.imgSrc} key={index} alt="Banner" className="w-full h-full object-cover" />
          );
        })}
      </Link>
    </div>
  );
};

export default Banner;
