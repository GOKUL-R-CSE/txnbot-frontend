import React from 'react';
import { Link } from 'react-router-dom'; // Change these imports according to your needs
import { useLogout } from '../Hooks/useLogout';
import '../CSS/NavBar.css'; // Import any additional CSS

const NavBar = () => {
    const { logout } = useLogout();
    const handleClick = () => {
        logout();
    }

    return (
        <nav className="bg-gradient-to-r from-purple-700 to-blue-500 p-4 shadow-lg flex justify-between items-center">
            <div className="text-white font-bold text-xl">
                <Link to="/">WaveBots</Link>
            </div>

            <div className="flex items-center space-x-4"> {/* Space between nav items */}
                <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                <Link to="/features" className="text-white hover:text-gray-200">Features</Link>
                <div className="relative">
                    <button className="text-white hover:text-gray-200 focus:outline-none">More</button>
                    {/* Dropdown menu */}
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden">
                        <Link to="/action1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Action</Link>
                        <Link to="/action2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Another action</Link>
                        <Link to="/action3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Something else here</Link>
                    </div>
                </div>
                <button onClick={handleClick} className="btn-danger text-white px-4 py-2 rounded-lg">Logout</button>
            </div>
        </nav>
    );
}

export default NavBar;