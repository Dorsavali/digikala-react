import BackToTop from "./BackToTop";
import SupportCard from "./SupportCard";

const FooterMobile = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:hidden py-4 px-5">
      <BackToTop />
      <SupportCard/>
    </div>
  );
};

export default FooterMobile;
