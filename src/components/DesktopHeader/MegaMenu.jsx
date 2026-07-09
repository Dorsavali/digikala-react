import { useState } from "react";

const SvgIcon = ({ svg, className = "h-4 w-4 fill-current" }) => {
  if (!svg) return null;

  const viewBox = svg.viewBox || svg.viewbox || "0 0 24 24";

  const paths = svg.paths || [
    {
      d: svg.path || svg.d,
      fillRule: svg.fillRule || svg["fill-rule"],
      clipRule: svg.clipRule || svg["clip-rule"],
    },
  ];

  return (
    <svg className={className} viewBox={viewBox}>
      {paths
        .filter((path) => path.d)
        .map((path, index) => (
          <path
            key={index}
            d={path.d}
            fillRule={path.fillRule || path["fill-rule"]}
            clipRule={path.clipRule || path["clip-rule"]}
          />
        ))}
    </svg>
  );
};

const MenuIcon = ({ icon, svg }) => {
  if (svg) {
    return (
      <SvgIcon svg={svg} className="h-[18px] w-[18px] shrink-0 fill-current" />
    );
  }

  if (!icon) return null;

  if (icon.type === "cube") {
    return (
      <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center font-[cube] text-[18px] leading-none">
        {icon.content}
      </span>
    );
  }

  if (icon.type === "symbol") {
    return (
      <svg className="h-[18px] w-[18px] shrink-0 fill-current">
        <use href={`#${icon.id}`} />
      </svg>
    );
  }

  if (icon.type === "svg") {
    return (
      <svg
        className="h-[18px] w-[18px] shrink-0 fill-current"
        viewBox={icon.viewBox || "0 0 24 24"}
      >
        <path d={icon.path} fillRule={icon.fillRule} clipRule={icon.clipRule} />
      </svg>
    );
  }

  return null;
};

const ArrowIcon = ({ className = "h-3.5 w-3.5 fill-current" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z" />
    </svg>
  );
};

const MegaMenu = ({ items = [] }) => {
  const [activeId, setActiveId] = useState(null);

  const activeItem = items.find((item) => item.id === activeId) || items[0];

  if (!items.length) return null;

  const columnCount = Math.min(activeItem?.columns?.length || 1, 4);
  const rightColumnWidth = 200;
  const contentColumnWidth = 230;
  const contentPadding = 48;
  const menuMaxWidth = 1135;

  const menuWidth =
    rightColumnWidth + columnCount * contentColumnWidth + contentPadding;

  const finalMenuWidth = Math.min(menuWidth, menuMaxWidth);

  return (
    <div
      className="absolute right-0 top-full z-50 hidden h-[70vh] overflow-hidden rounded-b-xl bg-white shadow-[0_12px_32px_rgba(0,0,0,0.16)] group-hover:block"
      style={{ width: `${finalMenuWidth}px` }}
      dir="rtl"
    >
      <div className="flex h-full w-full">
        <aside className="h-full w-[200px] shrink-0 overflow-y-auto bg-[#f5f5f5]">
          <ul className="flex min-h-full flex-col items-stretch">
            {items.map((item) => (
              <li key={item.id} className="h-auto w-full p-0">
                <button
                  type="button"
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`flex min-h-12 w-full items-center gap-2 px-4 py-3 text-right text-[12px] transition-colors ${
                    activeItem?.id === item.id
                      ? "bg-white text-[#ef4056]"
                      : "text-[#3f4064] hover:bg-white hover:text-[#3f4064]"
                  }`}
                >
                  <MenuIcon icon={item.icon} svg={item.svg} />

                  <span className="font-[iran] leading-6">{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="h-full flex-1 overflow-y-auto bg-white px-6 py-4">
          <a
            href={activeItem?.allProductsHref || activeItem?.href || "#"}
            className="mb-5 flex items-center gap-1 whitespace-nowrap text-[12px] text-[#19bfd3]"
          >
            {activeItem?.allProductsTitle || `همه محصولات ${activeItem?.title}`}

            <ArrowIcon className="h-3.5 w-3.5 shrink-0 fill-[#19bfd3]" />
          </a>

          <div
            className="grid w-full items-start gap-x-8 gap-y-5"
            style={{
              gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
            }}
          >
            {activeItem?.columns?.slice(0, columnCount).map((column) => (
              <div key={column.id} className="flex min-w-0 flex-col gap-5">
                {column.groups?.map((group) => (
                  <div key={group.id} className="min-w-0">
                    <a
                      href={group.href || "#"}
                      className="mb-3 flex items-start gap-2 text-[14px] font-bold leading-6 text-[#3f4064] hover:text-[#ef4056]"
                    >
                      <span className="shrink-0 text-lg font-light leading-6 text-[#ef4056]">
                        |
                      </span>

                      <span className="min-w-0 text-right leading-6">
                        {group.title}
                      </span>

                      <ArrowIcon className="mt-1 h-3.5 w-3.5 shrink-0 fill-current" />
                    </a>

                    {!!group.items?.length && (
                      <ul className="flex flex-col gap-3">
                        {group.items.map((subItem) => (
                          <li key={subItem.id} className="h-auto p-0">
                            <a
                              href={subItem.href || "#"}
                              className="block text-[12px] leading-6 text-[#81858b] transition-colors hover:text-[#ef4056]"
                            >
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MegaMenu;
