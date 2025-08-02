import React from "react";

function Contact() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle at top left, #1d3557, #457b9d, #a8dadc)",
        padding: "2rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          padding: "3rem 2.5rem",
          maxWidth: "450px",
          width: "100%",
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
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          Contact Me
        </h2>

        <ContactItem
          icon="📧"
          label="Email"
          link="mailto:rajouaneotmane@gmail.com"
          value="rajouaneotmane@gmail.com"
        />

        <ContactItem
          icon="📞"
          label="Phone"
          link="tel:+212612345678"
          value="+212 612 345 678"
        />

        <ContactItem
          icon="🔗"
          label="LinkedIn"
          link="https://www.linkedin.com/in/otmane-rajouane"
          value="linkedin.com/in/otmane-rajouane"
        />
      </div>
    </div>
  );
}

function ContactItem({ icon, label, link, value }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1.2rem",
        color: "#f1faee",
        textDecoration: "none",
        fontSize: "1.1rem",
        fontWeight: "600",
        transition: "transform 0.3s ease, color 0.3s ease",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        padding: "0.7rem 1rem",
        borderRadius: "12px",
        backdropFilter: "blur(6px)",
        background: "rgba(255, 255, 255, 0.15)",
        flexWrap: "wrap",      // **Added for better wrapping on small screens**
        justifyContent: "center",  // center content if wraps
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#ffb703";
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(255,183,3,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#f1faee";
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
      }}
    >
      <span
        style={{
          fontSize: "1.8rem",
          display: "inline-block",
          minWidth: "30px",
          textAlign: "center",
        }}
        aria-label={label}
      >
        {icon}
      </span>
      <span>{value}</span>
    </a>
  );
}

export default Contact;
