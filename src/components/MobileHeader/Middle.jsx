const Middle = () => {
    return ( <div>
        <div className="relative">
            <input type="search" name="search" id="search"  className="
            w-3/4
            h-10
            rounded-full
            bg-white
            outline-none
            focus:bg-white
            border
            border-[#e0e0e2]
            border-[0.8px]
          " />
        <div>
        <div dir="ltr" className="absolute flex top-2 justify-center items-center gap-2 font-[iranb] text-[#a1a3a8] text-[14px] pr-3">
            <img src="/images/header/typography.svg" alt="logo" className="w-[61px] h-[16px]"/>
            جتسجو در
            <img src="/images/icons/search.svg" alt="search" />
        </div>
        <span className="font-[cube] w-6 h-6 text-[24px] text-transparent bg-clip-text bg-[linear-gradient(114deg,var(--color-ai-400)_0%,var(--color-ai-500)_50%,var(--color-ai-300)_100%)]"></span>
        </div>
        </div>
        

    </div> );
}
 
export default Middle;