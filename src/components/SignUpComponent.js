import React from "react";
import "../styles/SignUp.css";
import InputComponent from "./InputComponent";
import LoginButton from "./LoginButton";

function SignUpComponent() {
  return (
    <div className="signup">
      <div className="signup__container">
        <h2>Create Account</h2>
        <InputComponent
          label="Name"
          placeholder="Enter your name"
          type="text"
        />
        <InputComponent
          label="Email"
          placeholder="Enter your Email"
          type="text"
        />
        <InputComponent
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <InputComponent
          label="Password Confirmation"
          placeholder="Enter your password"
          type="password"
        />

        <LoginButton label="Create account" />
      </div>
    </div>
  );
}

export default SignUpComponent;
