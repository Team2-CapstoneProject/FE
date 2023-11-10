import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Pages/Home/Layout";
import LayoutDashboard from "../Pages/Dashboard/LayoutDashboard";
import LoginPage from "../Pages/Home/Login/LoginPage";

const MainContent = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Layout />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard/*" element={<LayoutDashboard />} />
      </Routes>
    </Router>
  );
};

export default MainContent;
