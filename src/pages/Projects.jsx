import React from "react";
import { FaReact, FaJava, FaCar, FaTasks, FaChartLine, FaBook } from "react-icons/fa";
import { SiLaravel } from "react-icons/si";

const projects = [
  {
    title: "MangeTask",
    description:
      "Application de gestion des tâches développée avec React (frontend) et Laravel (backend), permettant la création, le suivi et la priorisation des tâches.",
    link: "https://github.com/Rajouane/MangeTask",
    icon: <SiLaravel size={48} color="#dd0031" />, // Laravel icon
  },
  {
    title: "PortFolio",
    description:
      "Mon portfolio personnel conçu avec React, présentant mes compétences, mes projets et mon parcours en développement web.",
    link: "https://github.com/Rajouane/myportfolio",
    icon: <FaReact size={48} color="#61dafb" />, // React icon
  },
  {
    title: "Rental Store",
    description:
      "Application complète de gestion de location de véhicules développée avec Laravel et React, incluant la gestion des réservations, des clients et des véhicules.",
    link: "https://github.com/chafik101/rental-store",
    icon: <FaCar size={48} color="#0d6efd" />, // Car icon
  },
  {
    title: "Rental Cars Dashboard",
    description:
      "Tableau de bord interactif pour la gestion et le suivi des locations de voitures, avec statistiques et interface moderne construite avec React.",
    link: "https://github.com/chafik101/rentalCarsDashboard",
    icon: <FaChartLine size={48} color="#198754" />, // Chart line icon
  },
  {
    title: "Bibliothèque App",
    description:
      "Application de gestion de bibliothèque développée avec React et Spring Boot. Elle comprend une interface administrateur pour gérer les livres et les utilisateurs, ainsi qu’une interface client pour la consultation et l’emprunt des ouvrages. Le design est réalisé avec Bootstrap.",
    link: "https://github.com/Rajouane/bibliotheque-app",
    icon: <FaBook size={48} color="#6c757d" />, // Book icon
  },
  {
    title: "ManagTask",
    description:
      "Une version améliorée de l’application de gestion des tâches, avec une interface utilisateur optimisée et une meilleure organisation du code.",
    link: "https://github.com/Rajouane/ManagTask",
    icon: <FaTasks size={48} color="#6c757d" />, // Tasks icon
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
          🚀 Mes Projets
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
                    🔗 Voir sur GitHub
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
