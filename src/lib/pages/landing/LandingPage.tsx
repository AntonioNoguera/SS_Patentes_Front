import React from "react";
import { NavLink } from "react-router-dom";
import MotionImplementaton from "@components/MotionImplementation";
import LandingNavbar from "./components/LandingNavbar";

function LandingPage() {
  return (
    <MotionImplementaton>
      <div className="flex flex-col min-h-screen bg-gray">
        <LandingNavbar />
        <main className="relative flex-1 flex flex-col">
          {/* Fondo */}
          <div className="absolute inset-0 bg-aqua26 z-0"></div>

          {/* Contenido principal */}
          <div className="relative flex-1 flex justify-end items-end z-10 p-9">

             
            <h1 className="absolute top-20 left-12 text-white text-4xl font-bold z-20">LANDING</h1>

            <NavLink
              to="/login"
              className="btn-primary text-sm shadow hover:shadow-sm shadow-xl transition-shadow duration-300 z-30"
            >
              ¡Empieza ahora!
            </NavLink>
          </div>
        </main>
      </div>
    </MotionImplementaton>
  );
}

export default LandingPage;
