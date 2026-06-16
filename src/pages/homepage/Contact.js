import React from "react";
import "../../pages/styles.css";
import { Row, Col } from "react-bootstrap";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section className="contactPage" id="contactPage">
      <h1 className="hireMe">Contact Me</h1>
      <p className="contactIntro">
        I'm available for full-stack roles and freelance opportunities.
      </p>
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="contactCard">
            <div className="contactItem">
              <FontAwesomeIcon icon={faPhone} className="contactIcon" size="lg" />
              <a href="tel:+254797703639" className="contactLink">
                +254 797 703 639
              </a>
            </div>
            <div className="contactItem">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="contactIcon"
                size="lg"
              />
              <a href="mailto:ndabasteve1@gmail.com" className="contactLink">
                ndabasteve1@gmail.com
              </a>
            </div>
            <div className="contactItem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="18"
                height="18"
                fill="white"
                aria-hidden="true"
              >
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.34 107 0 82.67 0 53.9A53.87 53.87 0 0 1 53.84 0c29.53 0 53.56 24.34 53.56 53.9 0 28.77-24.03 53.1-53.56 53.1zM447.9 448h-92.68V302.4c0-34.7-.7-79.4-48.43-79.4-48.5 0-55.9 37.8-55.9 76.9V448h-92.6V148.9h88.9v40.8h1.3c12.4-23.6 42.5-48.4 87.5-48.4 93.6 0 110.8 61.5 110.8 141.3V448z" />
              </svg>
              <a
                href="https://www.linkedin.com/in/steve-baron-50154b2a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="contactLink"
              >
                LinkedIn: Steve Baron
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
