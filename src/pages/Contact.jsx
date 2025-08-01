import React from "react";

function Contact() {
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          padding: "2rem 1.5rem",
          width: "100%",
          maxWidth: "100%",
          boxShadow:
            "0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 0 15px rgba(0,0,0,0.15)",
          color: "#f1faee",
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.18)",
        }}
      >
        <h2
          style={{
            fontWeight: "700",
            fontSize: "2rem",
            marginBottom: "1.2rem",
            letterSpacing: "1px",
            textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          Contact Me
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            lineHeight: "1.6",
          }}
        >
          I'm always open to collaboration or just a friendly hello! <br />
          Feel free to reach out to me through the platforms below.
        </p>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <a
            href="https://www.linkedin.com/in/otmane-rajouane/"
            className="btn btn-outline-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin me-2"></i>LinkedIn
          </a>
          <a
            href="https://github.com/otmanerajouane"
            className="btn btn-outline-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github me-2"></i>GitHub
          </a>
          <a
            href="mailto:otmanerajouane@gmail.com"
            className="btn btn-outline-light"
          >
            <i className="fas fa-envelope me-2"></i>Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
