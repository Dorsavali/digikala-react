import BackToTop from "./BackToTop.jsx";
import FooterAccordion from "./FooterAccordion.jsx";
import FooterDescription from "./FooterDescription.jsx";
import SupportCard from "./SupportCard.jsx";

const FooterMobile = () => {
  return (
    <footer className="flex flex-col items-center justify-center lg:hidden py-4 px-5">
      <BackToTop />
      <SupportCard/>
      <FooterAccordion/>
      <FooterDescription/>
    </footer>
  );
};

export default FooterMobile;
