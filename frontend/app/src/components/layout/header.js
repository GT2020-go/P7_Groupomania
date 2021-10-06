import React from "react";

import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

// import { ReactComponent as Logo } from "../../Groupomania_Logos+(3)/icon-left-font.svg";

import Logo from "../../Groupomania_Logos/icon-left-font_no bg.svg";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
          <img
            src={Logo}
            width={240}
            classname="d-inline-block"
            alt="Groupomania"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
