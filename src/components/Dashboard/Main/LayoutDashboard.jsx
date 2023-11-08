import React from "react";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import ProtectedRoute from "../ProtectedRoute";
import { BrowserRouter as Router } from "react-router-dom";

const LayoutDashboard = () => {
  // Mengambil token dari penyimpanan lokal
  const token = localStorage.getItem("token");
  console.log("Token:", token);
  return (
    <Router>
      <div className="app">
        <Sidebar />
        {/* Menggunakan ProtectedRoute untuk mengamankan rute */}
        <ProtectedRoute isAuthenticated={token}>
          <Content />
        </ProtectedRoute>
      </div>
    </Router>
  );
};

export default LayoutDashboard;
