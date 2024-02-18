import React from "react";
import "./Project.css"; // Make sure the path matches where your CSS file is located
import Quiz from "../../img/quiz.gif";
import Todo from "../../img/todo.gif";
import Form from "../../img/form.gif";
import Search from "../../img/search.gif";
import Ethics from "../../img/ethics.jpg";
import Music from "../../img/music.png";
import Health from "../../img/health.gif";
import Credit from "../../img/credit.png";

const App = () => {
  const cardsData = [
    {
      id: 1,
      title: "Multi-Step Form Using React and Material-UI",
      description: "",
      url:
        "https://medium.com/nerd-for-tech/simple-react-quiz-application-b9ac808e6100",
      imageUrl: Quiz,
    },
    {
      id: 2,
      title: "Implementing a Custom Search Bar with React",
      description: "",
      url:
        "https://medium.com/geekculture/implementing-a-custom-search-bar-with-react-c09cba90ae99",
      imageUrl: Search,
    },
    {
      id: 3,
      title: "Todo App with React and Firebase",
      description: "",
      url:
        "https://medium.com/geekculture/ill-be-building-a-todo-app-with-one-of-the-most-popular-web-application-frameworks-react-and-75ffe4b32dc4",
      imageUrl: Todo,
    },
    {
      id: 4,
      title: "Basic BeatBox - A Python Music Player",
      description: "",
      url: "",
      imageUrl: Music,
    },
    {
      id: 5,
      title: "Digital Health Card",
      url: "https://deep-0301.github.io/Aarogyacard/",
      imageUrl: Health,
    },
    {
      id: 6,
      title: " Credit Card Fraud Detection ",
      url: "https://github.com/deep-0301/credit_card_fraud_detection",
      imageUrl: Credit,
    },
    {
      id: 7,
      title: "Strengthening Victim Services: Ensuring Rights and Justice",
      description: "Winner of Data Day 9.0 Carleton University 2023",
      imageUrl: Ethics,
      url: "https://science.carleton.ca/dataday9/",
    },
    {
      id: 8,
      title: "Multi-Step Form Using React and Material-UI",
      description: "",
      url:
        "https://javascript.plainenglish.io/multi-step-form-using-react-and-material-ui-29ff7f7cf049",
      imageUrl: Form,
    },

    // Add other cards similarly
  ];

  return (
    <div className="Projects" id="Portfolio">
      <span>Recent Projects</span>
      <br />
      <span>Portfolio</span>
      <div className="p-cardContainer">
        {cardsData.map((card) => (
          <div key={card.id} className="p-card">
            <img src={card.imageUrl} alt={card.title} className="p-cardImage" />
            <a
              href={card.url}
              target="_blank"
              alt="cards"
              rel="noopener noreferrer"
            >
              <h2 className="p-cardTitle">{card.title}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
