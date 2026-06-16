import { fetchMenuItems } from "../Redux/DesktopHeader/ActionsDesktop";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MenuItems = () => {
  const dispatch = useDispatch();

  const {
    menuItems,
    loading,
    error,
  } = useSelector((state) => state.menuItems);

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);

  const getClassName = (title) => {
    switch (title) {
      case "شگفت‌انگیز‌ها":
        return "border-r border-[#e0e0e2] pr-2";

      case "سوپرمارکت":
        return "";

      case "طلای دیجیتال":
        return "";

      case "پرفروش‌ترین‌ها":
        return "w-[97px]";

      case "خرید کالای کارکرده":
        return "";

      case "سوالی دارید؟":
        return "border-r border-[#e0e0e2] pr-2";

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
        
        <li className="px-3 h-full flex items-center justify-center">
          <a
            href="#"
            className="flex items-center text-[14px] font-bold text-[#3f4064] font-[iran]"
          >
            <svg
              className="w-5 h-5 fill-[#424750]"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M19 8V6H5v2h14zm0 3v2H5v-2h14zm0 5v2H5v-2h14z"
                clipRule="evenodd"
              />
            </svg>

            دسته‌بندی کالا‌ها
          </a>
        </li>

        {menuItems?.map((item) => (
          <li
            key={item.id}
            className="px-3 h-full flex items-center justify-center"
          >
            <a
              href="#"
              className={`
                flex
                items-center
                text-[12px]
                text-[#62666d]
                font-[iran]
                ${getClassName(item.title)}
              `}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;