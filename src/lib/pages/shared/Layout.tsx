import MotionImplementaton from "@components/MotionImplementation";
import Navbar from "./Navbar";
import { NavLink, Outlet } from "react-router-dom";
import DashboardSidebar from "@components/DashboardSidebar";

import bgImage from "@assets/background.png";

function Layout() {
    return (
        <MotionImplementaton>
            {/* Contenedor principal con altura mínima de pantalla */}
            <div style={{ backgroundImage: `url(${bgImage})` }} className="flex flex-col min-h-screen bg-aqua26">
                <Navbar />
                {/* Main ocupa todo el espacio restante */}
                <main className="flex flex-1 h-full">
                    <DashboardSidebar />
                    {/* Contenedor del contenido con `min-h-full` */}
                    <div className="flex flex-1 min-h-full items-start justify-between ml-6 bg-white rounded-tl-2xl">
                        <Outlet />
                    </div>
                </main>
            </div>

        </MotionImplementaton>
    );
}

export default Layout;