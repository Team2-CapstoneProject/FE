import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Home/Layout";
import LoginPage from "./Dashboard/Login/LoginPage";
import Dashboard from "./Dashboard/Main/Dashboard";

const MainContent = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default MainContent;
