import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "@pages/login/LoginPage";
import RegisterPage from "@pages/register/RegisterPage";

const App: React.FC = () => {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
