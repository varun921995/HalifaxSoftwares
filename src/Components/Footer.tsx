import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import logo from "/img/ESD-light.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Logo */}
          <Col md={4} className="text-center text-md-start">
            <Image src={logo} alt="Logo" className="logo" />
          </Col>

          {/* Middle Column - Navbar Links (Vertical Layout) */}
          <Col md={4} className="text-center d-flex flex-column">
            <NavLink to="/" className="text-light my-1 text-decoration-none">
              Home
            </NavLink>
            <NavLink
              to="/page2"
              className="text-light my-1 text-decoration-none"
            >
              What do we do
            </NavLink>
            <NavLink
              to="/page2"
              className="text-light my-1 text-decoration-none"
            >
              How do we do
            </NavLink>
          </Col>

          {/* Right Column - Contact Details */}
          <Col md={4} className="text-center text-md-end">
            <p className="mb-1">Email: abc@gmail.com</p>
            <p className="mb-1">Contact: +1 (123) 456-7890</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <FaFacebook size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
