import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BsFillHouseDoorFill, BsEyeFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { IoIosDocument } from "react-icons/io";

type NavLinkProps = {
  isActive: boolean;
  isPending: boolean;
};

const LateralMenu: React.FC = () => {
  const location = useLocation();
   
  const baseLinkStyles = "w-full h-auto py-2 flex text-center items-center";
   
  const getLinkStyles = ({ isActive }: NavLinkProps): string => {
    return `${baseLinkStyles} ${isActive ? 'text-orange100 font-medium' : 'text-black hover:text-orange50'}`;
  };

  return (
    <div className="basis-2xs bg-white p-4 flex flex-col gap-y-2 rounded-tr-2xl">
      <button className="bg-aqua100 w-full h-12 text-xl mb-4 mx-auto text-white rounded-2xl hover:bg-sky-900">
        Crear Patente
      </button>
      
      <NavLink to="/dashboard/new-patent" className={getLinkStyles}>
        <BsFillHouseDoorFill className="inline-block mr-4 text-4xl" />
        <span className="text-base">Inicio</span>
      </NavLink>
      <hr className="h-0.5 bg-gray-400 border-none" />
      
      <NavLink to="/dashboard/patent-status" className={getLinkStyles}>
        <BsEyeFill className="inline-block mr-4 text-4xl" />
        <span className="text-base">Estados</span>
      </NavLink>
      <hr className="h-0.5 bg-gray-400 border-none" />
      
      <NavLink to="/dashboard/in-process" className={getLinkStyles}>
        <AiFillClockCircle className="inline-block mr-4 text-4xl" />
        <span className="text-base text-left">En proceso</span>
      </NavLink>
      <hr className="h-0.5 bg-gray-400 border-none" />
      
      <NavLink to="/dashboard/my-documents" className={getLinkStyles}>
        <IoIosDocument className="inline-block mr-3 text-5xl" />
        <span className="text-base inline-block text-left">Mis Documentos</span>
      </NavLink>
    </div>
  );
};

export default LateralMenu;