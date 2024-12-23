import { NavLink } from "react-router-dom";
import "../../App.css"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2 exo">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/bookmarks">Bookmarks</NavLink></li>
                    </ul>
                </div>
                <a href="#">
                    <img className="w-3/4" src="images/logo.webp" alt="Website logo" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-5 exo text-[16px]">
                    <li className=""><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/bookmarks">Bookmarks</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end exo">
                <a href="#" className="btn btn-success text-white text-lg font-medium">Log In</a>
            </div>
        </div>
    );
};

export default Navbar;