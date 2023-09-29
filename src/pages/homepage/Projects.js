import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Image, Col, Row, Container, NavLink } from "react-bootstrap";
import "../../pages/styles.css";

const Projects = () => {
  return (
    <div className="Projectscontainer">
      <h1>Projects</h1>
      <Row className="projectRow">
        <Col sm={6}>
          <Card style={{ width: "40rem" }}>
            <Card.Img
              variant="top"
              src={require("./img/Screenshot 2023-09-29 105845.png")}
            />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>Click below to visit the deployed website.</Card.Text>
              <a href="https://eurekahealthsolutions.netlify.app/">
                <Button variant="primary">Visit website</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} className="project-description">
          {" "}
          <h2> Eureka Health frontend website.</h2>
          <br />{" "}
          <p className="project-Info">
            This project uses React to build a simple informative website that
            clients can use to understand the business and get necessary
            information details.
          </p>{" "}
        </Col>
      </Row>
      <hr />

      <Row className="projectRow">
        <Col sm={6}>
          <Card style={{ width: "40rem" }}>
            <Card.Img
              variant="top"
              src={require("./img/Screenshot (32).png")}
            />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>This hasn't been deployed yet.</Card.Text>
              <Button variant="primary">Unavailable</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} className="project-description">
          {" "}
          <h2> AdInfinte website</h2>
          <br />{" "}
          <p className="project-Info">
            This project utilizes various technologies. This includes React for
            the frontend and Node.js for the backend. For the database I used
            MongoDB which is a great solution for storing and manipulating data.
          </p>{" "}
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
