const BackToTop = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center py-4 w-full">
      <button
        onClick={handleScrollTop}
        className="flex flex-row-reverse px-4 py-2  items-center gap-1 bg-[#f5f5f5] rounded-full font-[iran]  text-[#3f4064] text-[11px] font-medium"
      >
        <span>رفتن به بالا</span>
        <img
          src="/images/icons/chevup.svg"
          alt="arrow up"
          className="w-4 h-4"
        />
      </button>
    </div>
  );
};

export default BackToTop;
