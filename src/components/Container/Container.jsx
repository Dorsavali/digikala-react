const Container = ({ banners }) => {
  return (
    <div className="w-full lg:px-4 p-4 mt-5">
      <div className="max-w-[1336px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
          {banners.map((banner) => (
            <a
              key={banner.id}
              href="#"
              className="block w-full"
            >
              <img
                src={banner.img}
                alt=""
                className="
                  w-full
                  h-[116px]
                  lg:h-[241px]
                  object-cover
                  rounded-lg
                  lg:rounded-2xl
                  border border-[#0C0C0C12]
                "
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;