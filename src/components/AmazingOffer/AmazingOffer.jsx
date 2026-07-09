import ReduxStatus from "../Ui/ReduxStatus";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAmazingOffer } from "../Redux/AmazingOffer/ActionAmazingOffer";
import AmazingOfferCard from "./AmazingOfferCard";

const AmazingOffer = () => {
  const dispatch = useDispatch();

  const { amazingOffer, loading, error } = useSelector(
    (state) => state.amazingOffer,
  );

  useEffect(() => {
    dispatch(fetchAmazingOffer());
  }, [dispatch]);

  if (loading || error) return <ReduxStatus loading={loading} error={error} />;

  return (
    <div className=" w-full flex justify-center items-center  hidden lg:flex">
      <div
        dir="rtl"
        className="w-full border border-[0.8px] border-[#e0e0e2] rounded-2xl overflow-hidden bg-white"
      >
        <div className="flex justify-center items-center h-14 gap-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#ef4056]">
            <path
              fillRule="evenodd"
              d="M22 4a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-.707-.293l-4-4A1 1 0 011 15V9a1 1 0 01.293-.707l4-4A1 1 0 016 4h16zm-1 2H6.414L3 9.414v5.172L6.414 18H21V6zm-6 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 12a3 3 0 11-6 0 3 3 0 016 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0zm12.848-3.47l-5 8-1.696-1.06 5-8 1.696 1.06z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-xl font-[iranb] text-[#0c0c0c]">
            منتخب محصولات تخفیف و حراج
          </h2>
        </div>
        <div
          className="
    grid
    grid-cols-2
    lg:grid-cols-6

    rtl
  "
        >
          {amazingOffer.map((product, index) => (
            <AmazingOfferCard
              key={product.id}
              product={product}
              index={index}
              total={amazingOffer.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmazingOffer;
