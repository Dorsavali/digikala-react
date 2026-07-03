const data = [
  {
    title: "با دیجی‌کالا",
    items: ["اتاق خبر", "فروش", "فرصت‌های شغلی", "گزارش تخلف در دیجی‌کالا","تماس با ما", "درباره ما"],
  },
  {
    title: "خدمات مشتریان",
    items: [ "رویه‌های بازگرداندن کالا","پرسش‌های متداول", "بازگشت کالا", "حریم خصوصی", "گزارش باگ"],
  },
  {
    title: "راهنمای خرید از دیجی‌کالا",
    items: ["ثبت سفارش", "ارسال", "پرداخت"],
  },
];

const FooterMenu = () => {
  return (
    <div className="w-full flex justify-between items-start px-5" dir="rtl">

      {data.map((col, i) => (
        <div key={i}>
          <h3 className="text-[16px] font-bold text-gray-700 mb-2">
            {col.title}
          </h3>

          <ul className="text-[14px] text-[#81858b] space-y-2 mt-4">
            {col.items.map((item, j) => (
              <li className="mb-4" key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="w-[24%]">
        <h3 className="text-[16px] font-bold mb-3" > همراه ما باشید</h3>
        <div className="flex justify-between text-gray-400">
            <img src="/images/icons/instagram.svg" alt="social" className="w-[40px] h-[40px]" />
             <img src="/images/icons/twitter.svg" alt="social" className="w-[40px] h-[40px]"/>
             <img src="/images/icons/linkedin.svg" alt="social" className="w-[40px] h-[40px]"/>
             <img src="/images/icons/aparat.svg" alt="social" className="w-[40px] h-[40px]"/>
             <img src="/images/icons/bale.svg" alt="social" className="w-[40px] h-[40px]"/>
        </div>

        <div className="mt-7 flex flex-col gap-2">
          <p className="text-[16px]">با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</p>
          <div className="flex gap-2">
            <input className="bg-gray-100 px-2 h-[48px] rounded-lg w-[270px]" />
            <button className="bg-gray-300 px-4 rounded-lg">ثبت</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FooterMenu;