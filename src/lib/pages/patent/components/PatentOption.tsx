import React from "react";
import { useNavigate } from "react-router-dom";

interface PatentOptionProps {
  title: string;
  text: string;
  image: string;
  route: string;
}

const PatentOption: React.FC<PatentOptionProps> = ({
  title,
  text,
  image,
  route,
}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (route) navigate(route);
  };

  return (
    <div
      className="
        bg-Ptah
        shadow-md 
        m-2
        flex
        flex-col
        justify-center
        items-center

        justify-evenly

        min-h-[65vh] 
        w-full
        
        md:w-1/3

        rounded-3xl 
        items-center 
        bg-PtahBg 
        rounded-3xl 
        hover:shadow-xl 
        hover:bg-gray-200 
        hover:-translate-y-2 
        px-8  
        cursor-pointer 
        transition-all 
        delay-75 
        duration-300 
      "
      onClick={handleNavigation}
    >

      <h2 className="text-2xl font-medium mb-2 text-center">{title}</h2>
      <img
        src={image}
        alt={title}
        className="w-36 h-36 object-cover rounded-full mb-4"
      />
      <div>

        <p className="text-black text-sm text-center mb-5">{text}</p>

        <p className="w-100 text-sm text-center border border-black py-3 bg-white rounded-full">
          Crear Patente
        </p>
      </div>
    </div>
  );
};

export default PatentOption;
