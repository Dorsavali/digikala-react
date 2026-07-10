const FooterTop = () => {
  return (
    <div
      className="max-w-[1636px] lg:mx-auto  w-full flex justify-between items-center px-5"
      dir="rtl"
    >
      <img
        src="/images/header/logo.svg"
        alt="logo"
        className="w-[195px] h-[30px]"
      />

<div className="border border-[#e0e0e2] rounded-lg px-4 py-2 cursor-pointer">
  <button
    type="button"
    onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }}
    className="text-[12px] cursor-pointer text-[#a1a3a8] flex items-center gap-2"
  >
    بازگشت به بالا
    <img
      src="/images/icons/chevupgray.svg"
      alt="arrow up"
      className="w-6 h-6"
    />
  </button>
</div>
    </div>
  );
};

export default FooterTop;
