import React from "react";
import PatentOption from "./PatentOption";

const PatentOptions: React.FC = () => {
  const boxesData = [
    {
      title: "Patente",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan viverra mattis. Aenean lacinia arcu vitae enim blandit interdum.",
      image: "https://placehold.co/300x200/b6f1fc/000000?text=Hello+World",
      route: "/patent/new/standar_patent",
    },
    {
      title: "Diseño Industrial",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan viverra mattis. Aenean lacinia arcu vitae enim blandit interdum.",
      image: "https://placehold.co/300x200/b6f1fc/000000?text=Hello+World",
      route: "/patent/new/utility_model",
    },
    {
      title: "Modelo de Utilidad",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan viverra mattis. Aenean lacinia arcu vitae enim blandit interdum.",
      image: "https://placehold.co/300x200/b6f1fc/000000?text=Hello+World",
      route: "/patent/new/utility_model",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center px-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
      {boxesData.map((box, index) => (
        <PatentOption
          key={index}
          title={box.title}
          text={box.text}
          image={box.image}
          route={box.route}
        />
      ))}
    </div>
  );
};

export default PatentOptions;