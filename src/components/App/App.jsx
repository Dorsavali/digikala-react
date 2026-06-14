import { BrowserRouter } from "react-router-dom";
import Banner from "../Banner/Banner";
import DesktopHeader from "../DesktopHeader/DesktopHeader";
import MobileHeader from "../MobileHeader/MobileHeader";

const App = () => {
    return <BrowserRouter>
    <Banner/>
    <DesktopHeader/>
    <MobileHeader/>
    </BrowserRouter>
}
 
export default App;