import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMobileNavbar } from "../Redux/MobileNavbar/ActionMobileNavbar";

const MobileNavbar = () => {
  const dispatch = useDispatch();

  const { items = [], loading, error } = useSelector(
    (state) => state.mobileNavbar || {}
  );

  useEffect(() => {
    dispatch(fetchMobileNavbar());
  }, [dispatch]);

  if (loading) return null;
  if (error) return null;

  return (
    <nav
      dir="rtl"
      className="fixed bottom-0 left-0 z-50 flex w-full border-t border-[#e0e0e2] bg-white lg:hidden"
    >
      {items.map((item) => (
        <NavLink
          key={item.id}
          to={item.href || "#"}
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center justify-center py-1 ${
              isActive ? "text-[#0c0c0c]" : "text-[#81858b]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {item.iconType === "cube" ? (
                <span className="font-[cube] text-[24px] leading-none">
                  {item.icon}
                </span>
              ) : (
                <svg
                  className={`w-6 h-6 ${
                    isActive ? "fill-[#0c0c0c]" : "fill-[#81858b]"
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d={item.icon} />
                </svg>
              )}

              <span
                className={`mt-0.5 text-[10px] ${
                  isActive ? "font-[iranb]" : "font-[iran]"
                }`}
              >
                {item.title}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default MobileNavbar;