// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";

import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

// import { connect } from "react-redux";
// import { register } from "../actions/auth";

// import Groupomania's logo:
import LogoSolo from "../../Groupomania_Logos/icon.svg";

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

class LoginForm extends React.Component {
  render() {
    return (
      <form className="form-login">
        <img
          className="mb-4 mx-auto d-block"
          src={LogoSolo}
          alt="Logo of Groupomania"
          width={72}
          height={72}
        />
        <h3 className="mb-3 font-weight-normal text-center">
          Welcome <br />
          Please sign in
        </h3>
        <p className="text-center">
          Not registered yet ? <a href="#">Signup</a> here
        </p>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="@"
          required
          autofocus
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="*****"
          required
        />
        <button
          className="btn btn-lg btn-primary btn-block mx-auto d-block"
          type="submit"
        >
          Login
        </button>
        <p className="mt-5 mb-3 text-muted text-center">© 2021</p>
      </form>
    );
  }
}

export default LoginForm;
