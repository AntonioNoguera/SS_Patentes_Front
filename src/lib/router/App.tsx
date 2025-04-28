import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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

import "@i18n";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [languageReady, setLanguageReady] = useState(false);

  useEffect(() => {
    const changeLang = async () => {
      await i18n.changeLanguage(navigator.language);
      setLanguageReady(true); // cuando esté listo
    };

    changeLang();
  }, []);

  if (!languageReady) {
    // Puedes mostrar un loading sencillo o nada mientras cambia idioma
    return <div>Cargando...</div>;
  }

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

          <Route index element={<Navigate to="new-patent" replace />} />

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
        <Route
          path="/*"
          element={<h1>No existe esta ruta</h1>}
        />

      </Routes>
    </div>
  );
};

export default App;
