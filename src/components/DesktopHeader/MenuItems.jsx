import { fetchMenuItems } from "../Redux/DesktopHeader/ActionsDesktop";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import MegaMenu from "./MegaMenu";

const MenuIcon = ({ icon }) => {
  if (!icon) return null;

  if (icon.type === "cube") {
    return (
      <span
        className="ml-1 flex h-[18px] w-[18px] items-center justify-center font-[cube] text-[18px] leading-none text-[#a1a3a8]"
        aria-hidden="true"
      >
        {icon.content}
      </span>
    );
  }

  if (icon.type === "svg") {
    return (
      <svg
        className="ml-1 h-[18px] w-[18px] fill-[#a1a3a8]"
        viewBox={icon.viewBox || "0 0 24 24"}
        aria-hidden="true"
      >
        <path
          d={icon.path}
          fillRule={icon.fillRule}
          clipRule={icon.clipRule}
        />
      </svg>
    );
  }

  return null;
};

const MenuItems = () => {
  const dispatch = useDispatch();

  const { menuItems, megaMenu, loading, error } = useSelector(
    (state) => state.menuItems
  );

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);

  const getClassName = (id) => {
    switch (id) {
      case 1:
        return "border-r-[2px] border-[#e0e0e2] pr-2";
      case 4:
        return "w-[97px]";
      case 5:
        return "border-r-[2px] border-[#e0e0e2] pr-2";
      default:
        return "";
    }
  };

  if (loading) {
    return (
      <div className="h-full flex items-center px-4 font-[iran]">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center px-4 text-red-500 font-[iran]">
        {error}
      </div>
    );
  }

  return (
    <div className="h-full font-[iran]">
      <ul className="w-full h-full flex items-center list-none">
        <li className="group relative px-3 h-full flex items-center justify-center">
          <a
            href="#"
            className="flex items-center gap-1 text-[14px] font-bold text-[#3f4064] font-[iran]"
          >
            <img
              src="/images/icons/hamburger.svg"
              alt=""
              className="w-[18px] h-[18px]"
            />

            دسته‌بندی کالا‌ها
          </a>

          <MegaMenu items={megaMenu} />
        </li>

        {menuItems?.map((item) => (
          <li
            key={item.id}
            className="group/menuitem relative px-3 h-full flex items-center justify-center"
          >
            <a
              href={item.href || "#"}
              target={item.target || "_self"}
              rel={item.target === "_blank" ? "noreferrer" : undefined}
              className={`
                flex
                items-center
                whitespace-nowrap
                text-[12px]
                text-[#62666d]
                font-[iran]
                ${getClassName(item.id)}
              `}
            >
              <MenuIcon icon={item.icon} />
              {item.title}
            </a>

            <span className="absolute bottom-0 right-3 left-3 h-[2px] origin-center scale-x-0 rounded-full bg-[#ef4056] transition-transform duration-300 ease-out group-hover/menuitem:scale-x-100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
