import { Link } from "react-router-dom";

const AmazingOfferCard = ({ product, index , total }) => {
  const columns = 6;
  const lastRowStart = total - columns;
  const isLastRow = index >= lastRowStart;
  return (
    <Link
      to={product.link}
          className={`
        flex flex-col justify-between items-center
        px-4 py-3
        border-b border-[#e0e0e2]
        ${isLastRow ? "border-b-0" : ""}
      `}
    >
      <div className="w-[150px] h-[150px] flex justify-center items-center mb-2">
        <img
          src={product.image}
          alt={product.title}
          className="w-[150px] h-[150px] object-contain"
        />
      </div>
      <div className="w-full">
        <div className="flex flex-row-reverse justify-between items-center">
          <div className="flex flex-row-reverse items-center gap-1">
                   <img
                            src="/public/images/icons/toman.svg"
                            alt="toman"
                            className="w-4 h-4"
                          />

            <span className="font-bold text-[16px] text-[#3f4064]">
              {product.price.toLocaleString("fa-IR")}
            </span>
          </div>
          <div className="bg-[#d32f2f] rounded-full px-2 py-[2px] text-white text-xs font-bold">
            {product.discount.toLocaleString("fa-IR")}٪
          </div>
        </div>

        <div className="flex justify-end pl-5 mt-1 ">
          <span className="text-[#c0c2c5] text-xs line-through">
            {product.oldPrice.toLocaleString("fa-IR")}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AmazingOfferCard;
