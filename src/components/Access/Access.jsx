import ReduxStatus from "../Ui/ReduxStatus";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccess } from "../Redux/Access/ActionAccess";

const Access = () => {
  const dispatch = useDispatch();
  const accessState = useSelector((state) => state.access);
  const { access = [], loading, error } = accessState || {};

  useEffect(() => {
    dispatch(fetchAccess());
  }, [dispatch]);

  if (loading || error) return <ReduxStatus loading={loading} error={error} />;

  return (
    <section className="w-full pt-7 pr-2 lg:pr-0">
      <div
        dir="rtl"
        className="
          flex
          items-start
          justify-start
          lg:justify-around
          gap-4
          lg:gap-0
          overflow-x-auto
          lg:overflow-hidden
          scrollbar-hide
        "
      >
        {access.map((item) => (
          <div
            key={item.id}
            className="
              flex
              flex-col
              items-center
              shrink-0
              w-[60px]
              font-[iran]er
              font-[iranb]
              
            "
          >
            <div className="w-[52px] h-[52px]">
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full
                  h-full
                  rounded-full
                  object-cover
                  bg-stone-200
                "
              />
            </div>

            <p
              className="
                mt-1
                text-[11px]
                leading-5
                text-center
                text-[#3f4064]
                line-clamp-2
              "
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Access;
