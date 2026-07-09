import { useState } from "react";

const SuperMarketModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed hidden bottom-6 right-6 z-50 lg:flex cursor-pointer items-center gap-2 rounded-3xl bg-[#029a49] px-3 py-2.5 text-white shadow-lg"
      >
        <span className="pl-1 text-[18px] font-[cube]"></span>
        <span className="font-[iran]">سوپرمارکت</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/30 sm:items-center">
          <div className=" w-full overflow-hidden rounded-2xl bg-white sm:w-[420px]">
            <div className="flex h-14 items-center justify-between px-5">
              <button
                onClick={() => setOpen(false)}
                className="text-2xl text-gray-600 cursor-pointer"
              >
                ×
              </button>
              <h5 className="text-sm font-bold text-gray-700">
                یکی از سوپرمارکت‌های زیر را انتخاب کنید
              </h5>
            </div>

            <div className="flex gap-3 p-4" dir="rtl">
              <div className="flex h-[250px] flex-1 flex-col rounded-lg bg-[#dbf3e6] cursor-pointer">
                <div className="flex items-center gap-1 text-sm font-bold p-3">
                  پرتخفیف و متنوع
                  <img
                    src="/images/icons/chevblack.svg"
                    className="h-[18px] w-[18px] "
                    alt="chev"
                  />
                </div>

                <div className="mt-4 flex w-fit items-center gap-1 rounded-l-2xl bg-[#029a49] px-3 py-1 text-xs text-white">
                  <span className="pl-1 text-[18px] font-[cube]"></span>
                  ارسال سریع
                </div>

                <img
                  src="/images/supermarketmodal/fresh-shop-basket.webp"
                  className="mt-auto h-[130px] w-[130px] object-contain self-end"
                  alt="fresh"
                />
              </div>

              <div className="flex h-[250px] flex-1 flex-col rounded-lg bg-[#feebde] cursor-pointer ">
                <div className="flex items-center gap-1 text-sm font-bold p-3">
                  ارسال فوری
                  <img
                    src="/images/icons/chevblack.svg"
                    className="h-[18px] w-[18px]"
                    alt="chev"
                  />
                </div>

                <div className="mt-4 flex w-fit items-center gap-1 rounded-l-2xl bg-[#ff8042] px-3 py-1 text-xs text-white font-[iran]">
                  <span className="pl-1 text-[18px] font-[cube]"></span>
                  ۴۵ دقیقه‌ای
                </div>

                <img
                  src="/images/supermarketmodal/jet-shop-basket.webp"
                  className="mt-auto h-[130px] w-[130px] object-contain self-end"
                  alt="jet"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuperMarketModal;
