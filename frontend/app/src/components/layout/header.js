import React from "react";

import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

// import { ReactComponent as Logo } from "../../Groupomania_Logos+(3)/icon-left-font.svg";

import Logo from "../../Groupomania_Logos+(3)/icon-left-font_no bg.svg";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Col xs={6}>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="100%"
              className="d-inline-block"
              alt="Groupomania"
            />
          </Navbar.Brand>
        </Col>
        <Col></Col>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#posts">Posts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
