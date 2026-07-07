import { Link } from "react-router-dom";
import { fetchBanner } from "../Redux/Banner/ActionBanner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Banner = () => {
  const { loading, error, banner } = useSelector((state) => state.banner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBanner());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className=" w-full h-[35px] md:h-[35px] lg:h-[60px] bg-[rgba(0,0,0,0.04)]">
      <Link to="#" className="w-full h-full ">
        {banner?.map((item, index) => {
          return (
            <img
              src={item.imgSrc}
              key={index}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          );
        })}
      </Link>
    </div>
  );
};

export default Banner;
