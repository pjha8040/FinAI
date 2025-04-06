// components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 bg-opacity-80 shadow-lg py-4 fixed w-full z-10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide text-white">ChatBot AI</h1>
        <div className="relative text-white">
          <Link to="#" className="mx-4 hover:text-blue-300 transition">Features</Link>
          <Link to="#" className="mx-4 hover:text-blue-300 transition">Pricing</Link>
          <Link to="#" className="mx-4 hover:text-blue-300 transition">Contact</Link>

          {/* Settings Dropdown */}
          <div className="inline-block relative">
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="mx-4 hover:text-blue-300 transition focus:outline-none"
            >
              Settings ▼
            </button>
            {isSettingsOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-blue-900 rounded-lg shadow-lg overflow-hidden">
                <Link to="/profile" className="block px-4 py-2 hover:bg-blue-100">Profile</Link>
                <Link to="/preferences" className="block px-4 py-2 hover:bg-blue-100">Preferences</Link>
                <Link to="/logout" className="block px-4 py-2 hover:bg-blue-100">Logout</Link>
              </div>
            )}
          </div>

          <Link to="/login" className="ml-6 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-400 transition shadow-md">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
