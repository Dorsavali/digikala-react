import SuggestedCard from "./SuggestedCard";

const SuggestedDesktop = ({ suggested }) => {
  if (!suggested?.length) return null;

  return (
    <section>
  <div
      className=" w-full  flex justify-center items-center hidden lg:flex bg-white border border-gray-200 rounded-2xl overflow-hidden"
      dir="rtl"
    >
      <div className="grid grid-cols-4 w-full">
        {suggested.slice(0, 4).map((section, index) => (
          <div
            key={section.id}
            className={`py-2 px-5 ${
              index !== 0 ? "border-r border-gray-200" : ""
            }`}
          >
            <div className="mb-5">
              <h2 className="text-[16px] font-bold text-slate-800">
                {section.title}
              </h2>

              <p className="text-[11px] text-gray-400 mt-1">
                {section.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 rounded overflow-hidden">
              {section.products.slice(0, 4).map((product, i) => (
                <div
                  key={product.id}
                  className={`
                   flex items-center justify-center p-2
                    ${i % 2 === 0 ? "border-l border-gray-200" : ""}
                    ${i < 2 ? "border-b border-gray-200" : ""}
                  `}
                >
                  <SuggestedCard product={product} desktop />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4">
              <a
                href={section.categoryLink}
                className="text-[#1672dd] text-xs font-bold flex items-center"
              >
                مشاهده
                <img
                  className="w-[18px] h-[18px]"
                  src="/images/icons/chevblue.svg"
                  alt="arrow"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  
  );
};

export default SuggestedDesktop;
