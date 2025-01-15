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
          <button className="btn-primary">
            <NavLink to="/patent/new">
              Inicia Sesión
            </NavLink>
          </button>
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
