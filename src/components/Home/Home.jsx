import { Outlet } from "react-router-dom";
import "../../App.css"
import Navbar from "../Navbar/Navbar";
const Home = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;