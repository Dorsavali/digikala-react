import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMobileMegaMenu } from "../Redux/MobileMegaMenu/ActionsMobileMegaMenu";

const SvgIcon = ({ svg, active }) => {
  if (!svg) return null;

  const paths = svg.paths || [
    {
      d: svg.path || svg.d,
      fillRule: svg.fillRule || svg["fill-rule"],
      clipRule: svg.clipRule || svg["clip-rule"],
    },
  ];

  return (
    <svg
      viewBox={svg.viewBox || "0 0 24 24"}
      className={`w-4 h-4 shrink-0 fill-current ${
        active ? "text-[#ef4056]" : "text-[#424750]"
      }`}
    >
      {paths
        .filter((path) => path.d)
        .map((path, index) => (
          <path
            key={index}
            d={path.d}
            fillRule={path.fillRule || "evenodd"}
            clipRule={path.clipRule || "evenodd"}
          />
        ))}
    </svg>
  );
};

const ChevronIcon = ({ open }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-5 h-5 fill-[#424750] transition-transform ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
    </svg>
  );
};

const MobileMegaMenu = () => {
  const dispatch = useDispatch();
  const [activeId, setActiveId] = useState(null);
  const [openGroupId, setOpenGroupId] = useState(null);

  const { mobileMegaMenu = [], loading, error } = useSelector(
    (state) => state.mobileMegaMenu || {}
  );

  useEffect(() => {
    dispatch(fetchMobileMegaMenu());
  }, [dispatch]);

  const activeItem =
    mobileMegaMenu.find((item) => String(item.id) === String(activeId)) ||
    mobileMegaMenu[0];

  const groups =
    activeItem?.columns?.flatMap((column) =>
      (column.groups || []).map((group) => ({
        ...group,
        key: `${activeItem?.id}-${column.id}-${group.id}`,
      }))
    ) || [];

  if (loading) {
    return <div className="p-4 font-[iran] text-sm">در حال بارگذاری...</div>;
  }

  if (error) {
    return <div className="p-4 font-[iran] text-sm text-red-500">{error}</div>;
  }

  return (
    <div
      dir="rtl"
      className="flex h-[calc(100vh-140px)] w-full overflow-hidden bg-white font-[iran]"
    >
      <aside className="w-[92px] shrink-0 overflow-y-auto bg-[#f1f2f4] no-scrollbar pb-12">
        {mobileMegaMenu.map((item) => {
          const active = String(activeItem?.id) === String(item.id);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveId(item.id);
                setOpenGroupId(null);
              }}
              className={`flex w-full flex-col items-center gap-1 border-b border-l border-[#e0e0e2] px-2 py-3 text-center transition-colors ${
                active
                  ? "bg-white text-[#ef4056]"
                  : "bg-[#f1f2f4] text-[#3f4064]"
              }`}
            >
              <SvgIcon svg={item.svg} active={active} />

              <span className="text-[9px] leading-5 font-[iranb]">
                {item.title}
              </span>
            </button>
          );
        })}
      </aside>

      <main className="flex-1 overflow-y-auto bg-white px-3 pb-12 no-scrollbar">
        <a
          href={activeItem?.allProductsHref || activeItem?.href || "#"}
          className="flex items-center justify-between border-b border-[#f0f0f1] py-4 text-[13px] font-[iranb] text-[#19bfd3]"
        >
          <span>
            {activeItem?.allProductsTitle || `همه محصولات ${activeItem?.title}`}
          </span>
         
        </a>

        {groups.map((group) => {
          const open = String(openGroupId) === String(group.key);
          const items = group.items || [];

          return (
            <div key={group.key} className="border-b border-[#f0f0f1]">
              <button
                type="button"
                onClick={() => setOpenGroupId(open ? null : group.key)}
                className="flex w-full items-center justify-between py-4 text-right text-[12px] font-[iranb] text-[#23254e]"
              >
                <span>{group.title}</span>
                <ChevronIcon open={open} />
              </button>

              {open && (
                <div className="pb-3">
                  {items.length > 0 ? (
                    <div className="flex flex-col">
                      {items.map((subItem) => (
                        <a
                          key={`${group.key}-${subItem.id}`}
                          href={subItem.href || "#"}
                          className="block border-t border-[#f5f5f5] py-3 pr-3 text-[12px] leading-6 text-[#81858b] font-[iran]"
                        >
                          {subItem.title}
                        </a>
                      ))}

                      <a
                        href={group.href || "#"}
                        className="block border-t border-[#f5f5f5] py-3 pr-3 text-[12px] leading-6 text-[#19bfd3] font-[iranb]"
                      >
                        همه کالاها
                      </a>
                    </div>
                  ) : (
                    <a
                      href={group.href || "#"}
                      className="block border-t border-[#f5f5f5] py-3 pr-3 text-[12px] leading-6 text-[#19bfd3] font-[iranb]"
                    >
                      مشاهده همه
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default MobileMegaMenu;
