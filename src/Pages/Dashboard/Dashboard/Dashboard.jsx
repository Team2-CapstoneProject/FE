import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDashboardData } from "../../../redux/actions/DashboardActions";
import "./Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboardData = useSelector((state) => state.dashboard.data);
  const loading = useSelector((state) => state.dashboard.loading);
  const error = useSelector((state) => state.dashboard.error);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!dashboardData) {
    return null;
  }

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">{dashboardData.message}</h2>
      <div className="card-container">
        <div className="card-dashboard card-1">
          <h3>Total Check-Ins</h3>
          <p>{dashboardData.nCheckIn}</p>
        </div>
        <div className="card-dashboard card-2">
          <h3>Total Check-Outs</h3>
          <p>{dashboardData.nCheckOut}</p>
        </div>
        <div className="card-dashboard card-3">
          <h3>Total Villas</h3>
          <p>{dashboardData.nVila}</p>
        </div>
        <div className="card-dashboard card-4">
          <h3>Available Villas</h3>
          <p>{dashboardData.nAvailVila}</p>
        </div>
        {/* <div className="card">
          <h3>Not Available Villas</h3>
          <p>{dashboardData.notAvailVila}</p>
        </div> */}
      </div>
      <h3 className="users-title">Users</h3>
      <table className="users-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Email</th>
            <th>Full Name</th>
            <th>Nickname</th>
          </tr>
        </thead>
        <tbody>
          {dashboardData.users.map((user, index) => (
            <tr key={index}>
              <td>
                <img
                  src={
                    user.image ||
                    "https://cdn.icon-icons.com/icons2/1378/PNG/256/avatardefault_92824.png"
                  }
                  alt="User"
                />
              </td>
              <td>{user.email}</td>
              <td>{user.fullname}</td>
              <td>{user.nickname}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="rate-reviews-title">Rate & Review</h3>
      <table className="rate-reviews-table">
        <thead>
          <tr>
            <th>Score</th>
            <th>Description</th>
            <th>Created At</th>
            <th>User</th>
            <th>Transaction</th>
          </tr>
        </thead>
        <tbody>
          {dashboardData.rateReview.map((review, index) => (
            <tr key={index}>
              <td>{review.score}</td>
              <td>{review.description}</td>
              <td>{new Date(review.createdAt).toLocaleString()}</td>
              <td>{review.Users.fullname}</td>
              <td>{review.Transactions.Vilas.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
