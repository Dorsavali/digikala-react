const FooterPartners = () => {
  const partners = [
    {
      id: 1,
      name: "digiclub",
      img: "/images/footer/partners/digiclub.svg",
      href: "#",
    },
    {
      id: 2,
      name: "digiexpress",
      img: "/images/footer/partners/digiexpress.svg",
      href: "#",
    },
    {
      id: 3,
      name: "digify",
      img: "/images/footer/partners/digify.svg",
      href: "#",
    },
    {
      id: 4,
      name: "digikala-business",
      img: "/images/footer/partners/digikala-business.svg",
      href: "#",
    },
    {
      id: 5,
      name: "digikala-service",
      img: "/images/footer/partners/digikala-service.svg",
      href: "#",
    },
    {
      id: 6,
      name: "digimag",
      img: "/images/footer/partners/digimag.svg",
      href: "#",
    },
    {
      id: 7,
      name: "digiMehr",
      img: "/images/footer/partners/digiMehr.svg",
      href: "#",
    },
    {
      id: 8,
      name: "diginext",
      img: "/images/footer/partners/diginext.svg",
      href: "#",
    },
    {
      id: 9,
      name: "digipay",
      img: "/images/footer/partners/digipay.svg",
      href: "#",
    },
    {
      id: 10,
      name: "digiplus",
      img: "/images/footer/partners/digiplus.svg",
      href: "#",
    },
    {
      id: 11,
      name: "digistyle",
      img: "/images/footer/partners/digistyle.svg",
      href: "#",
    },
    {
      id: 12,
      name: "ganjeh",
      img: "/images/footer/partners/ganjeh.svg",
      href: "#",
    },
    { id: 13, name: "jet", img: "/images/footer/partners/jet.svg", href: "#" },
    {
      id: 14,
      name: "smartech",
      img: "/images/footer/partners/smartech.svg",
      href: "#",
    },
    {
      id: 15,
      name: "miare",
      img: "/images/footer/partners/miare.svg",
      href: "#",
    },
    {
      id: 16,
      name: "digiclub2",
      img: "/images/footer/partners/digiclub.svg",
      href: "#",
    },
    {
      id: 17,
      name: "digipay2",
      img: "/images/footer/partners/digipay.svg",
      href: "#",
    },
    {
      id: 18,
      name: "digimag2",
      img: "/images/footer/partners/digimag.svg",
      href: "#",
    },
  ];

  return (
    <div className="w-full lg:mx-auto  lg:mx-auto  bg-[#f0f0f1]" dir="rtl">
      <div className="max-w-[1636px] lg:mx-auto  flex flex-wrap w-full">
        {partners.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="w-[11.1111%] h-[100px] bg-[#f0f0f1] border-r border-b border-[#e0e0e2] flex items-center justify-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="max-w-[110px] max-h-[32px] object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterPartners;
