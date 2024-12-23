import { Outlet } from "react-router-dom";
import "../../App.css"
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
const Home = () => {
    const [bookmarks, setBookmarks] = useState([]);

    return (
        <div className="container">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;