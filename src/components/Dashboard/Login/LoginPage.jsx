import React from "react";
import "../Login/Login.css";

const LoginPage = () => {
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
            <div className="login-field">
              <label className="login-label" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                name="email"
                autoComplete="false"
                className="login-input"
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
              />
            </div>
            <button className="button-login" type="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
