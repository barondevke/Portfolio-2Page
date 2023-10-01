import React from "react";
import Header from "../../components/Header/Header";
import { Image, Col, Row, Container } from "react-bootstrap";
import "../../pages/styles.css";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="background-picture">
        <Row className="px-4">
          <Col sm={6} className="hellotxt">
            {" "}
            <p style={{ color: "white" }}>Hello, I'm Steve Baron. </p>{" "}
            <h1>
              <em style={{ color: "white" }}>
                You're next full-stack developer.
              </em>
            </h1>
          </Col>
          <Col sm={6} className="helloimage">
            <div className="helloimage"></div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
