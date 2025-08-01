import React from "react";

function Home() {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-white px-3"
      style={{
        background: "linear-gradient(135deg, #1d3557, #457b9d)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textShadow: "1px 1px 2px #000",
        minHeight: "100vh",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div
        className="container d-flex align-items-center justify-content-center flex-column flex-md-row flex-wrap gap-4"
        style={{ maxWidth: "1100px" }}
      >
        {/* النص */}
        <div className="text-center text-md-start" style={{ flex: "1 1 450px" }}>
          <h1 className="fw-bold mb-4 animate__animated animate__fadeInDown"
              style={{ fontSize: "2.5rem" }}>
            Hi, I'm Otmane Rajouane
          </h1>

          <p
            className="lead mb-4 animate__animated animate__fadeInUp"
            style={{ fontSize: "1.15rem" }}
          >
            I'm a passionate full-stack web developer experienced in building web
            applications using HTML, CSS, Bootstrap, Laravel, React, MySQL, and NoSQL.
            I'm currently learning Spring Boot to expand my backend skills further.
          </p>

          <a
            href="/projects"
            className="btn btn-lg btn-outline-light mt-3 animate__animated animate__zoomIn"
          >
            View My Projects
          </a>
        </div>

        {/* الصورة */}
        <div style={{ flex: "1 1 500px" }}>
          <img
            src={process.env.PUBLIC_URL + "/portfolio.jpg"}
            alt="Otmane Rajouane"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              objectFit: "cover",
            }}
            className="animate__animated animate__fadeInRight"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
