import City from "./City";
import Middle from "./Middle";
import Top from "./Top";

const MobileHeader = () => {
    return ( <div dir="rtl" className="flex flex-col lg:hidden w-full overflow-x-auto bg-[#F2F3F5] ">
        <Top/>
        <Middle/>
        <City/>
    </div> );
}
 
export default MobileHeader;