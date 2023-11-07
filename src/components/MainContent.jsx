import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Home/Layout";
import LoginPage from "./Dashboard/Login/LoginPage";
import ProtectedRoute from "./Dashboard/ProtectedRoute";
import LayoutDashboard from "./Dashboard/Main/LayoutDashboard";

const MainContent = () => {
  return (
    <Router>
      <ProtectedRoute>
        <LayoutDashboard />
      </ProtectedRoute>
      <Routes>
        <Route path="" element={<Layout />} />
        <Route path="login" element={<LoginPage />} />
        {/* <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <LayoutDashboard />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default MainContent;
