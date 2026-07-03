import BackToTop from "./BackToTop";
import FooterAccordion from "./FooterAccordion";
import FooterDescription from "./FooterDescription.jsx";
import SupportCard from "./SupportCard";

const FooterMobile = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:hidden py-4 px-5">
      <BackToTop />
      <SupportCard/>
      <FooterAccordion/>
      <FooterDescription/>
    </div>
  );
};

export default FooterMobile;
