import React from "react";
import "./Services.css";
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { motion } from "framer-motion/dist/framer-motion";

function Services() {
  const transition = { duration: 2, type: "spring" };
  return (
    <>
      <div className="services" id="Services">
        <div className="awesome">
          <span>My Awesome</span>
          <span>Skills</span>          
          <div
            className="blur s-blurl"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        <div className="cards">
          <motion.div
            initial={{ left: "28rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
            style={{ left: "14rem" }}
          >
            <Card
              emoji={Heartemoji}
              heading={"Programming Languages"}
              detail={
                "Python, C, React JS, HTML5, CSS3, JavaScript, PHP, Node JS, jQuery, Bootstrap, MongoDB"
              }
            />
          </motion.div>
          <motion.div
            initial={{ left: "-12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            style={{ top: "12rem", left: "-4rem" }}
          >
            <Card
              emoji={Glasses}
              heading={"Tools and Technologies"}
              detail={
                "SQL, NumPy, Pandas, Git, PIL, Keras, Linux, TensorFlow, Jupyter, OpenCV, NPM, Apache,MongoDB Compass, UI/UX"
              }
            />
          </motion.div>
          <motion.div
            initial={{ left: "28rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
            style={{ top: "19rem", left: "12rem" }}
          >
            <Card
              emoji={Humble}
              heading={"Advanced Skills"}
              detail={
                "(Machine Learning, Deep Learning, Data Science, Data Analysis, Data Modelling, Data Mining, Software Development, Data Structures, Analysis & Design of Algorithms, Operating Systems, RDBMS, Software Engineerings, Object-Oriented Programming, Problem-Solving, Web Development."
              }
            />
          </motion.div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Services;
