import BottomNav from "./BottomNav";
import Top from "./Top";

const DesktopHeader = () => {
    return ( <div className="hidden lg:flex lg:flex-col">
        <Top />
        <BottomNav/>
        
    </div> );
}
 
export default DesktopHeader;