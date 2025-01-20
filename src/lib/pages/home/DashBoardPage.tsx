import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { NavLink } from "react-router-dom";

function DashBoardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col p-8">
        {/* Título y botón */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-800 flex-grow">
            Notificaciones
          </h1>
          <NavLink to="/patent/new" className="btn-primary text-sm">
            Crear Patente
          </NavLink>
        </div>

        {/* Contenido adicional */}
        <div className="flex-1 flex">
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DashBoardPage;
