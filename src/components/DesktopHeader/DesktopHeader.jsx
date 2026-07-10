import { useEffect, useState } from "react";
import BottomNav from "./BottomNav";
import Line from "./line";
import Top from "./Top";

const DesktopHeader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHide(window.scrollY > 260);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="hidden max-w-[1536px] w-full lg:mx-auto flex lg:flex lg:flex-col">
      <div className="max-w-[1536px] w-full bg-white">
        <Top />
        <div
          className={`transition-all duration-300 ease-in-out ${
            hide
              ? "max-h-0 -translate-y-full opacity-0"
              : "max-h-20 translate-y-0 opacity-100"
          }`}
        >
          <BottomNav />
          <Line />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
