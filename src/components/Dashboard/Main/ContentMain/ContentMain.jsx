import "./ContentMain.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Guest from "../pages/Guest";
import Villa from "../pages/Villa";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="guest" element={<Guest />} />
        <Route path="villa" element={<Villa />} />
      </Routes>
    </div>
  );
};

export default ContentMain;
