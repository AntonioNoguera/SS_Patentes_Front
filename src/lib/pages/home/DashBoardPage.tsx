import React from "react";
import Navbar from "./components/Navbar"; // Importa el Navbar
import Footer from "./components/Footer"; // Importa el Footer

function DashBoardPage() {
  return (
    <div className="flex flex-col min-h-screen">  
      <Navbar />
      
      {/* Contenido principal */}
      <main className="flex-1 p-8">
        <h1 className="text-xl font-bold text-gray-800">Notificaciones</h1>
        <p className="mt-4 text-lg text-gray-600"> Main Notification Area. </p>
      </main>

      <Footer />
    </div>
  );
}

export default DashBoardPage;
