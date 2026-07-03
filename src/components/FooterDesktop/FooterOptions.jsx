const options = [
  {
    id: 1,
    title: "امکان تحویل اکسپرس",
    image: "/images/footer/express-delivery.svg",
  },
  {
    id: 2,
    title: "امکان پرداخت در محل",
    image: "/images/footer/cash-on-delivery.svg",
  },
  {
    id: 3,
    title: "۷ روز هفته، ۲۴ ساعته",
    image: "/images/footer/support.svg",
  },
  {
    id: 4,
    title: "هفت روز ضمانت بازگشت کالا",
    image: "/images/footer/days-return.svg",
  },
  {
    id: 5,
    title: "ضمانت اصل بودن کالا",
    image: "/images/footer/original-products.svg ",
  },
];
const FooterOptions = () => {
  return (
    <div className="w-full flex justify-around items-center my-8 px-5" dir="rtl">
      {options.map((item) => (
        <div
          key={item.id}
          className="w-[292px] py-3 flex flex-col items-center"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-14 h-14 object-contain"
          />

          <p className="mt-2 text-[11px] text-[#3f4064]">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FooterOptions;