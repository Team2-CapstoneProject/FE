import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Home/Layout";
import LoginPage from "./Dashboard/Login/LoginPage";
import Dashboard from "./Dashboard/Main/Dashboard";
import ProtectedRoute from "./Dashboard/ProtectedRoute";

const MainContent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainContent;
