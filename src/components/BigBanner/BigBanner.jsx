import React from "react";

const BigBanner = ({ data }) => {
  return (
    <div className="w-full flex justify-center my-5">
      <div className="max-w-[1336px] mx-auto flex flex-col md:flex-row gap-4 px-5 lg:px-0">
        {data.map((item, index) => (
          <a
            key={item.id}
            href={item.link}
            className={`w-full rounded-2xl overflow-hidden ${
              index === 1 ? "hidden md:block" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-[180px] md:h-[264px] object-cover rounded-2xl"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default BigBanner;