import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "@pages/auth/login/LoginPage";
import RegisterPage from "@pages/auth/register/RegisterPage";
import DashBoardPage from "@pages/home/DashBoardPage";

const App: React.FC = () => {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashBoardPage/>} />
      </Routes>
    </div>
  );
};

export default App;
