import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contacts from "./components/Contacts";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import "./index.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">User CV</h1>
      <div className="cv-container">
        <div className="left-column">
          <Contacts />
          <AboutMe />
          <Skills />
          <Languages />
        </div>
        <div className="right-column">
          <PersonalInfo />
          <Education />
          <Experience />
          <Certificates />
        </div>
      </div>
    </div>
  );
}

export default App;
