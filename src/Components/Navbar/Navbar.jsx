import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showUserName, setShowUserName] = useState(false);

    const links = <>
        <li><NavLink className="text-blue-500 font-semibold px-4 py-2 rounded-sm transition duration-300 hover:bg-blue-500 hover:text-white" activeClassName="activeNavLink" to="/">Home</NavLink></li>
        <li><NavLink className="text-blue-500 font-semibold px-4 py-2 rounded-sm transition duration-300 hover:bg-blue-500 hover:text-white" to="/aboutUs" >About Us</NavLink></li>
        <li><NavLink className="text-blue-500 font-semibold px-4 py-2 rounded-sm transition duration-300 hover:bg-blue-500 hover:text-white" to="/contactUs">Contact Us</NavLink></li>
        <li><NavLink className="text-blue-500 font-semibold px-4 py-2 rounded-sm transition duration-300 hover:bg-blue-500 hover:text-white" to="/updateProfile">Update Profile</NavLink></li>
    </>

    const handleMouseEnter = () => {
        setShowUserName(true);
    };

    const handleMouseLeave = () => {
        setShowUserName(false);
    };

    return (
        <div className="navbar relative">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost font-bold text-2xl">StoryScape</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-black">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-4">
                {user ? (
                    <div className="flex items-center">
                        <div className="relative inline-block">
                            <img
                                src={user.photoURL} // Using user.photoURL as the src
                                alt="User Profile"
                                className="h-12 w-12 rounded-full cursor-pointer"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                            {showUserName && (
                                <span className="absolute left-14 top-0 text-sm bg-white shadow-md p-2 rounded-md">{user.displayName}</span>
                            )}
                        </div>
                        <button
                            className='ml-4 p-2 text-white text-[14px] font-semibold rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300 bg-gradient-to-r from-red-400 to-red-500'
                            onClick={logOut}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <NavLink to='/signIn'>
                            <button className='p-2 text-white text-[14px] font-semibold rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 lg:w-28'>
                                Sign In
                            </button>
                        </NavLink>
                        <NavLink to='/signUp'>
                            <button className='p-2 text-white text-[14px] font-semibold rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 bg-gradient-to-r from-blue-400 to-blue-500 lg:w-28'>
                                Sign Up
                            </button>
                        </NavLink>
                    </>
                )}


            </div>

        </div>
    );
};

export default Navbar;
