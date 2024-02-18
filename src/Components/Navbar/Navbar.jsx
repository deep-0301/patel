import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Expand from "@iconscout/react-unicons/icons/uil-align-justify";
import Close from "@iconscout/react-unicons/icons/uil-times";
import DK from "../../img/dk.png";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">
            <img src={DK} alt="Deep" height={60} width={60} />
          </div>
          <button
            id="menu"
            type="button"
            className={`n-expand n-expand-animate ${show ? "open" : ""}`}
            onClick={handleClick}
          >
            {show ? (
              <Close color="orange" size="2rem" />
            ) : (
              <Expand color="orange" size="2rem" />
            )}
          </button>
        </div>
        <div className="n-right">
          <div className={show ? "n-list" : "n-list showed"}>
            <ul style={{ listStyleType: "none" }}>
              <Link
                spy={true}
                to="Navbar"
                smooth={true}
                activeClass="activeClass"
                onClick={handleClick}
              >
                <li>Home</li>
              </Link>
              <Link
                spy={true}
                to="Education"
                smooth={true}
                onClick={handleClick}
              >
                <li>Education</li>
              </Link>
              <Link
                spy={true}
                to="Services"
                smooth={true}
                onClick={handleClick}
              >
                <li>Skills</li>
              </Link>

              <Link
                spy={true}
                to="Experience"
                smooth={true}
                onClick={handleClick}
              >
                <li>Experience</li>
              </Link>

              <Link
                spy={true}
                to="Portfolio"
                smooth={true}
                onClick={handleClick}
              >
                <li>Portfolio</li>
              </Link>
            </ul>
          </div>
          <Link spy={true} to="Contact" smooth={true} onClick={handleClick}>
            <button className="button n-button">Contact</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;