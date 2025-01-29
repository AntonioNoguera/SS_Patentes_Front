import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "@pages/auth/login/LoginPage";
import RegisterPage from "@pages/auth/register/RegisterPage";
import DashBoardPage from "@pages/home/DashBoardPage";
import CreatePatentMenu from "@pages/patent/create/patent_menu/CreatePatentMenu";
import StepperTest from "@pages/playground/SteperTest";
import CreateNewPatent from "@pages/patent/create/specific_patent/CreateNewPatent";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginScreen from "@pages/auth/loginV1/LoginScreen";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute protected={true}>
              <DashBoardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patent/new"
          element={
            <ProtectedRoute protected={true}>
              <CreatePatentMenu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patent/new/:type"
          element={
            <ProtectedRoute protected={true}>
              <CreateNewPatent />
            </ProtectedRoute>
          }
        />
        {/* Ruta de pruebas (puedes hacerla pública o protegida) */}
        <Route
          path="/test"
          element={
            <ProtectedRoute protected={false}>
              <StepperTest />
            </ProtectedRoute>
          }
        />

        <Route
          path="/loginv1"
          element={
            <ProtectedRoute protected={false}>
              <LoginScreen />
            </ProtectedRoute>
          } />

      </Routes>


    </div>
  );
};

export default App;
