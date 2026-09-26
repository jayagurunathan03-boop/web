import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  Home,
  About,
  Skills,
  Projects,
  Education,
  Experience,
  Services,
  Resume,
  Contact,
} from "./portfolio";

import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <header className="navbar">
          <Link to="/" className="logo">
            JG<span>.</span>
          </Link>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/education">Education</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/services">Services</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <h3>Jayagurunathan</h3>
          <p>React Developer & Computer Science Student</p>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <p className="copyright">
            © 2026 Jayagurunathan. All Rights Reserved.
          </p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;