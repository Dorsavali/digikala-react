import { useState } from "react";

const SupportButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="پشتیبانی"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="
          fixed
          bottom-20
          left-4
          z-50
          flex
          h-12
          items-center
          gap-2
          rounded-full
          bg-[#5b5ce2]
          px-4
          text-white
          shadow-lg
          lg:bottom-6
          lg:left-6
<<<<<<< HEAD
          font-[iran]
        "
      >
        <span className="text-[16px] font-[iran]">پشتیبانی</span>
=======
          font-[iranb]
        "
      >
           <span className="text-[16px] font-[iranb]">پشتیبانی</span>
>>>>>>> 9a4b1ff3207dad4ce3e01bc6e1c37f2c99b3efe4
        <span className="flex h-6 w-6 items-center justify-center">
          <svg viewBox="0 0 1024 1024" fill="none" className="h-6 w-6">
            <path
              fill="#fff"
              d="M812.122 459.942v-28.881c0-74.719-29.683-146.378-82.517-199.212s-124.493-82.516-199.211-82.516c-74.718 0-146.376 29.681-199.21 82.516s-82.517 124.493-82.517 199.212v29.35c2.874-.448 5.773-.759 8.69-.93 14.087-.815 28.169 1.707 41.096 7.364 13.129 5.559 24.762 14.135 33.955 25.033s15.686 23.808 18.952 37.687l38.784 162.133c3.341 13.79 3.411 28.173.203 41.997s-9.603 26.705-18.677 37.619c-8.398 10.236-18.978 18.47-30.966 24.098-11.988 5.623-25.083 8.499-38.326 8.414h-3.924c-38.545-1.647-75.512-15.77-105.338-40.239s-50.896-57.967-60.041-95.45c-9.144-37.478-5.867-76.915 9.339-112.371 9.814-22.886 24.253-43.315 42.254-60.087v-64.619c0-91.693 36.425-179.63 101.262-244.466s152.77-101.262 244.465-101.262c91.691 0 179.631 36.425 244.467 101.262s101.261 152.774 101.261 244.466v63.889c18.675 17.314 33.532 38.537 43.409 62.345 15.049 36.267 17.69 76.493 7.509 114.411-8.358 31.996-25.557 60.992-49.63 83.669-24.068 22.673-54.037 38.11-86.477 44.544-7.091 1.417-14.259 2.406-21.466 2.97-60.241 102.716-125.696 114.607-194.603 114.607-10.227 0-20.544-.252-30.942-.508l-4.578-.111c-9.361-.235-19.58-.491-29.845-.491-8.491 0-16.627-3.371-22.626-9.374-6.003-5.999-9.374-14.14-9.374-22.626s3.371-16.627 9.374-22.63c5.999-5.999 14.135-9.37 22.626-9.37 12.288 0 24.149.299 35.627.597 71.023 1.899 113.724 2.953 159.765-67.183-5.7-4.301-10.88-9.284-15.42-14.852-9.062-10.914-15.445-23.804-18.637-37.628s-3.106-28.203.247-41.988l38.699-162.133c3.277-13.897 9.783-26.825 18.991-37.734 9.203-10.914 20.855-19.503 34.001-25.071 12.937-5.641 27.021-8.149 41.105-7.322 2.765.162 5.517.452 8.243.87z"
            />
          </svg>
        </span>
<<<<<<< HEAD
=======

     
>>>>>>> 9a4b1ff3207dad4ce3e01bc6e1c37f2c99b3efe4
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 lg:items-center"
          dir="rtl"
        >
          <div className="w-full rounded-t-2xl bg-white p-4 font-[iran] lg:w-[420px] lg:rounded-2xl">
            <div className="mb-4 flex items-center justify-between">
<<<<<<< HEAD
              <h3 className="font-[iran] text-[16px] text-[#23254e]">
=======
              <h3 className="font-[iranb] text-[16px] text-[#23254e]">
>>>>>>> 9a4b1ff3207dad4ce3e01bc6e1c37f2c99b3efe4
                پشتیبانی دیجی‌کالا
              </h3>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-[24px] text-[#424750]"
              >
                ×
              </button>
            </div>

            <p className="mb-4 text-[13px] leading-7 text-[#62666d]">
              برای دریافت راهنمایی، یکی از روش‌های زیر را انتخاب کنید.
            </p>

            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-between rounded-lg border border-[#e0e0e2] px-4 py-3 text-[13px] text-[#23254e]">
                سوالات متداول
                <span>‹</span>
              </button>

              <button className="flex items-center justify-between rounded-lg border border-[#e0e0e2] px-4 py-3 text-[13px] text-[#23254e]">
                تماس با پشتیبانی
                <span>‹</span>
              </button>

              <button className="flex items-center justify-between rounded-lg border border-[#e0e0e2] px-4 py-3 text-[13px] text-[#23254e]">
                پیگیری سفارش
                <span>‹</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

<<<<<<< HEAD
export default SupportButton;
=======
export default SupportButton;
>>>>>>> 9a4b1ff3207dad4ce3e01bc6e1c37f2c99b3efe4
