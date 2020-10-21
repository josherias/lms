import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-router-dom";

import "../styles/Footer.css";

function Foooter() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__column1">
          <p>&copy; JoshErias 2020</p>
        </div>
        <div className="footer__column2">
          <Link to='www.instagram.com/josherias' className="link">
            <FacebookIcon />
          </Link>
          <Link to='www.instagram.com/josherias' className="link">
            <InstagramIcon />
          </Link>
          <Link to='www.instagram.com/josherias' className="link">
            <EmailIcon />
          </Link>
          <p>Get in Touch</p>
        </div>
        <div className="footer__column3">
          <p>Designed by Josh</p>
        </div>
      </div>
    </div>
  );
}

export default Foooter;
