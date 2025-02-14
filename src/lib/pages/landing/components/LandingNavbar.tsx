import React from "react";
import { Link } from "react-router-dom";
import LandingPage from "../LandingPage";

function LandingNavbar() {

  const linkStyles = "text-l font-medium text-black hover:text-gray-50";

  return (
    <nav className="bg-PtahBg text-white py-2 w-full px-10">
      
      <div className=" w-full flex items-center"> 
        <h1 className="text-l font-medium text-black flex-grow">
          MKA
        </h1>
 
        <ul className="flex space-x-10">
          <li>
            <Link
              to="/"
              className={linkStyles}
            >
              MKA Writing
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={linkStyles}
            >
              MKA Search
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={linkStyles}
            >
              MKA Intelligence
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

export default LandingNavbar;
