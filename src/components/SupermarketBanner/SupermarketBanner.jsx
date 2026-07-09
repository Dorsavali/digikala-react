const products = [
  {
    id: 1,
    img: "/images/supermarketBanner/superitem1.webp",
    discount: "۵۹٪",
  },
  {
    id: 2,
    img: "/images/supermarketBanner/superitem2.webp",
    discount: "۵۵٪",
  },
];

const SuperMarketBanner = () => {
  return (
    <section dir="rtl" className=" hidden lg:flex justify-center w-full">
      <div
        className="
          relative
         w-full
          h-[110px]
          bg-[#ECEEEE]
          rounded-2xl
          overflow-hidden
          flex
          items-center
          justify-between
          px-10
        "
      >
        {/* Pattern */}
        <img
          src="/images/supermarketBanner/freshPattern.svg"
          alt=""
          className="
            absolute
            left-0
            top-0
            h-full
            
            pointer-events-none
            select-none
          "
        />

        {/* Right Side */}
        <div className="relative z-10 flex items-center gap-5 shrink-0">
          {/* Basket */}
          <img
            src="/images/supermarketBanner/fresh.webp"
            alt=""
            className="w-[66px] object-contain"
          />

          {/* Digikala SVG */}
          <img
            src="/images/supermarketBanner/banner.svg"
            alt=""
            className="h-7 object-contain"
          />

          {/* Discount */}
          <div
            className="
              h-7
              px-4
              rounded-full
              bg-[#029A49]
              text-white
              flex
              items-center
              justify-center
              text-[14px]
              font-[iran]
            "
          >
            تا ۳۰٪ تخفیف
          </div>
        </div>

        {/* Left Side */}
        <div className="relative z-10 flex items-center flex-1 justify-end">
          {/* Products */}
          <div className="flex items-center gap-2">
            {products.map((item) => (
              <div
                key={item.id}
                className="
                  relative
                  w-[74px]
                  h-[74px]
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <img
                  src={item.img}
                  alt=""
                  className="
                    w-[58px]
                    h-[58px]
                    rounded-full
                    object-cover
                  "
                />

                <span
                  className="
                    absolute
                    bottom-0
                    right-0
                    bg-[#D32F2F]
                    text-white
                    text-[12px]
                    font-[iran]
                    px-2
                    py-[2px]
                    rounded-2xl
                    leading-none
                  "
                >
                  {item.discount}
                </span>
              </div>
            ))}
          </div>

          {/* More Products Button */}
          <div className="mr-4 shrink-0">
            <a
              href="#"
              className="
                bg-white
                h-[50px]
                px-5
                rounded-full
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  text-[#029A49]
                  text-[12px]
                  font-[iran]
                "
              >
                بیش از ۵۰ کالا
              </span>

              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#029A49]">
                <path
                  fillRule="evenodd"
                  d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperMarketBanner;
