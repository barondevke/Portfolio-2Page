import React from "react";
import "../../pages/styles.css";

const About = () => {
  return (
    <section id="about-section" className="aboutSection">
      <h2 className="aboutTitle">About Me</h2>
      <p className="aboutText">
        I am a full-stack developer with a strong backend focus, building web
        applications that solve real business and user problems.
      </p>
      <p className="aboutText">
        My experience includes React, Node.js, SQL, Redis, and API-driven
        systems with authentication, data modeling, and performance
        optimization.
      </p>
      <p className="aboutText">
        I care about writing clean, maintainable code and shipping products
        that are stable, scalable, and easy for teams to extend.
      </p>
      <p className="aboutText">
        I'm actively looking for full-stack roles where I can contribute from day one
        where I can contribute quickly and grow with a strong engineering team.
      </p>
    </section>
  );
};

export default About;
