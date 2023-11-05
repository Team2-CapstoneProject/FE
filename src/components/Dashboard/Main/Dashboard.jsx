import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    // console.log(token);
    return null;
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
