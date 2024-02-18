import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/Deep.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Medium from "../../img/medium.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion/dist/framer-motion";
import Resume from "../../img/resume.pdf";

function Intro() {
  const transition = { duration: 2, type: "spring" };
  return (
    <>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hey! I am</span>
            <span>D K Patel</span>
            <span>
              MERN stack Developer with high level of experience in web
              development
            </span>
          </div>
          <a href={Resume} download style={{ textDecoration: "none" }}>
            <button className="button i-button"> Resume</button>
          </a>
          <div className="i-icons">
            <a
              href="https://www.linkedin.com/in/deep-patel-0301/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="Linkdin" />
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
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji}
            alt=""
          />
          <motion.div
            initial={{ top: "20%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            style={{ top: "20%", left: "68%" }}
            className="floting-div"
          >
            <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
          </motion.div>
          <motion.div
            initial={{ top: "14rem", left: "9rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            style={{ top: "14rem", left: "0rem" }}
            className="floting-div"
          >
            <FloatingDiv image={thumbup} txt1="Animated Design" txt2="Expert" />
          </motion.div>

          {/* blur div */}
          <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Intro;
