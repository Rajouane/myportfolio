import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-dark text-white text-center py-3">
          © 2025 Otmane Rajouane
        </footer>
      </div>
    </Router>
  );
}

export default App;

