import React, { useState } from "react";
import "../Login/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../actions/AuthActions";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    loginType: "admin",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const error = useSelector((state) => state.auth.error);

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    try {
      dispatch(loginUser(credentials, navigate));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="l-wrapper">
      <div className="l-container">
        <div className="design">
          <div className="img-container">
            <div className="decoration">
              <img src="./ball.png" alt="decoration" />
            </div>
            <img src="./img-login.png" alt="login-img" />
          </div>
        </div>
        <div className="login">
          <div className="container">
            <div className="login-title">
              <h1>Login to Admin Page</h1>
              <p>See what is going on with your business</p>
            </div>
            {/* {error && <div className="error">{error}</div>} */}
            <div className="login-field">
              <label className="login-label" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                name="email"
                autoComplete="false"
                className="login-input"
                placeholder="Email"
                value={credentials.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="login-field">
              <label className="login-label" htmlFor="email">
                Password
              </label>
              <input
                type="password"
                name="password"
                autoComplete="false"
                className="login-input"
                placeholder="Password"
                value={credentials.password}
                onChange={handleInputChange}
              />
            </div>
            <button
              className="button-login"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
