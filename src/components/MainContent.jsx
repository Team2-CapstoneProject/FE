import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Home/Layout";
import LoginPage from "./Dashboard/Login/LoginPage";
import LayoutDashboard from "./Dashboard/Main/LayoutDashboard";

const MainContent = () => {
  return (
    // <Router>
    <Routes>
      <Route path="" element={<Layout />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="dashboard/*" element={<LayoutDashboard />} />
    </Routes>
    // </Router>
  );
};

export default MainContent;
