const Banner = ({ image, alt = "banner" }) => {
  return (
    <div className="my-5 flex flex-col md:flex-row gap-4 px-4 lg:px-0">
      <img
        src={image}
        alt={alt}
        className="w-full h-[150px] md:h-[264px] object-fill rounded-2xl"
      />
    </div>
  );
};

export default Banner;
