import { Link } from "react-router-dom";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const Cart = () => {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#f5f5f5] pb-[58px] font-[iran] lg:hidden"
    >
      <header className="sticky top-0 z-40 flex h-12 items-center justify-center border-b border-[#e0e0e2] bg-white px-4">
        <h1 className="text-[16px] font-[iran] text-[#23254e]">سبد خرید</h1>
      </header>

      <section className="bg-white">
        <div className="flex h-12 items-center border-b border-[#e0e0e2] px-4">
          <button className="relative h-full px-1 text-[14px] font-[iran] text-[#ef4056]">
            سبد خرید
            <span className="absolute bottom-0 right-0 left-0 h-[3px] rounded-full bg-[#ef4056]" />
          </button>
        </div>
      </section>

      <section className="mx-4 mt-3 rounded-lg border border-[#e0e0e2] bg-white px-4 py-8">
        <div className="mx-auto mb-5 flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#f5f5f5]">
          <svg viewBox="0 0 24 24" className="h-14 w-14 fill-[#a1a3a8]">
            <path
              fillRule="evenodd"
              d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <h2 className="mb-2 text-center text-[16px] font-[iran] text-[#23254e]">
          سبد خرید شما خالی است!
        </h2>

        <p className="mx-auto mb-6 max-w-[290px] text-center text-[12px] leading-6 text-[#81858b]">
          می‌توانید برای مشاهده محصولات بیشتر به صفحه اصلی یا دسته‌بندی‌ها
          بروید.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            to="/"
            className="rounded-lg border border-[#ef4056] px-4 py-2 text-[12px] font-[iran] text-[#ef4056]"
          >
            صفحه اصلی
          </Link>

          <Link
            to="/categories/"
            className="rounded-lg bg-[#ef4056] px-4 py-2 text-[12px] font-[iran] text-white"
          >
            دسته‌بندی‌ها
          </Link>
        </div>
      </section>

      <section className="mx-4 mt-3 rounded-lg border border-[#e0e0e2] bg-white px-4 py-4">
        <h3 className="mb-3 text-[14px] font-[iran] text-[#23254e]">
          قبل از خرید بخوانید
        </h3>

        <ul className="space-y-3 text-[12px] leading-6 text-[#62666d]">
          <li>هزینه ارسال و زمان تحویل بعد از افزودن کالا مشخص می‌شود.</li>
          <li>کالاهای موجود در سبد خرید رزرو نمی‌شوند.</li>
          <li>برای خرید، ابتدا کالاهای موردنظر را به سبد خرید اضافه کنید.</li>
        </ul>
      </section>

      <MobileNavbar />
    </main>
  );
};

export default Cart;
