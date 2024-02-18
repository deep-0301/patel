import React from "react";
import "./Works.css";
import Bisag from "../../img/bisag.png";
import Infolabs from "../../img/infolabs.png";
import Pico from "../../img/pico.png";
import Upwork from "../../img/Upwork.png";
import Amazon from "../../img/amazon.png";
import { motion } from "framer-motion/dist/framer-motion";
const Works = () => {
  return (
    <>
      <div className="works">
        <div className="awesome">
          <div className="w-head">
            <span>Work for all these</span>
            <br />
            <span>Brands & services</span>
          </div>
          <a
            href="https://www.linkedin.com/in/deep-patel-0301/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button s-button">Linked In</button>
          </a>

          <div
            className="blur s-blurl"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        <div className="w-right">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewPort={{ margin: "-40px" }}
            transition={{ duration: 3, type: "spring" }}
            className="w-mainCircle"
          >
            <div className="w-secCircle">
              <img src={Bisag} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Infolabs} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Pico} alt="" />
            </div>
          </motion.div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </>
  );
};

export default Works;
