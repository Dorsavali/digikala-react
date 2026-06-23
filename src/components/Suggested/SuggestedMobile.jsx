// SuggestedMobile.jsx

import SuggestedCard from "./SuggestedCard";

const SuggestedMobile = ({ suggested }) => {
  if (!suggested?.length) return null;

  return (
    <div className="space-y-5">
      {suggested.map((section) => (
        <div key={section.id}>
          {/* Header */}
          <div className="px-4 mb-3">
            <div className="flex items-center">
              <h2 className="text-lg font-bold text-gray-900 flex-1">
                {section.title}
              </h2>

              <a
                href={section.categoryLink}
                className="flex items-center gap-1 text-sm font-semibold text-slate-700"
              >
                مشاهده همه

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
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-1">
              {section.subtitle}
            </p>
          </div>

          {/* Slider */}
          <div className="flex overflow-x-auto overflow-y-hidden gap-2 scrollbar-hide px-2">
            {section.products.map((product) => (
              <SuggestedCard
                key={product.id}
                product={product}
                mobile
              />
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

              <span className="mt-3 text-sm font-semibold">
                مشاهده همه
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggestedMobile;