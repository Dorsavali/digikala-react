const FooterDownload = () => {
  return (
    <div dir="rtl" className=" w-[97%] mt-10 bg-[#3C4B6D] rounded-lg px-5 py-3 flex justify-between items-center text-white">

      <div className="flex items-center gap-4">
        <img src="/images/footer/Logo.webp" alt="bazar" className=" h-[44px]    " />
        <div className="text-[20px] font-[iran] font-medium">
        دانلود اپلیکیشن دیجی‌کالا
        </div>
      </div>

      <div className="flex gap-4">
        <img src="/images/footer/bazar.svg" alt="bazar" className="w-[142px] h-[44px]    " />
        <img src="/images/footer/myket.svg" alt="myket" className="w-[142px] h-[44px]    " />
        <img src="/images/footer/sib.svg" alt="sib" className="w-[142px] h-[44px]    " />
        <img src="/images/footer/more.svg" alt="sib" className="bg-white h-[44px] rounded-lg    " />
      </div>

    </div>
  );
};

export default FooterDownload;