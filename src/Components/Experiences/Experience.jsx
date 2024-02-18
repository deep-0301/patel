import React from "react";
import "./Experience.css";
function Experience() {
  return (
    <>
      <div className="workExperience" id="Experience">
        <span>Professional</span>
        <br></br>
        <span>Work Experience</span>
        <div class="experience">
          <div class="job">
            <div class="time-period">Jan 2022- May 2022</div>
            <div class="title">Software Developer Intern</div>
            <div class="company">
              Bhaskaracharya National Institute for Space Applications and
              Geo-informatics
            </div>
            <div className="blur" style={{ background: "#C1F5FF" }}></div>
            <div class="description">
              BISAG-N is an autonomous body under India's MeitY, focusing on
              geo-spatial technology development, research, and capacity
              building, as well as promoting technology transfer and
              entrepreneurship.
              <ul>
                <li>
                  Participated in the full software development lifecycle of the
                  Digital Health Card project, focusing on design, development,
                  testing, and documentation using MERN stack technologies.
                </li>
                <li>
                  Acquired practical experience in MongoDB, Express.js,
                  React.js, and Node.js, contributing to the project's
                  development.
                </li>
              </ul>
            </div>
          </div>

          <div class="job">
            <div class="time-period">May 2021 - July 2021</div>
            <div class="title">Software Engineering Intern</div>
            <div class="company">Infolabs</div>
            <div class="description">
              InfoLabz IT Services Pvt. Ltd. is a leading IT company that
              provides technical solutions and services. We strive to provide
              you with innovative and client-focused solutions.
              <ul>
                <li>
                  Demonstrated proficiency in Python, encompassing a solid grasp
                  of web scraping, algorithms and data mining concepts.
                </li>
                <li>
                  Utilized industry-standard API protocols like HTTP, REST, and
                  GraphQL to efficiently manage requests and retrieve data.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
