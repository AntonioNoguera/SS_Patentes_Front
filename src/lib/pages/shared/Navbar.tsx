import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineBell, AiOutlineQuestion, AiOutlineDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import logo from "@assets/MKALogoWritting.png";

function Navbar() {
  return (
    <nav className="text-white py-2 w-full px-10">
      <div className="w-full flex justify-between items-center">

        <div className="w-full flex justify-between items-center">
          <img
            className="mr-4"
            src={logo}
            alt="Logo de la plataforma MKA"
            width="80"
            height="50"
          />

          <div className="relative flex flex-row items-center gap-2 text-black py-4 px-6">


            <div className="pr-4 text-end border-r-4 border-black flex flex-col items-end">
              <h3 className="font-semibold">Alejandro Garza</h3>
              <span className="flex items-center gap-1">
                <AiOutlineDown />
                Solicitante
              </span>
            </div>

            <ul className="h-8 flex justify-center items-center space-x-4 bg-white px-5 pr-10 rounded-3xl shadow">
              <li>
                <Link to="/">
                  <AiOutlineBell />
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <BsSearch />
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <AiOutlineQuestion />
                </Link>
              </li>
              <li>
                <Link to="">
                  {/* contenido adicional */}
                </Link>
              </li>
            </ul>

            <div className="w-12 h-12 bg-red-100 rounded-full flex justify-center items-center text-sm font-medium absolute right-2 mr-4">
              User
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
