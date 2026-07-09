import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("لطفا شماره موبایل یا ایمیل خود را وارد کنید");
      return;
    }

    setError("");
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white font-[iran] text-[#23254e] lg:bg-[#ffffff]"
    >
      <section className="mx-auto flex min-h-screen w-full items-center justify-center px-5">
        <div className="w-full max-w-[400px] rounded-none bg-white px-0 py-8 lg:rounded-lg lg:border lg:border-[#e0e0e2] lg:px-8 lg:py-8">
          <header className="relative mb-8 flex items-center justify-center">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="absolute right-0 flex h-10 w-10 items-center justify-center text-[#424750]"
              aria-label="بازگشت"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
<<<<<<< HEAD
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7071 19.7072L11.2929 18.293L16.5858 13.0001H4V11.0001H16.5858L11.2929 5.70718L12.7071 4.29297L19.7071 11.293C20.0976 11.6835 20.0976 12.3167 19.7071 12.7072L12.7071 19.7072Z"
                ></path>
=======
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 19.7072L11.2929 18.293L16.5858 13.0001H4V11.0001H16.5858L11.2929 5.70718L12.7071 4.29297L19.7071 11.293C20.0976 11.6835 20.0976 12.3167 19.7071 12.7072L12.7071 19.7072Z"></path>
>>>>>>> 9a4b1ff3207dad4ce3e01bc6e1c37f2c99b3efe4
              </svg>
            </button>

            <img
              src="/images/login/full-horizontal.svg"
              alt="Digikala"
              className="h-10 w-[150px] object-contain"
            />
          </header>

          <div>
<<<<<<< HEAD
            <h1 className="mb-5 text-[16px] font-[iran] leading-8 text-[#0c0c0c]">
=======
            <h1 className="mb-5 text-[16px] font-[iranb] leading-8 text-[#0c0c0c]">
>>>>>>> 9a4b1ff3207dad4ce3e01bc6e1c37f2c99b3efe4
              ورود یا ثبت‌نام در دیجی‌کالا
            </h1>

            <p className="mb-4 text-[12px] leading-6 text-[#3f4064]">
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <div
                  className={`relative h-12 rounded-lg border ${
                    error ? "border-[#ef4056]" : "border-[#19bfd3]"
                  }`}
                >
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    dir="ltr"
                    autoFocus
                    autoComplete="off"
                    placeholder=" "
                    className="peer h-full w-full rounded-lg bg-transparent px-3 pt-4 text-left text-[15px] outline-none"
                  />

                  <label className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 bg-white px-1 text-[12px] text-[#81858b] transition-all peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-[#19bfd3] peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-[11px]">
                    شماره موبایل یا پست الکترونیک
                  </label>
                </div>

                {error && (
                  <p className="mt-2 text-[12px] leading-6 text-[#ef4056]">
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
<<<<<<< HEAD
                className="h-12 w-full rounded-lg bg-[#ef4056] text-[14px] font-[iran] text-white"
=======
                className="h-12 w-full rounded-lg bg-[#ef4056] text-[14px] font-[iranb] text-white"
>>>>>>> 9a4b1ff3207dad4ce3e01bc6e1c37f2c99b3efe4
              >
                ورود به دیجی‌کالا
              </button>
            </form>

            <p className="mt-4 text-[11px] leading-6 text-[#3f4064]">
              ورود شما به معنای پذیرش{" "}
              <Link to="/page/terms/" className="text-[#008eb2]">
                شرایط دیجی‌کالا
              </Link>{" "}
              و{" "}
              <Link to="/page/privacy/" className="text-[#008eb2]">
                قوانین حریم‌خصوصی
              </Link>{" "}
              است
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> 9a4b1ff3207dad4ce3e01bc6e1c37f2c99b3efe4
