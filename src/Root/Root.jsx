import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import 'animate.css';

const Root = () => {
    return (
        <>
        
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
            <Footer></Footer>
        </>
    );
};

export default Root;