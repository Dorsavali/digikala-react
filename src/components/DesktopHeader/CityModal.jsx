import CustomFetch from "../CustomFetch/CustomFetch";

const CityModal = ({ closeModal }) => {
  const popularCities = CustomFetch("popularCities");
  const cities = CustomFetch("cities");

  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 z-[1000] w-[440px] h-[550px] bg-white rounded-2xl border border-[#e0e0e2] shadow-xl p-5 overflow-y-auto direction-rtl">

      <div className="flex justify-between items-center border-b border-[#e0e0e2] pb-4">
        <button
          onClick={closeModal}
          className="text-3xl font-bold cursor-pointer"
        >
          ×
        </button>

        <div className="font-[IranYekanM] text-[16px]">
          انتخاب شهر
        </div>
      </div>

      <div className="pt-4 flex flex-col gap-3">
        <div className="relative">
          <input
            type="search"
            placeholder="جستجو در استان‌ها و شهرهای ایران"
            className="w-full h-[50px] bg-[#f0f0f1] rounded border-none outline-none pr-8 text-[12px] placeholder:text-[#a1a3a8] placeholder:text-[12px]"
          />

          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a1a3a8]">
            🔍
          </span>
        </div>

        <p className="text-[14px] text-[#424242] font-[IranYekan]">
          برای مشاهده تخفیف‌ها و کالا‌های قابل ارسال
          به شهرتان، آن را انتخاب کنید.
        </p>
      </div>

      <div className="pt-5 flex flex-col">
        <h3 className="font-[IranYekanB] text-[16px] pb-3">
          شهر های پرتکرار
        </h3>
        <div className="flex gap-2 overflow-x-auto pb-4">
          {popularCities?.map((city) => (
            <button
              key={city.id}
              className="whitespace-nowrap flex items-center gap-1 border border-[#e0e0e2] rounded-full px-4 py-2 text-[14px] text-[#3f4064]"
            >
              <svg
                className="w-[18px] h-[18px]"
                viewBox="0 0 24 24"
              >
                <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z" />
              </svg>

              {city.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center pt-4">
          {cities?.map((item) => (
            <div
              key={item.id}
              className="w-full flex justify-between items-center border-b border-[#e0e0e2] p-[10px]"
            >
              <div className="flex items-center gap-1">
                <p className="text-[14px] font-[IranYekanB] text-[#3f4064]">
                  {item.city}
                </p>

                <p className="text-[14px] font-[IranYekan] text-[#a1a3a8]">
                  در {item.province}
                </p>
              </div>

              <svg
                className="w-[25px] h-[25px]"
                viewBox="0 0 24 24"
              >
                <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityModal;