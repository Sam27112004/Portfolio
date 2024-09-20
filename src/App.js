import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Qualification from "./components/Qualification";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { TransitionGroup, CSSTransition } from 'react-transition-group';


function App() {
  return (
    <Router>
      <Navbar />
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade">
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}

export default App;
