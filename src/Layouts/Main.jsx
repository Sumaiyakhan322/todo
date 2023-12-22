import { Outlet, useLocation} from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



const Main = () => {
    
    const location=useLocation()
    const noHeaderFooterLogin=location.pathname.includes('login')
    const noHeaderFooterRegister=location.pathname.includes('register')
    return (
        <div>
            {(noHeaderFooterLogin  || noHeaderFooterRegister) || <Navbar></Navbar>}
            <Outlet></Outlet>
            {(noHeaderFooterLogin  || noHeaderFooterRegister) || <Footer></Footer>}

        </div>
    );
};

export default Main;