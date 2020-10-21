import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import InputComponent from "./InputComponent";
import LoginButton from "./LoginButton";

function Login() {
  return (
    <div className="login">
      <h2>Login</h2>
      <div className="login__container">
        <InputComponent
          label="Email"
          placeholder="Enter your email"
          type="text"
        />
        <InputComponent
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <LoginButton label="login" />

        <p className="login__link__container">
          <Link to="/signup" className="login__link">
            Click Link to signup!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
