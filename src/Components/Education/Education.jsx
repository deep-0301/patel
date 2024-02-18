import React from "react";
import "./Education.css";
import { motion } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
import Carleton from "../../img/carleton.png";
import Gtu from "../../img/gtu.png";
import Gseb from "../../img/Gseb.png";
const Education = () => {
  const events = [
    {
      title: "Carleton University",
      description: "",
      degree: "Master of Engineering: Electrical and Computer",
      Grade: "GPA : 10.6/12",
      date: "01/01/2023 - 04/30/2024",
      imageurl: Carleton,
    },
    {
      title: "Gujarat Technological University",
      description: "",
      degree: "Bachelor of Engineering - Information Technology",
      Grade: "GPA : 3.84 / 4",
      date: "07/01/2018 - 06/01/2022",
      imageurl: Gtu,
    },
    {
      title: "Gujarat Higher Secondary Eduacation Board",
      description: "",
      degree: "Grade 12 (Science Stream)",
      Grade: "Percentile: 97.63%",
      date: "03/01/2018",
      imageurl: Gseb,
    },
    {
      title: "Gujarat Secondary Eduacation Board",
      description: "",
      degree: "Grade 10",
      Grade: "Percentile: 98.32%",
      date: "03/01/2016",
      imageurl: Gseb,
    },
    // Add more events as needed
  ];

  return (
    <div className="Education">
      <span>Recent</span>
      <br />
      <span>Education</span>
      <div className="timeline-container">
        {events.map((event, index) => {
          const [ref, inView] = useInView({
            threshold: 0.1, // Trigger when 50% of the item is in view
          });

          return (
            <motion.div
              ref={ref}
              className="timeline-item"
              key={index}
              initial={{ x: -100, opacity: 0.3 }}
              animate={inView ? { x: 0, opacity: 1 } : ""}
              transition={{ duration: 0.2, delay: index * 0.2 }}
            >
              <div className="timeline-dot">
                <img src={event.imageurl} alt="" width={70} height={70} />
              </div>
              <div className="blur"></div>
              <div className="timeline-content">
                <p>{event.date}</p>
                <h1>{event.title}</h1>
                <p>{event.description}</p>
                <p>{event.degree}</p>
                <p>{event.Grade}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
