import FooterCopyright from "./FooterCopyright";
import FooterDescription from "./FooterDescription";
import FooterDownload from "./FooterDownload";
import FooterInfo from "./FooterInfo";
import FooterMenu from "./FooterMenu";
import FooterOptions from "./FooterOptions";
import FooterPartners from "./FooterParners";
import FooterTop from "./FooterTop";

const FooterDesktop = () => {
  return (
    <footer className="hidden lg:block w-full border-t border-[#f0f0f1] pt-8 ">
      <div className="w-full flex flex-col items-center">
        <FooterTop />
        <FooterInfo/>
        <FooterOptions/>
        <FooterMenu/>
        <FooterDownload/>
        <FooterDescription/>
        <FooterCopyright/>
        <FooterPartners />
      </div>
    </footer>
  );
};

export default FooterDesktop;
