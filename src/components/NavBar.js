import React, { useState } from "react";
import "../styles/NavBar.css";
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function NavBar() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <div className="navbar__brand">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className={click ? "navbar__right" : "hide-nav"}>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link">My Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="/home" className="nav-link">Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="/categories" className="nav-link">Categories</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Account</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav__toggler" onClick={handleClick}>
        <MenuIcon />
      </div>
    </div>
  );
}

export default NavBar;
