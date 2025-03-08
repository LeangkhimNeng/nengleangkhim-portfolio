import React from "react";
import { Routes, Route } from "react-router-dom";
import CVForm from "./cv/CVForm";
import MainLayout from "./MainLayout";


const RouteConfig: React.FC = () => {

  return (
    <Routes>
        <Route path="/" index element={<MainLayout />} />
        <Route path="/cv" element={<CVForm />} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default RouteConfig;
