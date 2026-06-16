import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../pages/styles.css";

const Header = () => {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <header>
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  onClick={() => scrollToSection("home-section")}
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  onClick={() => scrollToSection("about-section")}
                >
                  About
                </Nav.Link>

                <Nav.Link
                  onClick={() => scrollToSection("projects-section")}
                >
                  Projects
                </Nav.Link>

                <Nav.Link
                  onClick={() => scrollToSection("contactPage")}
                >
                  Contact Me
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
