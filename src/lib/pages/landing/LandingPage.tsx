import React from "react";
import { NavLink } from "react-router-dom";
import MotionImplementaton from "@components/MotionImplementation";
import LandingNavbar from "./components/LandingNavbar";

function LandingPage() {
  return (
    <MotionImplementaton>
      <div className="flex flex-col min-h-screen">
        <LandingNavbar />
        <main className="flex-1 flex flex-col p-8">
          <div className="flex-1 flex justify-end items-end">
            <NavLink
              to="/login"
              className="btn-primary text-sm shadow  hover:shadow-sm   shadow-xl  transition-shadow duration-300"
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
