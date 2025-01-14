import React from "react";
import PatentOption from "./PatentOption";

const PatentOptions: React.FC = () => {
  const boxesData = [
    {
      title: "Patente",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://placehold.co/200x200/EEE/31343C",
      route: "/route1",
    },
    {
      title: "Diseño Industrial",
      text:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://placehold.co/200x200/EEE/31343C",
      route: "/route2",
    },
    {
      title: "Modelo de Utilidad",
      text:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://placehold.co/200x200/EEE/31343C",
      route: "/route3",
    },
  ];

  return (
    <div className="flex w-full h-100 py-20 justify-evenly items-center">
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
