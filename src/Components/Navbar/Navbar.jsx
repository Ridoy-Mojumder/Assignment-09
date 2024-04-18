import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut, loadingState } = useContext(AuthContext);
    const [showUserName, setShowUserName] = useState(false);
    const [profilePicLoaded, setProfilePicLoaded] = useState(false);

    if(loadingState && !profilePicLoaded){
        return <span className="loading loading-spinner text-info"></span>;
    }

    const links = <>
        <li><NavLink className="text-blue-500 font-semibold px-4 py-2 rounded-lg transition duration-300  " activeClassName="activeNavLink" to="/">Home</NavLink></li>
        <li><NavLink className="text-blue-500 font-semibold px-4 py-2 rounded-lg transition duration-300 " to="/aboutUs" >About Us</NavLink></li>
        <li><NavLink className="text-blue-500 font-semibold px-4 py-2 rounded-lg transition duration-300 " to="/contactUs">Contact Us</NavLink></li>
        <li><NavLink className="text-blue-500 font-semibold px-4 py-2 rounded-lg transition duration-300 " to="/updateProfile">Update Profile</NavLink></li>
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
                <NavLink
                    to="/"
                    className="btn btn-ghost relative inline-block text-2xl font-bold py-2 px-4 overflow-hidden cursor-pointer"
                    style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: '#ffffff',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <span className="block relative z-10">Dream Home</span>
                    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full" style={{
                        background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                        transition: 'all 0.4s ease'
                    }}></div>
                    <div className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out hover:-translate-x-full"></div>
                    <div className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:translate-x-full"></div>
                </NavLink>
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
                                src={user.photoURL}
                                alt="User Profile"
                                className="h-12 w-12 rounded-full cursor-pointer"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onLoad={() => setProfilePicLoaded(true)}  // Set loaded state to true when the image loads
                                onError={() => setProfilePicLoaded(false)}  // Handle error in loading image
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
                    <NavLink to='/signIn'>
                            <button className='p-2 text-white text-[14px] font-semibold rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 lg:w-28'>
                                Sign In
                            </button>
                        </NavLink>
                )}
            </div>

        </div>
    );
};

export default Navbar;
