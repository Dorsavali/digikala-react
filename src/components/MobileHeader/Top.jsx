import { fetchMobileHeader } from "../Redux/MobileHeader/ActionMobile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Top = ({
  compact = false,
  bgColor = "bg-[#f2f3f5]",
  showImages = true,
  fitText = false,
}) => {
  const [activeId, setActiveId] = useState(3);
  const dispatch = useDispatch();

  const { MobileHeader = [] } = useSelector(
    (state) => state.mobileHeader || {},
  );

  useEffect(() => {
    dispatch(fetchMobileHeader());
  }, [dispatch]);

  return (
    <div
      dir="rtl"
      className={`
  flex lg:hidden w-full min-w-full items-center gap-2 px-4 overflow-x-auto overflow-y-hidden no-scrollbar ${bgColor}
  ${compact ? "h-10 py-1" : "h-full py-2"}
`}
    >
      {MobileHeader.map((item) => {
        const active = String(activeId) === String(item.id);

        return (
          <a
            key={item.id}
            href={item.href || "#"}
            onClick={(e) => {
              e.preventDefault();
              setActiveId(item.id);
            }}
            className={`
  ${fitText ? "shrink-0 w-auto px-3" : "flex-1 min-w-[68px] max-w-[103px]"} rounded-lg overflow-hidden flex flex-col items-center justify-center shadow-sm transition-all duration-300
  ${compact ? "h-8" : "h-full"}
  ${active ? "text-white bg-[#e40138]" : "text-[#23254e] bg-white"}
`}
          >
            <div
              className={`w-full flex flex-col gap-1 items-center justify-center pt-1 ${
                active ? "bg-[#e40138]" : "bg-white"
              }`}
            >
              {showImages && !compact && item.imgSrc && (
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
              )}

              <span
                className={`
    w-full px-1 text-center truncate font-[iran,sans-serif]
    ${compact ? "text-[11px]" : "text-[11px] pb-1"}
    ${active ? "bg-[#e40138]" : "bg-white"}
  `}
              >
                {item.title}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Top;



