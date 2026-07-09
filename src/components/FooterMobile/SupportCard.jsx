const SupportCard = () => {
  const supportData = [
    {
      id: 1,
      type: "icon",
      iconClass: "font-[cube] text-[20px] ",
      title: "تماس با پشتیبانی",
      subtitle: "۷ روز هفته، ۲۴ ساعت",
      buttonText: "تماس",
    },
    {
      id: 2,
      type: "image",
      image: "/images/footer/Logo.webp",
      title: "اپلیکیشن دیجی‌کالا",
      subtitle: "تجربه خرید بهتر",
      buttonText: "دانلود",
    },
  ];

  return (
    <>
      {supportData.map((item) => (
        <div
          key={item.id}
          className=" w-full flex flex-row-reverse items-center justify-between py-2 border-b border-[#f0f0f1]"
        >
          <div className="flex flex-row-reverse items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center  bg-[#f2f2f2] rounded-full">
              {item.type === "icon" ? (
                <i className={item.iconClass}></i>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 rounded-full"
                />
              )}
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-[12px] text-right font-bold text-[#3f4064] font-[iran]">
                {item.title}
              </h3>

              <p className="text-[11px] font-[iran] text-[#81858b] text-right">
                {item.subtitle}
              </p>
            </div>
          </div>

          <button className="flex items-center justify-center rounded-full bg-[#f5f5f5] px-4 py-1.5 h-10 text-[11px] font-medium text-[#3f4064] whitespace-nowrap">
            {item.buttonText}
          </button>
        </div>
      ))}
    </>
  );
};

export default SupportCard;
