const ContainerSize = ({ children, className = "" }) => {
  return (
    <div
      className={`
        w-full
        mx-auto
        flex flex-col
        gap-4
        lg:max-w-[1336px]
        lg:px-6
        xl:px-8

        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ContainerSize;