import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HiMiniBars4 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
	const [expanded, setExpanded] = useState(false);

	return (
		<Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
			<Container fluid>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					onClick={() => setExpanded(!expanded)}>
					{!expanded && <HiMiniBars4 />}
					{expanded && <RxCross1 />}
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						{/* NavLink for Home */}
						<Nav.Link as={NavLink} to="/">
							Home
						</Nav.Link>

						{/* NavLink for About */}
						<Nav.Link as={NavLink} to="/page2">
							Page2
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavMenu;
