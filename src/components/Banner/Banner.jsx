import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full h-[35px] md:h-[35px] lg:h-[60px] bg-[rgba(0,0,0,0.04)]">
      <Link to="#" className="w-full h-full">
        <img
          src="/images/banner/banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </Link>
    </div>
  );
};

export default Banner;
