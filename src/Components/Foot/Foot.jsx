import React from "react";
import "./Foot.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Medium from "../../img/medium.png";
import { Link } from "react-scroll";
import Email from "../../img/email.png";
import Call from "../../img/call.png";

function Foot() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul style={{ listStyleType: "none" }}>
            <Link spy={true} to="Education" smooth={true}>
              <li>
                <u>Education</u>
              </li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>
                <u>Skills</u>
              </li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>
                <u>Experience</u>
              </li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>
                <u>Portfolio</u>
              </li>
            </Link>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <div className="f-icons" style={{ textAlign: "center" }}>
            <a
              href="mailto: deepkpatel0301@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Email} alt="Email" />
            </a>
            <a
              href="https://www.linkedin.com/in/deep-patel-0301/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Call} alt="Call" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="f-icons">
            <a
              href="https://www.linkedin.com/in/deep-patel-0301/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="" />
            </a>
            <a
              href="https://github.com/deep-0301"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="" />
            </a>
            <a
              href="https://medium.com/@deep0301"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Medium} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} D K Patel | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Foot;
