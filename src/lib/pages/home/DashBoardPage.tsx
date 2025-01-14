import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PatentOptions from "./Patent/Create/PatentOptions";

function DashBoardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col p-8">
        <h1 className="text-xl font-bold text-gray-800">Notificaciones</h1>
        <div className="flex-1 flex">
          <PatentOptions />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DashBoardPage;
