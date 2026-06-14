import Middle from "./Middle";
import Top from "./Top";

const MobileHeader = () => {
    return ( <div dir="rtl" className="flex flex-col lg:hidden w-full overflow-x-auto gap-2.5 bg-[#F2F3F5]">
        <Top/>
        <Middle/>
    </div> );
}
 
export default MobileHeader;