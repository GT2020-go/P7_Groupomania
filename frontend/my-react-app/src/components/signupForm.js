import React, { useState, useEffect } from "react";
import Axios from "axios";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpUser = () => {
    Axios.post("/auth/signup", {
      name: name,
      email: email,
      password: password,
    })
      .then(() => {
        alert("success");
      })
      .catch((err) => alert(err));
  };

  return (
    <form type="submit">
      <label for="name">Name: </label>
      <input
        type="text"
        id="name"
        className="form-control"
        placeholder="Enter your name..."
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label for="email">Email: </label>
      <input
        type="text"
        id="email"
        className="form-control"
        placeholder="Enter your email..."
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label for="password1">Password: </label>
      <input
        type="text"
        id="password1"
        className="form-control"
        placeholder="Enter your password..."
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="Submit" value="Submit" onClick={signUpUser()}>
        SignUp
      </button>
    </form>
  );
};

export default SignUpForm;
