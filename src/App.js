import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import "./App.css";
import Works from "./Components/Works/Works";
import Reviews from "./Components/Reviews/Reviews";
import Contact from './Components/Contact/Contact';
import Scroll from './Components/Scroll/Scroll'
import Project from './Components/Projects/Project';
import Education from './Components/Education/Education'
import Foot from './Components/Foot/Foot';
import Publication from './Components/Experiences/Experience';
import Paper from './Components/Paper/Paper';
function App() {

  return (
    <div
      className="App"
    >
      <Navbar />
      <Intro />
      <Education />
      <Services />
      <Publication />
      <Works />
      <Project />
      <Paper />
      <Reviews />
      <Contact />
      <Foot />
      <Scroll />
    </div>
  );
}

export default App;