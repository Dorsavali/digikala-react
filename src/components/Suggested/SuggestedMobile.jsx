import Banner from "./Banner";
import SuggestedCard from "./SuggestedCard";
const SuggestedMobile = ({ suggested }) => {
  if (!suggested?.length) return null;
  const firstSections = suggested.filter((item) => item.id < 19);
  const secondSections = suggested.filter(
    (item) => item.id >= 19 && item.id < 21,
  );
  const thirdSections = suggested.filter((item) => item.id >= 21);
  return (
    <div className="py-4">
      <hr className="w-full bg-[#f5f5f5] border-none h-2 mb-4 "></hr>
      <div className="space-y-5  box-border">
        {firstSections.map((section) => (
          <div key={section.id} >
            {section.id === 16 || section.id === 18 && (
              <hr className="w-full bg-[#f5f5f5] border-none h-2 mb-4 " />
            )}
            <div className=" mb-3 px-4" dir="rtl">
              <div className="flex items-center">
                <h2 className="text-[14px] font-[iranb] text-gray-900 flex-1">
                  {section.title}
                </h2>

                <a
                  href={section.categoryLink}
                  className="flex items-center  text-[12px] font-[iranb] text-[#3f4064]"
                >
                  مشاهده همه
                  <img
                    className="w-[18px] h-[18px]"
                    src="/images/icons/chevblack.svg"
                    alt="arrow"
                  />
                </a>
              </div>

              <p className="text-[9px] text-gray-500 mt-1">
                {section.subtitle}
              </p>
            </div>
            <div
              className="flex overflow-x-auto overflow-y-hidden gap-2 scrollbar-hide pr-4"
              dir="rtl"
            >
              {section.products.map((product) => (
                <SuggestedCard key={product.id} product={product} mobile />
              ))}
              <a
                href={section.categoryLink}
                className="min-w-[140px] flex flex-col justify-center items-center"
              >
                <div
                  style={{ width: 160, height: 250 }}
                  className="bg-white rounded-tl-xl rounded-bl-xl"
                >
                  <div className="h-full gap-2.5 flex flex-col justify-center items-center ">
                    <img
                      src="/images/icons/arrowleft.svg"
                      alt="arrow"
                      className="w-[44px] h-[44px] border-[2px] border-[#3f4064] rounded-full p-1 box-border"
                    />
                    <span className="font-[iran] text-[#3f4064] text-xs">
                      مشاهده همه
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Banner image="/images/suggested/banner.webp" />
      <div className="space-y-5 box-border">
        {secondSections.map((section) => (
          <div key={section.id} >
             {section.id === 20 && (
              <hr className="w-full bg-[#f5f5f5] border-none h-2 mb-4 " />
            )}
            <div className=" mb-3 px-4" dir="rtl">
              <div className="flex items-center">
                <h2 className="text-[14px] font-[iranb] text-gray-900 flex-1">
                  {section.title}
                </h2>

                <a
                  href={section.categoryLink}
                  className="flex items-center  text-[12px] font-[iranb] text-[#3f4064]"
                >
                  مشاهده همه
                  <img
                    className="w-[18px] h-[18px]"
                    src="/images/icons/chevblack.svg"
                    alt="arrow"
                  />
                </a>
              </div>

              <p className="text-[9px] text-gray-500 mt-1">
                {section.subtitle}
              </p>
            </div>
            <div
              className="flex overflow-x-auto overflow-y-hidden gap-2 scrollbar-hide pr-4"
              dir="rtl"
            >
              {section.products.map((product) => (
                <SuggestedCard key={product.id} product={product} mobile />
              ))}
              <a
                href={section.categoryLink}
                className="min-w-[140px] flex flex-col justify-center items-center"
              >
                <div
                  style={{ width: 160, height: 250 }}
                  className="bg-white rounded-tl-xl rounded-bl-xl"
                >
                  <div className="h-full gap-2.5 flex flex-col justify-center items-center ">
                    <img
                      src="/images/icons/arrowleft.svg"
                      alt="arrow"
                      className="w-[44px] h-[44px] border-[2px] border-[#3f4064] rounded-full p-1 box-border"
                    />
                    <span className="font-[iran] text-[#3f4064] text-xs">
                      مشاهده همه
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Banner image="/images/suggested/banner1.webp" />
      <Banner image="/images/suggested/banner2.webp" />
      <div className="space-y-5  box-border">
        {thirdSections.map((section) => (
          <div key={section.id}>
            {section.id === 22 && (
              <hr className="w-full bg-[#f5f5f5] border-none h-2 mb-4 " />
            )}
            <div className=" mb-3 px-4" dir="rtl">
              <div className="flex items-center">
                <h2 className="text-[14px] font-[iranb] text-gray-900 flex-1">
                  {section.title}
                </h2>

                <a
                  href={section.categoryLink}
                  className="flex items-center  text-[12px] font-[iranb] text-[#3f4064]"
                >
                  مشاهده همه
                  <img
                    className="w-[18px] h-[18px]"
                    src="/images/icons/chevblack.svg"
                    alt="arrow"
                  />
                </a>
              </div>

              <p className="text-[9px] text-gray-500 mt-1">
                {section.subtitle}
              </p>
            </div>
            <div
              className="flex overflow-x-auto overflow-y-hidden gap-2 scrollbar-hide pr-4"
              dir="rtl"
            >
              {section.products.map((product) => (
                <SuggestedCard key={product.id} product={product} mobile />
              ))}
              <a
                href={section.categoryLink}
                className="min-w-[140px] flex flex-col justify-center items-center"
              >
                <div
                  style={{ width: 160, height: 250 }}
                  className="bg-white rounded-tl-xl rounded-bl-xl"
                >
                  <div className="h-full gap-2.5 flex flex-col justify-center items-center ">
                    <img
                      src="/images/icons/arrowleft.svg"
                      alt="arrow"
                      className="w-[44px] h-[44px] border-[2px] border-[#3f4064] rounded-full p-1 box-border"
                    />
                    <span className="font-[iran] text-[#3f4064] text-xs">
                      مشاهده همه
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedMobile;
