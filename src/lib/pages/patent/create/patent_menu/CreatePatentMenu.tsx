import React from "react";

import Navbar from "../../../shared/Navbar";
import Footer from "../../../shared/Footer";

import PatentOptions from "./components/PatentOptions";
import MotionImplementaton from "@components/MotionImplementation";

function CreatePatentMenu() {
  return (
    <MotionImplementaton>
      <div className="h-screen flex flex-col">
        <Navbar /> 
        <main className="flex-1 flex items-center justify-center">
          <PatentOptions />
        </main> 
        <Footer />
      </div>
    </MotionImplementaton>
  );
}

export default CreatePatentMenu;
