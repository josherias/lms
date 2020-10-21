import React from "react";
import "../styles/InputComponent.css";

function InputComponent({ label, placeholder }) {
  return (
    <div className="input">
      <div className="input__group">
        <p>
          <label htmlFor="">{label}</label>
        </p>
        <input type="text" placeholder={placeholder} />
      </div>
    </div>
  );
}

export default InputComponent;
