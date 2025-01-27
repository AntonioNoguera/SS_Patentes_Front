import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "@pages/auth/login/LoginPage";
import RegisterPage from "@pages/auth/register/RegisterPage";
import DashBoardPage from "@pages/home/DashBoardPage"; 
import NewPatent from "@pages/patent/CreatePatentPage";
import StepperTest from "@pages/playground/SteperTest"; 
import CreateNewPatent from "@pages/patent/create/CreateNewPatent";

const App: React.FC = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashBoardPage/>} /> 
        <Route path="/patent/new" element={<NewPatent/>} /> 
        <Route path="/patent/new/:type" element={<CreateNewPatent/>} />
        <Route path="/test/" element={<StepperTest/>}/>
      </Routes>
    </div>
  );
};

export default App;
