import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const noNavFoot = location.pathname.includes('login' )|| location.pathname.includes('signUp');
    return (
        <div className="font-Montserrat">
            {noNavFoot || <Navbar></Navbar>}
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            {noNavFoot || <Footer></Footer>}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;