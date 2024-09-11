import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline'; // Ensure you have HeroIcons v1 installed
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Welcome message */}
      <div className="text-xl font-semibold text-indigo-600">Welcome, John Doe!</div>

      {/* Side navigation button */}
      <div className="relative">
        <button
          className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
              onClick={() => setMenuOpen(false)}
            >
              My Profile
            </Link>
            <Link
              to="/my-portfolio"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
              onClick={() => setMenuOpen(false)}
            >
              My Portfolio
            </Link>
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/build-basket"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
              onClick={() => setMenuOpen(false)}
            >
              Build your own product
            </Link>
            <Link
              to="/kyip"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
              onClick={() => setMenuOpen(false)}
            >
              KYIP
            </Link>
            <Link
              to="/gamezone"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
              onClick={() => setMenuOpen(false)}
            >
              Gamezone
            </Link>
            <Link
              to="https://www.dws.com/" target="_blank"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>

          </div>
        )}
      </div>

      {/* User profile icon */}
      {/* <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="text-sm text-gray-700 font-medium">John Doe</span>
      </div> */}
    </header>
  );
};

export default Header;
