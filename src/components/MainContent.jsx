import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Home/Layout";
import LoginPage from "./Dashboard/LoginPage";

const MainContent = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default MainContent;
