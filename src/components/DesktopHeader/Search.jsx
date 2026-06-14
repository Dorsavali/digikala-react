const Search = () => {
  return (
    <div className="relative w-full max-w-[600px]">
      <svg
        className="absolute right-4 top-1/2 -translate-y-1/2 w-[20px] h-[20px] text-[#a1a3a8]"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11 19a8 8 0 100-16 8 8 0 000 16zm10 2l-4.35-4.35"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <input
        type="search"
        placeholder="جستجو"
        className="
            w-[468px]
            h-[44px]
            rounded-full
            bg-[#f0f0f1]
            pr-12
            pl-4
            text-[12px]
            placeholder:text-[#a1a3a8]
            outline-none
            focus:bg-white
            border
            border-transparent
            focus:border-[#e0e0e2]
            font-[iran]
          "
      />
    </div>
  );
};

export default Search;
