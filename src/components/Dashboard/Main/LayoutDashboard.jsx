import React from "react";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";

const LayoutDashboard = () => {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
};

export default LayoutDashboard;
