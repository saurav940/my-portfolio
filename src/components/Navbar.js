import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Saurav Kumar</h1>
      <div>
        <Link to="/" className="px-4">Home</Link>
        <Link to="/projects" className="px-4">Projects</Link>
        <Link to="/contact" className="px-4">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
