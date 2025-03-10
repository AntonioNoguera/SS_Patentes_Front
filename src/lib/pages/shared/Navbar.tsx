import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineBell, AiOutlineQuestion } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

import { BsSearch } from "react-icons/bs";

import logo from "@assets/MKALogoWritting.png"; 

function Navbar() { 

  return (
    <nav className="text-white py-2 w-full px-10">

      <div className=" w-full flex justify-between items-center">
        <img className="mr-4" src={logo} alt="Logo de la plataforma MKA" width="80" height="50" />

        <div className="flex flex-column items-center text-black">
          <div className="pr-2 text-end border-r-4 flex flex-col">
            <h3 className="font-semibold">Alejandro Garza</h3>
            <span className="flex items-center gap-1">
              <AiOutlineDown />
              Solicitante
            </span>
          </div>
          <ul className=" h-8 flex justify-center items-center space-x-4 ml-2 bg-white px-5 rounded-3xl">
            <li>
              <Link
                to="/" 
              >
                <AiOutlineBell />
              </Link>
            </li>
            <li>
              <Link
                to="/about" 
              >
                <BsSearch />
              </Link>
            </li>
            <li>
              <Link
                to="/contact" 
              >
                <AiOutlineQuestion />
              </Link>
            </li>
            <li>
              <Link
                to="" 
              > 
              </Link>
            </li>
          </ul>

          <div className="w-12 h-12 bg-red-100 rounded-full flex justify-center items-center text-black text-sm font-medium absolute right-7">
            User
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
