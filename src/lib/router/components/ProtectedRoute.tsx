import React from "react";
import { Navigate } from "react-router-dom";

interface DecodedToken {
  exp: number;
}

interface ProtectedRouteProps {
  children: React.ReactNode;
  protected?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, protected: isProtected = true }) => {
  const token = localStorage.getItem("token");

  if (isProtected) {
    if (!token) {
      return <Navigate to="/" replace />;
    }

    try {
      // Mock del decodificado del token
      const decoded: DecodedToken = {
        exp: Math.floor(Date.now() / 1000) + 60, // Expira en 60 segundos
      };

      // Verifica si el token ha expirado
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        return <Navigate to="/" replace />;
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
