import { Link } from "react-router-dom";

import logo from "@assets/MKALogoWritting.png";

import "@i18n";
import { useTranslation } from "react-i18next";

function LandingNavbar() {

  const linkStyles = "inline-block text-l font-regular text-gray hover:text-aqua100 transition-transform duration-300 hover:scale-110";

  const {t, i18n} = useTranslation("landing_page");

  return (
    <nav className="bg-white py-2 w-full px-10">
      
      <div className=" w-full flex items-center">  
        <img src={logo} alt="Logo de la plataforma MKA" width="80" height="50" />
        <h1 className=" flex-grow"></h1>
 
        <ul className="flex space-x-10">
          <li>
            <Link to="/" className={linkStyles} >
              {t("writting_link")}
            </Link>
          </li>
          
          <li>
            <Link to="/" className={linkStyles}
            >
              {t("search_link")}
            </Link>
          </li>

          <li>
            <Link to="/" className={linkStyles} >
              {t("intelligence_link")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default LandingNavbar;
