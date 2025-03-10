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
        flex
        flex-grow
        flex-col 
        justify-evenly
        w-full
        py-8
        rounded-3xl 
        items-start 
        bg-optionCardBg 
        hover:shadow-xl 
        hover:bg-optionCardBg-200 
        hover:-translate-y-2 
        px-4 sm:px-6 md:px-8
        cursor-pointer 
        transition-all 
        delay-75 
        duration-300 
      "
      onClick={handleNavigation}
    >
      <h2 className="text-2xl w-full font-medium mb-2 text-left">{title}</h2>

      <img
        src={image}
        alt={title}
        className="w-full rounded-3xl mb-4"
      />

      <div>
        <p className="text-black text-sm text-left mb-5">{text}</p>

        <p className="w-full text-sm text-center py-3 bg-orange100 hover:bg-orange86 text-white rounded-xl">
          Crear Patente
        </p>
      </div>
    </div>
  );
};

export default PatentOption;