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
      {/* Image */}
      <div className="bg-neutral-100 flex items-center justify-center h-[140px] relative">
        {image ? (
          <img
            src={image}
            alt={product.title}
            className="w-full h-full object-contain p-2"
          />
        ) : (
          <div className="w-full h-full bg-neutral-100" />
        )}
      </div>

      {/* Info */}
      <div className="p-2 flex flex-col gap-1 flex-1 justify-between">
        <p className="text-xs leading-5 line-clamp-2 text-gray-800 h-10">
          {product.title}
        </p>

        <div className="flex flex-col items-start pt-1">
          {product.discount && product.originalPrice && (
            <div className="flex items-center gap-1">
              <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                ٪{product.discount}
              </span>
              <span className="text-[11px] text-gray-300 line-through">
                {product.originalPrice.toLocaleString()}
              </span>
            </div>
          )}
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-sm font-bold text-gray-800">
              {product.price.toLocaleString()}
            </span>
            <span className="text-[11px] text-gray-500">تومان</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SuggestedCard;