import { useState } from "react";

const FooterAccordion = () => {
  const accordionData = [
    {
      id: 1,
      title: "با دیجی‌کالا",
      items: [
        "اتاق خبر دیجی‌کالا",
        "فروش در دیجی‌کالا",
        "فرصت‌های شغلی",
        "گزارش تخلف",
        "تماس با ما",
        "درباره ما",
      ],
    },
    {
      id: 2,
      title: "خدمات مشتریان",
      items: [
        "پاسخ به پرسش‌های متداول",
        "رویه بازگرداندن کالا",
        "شرایط استفاده",
        "حریم خصوصی",
        "گزارش باگ",
      ],
    },
    {
      id: 3,
      title: "راهنمای خرید از دیجی‌کالا",
      items: ["نحوه ثبت سفارش", "شیوه‌های پرداخت", "نحوه ارسال سفارش"],
    },
    {
      id: 4,
      title: "شرکای تجاری",
      type: "partners",
      items: [
        "/images/footer/partners/bazzar.svg",
        "/images/footer/partners/digiclub.svg",
        "/images/footer/partners/digiexpress.svg",
        "/images/footer/partners/digify.svg",
        "/images/footer/partners/digikala-business.svg",
        "/images/footer/partners/digikala-service.svg",
        "/images/footer/partners/digimag.svg",
        "/images/footer/partners/digiMehr.svg",
        "/images/footer/partners/diginext.svg",
        "/images/footer/partners/digipay.svg",
        "/images/footer/partners/digiplus.svg",
        "/images/footer/partners/digistyle.svg",
        "/images/footer/partners/ganjeh.svg",
        "/images/footer/partners/jet.svg",
        "/images/footer/partners/myket.svg",
        "/images/footer/partners/sib-app.svg",
        "/images/footer/partners/smartech.svg",
        "/images/footer/partners/vido.svg",
      ],
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const handleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full" dir="rtl">
      {accordionData.map((item) => (
        <div key={item.id} className="border-b border-[#f0f0f1]">
          <button
            onClick={() => handleAccordion(item.id)}
            className="w-full flex items-center justify-between py-4"
          >
            <span className="text-[13px] font-[iranb] font-bold text-[#3f4064]">
              {item.title}
            </span>
            <img
              src="/images/icons/chevdown.svg"
              alt="chevdown"
              className={`w-5 h-5 block transition-transform duration-300 ${
                activeId === item.id ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeId === item.id ? "max-h-[900px] pb-4" : "max-h-0"
            }`}
          >
            {item.type === "partners" ? (
              <div className="grid grid-cols-3 border-t border-r border-[#f0f0f1]">
                {item.items.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square flex items-center justify-center border-l border-b border-[#f0f0f1]"
                  >
                    <img
                      src={image}
                      alt=""
                      className="max-w-[80px] max-h-7 object-contain"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {item.items.map((link, index) => (
                  <button className="text-right fonr-[iran] text-[12px] text-[#62666d]" key={index}>{link}</button>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterAccordion;
