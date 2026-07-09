export const ReduxLoading = ({ className = "" }) => {
  return (
    <div
      dir="rtl"
      className={`w-full flex items-center justify-center py-8 font-[iran] ${className}`}
    >
      <div className="flex items-center gap-2 text-[13px] text-[#62666d]">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#e0e0e2] border-t-[#ef4056]" />
        <span>در حال بارگذاری...</span>
      </div>
    </div>
  );
};

export const ReduxError = ({ message, className = "" }) => {
  return (
    <div
      dir="rtl"
      className={`w-full flex items-center justify-center py-8 font-[iran] ${className}`}
    >
      <div className="rounded-lg border border-[#ef4056]/30 bg-[#fff1f2] px-4 py-3 text-center text-[12px] leading-6 text-[#ef4056]">
        {message || "خطا در دریافت اطلاعات"}
      </div>
    </div>
  );
};

const ReduxStatus = ({
  loading,
  error,
  loadingClassName = "",
  errorClassName = "",
}) => {
  if (loading) return <ReduxLoading className={loadingClassName} />;
  if (error) return <ReduxError message={error} className={errorClassName} />;
  return null;
};

export default ReduxStatus;
