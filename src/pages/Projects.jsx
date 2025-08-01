import React from "react";
import { FaReact, FaJava, FaCar, FaTasks, FaChartLine } from "react-icons/fa";
import { SiLaravel } from "react-icons/si";

const projects = [
  {
    title: "MangeTask",
    description: "Task management app built using React and Laravel.",
    link: "https://github.com/Rajouane/MangeTask",
    icon: <SiLaravel size={48} color="#dd0031" />,  // Laravel icon
  },
  {
    title: "PortFolio",
    description: "My personal portfolio built with React.",
    link: "https://github.com/Rajouane/PortFolio",
    icon: <FaReact size={48} color="#61dafb" />,  // React icon
  },
  {
    title: "Test Java",
    description: "Java testing project with basic logic.",
    link: "https://github.com/Rajouane/test-java",
    icon: <FaJava size={48} color="#f89820" />,  // Java icon
  },
  {
    title: "Rental Store",
    description: "Vehicle rental management system.",
    link: "https://github.com/chafik101/rental-store",
    icon: <FaCar size={48} color="#0d6efd" />,  // Car icon (blue)
  },
  {
    title: "Rental Cars Dashboard",
    description: "Dashboard for managing car rentals.",
    link: "https://github.com/chafik101/rentalCarsDashboard",
    icon: <FaChartLine size={48} color="#198754" />,  // Chart line icon (green)
  },
  {
    title: "ManagTask",
    description: "Another version of task management application.",
    link: "https://github.com/Rajouane/ManagTask",
    icon: <FaTasks size={48} color="#6c757d" />,  // Tasks icon (gray)
  },
];

function Projects() {
  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f8f9fa, #e0f7fa)",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold display-4 text-primary">
          🚀 My Projects
        </h2>
        <div className="row g-4">
          {projects.map(({ title, description, link, icon }, idx) => (
            <div className="col-md-4" key={idx}>
              <div
                className="card h-100 border-0 shadow-lg p-3 rounded-4 text-center hover-card"
                style={{
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="mb-3">{icon}</div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{title}</h5>
                  <p className="card-text text-muted flex-grow-1">{description}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark mt-3"
                  >
                    🔗 View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hover-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}

export default Projects;
