import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-dark-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 tracking-tight">
              SK
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Home</Link>
              <Link to="/projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Projects</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
