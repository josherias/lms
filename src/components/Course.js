import React from "react";
import { Link } from "react-router-dom";
import "../styles/Course.css";

function Course({ image, heading, description }) {
  return (
    <div className="course">
    <Link className="link" to="/course">
    <div className="course__container">
      <img src={image} alt="img" />
      <div className="course__text">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    </div>
    </Link>
    </div>
  );
}

export default Course;
