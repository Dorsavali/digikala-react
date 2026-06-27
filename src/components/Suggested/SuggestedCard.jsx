const SuggestedCard = ({ product, desktop = false }) => {
  const image = product.image;

  if (desktop) {
    return (
      <a href={product.link} className="block w-[130px] h-[130px]">
        <img
          src={image}
          alt={product.title}
          className="w-full h-full object-contain hover:scale-105 transition duration-300"
        />
      </a>
    );
  }

  // Mobile
  return (
    <a
      href={product.link}
      className="min-w-[140px] w-[140px] flex-shrink-0 border border-gray-200 rounded-xl overflow-hidden bg-white flex flex-col justify-between"
    >
      <div className="bg-neutral-100 flex items-center justify-center h-[140px] relative">
        {image ? (
          <img
            src={image}
            alt={product.title}
            className="w-full h-full object-contain mix-blend-multiply p-2"
          />
        ) : (
          <div className="w-full h-full bg-neutral-100" />
        )}
      </div>
      <div className="p-2 flex flex-col flex-1 justify-around">
        <p className="text-xs leading-5 line-clamp-2 text-gray-800 h-10 font-[iran] text-[11px]">
          {product.title}
        </p>
        <div className="flex flex-col items-start pt-1">
          {product.discount && product.originalPrice && (
            <div className="flex items-center gap-1">
              <span className=" h-4 bg-[#d32f2f] text-white text-center text-xs px-1.5  rounded-full font-[iran]">
                ٪{product.discount}
              </span>
              <span className="line-through text-gray-400 text-xs font-[iran]">
                {product.originalPrice.toLocaleString()}
              </span>
            </div>
          )}
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-sm font-bold text-gray-800">
              {product.price.toLocaleString()}
            </span>
            <img
                            src="/public/images/icons/toman.svg"
                            alt="toman"
                            className="w-4 h-4"
                          />
          </div>
        </div>
      </div>
    </a>
  );
};

export default SuggestedCard;