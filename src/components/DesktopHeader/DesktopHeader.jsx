import BottomNav from "./BottomNav";
import Line from "./line";
import Top from "./Top";

const DesktopHeader = () => {
    return ( <div className="hidden max-w-[1536px] w-full lg:mx-auto flex lg:flex lg:flex-col">
        <Top />
        <BottomNav/>
        <Line/>
    </div> );
}
 
export default DesktopHeader;