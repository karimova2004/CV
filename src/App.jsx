// import React from "react";
// import PersonalInfo from "./components/PersonalInfo";
// import AboutMe from "./components/AboutMe";
// import Education from "./components/Education";
// import Experience from "./components/Experience";
// import Certificates from "./components/Certificates";
// import Contacts from "./components/Contacts";
// import Skills from "./components/Skills";
// import Languages from "./components/Languages";
// import "./index.css";

// function App() {
//   return (
//     <div className="app">
//       <h1 className="title">User CV</h1>
//       <div className="cv-container">
//         <div className="left-column">
//           <Contacts />
//           <AboutMe />
//           <Skills />
//           <Languages />
//         </div>
//         <div className="right-column">
//           <PersonalInfo />
//           <Education />
//           <Experience />
//           <Certificates />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;






// Portfolio SPA-proqramı
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
