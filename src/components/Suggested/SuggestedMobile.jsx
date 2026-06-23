import SuggestedCard from "./SuggestedCard";
const SuggestedMobile = ({ suggested }) => {
  if (!suggested?.length) return null;

  return (
    <div>
      <hr className="w-full bg-[#f5f5f5] border-none h-2 mb-4"></hr>
<div className="space-y-5">
      {suggested.map((section) => (
        <div key={section.id}>
          {/* Header */}
          <div className="px-4 mb-3" dir="rtl">
            <div className="flex items-center">
              <h2 className="text-[11px] font-bold text-gray-900 flex-1">
                {section.title}
              </h2>

              <a
                href={section.categoryLink}
                className="flex items-center  text-[9px] font-[iran] text-[#3f4064]"
              >
                مشاهده همه
                <img className="w-[18px] h-[18px]" src="/images/icons/chevblack.svg" alt="arrow" />
              </a>
            </div>

            <p className="text-[9px] text-gray-500 mt-1">{section.subtitle}</p>
          </div>
          
          {/* Slider */}
          <div className="flex overflow-x-auto overflow-y-hidden gap-2 scrollbar-hide px-2">
            {section.products.map((product) => (
              <SuggestedCard key={product.id} product={product} mobile />
            ))}

            {/* مشاهده همه */}
            <a
              href={section.categoryLink}
              className="min-w-[140px] flex flex-col justify-center items-center"
            >
              <div className="w-11 h-11 rounded-full border-2 border-slate-700 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>

              <span className="mt-3 text-sm font-semibold">مشاهده همه</span>
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default SuggestedMobile;
