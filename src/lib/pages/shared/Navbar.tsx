import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const linkStyles = "text-l font-medium text-black hover:text-gray-50";

  return (
    <nav className="bg-PtahBg text-white py-2 w-full px-10">
      
      <div className=" w-full flex items-center"> 
        <h1 className="text-l font-medium text-black flex-grow">
          Patentes FIME
        </h1>
 
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className={linkStyles}
            >
              Item
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={linkStyles}
            >
              Item
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={linkStyles}
            >
              Item
            </Link>
          </li>
        </ul>
 
        <div className="w-12 h-12 ml-10 bg-gray-100 rounded-full flex justify-center items-center text-black text-sm font-medium">
          User
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
