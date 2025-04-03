import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HiMiniBars4 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from "/img/ESD-light.png";
const NavMenu = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="bg-transparent navbar-dark fixed-top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home">
          <Image className="logo" src={logo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          {!expanded && <HiMiniBars4 />}
          {expanded && <RxCross1 />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* NavLink for Home */}
            <Nav.Link as={NavLink} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>

            {/* NavLink for About */}
            <Nav.Link
              as={NavLink}
              to="/page2"
              onClick={() => setExpanded(false)}
            >
              What do we do
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/page2"
              onClick={() => setExpanded(false)}
            >
              How do we do
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
