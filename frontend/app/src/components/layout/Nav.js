import React from "react";

import Logo from "../../Groupomania_Logos/icon-left-font-monochrome-white.svg";

import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import { logout } from "../../actions/authActions";

const Nav = () => {
  const auth = useSelector((state) => state.auth);
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
      <nav className="navbar navbar-expand-md fixed-top">
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
            <span class="material-icons">menu</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Button
                  type="button"
                  onClick={() => history.push("/articles")}
                  className="nav-link "
                >
                  <span class="material-icons">home</span>
                </Button>
              </li>

              {auth.id ? (
                <>
                  <li className="nav-item">
                    <Button
                      type="button"
                      onClick={() => handleSignOut()}
                      className="nav-link "
                    >
                      <span class="material-icons">logout</span>
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link" alt="Sign up">
                      Sign up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" alt="Log in">
                      Log In
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {auth.id ? (
              <>
                <div className="nav-item navbar-text text-secondary">
                  <p>
                    <span class="material-icons">account_circle</span>
                    {userName}
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
