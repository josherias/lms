import React from "react";
import "../styles/LoginButton.css";

function LoginButton({ label }) {
  return (
    <div className="login__button">
      <div className="input__group">
        <button>{label}</button>
      </div>
    </div>
  );
}

export default LoginButton;
