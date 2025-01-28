import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "@pages/auth/login/LoginPage";
import RegisterPage from "@pages/auth/register/RegisterPage";
import DashBoardPage from "@pages/home/DashBoardPage"; 
import CreatePatentMenu from "@pages/patent/create/patent_menu/CreatePatentMenu";
import StepperTest from "@pages/playground/SteperTest"; 
import CreateNewPatent from "@pages/patent/create/specific_patent/CreateNewPatent";

const App: React.FC = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashBoardPage/>} /> 
        <Route path="/patent/new" element={<CreatePatentMenu/>} /> 
        <Route path="/patent/new/:type" element={<CreateNewPatent/>} />
        <Route path="/test/" element={<StepperTest/>}/>
      </Routes>
    </div>
  );
};

export default App;
