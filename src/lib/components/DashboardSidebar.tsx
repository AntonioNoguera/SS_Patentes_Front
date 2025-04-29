import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsFillHouseDoorFill, BsEyeFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { IoIosDocument } from "react-icons/io";
import { FaPlus } from "react-icons/fa"; // Símbolo de más (+)


import "@i18n";
import { useTranslation } from "react-i18next";

type NavLinkProps = {
  isActive: boolean;
  isPending: boolean;
};

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  const [showLabels, setShowLabels] = useState(true);

  const baseLinkStyles = "h-auto py-2 flex items-center transition-all duration-300";

  const getLinkStyles = ({ isActive }: NavLinkProps): string => {
    return `
      ${baseLinkStyles}
      ${isActive ? 'text-orange100' : 'text-black hover:text-orange50'}
      ${showLabels ? '' : 'justify-center'}
    `;
  };

  const toggleLabels = () => {
    setShowLabels(prev => !prev);
  };

  const {t, i18n} = useTranslation("dashboard_sidebar");

  return (

    <div
      className={`bg-white p-4 flex flex-col gap-y-2 rounded-tr-2xl transition-[width] duration-300 ${showLabels ? "w-60" : "w-20"
        }`}
    >
      {/* Botón de toggle */}
      <button
        className="bg-aqua100 w-full h-12 text-xl mb-4 flex justify-center items-center text-white rounded-2xl hover:bg-sky-900 transition-all duration-300"
        onClick={toggleLabels}
      >
        {showLabels ? (
          <span className="text-base transition-all duration-300">
            {t("show_less_info")}
          </span>
        ) : (
          <FaPlus className="text-2xl transition-all duration-300" />
        )}
      </button>

      {/* Links */}
      <NavLink to="/dashboard/new-patent" className={getLinkStyles}>
        <BsFillHouseDoorFill className="text-4xl transition-all duration-300" />
        <span
          className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${showLabels ? "opacity-100 scale-100 ml-4" : "opacity-0 scale-0 w-0 ml-0"
            }`}
        >
          {t("home_tab")}
        </span>
      </NavLink>
      <hr className="h-0.5 bg-gray-400 border-none" />

      <NavLink to="/dashboard/patent-status" className={getLinkStyles}>
        <BsEyeFill className="text-4xl transition-all duration-300" />
        <span
          className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${showLabels ? "opacity-100 scale-100 ml-4" : "opacity-0 scale-0 w-0 ml-0"
            }`}
        >
          {t("status_tab")}
        </span>
      </NavLink>
      <hr className="h-0.5 bg-gray-400 border-none" />

      <NavLink to="/dashboard/in-process" className={getLinkStyles}>
        <AiFillClockCircle className="text-4xl transition-all duration-300" />
        <span
          className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${showLabels ? "opacity-100 scale-100 ml-4" : "opacity-0 scale-0 w-0 ml-0"
            }`}
        >
          {t("in_progress_tab")}
        </span>
      </NavLink>
      <hr className="h-0.5 bg-gray-400 border-none" />

      <NavLink to="/dashboard/my-documents" className={getLinkStyles}>
        <IoIosDocument className="text-4xl transition-all duration-300" />
        <span
          className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${showLabels ? "opacity-100 scale-100 ml-3" : "opacity-0 scale-0 w-0 ml-0"
            }`}
        >
          {t("my_documents_tab")}
        </span>
      </NavLink>
    </div>
  );
};

export default DashboardSidebar;
