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
      className="flex flex-col rounded-3xl items-center w-full mx-10 justify-between h-full bg-PtahBg hover:shadow-xl hover:bg-gray-200 p-8 cursor-pointer transition-all duration-500"
      onClick={handleNavigation}
    >
      <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
      <img
        src={image}
        alt={title}
        className="w-36 h-36 object-cover rounded-full mb-4"
      />
      <div>

        <p className="text-black text-sm text-center  pb-12">{text}</p>

        <p className="w-100 text-sm text-center border border-black py-2 bg-white rounded-full">
          Crear Patente
        </p>
      </div>
    </div>
  );
};

export default PatentOption;
