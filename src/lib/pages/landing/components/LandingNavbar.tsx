import { Link } from "react-router-dom";


import logo from "@assets/MKALogoWritting.png";

function LandingNavbar() {

  const linkStyles = "text-l font-regular text-gray hover:text-aqua100";

  return (
    <nav className="bg-white py-2 w-full px-10">
      
      <div className=" w-full flex items-center">  
        <img src={logo} alt="Logo de la plataforma MKA" width="80" height="50" />
        <h1 className=" flex-grow"></h1>
 
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
      </div>
    </nav>
  );
}

export default LandingNavbar;
