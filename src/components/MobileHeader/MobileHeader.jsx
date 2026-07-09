import { useEffect, useRef, useState } from "react";
import City from "./City";
import Middle from "./Middle";
import Top from "./Top";

const MobileHeader = () => {
  const lastY = useRef(0);
  const ticking = useRef(false);
  const compactRef = useRef(false);

  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const setCompactSafe = (next) => {
      if (compactRef.current === next) return;

      compactRef.current = next;
      setCompact(next);
    };

    const onScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const diff = currentY - lastY.current;

        if (Math.abs(diff) < 8) {
          ticking.current = false;
          return;
        }

        if (currentY <= 20) {
          setCompactSafe(false);
        } else if (currentY > 400) {
          setCompactSafe(true);
        } else if (diff < 0) {
          setCompactSafe(false);
        }

        lastY.current = currentY;
        ticking.current = false;
      });
    };

    lastY.current = window.scrollY;

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 w-full flex flex-col lg:hidden bg-[#f2f3f5] transform-gpu will-change-transform"
    >
      <div
        className={`
          overflow-hidden
          transition-[height,opacity,transform]
          duration-300
          ease-out
          transform-gpu
          will-change-[height,opacity,transform]
          ${
            compact
              ? "h-10 opacity-100 translate-y-0"
              : "h-[82px] opacity-100 translate-y-0"
          }
        `}
      >
        <Top compact={compact} />
      </div>

      <div className="relative z-10 shrink-0 transform-gpu">
        <Middle />
      </div>

      <div
        className={`
          overflow-hidden
          transition-[height,opacity,transform]
          duration-300
          ease-out
          transform-gpu
          will-change-[height,opacity,transform]
          ${
            compact
              ? "h-0 opacity-0 -translate-y-3"
              : "h-9 opacity-100 translate-y-0"
          }
        `}
      >
        <City />
      </div>
    </header>
  );
};

export default MobileHeader;