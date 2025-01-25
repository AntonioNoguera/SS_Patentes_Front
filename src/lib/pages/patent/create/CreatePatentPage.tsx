import React from "react"; 

import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

import PatentOptions from "./components/PatentOptions";
import MotionImplementaton from "@components/MotionImplementation";

function DashBoardPage() {
  return (
    <MotionImplementaton> 
    <div className="flex flex-col min-h-screen">
      <Navbar />
 
      <main className="flex-1 flex flex-col p-8">
        <h1 className="text-3xl font-semibold text-gray-800 z-20">Creación de patentes</h1>
        <div className="flex-1 flex">
          <PatentOptions />
        </div>
      </main> 
      <Footer />
    </div>
    </MotionImplementaton>
  );
}

export default DashBoardPage;
