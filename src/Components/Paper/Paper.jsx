import React from "react";
import "./Paper.css"; // Update the import to match the CSS file name
import Research from "../../img/research.png";

const Card = ({ title, content, weblink }) => {
  return (
    <div className="a-card">
      <div className="a-card-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <a
          href="https://science.carleton.ca/dataday9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {weblink}
        </a>
      </div>
    </div>
  );
};

const Paper = () => {
  return (
    <div className="paper">
      <div className="paper-header">
        <span>Publication</span>
        <br />
        <span>& Achievements</span>
      </div>
      <div className="card-container">
        <div className="card-image">
          <img src={Research} alt="Research Paper" />
        </div>
        <div className="card-content">
          <h3>Insights of the Olympics: Athens to Rio</h3>
          <i>
            <p>International Journal for Research</p>
          </i>
          <p className="p-card-cont">
            The Paper aims to analyze Olympic data from 1896 to 2016 to uncover
            historical insights, compare Summer and Winter Olympics' age and
            gender stats, examine athletes' physical attributes, highlight top
            medal-winning countries and individuals, and assess gender
            participation and host cities.
          </p>
          <a
            href="https://www.ijraset.com/fileserve.php?FID=37688"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">Open</button>
          </a>
        </div>
      </div>
      <div className="a-cards-container">
        <Card
          title="3rd winner of Data Day 9.0"
          content="At Data Day 9.0 at Carleton University, I presented a poster titled Strengthening Victim Services: Ensuring Rights and Justice for Ottawa Police, focusing on enhancing victim support services. Utilizing data analysis, I proposed solutions to bolster rights and justice access. My work earned me 3rd place, recognizing my ability to derive impactful insights for improving victim services."
          weblink="Link"
        />
        <Card
          title="1st place on Auction Mansion"
          content="In 2019, at the Quench event held at GEC Gandhinagar, I led my team to victory in the Auction Mansion competition. This unique contest involved ten teams, each consisting of six members, where the challenge was to strategically bid on a variety of products within the constraints of a limited budget. As the team leader, my role was pivotal in making critical decisions and guiding our team through the auction process. Our effective strategy and teamwork culminated in us securing the 1st place, demonstrating our ability to manage resources wisely and outperform the competition."
        />
        <Card
          title="Organizer of IT QUIZ Event"
          content="In 2020, I took on the role of Organizer for the IT Quiz Event at Quench, the tech fest hosted by GEC Gandhinagar. My responsibilities were multifaceted, involving the planning and execution of the IT quiz, which tested participants on their information technology knowledge. I was in charge of administering the quiz to each participant, evaluating their performances, and efficiently managing the progression of rounds throughout the event. A key part of my role was to ensure the smooth operation of each stage, from the preliminary rounds to the final, and ultimately declaring the winner."
        />
      </div>
    </div>
  );
};

export default Paper;
