import React from "react";
import "../styles/DropDown.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function DropDown({ label, data }) {
  return (
    <div className="drop-down">
      <span className="drop-down__label">{label} : </span>
      <span className="drop-down__icon">
        All <ArrowDropDownIcon />
      </span>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
