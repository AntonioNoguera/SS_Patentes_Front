import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "@pages/auth/login/LoginPage";
import RegisterPage from "@pages/auth/register/RegisterPage";
import DashBoardPage from "@pages/home/DashBoardPage";
import StepperTest from "@pages/playground/SteperTest";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "@pages/landing/LandingPage";
import ListPatents from "@pages/patent/my_documents/ListPatents";
import CreatePatent from "@pages/patent/create/CreatePatent";
import PatentStatus from "@pages/patent/status/PatentStatus";
import PatentInProcess from "@pages/patent/in_process/PatentsInProcess";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Rutas protegidas */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoute protected={false}>
              <DashBoardPage />
            </ProtectedRoute>
          }
        >
          <Route
            path="new-patent"
            element={
              <ProtectedRoute protected={false}>
                <CreatePatent />
              </ProtectedRoute>
            }
          />

          <Route
            path="patent-status"
            element={
              <ProtectedRoute protected={false}>
                <PatentStatus />
              </ProtectedRoute>
            }
          />

          <Route
            path="in-process" 
            element={
              <ProtectedRoute protected={false}>
                <PatentInProcess />
              </ProtectedRoute>
            }
          />

          <Route
            path="my-documents"
            element={
              <ProtectedRoute protected={false}>
                <ListPatents />
              </ProtectedRoute>
            }
          />

        </Route>

        {/* Ruta de pruebas (puedes hacerla pública o protegida) */}
        <Route
          path="/test"
          element={
            <ProtectedRoute protected={false}>
              <StepperTest />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
