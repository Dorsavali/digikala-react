const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: "/images/blog/1.webp",
      title: "هوش مصنوعی Eleven انقلابی در تبدیل متن به گفتار فارسی",
      link: "/",
    },
    {
      id: 2,
      image: "/images/blog/2.webp",
      title: "طرز تهیه میلک‌شیک انبه؛ به روش یک باریستای حرفه‌ای",
      link: "/",
    },
    {
      id: 3,
      image: "/images/blog/3.webp",
      title: "بهترین مارک پنکه تمام استیل ایرانی و خارجی",
      link: "/",
    },
    {
      id: 4,
      image: "/images/blog/4.webp",
      title: "بهترین یو پی اس برای دوربین مداربسته؛ معرفی ۵ مدل برتر",
      link: "/",
    },
  ];

  return (
    <section className=" hidden lg:flex w-full justify-center items-center py-8">
      <div className="w-full lg:w-full">
        <div className="flex flex-row-reverse items-center justify-between mb-5">
          <h2 className="font-[iranb] text-[16px] text-[#0c0c0c]">
            خواندنی‌ها
          </h2>

          <a
            href="/"
            className="flex flex-row-reverse items-center text-[12px] font-[iran] text-[#1672dd] "
          >
            مطالب بیشتر در دیجی‌کالا مگ
            <img
              className="w-[18px] h-[18px]"
              src="/images/icons/chevblue.svg"
              alt="arrow"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={blog.link}
              className="border border-[#e0e0e2] rounded-lg overflow-hidden bg-white hover:shadow-sm transition"
            >
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-4 py-3">
                <p
                  className="font-[iran] text-right text-[12px] text-[#0c0c0c] leading-6 overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {blog.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
