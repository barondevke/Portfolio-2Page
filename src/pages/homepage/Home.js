import React from "react";
import Header from "../../components/Header/Header";
import { Col, Row } from "react-bootstrap";
import "../../pages/styles.css";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="background-picture" id="home-section">
        <Row className="hero-row">
          <Col lg={7} className="hellotxt">
            <p className="hero-intro">Hello, I'm Steve Baron.</p>
            <h1 className="hero-title">
              Full-stack developer building reliable web products with clean UX
              and scalable backend systems.
            </h1>
            <p className="hero-subtitle">
              I build production-ready React and Node.js applications focused on
              performance, maintainability, and business impact.
            </p>
            <a href="#projects-section" className="hero-cta">
              See my work ↓
            </a>
          </Col>
          <Col lg={5} className="hero-photo-wrap">
            <img
              src={require("./img/developerimage.jpeg")}
              className="hero-photo"
              alt="Steve Baron coding"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
