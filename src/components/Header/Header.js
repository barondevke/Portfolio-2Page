import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "../../pages/styles.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { scroller } from "react-scroll";
const Header = () => {
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
                  onClick={() =>
                    scroller.scrollTo("background-picture", {
                      smooth: true,
                      offset: -70,
                      duration: 500,
                    })
                  }
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  onClick={() =>
                    scroller.scrollTo("Projects", {
                      smooth: true,
                      offset: -20,
                      duration: 100,
                    })
                  }
                >
                  Projects
                </Nav.Link>

                <Nav.Link
                  onClick={() =>
                    scroller.scrollTo("contactPage", {
                      smooth: true,
                      offset: -30,
                      duration: 100,
                    })
                  }
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
