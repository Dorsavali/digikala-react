const BigBanner = ({ data, className = "" }) => {
  return (
    <div
      className="w-full lg:mx-auto w-full flex justify-center my-5 "
      className={className}
    >
      <div className=" flex flex-col md:flex-row gap-4 lg:px-0">
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
              className="w-full h-[150px] md:h-[264px] object-fill rounded-2xl"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default BigBanner;
