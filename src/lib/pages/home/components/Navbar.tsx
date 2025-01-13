import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-PtahBg text-white py-2 px-0 w-full overflow-hidden px-10">
      <div className=" w-full flex items-center">
        {/* Logo o título con flex-grow */}
        <h1 className="text-l font-medium text-black flex-grow">
          Patentes FIME
        </h1>

        {/* Lista de enlaces */}
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-l font-medium text-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-l font-medium text-black"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-l font-medium text-black"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Círculo del usuario */}
        <div className="w-12 h-12 ml-10 bg-gray-100 rounded-full flex justify-center items-center text-black text-sm font-medium">
          User
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
