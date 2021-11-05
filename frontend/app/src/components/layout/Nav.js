import React from "react";

import Logo from "../../Groupomania_Logos/icon-left-font_no bg.svg";

import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import { logout } from "../../actions/authActions";

const Nav = () => {
  const userName = useSelector((state) => state.auth.name); // get userName from store

  const history = useHistory();
  const handleSignOut = () => {
    //Signout the user:
    logout();
    // then send him back to login page:
    history.push("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link to="/articles" className="navbar-brand">
            <img
              src={Logo}
              width={180}
              className="d-inline-block"
              alt="Groupomania"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link
                  to="/articles"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link ">
                  Log In
                </Link>
              </li>
              <li className="nav-item">
                <Button onClick={() => handleSignOut()} className="nav-link ">
                  Sign out
                </Button>
              </li>
            </ul>
            <div className="nav-item navbar-text text-secondary">
              {userName}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
